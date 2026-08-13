/**
 * Algebra 1 curriculum for Algebridge Directory.
 *
 * Convention (same as the other course files):
 *   simple  — no jargon, the version you say out loud to someone stuck
 *   complex — the precise version, with names, general forms and the reasons
 *   ~text~  — renders as an inline maths chip
 */

const units = [
  {
    id: "a1-foundations",
    title: "Algebra Foundations",
    blurb:
      "The number system, the properties you are allowed to use, and exponent rules that everything later depends on.",
    topics: [
      {
        slug: "real-number-system",
        title: "The Real Number System",
        summary: "Naturals, integers, rationals, irrationals — and which box a number lives in.",
        level: "Intro",
        keyIdea: "Rational numbers can be written as a fraction of integers; irrational ones cannot.",
        simple: `Numbers sort into nested groups.

Counting numbers: 1, 2, 3, … Add zero and you get whole numbers. Add negatives and you get integers.

Rational numbers are anything writable as a fraction of two integers: 3/4, −5 (which is −5/1), 0.25, and 0.333… since that is 1/3. As decimals they either stop or repeat.

Irrational numbers cannot be written as such a fraction. Their decimals run forever without repeating. √2, π and e are the famous ones.

Together, rationals and irrationals make the real numbers — everything on the number line.`,
        complex: `The containments are strict: ~ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ~. Each extension exists to make an operation total. ℤ makes subtraction always possible, ℚ makes division by nonzero always possible, and ℝ fills the gaps ℚ leaves — the completeness property, which guarantees that a length like the diagonal of a unit square corresponds to an actual number.

A real number is rational exactly when its decimal expansion terminates or is eventually periodic. √2 is irrational by the classical proof: assuming ~√2 = p/q~ in lowest terms forces both p and q to be even, contradicting the assumption.

For classification questions, note that a radical is not automatically irrational — ~√16 = 4~ is an integer — and that operations do not preserve irrationality: ~√2 · √2 = 2~ and ~π + (−π) = 0~ are both rational. The rationals are closed under the four operations (excluding division by zero); the irrationals are closed under none of them.`,
        example: {
          prompt: "Classify √49, −7/2, 0.181818…, and √10 as fully as possible.",
          steps: [
            "√49 = 7: natural, whole, integer, rational, real.",
            "−7/2 = −3.5: rational and real, not an integer.",
            "0.181818… repeats, so it is rational (2/11).",
            "√10 does not simplify and 10 is not a perfect square, so it is irrational.",
          ],
          answer: "7 is a natural number; −7/2 and 0.18… are rational; √10 is irrational. All four are real.",
        },
        mistakes: [
          "Assuming every square root is irrational.",
          "Calling a long decimal irrational when it actually repeats.",
        ],
        video: "real number system classifying numbers rational irrational",
        videoAlt: ["rational and irrational numbers explained"],
        practice: null,
        tags: ["real numbers", "rational", "irrational"],
      },
      {
        slug: "properties-of-real-numbers",
        title: "Properties of Real Numbers",
        summary: "Commutative, associative, distributive, identity, inverse — the rules that justify every step.",
        level: "Intro",
        keyIdea: "These properties are the permissions for rearranging an expression.",
        simple: `These properties name the moves you already make.

Commutative: order does not matter for + and ×. 3 + 5 = 5 + 3.
Associative: grouping does not matter for + and ×. (2 + 3) + 4 = 2 + (3 + 4).
Distributive: a(b + c) = ab + ac.
Identity: adding 0 or multiplying by 1 changes nothing.
Inverse: a + (−a) = 0 and a × 1/a = 1.

Two warnings. Subtraction and division are neither commutative nor associative: 5 − 3 is not 3 − 5.

These matter because when a proof or a teacher asks "why are you allowed to do that," these are the answers.`,
        complex: `The reals form a field: an abelian group under addition, the nonzero reals an abelian group under multiplication, and multiplication distributes over addition. Every algebraic manipulation you will ever perform is a finite chain of these axioms plus the properties of equality.

Distributivity is the only axiom linking the two operations, which is why it does so much work — factoring, expanding, combining like terms and the FOIL pattern are all it.

Subtraction and division are not separate operations but shorthand for adding an inverse and multiplying by an inverse. This explains their failure to commute directly: ~a − b = a + (−b)~ and ~b + (−a)~ are genuinely different numbers.

The additive identity has no multiplicative inverse, which is the structural reason division by zero is undefined rather than merely inconvenient: no real number x satisfies ~0·x = 1~.`,
        example: {
          prompt: "Name the property justifying each step: 4(x + 3) + 2x = 4x + 12 + 2x = 4x + 2x + 12 = 6x + 12.",
          steps: [
            "Step 1 expands the parentheses: distributive property.",
            "Step 2 reorders the terms: commutative property of addition.",
            "Step 3 combines 4x + 2x: distributive property in reverse.",
          ],
          answer: "Distributive, commutative, distributive (as factoring).",
        },
        mistakes: [
          "Claiming subtraction is commutative.",
          "Confusing associative (regrouping) with commutative (reordering).",
        ],
        video: "properties of real numbers algebra explained",
        videoAlt: ["commutative associative distributive property algebra"],
        practice: null,
        tags: ["properties", "axioms", "justification"],
      },
      {
        slug: "exponent-rules",
        title: "Laws of Exponents",
        summary: "Multiply means add, divide means subtract, power of a power means multiply.",
        level: "Core",
        keyIdea: "Same base: aᵐ·aⁿ = aᵐ⁺ⁿ and aᵐ/aⁿ = aᵐ⁻ⁿ.",
        simple: `The exponent laws all come from counting factors.

x³ · x⁴ means (xxx)(xxxx) = x⁷. So multiplying adds exponents.
x⁵/x² cancels two x's and leaves x³. So dividing subtracts exponents.
(x³)² means x³ · x³ = x⁶. So a power of a power multiplies exponents.
(xy)³ = x³y³. The exponent reaches every factor inside.

The critical condition: the bases must match. x³ · y⁴ cannot be combined at all.

And the biggest trap: x³ + x⁴ does not simplify. These laws are for multiplying and dividing, never for adding.`,
        complex: `For a ≠ 0 and integers m, n:

~aᵐ·aⁿ = aᵐ⁺ⁿ    aᵐ/aⁿ = aᵐ⁻ⁿ    (aᵐ)ⁿ = aᵐⁿ    (ab)ⁿ = aⁿbⁿ    (a/b)ⁿ = aⁿ/bⁿ~

Each is proved for positive integers by counting factors, then *extended* to zero and negative exponents by requiring the rules to keep holding. Applying the quotient rule to ~aⁿ/aⁿ~ forces ~a⁰ = 1~; applying it to ~a⁰/aⁿ~ forces ~a⁻ⁿ = 1/aⁿ~. Negative exponents are therefore not a new idea but the unique consistent extension.

No rule exists for ~aᵐ + aⁿ~, because addition of powers does not factor into a single power. The most that can be done is factoring out the smaller: ~x³ + x⁴ = x³(1 + x)~.

Note also that ~(a + b)ⁿ ≠ aⁿ + bⁿ~. Exponentiation distributes over multiplication, never over addition — the correct expansion requires the binomial theorem.`,
        example: {
          prompt: "Simplify (3x²y⁵)³ · (2x⁴y)⁻¹.",
          steps: [
            "First factor: 3³x⁶y¹⁵ = 27x⁶y¹⁵.",
            "Second factor: (2x⁴y)⁻¹ = 1/(2x⁴y).",
            "Multiply: 27x⁶y¹⁵ / (2x⁴y).",
            "Subtract exponents: (27/2)x²y¹⁴.",
          ],
          answer: "27x²y¹⁴/2",
        },
        mistakes: [
          "Adding exponents when the bases differ.",
          "Simplifying x² + x³ to x⁵.",
        ],
        video: "laws of exponents rules explained algebra",
        videoAlt: ["exponent rules product quotient power"],
        practice: { unit: "exponents-radicals", skill: "exponent-rules" },
        tags: ["exponents", "laws", "simplifying"],
      },
      {
        slug: "negative-and-zero-exponents",
        title: "Negative & Zero Exponents",
        summary: "What a negative exponent actually means, and why it is not a negative answer.",
        level: "Core",
        keyIdea: "a⁻ⁿ = 1/aⁿ — a negative exponent means reciprocal, not negative.",
        simple: `A negative exponent tells you to flip, not to go negative.

2⁻³ = 1/2³ = 1/8. The answer is positive.

Anything (except 0) to the power 0 is 1. Not 0.

A factor with a negative exponent moves across the fraction bar and the exponent turns positive. x⁻² in the numerator becomes x² in the denominator, and vice versa.

Simplest routine for an expression like 3x⁻²: only the x moves, because the exponent is attached to x alone. It becomes 3/x², not 1/(3x²).`,
        complex: `The definitions ~a⁰ = 1~ and ~a⁻ⁿ = 1/aⁿ~ (a ≠ 0) are forced by requiring the quotient rule to hold for all integers, as shown by ~aᵐ/aᵐ = a⁰~ and ~a⁰/aⁿ = a⁻ⁿ~. They are the unique consistent extension, not a convention chosen for convenience.

Consequently ~(a/b)⁻ⁿ = (b/a)ⁿ~, which is often the fastest simplification route for a compound fraction raised to a negative power.

Two precision points. First, the exponent binds only to its immediate base: in ~3x⁻²~ the 3 is unaffected, while in ~(3x)⁻²~ it is. Second, ~a⁻ⁿ~ is positive for positive a regardless of n; sign and exponent are independent, so ~(−2)⁻³ = −1/8~ is negative because the *base* is negative, not because the exponent is.

Standard simplified form leaves no negative exponents, which is why the final step of most exponent problems is rewriting them as reciprocals.`,
        example: {
          prompt: "Simplify (2x⁻³y²)/(8x²y⁻¹) with no negative exponents.",
          steps: [
            "Coefficients: 2/8 = 1/4.",
            "x: x⁻³/x² = x⁻⁵.",
            "y: y²/y⁻¹ = y³.",
            "Move x⁻⁵ to the denominator: y³/(4x⁵).",
          ],
          answer: "y³/(4x⁵)",
        },
        mistakes: [
          "Writing 2⁻³ = −8.",
          "Moving the coefficient along with the variable in 3x⁻².",
        ],
        video: "negative and zero exponents explained",
        videoAlt: ["simplifying negative exponents algebra"],
        practice: { unit: "exponents-radicals", skill: "negative-fractional-exponents" },
        tags: ["exponents", "negative exponents", "reciprocal"],
      },
      {
        slug: "scientific-notation",
        title: "Scientific Notation",
        summary: "Writing very large and very small numbers without counting zeros.",
        level: "Core",
        keyIdea: "One digit before the decimal point, times a power of ten.",
        simple: `Scientific notation writes a number as (something between 1 and 10) × 10^power.

93,000,000 becomes 9.3 × 10⁷. Count how many places the decimal moved left: seven.
0.00042 becomes 4.2 × 10⁻⁴. Moving right gives a negative power.

To multiply, multiply the fronts and add the powers. To divide, divide the fronts and subtract the powers.

Afterwards, check the front number is still between 1 and 10. If you get 34 × 10⁵, fix it to 3.4 × 10⁶.`,
        complex: `Standard form is ~a × 10ⁿ~ with ~1 ≤ |a| < 10~ and n an integer. The constraint on a makes the representation unique, which is what allows two numbers to be compared by exponent first and mantissa second.

Arithmetic follows the exponent laws:

~(a×10ᵐ)(b×10ⁿ) = ab×10ᵐ⁺ⁿ    (a×10ᵐ)/(b×10ⁿ) = (a/b)×10ᵐ⁻ⁿ~

Addition and subtraction require a common exponent first, exactly as adding fractions requires a common denominator — the powers of ten are the units, and only like units combine.

Renormalising after arithmetic is a required step, since ~ab~ may land outside [1, 10). Beyond notation, the exponent is a statement about magnitude: comparing ~10⁷~ and ~10⁴~ tells you one quantity is a thousand times the other without any further computation, which is the basis of order-of-magnitude estimation in science.`,
        example: {
          prompt: "Compute (6.4 × 10⁵)(5 × 10⁻⁸) in scientific notation.",
          steps: [
            "Multiply the fronts: 6.4 × 5 = 32.",
            "Add the exponents: 5 + (−8) = −3.",
            "So far 32 × 10⁻³, which is not standard form.",
            "Renormalise: 32 = 3.2 × 10¹, so 3.2 × 10⁻².",
          ],
          answer: "3.2 × 10⁻²",
        },
        mistakes: [
          "Leaving an answer like 32 × 10⁻³ in non-standard form.",
          "Adding exponents when adding the numbers rather than multiplying them.",
        ],
        video: "scientific notation multiplying dividing explained",
        videoAlt: ["scientific notation operations algebra"],
        practice: { unit: "exponents-radicals", skill: "scientific-notation" },
        tags: ["scientific notation", "powers of ten"],
      },
      {
        slug: "simplifying-radicals",
        title: "Simplifying Radicals",
        summary: "Pulling perfect squares out from under the root sign.",
        level: "Core",
        keyIdea: "√(ab) = √a·√b — split off the largest perfect square.",
        simple: `To simplify a square root, find a perfect square hiding inside.

√72: since 72 = 36 × 2 and 36 is a perfect square, √72 = 6√2.

If you do not spot the largest square immediately, take any square and repeat. 72 = 4 × 18 gives 2√18, then 18 = 9 × 2 gives 2 · 3√2 = 6√2. Same answer.

Radicals add only when the parts under the root match, exactly like like terms: 3√5 + 2√5 = 5√5, but 3√5 + 2√7 stays as it is.

Multiplication is freer: √3 · √12 = √36 = 6.`,
        complex: `The product and quotient rules for radicals, ~√(ab) = √a·√b~ and ~√(a/b) = √a/√b~, hold for non-negative a and b. They fail for negatives, which is why ~√(−4)·√(−9)~ is not ~√36~ — that computation gives 6 instead of the correct −6 and is the standard cautionary example before imaginary numbers are introduced properly.

Simplified form requires: no perfect-square factor under the radical, no fractions under the radical, and no radical in a denominator. The last condition is met by rationalising — multiply by ~√b/√b~ for a monomial denominator, or by the conjugate ~(a − √b)~ for a binomial one, since ~(a + √b)(a − √b) = a² − b~ is rational.

With variables, ~√(x²) = |x|~ unless the domain guarantees x ≥ 0. Textbooks often assume non-negative variables to avoid the absolute value, but the assumption is doing real work and should be stated.`,
        example: {
          prompt: "Simplify √50 + √18, then rationalise 6/√3.",
          steps: [
            "√50 = √(25·2) = 5√2 and √18 = √(9·2) = 3√2.",
            "Like radicals add: 5√2 + 3√2 = 8√2.",
            "6/√3 × √3/√3 = 6√3/3.",
          ],
          answer: "8√2, and 6/√3 = 2√3",
        },
        mistakes: [
          "Adding √50 + √18 as √68.",
          "Leaving a radical in the denominator.",
        ],
        video: "simplifying radicals square roots explained",
        videoAlt: ["simplifying radical expressions adding radicals"],
        practice: { unit: "exponents-radicals", skill: "simplifying-radicals" },
        tags: ["radicals", "square roots", "simplifying"],
      },
    ],
  },
  {
    id: "a1-equations",
    title: "Linear Equations",
    blurb:
      "Solving for one unknown in every arrangement it can appear, including formulas with several letters.",
    topics: [
      {
        slug: "multi-step-equations",
        title: "Multi-Step Equations",
        summary: "Simplify each side first, then isolate — in that order.",
        level: "Core",
        keyIdea: "Distribute, combine like terms, then undo operations in reverse.",
        simple: `The reliable order for any linear equation:

1. Distribute to clear parentheses.
2. Combine like terms on each side separately.
3. Move variables to one side, numbers to the other.
4. Divide by the coefficient.

For 3(x + 4) − 2x = 18:
3x + 12 − 2x = 18 → x + 12 = 18 → x = 6.

Check by substituting: 3(10) − 12 = 18. ✓

Checking is not optional politeness. It is a complete verification, and it catches sign errors that are otherwise invisible.`,
        complex: `Every step must produce an equivalent equation — one with the same solution set. Adding the same expression to both sides and multiplying both sides by a nonzero constant preserve equivalence; multiplying by an expression that could be zero does not.

The standard order is chosen to minimise fractions and sign errors, but it is not the only valid order. In ~3(x + 4) = 18~, dividing by 3 first is faster than distributing. Recognising which operation was applied *last* to the variable side tells you which to undo first.

A linear equation in one variable, once simplified to ~ax = b~, has exactly one solution when a ≠ 0, no solution when a = 0 and b ≠ 0 (an inconsistent equation such as ~0 = 5~), and infinitely many when a = 0 and b = 0 (an identity such as ~0 = 0~). Those two degenerate cases are worth recognising immediately: seeing the variables vanish is information, not an error.`,
        example: {
          prompt: "Solve 5(2x − 3) + 4 = 3(x + 5) − 2.",
          steps: [
            "Distribute both sides: 10x − 15 + 4 = 3x + 15 − 2.",
            "Combine: 10x − 11 = 3x + 13.",
            "Subtract 3x: 7x − 11 = 13.",
            "Add 11 then divide by 7: 7x = 24, x = 24/7.",
          ],
          answer: "x = 24/7",
        },
        mistakes: [
          "Distributing a negative to only the first term inside.",
          "Moving a term across the equals sign without changing its sign.",
        ],
        video: "multi step equations solving explained algebra",
        videoAlt: ["solving multi step equations with distributive property"],
        practice: { unit: "solving-equations", skill: "multi-step-equations" },
        tags: ["equations", "multi-step", "solving"],
      },
      {
        slug: "variables-on-both-sides",
        title: "Variables on Both Sides",
        summary: "Getting every x onto one side, and what it means when they all disappear.",
        level: "Core",
        keyIdea: "Collect variables on whichever side keeps the coefficient positive.",
        simple: `When x appears on both sides, gather them together first.

7x − 4 = 3x + 12. Subtract 3x from both sides: 4x − 4 = 12. Then 4x = 16, so x = 4.

Tip: move the variables to whichever side has the bigger coefficient. That keeps the number in front positive and avoids one sign error.

Two odd endings can happen. If you end at something true like 5 = 5, every number works — infinitely many solutions. If you end at something false like 3 = 8, nothing works — no solution. Neither is a mistake; both are real answers.`,
        complex: `Collecting like terms across the equality uses the addition property of equality, and choosing the side that leaves a positive leading coefficient is purely error-reduction — mathematically either choice is fine.

The degenerate outcomes classify the equation. An identity (~2(x+3) = 2x+6~) reduces to ~0 = 0~, true for all reals, so the solution set is ℝ. A contradiction (~2x + 1 = 2x + 5~) reduces to ~0 = 4~, so the solution set is ∅. Geometrically these are two lines that coincide and two parallel lines respectively — the same trichotomy that reappears with systems of equations, which is not a coincidence: solving ~f(x) = g(x)~ is finding where two lines intersect.

Reporting these correctly matters. "No solution" and "the solution is 0" are entirely different claims, and writing 0 when the equation is a contradiction is a substantive error rather than a notational one.`,
        example: {
          prompt: "Solve 4(x − 2) + 6 = 2(2x + 1).",
          steps: [
            "Distribute: 4x − 8 + 6 = 4x + 2.",
            "Combine: 4x − 2 = 4x + 2.",
            "Subtract 4x: −2 = 2, which is false.",
          ],
          answer: "No solution (the variables cancel and leave a contradiction).",
        },
        mistakes: [
          "Writing x = 0 when the variable terms cancel out.",
          "Subtracting a variable term from one side only.",
        ],
        video: "equations with variables on both sides explained",
        videoAlt: ["solving equations variables both sides no solution"],
        practice: { unit: "solving-equations", skill: "multi-step-equations" },
        tags: ["equations", "both sides", "identity"],
      },
      {
        slug: "equations-with-fractions",
        title: "Equations with Fractions",
        summary: "Clear every denominator in one move and never work with fractions again.",
        level: "Core",
        keyIdea: "Multiply every term by the LCD.",
        simple: `Do not fight the fractions. Remove them.

Find the least common denominator of all fractions in the equation, then multiply *every term* by it — including terms without fractions.

For x/3 + 1/4 = 5/6, the LCD is 12:
12(x/3) + 12(1/4) = 12(5/6)
4x + 3 = 10
4x = 7, so x = 7/4.

The only real risk is missing a term. Multiply every single one, or the equation is no longer balanced.`,
        complex: `Multiplying both sides by the LCD is an application of the multiplication property of equality, valid because the LCD is a nonzero constant. Each fraction's denominator divides the LCD exactly, so every denominator clears in a single step.

With numerical denominators the process is entirely safe. With variable denominators it is not: multiplying by an expression such as ~(x − 3)~ is only valid when that expression is nonzero, so ~x = 3~ must be excluded from the domain in advance. This is why rational equations require checking for extraneous solutions — a root that the algebra produces but that makes an original denominator zero is not a solution of the original equation.

The same LCD technique clears decimals: multiplying by an appropriate power of ten converts ~0.25x + 1.5 = 3~ into ~25x + 150 = 300~. Integers are less error-prone to work with, which is the whole motivation.`,
        example: {
          prompt: "Solve (2x + 1)/5 − x/2 = 3/10.",
          steps: [
            "LCD of 5, 2, 10 is 10.",
            "Multiply every term: 2(2x + 1) − 5x = 3.",
            "Distribute: 4x + 2 − 5x = 3.",
            "Combine: −x + 2 = 3, so −x = 1.",
          ],
          answer: "x = −1",
        },
        mistakes: [
          "Multiplying only the fraction terms and skipping the whole numbers.",
          "Forgetting that the LCD multiplies the entire numerator, so (2x+1)/5 becomes 2(2x+1), not 2x+1.",
        ],
        video: "solving equations with fractions LCD explained",
        videoAlt: ["clearing fractions from equations algebra"],
        practice: { unit: "solving-equations", skill: "equations-with-fractions" },
        tags: ["fractions", "equations", "lcd"],
      },
      {
        slug: "literal-equations",
        title: "Literal Equations",
        summary: "Solving a formula for one letter when everything else stays symbolic.",
        level: "Core",
        keyIdea: "Treat the target variable as the unknown and every other letter as a number.",
        simple: `A literal equation has several letters, and you solve for one of them.

Rearranging A = lw for w: divide both sides by l, giving w = A/l.

The method is identical to normal equations. Pretend every other letter is just a number you happen not to know.

For y = mx + b solved for x: subtract b, then divide by m, giving x = (y − b)/m.

The most common slip is dividing only part of a side. If you divide by m, everything on the other side gets divided, which is why the parentheses in (y − b)/m matter.`,
        complex: `Solving a literal equation is inverting a formula with respect to one variable, and the algebra is unchanged from numerical equations. The additional demand is bookkeeping: several symbols must be manipulated without the feedback that arithmetic normally provides.

When the target variable appears in more than one term, factoring becomes necessary. To solve ~ab + c = ad~ for a, collect the a terms and factor: ~ab − ad = −c~, so ~a(b − d) = −c~ and ~a = −c/(b − d)~ — with the standing restriction b ≠ d.

Every division introduces such a restriction, and stating it is part of a complete answer. Rearranging ~A = ½h(b₁ + b₂)~ for h gives ~h = 2A/(b₁ + b₂)~, valid provided the bases do not sum to zero.

This skill matters well beyond algebra class: it is exactly what is required to rearrange a physics formula or to convert a spreadsheet relationship into the quantity you actually want.`,
        example: {
          prompt: "Solve S = 2πr² + 2πrh for h.",
          steps: [
            "Isolate the h term: S − 2πr² = 2πrh.",
            "Divide both sides by 2πr.",
            "h = (S − 2πr²)/(2πr), for r ≠ 0.",
          ],
          answer: "h = (S − 2πr²)/(2πr)",
        },
        mistakes: [
          "Dividing one term of the numerator instead of the whole expression.",
          "Forgetting to factor when the target variable appears twice.",
        ],
        video: "literal equations solving for a variable formulas",
        videoAlt: ["rearranging formulas solve for variable algebra"],
        practice: { unit: "solving-equations", skill: "multi-step-equations" },
        tags: ["literal equations", "formulas", "rearranging"],
      },
      {
        slug: "absolute-value-equations",
        title: "Absolute Value Equations",
        summary: "Why these usually have two answers, and when they have none.",
        level: "Advanced",
        keyIdea: "|x| = a splits into x = a and x = −a, provided a ≥ 0.",
        simple: `Absolute value measures distance from zero, and two different numbers can sit the same distance away. So these equations usually have two answers.

|x| = 7 means x = 7 or x = −7.

When there is more inside, split into two equations:
|2x − 3| = 11 becomes 2x − 3 = 11 and 2x − 3 = −11, giving x = 7 and x = −4.

Isolate the absolute value bars before splitting. In 3|x + 1| − 2 = 10, first get |x + 1| = 4, then split.

If the isolated absolute value equals a negative number, stop: no solution. Distance is never negative.`,
        complex: `Using the piecewise definition, ~|u| = a~ with a > 0 is equivalent to the disjunction ~u = a or u = −a~. For a = 0 the two branches coincide, giving one solution; for a < 0 the solution set is empty because ~|u| ≥ 0~ always.

That case analysis is why isolating the bars is mandatory: the split is only valid once the equation reads exactly ~|u| = a~. Splitting ~3|x+1| − 2 = 10~ prematurely produces wrong branches.

When absolute values appear on both sides, ~|u| = |v|~ gives ~u = v or u = −v~, and both must be checked in the original equation. More generally, whenever the right-hand side contains the variable — as in ~|x − 2| = 3x~ — the sign of that side is not guaranteed, so every candidate root requires verification. Extraneous solutions are common and are not detectable from the algebra alone.

Geometrically, ~|x − c| = r~ says x is exactly r units from c, which makes the two solutions ~c ± r~ readable without any algebra at all.`,
        example: {
          prompt: "Solve 2|3x − 1| + 5 = 17.",
          steps: [
            "Isolate: 2|3x − 1| = 12, so |3x − 1| = 6.",
            "Split: 3x − 1 = 6 or 3x − 1 = −6.",
            "First: 3x = 7, x = 7/3.",
            "Second: 3x = −5, x = −5/3.",
          ],
          answer: "x = 7/3 or x = −5/3",
        },
        mistakes: [
          "Splitting before the absolute value is isolated.",
          "Reporting two answers when the isolated value equals a negative — that case has none.",
        ],
        video: "absolute value equations solving explained",
        videoAlt: ["solving absolute value equations two cases"],
        practice: { unit: "absolute-value-piecewise", skill: "absolute-value" },
        tags: ["absolute value", "equations", "two cases"],
      },
    ],
  },
  {
    id: "a1-inequalities",
    title: "Inequalities",
    blurb:
      "Solution sets instead of single answers, written on number lines and in interval notation.",
    topics: [
      {
        slug: "solving-linear-inequalities",
        title: "Solving Linear Inequalities",
        summary: "Everything from equations carries over, except one rule.",
        level: "Core",
        keyIdea: "Flip the inequality when multiplying or dividing by a negative.",
        simple: `Solve inequalities exactly like equations, with one exception: multiplying or dividing both sides by a negative flips the direction of the sign.

−3x + 7 > 22
−3x > 15
x < −5   ← flipped, because we divided by −3

Adding or subtracting a negative does *not* flip anything. Only multiplying or dividing by one does.

Write the answer as a graph (open circle for < or >, closed for ≤ or ≥) or in interval notation: x < −5 is (−∞, −5).

Test one value from your answer in the original. If it works, you probably got the direction right.`,
        complex: `Order is preserved by addition and by multiplication by a positive, and reversed by multiplication by a negative. The reversal is a reflection of the number line through 0, and reflections reverse order.

Solution sets are intervals, so interval notation is the natural output: a parenthesis for a strict bound or an infinite end, a bracket for an included endpoint. ~x ≤ 4~ is ~(−∞, 4]~, and ∞ never takes a bracket because it is not a number being included.

The rule that a variable multiplier requires known sign has real consequences. You may not multiply ~3/x < 5~ through by x, because x may be negative and the direction would depend on the case. Rational inequalities are instead solved by moving everything to one side and testing the sign on each interval between the zeros and undefined points — a technique that carries directly into quadratic and polynomial inequalities.`,
        example: {
          prompt: "Solve 4 − 2(x + 3) ≥ 5x − 9 and write the answer in interval notation.",
          steps: [
            "Distribute: 4 − 2x − 6 ≥ 5x − 9.",
            "Combine: −2x − 2 ≥ 5x − 9.",
            "Subtract 5x, add 2: −7x ≥ −7.",
            "Divide by −7 and flip: x ≤ 1.",
          ],
          answer: "x ≤ 1, or (−∞, 1]",
        },
        mistakes: [
          "Flipping the sign after subtracting a negative number.",
          "Using a bracket next to ∞.",
        ],
        video: "solving linear inequalities interval notation",
        videoAlt: ["solving inequalities flip sign negative"],
        practice: { unit: "solving-equations", skill: "linear-inequalities" },
        tags: ["inequalities", "interval notation"],
      },
      {
        slug: "compound-inequalities",
        title: "Compound Inequalities",
        summary: "AND means overlap, OR means everything either one covers.",
        level: "Advanced",
        keyIdea: "AND gives an intersection; OR gives a union.",
        simple: `Compound inequalities join two conditions.

AND ("between"): −3 < 2x + 1 < 7. Do the same operation to all three parts at once. Subtract 1: −4 < 2x < 6. Divide by 2: −2 < x < 3. The answer is the overlap, a single segment.

OR: x < −2 or x > 5. Solve each separately. The answer is both pieces, going outward in two directions.

Quick way to tell which you have: "between" and "and" produce one connected chunk; "or" usually produces two pieces heading opposite ways.

In interval notation, AND gives one interval like (−2, 3), and OR gives a union like (−∞, −2) ∪ (5, ∞).`,
        complex: `A conjunction is an intersection of solution sets, a disjunction is a union. Three-part notation ~a < f(x) < b~ is legitimate shorthand for a conjunction only; there is no corresponding shorthand for a disjunction, which is why ~x < −2 or x > 5~ must never be compressed into ~5 < x < −2~.

Operating on all three parts simultaneously is valid because each operation is applied to the whole conjunction. As always, multiplying or dividing by a negative reverses *both* inequality signs: ~−4 < −2x < 6~ becomes ~2 > x > −3~, conventionally rewritten in increasing order as ~−3 < x < 2~.

Degenerate cases are worth recognising. A conjunction with no overlap (~x > 5 and x < 1~) is empty. A disjunction covering everything (~x < 5 or x > 1~) is all of ℝ. Both occur when a problem is set up to test whether you are tracking the logic rather than pattern-matching the notation.`,
        example: {
          prompt: "Solve −1 ≤ (3 − x)/2 < 4.",
          steps: [
            "Multiply all parts by 2: −2 ≤ 3 − x < 8.",
            "Subtract 3: −5 ≤ −x < 5.",
            "Multiply by −1 and flip both: 5 ≥ x > −5.",
            "Rewrite increasing: −5 < x ≤ 5.",
          ],
          answer: "−5 < x ≤ 5, or (−5, 5]",
        },
        mistakes: [
          "Flipping only one of the two signs when multiplying by a negative.",
          "Writing an OR answer in three-part form.",
        ],
        video: "compound inequalities and or explained",
        videoAlt: ["solving compound inequalities union intersection"],
        practice: { unit: "inequalities-systems", skill: "compound-inequalities" },
        tags: ["compound", "inequalities", "union"],
      },
      {
        slug: "absolute-value-inequalities",
        title: "Absolute Value Inequalities",
        summary: "Less than gives a sandwich, greater than gives two pieces.",
        level: "Advanced",
        keyIdea: "|x| < a is AND; |x| > a is OR.",
        simple: `Two patterns, and it is worth memorising which is which.

Less than: |x| < 5 means x is within 5 of zero, so −5 < x < 5. One connected chunk. Sometimes called "less thAND."

Greater than: |x| > 5 means x is further than 5 from zero, so x < −5 or x > 5. Two separate pieces. "Greator."

Isolate the absolute value first, then apply the pattern.

Two shortcuts. If an absolute value is greater than a negative number, it is always true: every real number works. If it is less than a negative, no solution ever.`,
        complex: `Reading ~|u|~ as distance makes both patterns immediate. ~|u| < a~ says u lies within a of 0, giving the conjunction ~−a < u < a~. ~|u| > a~ says u lies outside that window, giving the disjunction ~u < −a or u > a~. For a ≤ 0 the results degenerate: ~|u| < a~ is empty for a ≤ 0, and ~|u| > a~ is all reals for a < 0.

The general distance reading is more useful still. ~|x − c| < r~ describes the open interval of radius r centred at c, which is exactly the ε-δ notation of calculus and the tolerance notation of engineering: a specification of ~5.00 ± 0.02~ cm is the inequality ~|x − 5| ≤ 0.02~.

Since both patterns produce compound inequalities, they inherit all of the rules from that topic — including reversing both signs when multiplying through by a negative.`,
        example: {
          prompt: "Solve |2x + 3| ≥ 7 and write in interval notation.",
          steps: [
            "Greater than, so use OR: 2x + 3 ≥ 7 or 2x + 3 ≤ −7.",
            "First: 2x ≥ 4, so x ≥ 2.",
            "Second: 2x ≤ −10, so x ≤ −5.",
          ],
          answer: "x ≤ −5 or x ≥ 2, or (−∞, −5] ∪ [2, ∞)",
        },
        mistakes: [
          "Using AND for a greater-than problem, producing an empty answer.",
          "Forgetting to flip the inequality in the negative branch.",
        ],
        video: "absolute value inequalities and or explained",
        videoAlt: ["solving absolute value inequalities interval notation"],
        practice: { unit: "absolute-value-piecewise", skill: "absolute-value-inequalities" },
        tags: ["absolute value", "inequalities", "compound"],
      },
    ],
  },
  {
    id: "a1-functions",
    title: "Functions",
    blurb:
      "The central object of the rest of mathematics. Inputs, outputs, and the notation that comes with them.",
    topics: [
      {
        slug: "relations-and-functions",
        title: "Relations & Functions",
        summary: "The one rule that decides whether a relation is a function.",
        level: "Core",
        keyIdea: "Each input gets exactly one output.",
        simple: `A relation is any set of input-output pairs. A function is a relation with one restriction: each input has exactly one output.

An input cannot map to two different outputs. But two different inputs *may* share an output — that is perfectly fine.

{(1,3), (2,5), (1,7)} is not a function: the input 1 gives both 3 and 7.
{(1,3), (2,3), (4,3)} is a function: repeated outputs are allowed.

On a graph, use the vertical line test. If any vertical line crosses the graph twice, some input has two outputs, so it is not a function. A circle fails. A parabola passes.`,
        complex: `A function from A to B assigns to each element of the domain exactly one element of the codomain. Existence and uniqueness of the output are both required.

The vertical line test is this definition read graphically: a vertical line is the set of points sharing one x, so two intersections mean one input with two outputs.

Asymmetry between inputs and outputs is deliberate. A function may be many-to-one but never one-to-many. Functions that are also one-to-one — where distinct inputs always give distinct outputs, detected by the horizontal line test — are precisely those with an inverse function, which is why that second test appears when inverses are introduced.

Real-world modelling uses the definition as a test of determinism: "cost as a function of weight" claims that a given weight determines exactly one cost. Where that fails, the relationship is a relation but not a function, and no formula ~f(x)~ can represent it.`,
        example: {
          prompt: "Is {(−2,4), (0,0), (2,4)} a function? Is x = y² a function of x?",
          steps: [
            "Check inputs of the first: −2, 0, 2 are all distinct, so each has one output.",
            "Repeated output 4 is allowed.",
            "For x = y², the input x = 4 gives y = 2 and y = −2.",
          ],
          answer: "The first is a function. x = y² is not (it fails the vertical line test).",
        },
        mistakes: [
          "Rejecting a function because two inputs share an output.",
          "Applying the horizontal line test when checking whether something is a function at all.",
        ],
        video: "relations and functions vertical line test",
        videoAlt: ["what is a function domain range relations"],
        practice: { unit: "functions", skill: "function-notation" },
        tags: ["functions", "relations", "vertical line test"],
      },
      {
        slug: "function-notation",
        title: "Function Notation",
        summary: "f(x) is a name for an output, not multiplication.",
        level: "Core",
        keyIdea: "f(3) means the output when the input is 3.",
        simple: `f(x) is read "f of x." It does not mean f times x.

f(x) = 2x + 1 is the same rule as y = 2x + 1, but the notation lets you name the input you are using.

f(3) means substitute 3: f(3) = 2(3) + 1 = 7. The pair (3, 7) is on the graph.

You can substitute anything, including expressions. f(a + 1) = 2(a + 1) + 1 = 2a + 3.

Solving f(x) = 11 is the reverse question: which input gives 11? Set 2x + 1 = 11 and solve, giving x = 5.`,
        complex: `The notation names a function and displays its argument, so ~f(3)~ denotes the image of 3 under f — a number, not a product. The variable inside is a bound placeholder: ~f(x) = 2x + 1~ and ~f(t) = 2t + 1~ define the same function.

Substituting an expression is composition in miniature, and requires parentheses around the substituted expression to preserve grouping. Common evaluations worth being fluent in: ~f(−x)~ (used for even/odd symmetry), ~f(x + h)~ (used in the difference quotient ~(f(x+h) − f(x))/h~, the foundation of the derivative), and ~f(g(x))~.

Two distinct questions share the notation and are often confused. Evaluating ~f(a)~ is direct substitution with a unique answer. Solving ~f(x) = b~ asks for every input mapping to b, and may have none, one or many solutions. The first traverses the function forwards, the second backwards.`,
        example: {
          prompt: "For f(x) = x² − 4x, find f(−2), and solve f(x) = 0.",
          steps: [
            "f(−2) = (−2)² − 4(−2) = 4 + 8 = 12.",
            "Solve x² − 4x = 0 by factoring: x(x − 4) = 0.",
            "So x = 0 or x = 4.",
          ],
          answer: "f(−2) = 12; f(x) = 0 at x = 0 and x = 4",
        },
        mistakes: [
          "Reading f(3) as f times 3.",
          "Forgetting parentheses when substituting a negative, turning f(−2) into −2² − 4(−2).",
        ],
        video: "function notation evaluating functions explained",
        videoAlt: ["f(x) function notation algebra explained"],
        practice: { unit: "functions", skill: "function-notation" },
        tags: ["functions", "notation", "evaluating"],
      },
      {
        slug: "domain-and-range",
        title: "Domain & Range",
        summary: "Every input allowed, every output produced.",
        level: "Core",
        keyIdea: "Domain is the x-values; range is the y-values.",
        simple: `Domain is the set of inputs a function accepts. Range is the set of outputs it produces.

From a list of pairs, just read them off. For {(1,4), (2,7), (5,7)}: domain {1, 2, 5}, range {4, 7}.

From a formula, the domain is everything except values that break the maths. Two things break it:
- dividing by zero, so exclude any x making a denominator 0
- square-rooting a negative, so require the inside to be ≥ 0

From a graph, scan left-to-right for domain and bottom-to-top for range.

Real contexts add their own limits. If x is a number of people, negative and fractional values are out regardless of what the formula allows.`,
        complex: `The domain of a function given by a formula is, by convention, its natural domain: the largest set of reals for which the expression is defined. The two restrictions that arise in Algebra 1 are denominators, requiring ~≠ 0~, and even-index radicals, requiring the radicand ~≥ 0~. Later, logarithms add the requirement that the argument be strictly positive.

When both restrictions occur, they intersect. For ~f(x) = √(x − 2)/(x − 5)~ the domain is ~x ≥ 2 and x ≠ 5~, which is ~[2, 5) ∪ (5, ∞)~.

Range is generally harder because it depends on the function's behaviour rather than a local rule. For a parabola ~y = a(x − h)² + k~ the vertex settles it: the range is ~[k, ∞)~ when a > 0 and ~(−∞, k]~ when a < 0. For other families, transformations of a known parent function are usually the fastest route.

A restricted domain imposed by context — sometimes called the practical domain — can be smaller than the natural one, and applied problems should state it.`,
        example: {
          prompt: "Find the domain of f(x) = √(x + 3)/(x − 1).",
          steps: [
            "Radical requires x + 3 ≥ 0, so x ≥ −3.",
            "Denominator requires x − 1 ≠ 0, so x ≠ 1.",
            "Intersect the two conditions.",
          ],
          answer: "[−3, 1) ∪ (1, ∞)",
        },
        mistakes: [
          "Excluding only the denominator's zero and ignoring the radical.",
          "Giving the range of a parabola as all reals.",
        ],
        video: "domain and range of functions explained",
        videoAlt: ["finding domain and range from equations graphs"],
        practice: { unit: "functions", skill: "domain-range" },
        tags: ["domain", "range", "functions"],
      },
      {
        slug: "interpreting-graphs",
        title: "Interpreting Function Graphs",
        summary: "Reading intercepts, increases, maximums and meaning off a picture.",
        level: "Core",
        keyIdea: "Every feature of a graph says something about the situation it models.",
        simple: `A graph carries a lot of information if you know what to look for.

- x-intercepts: where y = 0. The zeros of the function.
- y-intercept: where x = 0. The starting value.
- Increasing: the graph rises left to right. Decreasing: it falls.
- Maximum or minimum: the highest or lowest turning point.

In a real situation these have meanings. On a graph of height against time for a thrown ball, the y-intercept is the release height, the maximum is the peak, and the positive x-intercept is when it lands.

Read intervals along the x-axis, not the y-axis: a function is increasing *on an interval of inputs*.`,
        complex: `Key features are read on the axes they concern. Zeros are inputs where the output is 0 — the solutions of ~f(x) = 0~ — and are stated as x-values. Intervals of increase and decrease are also stated in terms of x, while maxima and minima have both a location (x) and a value (y); a question asking "what is the maximum" wants the y-value, while "where does it occur" wants the x.

Extrema may be local or global. A local maximum is highest in a neighbourhood; a global maximum is highest overall. A quadratic has one extremum which is global; higher-degree polynomials can have several local ones.

Additional features that appear later include end behaviour (what happens as ~x → ±∞~), asymptotes for rational and exponential functions, and symmetry: even functions satisfy ~f(−x) = f(x)~ and are symmetric about the y-axis, odd functions satisfy ~f(−x) = −f(x)~ and are symmetric about the origin.

The interpretation habit is the point. Modelling questions are graded on the meaning attached to a feature, not on locating it.`,
        example: {
          prompt: "A ball's height is h(t) = −5t² + 20t + 1. Interpret h(0) and the maximum.",
          steps: [
            "h(0) = 1, the height at release.",
            "The vertex is at t = −b/(2a) = −20/(2·−5) = 2.",
            "h(2) = −20 + 40 + 1 = 21.",
          ],
          answer: "Released from 1 m; reaches a maximum height of 21 m at t = 2 s.",
        },
        mistakes: [
          "Reporting an interval of increase using y-values.",
          "Confusing the maximum value with the input at which it occurs.",
        ],
        video: "interpreting graphs of functions key features",
        videoAlt: ["reading function graphs intercepts increasing decreasing"],
        practice: { unit: "functions", skill: "function-graphs" },
        tags: ["graphs", "interpreting", "features"],
      },
    ],
  },
  {
    id: "a1-linear",
    title: "Linear Functions & Graphing",
    blurb:
      "Lines in every form, what each form is good for, and how to move between them.",
    topics: [
      {
        slug: "slope-formula",
        title: "The Slope Formula",
        summary: "Computing steepness from two points without a graph.",
        level: "Core",
        keyIdea: "m = (y₂ − y₁)/(x₂ − x₁).",
        simple: `Given two points, slope is the change in y divided by the change in x.

For (2, 3) and (6, 11): m = (11 − 3)/(6 − 2) = 8/4 = 2.

Pick a point to be "first" and stay consistent. Both subtractions must go in the same order, or the sign comes out wrong.

Special cases:
- Horizontal line: y never changes, so m = 0.
- Vertical line: x never changes, so you would divide by zero. The slope is undefined.

"Zero slope" and "undefined slope" are opposite situations, and swapping them is a common exam error.`,
        complex: `The formula ~m = (y₂ − y₁)/(x₂ − x₁)~ is well defined for a line because the ratio is invariant across point choices, by similar triangles. Reversing both differences leaves the quotient unchanged, so the point order is free — but mixing the orders negates only the numerator and produces the wrong sign.

Slope is the constant rate of change of a linear function, ~Δy/Δx~, and the discrete analogue of the derivative. For nonlinear functions the same formula computes the average rate of change between two points, which is the slope of the secant line.

Sign and magnitude both carry meaning: positive slope rises, negative falls, and larger absolute value is steeper. Parallel lines share a slope; perpendicular lines have slopes with product −1.

A vertical line has ~x₂ = x₁~, so the slope is undefined and no ~y = mx + b~ form exists — vertical lines are written ~x = c~ and are the one family the slope-intercept form cannot express.`,
        example: {
          prompt: "Find the slope through (−3, 7) and (5, −1), then state the slope of any line perpendicular to it.",
          steps: [
            "m = (−1 − 7)/(5 − (−3)) = −8/8.",
            "m = −1.",
            "Perpendicular slope is the negative reciprocal of −1.",
          ],
          answer: "m = −1; a perpendicular line has slope 1.",
        },
        mistakes: [
          "Computing (y₂ − y₁)/(x₁ − x₂), mixing the subtraction order.",
          "Calling a vertical line's slope zero.",
        ],
        video: "slope formula two points explained",
        videoAlt: ["finding slope from two points formula"],
        practice: { unit: "linear-equations-graphs", skill: "slope" },
        tags: ["slope", "formula", "lines"],
      },
      {
        slug: "slope-intercept-form",
        title: "Slope-Intercept Form",
        summary: "y = mx + b, the form you can graph without any work.",
        level: "Core",
        keyIdea: "m is the slope, b is where the line crosses the y-axis.",
        simple: `y = mx + b tells you everything you need to graph a line immediately.

b is the y-intercept: plot (0, b) first.
m is the slope: from that point, rise and run to a second point.

For y = (2/3)x − 4: start at (0, −4), then go up 2 and right 3 to reach (3, −2). Draw the line.

For a negative slope like −3, treat it as −3/1: down 3, right 1.

If an equation is not in this form, rearrange to solve for y first. 2x + 3y = 9 becomes y = (−2/3)x + 3.`,
        complex: `Every non-vertical line has a unique representation ~y = mx + b~, where m is the slope and ~(0, b)~ is the y-intercept. The form is the explicit expression of y as a linear function of x, which is why it is the default for graphing, for identifying parallel and perpendicular relationships, and for entering an equation into technology.

In modelling, b is the initial value and m the constant rate of change, so a phone plan costing $30 plus $0.10 per minute is ~C(t) = 0.10t + 30~ with the units of m being dollars per minute.

Converting from standard form ~Ax + By = C~ gives ~m = −A/B~ and ~b = C/B~, defined whenever B ≠ 0 — the excluded case being exactly the vertical lines this form cannot represent.

Parallel lines have equal m and different b; identical m and b means the same line. That distinction is what separates a system with no solution from one with infinitely many.`,
        example: {
          prompt: "Write 4x − 2y = 10 in slope-intercept form and identify the slope and intercept.",
          steps: [
            "Subtract 4x: −2y = −4x + 10.",
            "Divide every term by −2: y = 2x − 5.",
          ],
          answer: "y = 2x − 5, slope 2, y-intercept (0, −5)",
        },
        mistakes: [
          "Dividing only some terms when isolating y.",
          "Reading b as the x-intercept.",
        ],
        video: "slope intercept form graphing y=mx+b",
        videoAlt: ["graphing lines slope intercept form explained"],
        practice: { unit: "forms-linear-equations", skill: "slope-intercept" },
        tags: ["slope-intercept", "graphing", "lines"],
      },
      {
        slug: "point-slope-form",
        title: "Point-Slope Form",
        summary: "The fastest way to write a line's equation from a point and a slope.",
        level: "Core",
        keyIdea: "y − y₁ = m(x − x₁).",
        simple: `When you know a slope and any one point, point-slope form gets you an equation in a single substitution.

For slope 3 through (2, −5):
y − (−5) = 3(x − 2), which tidies to y + 5 = 3(x − 2).

Then expand if you want slope-intercept form: y + 5 = 3x − 6, so y = 3x − 11.

Note both subtractions in the formula. A point with negative coordinates produces a double negative, which becomes a plus.

Given two points instead, compute the slope first, then use either point. Both give the same final line.`,
        complex: `Point-slope form is the slope formula rearranged. Starting from ~m = (y − y₁)/(x − x₁)~ for a general point (x, y) on the line and multiplying through by ~(x − x₁)~ gives ~y − y₁ = m(x − x₁)~, valid for every point on the line including ~(x₁, y₁)~ itself.

It is the most efficient form for construction because it requires no solving — the given data substitutes directly — while slope-intercept form requires first finding b.

Either of two given points may be used; the resulting equations look different but are equivalent, as expanding both to slope-intercept form confirms. This is a useful check on a written answer that does not match a key.

The same structure recurs throughout mathematics: the tangent line in calculus is ~y − f(a) = f′(a)(x − a)~, which is point-slope with the derivative supplying the slope.`,
        example: {
          prompt: "Find the equation of the line through (−1, 4) and (3, −8) in slope-intercept form.",
          steps: [
            "Slope: m = (−8 − 4)/(3 − (−1)) = −12/4 = −3.",
            "Point-slope with (−1, 4): y − 4 = −3(x + 1).",
            "Expand: y − 4 = −3x − 3.",
            "Add 4: y = −3x + 1.",
          ],
          answer: "y = −3x + 1",
        },
        mistakes: [
          "Writing y − y₁ = m(x + x₁) and losing the sign on the point.",
          "Substituting the y-coordinate where x belongs.",
        ],
        video: "point slope form of a line explained",
        videoAlt: ["writing equations of lines point slope form"],
        practice: { unit: "forms-linear-equations", skill: "point-slope" },
        tags: ["point-slope", "equations of lines"],
      },
      {
        slug: "standard-form-and-intercepts",
        title: "Standard Form & Intercepts",
        summary: "Ax + By = C, and the two-point shortcut for graphing it.",
        level: "Core",
        keyIdea: "Set x = 0 for the y-intercept, y = 0 for the x-intercept.",
        simple: `Standard form is Ax + By = C, with x and y on the same side.

It is awkward for reading slope but excellent for graphing with intercepts.

For 3x + 4y = 12:
- Set x = 0: 4y = 12, so y = 3. Point (0, 3).
- Set y = 0: 3x = 12, so x = 4. Point (4, 0).

Plot those two points and draw the line. No slope needed, no rearranging.

This is also the natural form for word problems with a fixed total. If adult tickets cost $8 and child tickets $5 with $200 collected, that is 8a + 5c = 200 directly.`,
        complex: `Standard form ~Ax + By = C~ (conventionally with integer coefficients and A ≥ 0) represents every line including vertical ones, which slope-intercept form cannot. Its slope is ~−A/B~ for B ≠ 0.

The intercept method works because setting one variable to zero identifies where the line meets the other axis, and two points determine a line. It fails to give two distinct points only when C = 0, since then both intercepts are the origin; in that case pick any other x value.

The form's real advantage is modelling constraints. Any situation where a weighted total is fixed — money, calories, resources — is naturally standard form, and its coefficients are the unit rates. This is why systems of linear inequalities in standard form are the language of linear programming.

Converting between forms is routine, but note that standard form is not unique unless a normalisation is imposed: ~2x + 4y = 8~ and ~x + 2y = 4~ describe the same line.`,
        example: {
          prompt: "Graph 2x − 5y = 20 using intercepts and state its slope.",
          steps: [
            "x = 0: −5y = 20, so y = −4. Point (0, −4).",
            "y = 0: 2x = 20, so x = 10. Point (10, 0).",
            "Slope = −A/B = −2/(−5) = 2/5.",
          ],
          answer: "Intercepts (0, −4) and (10, 0); slope 2/5",
        },
        mistakes: [
          "Reading A as the slope directly.",
          "Mixing up which variable to zero for which intercept.",
        ],
        video: "standard form of a line graphing intercepts",
        videoAlt: ["x and y intercepts graphing standard form"],
        practice: { unit: "forms-linear-equations", skill: "standard-form" },
        tags: ["standard form", "intercepts", "graphing"],
      },
      {
        slug: "parallel-and-perpendicular",
        title: "Parallel & Perpendicular Lines",
        summary: "Same slope, or negative reciprocal slopes.",
        level: "Core",
        keyIdea: "Parallel: m₁ = m₂. Perpendicular: m₁·m₂ = −1.",
        simple: `Parallel lines never meet, which means they have exactly the same slope. Different intercepts, or they would be the same line.

Perpendicular lines meet at 90°. Their slopes are negative reciprocals: flip the fraction and change the sign.

Slope 2/3 → perpendicular slope −3/2.
Slope −4 → perpendicular slope 1/4.

A quick check: multiply the two slopes. If you get −1, they are perpendicular.

Exception: a horizontal line (slope 0) and a vertical line (undefined slope) are perpendicular, even though that product does not exist.`,
        complex: `Parallel lines have equal slopes because slope determines direction; equal slopes with equal intercepts give the same line rather than a parallel pair.

For perpendicularity, rotating a direction vector ~⟨1, m⟩~ by 90° gives ~⟨−m, 1⟩~, whose slope is ~−1/m~. Hence ~m₁m₂ = −1~ for non-vertical, non-horizontal lines. The horizontal/vertical pair is perpendicular but excluded from the product test, since an undefined slope cannot be multiplied.

Typical tasks combine this with point-slope form: given a line and a point, find the parallel or perpendicular line through that point. The slope comes from the relationship, the point from the problem, and point-slope assembles them.

Note that the coefficients in standard form make the relationship visible without conversion: ~Ax + By = C~ and ~Bx − Ay = D~ are always perpendicular, since their slopes ~−A/B~ and ~B/A~ multiply to −1.`,
        example: {
          prompt: "Find the line perpendicular to y = (2/5)x + 1 passing through (4, −3).",
          steps: [
            "Perpendicular slope: negative reciprocal of 2/5 is −5/2.",
            "Point-slope: y + 3 = −(5/2)(x − 4).",
            "Expand: y + 3 = −(5/2)x + 10.",
            "Subtract 3: y = −(5/2)x + 7.",
          ],
          answer: "y = −(5/2)x + 7",
        },
        mistakes: [
          "Flipping the fraction but forgetting the sign change.",
          "Using the perpendicular slope when the question asked for parallel.",
        ],
        video: "parallel and perpendicular lines slopes explained",
        videoAlt: ["writing equations parallel perpendicular lines"],
        practice: { unit: "forms-linear-equations", skill: "parallel-perpendicular" },
        tags: ["parallel", "perpendicular", "slope"],
      },
      {
        slug: "graphing-linear-inequalities",
        title: "Graphing Linear Inequalities",
        summary: "A boundary line plus a shaded half-plane.",
        level: "Advanced",
        keyIdea: "Dashed for strict inequalities, solid for ≤ and ≥, then shade and test.",
        simple: `Graphing an inequality in two variables gives a region, not a line.

1. Graph the boundary as if it were an equation.
2. Make it dashed for < or >, solid for ≤ or ≥.
3. Pick a test point not on the line — (0,0) is easiest — and check it in the inequality.
4. If it works, shade that side. If not, shade the other.

For y < 2x + 1: dashed line, test (0,0): is 0 < 1? Yes, so shade the side containing the origin.

The shaded region contains every point that makes the inequality true.`,
        complex: `A linear inequality in two variables partitions the plane into two half-planes separated by the boundary line ~Ax + By = C~. Strict inequalities exclude the boundary (dashed); non-strict inequalities include it (solid).

The test-point method works because the sign of ~Ax + By − C~ is constant on each side of the line, so one point determines the whole half-plane. Any point off the line serves; the origin is preferred purely for arithmetic ease, and must be replaced when the boundary passes through it.

Solving for y allows shading without testing: ~y > mx + b~ shades above and ~y < mx + b~ shades below. That shortcut is only reliable once y is genuinely isolated — and if the isolating step divided by a negative, the inequality has already flipped.

Systems of such inequalities intersect their half-planes into a feasible region, whose corner points are where the optimum of a linear objective must occur. That result is the basis of linear programming.`,
        example: {
          prompt: "Graph 3x − y ≥ 6.",
          steps: [
            "Boundary: 3x − y = 6, with intercepts (2, 0) and (0, −6).",
            "Inequality is ≥, so draw it solid.",
            "Test (0,0): 3(0) − 0 = 0, and 0 ≥ 6 is false.",
            "Shade the side away from the origin.",
          ],
          answer: "Solid line through (2,0) and (0,−6), shaded below/right (away from the origin).",
        },
        mistakes: [
          "Using a dashed line for ≤ or ≥.",
          "Choosing a test point that lies on the boundary.",
        ],
        video: "graphing linear inequalities two variables shading",
        videoAlt: ["graph inequality half plane test point"],
        practice: { unit: "inequalities-systems", skill: "graphing-inequalities" },
        tags: ["inequalities", "graphing", "half-plane"],
      },
      {
        slug: "scatter-plots-line-of-best-fit",
        title: "Scatter Plots & Line of Best Fit",
        summary: "Finding a trend in messy data, and the limits of trusting it.",
        level: "Advanced",
        keyIdea: "A trend line summarises a relationship; correlation is not causation.",
        simple: `A scatter plot shows paired data as points. If the points trend upward, the correlation is positive; downward is negative; no pattern means no correlation.

A line of best fit runs through the middle of the trend, with roughly as many points above as below. Once you have it, you can estimate values you did not measure.

Two cautions worth taking seriously.

Predicting inside the range of your data (interpolation) is reasonably safe. Predicting far outside it (extrapolation) is not — trends rarely continue forever.

And correlation does not prove causation. Ice cream sales and drowning rates rise together, but neither causes the other. Hot weather causes both.`,
        complex: `A scatter plot displays bivariate numerical data. The direction, form and strength of the association are described qualitatively, and the correlation coefficient r quantifies linear strength on a scale from −1 to 1, with values near 0 indicating no *linear* relationship — which does not rule out a strong nonlinear one.

The least-squares regression line minimises the sum of squared residuals, and is what a calculator's linear regression returns. Its slope is interpreted as the predicted change in y per unit change in x, and its intercept only carries meaning when x = 0 lies within a sensible range of the data.

Residuals are the practical diagnostic: a residual plot with visible structure indicates that a linear model is the wrong form regardless of how large r is.

The causation caveat is a matter of study design, not statistics. Association can arise from causation in either direction, from a confounding variable, or from coincidence, and only a controlled experiment can distinguish them.`,
        example: {
          prompt: "A best-fit line for study hours vs score is y = 6.2x + 51. Interpret both numbers.",
          steps: [
            "Slope 6.2: score units per hour.",
            "Intercept 51: predicted score at x = 0.",
          ],
          answer: "Each extra hour of study is associated with about 6.2 more points; a student studying 0 hours is predicted to score about 51. Association only, not proof of cause.",
        },
        mistakes: [
          "Claiming one variable causes the other from a strong correlation.",
          "Extrapolating far outside the data range and reporting it as reliable.",
        ],
        video: "scatter plots line of best fit correlation",
        videoAlt: ["scatter plot trend line correlation explained"],
        practice: null,
        tags: ["scatter plot", "correlation", "statistics"],
      },
    ],
  },
  {
    id: "a1-systems",
    title: "Systems of Equations",
    blurb:
      "Two equations, two unknowns, and three methods with different strengths.",
    topics: [
      {
        slug: "solving-systems-by-graphing",
        title: "Solving Systems by Graphing",
        summary: "The intersection point, and what parallel or identical lines mean.",
        level: "Core",
        keyIdea: "The solution is where the graphs cross.",
        simple: `A system is two equations at once, and the solution is the point satisfying both — where the lines cross.

Graph both in slope-intercept form and read the intersection. Then check it in *both* equations.

Three outcomes:
- Lines cross once: one solution.
- Lines are parallel (same slope, different intercept): no solution.
- Lines are identical: infinitely many solutions.

Graphing is the best method for seeing what is going on, and the worst for accuracy. If the intersection is at (2.4, −1.7), you will not read it correctly off a hand-drawn grid. Use graphing to understand, algebra to solve.`,
        complex: `A system of two linear equations in two variables corresponds to two lines, and the solution set is their intersection. The three cases — consistent and independent (one point), inconsistent (empty), consistent and dependent (the whole line) — are determined entirely by the slopes and intercepts.

Comparing ~y = m₁x + b₁~ and ~y = m₂x + b₂~: distinct slopes give exactly one solution regardless of intercepts; equal slopes with distinct intercepts give none; equal slopes and intercepts give infinitely many. In standard form, the system ~A₁x + B₁y = C₁~ and ~A₂x + B₂y = C₂~ is inconsistent when ~A₁/A₂ = B₁/B₂ ≠ C₁/C₂~ and dependent when all three ratios agree.

Graphing is exact only for lattice-point intersections, and its real value is diagnostic: it makes the three cases visible and shows immediately whether an algebraic answer is plausible.

The same classification extends to larger systems and is formalised by the rank of the coefficient matrix in linear algebra.`,
        example: {
          prompt: "Solve by graphing: y = 2x − 3 and y = −x + 3.",
          steps: [
            "First line: intercept (0,−3), slope 2.",
            "Second line: intercept (0,3), slope −1.",
            "They cross at (2, 1).",
            "Check: 2(2) − 3 = 1 ✓ and −2 + 3 = 1 ✓",
          ],
          answer: "(2, 1)",
        },
        mistakes: [
          "Reporting only the x-value. A system's solution is an ordered pair.",
          "Checking in one equation only.",
        ],
        video: "solving systems of equations by graphing",
        videoAlt: ["systems of equations graphing one no infinite solutions"],
        practice: { unit: "systems-equations", skill: "graphing-systems" },
        tags: ["systems", "graphing", "intersection"],
      },
      {
        slug: "substitution-method",
        title: "The Substitution Method",
        summary: "Best when one variable is already alone, or easy to isolate.",
        level: "Core",
        keyIdea: "Isolate one variable, substitute into the other equation.",
        simple: `Substitution turns two equations into one.

1. Isolate a variable in whichever equation makes it easiest.
2. Substitute that expression into the *other* equation.
3. Solve the single-variable equation.
4. Substitute back to find the other variable.

For y = 3x − 4 and 2x + y = 11:
2x + (3x − 4) = 11 → 5x − 4 = 11 → x = 3.
Then y = 3(3) − 4 = 5. Solution: (3, 5).

Substituting back into the *same* equation you started from is the classic error. It collapses to something true like 11 = 11 and tells you nothing.`,
        complex: `Substitution replaces one variable with an equivalent expression, reducing a 2×2 system to a single equation in one unknown. It is valid because the substituted expression is equal to the variable on the solution set.

It is the method of choice when a variable has coefficient ±1, since isolating avoids fractions. When all coefficients are larger, elimination is usually cleaner.

Substituting back into the equation used for isolation produces an identity because that step is not independent information — the second equation is what pins down the value.

Degenerate systems announce themselves the same way as single equations: if both variables vanish and leave a contradiction, the system is inconsistent; if they leave an identity, it is dependent and the solution set is the whole line, written parametrically as ~(t, mt + b)~.

Substitution generalises beyond linear systems, and is the standard approach for solving a linear equation together with a quadratic one.`,
        example: {
          prompt: "Solve x − 2y = 1 and 3x + y = 17 by substitution.",
          steps: [
            "Isolate x in the first: x = 2y + 1.",
            "Substitute into the second: 3(2y + 1) + y = 17.",
            "Expand: 6y + 3 + y = 17, so 7y = 14, y = 2.",
            "Back-substitute: x = 2(2) + 1 = 5.",
          ],
          answer: "(5, 2)",
        },
        mistakes: [
          "Substituting back into the equation you rearranged.",
          "Forgetting to distribute the coefficient across the substituted expression.",
        ],
        video: "substitution method systems of equations explained",
        videoAlt: ["solving systems by substitution algebra"],
        practice: { unit: "systems-equations", skill: "substitution" },
        tags: ["systems", "substitution"],
      },
      {
        slug: "elimination-method",
        title: "The Elimination Method",
        summary: "Adding equations to make a variable vanish.",
        level: "Core",
        keyIdea: "Scale one or both equations so a variable cancels when you add.",
        simple: `Elimination removes a variable by adding the two equations together.

If the coefficients are already opposites, just add:
3x + 2y = 12
5x − 2y = 4
Adding gives 8x = 16, so x = 2. Then back-substitute for y = 3.

If they are not opposites, multiply one or both equations first. To eliminate x from 2x + 3y = 7 and 3x − y = 5, multiply the first by 3 and the second by −2, giving 6x and −6x.

Multiply *every* term in the equation, both sides. That is where errors live.`,
        complex: `Elimination is the linear-combination method: adding a multiple of one equation to another produces an equivalent system, because any solution of both originals satisfies any linear combination of them.

The systematic version scales the two equations by the ratios needed to make one variable's coefficients additive inverses — often ~LCM~ of the coefficients — then adds. Either variable may be targeted, and choosing the one with smaller or already-opposite coefficients reduces arithmetic.

For systems in standard form, elimination is generally faster than substitution and avoids fractions, which is why it is the method that scales: Gaussian elimination on larger systems is exactly this procedure applied systematically, and it is what matrix row reduction automates.

The degenerate cases appear as before. Eliminating a variable and obtaining ~0 = k~ for nonzero k means inconsistent; obtaining ~0 = 0~ means dependent.`,
        example: {
          prompt: "Solve 3x + 4y = 18 and 5x − 2y = 4 by elimination.",
          steps: [
            "The y coefficients are 4 and −2. Multiply the second equation by 2: 10x − 4y = 8.",
            "Add the equations: 13x = 26, since 4y and −4y cancel.",
            "x = 2.",
            "Back-substitute into the first: 3(2) + 4y = 18, so 4y = 12 and y = 3.",
          ],
          answer: "(2, 3) — check: 3(2)+4(3) = 18 ✓ and 5(2)−2(3) = 4 ✓",
        },
        mistakes: [
          "Multiplying only one side of an equation.",
          "Adding when the coefficients match instead of subtracting (or scaling by a negative).",
        ],
        video: "elimination method systems of equations explained",
        videoAlt: ["solving systems by elimination addition method"],
        practice: { unit: "systems-equations", skill: "elimination" },
        tags: ["systems", "elimination"],
      },
      {
        slug: "systems-word-problems",
        title: "Systems Word Problems",
        summary: "Two unknowns, two facts, and a reliable setup routine.",
        level: "Advanced",
        keyIdea: "Two unknowns need two independent equations.",
        simple: `If a problem has two unknowns, you need two separate facts about them.

The routine:
1. Define both variables in writing, with units.
2. Write one equation per fact given.
3. Solve by substitution or elimination.
4. Answer the actual question in a sentence.

Common patterns:
- Totals: a count equation plus a value equation. 12 coins worth $2.10 gives n + d = 12 and 0.05n + 0.10d = 2.10.
- Mixtures: a total amount plus a total concentration.
- Rates: distance = rate × time for each traveller.

Money problems are the classic trap. Counting coins and valuing coins are two different equations, and mixing them up produces nonsense.`,
        complex: `Modelling with a system requires two independent relationships. Two restatements of the same fact produce a dependent system with no unique solution, which is a modelling error rather than an algebraic one.

The standard families each have a canonical structure. Count-and-value problems pair ~x + y = total count~ with ~ax + by = total value~. Mixture problems pair volumes with ~c₁V₁ + c₂V₂ = c_f V_f~ for concentrations. Uniform-motion problems build each row from ~d = rt~, with the relationship between the two rows (equal distances, or distances summing to a total) supplying the second equation.

Units are the strongest check available: every term in an equation must share units, so an equation adding coins to dollars is malformed by inspection.

Finally, the algebraic solution must be tested against the context. A negative count or a fractional person indicates a setup error even when the arithmetic is flawless.`,
        example: {
          prompt: "Tickets cost $8 for adults and $5 for children. 200 tickets sold for $1,330. How many of each?",
          steps: [
            "Let a = adult tickets, c = child tickets.",
            "Count: a + c = 200. Value: 8a + 5c = 1330.",
            "From the first, c = 200 − a. Substitute: 8a + 5(200 − a) = 1330.",
            "8a + 1000 − 5a = 1330 → 3a = 330 → a = 110, so c = 90.",
          ],
          answer: "110 adult and 90 child tickets",
        },
        mistakes: [
          "Writing only the count equation and trying to solve one equation with two unknowns.",
          "Using cents in one equation and dollars in the other.",
        ],
        video: "systems of equations word problems explained",
        videoAlt: ["system of equations word problems tickets mixture"],
        practice: { unit: "systems-equations", skill: "systems-word-problems" },
        tags: ["systems", "word problems", "modelling"],
      },
      {
        slug: "systems-of-inequalities",
        title: "Systems of Inequalities",
        summary: "Where two shaded regions overlap.",
        level: "Advanced",
        keyIdea: "The solution is the intersection of the shaded half-planes.",
        simple: `Graph each inequality on the same axes, then look for the region shaded by *both*. That overlap is the solution.

Every point in the overlap satisfies both inequalities at once. Points shaded by only one do not count.

Shade lightly, or use different directions of hatching, so the overlap stays visible. A common trick is to shade only lightly at first and then outline the final region clearly.

To check, pick any point inside your region and test it in both inequalities. Both must be true.

Some systems have no overlap, which means no solution.`,
        complex: `The solution set is the intersection of the individual half-planes, a convex region — possibly unbounded, possibly empty. Convexity follows because each half-plane is convex and intersections of convex sets are convex.

Boundary treatment carries over: dashed edges are excluded, solid edges included, and a corner formed by one dashed and one solid edge belongs to the region only if it satisfies every inequality.

This is the setup for linear programming. When the region is bounded, a linear objective ~P = ax + by~ attains its maximum and minimum at vertices of the feasible region, so optimisation reduces to finding the corner points — each the intersection of two boundary lines, found by solving a 2×2 system — and evaluating the objective at each.

That connection is why systems of inequalities are worth the graphing effort: they are the standard model for problems with resource constraints.`,
        example: {
          prompt: "Describe the solution region of y ≤ −x + 5 and y > 2x − 4.",
          steps: [
            "First: solid line through (0,5) and (5,0), shade below.",
            "Second: dashed line through (0,−4) with slope 2, shade above.",
            "The overlap is a wedge opening to the left.",
            "Test (0,0): 0 ≤ 5 ✓ and 0 > −4 ✓, so the origin is inside.",
          ],
          answer: "The wedge-shaped overlap containing the origin, bounded solid above-right and dashed below-right.",
        },
        mistakes: [
          "Shading the union rather than the overlap.",
          "Including a corner point that lies on a dashed boundary.",
        ],
        video: "systems of linear inequalities graphing region",
        videoAlt: ["graphing systems of inequalities shading overlap"],
        practice: { unit: "inequalities-systems", skill: "systems-inequalities" },
        tags: ["systems", "inequalities", "region"],
      },
    ],
  },
  {
    id: "a1-polynomials",
    title: "Polynomials & Factoring",
    blurb:
      "Multiplying expressions out, and the much harder skill of putting them back together.",
    topics: [
      {
        slug: "adding-subtracting-polynomials",
        title: "Adding & Subtracting Polynomials",
        summary: "Combining like terms, with one sign trap when subtracting.",
        level: "Core",
        keyIdea: "Subtracting a polynomial flips every sign inside it.",
        simple: `Adding polynomials is just combining like terms.

(3x² + 5x − 2) + (x² − 3x + 7) = 4x² + 2x + 5.

Subtracting is the same *after* you distribute the minus sign to every term:

(3x² + 5x − 2) − (x² − 3x + 7)
= 3x² + 5x − 2 − x² + 3x − 7
= 2x² + 8x − 9.

Notice all three signs in the second bracket changed. Missing the second and third is the most common error in the whole topic. Write the distribution step out rather than doing it mentally.

Vocabulary: degree is the highest exponent, and a polynomial is usually written in descending order.`,
        complex: `Polynomials form a ring under addition and multiplication: sums, differences and products of polynomials are polynomials, though quotients generally are not.

Addition is componentwise on coefficients of matching degree, which is why only like terms combine. Subtraction is addition of the additive inverse, and the inverse of a polynomial negates every coefficient — the formal statement of "distribute the minus."

Standard form arranges terms in descending degree. The degree of a sum is at most the larger of the two degrees, and can be smaller when leading terms cancel: ~(x² + 3x) + (−x² + 1)~ has degree 1.

Naming conventions used in later problems: by number of terms, monomial, binomial, trinomial; by degree, linear, quadratic, cubic, quartic. The leading coefficient is the coefficient of the highest-degree term and controls end behaviour, which becomes central when graphing polynomials in Algebra 2.`,
        example: {
          prompt: "Simplify (5x³ − 2x + 4) − (2x³ + x² − 6).",
          steps: [
            "Distribute the minus: 5x³ − 2x + 4 − 2x³ − x² + 6.",
            "Combine x³: 5x³ − 2x³ = 3x³.",
            "x² term: −x². x term: −2x. Constants: 4 + 6 = 10.",
          ],
          answer: "3x³ − x² − 2x + 10",
        },
        mistakes: [
          "Changing only the first sign inside the subtracted parentheses.",
          "Combining terms of different degrees.",
        ],
        video: "adding and subtracting polynomials explained",
        videoAlt: ["polynomial addition subtraction like terms"],
        practice: null,
        tags: ["polynomials", "like terms"],
      },
      {
        slug: "multiplying-binomials",
        title: "Multiplying Binomials (FOIL)",
        summary: "Four products, and why FOIL is only a special case.",
        level: "Core",
        keyIdea: "Every term in the first bracket multiplies every term in the second.",
        simple: `To multiply (x + 3)(x + 5), multiply each term in the first bracket by each in the second. FOIL names the four pairs: First, Outer, Inner, Last.

First: x·x = x²
Outer: x·5 = 5x
Inner: 3·x = 3x
Last: 3·5 = 15

Add them and combine the middle: x² + 8x + 15.

Watch the signs. (x − 4)(x + 2) gives x² + 2x − 4x − 8 = x² − 2x − 8.

FOIL only works for two binomials. For anything bigger, use the general rule: every term times every term.`,
        complex: `The product is repeated application of the distributive property: ~(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd~. FOIL is a mnemonic for those four products in the 2×2 case and does not extend, which is why it is worth learning the distributive statement instead.

For larger products the box (area) method organises the terms systematically: an ~m × n~ grid produces ~mn~ products, each combined by degree afterwards. Multiplying a trinomial by a binomial gives six products.

Degrees add under multiplication, so the product of a degree-m and degree-n polynomial has degree ~m + n~, and its leading coefficient is the product of the leading coefficients. That gives a fast check on any expansion: verify the first and last terms before checking the middle.

Reversing this process is factoring, and recognising the structure of the expansion is what makes factoring tractable — the middle coefficient of ~x² + bx + c~ is the sum of the two constants, and c is their product.`,
        example: {
          prompt: "Expand (2x − 3)(3x + 4).",
          steps: [
            "First: 2x·3x = 6x².",
            "Outer: 2x·4 = 8x.",
            "Inner: −3·3x = −9x.",
            "Last: −3·4 = −12. Combine middle: 8x − 9x = −x.",
          ],
          answer: "6x² − x − 12",
        },
        mistakes: [
          "Multiplying only First and Last, giving 6x² − 12.",
          "Losing the negative on the Inner term.",
        ],
        video: "multiplying binomials FOIL method explained",
        videoAlt: ["FOIL multiplying binomials algebra"],
        practice: { unit: "quadratics-factoring", skill: "multiplying-binomials" },
        tags: ["FOIL", "binomials", "multiplying"],
      },
      {
        slug: "special-products",
        title: "Special Products",
        summary: "Three patterns that save time and are essential for factoring later.",
        level: "Core",
        keyIdea: "(a+b)² = a² + 2ab + b², and (a+b)(a−b) = a² − b².",
        simple: `Three patterns come up constantly.

Square of a sum: (a + b)² = a² + 2ab + b²
Square of a difference: (a − b)² = a² − 2ab + b²
Difference of squares: (a + b)(a − b) = a² − b²

The middle term in the first two is where marks are lost. (x + 5)² is NOT x² + 25. It is x² + 10x + 25, because the outer and inner products both give 5x.

The third pattern has no middle term at all, because the outer and inner products cancel exactly.

Check the first one numerically if you doubt it: (2 + 3)² = 25, while 2² + 3² = 13.`,
        complex: `Each pattern is an expansion whose middle behaviour follows from FOIL. In ~(a + b)²~ the outer and inner products are both ~ab~, giving ~2ab~. In ~(a + b)(a − b)~ they are ~−ab~ and ~+ab~, which cancel, leaving the difference of squares.

Recognising these in reverse is the fastest factoring available: a trinomial is a perfect square exactly when its first and last terms are squares and the middle equals twice the product of their roots.

The failure of ~(a + b)² = a² + b²~ is the single most persistent algebra error, and it recurs in every disguise: ~√(a + b) ≠ √a + √b~, ~1/(a+b) ≠ 1/a + 1/b~, and ~sin(a + b) ≠ sin a + sin b~. The general principle is that nonlinear operations do not distribute over addition.

Difference of squares generalises to ~a^n − b^n~ factorisations and underlies the conjugate technique for rationalising denominators, since ~(√a + b)(√a − b) = a − b²~ is radical-free.`,
        example: {
          prompt: "Expand (3x − 4)² and (2x + 7)(2x − 7).",
          steps: [
            "Square of a difference: (3x)² − 2(3x)(4) + 4².",
            "= 9x² − 24x + 16.",
            "Difference of squares: (2x)² − 7².",
          ],
          answer: "9x² − 24x + 16, and 4x² − 49",
        },
        mistakes: [
          "Writing (3x − 4)² as 9x² + 16.",
          "Expecting a middle term in a difference of squares.",
        ],
        video: "special products perfect square difference of squares",
        videoAlt: ["square of binomial difference of squares expand"],
        practice: { unit: "quadratics-factoring", skill: "special-products" },
        tags: ["special products", "perfect square", "difference of squares"],
      },
      {
        slug: "factoring-gcf",
        title: "Factoring Out the GCF",
        summary: "Always the first step, and the one most often skipped.",
        level: "Core",
        keyIdea: "Pull out the largest factor common to every term.",
        simple: `Before any other factoring technique, check for a common factor.

For 12x³ + 18x², the numbers share 6 and the variables share x², so the GCF is 6x²:
12x³ + 18x² = 6x²(2x + 3).

For the variable part, take the *lowest* power present. x³ and x² share x², not x³.

Always expand your answer mentally to check it returns the original.

Skipping this step makes everything afterwards harder. 2x² + 10x + 12 looks awkward until you pull out the 2 and get 2(x² + 5x + 6), which factors instantly into 2(x + 2)(x + 3).`,
        complex: `Factoring out the GCF applies the distributive property in reverse: ~ab + ac = a(b + c)~. The GCF combines the numeric GCF of the coefficients with the lowest power of each shared variable.

It is the mandatory first step of any factoring problem for two reasons. First, it reduces the remaining polynomial's coefficients, often turning a difficult trinomial into a standard one. Second, several patterns are only recognisable after extraction: ~2x² − 18~ is not a difference of squares until the 2 comes out, yielding ~2(x² − 9) = 2(x + 3)(x − 3)~.

When the leading coefficient is negative, factoring out ~−1~ along with the GCF is usually worthwhile, since most factoring patterns are stated for positive leading coefficients.

Complete factorisation means every factor is irreducible over the integers, so each factor must be re-examined after extraction rather than assumed finished.`,
        example: {
          prompt: "Factor completely: 4x³ − 36x.",
          steps: [
            "GCF of 4 and 36 is 4; lowest power of x is x¹. GCF = 4x.",
            "4x³ − 36x = 4x(x² − 9).",
            "x² − 9 is a difference of squares.",
          ],
          answer: "4x(x + 3)(x − 3)",
        },
        mistakes: [
          "Stopping after the GCF when the remaining factor still factors.",
          "Taking the highest power of the variable instead of the lowest.",
        ],
        video: "factoring out the greatest common factor polynomials",
        videoAlt: ["factoring GCF from polynomial algebra"],
        practice: null,
        tags: ["factoring", "gcf"],
      },
      {
        slug: "factoring-trinomials",
        title: "Factoring Trinomials",
        summary: "Finding two numbers that multiply and add correctly.",
        level: "Advanced",
        keyIdea: "For x² + bx + c, find factors of c that add to b.",
        simple: `For x² + bx + c with a leading coefficient of 1, find two numbers that multiply to c and add to b.

x² + 7x + 12: which pair multiplies to 12 and adds to 7? 3 and 4. So it factors as (x + 3)(x + 4).

Signs tell you where to look:
- c positive, b positive → both numbers positive
- c positive, b negative → both negative
- c negative → one of each, and the larger takes b's sign

When the leading coefficient is not 1, use the AC method: multiply a and c, find a pair multiplying to ac and adding to b, split the middle term, then factor by grouping.

Always check by expanding. It is fast and it is definitive.`,
        complex: `For monic trinomials, ~x² + bx + c = (x + p)(x + q)~ where ~pq = c~ and ~p + q = b~. This is the expansion read backwards, and integer solutions exist only when the discriminant ~b² − 4c~ is a perfect square — which is why some trinomials are irreducible over the integers even though the quadratic formula still solves them.

For ~ax² + bx + c~ with a ≠ 1, the AC method finds p and q with ~pq = ac~ and ~p + q = b~, rewrites ~bx~ as ~px + qx~, and factors the resulting four terms by grouping. It works because the split reconstructs the two binomial products that FOIL would have generated.

Factoring by grouping is itself the general technique for four-term polynomials: group in pairs, extract each pair's GCF, and if the remaining binomials match, factor that binomial out.

Every factoring problem should end with a check by expansion, and should begin with a GCF extraction — those two habits eliminate most errors in the topic.`,
        example: {
          prompt: "Factor 3x² + 11x + 6 using the AC method.",
          steps: [
            "ac = 3·6 = 18; need a pair multiplying to 18 and adding to 11: 9 and 2.",
            "Split the middle: 3x² + 9x + 2x + 6.",
            "Group: 3x(x + 3) + 2(x + 3).",
            "Factor out (x + 3): (x + 3)(3x + 2).",
          ],
          answer: "(x + 3)(3x + 2)",
        },
        mistakes: [
          "Finding numbers that add to c and multiply to b, reversing the roles.",
          "Forgetting to extract a GCF first, making the pair search much harder.",
        ],
        video: "factoring trinomials AC method grouping",
        videoAlt: ["factoring quadratic trinomials explained"],
        practice: { unit: "quadratics-factoring", skill: "factoring-trinomials" },
        tags: ["factoring", "trinomials", "grouping"],
      },
      {
        slug: "factoring-special-cases",
        title: "Factoring Special Cases",
        summary: "Difference of squares and perfect square trinomials, spotted instantly.",
        level: "Advanced",
        keyIdea: "a² − b² = (a+b)(a−b); a² ± 2ab + b² = (a ± b)².",
        simple: `Two patterns are worth recognising on sight.

Difference of squares: two perfect squares with a minus between them.
x² − 49 = (x + 7)(x − 7)
16x² − 25 = (4x + 5)(4x − 5)

A *sum* of squares like x² + 49 does not factor over the real numbers. That difference matters.

Perfect square trinomial: first and last terms are squares, middle is twice the product of their roots.
x² + 12x + 36 = (x + 6)², since 2·6 = 12. ✓

Always remove a GCF first. 8x² − 32 is not obviously a difference of squares until it becomes 8(x² − 4) = 8(x + 2)(x − 2).`,
        complex: `Difference of squares, ~a² − b² = (a + b)(a − b)~, holds for any expressions a and b, including ones already containing radicals or higher powers: ~x⁴ − 16 = (x² + 4)(x² − 4) = (x² + 4)(x + 2)(x − 2)~. Recognising that a factorisation can repeat is what "factor completely" demands.

A sum of squares ~a² + b²~ is irreducible over ℝ but factors over ℂ as ~(a + bi)(a − bi)~, which is why the answer to "does it factor" depends on the number system in play — a distinction that becomes explicit in Algebra 2.

Perfect square trinomials satisfy ~a² ± 2ab + b² = (a ± b)²~. Verifying the middle term is essential: ~x² + 13x + 36~ has square first and last terms but is not a perfect square, since ~2·6 = 12 ≠ 13~. It factors instead as ~(x + 4)(x + 9)~.

The perfect square pattern is also the engine of completing the square, where a constant is manufactured to force the pattern to hold.`,
        example: {
          prompt: "Factor completely: 2x³ − 50x, then 9x² − 30x + 25.",
          steps: [
            "GCF first: 2x(x² − 25).",
            "Difference of squares: 2x(x + 5)(x − 5).",
            "Second: 9x² and 25 are squares of 3x and 5; check middle 2(3x)(5) = 30x ✓.",
          ],
          answer: "2x(x + 5)(x − 5) and (3x − 5)²",
        },
        mistakes: [
          "Trying to factor a sum of squares over the reals.",
          "Calling a trinomial a perfect square without checking the middle term.",
        ],
        video: "factoring difference of squares perfect square trinomials",
        videoAlt: ["factoring special cases algebra explained"],
        practice: { unit: "quadratics-factoring", skill: "factoring-special" },
        tags: ["factoring", "difference of squares", "perfect square"],
      },
    ],
  },
  {
    id: "a1-quadratics",
    title: "Quadratic Functions",
    blurb:
      "Parabolas, and four different methods for solving the equations behind them.",
    topics: [
      {
        slug: "graphing-parabolas",
        title: "Graphing Parabolas",
        summary: "Vertex, axis of symmetry, direction, and how wide it opens.",
        level: "Core",
        keyIdea: "For y = ax² + bx + c, the vertex is at x = −b/(2a).",
        simple: `The graph of a quadratic is a parabola, a U-shape.

- If a > 0 it opens up and the vertex is the minimum.
- If a < 0 it opens down and the vertex is the maximum.
- Larger |a| makes it narrower.

Find the vertex first. Its x-coordinate is −b/(2a); substitute back to get the y-coordinate.

The axis of symmetry is the vertical line through the vertex, x = −b/(2a). The parabola mirrors across it, so once you plot points on one side you get the other side free.

The y-intercept is c, available with no work at all.`,
        complex: `A quadratic function ~f(x) = ax² + bx + c~ with a ≠ 0 graphs as a parabola with axis of symmetry ~x = −b/(2a)~ and vertex ~(−b/(2a), f(−b/(2a)))~. The axis formula follows from completing the square, which rewrites the function in vertex form ~a(x − h)² + k~ with ~h = −b/(2a)~.

The parameter a controls both direction and vertical stretch; it is the same a as in the transformation ~a·f(x)~ applied to the parent function ~y = x²~.

The range follows from the vertex: ~[k, ∞)~ for a > 0 and ~(−∞, k]~ for a < 0. The domain is always ℝ.

Zeros, if real, are symmetric about the axis, so their average is exactly ~−b/(2a)~ — which provides both a fast route to the vertex once you have the roots and a check on the roots once you have the vertex. The number of real zeros is governed by the discriminant ~b² − 4ac~.`,
        example: {
          prompt: "Graph y = x² − 6x + 5: find the vertex, axis, intercepts and range.",
          steps: [
            "Axis: x = −(−6)/(2·1) = 3.",
            "Vertex y: 9 − 18 + 5 = −4, so vertex (3, −4).",
            "y-intercept: c = 5, at (0, 5).",
            "Zeros: x² − 6x + 5 = (x − 1)(x − 5), so x = 1 and 5.",
          ],
          answer: "Vertex (3, −4), axis x = 3, intercepts (0,5), (1,0), (5,0), range [−4, ∞), opens up.",
        },
        mistakes: [
          "Forgetting the negative in −b/(2a).",
          "Reporting only the x-coordinate as the vertex.",
        ],
        video: "graphing quadratic functions vertex axis of symmetry",
        videoAlt: ["graphing parabolas standard form vertex formula"],
        practice: { unit: "quadratic-functions", skill: "graphing-parabolas" },
        tags: ["parabola", "vertex", "graphing"],
      },
      {
        slug: "solving-quadratics-by-factoring",
        title: "Solving Quadratics by Factoring",
        summary: "The zero product property, and why one side must be zero first.",
        level: "Core",
        keyIdea: "If a·b = 0 then a = 0 or b = 0.",
        simple: `The whole method rests on one fact: if two things multiply to zero, at least one of them is zero.

To solve x² + 5x + 6 = 0:
Factor: (x + 2)(x + 3) = 0
Set each factor to zero: x = −2 or x = −3.

The equation must equal zero first. For x² + 5x = −6, move everything to one side before factoring. Factoring while the other side is 6 tells you nothing, because two numbers can multiply to 6 in infinitely many ways.

Solutions of a quadratic are also called roots or zeros, and they are exactly the x-intercepts of the parabola.`,
        complex: `The zero product property holds because ℝ has no zero divisors: ~ab = 0 ⟹ a = 0 or b = 0~. No analogous property exists for any other constant, which is precisely why the equation must be arranged in the form ~(expression) = 0~ before factoring.

Factoring solves only those quadratics whose roots are rational, equivalently those whose discriminant ~b² − 4ac~ is a perfect square. When it is not, the roots are irrational or complex and another method is required — which is why factoring is fast but not general.

A repeated factor gives a double root: ~(x − 3)² = 0~ has the single solution ~x = 3~ with multiplicity 2, and the parabola touches the x-axis there rather than crossing it.

Also note that dividing both sides by a variable factor destroys solutions. Solving ~x² = 5x~ by dividing by x loses ~x = 0~; factoring to ~x(x − 5) = 0~ keeps both.`,
        example: {
          prompt: "Solve 2x² = 7x − 3.",
          steps: [
            "Move everything to one side: 2x² − 7x + 3 = 0.",
            "AC method: ac = 6, pair summing to −7 is −6 and −1.",
            "Split and group: 2x² − 6x − x + 3 = 2x(x − 3) − 1(x − 3).",
            "(x − 3)(2x − 1) = 0.",
          ],
          answer: "x = 3 or x = 1/2",
        },
        mistakes: [
          "Factoring before setting the equation to zero.",
          "Dividing out a common variable factor and losing the solution x = 0.",
        ],
        video: "solving quadratic equations by factoring zero product",
        videoAlt: ["zero product property solving quadratics"],
        practice: { unit: "quadratic-functions", skill: "solving-by-factoring" },
        tags: ["quadratics", "factoring", "zero product"],
      },
      {
        slug: "solving-by-square-roots",
        title: "Solving by Square Roots",
        summary: "The quickest method when there is no middle term.",
        level: "Core",
        keyIdea: "Isolate the square, then take ± the root of both sides.",
        simple: `When a quadratic has no x term, do not factor. Just isolate the square and take roots.

x² = 49 → x = ±7. Two answers, because both 7 and −7 square to 49.

The ± is mandatory. Writing only x = 7 loses half the solution.

It works with a bracket too:
(x − 3)² = 25 → x − 3 = ±5 → x = 3 ± 5, giving x = 8 or x = −2.

If the isolated square equals a negative number, there is no real solution. x² = −9 has none, because no real number squares to a negative. Algebra 2 introduces imaginary numbers to handle that case.`,
        complex: `For ~u² = k~ with k > 0 the solutions are ~u = ±√k~. The ± is required because squaring is not injective on ℝ: both ~√k~ and ~−√k~ map to k. This is also why ~√(u²) = |u|~ rather than u.

The method applies directly whenever the quadratic can be written with a single squared expression and no linear term — that is, in vertex form ~a(x − h)² + k = 0~. Solving gives ~x = h ± √(−k/a)~, showing that the roots are symmetric about the axis ~x = h~.

For k = 0 there is one solution of multiplicity 2; for k < 0 there is no real solution, and the parabola does not meet the x-axis. Over ℂ the solutions are ~±i√|k|~.

Completing the square exists precisely to convert an arbitrary quadratic into this form, making this the underlying method rather than a special case.`,
        example: {
          prompt: "Solve 3(x + 2)² − 15 = 0.",
          steps: [
            "Add 15: 3(x + 2)² = 15.",
            "Divide by 3: (x + 2)² = 5.",
            "Take roots: x + 2 = ±√5.",
          ],
          answer: "x = −2 ± √5",
        },
        mistakes: [
          "Giving only the positive root.",
          "Taking the square root before the squared term is isolated.",
        ],
        video: "solving quadratic equations by square roots",
        videoAlt: ["square root property solving quadratics"],
        practice: null,
        tags: ["quadratics", "square roots", "plus minus"],
      },
      {
        slug: "completing-the-square",
        title: "Completing the Square",
        summary: "Manufacturing a perfect square, and where the quadratic formula comes from.",
        level: "Advanced",
        keyIdea: "Add (b/2)² to both sides to force a perfect square trinomial.",
        simple: `Completing the square turns any quadratic into the square-root method.

For x² + 6x − 7 = 0:
1. Move the constant: x² + 6x = 7.
2. Take half of 6 (that is 3), square it (that is 9), add to both sides: x² + 6x + 9 = 16.
3. The left side is now (x + 3)²: (x + 3)² = 16.
4. Take roots: x + 3 = ±4, so x = 1 or x = −7.

The number you add is always (b/2)². Half, then square.

If the leading coefficient is not 1, divide the whole equation by it first.`,
        complex: `The technique constructs the perfect square trinomial ~x² + bx + (b/2)² = (x + b/2)²~. Adding ~(b/2)²~ to both sides preserves equality, and the left side becomes a square by design.

When ~a ≠ 1~, divide through by a first (or factor a out of the two variable terms), since the pattern is stated for a monic quadratic.

Its importance is structural rather than computational. Applying it to the general equation ~ax² + bx + c = 0~ produces the quadratic formula:

~x = (−b ± √(b² − 4ac))/(2a)~

so the formula is not an independent fact but this procedure carried out once symbolically.

It is also the standard route from standard form to vertex form ~a(x − h)² + k~, which is why it is required for graphing, and the same completion appears in Algebra 2 when converting conic sections into their centre-radius forms.`,
        example: {
          prompt: "Solve 2x² − 12x + 10 = 0 by completing the square.",
          steps: [
            "Divide by 2: x² − 6x + 5 = 0.",
            "Move the constant: x² − 6x = −5.",
            "Half of −6 is −3; squared is 9. Add to both sides: x² − 6x + 9 = 4.",
            "(x − 3)² = 4, so x − 3 = ±2.",
          ],
          answer: "x = 5 or x = 1",
        },
        mistakes: [
          "Adding (b/2)² to one side only.",
          "Forgetting to divide by the leading coefficient before starting.",
        ],
        video: "completing the square quadratic equations explained",
        videoAlt: ["completing the square method algebra"],
        practice: { unit: "quadratic-functions", skill: "completing-square" },
        tags: ["completing the square", "quadratics", "vertex form"],
      },
      {
        slug: "quadratic-formula",
        title: "The Quadratic Formula",
        summary: "The method that always works, and what the discriminant predicts.",
        level: "Advanced",
        keyIdea: "x = (−b ± √(b² − 4ac))/(2a).",
        simple: `The quadratic formula solves every quadratic, factorable or not.

For ax² + bx + c = 0:
x = (−b ± √(b² − 4ac)) / (2a)

Write the equation in standard form first and identify a, b, c *with their signs*. In 2x² − 5x − 3 = 0, b is −5, not 5.

The part under the root, b² − 4ac, is the discriminant, and it predicts the answer before you finish:
- positive → two real solutions
- zero → one repeated solution
- negative → no real solutions

Substitute carefully with parentheses. Most errors here are sign errors, not formula errors.`,
        complex: `Derived by completing the square on ~ax² + bx + c = 0~, the formula gives both roots for any a ≠ 0 over ℝ or ℂ.

The discriminant ~Δ = b² − 4ac~ determines the nature of the roots: ~Δ > 0~ gives two distinct real roots (and if Δ is a perfect square with rational coefficients, they are rational and the quadratic factors over ℚ); ~Δ = 0~ gives one real root of multiplicity 2, where the parabola is tangent to the x-axis; ~Δ < 0~ gives a conjugate pair of complex roots ~p ± qi~.

Vieta's formulas follow directly from the two roots: their sum is ~−b/a~ and their product is ~c/a~. These give a quick check on any computed pair and are the fastest way to reconstruct a quadratic from its roots.

Numerically, the formula suffers catastrophic cancellation when ~b² ≫ 4ac~ and the signs align, which is why computational implementations use the algebraically equivalent form ~2c/(−b ∓ √Δ)~ for one of the roots.`,
        example: {
          prompt: "Solve 3x² + 2x − 4 = 0.",
          steps: [
            "a = 3, b = 2, c = −4.",
            "Discriminant: 2² − 4(3)(−4) = 4 + 48 = 52.",
            "x = (−2 ± √52)/6 and √52 = 2√13.",
            "x = (−2 ± 2√13)/6 = (−1 ± √13)/3.",
          ],
          answer: "x = (−1 + √13)/3 or x = (−1 − √13)/3",
        },
        mistakes: [
          "Dropping the sign of b or c when identifying coefficients.",
          "Dividing only the radical by 2a instead of the whole numerator.",
        ],
        video: "quadratic formula discriminant explained",
        videoAlt: ["using the quadratic formula to solve equations"],
        practice: { unit: "quadratic-functions", skill: "quadratic-formula" },
        tags: ["quadratic formula", "discriminant", "roots"],
      },
      {
        slug: "quadratic-applications",
        title: "Quadratic Applications",
        summary: "Projectiles, areas and maximum profit — where parabolas describe reality.",
        level: "Advanced",
        keyIdea: "The vertex answers 'maximum' or 'minimum'; the zeros answer 'when does it hit zero'.",
        simple: `Most quadratic word problems ask one of two questions, and each has its own tool.

"What is the highest/lowest/best?" → find the vertex.
"When does it hit the ground / reach zero / break even?" → find the zeros.

A projectile is modelled by h(t) = −16t² + v₀t + h₀ in feet, or −4.9t² + v₀t + h₀ in metres. The negative leading coefficient is gravity, which is why the graph opens down.

Two answers often come out of the algebra when only one makes sense. Negative time, negative length and negative quantity are usually rejected. Say why you are rejecting it.`,
        complex: `Applications reduce to reading a quadratic model's features. The vertex gives the optimum: the maximum for ~a < 0~ (height, revenue) and the minimum for ~a > 0~ (cost, distance). Its input is ~t = −b/(2a)~ and its output is the optimal value — and confusing the two is the most common error, since "when" wants the input and "how high" wants the output.

Zeros give boundary events: ground contact for a projectile, break-even points for profit ~P = R − C~.

Domain restrictions from context are part of the answer. Time is typically restricted to ~[0, t_ground]~, and a length or quantity to positive values, so a negative root is discarded on physical grounds rather than mathematical ones.

Revenue models frequently arise from a linear demand relationship: if price p reduces quantity linearly, then ~R = p·q(p)~ is quadratic in p, and its vertex is the revenue-maximising price. Recognising that a product of two linear expressions is quadratic is what makes these problems tractable.`,
        example: {
          prompt: "A ball is thrown: h(t) = −16t² + 48t + 4 feet. Find its maximum height and when it lands.",
          steps: [
            "Vertex time: t = −48/(2·−16) = 1.5 s.",
            "Max height: h(1.5) = −36 + 72 + 4 = 40 ft.",
            "Landing: solve −16t² + 48t + 4 = 0 with the quadratic formula.",
            "t = (−48 ± √(2304 + 256))/(−32) → t ≈ 3.08 (rejecting the negative root).",
          ],
          answer: "Maximum height 40 ft at t = 1.5 s; lands at about t = 3.08 s.",
        },
        mistakes: [
          "Reporting the time of the vertex when asked for the maximum height.",
          "Keeping a negative time value as a valid answer.",
        ],
        video: "quadratic word problems projectile motion maximum",
        videoAlt: ["quadratic applications vertex maximum word problems"],
        practice: null,
        tags: ["applications", "projectile", "optimisation"],
      },
    ],
  },
  {
    id: "a1-exponential",
    title: "Exponentials & Sequences",
    blurb:
      "Growth that multiplies instead of adds, and the patterns behind both kinds.",
    topics: [
      {
        slug: "exponential-functions",
        title: "Exponential Functions",
        summary: "When the variable moves into the exponent, everything changes.",
        level: "Core",
        keyIdea: "y = a·bˣ multiplies by b each step, rather than adding.",
        simple: `In a linear function you add the same amount each step. In an exponential function you *multiply* by the same amount each step.

y = a·bˣ, where a is the starting value and b is the multiplier per step.

If b > 1 the function grows. If 0 < b < 1 it decays.

y = 3·2ˣ starts at 3 and doubles each time: 3, 6, 12, 24, 48.

The difference matters enormously over time. Adding 5 each step for 20 steps gets you to 100. Doubling for 20 steps gets you past a million.

The graph never touches the x-axis. It gets closer and closer, which makes the x-axis a horizontal asymptote.`,
        complex: `An exponential function ~f(x) = a·bˣ~ with ~a ≠ 0~, ~b > 0~ and ~b ≠ 1~ has domain ℝ, range ~(0, ∞)~ for ~a > 0~, and y-intercept ~(0, a)~ since ~b⁰ = 1~. The line ~y = 0~ is a horizontal asymptote.

Its defining property is a constant multiplicative rate: ~f(x+1)/f(x) = b~ for all x, in contrast to a linear function's constant difference. Tables are classified by exactly this test — constant differences mean linear, constant ratios mean exponential.

The base is restricted to positive values because ~bˣ~ is not real-valued for negative b at fractional exponents; ~(−4)^{1/2}~ has no real value.

Exponential growth eventually dominates any polynomial: for ~b > 1~, ~bˣ/xⁿ → ∞~ as ~x → ∞~ for every fixed n. That fact is why compound interest, population models and algorithmic complexity are all discussed in exponential terms.

Inverting an exponential requires the logarithm, which is the central subject of Algebra 2.`,
        example: {
          prompt: "Does the table x = 0,1,2,3 with y = 5, 15, 45, 135 fit a linear or exponential model? Write the rule.",
          steps: [
            "Differences: 10, 30, 90 — not constant, so not linear.",
            "Ratios: 15/5 = 3, 45/15 = 3, 135/45 = 3 — constant.",
            "a = 5 (value at x = 0), b = 3.",
          ],
          answer: "Exponential: y = 5·3ˣ",
        },
        mistakes: [
          "Treating y = 3·2ˣ as 6ˣ. The coefficient is not part of the base.",
          "Checking differences only and calling any curved table quadratic.",
        ],
        video: "exponential functions graphs explained algebra",
        videoAlt: ["exponential function growth decay introduction"],
        practice: { unit: "exponential-growth-decay", skill: "exponential-functions" },
        tags: ["exponential", "growth", "functions"],
      },
      {
        slug: "exponential-growth-decay",
        title: "Exponential Growth & Decay",
        summary: "Percent change per period, written as a multiplier.",
        level: "Advanced",
        keyIdea: "Growth: y = a(1 + r)ᵗ. Decay: y = a(1 − r)ᵗ.",
        simple: `Real growth is usually described as a percent per period, which you convert into a multiplier.

Growing 8% per year: multiply by 1.08 each year, so y = a(1.08)ᵗ.
Decaying 8% per year: multiply by 0.92 each year, so y = a(0.92)ᵗ.

The multiplier is 1 + r for growth and 1 − r for decay, with r as a decimal.

A car worth $24,000 losing 15% per year: V = 24000(0.85)ᵗ. After 3 years, V = 24000(0.614) ≈ $14,739.

Note it never reaches zero. Each year removes 15% of a smaller amount, which is exactly how depreciation and radioactive decay behave.`,
        complex: `The models ~A = a(1 + r)ᵗ~ and ~A = a(1 − r)ᵗ~ express a constant proportional change per period. Compound interest generalises this to n periods per year, ~A = P(1 + r/n)^{nt}~, and as ~n → ∞~ this converges to continuous compounding, ~A = Pe^{rt}~, with ~e ≈ 2.71828~.

Half-life problems are decay expressed by the time constant rather than the rate: ~A = a(1/2)^{t/h}~, where h is the half-life. Doubling time works identically with base 2. Converting between rate form and half-life form requires logarithms, which is why solving for t is deferred to Algebra 2.

Two modelling cautions. First, r must match the period of t — an annual rate with monthly periods requires ~r/12~. Second, unbounded exponential growth is a poor long-run model for populations, which is why logistic models with a carrying capacity replace it in applied work.`,
        example: {
          prompt: "A colony of 400 bacteria grows 12% per hour. Find the population after 6 hours.",
          steps: [
            "Multiplier: 1 + 0.12 = 1.12.",
            "Model: P = 400(1.12)ᵗ.",
            "P(6) = 400(1.12)⁶.",
            "1.12⁶ ≈ 1.9738.",
          ],
          answer: "About 790 bacteria",
        },
        mistakes: [
          "Using 0.12 as the multiplier instead of 1.12.",
          "Multiplying by the rate t times instead of raising to the power t.",
        ],
        video: "exponential growth and decay word problems",
        videoAlt: ["exponential growth decay formula explained"],
        practice: { unit: "exponential-growth-decay", skill: "exponential-growth" },
        tags: ["growth", "decay", "percent"],
      },
      {
        slug: "arithmetic-sequences",
        title: "Arithmetic Sequences",
        summary: "Adding the same amount each time — a linear function on the integers.",
        level: "Core",
        keyIdea: "aₙ = a₁ + (n − 1)d.",
        simple: `An arithmetic sequence adds a fixed amount, the common difference d, each step.

4, 7, 10, 13, … has d = 3.

To find any term without listing them all:
aₙ = a₁ + (n − 1)d

The 20th term of that sequence: a₂₀ = 4 + 19(3) = 61.

The (n − 1) trips people up. The first term needs zero jumps, the second needs one, so the nth needs n − 1.

Find d by subtracting any term from the one after it. If those differences are not all equal, it is not arithmetic.`,
        complex: `An arithmetic sequence satisfies the recursive definition ~aₙ = aₙ₋₁ + d~ with ~a₁~ given, and the explicit formula ~aₙ = a₁ + (n − 1)d~.

The explicit form is a linear function restricted to the positive integers: rewriting it as ~aₙ = dn + (a₁ − d)~ shows slope d and intercept ~a₁ − d~. That is why plotted terms are collinear and why arithmetic sequences and linear functions share their structure — the difference is a discrete domain rather than a continuous one.

The sum of the first n terms is ~Sₙ = n(a₁ + aₙ)/2~, the count times the average of the first and last terms. Gauss's pairing argument gives it directly: adding the sequence to its own reversal pairs every position into the same total ~a₁ + aₙ~, and there are n such pairs counted twice.

Both formulas can be solved for any variable, so problems asking "which term equals 61" are handled by substituting and solving for n — with a non-integer result meaning the value never appears.`,
        example: {
          prompt: "For 7, 11, 15, 19, …, find the 30th term and the sum of the first 30 terms.",
          steps: [
            "d = 11 − 7 = 4, a₁ = 7.",
            "a₃₀ = 7 + 29(4) = 7 + 116 = 123.",
            "S₃₀ = 30(7 + 123)/2 = 30(130)/2.",
          ],
          answer: "a₃₀ = 123 and S₃₀ = 1,950",
        },
        mistakes: [
          "Using n instead of n − 1 in the formula.",
          "Assuming a sequence is arithmetic without checking every consecutive difference.",
        ],
        video: "arithmetic sequences explicit formula explained",
        videoAlt: ["arithmetic sequence nth term formula"],
        practice: { unit: "sequences", skill: "arithmetic-sequences" },
        tags: ["sequences", "arithmetic", "common difference"],
      },
      {
        slug: "geometric-sequences",
        title: "Geometric Sequences",
        summary: "Multiplying by the same amount each time — an exponential on the integers.",
        level: "Core",
        keyIdea: "aₙ = a₁·r^(n−1).",
        simple: `A geometric sequence multiplies by a fixed amount, the common ratio r, each step.

3, 6, 12, 24, … has r = 2.
81, 27, 9, 3, … has r = 1/3.

Any term is given by:
aₙ = a₁·r^(n−1)

The 8th term of 3, 6, 12, …: a₈ = 3·2⁷ = 384.

Find r by dividing any term by the one before it. Division, not subtraction — that is the whole distinction from arithmetic.

A negative ratio makes the signs alternate: 2, −6, 18, −54 has r = −3.`,
        complex: `A geometric sequence satisfies ~aₙ = r·aₙ₋₁~ with explicit formula ~aₙ = a₁r^{n−1}~. It is an exponential function on a discrete domain, just as an arithmetic sequence is a linear one, and the same n − 1 offset appears for the same reason.

The finite sum is ~Sₙ = a₁(1 − rⁿ)/(1 − r)~ for ~r ≠ 1~, derived by subtracting ~rSₙ~ from ~Sₙ~ so that all interior terms cancel — the same telescoping trick used to convert repeating decimals to fractions.

When ~|r| < 1~, ~rⁿ → 0~ and the infinite series converges to ~S = a₁/(1 − r)~. This is why ~0.999… = 1~: it is the geometric series with ~a₁ = 0.9~ and ~r = 0.1~. For ~|r| ≥ 1~ the series diverges.

Distinguishing sequence types is a matter of testing differences and ratios: constant differences mean arithmetic, constant ratios mean geometric, and neither means some other pattern entirely.`,
        example: {
          prompt: "For 5, 20, 80, …, find the 7th term. Then find the sum of the infinite series 8 + 4 + 2 + 1 + …",
          steps: [
            "r = 20/5 = 4, a₁ = 5.",
            "a₇ = 5·4⁶ = 5(4096) = 20,480.",
            "Second series: a₁ = 8, r = 1/2, and |r| < 1 so it converges.",
            "S = 8/(1 − 1/2) = 8/(1/2).",
          ],
          answer: "a₇ = 20,480; the infinite sum is 16.",
        },
        mistakes: [
          "Finding r by subtracting consecutive terms.",
          "Applying the infinite sum formula when |r| ≥ 1, where the series has no finite sum.",
        ],
        video: "geometric sequences common ratio nth term",
        videoAlt: ["geometric sequence formula explained"],
        practice: { unit: "sequences", skill: "geometric-sequences" },
        tags: ["sequences", "geometric", "common ratio"],
      },
    ],
  },
];

export const course = {
  id: "algebra-1",
  short: "Algebra 1",
  title: "Algebra 1",
  tagline: "Linear thinking, factoring, and the first serious functions.",
  description:
    "Algebra 1 is the course everything else is built on. Lines, systems, factoring and quadratics account for most of it, and the students who do well later are the ones who can factor and graph without thinking hard about it. Every topic here links to unlimited practice on the AlgeBridge platform.",
  color: "#1d4ed8",
  units,
};
