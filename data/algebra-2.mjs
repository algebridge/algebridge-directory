/**
 * Algebra 2 curriculum for Algebridge Directory.
 *
 * Convention (same as the other course files):
 *   simple  — no jargon, the version you say out loud to someone stuck
 *   complex — the precise version, with names, general forms and the reasons
 *   ~text~  — renders as an inline maths chip
 *
 * The AlgeBridge platform's practice engine currently covers Algebra 1 skills,
 * so most Algebra 2 topics have `practice: null` and link to the platform
 * generally. Deep links are only set where a genuinely matching skill exists.
 */

const units = [
  {
    id: "a2-functions",
    title: "Functions & Transformations",
    blurb:
      "The parent function library and the four moves that generate every other graph from it.",
    topics: [
      {
        slug: "parent-functions",
        title: "Parent Functions",
        summary: "The nine base graphs worth knowing by heart.",
        level: "Core",
        keyIdea: "Every graph you meet is a transformed version of a small set of originals.",
        simple: `Rather than memorising hundreds of graphs, learn a handful of originals and how to move them.

The core set:
- Linear: y = x, a straight diagonal
- Quadratic: y = x², a U-shape
- Cubic: y = x³, an S-shape through the origin
- Absolute value: y = |x|, a V
- Square root: y = √x, half a sideways parabola
- Rational: y = 1/x, two curves with the axes as asymptotes
- Exponential: y = 2ˣ, flat then explosive
- Logarithmic: y = log x, the exponential reflected

For each, know its shape, domain, range and whether it passes through the origin. Everything after this unit is one of these shifted, stretched or flipped.`,
        complex: `A parent function is the simplest member of a family, with all parameters at their neutral values. Recognising the family determines the domain, range, end behaviour, symmetry and asymptotes before any algebra.

Key facts worth having as reflexes: ~y = x²~ and ~y = |x|~ are even (symmetric about the y-axis) with range ~[0, ∞)~; ~y = x³~ and ~y = 1/x~ are odd (symmetric about the origin); ~y = √x~ has domain ~[0, ∞)~; ~y = 1/x~ has domain and range excluding 0, with asymptotes at both axes; ~y = bˣ~ has range ~(0, ∞)~ and horizontal asymptote ~y = 0~; ~y = log_b x~ has domain ~(0, ∞)~ and vertical asymptote ~x = 0~.

Exponential and logarithmic functions are inverses, so their graphs are reflections across ~y = x~ — which is why one has a horizontal asymptote exactly where the other has a vertical one. The same reflection relates ~y = x²~ (restricted to ~x ≥ 0~) and ~y = √x~.`,
        example: {
          prompt: "Without graphing, state the domain and range of y = √x and y = 1/x.",
          steps: [
            "√x needs a non-negative radicand: domain [0, ∞).",
            "Its outputs are the principal roots: range [0, ∞).",
            "1/x is undefined at x = 0, and never outputs 0.",
          ],
          answer: "√x: domain and range both [0, ∞). 1/x: domain and range both (−∞,0) ∪ (0,∞).",
        },
        mistakes: [
          "Giving the range of y = x² as all reals.",
          "Forgetting that 1/x never actually reaches zero.",
        ],
        video: "parent functions and their graphs algebra 2",
        videoAlt: ["parent function library graphs domain range"],
        practice: { unit: "functions", skill: "function-graphs" },
        tags: ["parent functions", "graphs", "families"],
      },
      {
        slug: "function-transformations",
        title: "Transformations of Functions",
        summary: "Shifts, stretches and reflections — and why horizontal ones feel backwards.",
        level: "Advanced",
        keyIdea: "y = a·f(b(x − h)) + k: h and k shift, a and b stretch.",
        simple: `Every change to a function's equation moves its graph in a predictable way.

Outside the function (affecting outputs) behaves as you expect:
- f(x) + k shifts up k
- a·f(x) stretches vertically by a; a negative a flips it upside down

Inside the function (affecting inputs) behaves backwards:
- f(x − h) shifts *right* h, not left
- f(bx) squeezes horizontally by 1/b
- f(−x) flips it left-right

Why backwards? Because f(x − 3) has to wait until x reaches 3 to do what f did at 0. The graph is delayed, so it moves right.

Order matters: stretch and reflect before shifting.`,
        complex: `Write a transformed function as ~g(x) = a·f(b(x − h)) + k~.

Vertical transformations act on the output and compose in the natural order: multiply by a, then add k. Horizontal transformations act on the input and are therefore *inverted*, both in effect and in order. To reach a given output, the input must be pre-processed, so a subtraction inside produces a rightward shift and a coefficient b produces a compression by ~1/b~.

Formally, ~(x, y)~ on ~f~ maps to ~(x/b + h, ay + k)~ on ~g~, which is the reliable way to transform specific points such as a vertex or an endpoint.

Sign placement matters: ~−f(x)~ reflects across the x-axis while ~f(−x)~ reflects across the y-axis. Care is needed with an expression like ~f(2x − 6)~, which must be factored to ~f(2(x − 3))~ before the shift can be read as 3 rather than 6.

These rules apply to every family identically, which is what makes the parent-function approach efficient.`,
        example: {
          prompt: "Describe the transformations in g(x) = −2√(x + 3) − 1 and state the starting point.",
          steps: [
            "Inside: x + 3 = x − (−3), so shift 3 left.",
            "a = −2: vertical stretch by 2 and reflection across the x-axis.",
            "k = −1: shift down 1.",
            "Parent √x starts at (0,0), which maps to (−3, −1).",
          ],
          answer: "Left 3, stretched by 2, flipped vertically, down 1. Starting point (−3, −1).",
        },
        mistakes: [
          "Reading f(x + 3) as a shift to the right.",
          "Applying the vertical shift before the stretch, which misplaces the graph.",
        ],
        video: "transformations of functions shifts stretches reflections",
        videoAlt: ["function transformations algebra 2 explained"],
        practice: null,
        tags: ["transformations", "shifts", "stretches"],
      },
      {
        slug: "piecewise-functions",
        title: "Piecewise Functions",
        summary: "Different rules on different intervals, and where the dots go.",
        level: "Advanced",
        keyIdea: "Use the rule whose condition your input satisfies.",
        simple: `A piecewise function uses different formulas on different parts of the domain.

To evaluate, first find which interval your input falls in, then use that rule. For a function that is 2x + 1 when x < 3 and x² when x ≥ 3, evaluating at x = 5 uses x², giving 25.

To graph, draw each piece only over its own interval.

At the boundaries, use a closed dot where the endpoint is included (≤ or ≥) and an open dot where it is not (< or >). Each x-value gets exactly one closed dot, or it would not be a function.

Absolute value is secretly piecewise: |x| is x when x ≥ 0 and −x when x < 0.`,
        complex: `A piecewise function is defined by cases whose domains partition the intended domain — they must not overlap, or the definition would assign two outputs to one input.

Evaluation requires checking the condition first; substituting into the wrong branch is the dominant error and is invisible in the arithmetic.

Continuity at a boundary c requires the one-sided values to agree: ~lim_{x→c⁻} f(x) = lim_{x→c⁺} f(x) = f(c)~. In Algebra 2 this is checked by substituting c into both surrounding rules and comparing. A mismatch produces a jump discontinuity, which is a legitimate function, not an error — step functions and tax brackets are modelled exactly this way.

Absolute value functions convert to piecewise form by splitting at the zero of the inner expression, which is what makes ~|2x − 6|~ graphable as a V with vertex at ~x = 3~ and is the standard technique for solving equations that mix absolute values with other terms.`,
        example: {
          prompt: "For f(x) = { x + 4 if x < 2 ; x² − 1 if x ≥ 2 }, find f(0), f(2), and say whether it is continuous at x = 2.",
          steps: [
            "0 < 2, so use x + 4: f(0) = 4.",
            "2 ≥ 2, so use x² − 1: f(2) = 3.",
            "Left-hand approach: 2 + 4 = 6. Right-hand value: 3.",
            "6 ≠ 3, so the graph jumps.",
          ],
          answer: "f(0) = 4, f(2) = 3; not continuous at x = 2 (open dot at (2,6), closed at (2,3)).",
        },
        mistakes: [
          "Evaluating with the wrong branch at a boundary value.",
          "Drawing two closed dots at the same x, which breaks the function definition.",
        ],
        video: "piecewise functions graphing evaluating explained",
        videoAlt: ["piecewise function graph domain intervals"],
        practice: { unit: "absolute-value-piecewise", skill: "piecewise-functions" },
        tags: ["piecewise", "graphing", "continuity"],
      },
      {
        slug: "composition-of-functions",
        title: "Composition of Functions",
        summary: "Feeding one function's output into another, and why order matters.",
        level: "Advanced",
        keyIdea: "(f∘g)(x) = f(g(x)) — work inside out.",
        simple: `Composing means chaining: run x through g, then feed the result into f.

Written (f∘g)(x) or f(g(x)). Always work from the inside out.

With f(x) = x + 3 and g(x) = 2x:
f(g(x)) = f(2x) = 2x + 3
g(f(x)) = g(x + 3) = 2x + 6

Different answers. Composition is not commutative, and swapping the order is the most common error.

For a numerical value, evaluate the inner function first. f(g(5)) means find g(5), then apply f to that number.`,
        complex: `Composition ~(f∘g)(x) = f(g(x))~ applies g first despite f being written first, a notational quirk worth stating explicitly because it drives most errors.

The domain of ~f∘g~ is the set of x in the domain of g whose image ~g(x)~ lies in the domain of f. Both constraints apply, and the second is often forgotten: for ~f(x) = √x~ and ~g(x) = x − 5~, the composition ~√(x − 5)~ requires ~x ≥ 5~ even though g alone accepts all reals.

Composition is associative but not commutative. The special case ~f(g(x)) = g(f(x)) = x~ for all x characterises inverse functions, which is the standard verification method for an inverse.

Decomposition — writing a complicated function as a composition of simpler ones — is the reverse skill, and is required for the chain rule in calculus: recognising ~(3x + 1)⁵~ as ~f(g(x))~ with ~f(u) = u⁵~ and ~g(x) = 3x + 1~.`,
        example: {
          prompt: "For f(x) = x² − 1 and g(x) = x + 4, find f(g(2)) and g(f(x)).",
          steps: [
            "Inner first: g(2) = 6.",
            "f(6) = 36 − 1 = 35.",
            "g(f(x)) = g(x² − 1) = (x² − 1) + 4.",
          ],
          answer: "f(g(2)) = 35 and g(f(x)) = x² + 3",
        },
        mistakes: [
          "Applying f first in f(g(x)).",
          "Multiplying the two functions instead of composing them.",
        ],
        video: "composition of functions explained algebra 2",
        videoAlt: ["composite functions f(g(x)) examples"],
        practice: null,
        tags: ["composition", "functions"],
      },
      {
        slug: "inverse-functions",
        title: "Inverse Functions",
        summary: "Undoing a function by swapping x and y.",
        level: "Advanced",
        keyIdea: "Swap x and y, then solve for y.",
        simple: `An inverse function reverses what the original did. If f turns 3 into 10, then f⁻¹ turns 10 back into 3.

To find one:
1. Write y = f(x).
2. Swap x and y.
3. Solve for y.
4. Write the result as f⁻¹(x).

For f(x) = 2x + 5: swap to get x = 2y + 5, solve to get y = (x − 5)/2.

The graphs are mirror images across the line y = x.

Important: f⁻¹ does not mean 1/f. That superscript is notation for "inverse," not an exponent.

Only one-to-one functions have inverses. y = x² does not, unless you restrict it to x ≥ 0.`,
        complex: `The inverse ~f⁻¹~ satisfies ~f⁻¹(f(x)) = x~ and ~f(f⁻¹(x)) = x~ on the appropriate domains, and this composition test is the definitive verification.

A function has an inverse exactly when it is one-to-one (injective), which the horizontal line test detects graphically. Non-injective functions can be inverted on a restricted domain — the convention that ~√x~ is the inverse of ~x²~ depends on restricting to ~x ≥ 0~, and the same device defines the inverse trigonometric functions.

Domain and range swap: ~dom(f⁻¹) = ran(f)~ and ~ran(f⁻¹) = dom(f)~. This is the fastest way to state the inverse's domain without re-deriving it, and it explains why the exponential and logarithm exchange their asymptotes.

The reflection across ~y = x~ is the geometric consequence of swapping coordinates, so any point ~(a, b)~ on f corresponds to ~(b, a)~ on ~f⁻¹~.

The notation clash with reciprocals is genuinely unfortunate: ~f⁻¹(x)~ is the inverse function while ~[f(x)]⁻¹~ is the reciprocal, and they are almost never equal.`,
        example: {
          prompt: "Find the inverse of f(x) = (x − 1)/3 and verify it.",
          steps: [
            "y = (x − 1)/3, then swap: x = (y − 1)/3.",
            "Multiply by 3: 3x = y − 1.",
            "Add 1: y = 3x + 1.",
            "Verify: f(3x + 1) = ((3x + 1) − 1)/3 = x ✓",
          ],
          answer: "f⁻¹(x) = 3x + 1",
        },
        mistakes: [
          "Interpreting f⁻¹(x) as 1/f(x).",
          "Claiming an inverse exists for a function that fails the horizontal line test.",
        ],
        video: "inverse functions how to find explained algebra 2",
        videoAlt: ["finding inverse of a function swap x and y"],
        practice: null,
        tags: ["inverse", "one-to-one", "reflection"],
      },
    ],
  },
  {
    id: "a2-complex-quadratics",
    title: "Complex Numbers & Quadratics",
    blurb:
      "Extending the number system so every quadratic has solutions, and finishing the quadratic toolkit.",
    topics: [
      {
        slug: "imaginary-and-complex-numbers",
        title: "Imaginary & Complex Numbers",
        summary: "Inventing i so that √(−1) has an answer.",
        level: "Core",
        keyIdea: "i = √(−1), so i² = −1.",
        simple: `No real number squares to a negative, so mathematicians defined a new one: i, with i² = −1.

That makes √(−25) = 5i, since (5i)² = 25i² = −25.

A complex number combines a real and an imaginary part: a + bi. In 3 − 4i, the real part is 3 and the imaginary part is −4.

Powers of i cycle every four: i¹ = i, i² = −1, i³ = −i, i⁴ = 1, then it repeats. To find a high power, divide the exponent by 4 and use the remainder.

Add and subtract by combining like parts. Multiply with FOIL, then replace i² with −1.`,
        complex: `The imaginary unit is defined by ~i² = −1~, and ℂ is the set ~{a + bi : a, b ∈ ℝ}~. This extension makes ℂ algebraically closed: every non-constant polynomial has a root, which is the Fundamental Theorem of Algebra.

Powers of i are periodic with period 4, so ~i^n = i^{n mod 4}~.

Arithmetic follows the field axioms with the single extra rule ~i² = −1~. Multiplication uses FOIL and then that substitution.

Division uses the complex conjugate ~a − bi~. Since ~(a + bi)(a − bi) = a² + b²~ is real and non-negative, multiplying numerator and denominator by the conjugate rationalises the denominator — structurally identical to rationalising ~√~ denominators with conjugates.

One caution: the identity ~√a·√b = √(ab)~ requires non-negative arguments. Writing ~√(−4)·√(−9) = √36 = 6~ is wrong; converting to ~2i·3i = 6i² = −6~ first is the correct route. Always extract i before multiplying radicals of negatives.`,
        example: {
          prompt: "Simplify (3 + 2i)(4 − 5i) and find i²³.",
          steps: [
            "FOIL: 12 − 15i + 8i − 10i².",
            "Replace i² with −1: 12 − 7i + 10.",
            "Combine: 22 − 7i.",
            "23 ÷ 4 leaves remainder 3, so i²³ = i³ = −i.",
          ],
          answer: "22 − 7i, and i²³ = −i",
        },
        mistakes: [
          "Leaving i² in an answer instead of replacing it with −1.",
          "Multiplying √(−4)·√(−9) as √36.",
        ],
        video: "imaginary and complex numbers explained algebra 2",
        videoAlt: ["complex numbers operations powers of i"],
        practice: null,
        tags: ["complex numbers", "imaginary", "i"],
      },
      {
        slug: "quadratics-with-complex-roots",
        title: "Quadratics with Complex Roots",
        summary: "What a negative discriminant means, and why the roots come in pairs.",
        level: "Advanced",
        keyIdea: "A negative discriminant gives conjugate complex roots.",
        simple: `In Algebra 1, a negative discriminant meant "no solution." With complex numbers, it means two complex solutions instead.

For x² + 2x + 5 = 0: b² − 4ac = 4 − 20 = −16.

Use the quadratic formula as usual, then extract i:
x = (−2 ± √(−16))/2 = (−2 ± 4i)/2 = −1 ± 2i.

Complex roots always arrive in conjugate pairs — if −1 + 2i is a solution, so is −1 − 2i. You never get just one.

On the graph, a negative discriminant means the parabola never touches the x-axis. The solutions are real mathematics, they simply are not visible as x-intercepts.`,
        complex: `For real coefficients, the discriminant ~Δ = b² − 4ac~ classifies the roots: ~Δ > 0~ two distinct real, ~Δ = 0~ one repeated real, ~Δ < 0~ two non-real conjugates ~p ± qi~.

The conjugate pairing is guaranteed by the Complex Conjugate Root Theorem: if a polynomial has real coefficients and ~z~ is a root, then ~z̄~ is also a root. This is why non-real roots always occur in pairs and why any real polynomial of odd degree must have at least one real root.

Vieta's formulas continue to hold over ℂ: the sum of roots is ~−b/a~ and the product ~c/a~. For ~−1 ± 2i~ the sum is −2 and the product is ~(−1)² + 2² = 5~, matching ~x² + 2x + 5~ — a fast verification that needs no re-substitution.

Graphically, ~Δ < 0~ means the parabola misses the x-axis entirely. The roots are still meaningful: in engineering they describe oscillating rather than decaying behaviour, which is why complex roots are read as a physical result and not as failure.`,
        example: {
          prompt: "Solve 2x² − 4x + 5 = 0.",
          steps: [
            "a = 2, b = −4, c = 5; Δ = 16 − 40 = −24.",
            "x = (4 ± √(−24))/4.",
            "√(−24) = 2i√6.",
            "x = (4 ± 2i√6)/4 = 1 ± (i√6)/2.",
          ],
          answer: "x = 1 ± (√6/2)i",
        },
        mistakes: [
          "Reporting 'no solution' once complex numbers are available.",
          "Failing to divide the entire numerator, including the real part, by 2a.",
        ],
        video: "solving quadratic equations with complex solutions",
        videoAlt: ["quadratic formula imaginary roots discriminant"],
        practice: { unit: "quadratic-functions", skill: "quadratic-formula" },
        tags: ["quadratics", "complex roots", "discriminant"],
      },
      {
        slug: "vertex-form-and-conversion",
        title: "Vertex Form",
        summary: "y = a(x − h)² + k, where the vertex is simply handed to you.",
        level: "Core",
        keyIdea: "In a(x − h)² + k, the vertex is (h, k).",
        simple: `Vertex form gives the vertex without any calculation.

y = a(x − h)² + k has vertex (h, k).

Watch the sign inside. y = 2(x − 3)² + 4 has vertex (3, 4), but y = 2(x + 3)² − 1 has vertex (−3, −1), because x + 3 is x − (−3).

Read it as a transformation of y = x²: shifted h right, k up, stretched by a, and flipped if a is negative.

To convert from standard form, complete the square. To go the other way, expand and simplify.

Which form to use depends on the question. Standard form gives the y-intercept instantly; vertex form gives the maximum or minimum instantly.`,
        complex: `Vertex form ~f(x) = a(x − h)² + k~ encodes the transformation of the parent ~y = x²~ directly, with axis of symmetry ~x = h~ and vertex ~(h, k)~.

Conversion from standard form is completing the square, and the resulting relationship ~h = −b/(2a)~, ~k = f(h)~ shows that the vertex formula is not independent information.

The three standard forms serve different purposes and convert freely: standard ~ax² + bx + c~ exposes the y-intercept c and feeds the quadratic formula; vertex form exposes the extremum and the transformations; factored form ~a(x − r₁)(x − r₂)~ exposes the roots, and the axis sits at their average ~(r₁ + r₂)/2~.

The range follows immediately from vertex form: ~[k, ∞)~ for ~a > 0~ and ~(−∞, k]~ for ~a < 0~. Optimisation questions are therefore answered by conversion rather than by calculus at this level.`,
        example: {
          prompt: "Convert y = 3x² + 12x + 7 to vertex form.",
          steps: [
            "Factor 3 from the variable terms: y = 3(x² + 4x) + 7.",
            "Half of 4 is 2, squared is 4. Add and subtract inside: y = 3(x² + 4x + 4 − 4) + 7.",
            "y = 3(x + 2)² − 12 + 7.",
            "y = 3(x + 2)² − 5.",
          ],
          answer: "y = 3(x + 2)² − 5, vertex (−2, −5)",
        },
        mistakes: [
          "Reading the vertex of a(x + 3)² as (3, …) instead of (−3, …).",
          "Adding the completing constant inside the parentheses without accounting for the factor a outside.",
        ],
        video: "vertex form completing the square convert standard form",
        videoAlt: ["converting standard form to vertex form quadratic"],
        practice: { unit: "quadratic-functions", skill: "completing-square" },
        tags: ["vertex form", "quadratics", "completing the square"],
      },
      {
        slug: "quadratic-inequalities",
        title: "Quadratic Inequalities",
        summary: "Where a parabola sits above or below the axis.",
        level: "Advanced",
        keyIdea: "Find the zeros, then test each interval they create.",
        simple: `To solve x² − x − 6 > 0:

1. Find the zeros: factor to (x − 3)(x + 2) = 0, giving x = 3 and x = −2.
2. Those split the number line into three intervals.
3. Test one value from each: x = −3 gives 6 > 0 ✓; x = 0 gives −6 > 0 ✗; x = 4 gives 6 > 0 ✓.
4. Keep the intervals that worked.

Answer: x < −2 or x > 3.

Thinking graphically is faster once it clicks. The parabola opens up and crosses at −2 and 3, so it is above the axis outside the roots and below between them. "Greater than zero" means above the axis.`,
        complex: `The solution set of ~ax² + bx + c > 0~ is determined by the sign of the quadratic, which can only change at its real zeros. Those zeros partition ℝ into intervals of constant sign, so one test point per interval settles the whole interval.

For ~a > 0~ with distinct real roots ~r₁ < r₂~: the expression is positive on ~(−∞, r₁) ∪ (r₂, ∞)~ and negative on ~(r₁, r₂)~. For ~a < 0~ the pattern inverts. Endpoints are included for ~≥~ and ~≤~ and excluded for strict inequalities.

Degenerate cases follow the discriminant. With ~Δ < 0~ the expression never changes sign, so ~x² + 1 > 0~ has solution ℝ while ~x² + 1 < 0~ has none. With ~Δ = 0~ the single root is the only place the expression is zero, so ~(x − 2)² > 0~ excludes just that point.

The same sign-analysis method extends unchanged to higher-degree polynomial and to rational inequalities, where the partition points are the zeros of the numerator together with the zeros of the denominator.`,
        example: {
          prompt: "Solve 2x² + 5x − 3 ≤ 0.",
          steps: [
            "Factor: (2x − 1)(x + 3) = 0, so roots x = 1/2 and x = −3.",
            "a > 0, so the parabola opens up and is negative between the roots.",
            "≤ includes the endpoints.",
          ],
          answer: "−3 ≤ x ≤ 1/2, or [−3, 1/2]",
        },
        mistakes: [
          "Solving as if it were an equation and reporting only the two roots.",
          "Keeping the interval between the roots for a 'greater than' problem with a > 0.",
        ],
        video: "solving quadratic inequalities sign chart",
        videoAlt: ["quadratic inequalities number line intervals"],
        practice: null,
        tags: ["inequalities", "quadratics", "sign analysis"],
      },
    ],
  },
  {
    id: "a2-polynomials",
    title: "Polynomial Functions",
    blurb:
      "Degrees above two: how they behave at the edges, how to divide them, and how to find their roots.",
    topics: [
      {
        slug: "end-behavior-and-degree",
        title: "End Behaviour & Degree",
        summary: "What the graph does far left and far right, from two numbers.",
        level: "Core",
        keyIdea: "The leading term alone decides end behaviour.",
        simple: `Far from the origin, the highest-degree term dominates everything else, so it alone decides which way the ends point.

Even degree (2, 4, 6…): both ends go the same way. Up if the leading coefficient is positive, down if negative. Like a parabola.

Odd degree (3, 5, 7…): the ends go opposite ways. Positive leading coefficient means down-left and up-right.

For y = −2x³ + 5x² − 1: odd degree, negative leading coefficient, so up on the left and down on the right.

Degree also caps the shape: a degree-n polynomial has at most n roots and at most n − 1 turning points.`,
        complex: `End behaviour is governed by the leading term because ~lim_{x→±∞} P(x)/(a_n xⁿ) = 1~ — lower-degree terms become negligible in the limit.

The four cases:
~n~ even, ~a_n > 0~: ~x → ±∞ ⟹ y → +∞~.
~n~ even, ~a_n < 0~: both ends ~→ −∞~.
~n~ odd, ~a_n > 0~: ~y → −∞~ on the left, ~+∞~ on the right.
~n~ odd, ~a_n < 0~: the reverse.

A degree-n polynomial has exactly n roots counted with multiplicity over ℂ, at most n real roots, and at most ~n − 1~ turning points.

Multiplicity determines local behaviour at a root: odd multiplicity crosses the axis, even multiplicity touches and turns back, and higher multiplicity flattens the curve near the root. Combining end behaviour, roots and multiplicities is enough to sketch a polynomial without plotting points, which is the standard graphing method at this level.`,
        example: {
          prompt: "Describe the graph of P(x) = (x − 1)²(x + 3).",
          steps: [
            "Expanded degree is 3 with positive leading coefficient: down-left, up-right.",
            "Root x = 1 has multiplicity 2, so the graph touches and turns there.",
            "Root x = −3 has multiplicity 1, so it crosses there.",
            "y-intercept: P(0) = (1)(3) = 3.",
          ],
          answer: "Cubic rising to the right; crosses at (−3,0), touches at (1,0), y-intercept (0,3).",
        },
        mistakes: [
          "Using the constant term or the first-written term instead of the leading term.",
          "Expecting the graph to cross at a root of even multiplicity.",
        ],
        video: "end behavior of polynomial functions degree leading coefficient",
        videoAlt: ["polynomial end behavior multiplicity graphing"],
        practice: null,
        tags: ["polynomials", "end behaviour", "degree"],
      },
      {
        slug: "polynomial-division",
        title: "Polynomial Long & Synthetic Division",
        summary: "Dividing polynomials, and the shortcut when the divisor is linear.",
        level: "Advanced",
        keyIdea: "Synthetic division works only for divisors of the form x − c.",
        simple: `Polynomial long division mirrors numerical long division: divide the leading terms, multiply back, subtract, bring down, repeat.

Synthetic division is a much faster shortcut, but only when dividing by x − c.

To divide x³ − 4x² + 2x + 1 by x − 3:
Write c = 3 and the coefficients 1, −4, 2, 1.
Bring down 1. Multiply by 3 → 3, add to −4 → −1. Multiply by 3 → −3, add to 2 → −1. Multiply by 3 → −3, add to 1 → −2.

The result is x² − x − 1 with remainder −2.

Two rules: use c = 3 for the divisor x − 3 (the opposite sign), and include a 0 for every missing power.`,
        complex: `The division algorithm for polynomials states that for ~P(x)~ and nonzero ~D(x)~ there exist unique ~Q(x)~ and ~R(x)~ with ~P = D·Q + R~ and ~deg R < deg D~.

Long division applies to any divisor. Synthetic division is a condensed version valid only for monic linear divisors ~x − c~; it manipulates coefficients alone, which is why placeholder zeros for missing degrees are mandatory.

Two theorems follow directly. The Remainder Theorem: the remainder on dividing by ~x − c~ equals ~P(c)~ — so synthetic division doubles as a fast evaluation method. The Factor Theorem: ~x − c~ is a factor exactly when ~P(c) = 0~, which is the standard tool for reducing a polynomial once one root is known.

For a divisor such as ~2x − 3~, synthetic division may be used with ~c = 3/2~ provided the resulting quotient is divided by 2 afterwards, since the algorithm assumes a monic divisor.`,
        example: {
          prompt: "Divide 2x³ + 3x² − 11x − 6 by x + 3 using synthetic division.",
          steps: [
            "Divisor x + 3 means c = −3.",
            "Coefficients: 2, 3, −11, −6.",
            "Bring down 2; 2(−3) = −6, 3 + (−6) = −3; −3(−3) = 9, −11 + 9 = −2; −2(−3) = 6, −6 + 6 = 0.",
            "Remainder 0, so x + 3 is a factor.",
          ],
          answer: "Quotient 2x² − 3x − 2, remainder 0",
        },
        mistakes: [
          "Using c = 3 when dividing by x + 3.",
          "Omitting a zero placeholder for a missing power, which shifts every coefficient.",
        ],
        video: "synthetic division polynomial long division explained",
        videoAlt: ["polynomial division remainder theorem"],
        practice: null,
        tags: ["division", "synthetic division", "polynomials"],
      },
      {
        slug: "remainder-and-factor-theorems",
        title: "Remainder & Factor Theorems",
        summary: "Testing whether something is a factor without dividing all the way.",
        level: "Advanced",
        keyIdea: "P(c) = 0 if and only if (x − c) is a factor.",
        simple: `The Remainder Theorem: dividing P(x) by (x − c) leaves a remainder of exactly P(c).

So to find a remainder, you can just substitute. No division required.

The Factor Theorem is the special case where that remainder is zero: if P(c) = 0, then (x − c) is a factor, and c is a root.

These three statements describe the same fact:
- c is a root of P
- (x − c) is a factor of P
- (c, 0) is an x-intercept of the graph

That equivalence is the reason factoring finds roots, and finding roots helps you factor.`,
        complex: `From the division algorithm ~P(x) = (x − c)Q(x) + R~ with R constant, substituting ~x = c~ gives ~P(c) = R~ — the Remainder Theorem. The Factor Theorem is the case ~R = 0~.

The practical procedure for a higher-degree polynomial is: find one root (by inspection, the rational root theorem, or a graph), divide it out synthetically to depress the degree, and repeat on the quotient until it is quadratic and can be solved directly.

The equivalence of root, factor and x-intercept underlies the connection between algebra and graphing throughout the course. It also extends to multiplicity: ~(x − c)^m~ divides P exactly when c is a root of multiplicity m.

Note that the theorems hold over any field, including ℂ, so a complex root ~c~ yields a complex linear factor. Combined with the Fundamental Theorem of Algebra, this gives the complete factorisation of any polynomial into linear factors over ℂ.`,
        example: {
          prompt: "Is (x − 2) a factor of P(x) = x³ − 3x² + 4x − 4? What is the remainder on dividing by (x + 1)?",
          steps: [
            "P(2) = 8 − 12 + 8 − 4 = 0, so yes.",
            "For (x + 1), c = −1.",
            "P(−1) = −1 − 3 − 4 − 4 = −12.",
          ],
          answer: "(x − 2) is a factor; dividing by (x + 1) leaves remainder −12.",
        },
        mistakes: [
          "Substituting x = −2 to test the factor (x − 2).",
          "Concluding a nonzero remainder means the polynomial cannot be factored at all.",
        ],
        video: "remainder theorem factor theorem explained",
        videoAlt: ["factor theorem polynomial roots algebra 2"],
        practice: null,
        tags: ["factor theorem", "remainder theorem", "roots"],
      },
      {
        slug: "rational-root-theorem",
        title: "Rational Root Theorem",
        summary: "A finite list of candidate roots to test, instead of guessing.",
        level: "Advanced",
        keyIdea: "Any rational root is ± (factor of the constant)/(factor of the leading coefficient).",
        simple: `Higher-degree polynomials do not factor by inspection, but you can narrow the search to a finite list.

Any rational root p/q must have p dividing the constant term and q dividing the leading coefficient.

For 2x³ − 3x² − 8x + 12: constants dividing 12 are ±1, 2, 3, 4, 6, 12; leading coefficient factors are ±1, 2. Candidates are those over 1 and over 2.

Test candidates by substitution or synthetic division. When one gives zero, divide it out and continue with a smaller polynomial.

Two caveats: the theorem only finds *rational* roots, and a candidate list is not a promise that any of them work.`,
        complex: `If ~P(x) = a_n xⁿ + … + a₀~ has integer coefficients and a rational root ~p/q~ in lowest terms, then ~p | a₀~ and ~q | a_n~.

The list is a superset of the actual rational roots and can be long, so it is usually pruned before testing: a rough graph or a sign check narrows the region, and Descartes' Rule of Signs bounds the number of positive and negative real roots.

Once a root is found, synthetic division depresses the degree, and the process repeats. This is the standard route to fully factoring a cubic or quartic by hand.

The theorem says nothing about irrational or complex roots, which is why ~x³ − 2~ has no rational root despite ~∛2~ being real. When no candidate works, the polynomial is irreducible over ℚ and other methods — numerical approximation or the quadratic formula on a depressed factor — are required.`,
        example: {
          prompt: "Find all roots of P(x) = x³ − 4x² + x + 6.",
          steps: [
            "Candidates: ±1, ±2, ±3, ±6.",
            "P(−1) = −1 − 4 − 1 + 6 = 0, so x = −1 is a root.",
            "Synthetic division by −1 gives x² − 5x + 6.",
            "Factor: (x − 2)(x − 3).",
          ],
          answer: "x = −1, 2, 3",
        },
        mistakes: [
          "Swapping the roles, dividing constant factors by nothing or using the leading coefficient on top.",
          "Assuming every candidate on the list is a root.",
        ],
        video: "rational root theorem finding polynomial roots",
        videoAlt: ["rational zeros theorem examples algebra 2"],
        practice: null,
        tags: ["rational root", "roots", "polynomials"],
      },
      {
        slug: "sum-and-difference-of-cubes",
        title: "Sum & Difference of Cubes",
        summary: "Two factoring patterns that unlock cubic expressions.",
        level: "Advanced",
        keyIdea: "a³ ± b³ = (a ± b)(a² ∓ ab + b²).",
        simple: `Unlike a sum of squares, a sum of cubes *does* factor.

a³ + b³ = (a + b)(a² − ab + b²)
a³ − b³ = (a − b)(a² + ab + b²)

The binomial keeps the original sign. In the trinomial, the middle sign is the opposite, and the last is always plus. A common mnemonic is SOAP: Same, Opposite, Always Positive.

For x³ + 8: a = x and b = 2, so it factors as (x + 2)(x² − 2x + 4).

The trinomial almost never factors further, so check whether it does but do not force it. Its discriminant is negative unless a = b.`,
        complex: `The identities ~a³ + b³ = (a + b)(a² − ab + b²)~ and ~a³ − b³ = (a − b)(a² + ab + b²)~ are verified by expansion, where the cross terms cancel.

The quadratic factor is irreducible over ℝ whenever ~a ≠ b~, since its discriminant is ~b² − 4b² = −3b²~ (treating a as the variable), which is negative. So the factorisation over ℝ stops there, while over ℂ the quadratic splits into a conjugate pair.

These are the ~n = 3~ cases of the general identity ~aⁿ − bⁿ = (a − b)(a^{n−1} + a^{n−2}b + … + b^{n−1})~, which holds for all n; the sum version requires odd n.

Recognition matters more than memorisation: check whether both terms are perfect cubes (1, 8, 27, 64, 125, 216 and variables with exponents divisible by 3). As always, extract a GCF first — ~2x³ − 16~ becomes ~2(x³ − 8)~ before the pattern is visible.`,
        example: {
          prompt: "Factor 27x³ − 64 completely.",
          steps: [
            "Both are perfect cubes: (3x)³ and 4³.",
            "Difference of cubes: (3x − 4)((3x)² + (3x)(4) + 4²).",
            "Simplify: (3x − 4)(9x² + 12x + 16).",
          ],
          answer: "(3x − 4)(9x² + 12x + 16)",
        },
        mistakes: [
          "Writing the middle term of the trinomial as 2ab, borrowing from the perfect-square pattern.",
          "Getting the sign pattern backwards in the trinomial.",
        ],
        video: "sum and difference of cubes factoring explained",
        videoAlt: ["factoring sum difference of cubes SOAP"],
        practice: null,
        tags: ["factoring", "cubes", "polynomials"],
      },
    ],
  },
  {
    id: "a2-rational",
    title: "Rational Expressions & Functions",
    blurb:
      "Fractions whose parts are polynomials, plus the asymptotes their graphs produce.",
    topics: [
      {
        slug: "simplifying-rational-expressions",
        title: "Simplifying Rational Expressions",
        summary: "Factor first, cancel factors only, and record what x cannot be.",
        level: "Core",
        keyIdea: "Cancel common factors, never terms across a plus sign.",
        simple: `A rational expression is a fraction with polynomials on top and bottom. Simplify it exactly like a numeric fraction: factor both parts, then cancel common factors.

(x² − 9)/(x² + 7x + 12) factors to ((x+3)(x−3))/((x+3)(x+4)), and the (x+3) cancels, leaving (x − 3)/(x + 4).

You may only cancel *factors* — things being multiplied. You can never cancel across addition. In (x + 5)/x, the x does not cancel.

State the restrictions. The original was undefined at x = −3 and x = −4, and both stay excluded even though −3 vanished from the simplified form.`,
        complex: `A rational expression ~P(x)/Q(x)~ is defined wherever ~Q(x) ≠ 0~. Simplifying divides numerator and denominator by a common factor, which is multiplication by 1 only on the set where that factor is nonzero.

This is why domain restrictions come from the *original* expression, not the simplified one. Cancelling ~(x + 3)~ from ~((x+3)(x−3))/((x+3)(x+4))~ produces a function that is defined at ~x = −3~ while the original is not; graphically the original has a removable discontinuity, a hole, at that point, and the simplified form does not.

Cancelling across addition is invalid because addition is not a factorisation — ~(x + 5)/x~ has no common factor. This error is the algebraic equivalent of writing ~(3 + 4)/3 = 4~.

A useful special case: ~(a − b)~ and ~(b − a)~ differ by a factor of −1, so ~(x − 5)/(5 − x) = −1~ for ~x ≠ 5~. Factoring out −1 makes such cancellations legitimate and visible.`,
        example: {
          prompt: "Simplify (2x² − 8)/(x² − x − 2) and state the restrictions.",
          steps: [
            "Numerator: 2(x² − 4) = 2(x + 2)(x − 2).",
            "Denominator: (x − 2)(x + 1).",
            "Cancel (x − 2): 2(x + 2)/(x + 1).",
            "Original denominator is zero at x = 2 and x = −1.",
          ],
          answer: "2(x + 2)/(x + 1), with x ≠ 2 and x ≠ −1 (a hole at x = 2).",
        },
        mistakes: [
          "Cancelling individual terms rather than whole factors.",
          "Dropping the restriction that came from a cancelled factor.",
        ],
        video: "simplifying rational expressions restrictions explained",
        videoAlt: ["simplify rational expressions factoring cancel"],
        practice: null,
        tags: ["rational expressions", "simplifying", "restrictions"],
      },
      {
        slug: "operations-with-rational-expressions",
        title: "Multiplying, Dividing, Adding & Subtracting",
        summary: "The fraction rules again, with polynomials in the slots.",
        level: "Advanced",
        keyIdea: "Multiply/divide: factor and cancel. Add/subtract: find the LCD.",
        simple: `The rules are identical to numeric fractions.

Multiplying: factor everything, cancel across the whole product, then multiply what is left.

Dividing: flip the second fraction and multiply.

Adding and subtracting: you need a common denominator. Factor each denominator, then build the LCD by taking every distinct factor at its highest power.

For 1/(x² − 4) + 3/(x + 2): factor the first denominator to (x+2)(x−2), so the LCD is (x+2)(x−2). Multiply the second fraction by (x−2)/(x−2) and combine.

When subtracting, distribute the minus across the entire second numerator. That is the single most common error.`,
        complex: `Multiplication and division follow ~(a/b)(c/d) = ac/bd~ and ~(a/b) ÷ (c/d) = ad/bc~, with all cancellation done after complete factorisation. Division carries the extra restriction that the divisor's numerator must also be nonzero, since it becomes a denominator.

Addition requires the LCD, constructed from the factored denominators by taking each distinct irreducible factor to its highest occurring power — exactly the LCM procedure from prime factorisation, with irreducible polynomials in place of primes.

Subtraction requires the numerator of the second fraction to be treated as a grouped quantity: ~a/d − (b + c)/d = (a − b − c)/d~. Failing to distribute the minus is the dominant error in the topic.

Restrictions accumulate across every step: any value making any denominator zero at any stage is excluded, including denominators that were eliminated by cancellation.

Complex fractions are handled either by simplifying numerator and denominator separately and then dividing, or by multiplying every term by the overall LCD, which is generally faster.`,
        example: {
          prompt: "Simplify 3/(x − 2) − 5/(x + 1).",
          steps: [
            "Denominators share no factors, so the LCD is (x − 2)(x + 1).",
            "Rewrite: 3(x + 1)/LCD − 5(x − 2)/LCD.",
            "Numerator: 3x + 3 − 5x + 10 (distribute the minus).",
            "Combine: −2x + 13.",
          ],
          answer: "(−2x + 13)/((x − 2)(x + 1)), with x ≠ 2, −1",
        },
        mistakes: [
          "Subtracting only the first term of the second numerator.",
          "Cancelling before the expressions are fully factored.",
        ],
        video: "adding subtracting rational expressions LCD",
        videoAlt: ["operations with rational expressions algebra 2"],
        practice: null,
        tags: ["rational expressions", "lcd", "operations"],
      },
      {
        slug: "rational-equations",
        title: "Solving Rational Equations",
        summary: "Clear the denominators, then check for solutions that break the original.",
        level: "Advanced",
        keyIdea: "Always check answers against the original restrictions.",
        simple: `To solve an equation with fractions, multiply every term by the LCD to clear them, then solve normally.

The extra step that matters: check your answers.

Multiplying by an expression containing x can create solutions that do not actually work. These are extraneous solutions, and they are not arithmetic mistakes — they are a genuine side effect of the method.

If your answer makes any original denominator zero, discard it. If both answers do, the equation has no solution.

Write down the restrictions *before* you solve. Then checking is instant.`,
        complex: `Multiplying both sides by the LCD is only an equivalence transformation where the LCD is nonzero. At values making it zero, the step is multiplication by zero, which can introduce roots that satisfy the cleared equation but not the original — the definition of an extraneous solution.

The reliable procedure: factor all denominators, state the excluded values, multiply through by the LCD, solve the resulting polynomial equation, then discard any root that is excluded.

Proportions ~a/b = c/d~ may be cross multiplied, which is the LCD method specialised to two fractions.

The same extraneous-root phenomenon appears with radical equations, where squaring both sides is likewise non-reversible, and for the same structural reason: applying a non-injective operation to both sides can enlarge the solution set. In both cases checking is part of the method rather than an optional verification.`,
        example: {
          prompt: "Solve 1/(x − 3) + 1 = 6/(x² − 9)... first note x ≠ ±3.",
          steps: [
            "Factor: x² − 9 = (x − 3)(x + 3); LCD = (x − 3)(x + 3).",
            "Multiply through: (x + 3) + (x² − 9) = 6.",
            "x² + x − 6 = 6 → x² + x − 12 = 0 → (x + 4)(x − 3) = 0.",
            "Candidates x = −4 and x = 3, but x = 3 is excluded.",
          ],
          answer: "x = −4 only (x = 3 is extraneous).",
        },
        mistakes: [
          "Reporting an extraneous root because the algebra produced it.",
          "Multiplying only the fraction terms by the LCD and skipping the whole numbers.",
        ],
        video: "solving rational equations extraneous solutions",
        videoAlt: ["rational equations LCD extraneous roots algebra 2"],
        practice: { unit: "solving-equations", skill: "equations-with-fractions" },
        tags: ["rational equations", "extraneous", "lcd"],
      },
      {
        slug: "graphing-rational-functions",
        title: "Graphing Rational Functions",
        summary: "Vertical, horizontal and slant asymptotes, plus holes.",
        level: "Advanced",
        keyIdea: "Vertical asymptotes come from denominator zeros that do not cancel.",
        simple: `Rational functions have lines the graph approaches but never reaches.

Vertical asymptotes: set the denominator to zero after cancelling. Any zero that cancelled with the numerator is a hole instead, not an asymptote.

Horizontal asymptotes come from comparing degrees:
- Bottom degree bigger → y = 0
- Degrees equal → y = ratio of the leading coefficients
- Top degree bigger by exactly 1 → no horizontal asymptote, but a slant one found by dividing

For y = (2x + 1)/(x − 3): vertical asymptote at x = 3, and since the degrees are equal, horizontal asymptote at y = 2/1 = 2.

A graph can cross a horizontal asymptote in the middle. It just cannot at the far ends.`,
        complex: `For ~f(x) = P(x)/Q(x)~ in lowest terms, vertical asymptotes occur at the real zeros of Q; zeros common to P and Q that were cancelled produce removable discontinuities (holes) instead.

End behaviour compares degrees. With ~deg P < deg Q~, the horizontal asymptote is ~y = 0~. With ~deg P = deg Q~, it is the ratio of leading coefficients. With ~deg P = deg Q + 1~, polynomial division yields a linear quotient which is the slant (oblique) asymptote, with the remainder term vanishing at infinity. For larger degree gaps, the end behaviour follows the polynomial quotient and there is no linear asymptote.

Vertical asymptotes are never crossed, since the function is undefined there. Horizontal and slant asymptotes describe end behaviour only and may be crossed in the interior; solving ~f(x) = L~ finds any such crossings.

A complete sketch combines intercepts, asymptotes, holes and a sign analysis on the intervals between the zeros and the vertical asymptotes, which determines whether each branch approaches ~+∞~ or ~−∞~.`,
        example: {
          prompt: "Describe the asymptotes and holes of f(x) = (x² − 1)/(x² − 3x + 2).",
          steps: [
            "Factor: ((x+1)(x−1))/((x−1)(x−2)).",
            "(x − 1) cancels, giving a hole at x = 1.",
            "Remaining denominator zero: vertical asymptote x = 2.",
            "Degrees equal in the original, leading coefficients 1 and 1.",
          ],
          answer: "Hole at x = 1, vertical asymptote x = 2, horizontal asymptote y = 1.",
        },
        mistakes: [
          "Calling a cancelled factor's zero a vertical asymptote instead of a hole.",
          "Assuming a graph can never cross a horizontal asymptote.",
        ],
        video: "graphing rational functions asymptotes holes",
        videoAlt: ["vertical horizontal slant asymptotes rational functions"],
        practice: null,
        tags: ["rational functions", "asymptotes", "graphing"],
      },
      {
        slug: "direct-inverse-joint-variation",
        title: "Direct, Inverse & Joint Variation",
        summary: "Three ways quantities can depend on each other.",
        level: "Core",
        keyIdea: "Direct: y = kx. Inverse: y = k/x. Joint: y = kxz.",
        simple: `Variation problems describe how quantities move together, with a constant k.

Direct: y = kx. One goes up, the other goes up proportionally.
Inverse: y = k/x. One goes up, the other goes down. Their product stays fixed.
Joint: y = kxz. Directly with two or more variables at once.
Combined: mixes them, such as y = kx/z.

The routine is always the same: write the equation, use the given values to find k, then use the completed equation.

Speed and time for a fixed distance are inversely related: double the speed, halve the time.`,
        complex: `Variation statements translate to equations with a constant of proportionality determined by one data point.

Direct variation ~y = kx~ is linear through the origin, and its graph is a line. Inverse variation ~y = k/x~, equivalently ~xy = k~, is a hyperbola with both axes as asymptotes, so it is a rational function rather than a linear one.

Distinguishing them from data is a matter of which combination is constant: a fixed quotient ~y/x~ indicates direct variation, a fixed product ~xy~ indicates inverse.

Powers may be involved: "y varies inversely with the square of x" is ~y = k/x²~, the inverse-square law of gravitation and light intensity. Joint and combined variation extend this to several variables, as in the ideal gas law ~V = kT/P~, which is direct in T and inverse in P simultaneously.

Once k is determined, the model is fully specified and any other value can be computed, which is why these problems always supply exactly one complete data point.`,
        example: {
          prompt: "y varies inversely with x. When x = 4, y = 15. Find y when x = 10.",
          steps: [
            "Model: y = k/x, so k = xy.",
            "k = 4(15) = 60.",
            "y = 60/x, so y = 60/10.",
          ],
          answer: "y = 6",
        },
        mistakes: [
          "Setting up a direct proportion when the relationship is inverse.",
          "Finding k as y/x for an inverse relationship instead of xy.",
        ],
        video: "direct inverse joint variation explained algebra 2",
        videoAlt: ["variation problems constant of proportionality"],
        practice: null,
        tags: ["variation", "proportionality", "modelling"],
      },
    ],
  },
  {
    id: "a2-radicals",
    title: "Radicals & Rational Exponents",
    blurb:
      "Roots of every index, written as exponents so all the old rules keep working.",
    topics: [
      {
        slug: "nth-roots-and-rational-exponents",
        title: "nth Roots & Rational Exponents",
        summary: "Why x^(1/2) means √x, and how that unifies two notations.",
        level: "Core",
        keyIdea: "a^(m/n) = ⁿ√(aᵐ) — denominator is the root, numerator is the power.",
        simple: `A fractional exponent is a root.

x^(1/2) = √x, x^(1/3) = ∛x, and generally x^(1/n) is the nth root.

With a numerator too: x^(2/3) = ∛(x²), or equivalently (∛x)². Denominator gives the root, numerator gives the power. Taking the root first usually keeps the numbers smaller.

8^(2/3): cube root of 8 is 2, then squared is 4.

The advantage is that all the exponent rules you already know now apply to radicals. √x · ∛x becomes x^(1/2) · x^(1/3) = x^(5/6), which is far easier than manipulating the radicals directly.

Even roots of negatives are still undefined in the reals; odd roots are fine.`,
        complex: `Define ~a^{1/n} = ⁿ√a~ as the principal nth root, then ~a^{m/n} = (a^{1/n})^m = (a^m)^{1/n}~. This definition is forced by requiring the power rule ~(a^{m})^{n} = a^{mn}~ to hold for rational exponents, so it is the unique consistent extension.

Domain conditions depend on parity of the index. For odd n, ~ⁿ√a~ is defined for all real a. For even n it requires ~a ≥ 0~, and ~ⁿ√(aⁿ) = |a|~. This is why ~√(x²) = |x|~ but ~∛(x³) = x~.

Once in exponent form, every exponent law applies unchanged, which is the practical reason for the notation: expressions mixing different indices are simplified by converting to a common fractional exponent.

The extension continues to irrational exponents by continuity, giving meaning to ~2^{√2}~ and ~e^x~, which is what makes exponential functions well defined over all of ℝ.`,
        example: {
          prompt: "Evaluate 16^(3/4) and simplify (x^(1/2))(x^(2/3)).",
          steps: [
            "Fourth root of 16 is 2.",
            "2³ = 8.",
            "Add exponents: 1/2 + 2/3 = 3/6 + 4/6 = 7/6.",
          ],
          answer: "16^(3/4) = 8 and the product is x^(7/6)",
        },
        mistakes: [
          "Reading x^(2/3) as (2/3)x.",
          "Taking the power before the root on large numbers, creating needless arithmetic.",
        ],
        video: "rational exponents and nth roots explained",
        videoAlt: ["fractional exponents radicals algebra 2"],
        practice: { unit: "exponents-radicals", skill: "negative-fractional-exponents" },
        tags: ["rational exponents", "radicals", "roots"],
      },
      {
        slug: "operations-with-radicals",
        title: "Operations with Radicals",
        summary: "Adding like radicals, multiplying freely, and clearing denominators.",
        level: "Core",
        keyIdea: "Only like radicals add; any radicals of the same index multiply.",
        simple: `Adding radicals works like combining like terms: only identical radicals combine. 3√5 + 2√5 = 5√5, but 3√5 + 2√7 stays as it is.

Simplify first, because unlike radicals often become like ones. √8 + √18 looks unlike, but simplifies to 2√2 + 3√2 = 5√2.

Multiplying is freer: √a · √b = √(ab) for the same index. Distribute and FOIL exactly as with polynomials.

Rationalising removes a radical from a denominator. For a single term, multiply by that radical over itself. For a binomial like 3 + √2, multiply by its conjugate 3 − √2, which produces a difference of squares and clears the radical.`,
        complex: `Radicals of the same index multiply and divide via ~ⁿ√a · ⁿ√b = ⁿ√(ab)~ and ~ⁿ√a / ⁿ√b = ⁿ√(a/b)~, valid for non-negative radicands (or any radicands when n is odd). Different indices must be converted to rational exponents first.

Addition requires identical index *and* identical radicand, since ~c₁ⁿ√a + c₂ⁿ√a = (c₁ + c₂)ⁿ√a~ is the distributive property; there is no rule for unlike radicals. Full simplification before combining is therefore mandatory, not cosmetic.

Rationalising a monomial denominator multiplies by ~ⁿ√(b^{n−k})~ chosen to complete the index. For a binomial containing square roots, the conjugate works because ~(a + √b)(a − √b) = a² − b~ is rational.

Modern computation does not require rationalised denominators, but the standard form remains conventional and, more usefully, conjugate multiplication is the same technique used to divide complex numbers and to resolve certain indeterminate limits in calculus.`,
        example: {
          prompt: "Simplify √12 + √27, then rationalise 4/(3 − √5).",
          steps: [
            "√12 = 2√3 and √27 = 3√3, so the sum is 5√3.",
            "Multiply by the conjugate: 4(3 + √5)/((3 − √5)(3 + √5)).",
            "Denominator: 9 − 5 = 4.",
            "So (12 + 4√5)/4.",
          ],
          answer: "5√3, and 4/(3 − √5) = 3 + √5",
        },
        mistakes: [
          "Adding radicands: √12 + √27 = √39.",
          "Multiplying by the same binomial instead of the conjugate, which leaves a radical behind.",
        ],
        video: "operations with radicals rationalizing denominator conjugate",
        videoAlt: ["adding multiplying radicals rationalize denominator"],
        practice: { unit: "exponents-radicals", skill: "simplifying-radicals" },
        tags: ["radicals", "rationalising", "conjugate"],
      },
      {
        slug: "radical-equations",
        title: "Solving Radical Equations",
        summary: "Isolate, square, solve — then check, because squaring lies.",
        level: "Advanced",
        keyIdea: "Squaring both sides can create solutions that do not work.",
        simple: `To solve an equation with a square root:

1. Isolate the radical on one side.
2. Square both sides.
3. Solve the resulting equation.
4. Check every answer in the *original* equation.

Step 4 is mandatory. Squaring can create false solutions, because squaring destroys sign information: −3 and 3 both square to 9.

For √(x + 6) = x: squaring gives x + 6 = x², so x² − x − 6 = 0, giving x = 3 or x = −2. Checking: √9 = 3 ✓, but √4 = 2 ≠ −2 ✗. Only x = 3 works.

If there are two radicals, isolate one, square, then repeat.`,
        complex: `Squaring is not injective on ℝ, so ~A = B ⟹ A² = B²~ holds but the converse does not. The squared equation's solution set contains the original's and may be strictly larger, producing extraneous roots. Checking in the original equation is part of the method.

Isolation before squaring is required, since ~(a + √b)² = a² + 2a√b + b~ retains a radical, defeating the purpose. With two radicals, isolate and square repeatedly; each squaring reduces the count by one.

An equivalent framing that avoids surprises: ~√(f(x)) = g(x)~ is equivalent to ~f(x) = g(x)²~ *together with* the condition ~g(x) ≥ 0~, because the principal square root is non-negative. In the example above, that condition immediately rules out ~x = −2~ without substitution.

Equations with odd-index radicals do not produce extraneous solutions from cubing, since cubing is injective — the phenomenon is specific to even powers.`,
        example: {
          prompt: "Solve √(2x + 3) − x = 0.",
          steps: [
            "Isolate: √(2x + 3) = x, which requires x ≥ 0.",
            "Square: 2x + 3 = x².",
            "x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0.",
            "x = 3 or x = −1; reject x = −1 since it fails x ≥ 0.",
          ],
          answer: "x = 3",
        },
        mistakes: [
          "Skipping the check and reporting both roots.",
          "Squaring term by term instead of squaring the whole side.",
        ],
        video: "solving radical equations extraneous solutions",
        videoAlt: ["radical equations squaring both sides check"],
        practice: null,
        tags: ["radical equations", "extraneous", "squaring"],
      },
    ],
  },
  {
    id: "a2-exp-log",
    title: "Exponential & Logarithmic Functions",
    blurb:
      "The inverse pair that models growth, decay, sound, earthquakes and interest.",
    topics: [
      {
        slug: "logarithms-introduction",
        title: "Introduction to Logarithms",
        summary: "A logarithm is an exponent. That single sentence is most of the topic.",
        level: "Core",
        keyIdea: "log_b(a) = c means bᶜ = a.",
        simple: `A logarithm answers: what exponent turns the base into this number?

log₂(8) = 3, because 2³ = 8.
log₁₀(1000) = 3, because 10³ = 1000.

The definition to hold onto:
log_b(a) = c  ⟺  bᶜ = a

Converting between those two forms handles most problems.

Two conventions: log with no base written means base 10, and ln means base e (about 2.718).

The domain matters. You can only take the log of a positive number, because bᶜ is always positive. log(0) and log(−5) do not exist.`,
        complex: `The logarithm ~log_b x~ is the inverse of the exponential ~b^x~ for ~b > 0, b ≠ 1~. As inverses, ~log_b(b^x) = x~ and ~b^{log_b x} = x~, and their graphs reflect across ~y = x~.

Consequently ~log_b~ has domain ~(0, ∞)~ and range ℝ, with a vertical asymptote at ~x = 0~ — the mirror of the exponential's horizontal asymptote at ~y = 0~. This is why the argument of a logarithm must be positive, and why solving log equations requires domain checks.

Base conventions: ~log x~ is base 10 in most contexts, ~ln x~ is base e, and ~lg~ or ~log~ means base 2 in computer science.

The change of base formula ~log_b x = (ln x)/(ln b)~ allows any base to be evaluated with a calculator and shows that all logarithmic functions are constant multiples of each other.

Logarithms compress multiplicative scales into additive ones, which is why decibels, pH, the Richter scale and stellar magnitudes are all logarithmic: they turn ratios spanning many orders of magnitude into a readable range.`,
        example: {
          prompt: "Evaluate log₃(81), log₅(1/25), and solve log₂(x) = 5.",
          steps: [
            "3⁴ = 81, so log₃(81) = 4.",
            "1/25 = 5⁻², so log₅(1/25) = −2.",
            "log₂(x) = 5 means x = 2⁵.",
          ],
          answer: "4, −2, and x = 32",
        },
        mistakes: [
          "Taking the log of a negative number or zero.",
          "Reading log₂(8) as 2 divided into 8.",
        ],
        video: "introduction to logarithms explained algebra 2",
        videoAlt: ["what is a logarithm converting exponential form"],
        practice: null,
        tags: ["logarithms", "inverse", "exponents"],
      },
      {
        slug: "properties-of-logarithms",
        title: "Properties of Logarithms",
        summary: "Turning multiplication into addition, and powers into coefficients.",
        level: "Advanced",
        keyIdea: "log(xy) = log x + log y; log(xⁿ) = n·log x.",
        simple: `Three properties do all the work, and each mirrors an exponent rule.

Product: log_b(xy) = log_b x + log_b y
Quotient: log_b(x/y) = log_b x − log_b y
Power: log_b(xⁿ) = n·log_b x

The power rule is the useful one for solving equations: it pulls an exponent down where you can reach it with ordinary algebra.

Two things that look like properties but are false:
log(x + y) is NOT log x + log y.
log(x)/log(y) is NOT log(x/y).

Change of base is worth knowing for calculators: log_b x = ln x / ln b.`,
        complex: `The properties follow directly from the exponent laws through the inverse relationship. Writing ~x = b^m~ and ~y = b^n~, the product ~xy = b^{m+n}~ gives ~log_b(xy) = m + n = log_b x + log_b y~. The quotient and power rules follow identically.

Expanding and condensing are the two directions used in practice: expansion separates a complicated argument into a sum for differentiation or estimation, while condensation collapses a sum into a single logarithm so that both sides of an equation can be exponentiated.

The invalid "properties" are instances of the general fact that nonlinear functions do not distribute over addition, the same principle as ~(a+b)² ≠ a² + b²~ and ~√(a+b) ≠ √a + √b~.

Applying the power rule requires attention to domain: ~log(x²) = 2log(x)~ holds only for ~x > 0~, since the left side is defined for all nonzero x while the right is not. The fully correct identity is ~log(x²) = 2log|x|~.`,
        example: {
          prompt: "Expand log(x³√y / z²), then condense 2log a − log b.",
          steps: [
            "Quotient rule: log(x³√y) − log(z²).",
            "Product and power rules: 3log x + (1/2)log y − 2log z.",
            "Condensing: 2log a = log(a²).",
            "Difference becomes a quotient: log(a²/b).",
          ],
          answer: "3log x + ½log y − 2log z, and log(a²/b)",
        },
        mistakes: [
          "Writing log(x + y) as log x + log y.",
          "Applying the power rule to a coefficient that multiplies the log rather than the argument's exponent.",
        ],
        video: "properties of logarithms expand condense explained",
        videoAlt: ["log properties product quotient power rule"],
        practice: null,
        tags: ["logarithms", "properties", "expanding"],
      },
      {
        slug: "solving-exponential-log-equations",
        title: "Solving Exponential & Log Equations",
        summary: "Taking logs to reach an exponent, and exponentiating to escape a log.",
        level: "Advanced",
        keyIdea: "Take the log of both sides to bring a variable exponent down.",
        simple: `When the variable is in the exponent, take the log of both sides and use the power rule.

For 3ˣ = 20:
log(3ˣ) = log 20 → x·log 3 = log 20 → x = log 20 / log 3 ≈ 2.727.

If both sides can be written with the same base, that is faster. 2ˣ = 32 is just 2ˣ = 2⁵, so x = 5.

When the variable is inside a log, condense to one log and then exponentiate.

log(x) + log(x − 3) = 1 → log(x(x−3)) = 1 → x(x−3) = 10 → x² − 3x − 10 = 0 → x = 5 or x = −2.

Then check. x = −2 makes log(−2) undefined, so only x = 5 survives.`,
        complex: `Because exponential and logarithmic functions are one-to-one, applying either to both sides of an equation preserves the solution set on the appropriate domain. That injectivity also justifies the one-to-one property: ~b^u = b^v ⟹ u = v~ and ~log_b u = log_b v ⟹ u = v~.

For exponential equations with non-matching bases, taking a logarithm of both sides and applying the power rule linearises the unknown. Either base works; ln is conventional for continuous models since ~ln(e^{kt}) = kt~ directly.

For logarithmic equations, condense to a single logarithm, then exponentiate. Because condensing with the product rule can enlarge the domain — ~log x + log(x−3)~ requires ~x > 3~, while ~log(x² − 3x)~ permits ~x < 0~ as well — extraneous solutions are systematically produced and must be discarded by checking against the original.

Applications include solving ~A = P(1 + r/n)^{nt}~ for t, and half-life problems ~A = A₀(1/2)^{t/h}~, both of which require logarithms precisely because the unknown sits in the exponent.`,
        example: {
          prompt: "Solve 5·2ˣ = 160, and log₃(x) + log₃(x − 2) = 1.",
          steps: [
            "Divide by 5: 2ˣ = 32 = 2⁵, so x = 5.",
            "Condense: log₃(x(x − 2)) = 1.",
            "Exponentiate: x² − 2x = 3 → x² − 2x − 3 = 0 → (x−3)(x+1) = 0.",
            "x = 3 or x = −1; reject −1 since log₃(−1) is undefined.",
          ],
          answer: "x = 5 for the first; x = 3 for the second.",
        },
        mistakes: [
          "Dividing by the coefficient after taking logs rather than before.",
          "Keeping a root that makes any original log argument non-positive.",
        ],
        video: "solving exponential and logarithmic equations",
        videoAlt: ["solve exponential equations using logarithms"],
        practice: null,
        tags: ["exponential equations", "log equations", "solving"],
      },
      {
        slug: "e-and-natural-logs",
        title: "e and Natural Logarithms",
        summary: "The number that shows up whenever growth is continuous.",
        level: "Advanced",
        keyIdea: "e ≈ 2.71828, and ln is log base e.",
        simple: `e is a specific number, about 2.71828, like π is about 3.14159.

It appears whenever growth is continuous rather than in steps. If interest compounds every instant instead of monthly, the formula becomes A = Pe^(rt).

ln means log base e. It is the inverse of eˣ, so:
ln(eˣ) = x and e^(ln x) = x.

Where does e come from? Compound $1 at 100% for a year. Yearly gives $2. Monthly gives $2.61. Daily gives $2.7146. Every instant gives e.

All the log properties apply to ln unchanged. It is a logarithm like any other, with a base that happens to be irrational.`,
        complex: `The constant is defined by ~e = lim_{n→∞}(1 + 1/n)^n ≈ 2.718281828~, equivalently by the series ~Σ 1/k!~.

Continuous compounding follows from that limit: ~A = P(1 + r/n)^{nt} → Pe^{rt}~ as ~n → ∞~. The same form ~y = y₀e^{kt}~ models any process whose rate of change is proportional to its current amount, with ~k > 0~ for growth and ~k < 0~ for decay.

The defining property is that ~e^x~ is its own derivative, which is why it becomes the standard base once calculus begins; ~d/dx(ln x) = 1/x~ likewise makes ln the natural antiderivative choice.

Any exponential can be rewritten with base e via ~b^x = e^{x ln b}~, so the general model ~a·b^t~ and the continuous model ~a·e^{kt}~ are the same family with ~k = ln b~. Converting between a stated percentage rate and a continuous rate uses exactly this identity, and the two are close for small rates but diverge as the rate grows.`,
        example: {
          prompt: "$2,000 is invested at 4.5% compounded continuously. Find the value after 7 years, and the time to double.",
          steps: [
            "A = 2000e^(0.045×7) = 2000e^0.315.",
            "e^0.315 ≈ 1.3702, so A ≈ $2,740.42.",
            "Doubling: 2 = e^(0.045t), so ln 2 = 0.045t.",
            "t = 0.6931/0.045.",
          ],
          answer: "About $2,740.42; doubling takes about 15.4 years.",
        },
        mistakes: [
          "Treating e as a variable rather than a constant.",
          "Using the annual formula A = P(1 + r)^t when the problem says continuously.",
        ],
        video: "natural logarithms e continuous compound interest",
        videoAlt: ["number e natural log ln explained"],
        practice: null,
        tags: ["e", "natural log", "continuous growth"],
      },
    ],
  },
  {
    id: "a2-sequences-series",
    title: "Sequences & Series",
    blurb:
      "Summing patterns, including infinitely many terms that still add to a finite number.",
    topics: [
      {
        slug: "series-and-sigma-notation",
        title: "Series & Sigma Notation",
        summary: "Reading Σ, and the formulas for arithmetic and geometric sums.",
        level: "Core",
        keyIdea: "Σ means add up the terms as the index runs through its range.",
        simple: `A sequence lists terms; a series adds them.

Sigma notation compresses that instruction. The symbol Σ carries a starting index below, an ending index above, and a rule to the right.

Σ (from n=1 to 4) of 2n means 2+4+6+8 = 20.

Sum formulas save you from adding term by term:

Arithmetic: Sₙ = n(a₁ + aₙ)/2 — the count times the average of the first and last.
Geometric: Sₙ = a₁(1 − rⁿ)/(1 − r), for r ≠ 1.

Read the limits carefully. Starting at n = 0 rather than n = 1 changes the number of terms, which changes the answer.`,
        complex: `A series is the sum of a sequence's terms, and sigma notation ~Σ_{k=m}^{n} a_k~ specifies the index variable, its bounds and the general term. The number of terms is ~n − m + 1~, an off-by-one that is the most common source of error.

The arithmetic sum ~Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n−1)d]/2~ comes from pairing terms equidistant from the ends, each pair summing to ~a₁ + aₙ~.

The geometric sum ~Sₙ = a₁(1 − rⁿ)/(1 − r)~ is derived by computing ~Sₙ − rSₙ~, where all interior terms cancel — the telescoping technique.

Sigma notation is linear: ~Σ(ca_k + b_k) = cΣa_k + Σb_k~, which allows a complicated sum to be split into standard pieces. Standard results worth knowing are ~Σ_{k=1}^{n} k = n(n+1)/2~ and ~Σ_{k=1}^{n} k² = n(n+1)(2n+1)/6~.

These become the Riemann sums of integral calculus, where the same notation describes areas as limits of sums.`,
        example: {
          prompt: "Evaluate Σ (from k=1 to 5) of (3k − 1), and the sum of the first 8 terms of 3, 6, 12, …",
          steps: [
            "Terms: 2, 5, 8, 11, 14 — arithmetic with a₁ = 2, a₅ = 14.",
            "S₅ = 5(2 + 14)/2 = 40.",
            "Second: geometric a₁ = 3, r = 2, n = 8.",
            "S₈ = 3(1 − 2⁸)/(1 − 2) = 3(−255)/(−1).",
          ],
          answer: "40 and 765",
        },
        mistakes: [
          "Miscounting the number of terms when the index starts at 0.",
          "Using the arithmetic sum formula on a geometric series.",
        ],
        video: "sigma notation series arithmetic geometric sum formulas",
        videoAlt: ["summation notation series algebra 2"],
        practice: { unit: "sequences", skill: "arithmetic-sequences" },
        tags: ["series", "sigma", "sums"],
      },
      {
        slug: "infinite-geometric-series",
        title: "Infinite Geometric Series",
        summary: "When adding forever still gives a finite answer.",
        level: "Advanced",
        keyIdea: "If |r| < 1, the sum is a₁/(1 − r).",
        simple: `Adding infinitely many terms sometimes gives a finite total.

The test is the common ratio. If |r| < 1, the terms shrink fast enough that the sum converges:

S = a₁/(1 − r)

For 8 + 4 + 2 + 1 + …: a₁ = 8 and r = 1/2, so S = 8/(1 − 1/2) = 16. It never exceeds 16, no matter how many terms you add.

If |r| ≥ 1, the terms do not shrink and the sum grows without bound. There is no finite answer, and the formula does not apply.

This is also the clean proof that 0.999… = 1: it is 0.9 + 0.09 + 0.009 + …, with a₁ = 0.9 and r = 0.1, giving 0.9/0.9 = 1.`,
        complex: `The infinite geometric series ~Σ_{k=0}^{∞} a₁r^k~ converges precisely when ~|r| < 1~, with sum ~S = a₁/(1 − r)~. This follows from the finite sum ~Sₙ = a₁(1 − rⁿ)/(1 − r)~ by taking the limit: ~rⁿ → 0~ exactly when ~|r| < 1~.

For ~|r| ≥ 1~ the partial sums do not approach a limit and the series diverges — including the case ~r = −1~, where the partial sums oscillate between two values without settling.

The result gives the standard conversion of repeating decimals to fractions, and it is the first example students meet of an infinite process with a finite result, which is the conceptual groundwork for limits.

Applications include the total distance travelled by a bouncing ball with a constant rebound ratio, and the economic multiplier, where each round of spending is a fixed fraction of the previous one and the total is finite despite the process continuing indefinitely.`,
        example: {
          prompt: "Find the sum of 27 + 18 + 12 + 8 + …, and write 0.454545… as a fraction.",
          steps: [
            "r = 18/27 = 2/3, and |2/3| < 1 so it converges.",
            "S = 27/(1 − 2/3) = 27/(1/3) = 81.",
            "For the decimal: a₁ = 0.45, r = 0.01.",
            "S = 0.45/(1 − 0.01) = 0.45/0.99.",
          ],
          answer: "81, and 0.454545… = 45/99 = 5/11",
        },
        mistakes: [
          "Applying the formula when |r| ≥ 1, which produces a meaningless number.",
          "Using the finite-sum formula with n = ∞.",
        ],
        video: "infinite geometric series sum convergence explained",
        videoAlt: ["infinite geometric series repeating decimal fraction"],
        practice: { unit: "sequences", skill: "geometric-sequences" },
        tags: ["infinite series", "convergence", "geometric"],
      },
      {
        slug: "binomial-theorem",
        title: "The Binomial Theorem",
        summary: "Expanding (a + b)ⁿ without multiplying it out n times.",
        level: "Advanced",
        keyIdea: "Coefficients come from Pascal's triangle, or from C(n, k).",
        simple: `Expanding (a + b)⁵ by hand is miserable. The binomial theorem gives it directly.

The coefficients are row n of Pascal's triangle, where each entry is the sum of the two above it:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

For (a + b)⁴: 1a⁴ + 4a³b + 6a²b² + 4ab³ + 1b⁴.

The pattern in the letters: a's exponent counts down from n, b's counts up from 0, and every term's exponents add to n.

With a subtraction, the signs alternate, because (a − b)ⁿ is (a + (−b))ⁿ.`,
        complex: `The theorem states

~(a + b)ⁿ = Σ_{k=0}^{n} C(n,k) a^{n−k} b^k~

where ~C(n,k) = n!/(k!(n−k)!)~ is the binomial coefficient, the number of ways to choose k factors of b from n brackets. That combinatorial reading explains why the coefficients are exactly the combination counts and why Pascal's identity ~C(n,k) = C(n−1,k−1) + C(n−1,k)~ produces the triangle.

The expansion has ~n + 1~ terms, and the ~(k+1)~th term is ~C(n,k)a^{n−k}b^k~ — the standard way to extract a single requested term without expanding everything.

Substituting into the theorem yields useful identities: ~a = b = 1~ gives ~Σ C(n,k) = 2ⁿ~, the number of subsets of an n-element set.

For a binomial like ~(2x − 3)⁴~, the whole of ~2x~ and ~−3~ must be substituted for a and b, so coefficients pick up ~2^{n−k}~ and ~(−3)^k~ factors — the most common source of error in applying the theorem.`,
        example: {
          prompt: "Expand (x − 2)⁴.",
          steps: [
            "Row 4 of Pascal: 1, 4, 6, 4, 1; here a = x and b = −2.",
            "x⁴ + 4x³(−2) + 6x²(−2)² + 4x(−2)³ + (−2)⁴.",
            "Compute: x⁴ − 8x³ + 24x² − 32x + 16.",
          ],
          answer: "x⁴ − 8x³ + 24x² − 32x + 16",
        },
        mistakes: [
          "Applying the coefficient but forgetting to raise the −2 to its power.",
          "Using row n − 1 of Pascal's triangle, since the top row is row 0.",
        ],
        video: "binomial theorem pascal's triangle expansion",
        videoAlt: ["binomial theorem expanding binomials algebra 2"],
        practice: null,
        tags: ["binomial theorem", "pascal", "expansion"],
      },
    ],
  },
  {
    id: "a2-trig",
    title: "Introduction to Trigonometry",
    blurb:
      "Angles, the unit circle, and the functions that describe anything that repeats.",
    topics: [
      {
        slug: "right-triangle-trig",
        title: "Right Triangle Trigonometry",
        summary: "SOH-CAH-TOA, and finding sides or angles from one another.",
        level: "Core",
        keyIdea: "sin = opp/hyp, cos = adj/hyp, tan = opp/adj.",
        simple: `In a right triangle, the three basic ratios relate an angle to two sides.

sin θ = opposite / hypotenuse
cos θ = adjacent / hypotenuse
tan θ = opposite / adjacent

Remembered as SOH-CAH-TOA.

"Opposite" and "adjacent" are relative to the angle you are working with, so they swap when you switch angles. The hypotenuse never changes.

To find a missing side, set up the ratio containing the two sides you care about and solve.

To find a missing angle, use the inverse functions: sin⁻¹, cos⁻¹, tan⁻¹. If sin θ = 0.6, then θ = sin⁻¹(0.6) ≈ 36.87°.

Check your calculator is in degrees, not radians. That single setting causes more wrong answers than any concept here.`,
        complex: `The ratios are well defined because all right triangles with a given acute angle are similar, so corresponding side ratios are invariant — the same similarity argument that makes slope well defined.

The inverse functions ~sin⁻¹, cos⁻¹, tan⁻¹~ return the unique angle within a restricted range (~[−90°, 90°]~ for sin⁻¹ and tan⁻¹, ~[0°, 180°]~ for cos⁻¹), a restriction required because the trig functions are not one-to-one. The notation again denotes an inverse function rather than a reciprocal; the reciprocals are separately named cosecant, secant and cotangent.

The Pythagorean identity ~sin²θ + cos²θ = 1~ is the Pythagorean theorem applied to a triangle with hypotenuse 1, and ~tan θ = sin θ / cos θ~ follows directly from the definitions.

Beyond right triangles, the Law of Sines ~a/sin A = b/sin B = c/sin C~ and the Law of Cosines ~c² = a² + b² − 2ab·cos C~ handle oblique triangles, with the Law of Cosines reducing to Pythagoras when ~C = 90°~.`,
        example: {
          prompt: "A ladder leans at 65° with its foot 3 m from a wall. How long is the ladder?",
          steps: [
            "The 3 m is adjacent to the 65° angle; the ladder is the hypotenuse.",
            "cos 65° = 3/L.",
            "L = 3/cos 65°.",
            "cos 65° ≈ 0.4226.",
          ],
          answer: "About 7.1 m",
        },
        mistakes: [
          "Leaving the calculator in radian mode.",
          "Choosing the ratio before identifying which sides are opposite and adjacent to the chosen angle.",
        ],
        video: "right triangle trigonometry SOHCAHTOA explained",
        videoAlt: ["trigonometry finding missing sides angles right triangle"],
        practice: null,
        tags: ["trigonometry", "SOHCAHTOA", "right triangles"],
      },
      {
        slug: "unit-circle-and-radians",
        title: "The Unit Circle & Radians",
        summary: "Extending trig past 90°, and the other way to measure an angle.",
        level: "Advanced",
        keyIdea: "On the unit circle, a point at angle θ is (cos θ, sin θ).",
        simple: `Right triangles only handle angles up to 90°. The unit circle handles all of them.

Draw a circle of radius 1 centred at the origin. For any angle θ measured anticlockwise from the positive x-axis, the point on the circle is exactly (cos θ, sin θ).

That definition works for any angle, including obtuse, negative and beyond 360°.

Radians are the second way to measure angles. Instead of 360° in a circle there are 2π radians, because the circumference of a unit circle is 2π. So 180° = π, 90° = π/2, 60° = π/3.

Convert by multiplying: degrees to radians, multiply by π/180. The other way, multiply by 180/π.

Worth memorising: the values at 0, π/6, π/4, π/3, π/2.`,
        complex: `Defining ~cos θ~ and ~sin θ~ as the coordinates of the point at angle θ on the unit circle extends the ratios to all real θ and makes both functions periodic with period ~2π~. The Pythagorean identity ~cos²θ + sin²θ = 1~ is then simply the circle's equation ~x² + y² = 1~.

Sign by quadrant follows from the coordinates: both positive in QI, sin positive in QII, both negative in QIII, cos positive in QIV.

A radian is the angle subtending an arc equal to the radius, so ~θ = s/r~ — a dimensionless ratio, which is why radians make the arc length and sector area formulas simplify to ~s = rθ~ and ~A = ½r²θ~.

Radians are not merely an alternative convention. The derivative relationships ~d/dx(sin x) = cos x~ and the limit ~lim_{x→0} sin(x)/x = 1~ hold only in radians, which is why all analytic work uses them.

Reference angles reduce any angle to its acute equivalent, so the memorised first-quadrant values plus a sign determine every exact value on the circle.`,
        example: {
          prompt: "Convert 135° to radians and find cos(135°) exactly.",
          steps: [
            "135 × π/180 = 3π/4.",
            "135° is in QII, where cosine is negative.",
            "Reference angle: 180° − 135° = 45°, and cos 45° = √2/2.",
          ],
          answer: "3π/4, and cos(135°) = −√2/2",
        },
        mistakes: [
          "Applying the degrees-to-radians factor in the wrong direction.",
          "Losing the sign by ignoring which quadrant the angle is in.",
        ],
        video: "unit circle radians explained trigonometry",
        videoAlt: ["unit circle exact values reference angles"],
        practice: null,
        tags: ["unit circle", "radians", "trigonometry"],
      },
      {
        slug: "graphing-trig-functions",
        title: "Graphing Sine & Cosine",
        summary: "Amplitude, period, and shifts of a wave.",
        level: "Advanced",
        keyIdea: "For y = a·sin(b(x − h)) + k, amplitude is |a| and period is 2π/b.",
        simple: `Sine and cosine graphs are waves that repeat forever.

Basic y = sin x: starts at 0, peaks at 1, returns to 0, dips to −1, back to 0. One full cycle takes 2π.
y = cos x is the same wave starting at its peak instead of at zero.

For y = a·sin(b(x − h)) + k:
- |a| is the amplitude — how tall from the midline
- 2π/b is the period — how long one cycle takes
- h shifts left/right (a phase shift)
- k moves the midline up or down

For y = 3sin(2x): amplitude 3, period 2π/2 = π. It is three times taller and twice as fast as the basic wave.`,
        complex: `Sine and cosine are periodic with period ~2π~, amplitude 1 and midline ~y = 0~. The general form ~y = a·sin(b(x − h)) + k~ transforms these: ~|a|~ is the amplitude (with ~a < 0~ reflecting across the midline), the period is ~2π/|b|~, h is the phase shift and k the vertical shift, with midline ~y = k~ and range ~[k − |a|, k + |a|]~.

The parameter b compresses horizontally by ~1/b~, which is the same inverted horizontal behaviour seen in all function transformations. As there, the argument must be factored — ~sin(2x − π)~ is ~sin(2(x − π/2))~, so the phase shift is ~π/2~ rather than π.

Cosine is sine shifted left by ~π/2~, so ~cos x = sin(x + π/2)~ and either function can model any sinusoid; the choice is made by whichever starting point matches the data.

Tangent behaves differently: period π, no amplitude, and vertical asymptotes where ~cos x = 0~, that is at ~x = π/2 + nπ~.

Sinusoidal models describe anything cyclical — tides, daylight hours, alternating current, sound — where amplitude, period, phase and midline each carry a physical meaning.`,
        example: {
          prompt: "For y = −2cos(3x) + 1, state the amplitude, period, midline and range.",
          steps: [
            "Amplitude: |−2| = 2, and the negative reflects it.",
            "Period: 2π/3.",
            "Midline: y = 1.",
            "Range: 1 ± 2.",
          ],
          answer: "Amplitude 2, period 2π/3, midline y = 1, range [−1, 3], reflected.",
        },
        mistakes: [
          "Reporting a negative amplitude. Amplitude is a distance, so it uses the absolute value.",
          "Reading the phase shift before factoring b out of the argument.",
        ],
        video: "graphing sine and cosine amplitude period phase shift",
        videoAlt: ["graphing trig functions transformations algebra 2"],
        practice: null,
        tags: ["graphing", "sine", "period"],
      },
    ],
  },
  {
    id: "a2-conics-matrices",
    title: "Conics, Matrices & Probability",
    blurb:
      "The remaining Algebra 2 toolkit: curves from slicing a cone, grids of numbers, and counting.",
    topics: [
      {
        slug: "circles-and-parabolas-conics",
        title: "Circles & Parabolas as Conics",
        summary: "Centre-radius form, and completing the square to find it.",
        level: "Core",
        keyIdea: "(x − h)² + (y − k)² = r² is a circle centred at (h, k).",
        simple: `A circle with centre (h, k) and radius r has equation:

(x − h)² + (y − k)² = r²

For (x − 2)² + (y + 3)² = 25: centre (2, −3), radius 5. Watch the signs — y + 3 means k = −3 — and remember the right side is r², so the radius is √25 = 5.

If the equation is expanded instead, complete the square on both x and y to recover this form.

Parabolas are the other conic you meet in Algebra 2. y = a(x − h)² + k opens vertically; x = a(y − k)² + h opens horizontally. Swapping which variable is squared is what turns the parabola on its side.`,
        complex: `Conic sections arise as intersections of a plane with a double cone, producing circles, ellipses, parabolas and hyperbolas. Their general second-degree equation is ~Ax² + Bxy + Cy² + Dx + Ey + F = 0~, and with ~B = 0~ the type is determined by A and C: equal gives a circle, same sign and unequal gives an ellipse, opposite signs gives a hyperbola, and exactly one of them zero gives a parabola.

The centre-radius form follows from the distance formula: ~(x − h)² + (y − k)² = r²~ states that every point is r from the centre, so it is the Pythagorean theorem written as a locus.

Converting from expanded form requires completing the square in both variables, the same procedure as for quadratics but applied twice. A negative result on the right indicates no real graph, and zero indicates the degenerate case of a single point.

Each conic also has a focus-directrix definition: a parabola is the locus equidistant from a focus and a directrix, which is why parabolic reflectors focus parallel rays to a point.`,
        example: {
          prompt: "Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.",
          steps: [
            "Group: (x² − 6x) + (y² + 4y) = 12.",
            "Complete both squares: add 9 and 4 to both sides.",
            "(x − 3)² + (y + 2)² = 12 + 9 + 4 = 25.",
          ],
          answer: "Centre (3, −2), radius 5",
        },
        mistakes: [
          "Reporting r² as the radius.",
          "Adding the completing constants to the left side only.",
        ],
        video: "equation of a circle completing the square conics",
        videoAlt: ["circles conic sections center radius form"],
        practice: null,
        tags: ["conics", "circles", "completing the square"],
      },
      {
        slug: "matrices-and-operations",
        title: "Matrices & Their Operations",
        summary: "Grids of numbers, and the surprisingly strict multiplication rule.",
        level: "Advanced",
        keyIdea: "To multiply, the first matrix's columns must equal the second's rows.",
        simple: `A matrix is a rectangular grid of numbers, described by its size: rows × columns.

Adding and subtracting: only for matrices of identical size, done entry by entry.

Scalar multiplication: multiply every entry.

Matrix multiplication is the odd one. To multiply A (m×n) by B (p×q), you need n = p, and the result is m×q. Each entry is a row of A paired with a column of B: multiply matching elements and add.

Order matters. AB and BA are usually different, and often only one of them is even defined.

Matrices are the compact way to store and solve systems of equations, and they are how graphics and machine learning represent transformations of data.`,
        complex: `A matrix is an ~m × n~ array. Addition and scalar multiplication are entrywise and require identical dimensions; matrix multiplication is defined by ~(AB)_{ij} = Σ_k A_{ik}B_{kj}~, so the inner dimensions must agree and the product is ~m × q~.

This definition is not arbitrary: it makes matrix multiplication correspond to composition of linear transformations, which is why it is associative but not commutative — composing two transformations in the other order generally gives a different result.

The identity matrix I has ones on the diagonal and zeros elsewhere, satisfying ~AI = IA = A~. A square matrix A has an inverse ~A⁻¹~ with ~AA⁻¹ = I~ exactly when its determinant is nonzero; for ~2 × 2~ matrices, ~det = ad − bc~ and ~A⁻¹ = (1/det)·[[d, −b], [−c, a]]~.

A linear system written as ~AX = B~ then solves as ~X = A⁻¹B~, which is the matrix route to solving systems. A zero determinant signals that the system is either inconsistent or dependent — the same trichotomy met in Algebra 1, now detected by a single number.`,
        example: {
          prompt: "Multiply [[1, 2], [3, 4]] by [[5], [6]], and find the determinant of the first.",
          steps: [
            "Sizes: 2×2 times 2×1 gives 2×1.",
            "Row 1: 1(5) + 2(6) = 17.",
            "Row 2: 3(5) + 4(6) = 39.",
            "Determinant: (1)(4) − (2)(3) = −2.",
          ],
          answer: "[[17], [39]], determinant −2",
        },
        mistakes: [
          "Multiplying matrices entry by entry as if it were addition.",
          "Assuming AB = BA.",
        ],
        video: "matrix operations multiplication determinant explained",
        videoAlt: ["matrices addition multiplication algebra 2"],
        practice: null,
        tags: ["matrices", "determinant", "systems"],
      },
      {
        slug: "permutations-and-combinations",
        title: "Permutations & Combinations",
        summary: "One question decides which formula you need: does order matter?",
        level: "Advanced",
        keyIdea: "Order matters → permutation. Order does not → combination.",
        simple: `Both count possibilities, and the difference is whether order matters.

Permutation (order matters, like a race podium or a password):
P(n, r) = n! / (n − r)!

Combination (order does not, like a committee or a lottery ticket):
C(n, r) = n! / (r!(n − r)!)

The extra r! divides out all the rearrangements you do not want to count separately.

From 10 people, choosing 3 for gold/silver/bronze is P(10,3) = 720. Choosing 3 for a committee is C(10,3) = 120 — exactly 6 times fewer, because each committee of 3 can be ordered in 3! = 6 ways.

The test: would swapping two of your picks give a genuinely different outcome?`,
        complex: `With ~n! = n(n−1)…1~ and ~0! = 1~, ordered selections without repetition number ~P(n,r) = n!/(n−r)!~ and unordered selections number ~C(n,r) = n!/(r!(n−r)!)~.

The relationship ~C(n,r) = P(n,r)/r!~ formalises the correction: every unordered set of r elements corresponds to ~r!~ distinct orderings, so dividing removes the overcount.

Combinations are the binomial coefficients, which is why Pascal's triangle, the binomial theorem and counting problems are the same mathematics in different notation, and why ~C(n,r) = C(n, n−r)~ — choosing which r to include is equivalent to choosing which ~n−r~ to exclude.

Repetition changes both formulas: ordered with repetition gives ~nʳ~, and unordered with repetition gives ~C(n+r−1, r)~.

In probability, these supply the counts for ~P(E) = |E|/|S|~ where outcomes are equally likely, so hypergeometric problems such as card hands are solved by counting favourable combinations over total combinations.`,
        example: {
          prompt: "From 12 students, how many ways to pick a president, VP and secretary? How many 3-person committees?",
          steps: [
            "Distinct roles, so order matters: P(12,3) = 12 × 11 × 10.",
            "= 1,320.",
            "Committee has no roles: C(12,3) = 1320/3!.",
          ],
          answer: "1,320 ordered slates; 220 committees",
        },
        mistakes: [
          "Using a permutation for a committee, inflating the count by r!.",
          "Computing n!/r! instead of n!/(n−r)! for a permutation.",
        ],
        video: "permutations and combinations explained difference",
        videoAlt: ["permutations combinations counting problems"],
        practice: null,
        tags: ["permutations", "combinations", "counting"],
      },
      {
        slug: "probability-and-distributions",
        title: "Conditional Probability & Distributions",
        summary: "Updating a probability on new information, and the shape of the normal curve.",
        level: "Advanced",
        keyIdea: "P(A|B) = P(A and B)/P(B).",
        simple: `Conditional probability asks: given that B happened, how likely is A?

P(A|B) = P(A and B) / P(B)

Knowing B happened shrinks the world to just the B outcomes, so you divide by P(B) to rescale.

If knowing B tells you nothing about A, the events are independent and P(A|B) = P(A).

The normal distribution is the bell curve that describes heights, measurement errors and test scores. It is symmetric about the mean, and the empirical rule says roughly:
- 68% of values fall within 1 standard deviation of the mean
- 95% within 2
- 99.7% within 3

So a score 2 standard deviations above average beats about 97.5% of the group.`,
        complex: `Conditional probability is defined as ~P(A|B) = P(A ∩ B)/P(B)~ for ~P(B) > 0~, which rescales the sample space to B. Rearranging gives the multiplication rule ~P(A ∩ B) = P(B)P(A|B)~, and independence is the condition ~P(A|B) = P(A)~, equivalently ~P(A ∩ B) = P(A)P(B)~.

Bayes' theorem, ~P(A|B) = P(B|A)P(A)/P(B)~, inverts the conditioning and is the basis of diagnostic reasoning. Its most-cited consequence is that a test with high sensitivity can still yield mostly false positives when the base rate ~P(A)~ is low — an outcome that is counterintuitive but follows directly from the arithmetic.

The normal distribution ~N(μ, σ²)~ is symmetric and unimodal, with the empirical rule giving approximately 68/95/99.7% within one, two and three standard deviations. Standardising via ~z = (x − μ)/σ~ converts any normal variable to the standard normal, so a single table serves all cases.

The Central Limit Theorem explains the distribution's ubiquity: sample means approach normality as sample size grows regardless of the underlying population's shape, which is what licenses normal-based inference throughout statistics.`,
        example: {
          prompt: "In a class, 40% study Spanish, 25% study art, and 10% study both. Given a student studies Spanish, what is the probability they study art?",
          steps: [
            "P(art | Spanish) = P(both)/P(Spanish).",
            "= 0.10/0.40.",
            "= 0.25.",
            "Since P(art) = 0.25 too, the events are independent.",
          ],
          answer: "0.25 — and the two subjects turn out to be independent here.",
        },
        mistakes: [
          "Dividing by P(A) rather than by the given event's probability P(B).",
          "Treating mutually exclusive events as independent. They are the opposite.",
        ],
        video: "conditional probability normal distribution explained",
        videoAlt: ["conditional probability independence empirical rule"],
        practice: null,
        tags: ["probability", "conditional", "normal distribution"],
      },
    ],
  },
];

export const course = {
  id: "algebra-2",
  short: "Algebra 2",
  title: "Algebra 2",
  tagline: "Function families, complex numbers, logarithms and the run-up to calculus.",
  description:
    "Algebra 2 widens the lens. Instead of one function family you work with eight, and the tools become general: transformations that apply to any graph, a number system where every polynomial has roots, and logarithms for anything living in an exponent. This is the course that decides how comfortable precalculus and calculus feel.",
  color: "#1e40af",
  units,
};
