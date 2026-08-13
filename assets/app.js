/* ==========================================================================
   Algebridge Library — client behaviour
   Search, filters, explanation tabs, and a saved/learned list kept entirely
   in localStorage. No network calls, no accounts, no tracking.
   ========================================================================== */

(function () {
  "use strict";

  var SAVED_KEY = "algebridge-library:saved";
  var LEARNED_KEY = "algebridge-library:learned";

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
        window.localStorage.setItem("algebridge-library:depth", wantComplex ? "complex" : "simple");
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
      if (window.localStorage.getItem("algebridge-library:depth") === "complex") select(true);
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
    var counter = document.querySelector("[data-result-count]");
    var levelBtn = document.querySelector("[data-level-cycle]");
    var LEVELS = ["all", "Intro", "Core", "Advanced"];

    var state = { query: "", course: "all", level: "all" };

    function apply() {
      var q = state.query.trim().toLowerCase();
      var words = q ? q.split(/\s+/) : [];
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

      if (empty) empty.hidden = shown !== 0;
      if (counter) counter.textContent = shown === 1 ? "1 topic" : shown + " topics";
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.query = searchInput.value;
        apply();
      });
      // Escape clears the field rather than only blurring it.
      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          searchInput.value = "";
          state.query = "";
          apply();
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
      });
    });

    if (levelBtn) {
      levelBtn.addEventListener("click", function () {
        var next = LEVELS[(LEVELS.indexOf(state.level) + 1) % LEVELS.length];
        state.level = next;
        levelBtn.textContent = "Level: " + (next === "all" ? "All" : next);
        levelBtn.classList.toggle("is-active", next !== "all");
        apply();
      });
    }

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
