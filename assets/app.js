/* ==========================================================================
   Algebridge Directory — client behaviour
   Search, filters, explanation tabs, and a saved/learned list kept entirely
   in localStorage. No network calls, no accounts, no tracking.
   ========================================================================== */

(function () {
  "use strict";

  var SAVED_KEY = "algebridge-directory:saved";
  var LEARNED_KEY = "algebridge-directory:learned";

  /* ---- storage ---------------------------------------------------------- */

  function read(key) {
    try {
      var raw = window.localStorage.getItem(key);
      var list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (err) {
      // Private browsing or disabled storage: degrade to an in-memory list.
      return [];
    }
  }

  function write(key, list) {
    try {
      window.localStorage.setItem(key, JSON.stringify(list));
    } catch (err) {
      /* nothing we can do; the UI still reflects the change for this page */
    }
  }

  function toggle(key, slug) {
    var list = read(key);
    var i = list.indexOf(slug);
    if (i === -1) list.push(slug);
    else list.splice(i, 1);
    write(key, list);
    return i === -1;
  }

  /* ---- header badge ----------------------------------------------------- */

  function refreshBadge() {
    var count = read(SAVED_KEY).length;
    var badges = document.querySelectorAll("[data-saved-count]");
    for (var i = 0; i < badges.length; i++) {
      badges[i].textContent = String(count);
      badges[i].classList.toggle("is-visible", count > 0);
    }
  }

  /* ---- save / learned buttons ------------------------------------------- */

  function syncButtons() {
    var saved = read(SAVED_KEY);
    var learned = read(LEARNED_KEY);

    document.querySelectorAll("[data-save]").forEach(function (btn) {
      var on = saved.indexOf(btn.getAttribute("data-save")) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      var label = btn.querySelector("[data-save-label]");
      if (label) label.textContent = on ? "Saved" : "Save for later";
    });

    document.querySelectorAll("[data-learned]").forEach(function (btn) {
      var on = learned.indexOf(btn.getAttribute("data-learned")) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      var label = btn.querySelector("[data-learned-label]");
      if (label) label.textContent = on ? "Learned" : "Mark as learned";
    });

    refreshBadge();
  }

  document.addEventListener("click", function (event) {
    var saveBtn = event.target.closest ? event.target.closest("[data-save]") : null;
    if (saveBtn) {
      event.preventDefault();
      toggle(SAVED_KEY, saveBtn.getAttribute("data-save"));
      syncButtons();
      if (document.getElementById("saved-grid")) renderSavedPage();
      return;
    }
    var learnBtn = event.target.closest ? event.target.closest("[data-learned]") : null;
    if (learnBtn) {
      event.preventDefault();
      toggle(LEARNED_KEY, learnBtn.getAttribute("data-learned"));
      syncButtons();
      if (document.getElementById("saved-grid")) renderSavedPage();
    }
  });

  /* ---- explanation tabs -------------------------------------------------- */

  var tabSimple = document.getElementById("tab-simple");
  var tabComplex = document.getElementById("tab-complex");
  if (tabSimple && tabComplex) {
    var panelSimple = document.getElementById("panel-simple");
    var panelComplex = document.getElementById("panel-complex");

    var select = function (wantComplex) {
      tabSimple.setAttribute("aria-selected", wantComplex ? "false" : "true");
      tabComplex.setAttribute("aria-selected", wantComplex ? "true" : "false");
      panelSimple.hidden = wantComplex;
      panelComplex.hidden = !wantComplex;
      try {
        window.localStorage.setItem("algebridge-directory:depth", wantComplex ? "complex" : "simple");
      } catch (err) {
        /* preference simply will not persist */
      }
    };

    tabSimple.addEventListener("click", function () {
      select(false);
    });
    tabComplex.addEventListener("click", function () {
      select(true);
    });

    // Remember which depth the reader prefers across topics.
    try {
      if (window.localStorage.getItem("algebridge-directory:depth") === "complex") select(true);
    } catch (err) {
      /* ignore */
    }
  }

  /* ---- browse filters ---------------------------------------------------- */

  var grid = document.getElementById("topic-grid");
  if (grid) {
    var searchInput = document.getElementById("topic-search");
    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-topic]"));
    var empty = grid.querySelector("[data-empty]");
    var counters = document.querySelectorAll("[data-result-count]");
    var levelSelect = document.querySelector("[data-level-select]");
    var sortSelect = document.querySelector("[data-sort]");
    var resetButtons = document.querySelectorAll("[data-reset]");
    var emptyTitle = document.querySelector("[data-empty-title]");
    var emptyBody = document.querySelector("[data-empty-body]");

    var state = { query: "", course: "all", level: "all", sort: "curriculum" };

    var courseLabel = function (id) {
      var btn = document.querySelector('[data-filter-course="' + id + '"]');
      return btn ? btn.textContent.trim() : id;
    };

    var num = function (card, attr) {
      return parseInt(card.getAttribute(attr), 10) || 0;
    };

    /**
     * Reorders the cards in the DOM. Ties fall back to curriculum order so the
     * result is stable and predictable rather than dependent on sort internals.
     */
    function sortCards() {
      var mode = state.sort;
      if (mode === "curriculum" && grid.getAttribute("data-sorted") === "curriculum") return;

      var ordered = cards.slice().sort(function (a, b) {
        switch (mode) {
          case "az":
            return a.getAttribute("data-title").localeCompare(b.getAttribute("data-title"));
          case "za":
            return b.getAttribute("data-title").localeCompare(a.getAttribute("data-title"));
          case "easiest":
            return num(a, "data-rank") - num(b, "data-rank") || num(a, "data-order") - num(b, "data-order");
          case "hardest":
            return num(b, "data-rank") - num(a, "data-rank") || num(a, "data-order") - num(b, "data-order");
          default:
            return num(a, "data-order") - num(b, "data-order");
        }
      });

      var frag = document.createDocumentFragment();
      ordered.forEach(function (card) {
        frag.appendChild(card);
      });
      // Insert before the empty state so it stays the last child.
      grid.insertBefore(frag, empty || null);
      grid.setAttribute("data-sorted", mode);
    }

    function describeFilters() {
      var bits = [];
      if (state.course !== "all") bits.push(courseLabel(state.course));
      if (state.level !== "all") bits.push(state.level + " level");
      if (state.query.trim()) bits.push('"' + state.query.trim() + '"');
      return bits;
    }

    function apply() {
      var words = state.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;

      cards.forEach(function (card) {
        var haystack = card.getAttribute("data-search") || "";
        var matchesQuery = words.every(function (w) {
          return haystack.indexOf(w) !== -1;
        });
        var matchesCourse =
          state.course === "all" || card.getAttribute("data-course") === state.course;
        var matchesLevel =
          state.level === "all" || card.getAttribute("data-level") === state.level;
        var visible = matchesQuery && matchesCourse && matchesLevel;
        card.hidden = !visible;
        if (visible) shown++;
      });

      sortCards();

      if (empty) empty.hidden = shown !== 0;
      var label = shown === 1 ? "1 topic" : shown + " topics";
      for (var i = 0; i < counters.length; i++) counters[i].textContent = label;

      var active = describeFilters();
      for (var j = 0; j < resetButtons.length; j++) {
        if (resetButtons[j].hasAttribute("hidden") === (active.length > 0)) {
          if (active.length) resetButtons[j].removeAttribute("hidden");
          else resetButtons[j].setAttribute("hidden", "");
        }
      }

      // Say *why* nothing matched. Some combinations are genuinely empty —
      // there are no Advanced topics in Pre-Algebra, for instance.
      if (shown === 0 && emptyTitle && emptyBody) {
        if (state.course !== "all" && state.level !== "all" && !words.length) {
          emptyTitle.textContent =
            "No " + state.level + " topics in " + courseLabel(state.course);
          emptyBody.textContent =
            "That combination is empty — " +
            courseLabel(state.course) +
            " has no topics at " +
            state.level +
            " level. Try another level, or clear the filters.";
        } else {
          emptyTitle.textContent = "No topics match";
          emptyBody.textContent =
            "Nothing matches " + active.join(" + ") + ". Try a shorter search or clear the filters.";
        }
      }
    }

    /**
     * Bring the results into view, but only when they are off-screen. This is
     * an enhancement, not the feedback mechanism — the result count next to
     * the controls updates either way, so the page still responds visibly if
     * scrolling is unavailable or the user prefers reduced motion.
     */
    function revealResults() {
      var top = grid.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.5 && top >= 0) return;
      var y = top + window.pageYOffset - 88; // clear the sticky header
      var calm =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      try {
        window.scrollTo({ top: y, behavior: calm ? "auto" : "smooth" });
      } catch (err) {
        window.scrollTo(0, y); // older browsers reject the options object
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.query = searchInput.value;
        apply();
      });
      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          searchInput.value = "";
          state.query = "";
          apply();
        }
        // Enter jumps to the results rather than submitting anything.
        if (event.key === "Enter") {
          event.preventDefault();
          revealResults();
        }
      });
    }

    document.querySelectorAll("[data-filter-course]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.course = btn.getAttribute("data-filter-course");
        document.querySelectorAll("[data-filter-course]").forEach(function (other) {
          other.classList.toggle("is-active", other === btn);
        });
        apply();
        revealResults();
      });
    });

    if (levelSelect) {
      levelSelect.addEventListener("change", function () {
        state.level = levelSelect.value;
        apply();
        revealResults();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        state.sort = sortSelect.value;
        apply();
        revealResults();
      });
    }

    resetButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.query = "";
        state.course = "all";
        state.level = "all";
        if (searchInput) searchInput.value = "";
        if (levelSelect) levelSelect.value = "all";
        document.querySelectorAll("[data-filter-course]").forEach(function (other) {
          other.classList.toggle(
            "is-active",
            other.getAttribute("data-filter-course") === "all"
          );
        });
        apply();
      });
    });

    grid.setAttribute("data-sorted", "curriculum");
    apply();
  }

  /* ---- saved page -------------------------------------------------------- */

  var topicIndex = null;

  function cardHtml(topic) {
    var thumb = topic.thumb
      ? '<a class="thumb" href="/topic/' +
        topic.slug +
        '/"><img src="' +
        topic.thumb +
        '" alt="" loading="lazy">' +
        (topic.duration ? '<span class="duration">' + topic.duration + "</span>" : "") +
        "</a>"
      : '<a class="thumb" href="/topic/' + topic.slug + '/"></a>';

    return (
      '<article class="topic-card">' +
      thumb +
      '<div class="card-body">' +
      '<div class="tag-row"><span class="tag tag-course">' +
      topic.course +
      '</span><span class="tag tag-level">' +
      topic.level +
      "</span></div>" +
      '<h3><a href="/topic/' +
      topic.slug +
      '/">' +
      topic.title +
      "</a></h3>" +
      '<p class="card-summary">' +
      topic.summary +
      "</p>" +
      '<dl class="meta-grid">' +
      "<div><dt>Unit</dt><dd>" +
      topic.unit +
      "</dd></div>" +
      "<div><dt>Video</dt><dd>" +
      (topic.duration || "—") +
      "</dd></div>" +
      "</dl>" +
      '<div class="card-actions">' +
      '<a class="btn btn-secondary" href="/topic/' +
      topic.slug +
      '/">View topic</a>' +
      '<button class="icon-btn" type="button" data-save="' +
      topic.slug +
      '" aria-pressed="true" aria-label="Remove ' +
      topic.title +
      '" title="Remove from saved">' +
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 4h12v16l-6-4-6 4z"/></svg>' +
      "</button>" +
      "</div></div></article>"
    );
  }

  function fill(gridId, emptyAttr, totalAttr, slugs) {
    var target = document.getElementById(gridId);
    if (!target) return;
    var emptyBox = target.querySelector("[" + emptyAttr + "]");
    var total = document.querySelector("[" + totalAttr + "]");

    var picked = slugs
      .map(function (slug) {
        for (var i = 0; i < topicIndex.length; i++) {
          if (topicIndex[i].slug === slug) return topicIndex[i];
        }
        return null;
      })
      .filter(Boolean);

    // Rebuild the grid, keeping the empty-state node so it can be reused.
    Array.prototype.slice.call(target.children).forEach(function (child) {
      if (!child.hasAttribute(emptyAttr)) target.removeChild(child);
    });

    if (emptyBox) emptyBox.hidden = picked.length > 0;
    if (total) total.textContent = picked.length === 1 ? "1 topic" : picked.length + " topics";

    picked.forEach(function (topic) {
      var holder = document.createElement("div");
      holder.innerHTML = cardHtml(topic);
      target.insertBefore(holder.firstChild, emptyBox || null);
    });
  }

  function renderSavedPage() {
    if (!topicIndex) return;
    fill("saved-grid", "data-empty-saved", "data-saved-total", read(SAVED_KEY));
    fill("learned-grid", "data-empty-learned", "data-learned-total", read(LEARNED_KEY));
    syncButtons();
  }

  if (document.getElementById("saved-grid")) {
    fetch("/topics.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        topicIndex = data;
        renderSavedPage();
      })
      .catch(function () {
        var target = document.getElementById("saved-grid");
        if (target) {
          target.innerHTML =
            '<div class="empty-state"><h3>Could not load your saved topics</h3>' +
            "<p>The topic index failed to load. Refreshing usually fixes it.</p></div>";
        }
      });
  }

  syncButtons();
})();
