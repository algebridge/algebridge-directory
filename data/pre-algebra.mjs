/**
 * Pre-Algebra curriculum for Algebridge Directory.
 *
 * Every topic carries two explanations on purpose:
 *   simple  — what you would say to a friend who is stuck, no jargon
 *   complex — the precise version, with the names and general forms a
 *             textbook or a teacher will actually use
 *
 * `practice` maps to a real unit/skill on algebridge.vercel.app. When a topic
 * has no matching skill on the platform yet, practice is null and the site
 * links to the platform generally instead of faking a deep link.
 */

const units = [
  {
    id: "pa-numbers",
    title: "Numbers & Operations",
    blurb:
      "The number system underneath everything else: place value, factors, signed numbers, and the order operations happen in.",
    topics: [
      {
        slug: "place-value-and-decimals",
        title: "Place Value & Decimals",
        summary: "Why the same digit is worth different amounts depending on where it sits.",
        level: "Intro",
        keyIdea: "Each place is 10 times the place to its right.",
        simple: `Our number system is a set of columns, and each column is worth ten times the one to its right. In 4,382 the 3 is not just "three" — it sits in the hundreds column, so it means 300.

Decimals keep the same pattern going the other direction. Move right past the decimal point and each column is worth one tenth of the one before: tenths, hundredths, thousandths. So 0.7 is seven tenths and 0.07 is seven hundredths, which is ten times smaller.

That is the whole idea. The digit tells you *how many*, the column tells you *of what*.`,
        complex: `Our system is base ten positional notation. A number is a sum of digits multiplied by powers of ten:

~4382.7 = 4×10³ + 3×10² + 8×10¹ + 2×10⁰ + 7×10⁻¹~

The exponent on 10 is the position index, counting left from the decimal point starting at 0 and going negative to the right. This is why the decimal point is not really a separator between two kinds of number — it is a marker for where the exponent hits zero.

Two consequences worth internalising. First, multiplying by 10 shifts every digit one place left because it adds 1 to every exponent. Second, trailing zeros after the decimal point add nothing, since 0×10⁻³ = 0, which is why 2.5 and 2.500 are the same number.`,
        example: {
          prompt: "Write 6.043 in expanded form and say what the 4 is worth.",
          steps: [
            "Label the columns: 6 is ones, 0 is tenths, 4 is hundredths, 3 is thousandths.",
            "Expanded: 6×1 + 0×0.1 + 4×0.01 + 3×0.001",
          ],
          answer: "The 4 is worth 4 hundredths, or 0.04.",
        },
        mistakes: [
          "Reading 0.07 as bigger than 0.7 because it has more digits. More digits does not mean bigger after the decimal point.",
          "Lining up decimals by the right edge when adding. Line up the decimal points instead.",
        ],
        video: "place value and decimals explained",
        videoAlt: ["understanding decimal place value math"],
        practice: null,
        tags: ["place value", "decimals", "number sense"],
      },
      {
        slug: "factors-and-multiples",
        title: "Factors & Multiples",
        summary: "Two words that get mixed up constantly, and the difference in one sentence.",
        level: "Intro",
        keyIdea: "Factors divide into a number. Multiples are built from it.",
        simple: `A factor of 12 is any whole number that divides into 12 with nothing left over: 1, 2, 3, 4, 6, 12. Factors are always less than or equal to the number.

A multiple of 12 is what you get by multiplying 12 by a whole number: 12, 24, 36, 48, and on forever. Multiples are always greater than or equal to the number.

An easy way to keep them straight: factors *fit inside*, multiples *march outward*. Every number has a limited list of factors and an unlimited list of multiples.`,
        complex: `For integers a and b, we say a is a factor (or divisor) of b when there exists an integer k with ~b = a·k~. The same equation read the other way says b is a multiple of a. Factor and multiple are two names for the two sides of one divisibility relation.

Finding all factors efficiently uses pairing: factors come in pairs whose product is n, so you only need to test divisors up to ~√n~. For 36 you test 1, 2, 3, 4, 5, 6 and pick up 36, 18, 12, 9, and 6 as the partners. The pair collapses to a single value exactly when n is a perfect square, which is why perfect squares have an odd number of factors.`,
          example: {
          prompt: "List every factor of 36.",
          steps: [
            "Test divisors up to √36 = 6.",
            "1×36, 2×18, 3×12, 4×9, 6×6.",
            "6 pairs with itself, so it is listed once.",
          ],
          answer: "1, 2, 3, 4, 6, 9, 12, 18, 36 — nine factors, odd because 36 is a perfect square.",
        },
        mistakes: [
          "Swapping the words: saying 24 is a factor of 12. It is the other way round.",
          "Forgetting that 1 and the number itself are always factors.",
        ],
        video: "factors and multiples explained",
        videoAlt: ["difference between factors and multiples"],
        practice: null,
        tags: ["factors", "multiples", "divisibility"],
      },
      {
        slug: "prime-factorization",
        title: "Prime Factorization",
        summary: "Breaking any number into the prime building blocks that only it has.",
        level: "Intro",
        keyIdea: "Every whole number above 1 has exactly one prime fingerprint.",
        simple: `A prime number has exactly two factors: 1 and itself. 2, 3, 5, 7, 11 and so on. Everything else can be broken down into primes multiplied together.

To break a number down, keep splitting it until only primes are left. For 60: 60 = 6 × 10, then 6 = 2 × 3 and 10 = 2 × 5. So 60 = 2 × 2 × 3 × 5.

The useful part is that it does not matter how you start splitting. Begin with 60 = 4 × 15 instead and you land on the same four primes. Every number has one and only one prime recipe.`,
        complex: `The Fundamental Theorem of Arithmetic states that every integer n > 1 factors into primes uniquely up to the order of the factors. Written in canonical form:

~n = p₁^a₁ · p₂^a₂ · … · p_k^a_k~

where the pᵢ are distinct primes in increasing order and each exponent aᵢ ≥ 1. For 60 this is ~2²·3·5~.

This canonical form turns several messy questions into bookkeeping. The number of factors of n is ~(a₁+1)(a₂+1)…(a_k+1)~, because each factor chooses an exponent from 0 up to aᵢ independently — 60 therefore has (2+1)(1+1)(1+1) = 12 factors. GCF and LCM also fall straight out of the exponents, which is the reason prime factorization is taught before fractions rather than after.`,
        example: {
          prompt: "Find the prime factorization of 84.",
          steps: [
            "84 is even: 84 = 2 × 42.",
            "42 is even: 42 = 2 × 21.",
            "21 = 3 × 7, both prime.",
          ],
          answer: "84 = 2² × 3 × 7",
        },
        mistakes: [
          "Calling 1 prime. It has only one factor, so it is neither prime nor composite.",
          "Stopping too early and leaving a composite number like 9 or 15 in the answer.",
        ],
        video: "prime factorization explained factor tree",
        videoAlt: ["prime factorization factor tree method"],
        practice: null,
        tags: ["primes", "factor tree", "number theory"],
      },
      {
        slug: "gcf-and-lcm",
        title: "GCF & LCM",
        summary: "The biggest thing that divides both, and the smallest thing they both divide.",
        level: "Intro",
        keyIdea: "GCF takes the lowest shared powers; LCM takes the highest.",
        simple: `The GCF (greatest common factor) of two numbers is the largest number that divides into both. For 12 and 18 the shared factors are 1, 2, 3 and 6, so the GCF is 6. This is what you use to reduce fractions.

The LCM (least common multiple) is the smallest number both of them divide into. For 12 and 18 that is 36. This is what you use to find a common denominator.

Quick check on which one you need: GCF makes things smaller, LCM makes things bigger.`,
        complex: `Both come directly out of prime factorizations. Write each number in canonical form and compare exponents prime by prime:

~12 = 2²·3¹    18 = 2¹·3²~

Take the minimum exponent on each prime for the GCF (~2¹·3¹ = 6~) and the maximum for the LCM (~2²·3² = 36~). Any prime missing from a number counts as exponent 0.

This gives the identity ~GCF(a,b) · LCM(a,b) = a·b~, since min(x,y) + max(x,y) = x + y for every exponent pair. Checking: 6 × 36 = 216 = 12 × 18. That identity is the fast route to an LCM once you have the GCF, and it is why the Euclidean algorithm (which finds GCF quickly without factoring) is useful for both.`,
        example: {
          prompt: "Find the GCF and LCM of 24 and 36.",
          steps: [
            "24 = 2³·3, 36 = 2²·3².",
            "GCF takes lowest powers: 2²·3¹ = 12.",
            "LCM takes highest powers: 2³·3² = 72.",
          ],
          answer: "GCF = 12, LCM = 72. Check: 12 × 72 = 864 = 24 × 36.",
        },
        mistakes: [
          "Using the LCM to reduce a fraction. Reducing needs the GCF.",
          "Assuming the LCM is always the two numbers multiplied. That only holds when the GCF is 1.",
        ],
        video: "GCF and LCM using prime factorization",
        videoAlt: ["greatest common factor least common multiple explained"],
        practice: null,
        tags: ["gcf", "lcm", "fractions"],
      },
      {
        slug: "order-of-operations",
        title: "Order of Operations (PEMDAS)",
        summary: "Why 2 + 3 × 4 is 14 and not 20, and the order every calculator agrees on.",
        level: "Intro",
        keyIdea: "Grouping, then powers, then × ÷ left to right, then + − left to right.",
        simple: `If everyone evaluated expressions in their own order, the same expression would have different answers. So mathematics fixed one order and everybody uses it.

Parentheses first. Then exponents. Then multiplication and division. Then addition and subtraction.

The part people miss: multiplication and division are the *same* rank, done left to right as you meet them. Same for addition and subtraction. In 12 ÷ 3 × 2 you do 12 ÷ 3 first because it comes first, giving 4 × 2 = 8. Not 12 ÷ 6.`,
        complex: `The convention has two tiers of information. The first is precedence: grouping symbols, then exponentiation, then multiplicative operations, then additive operations. The second is associativity, which resolves ties within a tier — and this is the part the mnemonic PEMDAS hides.

Multiplication and division share one precedence level and are left-associative, so ~a ÷ b × c~ means ~(a ÷ b) × c~. Addition and subtraction likewise. Exponentiation is the exception: it is right-associative, so ~2^3^2~ means ~2^(3²) = 2⁹ = 512~, not ~(2³)² = 64~.

Grouping symbols also include implicit ones: a fraction bar groups its entire numerator and denominator, and a radical groups everything under it. ~(3+5)/(2·2)~ needs no written parentheses when set as a fraction, which is a common source of transcription errors when rewriting work on one line.`,
        example: {
          prompt: "Evaluate 4 + 2 × (9 − 5)² ÷ 8.",
          steps: [
            "Parentheses: 9 − 5 = 4, giving 4 + 2 × 4² ÷ 8.",
            "Exponent: 4² = 16, giving 4 + 2 × 16 ÷ 8.",
            "× and ÷ left to right: 2 × 16 = 32, then 32 ÷ 8 = 4.",
            "Addition: 4 + 4.",
          ],
          answer: "8",
        },
        mistakes: [
          "Doing all multiplication before any division. They tie, so go left to right.",
          "Treating a fraction bar as if it only groups the first term of the numerator.",
        ],
        video: "order of operations PEMDAS explained",
        videoAlt: ["order of operations with exponents and parentheses"],
        practice: null,
        tags: ["pemdas", "order of operations", "evaluating"],
      },
      {
        slug: "integers-and-absolute-value",
        title: "Integers & Absolute Value",
        summary: "Negative numbers on the number line, and what the bars around a number really mean.",
        level: "Intro",
        keyIdea: "|x| is distance from zero, so it is never negative.",
        simple: `Integers are whole numbers including the negatives: … −3, −2, −1, 0, 1, 2, 3 … They sit evenly spaced on a number line with zero in the middle.

Absolute value, written |x|, asks one question: how far is this number from zero? Distance has no direction, so the answer is never negative. |−7| = 7 and |7| = 7.

Careful, though: |x| is not "delete the minus sign." It is distance. −|−7| is still −7, because the absolute value happens first and the minus sign outside stays.`,
        complex: `The integers ℤ extend the naturals so that subtraction is always defined. On the number line, −a is the reflection of a across 0, which makes ℤ closed under addition, subtraction and multiplication (but not division).

Absolute value is formally a piecewise function:

~|x| = x   if x ≥ 0
|x| = −x  if x < 0~

Note that the second branch produces a positive output precisely because negating a negative gives a positive. Geometrically |x| is the distance from x to 0, and more generally ~|a − b|~ is the distance between a and b on the line — a reading that makes absolute value equations and inequalities far easier to solve later, since ~|x − 3| < 5~ simply says "x is within 5 units of 3."`,
        example: {
          prompt: "Evaluate |−12| + (−|4|) − |3 − 10|.",
          steps: [
            "|−12| = 12.",
            "−|4| = −4, because the bars are applied before the outside sign.",
            "|3 − 10| = |−7| = 7.",
            "12 + (−4) − 7.",
          ],
          answer: "1",
        },
        mistakes: [
          "Writing |−5| = −5. Distance cannot be negative.",
          "Simplifying |3 − 10| as |3| − |10|. Do the inside first; absolute value does not distribute over subtraction.",
        ],
        video: "absolute value and integers on the number line",
        videoAlt: ["what is absolute value math"],
        practice: { unit: "absolute-value-piecewise", skill: "absolute-value" },
        tags: ["integers", "absolute value", "number line"],
      },
      {
        slug: "adding-subtracting-integers",
        title: "Adding & Subtracting Integers",
        summary: "The sign rules, and the one reframing that makes them stop being rules.",
        level: "Intro",
        keyIdea: "Subtracting is adding the opposite: a − b = a + (−b).",
        simple: `Think of positives as money you have and negatives as money you owe.

Same signs: add the amounts and keep the sign. −6 + −4 means you owe 6 then owe 4 more, so you owe 10: −10.

Different signs: subtract the smaller size from the bigger one and keep the sign of whichever was bigger. −9 + 4 means you owe 9 and pay back 4, so you still owe 5: −5.

Subtraction is the shortcut worth memorising. Every subtraction can be rewritten as addition: 5 − 8 becomes 5 + (−8) = −3. Once every problem is addition, you only need the two rules above.`,
        complex: `Subtraction is defined as addition of the additive inverse: ~a − b := a + (−b)~. This is a definition rather than a separate operation, which is why "keep, change, change" works and why it always works.

Addition of signed numbers has a clean geometric statement. Adding a positive translates right on the number line, adding a negative translates left. Two same-signed values translate the same direction, so magnitudes add and the sign is preserved: ~|a| + |b|~. Opposite signs translate against each other, so magnitudes partially cancel and the result carries the sign of the larger magnitude: ~|a| − |b|~ in absolute size.

The structure being used here is that ℤ forms an abelian group under addition: every element has an inverse, addition is commutative and associative. That is exactly what licenses rearranging ~−7 + 12 − 5~ into any order you like, which is a habit worth forming before it is needed for combining like terms.`,
        example: {
          prompt: "Simplify −8 − (−3) + (−6).",
          steps: [
            "Rewrite subtraction as addition: −8 + 3 + (−6).",
            "−8 + 3 = −5 (different signs, 8 is bigger, so negative).",
            "−5 + (−6) = −11 (same signs, add and keep).",
          ],
          answer: "−11",
        },
        mistakes: [
          "Reading −8 − (−3) as −11. Two minuses in a row become a plus: −8 + 3.",
          "Adding the magnitudes when signs differ. Different signs means they partly cancel.",
        ],
        video: "adding and subtracting integers rules",
        videoAlt: ["adding subtracting negative numbers explained"],
        practice: null,
        tags: ["integers", "negative numbers", "signs"],
      },
      {
        slug: "multiplying-dividing-integers",
        title: "Multiplying & Dividing Integers",
        summary: "Why a negative times a negative is positive, not just that it is.",
        level: "Intro",
        keyIdea: "Count the negative factors: even count is positive, odd count is negative.",
        simple: `The rule is short. Two negatives multiply to a positive. One negative gives a negative. Division follows exactly the same pattern.

For longer products, just count the negative signs. (−2)(−3)(−4) has three negatives, an odd number, so the answer is negative: −24.

Why does negative times negative come out positive? Look at a pattern: −3 × 3 = −9, −3 × 2 = −6, −3 × 1 = −3, −3 × 0 = 0. Each time the second factor drops by 1, the answer rises by 3. Keep going and −3 × −1 has to be 3.`,
        complex: `The positive result is forced by the distributive property, not chosen for convenience. Consider:

~0 = (−3)·0 = (−3)(2 + (−2)) = (−3)(2) + (−3)(−2) = −6 + (−3)(−2)~

The only value of ~(−3)(−2)~ that makes that sum zero is 6. Any other convention would break distributivity, and distributivity is what makes the whole arithmetic system consistent.

In general, for a product of n nonzero factors the sign is ~(−1)^k~ where k is the number of negative factors, so parity of k decides the sign. Division inherits the rule because ~a ÷ b = a · b⁻¹~ and the reciprocal of a negative is negative.`,
        example: {
          prompt: "Evaluate (−4)(3)(−2) ÷ (−6).",
          steps: [
            "(−4)(3) = −12.",
            "(−12)(−2) = 24 (two negatives).",
            "24 ÷ (−6) = −4 (one negative).",
          ],
          answer: "−4",
        },
        mistakes: [
          "Applying the multiplication sign rules to addition. −3 + −4 is −7, not 7.",
          "Losing a sign when a negative is squared: (−5)² = 25 but −5² = −25.",
        ],
        video: "multiplying and dividing integers rules explained",
        videoAlt: ["why negative times negative is positive"],
        practice: null,
        tags: ["integers", "signs", "multiplication"],
      },
      {
        slug: "exponents-intro",
        title: "Introduction to Exponents",
        summary: "Repeated multiplication, and the two exponents that look strange at first.",
        level: "Intro",
        keyIdea: "aⁿ means n copies of a multiplied together.",
        simple: `An exponent is a counter for repeated multiplication. 2⁵ means 2 × 2 × 2 × 2 × 2 = 32. The small number counts the factors, it does not multiply.

That is the biggest early trap: 2⁵ is not 10.

Two special cases. Anything to the first power is itself: 7¹ = 7. Anything (except 0) to the zero power is 1: 7⁰ = 1. That second one looks arbitrary until you look at a pattern: 2³ = 8, 2² = 4, 2¹ = 2. Each step down halves the result, so the next one has to be 1.`,
        complex: `For a positive integer n, ~aⁿ~ is defined as the product of n copies of a, with ~a¹ = a~ as the base case and the recursive rule ~aⁿ = a·aⁿ⁻¹~.

The value of ~a⁰~ is then forced rather than assumed. The quotient rule ~aᵐ ÷ aⁿ = aᵐ⁻ⁿ~ applied to ~aⁿ ÷ aⁿ~ gives ~a⁰~ on one side and 1 on the other, so ~a⁰ = 1~ for every a ≠ 0. The case ~0⁰~ is left undefined in this context because the two natural extensions disagree.

Watch the interaction with the unary minus. Exponentiation binds tighter than negation, so ~−a²~ means ~−(a²)~ while ~(−a)²~ means the square of the negative. For a = 5 those are −25 and 25 respectively, and no amount of care about signs elsewhere will save work that gets this wrong.`,
        example: {
          prompt: "Evaluate 3⁴, (−2)³, and −2⁴.",
          steps: [
            "3⁴ = 3·3·3·3 = 81.",
            "(−2)³ = (−2)(−2)(−2) = −8 (odd number of negatives).",
            "−2⁴ = −(2·2·2·2) = −16 (the minus is not inside the power).",
          ],
          answer: "81, −8, −16",
        },
        mistakes: [
          "Multiplying base by exponent: reading 4³ as 12 instead of 64.",
          "Assuming (−3)² and −3² are the same. They are 9 and −9.",
        ],
        video: "introduction to exponents explained",
        videoAlt: ["what are exponents basics math"],
        practice: { unit: "exponents-radicals", skill: "exponent-rules" },
        tags: ["exponents", "powers"],
      },
      {
        slug: "square-roots-intro",
        title: "Square Roots & Perfect Squares",
        summary: "Undoing a square, and why √ always hands back the positive answer.",
        level: "Intro",
        keyIdea: "√a asks: what non-negative number squared gives a?",
        simple: `Squaring multiplies a number by itself: 6² = 36. A square root runs that backwards: √36 = 6.

Perfect squares are the numbers that come out clean: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Knowing these on sight saves enormous time later in algebra.

Numbers in between still have roots, they are just not whole. √20 is a little under 4.5, since 4² = 16 and 5² = 25. If it does not come out clean, you either leave it as √20 or round it.`,
        complex: `The radical symbol denotes the principal square root: ~√a~ is defined as the unique non-negative b with ~b² = a~, for a ≥ 0. This single-valued definition is what allows √ to be a function.

The distinction that trips people later: the equation ~x² = 36~ has two solutions, x = 6 and x = −6, and you write ~x = ±6~. But the expression ~√36~ has one value, 6. The ± in solving quadratics is something you introduce when taking roots of both sides, not something the radical already contains.

A useful identity is ~√(x²) = |x|~, not x, since the output must be non-negative. Square roots of negatives have no real value, which is exactly the gap that imaginary numbers fill in Algebra 2.`,
        example: {
          prompt: "Evaluate √81, √(−5)², and solve x² = 49.",
          steps: [
            "√81 = 9, since 9² = 81.",
            "√(−5)² = √25 = 5, which equals |−5|.",
            "x² = 49 has two solutions when you take roots of both sides.",
          ],
          answer: "9, 5, and x = ±7",
        },
        mistakes: [
          "Writing √36 = ±6. The radical alone is positive; the ± appears when solving an equation.",
          "Thinking √(a + b) = √a + √b. Try a = 9, b = 16: √25 = 5, not 3 + 4 = 7.",
        ],
        video: "square roots and perfect squares explained",
        videoAlt: ["intro to square roots math"],
        practice: { unit: "exponents-radicals", skill: "simplifying-radicals" },
        tags: ["square roots", "radicals", "perfect squares"],
      },
    ],
  },
  {
    id: "pa-fractions",
    title: "Fractions & Decimals",
    blurb:
      "The single biggest predictor of struggling with algebra later. Worth over-learning until it feels boring.",
    topics: [
      {
        slug: "equivalent-fractions",
        title: "Equivalent Fractions & Simplifying",
        summary: "Different names for the same amount, and how to find the simplest one.",
        level: "Intro",
        keyIdea: "Multiplying top and bottom by the same nonzero number changes the name, not the value.",
        simple: `1/2, 2/4 and 50/100 are the same amount written three ways. You move between them by multiplying or dividing the top and bottom by the same number.

To simplify, divide top and bottom by their GCF. For 18/24 the GCF is 6, so it becomes 3/4. You can also chip away in stages — divide by 2, then by 3 — and land in the same place.

A fraction is in lowest terms when the only number dividing both parts is 1.`,
        complex: `Two fractions a/b and c/d are equivalent exactly when ~ad = bc~ (cross products match). The operation behind this is multiplication by 1 in disguise: ~a/b = (a/b)·(k/k) = ak/bk~ for any k ≠ 0, since k/k = 1 and multiplying by 1 preserves value.

Simplifying reverses that. Dividing numerator and denominator by ~GCF(a,b)~ produces the unique lowest-terms representative, unique because after removing the GCF the remaining parts are coprime.

This is worth over-learning because the identical move appears in algebra with variables, where ~6x²/9x = 2x/3~ for x ≠ 0. The restriction matters there in a way it does not with numbers: cancelling a variable factor silently assumes it is not zero, which is the origin of many lost solutions later.`,
        example: {
          prompt: "Simplify 42/56.",
          steps: [
            "Factor both: 42 = 2·3·7, 56 = 2³·7.",
            "Shared factors: 2 and 7, so GCF = 14.",
            "42 ÷ 14 = 3, 56 ÷ 14 = 4.",
          ],
          answer: "3/4",
        },
        mistakes: [
          "Adding the same number to top and bottom instead of multiplying. 1/2 and 2/3 are not equal.",
          "Cancelling across a plus sign: (3+4)/3 is not 4.",
        ],
        video: "equivalent fractions and simplifying fractions",
        videoAlt: ["simplifying fractions to lowest terms"],
        practice: null,
        tags: ["fractions", "simplifying", "gcf"],
      },
      {
        slug: "comparing-fractions",
        title: "Comparing & Ordering Fractions",
        summary: "Three reliable ways to tell which fraction is bigger.",
        level: "Intro",
        keyIdea: "Same denominator compares tops; otherwise cross multiply.",
        simple: `If the bottoms match, the bigger top wins: 5/8 > 3/8.

If the tops match, the *smaller* bottom wins: 3/4 > 3/7, because cutting something into 4 pieces gives bigger pieces than cutting it into 7.

Otherwise, cross multiply. To compare 3/5 and 5/8, multiply 3×8 = 24 and 5×5 = 25. The 25 came from the 5/8 side, so 5/8 is bigger. Converting both to decimals also works and is often faster on a calculator.`,
        complex: `For positive b and d, ~a/b < c/d ⟺ ad < cb~. The justification is multiplying both sides of the inequality by the positive quantity bd, which clears both denominators without flipping the inequality — and that positivity condition is exactly why the test must be stated carefully once negatives are allowed.

Two other comparisons are worth having as reflexes. Benchmarking against 1/2 or 1 sorts most pairs instantly: 7/13 > 1/2 because 7 is more than half of 13. And for fractions just below 1, the one with the larger denominator is closer to 1, since 8/9 is short by 1/9 while 5/6 is short by 1/6.`,
        example: {
          prompt: "Order 3/5, 5/8, and 7/12 from least to greatest.",
          steps: [
            "LCM of 5, 8, 12 is 120.",
            "3/5 = 72/120, 5/8 = 75/120, 7/12 = 70/120.",
            "Compare numerators: 70 < 72 < 75.",
          ],
          answer: "7/12 < 3/5 < 5/8",
        },
        mistakes: [
          "Assuming a bigger denominator means a bigger fraction.",
          "Cross multiplying with a negative fraction without accounting for the sign flip.",
        ],
        video: "comparing fractions cross multiplication",
        videoAlt: ["ordering fractions least to greatest"],
        practice: null,
        tags: ["fractions", "comparing", "inequality"],
      },
      {
        slug: "adding-subtracting-fractions",
        title: "Adding & Subtracting Fractions",
        summary: "Why you need a common denominator here but not when multiplying.",
        level: "Core",
        keyIdea: "You can only add pieces that are the same size.",
        simple: `You cannot add 1/2 and 1/3 directly for the same reason you cannot add 2 apples and 3 oranges and call it 5 apples. The pieces are different sizes.

So rename both fractions with a common denominator. For 1/2 + 1/3 use sixths: 3/6 + 2/6 = 5/6. Now the pieces match and you just count them.

The denominator does not change when you add. You are counting pieces, not resizing them. 3/6 + 2/6 = 5/6, never 5/12.`,
        complex: `The general form is:

~a/b + c/d = (ad + cb)/(bd)~

which is the common-denominator process compressed into one line. Using bd always works but is not always minimal; using ~LCM(b,d)~ keeps the numbers small and often skips a simplification step at the end.

Structurally, converting to a common denominator is applying the distributive property in reverse. Once both terms share the denominator you have ~(1/n)·a + (1/n)·c = (1/n)(a + c)~, so the addition happens purely in the numerators. That is the reason denominators do not add: they are a common factor being pulled out, not a quantity being combined.

The same procedure carries over unchanged to rational expressions in Algebra 2, where the denominators are polynomials and the LCM is found by factoring.`,
        example: {
          prompt: "Compute 5/6 − 3/8.",
          steps: [
            "LCM of 6 and 8 is 24.",
            "5/6 = 20/24 and 3/8 = 9/24.",
            "20/24 − 9/24 = 11/24.",
            "11 and 24 share no factors, so it is already reduced.",
          ],
          answer: "11/24",
        },
        mistakes: [
          "Adding denominators: 1/2 + 1/3 = 2/5 is wrong.",
          "Changing the numerator but forgetting to scale it by the same factor as the denominator.",
        ],
        video: "adding and subtracting fractions unlike denominators",
        videoAlt: ["add subtract fractions common denominator"],
        practice: { unit: "solving-equations", skill: "equations-with-fractions" },
        tags: ["fractions", "common denominator", "lcm"],
      },
      {
        slug: "multiplying-fractions",
        title: "Multiplying Fractions",
        summary: "The easiest fraction operation, and why the answer gets smaller.",
        level: "Intro",
        keyIdea: "Multiply straight across; cancel first to keep numbers small.",
        simple: `Multiplying fractions is the easy one. Tops times tops, bottoms times bottoms. 2/3 × 4/5 = 8/15. No common denominator needed.

You can cancel before multiplying to keep numbers manageable. In 3/4 × 8/9, the 3 and 9 share a 3, and the 4 and 8 share a 4. Cancel to get 1/1 × 2/3 = 2/3.

Why does multiplying make things smaller? Because "×" here means "of." 1/2 × 1/3 is half of a third, which is a sixth.`,
        complex: `The definition is ~(a/b)·(c/d) = (ac)/(bd)~, which follows from associativity and commutativity of multiplication once you write each fraction as ~a·b⁻¹~.

Cancelling early is legitimate because the product is one single fraction before it is one single computation: any factor in either numerator may be reduced against any factor in either denominator. Formally you are simplifying ~(ac)/(bd)~ before evaluating it, which is why cross-cancelling between different fractions is allowed here but not when adding.

The "gets smaller" intuition only holds for factors between 0 and 1. Multiplying by an improper fraction such as 5/3 increases the value, and multiplying by a negative fraction reverses sign. The precise statement is that multiplying by k scales by k, and scaling by a number less than 1 shrinks.`,
        example: {
          prompt: "Compute 6/7 × 14/15.",
          steps: [
            "Cancel 7 into 14: 6/1 × 2/15.",
            "Cancel 3 out of 6 and 15: 2/1 × 2/5.",
            "Multiply across: 4/5.",
          ],
          answer: "4/5",
        },
        mistakes: [
          "Looking for a common denominator. Multiplication does not need one.",
          "Cancelling a numerator against another numerator.",
        ],
        video: "multiplying fractions explained cross cancelling",
        videoAlt: ["how to multiply fractions"],
        practice: null,
        tags: ["fractions", "multiplication"],
      },
      {
        slug: "dividing-fractions",
        title: "Dividing Fractions",
        summary: "Keep, change, flip — and the reason it is not an arbitrary trick.",
        level: "Core",
        keyIdea: "Dividing by a fraction is multiplying by its reciprocal.",
        simple: `To divide by a fraction, flip the second one and multiply. 3/4 ÷ 2/5 becomes 3/4 × 5/2 = 15/8.

Why flipping works: dividing asks "how many of these fit inside that?" 1 ÷ 1/4 asks how many quarters fit in one whole. Four of them. And indeed 1 × 4/1 = 4.

Only the second fraction flips. The first one stays exactly as it is.`,
        complex: `Division is defined as multiplication by the multiplicative inverse: ~x ÷ y := x · y⁻¹~ for y ≠ 0. For a fraction, ~(c/d)⁻¹ = d/c~ because ~(c/d)·(d/c) = cd/dc = 1~. So:

~(a/b) ÷ (c/d) = (a/b)·(d/c) = ad/bc~

You can also see it from the complex fraction ~(a/b)/(c/d)~ by multiplying numerator and denominator by ~bd~, which clears both inner denominators and leaves ~ad/bc~ directly.

Note the standing restriction c ≠ 0. In algebra, dividing by a rational expression carries the same condition on every factor of the divisor, which is where domain restrictions on rational functions come from.`,
        example: {
          prompt: "Compute 5/8 ÷ 15/16.",
          steps: [
            "Flip the divisor: 5/8 × 16/15.",
            "Cancel 5 into 15 and 8 into 16: 1/1 × 2/3.",
            "Multiply: 2/3.",
          ],
          answer: "2/3",
        },
        mistakes: [
          "Flipping the first fraction instead of the second.",
          "Flipping and then still dividing.",
        ],
        video: "dividing fractions keep change flip explained",
        videoAlt: ["how to divide fractions reciprocal"],
        practice: null,
        tags: ["fractions", "division", "reciprocal"],
      },
      {
        slug: "mixed-numbers",
        title: "Mixed Numbers & Improper Fractions",
        summary: "Converting between the two forms, and which one to use when.",
        level: "Intro",
        keyIdea: "Mixed numbers read better; improper fractions calculate better.",
        simple: `2 3/4 and 11/4 are the same amount. The mixed number is easier to picture, the improper fraction is easier to compute with.

To go from mixed to improper: multiply the whole number by the denominator and add the numerator. For 2 3/4: 2 × 4 = 8, plus 3 = 11, so 11/4.

To go back: divide. 11 ÷ 4 = 2 remainder 3, so 2 3/4.

Rule of thumb: convert to improper before multiplying or dividing, always. Doing it any other way invites mistakes.`,
        complex: `A mixed number is implicit addition: ~2 3/4~ means ~2 + 3/4~. That hidden plus sign is the source of the classic error of multiplying ~2 3/4 × 2~ as ~4 3/4~ — distribution requires acting on both terms, so it is ~2·2 + 2·(3/4) = 5 1/2~.

The conversion ~a b/c = (ac + b)/c~ is just that addition performed over a common denominator.

The implicit-plus convention is also why mixed numbers vanish in algebra. In algebraic notation adjacency means multiplication, so writing ~2x~ next to a fraction would be ambiguous. From Algebra 1 onward improper fractions are standard, and answers are typically left as ~11/4~ rather than converted back.`,
        example: {
          prompt: "Compute 3 1/2 × 1 3/5.",
          steps: [
            "Convert: 3 1/2 = 7/2 and 1 3/5 = 8/5.",
            "Multiply: 7/2 × 8/5 = 56/10.",
            "Simplify: 28/5.",
            "Convert back if asked: 5 3/5.",
          ],
          answer: "28/5 or 5 3/5",
        },
        mistakes: [
          "Multiplying mixed numbers by multiplying whole parts and fraction parts separately.",
          "Adding instead of multiplying in the conversion: 2 3/4 becomes 11/4, not 9/4.",
        ],
        video: "mixed numbers and improper fractions converting",
        videoAlt: ["convert mixed number to improper fraction"],
        practice: null,
        tags: ["fractions", "mixed numbers"],
      },
      {
        slug: "fractions-decimals-percents",
        title: "Fractions, Decimals & Percents",
        summary: "One quantity, three costumes, and how to switch between them fast.",
        level: "Core",
        keyIdea: "Percent means per hundred, so 45% = 45/100 = 0.45.",
        simple: `These are three ways to write the same thing. 3/4 = 0.75 = 75%.

Fraction to decimal: divide top by bottom. 3 ÷ 4 = 0.75.
Decimal to percent: multiply by 100, or move the point two places right. 0.75 → 75%.
Percent to decimal: move the point two places left. 20% → 0.20.
Decimal to fraction: say it out loud. 0.35 is "thirty-five hundredths," so 35/100 = 7/20.

Worth memorising: 1/2 = 50%, 1/3 ≈ 33.3%, 1/4 = 25%, 1/5 = 20%, 1/8 = 12.5%.`,
        complex: `"Percent" is a unit meaning hundredths, so ~p% = p/100~ by definition. Conversions are multiplication or division by 100, which in base ten is a two-place shift of the decimal point.

Fraction-to-decimal is long division, and the result is always either terminating or eventually repeating. Which one you get is decided by the denominator's prime factorization in lowest terms: it terminates exactly when the denominator's only prime factors are 2 and 5, because those are the primes of base ten. So 7/20 terminates (20 = 2²·5) but 1/3 and 1/6 repeat.

Converting a repeating decimal back uses algebra. For ~x = 0.overline{27}~, multiply by 100 to get ~100x = 27.overline{27}~, subtract to get ~99x = 27~, so ~x = 3/11~. That subtraction trick is the standard proof that every repeating decimal is rational.`,
        example: {
          prompt: "Write 5/8 as a decimal and a percent, and 6% as a fraction.",
          steps: [
            "5 ÷ 8 = 0.625.",
            "0.625 × 100 = 62.5%.",
            "6% = 6/100 = 3/50.",
          ],
          answer: "5/8 = 0.625 = 62.5%; 6% = 3/50",
        },
        mistakes: [
          "Moving the decimal the wrong direction: 0.4 is 40%, not 0.4%.",
          "Writing 1/3 as 0.33 and treating it as exact. It repeats.",
        ],
        video: "converting fractions decimals and percents",
        videoAlt: ["fraction decimal percent conversion explained"],
        practice: null,
        tags: ["percents", "decimals", "fractions"],
      },
      {
        slug: "operations-with-decimals",
        title: "Operations with Decimals",
        summary: "Where the decimal point goes in each of the four operations.",
        level: "Intro",
        keyIdea: "Add/subtract: line up the points. Multiply: count decimal places.",
        simple: `Adding and subtracting: line up the decimal points vertically, fill in zeros so both numbers have the same length, then add as usual.

Multiplying: ignore the points entirely, multiply as whole numbers, then count how many digits came after the points in total and put that many in the answer. 0.3 × 0.02 = 6, with three decimal places, so 0.006.

Dividing: move the divisor's point to make it whole, move the dividend's point the same number of places, then divide normally. 4.5 ÷ 0.5 becomes 45 ÷ 5 = 9.`,
        complex: `Each rule is powers of ten bookkeeping. Writing ~0.3 = 3×10⁻¹~ and ~0.02 = 2×10⁻²~, the product is ~6×10⁻³~ — the exponents add, which is precisely the "count the decimal places" rule.

Alignment when adding is the same principle stated differently: you may only add coefficients that sit on the same power of ten, exactly as you may only add like terms in algebra.

Division shifts both numbers by the same power of ten, using ~a/b = (10ᵏa)/(10ᵏb)~. The quotient is unchanged because you multiplied by ~10ᵏ/10ᵏ = 1~. Note that dividing by a number less than 1 produces a larger result, which surprises students until they read it as "how many halves fit in 4.5" rather than as shrinking.`,
        example: {
          prompt: "Compute 1.2 × 0.35 and 7.2 ÷ 0.9.",
          steps: [
            "12 × 35 = 420; total decimal places 1 + 2 = 3, so 0.420 = 0.42.",
            "Shift both by one place: 72 ÷ 9.",
            "72 ÷ 9 = 8.",
          ],
          answer: "0.42 and 8",
        },
        mistakes: [
          "Right-aligning digits when adding instead of aligning the decimal points.",
          "Moving the point in the divisor but not the dividend.",
        ],
        video: "multiplying and dividing decimals explained",
        videoAlt: ["decimal operations add subtract multiply divide"],
        practice: null,
        tags: ["decimals", "arithmetic"],
      },
    ],
  },
  {
    id: "pa-ratios",
    title: "Ratios, Proportions & Percents",
    blurb:
      "The most directly useful maths in the whole sequence. Tips, discounts, unit prices, scale models, interest.",
    topics: [
      {
        slug: "ratios",
        title: "Ratios",
        summary: "Comparing two quantities, and the part-to-part vs part-to-whole trap.",
        level: "Intro",
        keyIdea: "A ratio compares amounts; it does not have to state the total.",
        simple: `A ratio compares two quantities. If a class has 12 boys and 16 girls, the ratio of boys to girls is 12:16, which simplifies to 3:4.

Order matters. 3:4 boys to girls is not the same statement as 4:3.

The trap: 3:4 is part-to-part. The total is 3 + 4 = 7 parts, so boys are 3/7 of the class, not 3/4. Any time a question mixes ratios with totals, write down the number of parts first.`,
        complex: `A ratio a:b is an equivalence class of ordered pairs under scaling — a:b and ka:kb denote the same ratio for any k ≠ 0. That is why ratios simplify exactly like fractions.

The practical technique is the unit-of-parts method. Given a:b, introduce a scale factor k so the quantities are ak and bk. The total is ~k(a+b)~, which converts any total into k in one step and then recovers both quantities. For 3:4 with a total of 28: ~7k = 28~, so k = 4, giving 12 and 16.

Ratios extend to more than two terms (a:b:c), where the same scaling logic applies, and to continued comparisons where you must first rescale so the shared term matches — combining 2:3 with 3:5 on the middle term requires converting to 2:3 and 3:5 with a common 3, giving 2:3:5.`,
        example: {
          prompt: "A recipe uses flour to sugar in the ratio 5:2. If you use 350 g of flour, how much sugar?",
          steps: [
            "5 parts flour = 350 g, so 1 part = 70 g.",
            "Sugar is 2 parts.",
            "2 × 70 = 140.",
          ],
          answer: "140 g of sugar",
        },
        mistakes: [
          "Reading 3:4 as three quarters. It is three sevenths of the whole.",
          "Reversing the order of the terms.",
        ],
        video: "introduction to ratios explained",
        videoAlt: ["what is a ratio math basics"],
        practice: null,
        tags: ["ratios", "proportional reasoning"],
      },
      {
        slug: "unit-rates",
        title: "Unit Rates",
        summary: "Making prices and speeds comparable by putting everything per one.",
        level: "Intro",
        keyIdea: "Divide to get the amount per single unit.",
        simple: `A unit rate tells you how much per one. 240 km in 3 hours is 80 km per hour. $6 for 4 apples is $1.50 per apple.

You get there by dividing by the second quantity.

This is the practical tool for shopping. A 12-pack for $5.40 is $0.45 each; an 8-pack for $3.44 is $0.43 each. The 8-pack wins, which the sticker prices alone do not tell you.`,
        complex: `A rate is a ratio between quantities with different units, and a unit rate is that ratio normalised so the denominator is 1: ~r = a/b~ expressed as ~(a/b) : 1~.

Because the units are different, rates carry their units through the arithmetic, which makes dimensional analysis available. Writing "80 km/h" as the fraction ~80 km / 1 h~ lets you cancel units when multiplying: ~(80 km/h)(2.5 h) = 200 km~, with hours cancelling.

Every unit rate has a reciprocal rate that is equally valid but answers a different question: 80 km/h inverts to 0.0125 h/km, or 45 seconds per kilometre. Choosing the right orientation is most of the skill — the denominator should be whatever you are given, so the units you want survive the cancellation.`,
        example: {
          prompt: "Which is cheaper: 500 mL for $2.40 or 750 mL for $3.45?",
          steps: [
            "2.40 ÷ 500 = $0.0048 per mL.",
            "3.45 ÷ 750 = $0.0046 per mL.",
            "Compare: 0.0046 < 0.0048.",
          ],
          answer: "The 750 mL bottle, at $0.0046/mL.",
        },
        mistakes: [
          "Dividing the wrong way round and getting units per dollar when you wanted dollars per unit.",
          "Comparing totals instead of rates when the sizes differ.",
        ],
        video: "unit rates explained math",
        videoAlt: ["how to find unit rate word problems"],
        practice: { unit: "working-with-units", skill: "unit-basics" },
        tags: ["rates", "unit rate", "comparison"],
      },
      {
        slug: "proportions",
        title: "Proportions & Cross Multiplication",
        summary: "Two equal ratios, and the fastest way to find the missing piece.",
        level: "Core",
        keyIdea: "If a/b = c/d then ad = bc.",
        simple: `A proportion says two ratios are equal: 3/4 = x/20.

To solve, cross multiply: 3 × 20 = 4 × x, so 60 = 4x, so x = 15.

This one setup handles a huge share of real problems: scaling recipes, converting currencies, map distances, unit conversions. The key is being consistent about what goes on top. If kilometres are on top on one side, kilometres go on top on the other.`,
        complex: `Cross multiplication is not a separate rule, it is multiplying both sides of ~a/b = c/d~ by ~bd~, which clears both denominators and leaves ~ad = cb~. It is valid whenever b and d are nonzero.

Setting up correctly matters more than solving. A proportion is only valid if the two ratios compare corresponding quantities in the same order, so the units in each numerator must match and the units in each denominator must match. Writing the units into the setup catches nearly every error before any arithmetic happens.

Proportions also encode direct variation: ~y/x = k~ is the same statement as ~y = kx~, a line through the origin with slope k. When a relationship is proportional, its graph must pass through (0,0) — which is a fast test for whether a proportion is the right model at all. Situations with a fixed starting fee are not proportional, even though they are linear.`,
        example: {
          prompt: "A map uses 2 cm for every 15 km. How far apart in reality are two towns 7 cm apart on the map?",
          steps: [
            "Set up with matching units: 2 cm / 15 km = 7 cm / x km.",
            "Cross multiply: 2x = 105.",
            "Divide by 2: x = 52.5.",
          ],
          answer: "52.5 km",
        },
        mistakes: [
          "Flipping one ratio so the units no longer correspond.",
          "Cross multiplying an equation that is not two single fractions set equal.",
        ],
        video: "solving proportions cross multiplication",
        videoAlt: ["proportions word problems explained"],
        practice: { unit: "working-with-units", skill: "unit-word-problems" },
        tags: ["proportions", "cross multiply", "scaling"],
      },
      {
        slug: "scale-and-similar-figures",
        title: "Scale Drawings & Similar Figures",
        summary: "Same shape, different size, and what happens to area when you scale.",
        level: "Core",
        keyIdea: "Lengths scale by k, areas by k², volumes by k³.",
        simple: `Similar figures have the same shape but different sizes. Matching angles are equal and matching sides are all multiplied by the same number, called the scale factor.

Find the scale factor by dividing a new side by the side it matches. Then every other side follows.

The surprise: doubling every length does not double the area, it quadruples it. A 2× model of a shape has 4× the area and 8× the volume. This is why a scale model of a building weighs far less than the scale would suggest.`,
        complex: `Two figures are similar when there is a one-to-one correspondence of vertices with all corresponding angles congruent and all corresponding side lengths in a constant ratio k. Triangle similarity can be established with less: AA is sufficient, as are SAS~ and SSS~.

Under a similarity with ratio k, any length (side, perimeter, altitude, radius) scales by k, any area scales by ~k²~, and any volume by ~k³~. The exponent is the dimension of the measurement, since area is a product of two lengths and volume of three.

This dimensional scaling shows up well beyond geometry class. It explains why a scale model cannot be strong in proportion to the original — cross-sectional area (strength) grows as k² while volume (weight) grows as k³ — and it is the reason surface-area-to-volume arguments appear in biology and engineering.`,
        example: {
          prompt: "Two similar rectangles have widths 6 cm and 15 cm. The smaller has area 48 cm². Find the larger area.",
          steps: [
            "Scale factor k = 15/6 = 2.5.",
            "Area scales by k² = 6.25.",
            "48 × 6.25 = 300.",
          ],
          answer: "300 cm²",
        },
        mistakes: [
          "Multiplying the area by the scale factor instead of its square.",
          "Matching sides that are not corresponding.",
        ],
        video: "similar figures and scale factor area",
        videoAlt: ["scale drawings similar figures explained"],
        practice: null,
        tags: ["similarity", "scale factor", "geometry"],
      },
      {
        slug: "percent-of-a-number",
        title: "Percent of a Number",
        summary: "Tips, discounts, and tax without reaching for a calculator every time.",
        level: "Core",
        keyIdea: "Convert the percent to a decimal, then multiply.",
        simple: `To find a percent of something, turn the percent into a decimal and multiply. 18% of 45 is 0.18 × 45 = 8.1.

Mental shortcuts that pay off constantly:
- 10% is moving the decimal one place left. 10% of 68 is 6.8.
- 5% is half of 10%.
- 1% is moving the decimal two places left.
- 20% is double 10%.

So a 15% tip on $42: 10% is $4.20, half of that is $2.10, add them for $6.30.`,
        complex: `The percent relationship has three quantities and one equation:

~part = rate × whole~

Every percent question is one of these three unknown. Finding the part is direct multiplication. Finding the rate is ~rate = part/whole~. Finding the whole — the type most often set up wrong — is ~whole = part/rate~: if 30 is 24% of a number, that number is ~30/0.24 = 125~.

Combined percents multiply rather than add, and the multiplier form makes this obvious. A 20% discount followed by 8% tax is ~0.80 × 1.08 = 0.864~ of the original, not 12% off. Multipliers also commute, which is the honest answer to whether the shop applies the discount or the tax first: it does not change the total.`,
        example: {
          prompt: "A $80 jacket is 35% off, then 6% tax is added. Find the final price.",
          steps: [
            "Discount multiplier: 1 − 0.35 = 0.65.",
            "80 × 0.65 = 52.",
            "Tax multiplier: 1.06.",
            "52 × 1.06 = 55.12.",
          ],
          answer: "$55.12",
        },
        mistakes: [
          "Adding a 20% discount and 8% tax into a single 12% change.",
          "Multiplying by 35 instead of 0.35.",
        ],
        video: "percent of a number word problems",
        videoAlt: ["finding percent of a number explained"],
        practice: null,
        tags: ["percent", "discount", "tax"],
      },
      {
        slug: "percent-change",
        title: "Percent Increase & Decrease",
        summary: "Measuring change against where it started, not where it ended.",
        level: "Core",
        keyIdea: "Percent change = (new − old) / old.",
        simple: `Percent change compares how much something moved to where it started.

Price goes from $40 to $50. The change is $10, and you divide by the original 40: 10/40 = 0.25, so a 25% increase.

The denominator is always the original value. That is the whole thing, and it is where nearly every mistake happens.

Note that increases and decreases do not undo each other. Up 50% then down 50% does not return you to the start: 100 → 150 → 75.`,
        complex: `Percent change is defined relative to the initial value:

~percent change = (new − old)/old × 100%~

The asymmetry is structural, not a quirk. Going from 40 to 50 is a 25% increase, but 50 to 40 is a 20% decrease, because the base changed. Any claim about a percent change is meaningless without knowing its base, which is what makes the statistic so easy to misuse in reporting.

In multiplier form, an increase of p% is multiplication by ~(1 + p/100)~ and a decrease by ~(1 − p/100)~. Successive changes compose by multiplication, so +50% then −50% gives ~1.5 × 0.5 = 0.75~, a net 25% loss. Reversing a p% increase requires a decrease of ~p/(100+p)~, not p.

Distinguish percent change from percentage points: a rate moving from 4% to 6% is a rise of 2 percentage points but a 50% increase.`,
        example: {
          prompt: "A population falls from 2,400 to 1,920. Find the percent decrease.",
          steps: [
            "Change: 1920 − 2400 = −480.",
            "Divide by original: −480/2400 = −0.2.",
            "Convert: −20%.",
          ],
          answer: "A 20% decrease",
        },
        mistakes: [
          "Dividing by the new value instead of the original.",
          "Assuming a 30% rise is cancelled by a 30% fall.",
        ],
        video: "percent increase and decrease explained",
        videoAlt: ["percent change formula word problems"],
        practice: null,
        tags: ["percent change", "increase", "decrease"],
      },
      {
        slug: "simple-interest",
        title: "Simple Interest",
        summary: "I = Prt, the formula behind loans, and how it differs from compounding.",
        level: "Core",
        keyIdea: "I = Prt — interest is principal × rate × time.",
        simple: `Simple interest is calculated only on the amount you started with.

I = P × r × t, where P is the starting amount, r is the yearly rate as a decimal, and t is time in years.

Borrow $2,000 at 5% for 3 years: I = 2000 × 0.05 × 3 = $300 interest, so you repay $2,300.

Watch the units. If a rate is per year, t must be in years. Six months is t = 0.5, not 6.`,
        complex: `Simple interest grows linearly. The total value is

~A = P + Prt = P(1 + rt)~

which is a linear function of t with slope Pr. Graphed against time it is a straight line.

Compound interest instead applies the rate to the accumulated balance, giving ~A = P(1 + r/n)^{nt}~ for n compounding periods per year — an exponential function, and the subject of a full topic in Algebra 2. Over one year at one compounding period the two agree exactly; beyond that, compounding always yields more, and the gap widens with time.

Because ~A = P(1 + rt)~ is linear, any one of the four variables can be isolated by ordinary algebra, which makes simple interest a standard example when literal equations are introduced.`,
        example: {
          prompt: "Find the interest on $4,500 at 3.5% simple interest for 8 months.",
          steps: [
            "Convert time to years: 8/12 = 2/3.",
            "I = 4500 × 0.035 × (2/3).",
            "4500 × 0.035 = 157.50.",
            "157.50 × 2/3 = 105.",
          ],
          answer: "$105",
        },
        mistakes: [
          "Leaving the rate as a whole number: using 3.5 instead of 0.035.",
          "Using months for t when the rate is annual.",
        ],
        video: "simple interest formula word problems",
        videoAlt: ["simple interest I=prt explained"],
        practice: null,
        tags: ["interest", "formula", "finance"],
      },
    ],
  },
  {
    id: "pa-expressions",
    title: "Expressions & Equations",
    blurb:
      "Where letters enter. This unit is the actual bridge from arithmetic into algebra.",
    topics: [
      {
        slug: "variables-and-expressions",
        title: "Variables & Expressions",
        summary: "What a letter is doing in a maths problem, and how to read one.",
        level: "Intro",
        keyIdea: "A variable is a placeholder for a number you do not know yet.",
        simple: `A variable is a letter standing in for a number. In 3n + 5, the n could be any number, and the expression tells you what to do once you know it.

Reading the notation matters. 3n means 3 times n — multiplication is implied by writing them together. n/4 means n divided by 4. n² means n times itself.

An expression has no equals sign. It is a recipe, not a question. 3n + 5 is an expression; 3n + 5 = 20 is an equation, and only equations get solved.`,
        complex: `An algebraic expression is a finite combination of constants, variables and operations. Its structure is a tree: in ~3n + 5~ the root is addition, with ~3n~ and ~5~ as its two operands, and ~3n~ itself is a product. Reading that structure correctly is what determines which operations you are allowed to move.

Vocabulary that later instructions depend on: terms are the pieces separated by + or −; the coefficient is the numeric factor of a term; a constant is a term with no variable. In ~7x² − 4x + 9~ there are three terms, coefficients 7 and −4, and constant 9. The sign belongs to the term that follows it, which is why −4x is the term rather than 4x.

Juxtaposition denoting multiplication is a convention adopted because multiplication is the most common operation in algebraic work; it is also why the × symbol is abandoned, since it collides visually with the variable x.`,
        example: {
          prompt: "Write an expression for: five less than twice a number, then name its terms.",
          steps: [
            "Twice a number: 2n.",
            "Five less than that: subtract 5 from it, so 2n − 5.",
            "Terms: 2n and −5.",
          ],
          answer: "2n − 5, with coefficient 2 and constant −5",
        },
        mistakes: [
          "Writing 'five less than 2n' as 5 − 2n. 'Less than' reverses the order.",
          "Reading 3n as 'three and n' rather than 3 times n.",
        ],
        video: "variables and algebraic expressions introduction",
        videoAlt: ["what is a variable in algebra"],
        practice: null,
        tags: ["variables", "expressions", "vocabulary"],
      },
      {
        slug: "evaluating-expressions",
        title: "Evaluating Expressions",
        summary: "Substituting a value for a variable without losing signs along the way.",
        level: "Intro",
        keyIdea: "Substitute in parentheses, then follow order of operations.",
        simple: `To evaluate an expression, replace each variable with its value and compute.

The single habit that prevents most errors: put the substituted value in parentheses. For 3x² with x = −2, write 3(−2)². Without the parentheses you are likely to write 3 × −2² and get −12 instead of 12.

After substituting, it is just order of operations. Parentheses, exponents, multiply and divide, add and subtract.`,
        complex: `Evaluation is applying the expression as a function to a specific input. The substitution must respect the expression tree, and parentheses are how you preserve that tree when the substituted value is not a bare positive number.

The exponent case is the one that matters: in ~3x²~ the square applies to x alone, so at x = −2 the value is ~3·(−2)² = 3·4 = 12~. Dropping the parentheses changes the tree to ~−(3·2²)~ and the answer to −12. Similar care is needed with substituted fractions and with expressions substituted into other expressions, which becomes function composition later.

For multivariable expressions, substitute every occurrence of each variable simultaneously; substituting one variable's value into an expression that still contains it elsewhere is a common source of silent errors.`,
        example: {
          prompt: "Evaluate 2x² − 3y when x = −3 and y = 4.",
          steps: [
            "Substitute with parentheses: 2(−3)² − 3(4).",
            "Exponent first: (−3)² = 9, giving 2(9) − 3(4).",
            "Multiply: 18 − 12.",
          ],
          answer: "6",
        },
        mistakes: [
          "Squaring after multiplying: computing 2(−3)² as (−6)² = 36.",
          "Losing a negative because the value was substituted without parentheses.",
        ],
        video: "evaluating algebraic expressions substitution",
        videoAlt: ["evaluate expressions with negative numbers"],
        practice: null,
        tags: ["evaluating", "substitution"],
      },
      {
        slug: "combining-like-terms",
        title: "Combining Like Terms",
        summary: "Which terms can be added together, and which only look like they can.",
        level: "Core",
        keyIdea: "Like terms have identical variable parts, exponents included.",
        simple: `Like terms have exactly the same variable part. 5x and 3x are like terms, so 5x + 3x = 8x. You are counting x's.

These are not like terms: 5x and 5x² (different exponents), or 5x and 5y (different letters). They stay separate.

When you combine, only the coefficients change. 5x + 3x is 8x, never 8x².

Keep each term's sign attached as you rearrange. In 7x − 4y − 2x, the terms are 7x, −4y and −2x, giving 5x − 4y.`,
        complex: `Combining like terms is the distributive property applied in reverse:

~5x + 3x = (5 + 3)x = 8x~

The variable part must match exactly — same variables raised to the same powers — because that shared factor is what gets pulled out. ~x~ and ~x²~ share no common variable factor that leaves numbers behind, so no such factoring exists.

This is the same principle as adding fractions with a common denominator and as adding decimals aligned by place value: you may only add coefficients attached to identical units. Algebra simply lets the unit be x² or xy rather than "hundredths."

Note that terms may be reordered freely because addition is commutative and associative — but subtraction is neither, which is why converting every subtraction to "plus a negative" before rearranging is the safer habit.`,
        example: {
          prompt: "Simplify 4x² + 7x − 3 − x² + 2x + 9.",
          steps: [
            "Group x² terms: 4x² − x² = 3x².",
            "Group x terms: 7x + 2x = 9x.",
            "Group constants: −3 + 9 = 6.",
          ],
          answer: "3x² + 9x + 6",
        },
        mistakes: [
          "Combining x and x² because they use the same letter.",
          "Dropping the minus sign in front of a term when reordering.",
        ],
        video: "combining like terms explained algebra",
        videoAlt: ["simplifying expressions combining like terms"],
        practice: null,
        tags: ["like terms", "simplifying"],
      },
      {
        slug: "distributive-property",
        title: "The Distributive Property",
        summary: "Multiplying across a sum, and the sign mistake that costs the most marks.",
        level: "Core",
        keyIdea: "a(b + c) = ab + ac — the outside factor hits every term.",
        simple: `The distributive property says a number outside parentheses multiplies everything inside. 3(x + 4) = 3x + 12.

Every term inside gets multiplied, not just the first one.

The dangerous case is a negative outside. −2(x − 5) means −2 times x and −2 times −5, giving −2x + 10. The last sign flips because negative times negative is positive.

A bare minus sign in front of parentheses is a −1: −(x − 7) = −x + 7. Every sign inside flips.`,
        complex: `Distributivity of multiplication over addition, ~a(b + c) = ab + ac~, is one of the field axioms — it is not derived from anything simpler, and nearly every algebraic manipulation depends on it.

It runs in both directions. Read left to right it expands; read right to left it factors, which is the entire basis of factoring later. Combining like terms, factoring out a GCF, multiplying binomials with FOIL, and polynomial multiplication in general are all this one axiom applied repeatedly.

For subtraction, use ~a(b − c) = ab − ac~, which follows by writing ~b − c = b + (−c)~. The frequent error is treating the leading minus as a decoration rather than a factor of −1; writing ~−(3x − 5)~ explicitly as ~(−1)(3x − 5)~ makes the sign changes mechanical rather than remembered.`,
        example: {
          prompt: "Expand and simplify 5(2x − 3) − 4(x + 2).",
          steps: [
            "First: 5(2x) + 5(−3) = 10x − 15.",
            "Second: −4(x) + (−4)(2) = −4x − 8.",
            "Combine: 10x − 4x = 6x, and −15 − 8 = −23.",
          ],
          answer: "6x − 23",
        },
        mistakes: [
          "Distributing to the first term only: 3(x + 4) = 3x + 4.",
          "Forgetting that −4(x + 2) makes both terms negative.",
        ],
        video: "distributive property with negative numbers",
        videoAlt: ["distributive property algebra explained"],
        practice: null,
        tags: ["distributive", "expanding", "signs"],
      },
      {
        slug: "one-step-equations",
        title: "One-Step Equations",
        summary: "Undoing a single operation, and why you must do it to both sides.",
        level: "Core",
        keyIdea: "Do the inverse operation to both sides to isolate the variable.",
        simple: `An equation is a balance. Whatever you do to one side, you must do to the other, or it stops being balanced.

To get x alone, undo whatever is being done to it using the opposite operation. Addition undoes subtraction. Multiplication undoes division.

x + 7 = 12 → subtract 7 from both sides → x = 5.
4x = 20 → divide both sides by 4 → x = 5.
x/3 = 6 → multiply both sides by 3 → x = 18.

Always check by substituting your answer back in. It takes five seconds and catches nearly everything.`,
        complex: `Solving relies on the properties of equality: for any c, if ~a = b~ then ~a + c = b + c~ and ~ac = bc~ (with c ≠ 0 for division). These guarantee the solution set is unchanged, which is what "equivalent equations" means.

The operations used to isolate a variable are inverses in the group-theoretic sense: adding c is undone by adding −c, multiplying by c is undone by multiplying by ~c⁻¹~. That is why "do the opposite" is a reliable instruction rather than a heuristic.

The c ≠ 0 restriction on multiplication is not pedantry. Multiplying both sides by zero turns any equation into ~0 = 0~, destroying information, and dividing both sides by an expression that might be zero can delete valid solutions — an error that appears in earnest when solving rational and quadratic equations.`,
        example: {
          prompt: "Solve −6x = 42.",
          steps: [
            "x is multiplied by −6, so divide both sides by −6.",
            "x = 42 ÷ (−6).",
            "Check: −6(−7) = 42. ✓",
          ],
          answer: "x = −7",
        },
        mistakes: [
          "Operating on one side only.",
          "Using the same operation instead of the inverse: adding 4 to both sides of 4x = 20.",
        ],
        video: "one step equations solving explained",
        videoAlt: ["solving one step equations algebra"],
        practice: { unit: "solving-equations", skill: "one-step-equations" },
        tags: ["equations", "solving", "inverse operations"],
      },
      {
        slug: "two-step-equations",
        title: "Two-Step Equations",
        summary: "Unwrapping in reverse order — why the constant comes off first.",
        level: "Core",
        keyIdea: "Undo addition/subtraction first, then multiplication/division.",
        simple: `For 3x + 5 = 20, work backwards through the order of operations.

Building the expression, you would multiply by 3 first and then add 5. Undoing it, you reverse that: subtract 5 first, then divide by 3.

3x + 5 = 20
3x = 15   (subtracted 5)
x = 5     (divided by 3)

Think of it as unwrapping a parcel: the last layer on is the first layer off.`,
        complex: `Isolating a variable means inverting a composition of functions, and inverses compose in reverse order: if ~f(x) = 3x + 5~ is "multiply by 3, then add 5", then ~f⁻¹(y) = (y − 5)/3~ is "subtract 5, then divide by 3."

That reversal is the reason additive terms come off before multiplicative ones in a standard two-step equation — it is the order of operations run backwards, not an arbitrary rule.

An alternative valid route is to divide everything by 3 first, giving ~x + 5/3 = 20/3~. It reaches the same answer but introduces fractions immediately, which is why the standard order is preferred in practice. When the equation is ~3(x + 5) = 20~ the situation inverts: there, dividing by 3 first is the cleaner move, because the parentheses change which operation was applied last.`,
        example: {
          prompt: "Solve (x/4) − 7 = −2.",
          steps: [
            "Add 7 to both sides: x/4 = 5.",
            "Multiply both sides by 4: x = 20.",
            "Check: 20/4 − 7 = 5 − 7 = −2. ✓",
          ],
          answer: "x = 20",
        },
        mistakes: [
          "Dividing before removing the constant, when the constant is outside the parentheses.",
          "Applying the second step to only part of the other side.",
        ],
        video: "two step equations solving explained",
        videoAlt: ["how to solve two step equations"],
        practice: { unit: "solving-equations", skill: "two-step-equations" },
        tags: ["equations", "two step", "solving"],
      },
      {
        slug: "writing-equations-from-words",
        title: "Writing Equations from Words",
        summary: "Turning a sentence into algebra — the step most word problems actually fail at.",
        level: "Core",
        keyIdea: "Name the unknown first, in writing, before anything else.",
        simple: `Most word problems are lost in translation, not in the algebra.

A method that works:
1. Write "let x = …" and say exactly what x is, with units.
2. Find the total or the equality — the word "is" usually marks the equals sign.
3. Build each side from the sentence.
4. Solve, then answer in a sentence.

Phrases worth knowing: "more than" and "increased by" mean add. "Less than" means subtract *and reverses the order* — 7 less than n is n − 7. "Of" usually means multiply. "Per" means divide.`,
        complex: `The modelling step is choosing a variable and expressing every other quantity in terms of it. When two quantities are related, define one and derive the other rather than introducing a second variable — if two numbers sum to 30 and you let one be x, the other is ~30 − x~, which keeps the model in one unknown.

Consistency of units is a genuine constraint, not a formality. An equation that adds dollars to hours is malformed regardless of how the arithmetic works out, and checking that every term of an equation carries the same units catches most setup errors before solving.

Finally, the solution of the equation and the answer to the question are often different. If x is the number of adult tickets and the question asks for revenue, one more step remains. Rereading the question after solving is a genuine part of the procedure.`,
        example: {
          prompt: "A taxi charges $3.50 plus $1.20 per mile. A ride cost $15.50. How many miles?",
          steps: [
            "Let m = number of miles.",
            "Cost = 3.50 + 1.20m, and that equals 15.50.",
            "Subtract 3.50: 1.20m = 12.",
            "Divide by 1.20: m = 10.",
          ],
          answer: "10 miles",
        },
        mistakes: [
          "Translating 'five less than x' as 5 − x.",
          "Solving for x and reporting it when the question asked for something else.",
        ],
        video: "writing equations from word problems algebra",
        videoAlt: ["translating words into algebraic equations"],
        practice: { unit: "working-with-units", skill: "unit-word-problems" },
        tags: ["word problems", "modelling", "translation"],
      },
      {
        slug: "one-step-inequalities",
        title: "Introduction to Inequalities",
        summary: "Solving like an equation, with one rule that has no equation equivalent.",
        level: "Core",
        keyIdea: "Multiplying or dividing by a negative flips the inequality sign.",
        simple: `Inequalities use <, >, ≤ or ≥ instead of =. They describe a range of answers rather than one.

You solve them almost exactly like equations. x + 4 < 9 becomes x < 5.

The one difference: multiplying or dividing both sides by a negative flips the sign. −2x < 6 becomes x > −3, not x < −3.

Sanity check with numbers. 3 < 5 is true. Multiply both sides by −1: −3 and −5. Since −3 is bigger, the sign must flip.

Graphing: open circle for < or >, filled circle for ≤ or ≥, then shade the direction that works.`,
        complex: `The order axioms for ℝ state that ~a < b~ implies ~a + c < b + c~ for all c, and ~ac < bc~ only when c > 0. For c < 0 the inequality reverses. Addition never flips; multiplication flips exactly when the multiplier is negative.

Geometrically, multiplying by a negative reflects the number line through 0, and a reflection reverses order. Nothing analogous exists for equations because equality is symmetric and has no order to preserve.

Two consequences matter later. First, you may not multiply both sides by a variable expression unless you know its sign, which is why rational inequalities are solved with sign charts rather than by clearing denominators. Second, solution sets are intervals, so the natural way to write an answer is interval notation: ~x > −3~ is ~(−3, ∞)~, with a parenthesis for strict inequality and a bracket for ≤ or ≥.`,
        example: {
          prompt: "Solve and graph −5x + 3 ≥ 18.",
          steps: [
            "Subtract 3: −5x ≥ 15.",
            "Divide by −5 and flip: x ≤ −3.",
            "Graph: filled circle at −3, shade left.",
          ],
          answer: "x ≤ −3, or (−∞, −3]",
        },
        mistakes: [
          "Flipping the sign when only adding or subtracting a negative.",
          "Forgetting to flip after dividing by a negative coefficient.",
        ],
        video: "solving inequalities flip the sign explained",
        videoAlt: ["one step inequalities graphing number line"],
        practice: { unit: "solving-equations", skill: "linear-inequalities" },
        tags: ["inequalities", "solving", "number line"],
      },
    ],
  },
  {
    id: "pa-coordinate",
    title: "The Coordinate Plane",
    blurb:
      "Where numbers become pictures. Everything in Algebra 1 graphing starts here.",
    topics: [
      {
        slug: "coordinate-plane-basics",
        title: "The Coordinate Plane",
        summary: "Axes, quadrants, and reading an ordered pair the right way round.",
        level: "Intro",
        keyIdea: "(x, y) means across first, then up or down.",
        simple: `The coordinate plane is two number lines crossed at zero. The horizontal one is the x-axis, the vertical one is the y-axis, and where they meet is the origin, (0, 0).

A point is named by an ordered pair (x, y). The order is fixed: x tells you how far across, y tells you how far up or down. (3, 5) and (5, 3) are different points.

The four regions are the quadrants, numbered anticlockwise from the top right. Quadrant I is (+, +), II is (−, +), III is (−, −), IV is (+, −).

Points on an axis belong to no quadrant. (0, 4) sits on the y-axis.`,
        complex: `The Cartesian plane establishes a bijection between ordered pairs of reals and points in the plane, which is what allows geometric objects to be described by equations and equations to be drawn.

Coordinates are signed displacements from the origin along two perpendicular axes. Because the pair is ordered, ~(a, b)~ and ~(b, a)~ denote different points unless a = b; the diagonal line ~y = x~ is exactly the set where swapping changes nothing, which is why reflecting across it is the geometric picture of finding an inverse function later.

Two formulas come straight from this setup and are used constantly. The distance between points is the Pythagorean theorem applied to the horizontal and vertical gaps, ~d = √((x₂−x₁)² + (y₂−y₁)²)~, and the midpoint is the componentwise average, ~((x₁+x₂)/2, (y₁+y₂)/2)~.`,
        example: {
          prompt: "Name the quadrant of (−4, −2), and find the distance from (1, 2) to (4, 6).",
          steps: [
            "Both coordinates negative, so Quadrant III.",
            "Horizontal gap: 4 − 1 = 3. Vertical gap: 6 − 2 = 4.",
            "d = √(3² + 4²) = √25.",
          ],
          answer: "Quadrant III; distance = 5",
        },
        mistakes: [
          "Plotting (3, 5) by going up 3 and across 5.",
          "Numbering quadrants clockwise.",
        ],
        video: "coordinate plane quadrants plotting points",
        videoAlt: ["introduction to the coordinate plane"],
        practice: { unit: "linear-equations-graphs", skill: "coordinate-plane" },
        tags: ["graphing", "coordinates", "quadrants"],
      },
      {
        slug: "graphing-from-a-table",
        title: "Graphing from a Table",
        summary: "Turning a rule into points, and points into a line.",
        level: "Intro",
        keyIdea: "Pick x values, compute y, plot the pairs.",
        simple: `Given a rule like y = 2x + 1, you can build a table by choosing x values and working out y.

x = 0 gives y = 1. x = 1 gives y = 3. x = 2 gives y = 5.

Plot (0,1), (1,3), (2,5) and you will see they line up. Draw the line through them and you have graphed the equation.

Choose easy x values, and include a negative one and zero. Three points is enough for a line, but a fourth is a free error check: if one point is off the line, you made an arithmetic slip.`,
        complex: `A table of values samples the solution set of an equation in two variables. Each row is an ordered pair satisfying the equation, and the graph is the set of *all* such pairs — the drawn line is the completed picture of an infinite set, not just the points you computed.

The pattern in the table encodes the structure of the rule. For ~y = mx + b~, equally spaced x values produce y values with a constant first difference equal to m times the spacing, which is what makes the graph straight. Constant second differences instead indicate a quadratic, and a constant ratio between successive y values indicates an exponential. Reading which of these a table shows is a standard question and a quick diagnostic.

Whether to connect the points depends on the domain: continuous quantities get a solid line, whereas a rule counting discrete objects should stay as separate points.`,
        example: {
          prompt: "Make a table for y = −3x + 4 using x = −1, 0, 1, 2 and describe the pattern.",
          steps: [
            "x = −1: y = −3(−1) + 4 = 7.",
            "x = 0: y = 4. x = 1: y = 1. x = 2: y = −2.",
            "y values fall by 3 each time x rises by 1.",
          ],
          answer: "(−1,7), (0,4), (1,1), (2,−2) — a constant difference of −3, so the graph is a line falling to the right.",
        },
        mistakes: [
          "Substituting into the wrong variable and computing x from y.",
          "Sign slips with negative x values in a term like −3x.",
        ],
        video: "graphing linear equations using a table of values",
        videoAlt: ["graph equation from table of values"],
        practice: { unit: "linear-equations-graphs", skill: "graphing-lines" },
        tags: ["graphing", "tables", "linear"],
      },
      {
        slug: "intro-to-slope-rate-of-change",
        title: "Slope as Rate of Change",
        summary: "Steepness as a number, and what it means outside of maths class.",
        level: "Core",
        keyIdea: "Slope = rise over run = change in y over change in x.",
        simple: `Slope measures steepness: how much the line rises for each step to the right.

Count the rise (vertical change) and the run (horizontal change) between two points on the line, then divide. Up 3 and right 4 gives a slope of 3/4.

Direction shows up in the sign. Uphill left-to-right is positive, downhill is negative. A flat line has slope 0. A vertical line has no slope at all, because the run is zero and you cannot divide by zero.

In real terms, slope is a rate: dollars per hour, miles per gallon, degrees per minute.`,
        complex: `For two distinct points on a line, slope is the ratio of differences:

~m = (y₂ − y₁)/(x₂ − x₁) = Δy/Δx~

That this ratio is the same for every pair of points on a given line is the defining property of a line, provable from similar triangles: any two "rise over run" triangles drawn on the same line are similar, so their leg ratios agree.

Slope carries units, and those units are the units of y divided by the units of x. On a distance-time graph slope is speed; on a cost-quantity graph it is price per item. Reading the units is usually the fastest way to interpret a slope in an applied problem.

A vertical line has ~Δx = 0~, making the ratio undefined — distinct from a horizontal line's slope of 0. "No slope" and "zero slope" describe opposite situations and should not be used interchangeably.`,
        example: {
          prompt: "Find the slope through (−2, 5) and (4, −7), and state its meaning if x is hours and y is litres.",
          steps: [
            "Δy = −7 − 5 = −12.",
            "Δx = 4 − (−2) = 6.",
            "m = −12/6 = −2.",
          ],
          answer: "m = −2, meaning the volume falls by 2 litres every hour.",
        },
        mistakes: [
          "Computing run over rise.",
          "Subtracting the coordinates in a different order on the top and bottom.",
        ],
        video: "slope rate of change explained rise over run",
        videoAlt: ["finding slope from two points"],
        practice: { unit: "linear-equations-graphs", skill: "slope" },
        tags: ["slope", "rate of change", "graphing"],
      },
      {
        slug: "direct-variation-intro",
        title: "Direct Variation",
        summary: "The special linear relationship that always passes through the origin.",
        level: "Core",
        keyIdea: "y = kx — double x and y doubles too.",
        simple: `Two quantities vary directly when one is always the same multiple of the other: y = kx. The number k is the constant of variation.

If 4 tickets cost $30, then k = 30/4 = 7.5 dollars per ticket, and y = 7.5x for any number of tickets.

The test is whether y/x stays constant. If it does, it is direct variation.

The graph is a straight line through the origin, and that matters: zero tickets must cost zero dollars. A situation with a booking fee is still linear, but it is not direct variation.`,
        complex: `Direct variation is the special case of a linear function with zero intercept: ~y = kx~, equivalently ~y/x = k~ for all x ≠ 0. It is exactly the proportional relationships from the ratio unit, expressed as functions.

The distinguishing feature is not linearity but the origin. ~y = 3x + 5~ is linear yet not proportional, since doubling x does not double y — that scaling property, ~f(cx) = c·f(x)~, holds only when b = 0.

The companion relationship is inverse variation, ~y = k/x~ or ~xy = k~, where the product rather than the quotient stays constant. Its graph is a hyperbola with the axes as asymptotes rather than a line. Distinguishing these two by asking whether the quotient or the product is fixed handles most variation problems, and both generalise to joint variation with several variables.`,
        example: {
          prompt: "y varies directly with x, and y = 18 when x = 4. Find y when x = 10.",
          steps: [
            "Find k: k = y/x = 18/4 = 4.5.",
            "Model: y = 4.5x.",
            "Substitute: y = 4.5(10).",
          ],
          answer: "y = 45",
        },
        mistakes: [
          "Calling any straight-line relationship direct variation, even with a nonzero intercept.",
          "Computing k as x/y instead of y/x.",
        ],
        video: "direct variation constant of variation explained",
        videoAlt: ["direct variation y=kx word problems"],
        practice: null,
        tags: ["direct variation", "proportional", "linear"],
      },
    ],
  },
  {
    id: "pa-geometry",
    title: "Geometry Essentials",
    blurb:
      "The geometry that keeps appearing inside algebra problems: angles, area, and the Pythagorean theorem.",
    topics: [
      {
        slug: "angles-and-lines",
        title: "Angles & Parallel Lines",
        summary: "Angle pairs that are equal, angle pairs that add to 180, and how to tell.",
        level: "Intro",
        keyIdea: "Vertical angles are equal; angles on a straight line sum to 180°.",
        simple: `Angles are measured in degrees. A right angle is 90°, a straight line is 180°, a full turn is 360°.

Two useful pairs. Complementary angles add to 90°. Supplementary angles add to 180°.

When two lines cross, the angles opposite each other are equal — these are vertical angles. The angles next to each other sit on a straight line, so they add to 180°.

When a line cuts across two parallel lines, angles in matching positions are equal (corresponding angles), and so are the ones in a Z shape (alternate angles). Angles in a C or U shape add to 180°.`,
        complex: `The parallel postulate underwrites all of this. Given parallel lines cut by a transversal, corresponding angles are congruent; from that single fact, alternate interior angles are congruent (via vertical angles) and co-interior angles are supplementary (via the linear pair).

The relationships run both ways, which is what makes them useful for proof. If corresponding angles are congruent then the lines *are* parallel — that converse is how parallelism gets established rather than assumed.

In algebra this becomes a source of equations. Angle relationships are stated in terms of expressions such as ~(3x + 10)°~ and ~(5x − 20)°~, and the geometric fact supplies the equation to solve. Vertical angles give ~3x + 10 = 5x − 20~; a linear pair gives ~(3x + 10) + (5x − 20) = 180~. Choosing the correct relationship is the whole problem, since the algebra afterwards is routine.`,
        example: {
          prompt: "Two angles form a linear pair. One is (3x + 10)°, the other (5x − 6)°. Find x.",
          steps: [
            "A linear pair sums to 180°.",
            "(3x + 10) + (5x − 6) = 180.",
            "8x + 4 = 180, so 8x = 176.",
          ],
          answer: "x = 22, giving angles of 76° and 104°.",
        },
        mistakes: [
          "Setting angle expressions equal when they are supplementary rather than congruent.",
          "Mixing up complementary (90°) and supplementary (180°).",
        ],
        video: "angles parallel lines transversal explained",
        videoAlt: ["complementary supplementary vertical angles"],
        practice: null,
        tags: ["angles", "parallel lines", "geometry"],
      },
      {
        slug: "triangles-and-angle-sums",
        title: "Triangles & Angle Sums",
        summary: "Why every triangle's angles add to 180°, and the polygon version of the rule.",
        level: "Intro",
        keyIdea: "Triangle angles sum to 180°; an n-gon sums to (n−2)·180°.",
        simple: `The three angles of any triangle add to 180°. Any triangle at all — big, small, stretched.

That means knowing two angles always gives you the third by subtraction.

Triangles are named by sides (equilateral: all three equal; isosceles: two equal; scalene: none equal) or by angles (acute, right, obtuse). In an isosceles triangle the angles opposite the equal sides are also equal, which is often the missing step in a problem.

For bigger shapes: split the polygon into triangles. A quadrilateral splits into 2, so 360°. A pentagon splits into 3, so 540°.`,
        complex: `The 180° sum follows from the parallel postulate. Draw a line through one vertex parallel to the opposite side; the two alternate interior angle pairs relocate the other two angles onto a straight line at that vertex, and a straight line is 180°.

For a convex n-gon, drawing all diagonals from a single vertex produces ~n − 2~ triangles, giving an interior angle sum of ~(n − 2)·180°~. The exterior angles behave more simply: they sum to 360° for any convex polygon regardless of n, since walking the perimeter once turns you through one full revolution.

The exterior angle theorem for triangles is worth knowing separately: an exterior angle equals the sum of the two non-adjacent interior angles, a direct consequence of both the linear pair and the 180° sum.`,
        example: {
          prompt: "A triangle has angles x, 2x and (x + 20). Find all three.",
          steps: [
            "Sum to 180: x + 2x + (x + 20) = 180.",
            "4x + 20 = 180, so 4x = 160.",
            "x = 40, then 2x = 80 and x + 20 = 60.",
          ],
          answer: "40°, 80°, 60°",
        },
        mistakes: [
          "Using 360° for a triangle.",
          "Forgetting that an isosceles triangle supplies a second equal angle for free.",
        ],
        video: "triangle angle sum theorem explained",
        videoAlt: ["polygon interior angle sum formula"],
        practice: null,
        tags: ["triangles", "angles", "polygons"],
      },
      {
        slug: "area-and-perimeter",
        title: "Area & Perimeter",
        summary: "Distance around versus space inside, and why the units differ.",
        level: "Intro",
        keyIdea: "Perimeter adds lengths (units); area multiplies them (units²).",
        simple: `Perimeter is the distance all the way around — add up the sides. Area is the space inside — measured in squares.

Formulas worth knowing cold:
- Rectangle: A = length × width
- Triangle: A = ½ × base × height
- Parallelogram: A = base × height
- Trapezoid: A = ½(b₁ + b₂) × height

The height is always perpendicular to the base, not the slanted side. That is the most common error in triangle and parallelogram problems.

Units give it away: perimeter in cm, area in cm².`,
        complex: `Area is additive over non-overlapping regions, and every polygon formula follows from the rectangle by decomposition. A parallelogram cut along an altitude and reassembled becomes a rectangle, giving ~A = bh~. A triangle is half a parallelogram, giving ~A = ½bh~. A trapezoid is two triangles, or equivalently the average of the parallel sides times the height, ~A = ½(b₁ + b₂)h~.

The perpendicularity requirement on h is essential: the slant side overstates the vertical extent, so using it inflates the area. When only a slant length and an angle are known, the height must be recovered with trigonometry.

Dimensionally, perimeter is a length (degree 1) and area a product of two lengths (degree 2). This is why scaling every length by k multiplies perimeter by k but area by ~k²~ — the same scaling result met with similar figures, and the reason area and perimeter do not determine each other. Many different rectangles share a perimeter of 20 while their areas range from near 0 up to 25.`,
        example: {
          prompt: "A triangle has base 12 cm, slant side 10 cm, and perpendicular height 8 cm. Find the area.",
          steps: [
            "Use the perpendicular height, not the slant side.",
            "A = ½ × 12 × 8.",
            "A = 48.",
          ],
          answer: "48 cm²",
        },
        mistakes: [
          "Using the slant side as the height.",
          "Reporting area in cm instead of cm².",
        ],
        video: "area and perimeter formulas explained",
        videoAlt: ["area of triangle parallelogram trapezoid"],
        practice: null,
        tags: ["area", "perimeter", "geometry"],
      },
      {
        slug: "circles-circumference-area",
        title: "Circles: Circumference & Area",
        summary: "Two formulas that look alike and get swapped constantly.",
        level: "Core",
        keyIdea: "C = 2πr is a distance; A = πr² is a space.",
        simple: `The radius r goes from the centre to the edge. The diameter d goes all the way across, so d = 2r.

Circumference (the distance around) is C = 2πr, or πd.
Area (the space inside) is A = πr².

π ≈ 3.14159, and it is the same for every circle: the circumference divided by the diameter always gives π.

Which formula is which? The squared one gives area, because area always involves two dimensions multiplied. If your answer has r², it is an area.`,
        complex: `π is defined as the ratio ~C/d~, constant for all circles by similarity — all circles are similar figures, so corresponding measurements share a fixed ratio. From that definition ~C = πd = 2πr~ follows immediately.

The area formula can be seen by cutting a circle into many thin sectors and interleaving them into an approximate rectangle of height r and width ~½C = πr~, giving ~A = πr²~ in the limit. That construction is also the intuition behind the derivative relationship ~dA/dr = 2πr = C~, which is why the circumference is exactly the rate at which area grows as the radius increases.

Arc length and sector area are proportional slices of the whole: an angle of θ degrees gives arc ~(θ/360)·2πr~ and sector area ~(θ/360)·πr²~. Answers are usually left in terms of π unless a decimal is requested, since ~12π~ is exact where 37.699 is not.`,
        example: {
          prompt: "A circle has diameter 10 m. Find its exact circumference and area.",
          steps: [
            "r = d/2 = 5.",
            "C = 2π(5) = 10π.",
            "A = π(5)² = 25π.",
          ],
          answer: "C = 10π m ≈ 31.4 m; A = 25π m² ≈ 78.5 m²",
        },
        mistakes: [
          "Substituting the diameter into A = πr².",
          "Computing πr² as (πr)².",
        ],
        video: "circumference and area of a circle explained",
        videoAlt: ["circle area circumference formulas pi"],
        practice: null,
        tags: ["circles", "pi", "area"],
      },
      {
        slug: "volume-and-surface-area",
        title: "Volume & Surface Area",
        summary: "Filling a solid versus wrapping it, and the formulas for each.",
        level: "Core",
        keyIdea: "Prisms and cylinders: V = (base area) × height.",
        simple: `Volume is how much fits inside, measured in cubic units. Surface area is how much wrapping paper you would need, measured in square units.

For anything with the same cross-section all the way up — a box, a cylinder, any prism — volume is just the base area times the height.
- Box: V = lwh
- Cylinder: V = πr²h

Anything that comes to a point holds exactly one third as much:
- Cone: V = ⅓πr²h
- Pyramid: V = ⅓(base area)(height)
- Sphere: V = 4/3 πr³

Surface area means adding up the faces, so a closed cylinder is two circles plus the rectangle that wraps around: 2πr² + 2πrh.`,
        complex: `For any solid with congruent parallel cross-sections, volume is ~V = A_base · h~. Cavalieri's principle extends this: two solids of equal height whose cross-sections have equal areas at every level have equal volume, which is why an oblique prism has the same volume as a right prism with the same base and height.

The one-third factor for cones and pyramids is not a coincidence of shape but the integral of a quadratically shrinking cross-section, ~∫₀ʰ A(x/h)² dx = Ah/3~. Similarly the sphere's ~4/3 πr³~ and its surface area ~4πr²~ satisfy ~dV/dr = S~, the same derivative relationship as circles.

Surface area must be assembled face by face, and the lateral surface of a cylinder unrolls into a rectangle of width equal to the circumference, ~2πr~, and height h. For cones the lateral surface uses the slant height ~ℓ = √(r² + h²)~ rather than the vertical height, a distinction that mirrors the base-versus-slant issue in triangle area.`,
        example: {
          prompt: "A cylinder has radius 3 cm and height 10 cm. Find its volume and total surface area in terms of π.",
          steps: [
            "V = πr²h = π(9)(10) = 90π.",
            "Two circular ends: 2πr² = 18π.",
            "Curved side: 2πrh = 2π(3)(10) = 60π.",
            "Total SA = 18π + 60π.",
          ],
          answer: "V = 90π cm³; SA = 78π cm²",
        },
        mistakes: [
          "Using the vertical height in place of the slant height for a cone's surface area.",
          "Reporting volume in square units.",
        ],
        video: "volume and surface area of prisms cylinders cones",
        videoAlt: ["volume formulas cylinder cone sphere explained"],
        practice: null,
        tags: ["volume", "surface area", "solids"],
      },
      {
        slug: "pythagorean-theorem",
        title: "The Pythagorean Theorem",
        summary: "a² + b² = c², the single most reused formula in all of maths.",
        level: "Core",
        keyIdea: "In a right triangle, the hypotenuse squared equals the sum of the other two squares.",
        simple: `In a right triangle, the two short sides (legs) and the longest side (hypotenuse) are linked by a² + b² = c².

The hypotenuse is always c, and it is always opposite the right angle — the longest side.

Legs 3 and 4: 9 + 16 = 25, so c = 5.

To find a leg instead, rearrange rather than adding. With c = 13 and a = 5: 5² + b² = 13², so b² = 169 − 25 = 144, and b = 12.

Triples worth memorising, since they show up everywhere: 3-4-5, 5-12-13, 8-15-17, and multiples like 6-8-10.`,
        complex: `The theorem holds in a right triangle and only in a right triangle; its converse states that if ~a² + b² = c²~ then the angle opposite c is right, making it a test for right angles rather than just a length formula.

The comparison version classifies any triangle: with c the longest side, ~a² + b² > c²~ means acute, ~= c²~ means right, and ~< c²~ means obtuse.

Its reach beyond triangles is what makes it central. The distance formula is the theorem applied to the horizontal and vertical gaps between two points. The equation of a circle, ~x² + y² = r²~, is the theorem stating that every point on the circle sits a fixed distance from the centre. The Pythagorean identity ~sin²θ + cos²θ = 1~ is the same statement on the unit circle. Each of these is one theorem wearing different notation.

When the answer is not a perfect square, leave it exact as a simplified radical: ~√52 = 2√13~ is preferable to a rounded decimal unless the context asks for one.`,
        example: {
          prompt: "A ladder 13 ft long leans against a wall with its base 5 ft out. How high does it reach?",
          steps: [
            "The ladder is the hypotenuse: c = 13, one leg a = 5.",
            "5² + b² = 13² → 25 + b² = 169.",
            "b² = 144.",
          ],
          answer: "12 ft",
        },
        mistakes: [
          "Adding when you should subtract: treating a leg as the hypotenuse.",
          "Stopping at c² and forgetting to take the square root.",
        ],
        video: "pythagorean theorem explained word problems",
        videoAlt: ["pythagorean theorem finding missing side"],
        practice: null,
        tags: ["pythagorean", "right triangles", "distance"],
      },
      {
        slug: "transformations",
        title: "Transformations",
        summary: "Slides, flips, turns and resizes — and which ones preserve size.",
        level: "Core",
        keyIdea: "Translations, reflections and rotations preserve size; dilations do not.",
        simple: `Four ways to move a shape:

- Translation: slide it. Every point moves the same distance in the same direction.
- Reflection: flip it over a line, like a mirror.
- Rotation: turn it around a point by some angle.
- Dilation: resize it from a centre point by a scale factor.

The first three are rigid: the shape keeps its size and angles, so the image is congruent to the original. Only dilation changes size, producing a similar but not congruent figure.

Coordinate rules worth knowing: reflecting over the x-axis takes (x, y) to (x, −y); over the y-axis it becomes (−x, y). A dilation by k from the origin gives (kx, ky).`,
        complex: `Translations, reflections and rotations are isometries: they preserve distance, and therefore angle measure, area and congruence. Dilations preserve angle and shape but scale distances by the factor k, producing similarity rather than congruence.

In coordinates: translation is ~(x, y) → (x + h, y + k)~; reflection over ~y = x~ is ~(x, y) → (y, x)~; rotation by 90° anticlockwise about the origin is ~(x, y) → (−y, x)~; dilation centred at the origin is ~(x, y) → (kx, ky)~.

These same maps reappear as function transformations in Algebra 2, where ~f(x − h) + k~ is a translation, ~−f(x)~ and ~f(−x)~ are reflections across the axes, and ~a·f(x)~ is a vertical dilation. The counterintuitive part there — that ~f(x − h)~ shifts *right* by h — is easier to accept once you notice that the substitution changes the input needed to reach a given output, not the output itself.`,
        example: {
          prompt: "Triangle vertex A(3, −2) is reflected over the x-axis, then translated 4 left and 1 up. Find the image.",
          steps: [
            "Reflection over x-axis: (3, −2) → (3, 2).",
            "Translate 4 left: x becomes 3 − 4 = −1.",
            "Translate 1 up: y becomes 2 + 1 = 3.",
          ],
          answer: "(−1, 3)",
        },
        mistakes: [
          "Swapping the reflection rules for the two axes.",
          "Calling a dilated figure congruent. It is similar unless k = 1.",
        ],
        video: "transformations translation reflection rotation dilation",
        videoAlt: ["geometry transformations coordinate rules"],
        practice: null,
        tags: ["transformations", "geometry", "congruence"],
      },
    ],
  },
  {
    id: "pa-data",
    title: "Data & Probability",
    blurb:
      "Summarising a set of numbers honestly, and measuring how likely something is.",
    topics: [
      {
        slug: "mean-median-mode-range",
        title: "Mean, Median, Mode & Range",
        summary: "Four summaries of a data set, and when the average lies.",
        level: "Intro",
        keyIdea: "Mean is the balance point; median is the middle value.",
        simple: `Four ways to describe a list of numbers:

- Mean: add them all, divide by how many. The everyday "average."
- Median: sort them and take the middle one. With an even count, average the middle two.
- Mode: the value that appears most often. There can be none, or several.
- Range: largest minus smallest. A measure of spread, not centre.

Sorting first is mandatory for the median, and it is the step most often skipped.

The mean gets dragged around by extreme values. One billionaire in a room of ten people makes the mean income meaningless while the median stays honest.`,
        complex: `The mean ~x̄ = (Σxᵢ)/n~ is the unique value at which deviations balance, since ~Σ(xᵢ − x̄) = 0~. That balancing property is exactly why it responds to every value, including outliers, and why it is the right centre for further statistical work.

The median is the 50th percentile and is resistant: changing an extreme value arbitrarily does not move it. Its breakdown point is 50%, against 0% for the mean. This is why income and house-price statistics are reported as medians while means are used for symmetric measurements.

The relationship between them diagnoses shape. Mean above median suggests a right skew, mean below suggests left skew, and rough equality suggests symmetry.

Range uses only two data points and is therefore a fragile measure of spread; interquartile range (Q3 − Q1) and standard deviation are the resistant and the standard alternatives respectively.`,
        example: {
          prompt: "Find the mean, median, mode and range of 4, 8, 6, 4, 20.",
          steps: [
            "Sort: 4, 4, 6, 8, 20.",
            "Mean: 42 ÷ 5 = 8.4.",
            "Median: middle of five values is 6.",
            "Mode: 4 appears twice. Range: 20 − 4 = 16.",
          ],
          answer: "Mean 8.4, median 6, mode 4, range 16 — the mean exceeds the median because 20 is an outlier.",
        },
        mistakes: [
          "Taking the median without sorting first.",
          "Dividing by the wrong count when a value repeats — count every entry.",
        ],
        video: "mean median mode range explained",
        videoAlt: ["measures of central tendency statistics"],
        practice: null,
        tags: ["statistics", "average", "median"],
      },
      {
        slug: "displaying-data",
        title: "Displaying Data",
        summary: "Which chart to use, and how axes get used to mislead.",
        level: "Intro",
        keyIdea: "The right display depends on whether data is categorical or numerical.",
        simple: `Different displays answer different questions:

- Bar chart: compares categories. Bars have gaps.
- Histogram: shows the shape of numerical data in intervals. Bars touch.
- Line graph: shows change over time.
- Dot plot: small data sets, one dot per value.
- Box plot: shows the median, the quartiles and the spread at a glance.
- Scatter plot: shows the relationship between two variables.

Bar chart and histogram look similar but are not interchangeable: bar charts are for categories, histograms for number ranges.

When reading any chart, check the axis. A vertical axis that starts at 90 instead of 0 makes a tiny difference look enormous.`,
        complex: `Display choice follows data type. Categorical data uses bar charts and, when parts of a whole matter, pie charts. Univariate numerical data uses histograms, dot plots and box plots. Bivariate numerical data uses scatter plots.

A histogram bins continuous data, so bin width is a real analytical choice: too wide hides structure such as bimodality, too narrow turns the display into noise. Bars touch precisely because the underlying variable is continuous.

A box plot encodes the five-number summary (minimum, Q1, median, Q3, maximum) and shows the interquartile range as the box. The usual outlier rule marks points beyond ~Q1 − 1.5·IQR~ or ~Q3 + 1.5·IQR~ separately.

Truncating the vertical axis exaggerates differences, and truncation is legitimate for time series of small variation only when clearly marked. This is the most common technique for making a chart technically accurate and practically misleading, which is a reason to read the axis before the picture.`,
        example: {
          prompt: "Which display shows whether study time and test score are related, and which shows the distribution of scores alone?",
          steps: [
            "Two numerical variables together → scatter plot.",
            "One numerical variable's shape → histogram or box plot.",
          ],
          answer: "Scatter plot for the relationship; histogram (or box plot) for the distribution of scores.",
        },
        mistakes: [
          "Using a bar chart for numerical intervals when a histogram is required.",
          "Comparing two charts whose axes use different scales.",
        ],
        video: "types of data displays histogram box plot scatter",
        videoAlt: ["choosing the right graph for data statistics"],
        practice: null,
        tags: ["data", "graphs", "statistics"],
      },
      {
        slug: "basic-probability",
        title: "Basic Probability",
        summary: "Counting favourable outcomes, and what independent really means.",
        level: "Core",
        keyIdea: "P(event) = favourable outcomes ÷ total outcomes.",
        simple: `Probability measures how likely something is, on a scale from 0 (impossible) to 1 (certain).

For equally likely outcomes, count the ones you want and divide by the total. Rolling a die, P(even) = 3/6 = 1/2.

The probability of something *not* happening is 1 minus the probability that it does. That shortcut saves a lot of counting.

For two events both happening, multiply — provided the first does not change the second. Two coin flips landing heads: ½ × ½ = ¼.

Careful with cards or marbles taken without replacement: the second probability changes because the pool shrank.`,
        complex: `For a finite sample space with equally likely outcomes, ~P(E) = |E|/|S|~. Probabilities satisfy ~0 ≤ P(E) ≤ 1~, ~P(S) = 1~, and the complement rule ~P(Eᶜ) = 1 − P(E)~.

For unions, ~P(A ∪ B) = P(A) + P(B) − P(A ∩ B)~; the subtraction avoids double counting and vanishes only when A and B are mutually exclusive.

For intersections, the general rule is ~P(A ∩ B) = P(A)·P(B | A)~. Independence is the special case where ~P(B | A) = P(B)~, reducing it to plain multiplication. Drawing with replacement gives independence; drawing without replacement does not, which is why the second factor changes.

Mutually exclusive and independent are different properties and are frequently confused. Two events that cannot co-occur are strongly dependent: knowing one happened tells you the other did not.`,
        example: {
          prompt: "A bag has 5 red and 3 blue marbles. Two are drawn without replacement. Find P(both red).",
          steps: [
            "First draw: 5/8 red.",
            "Now 4 red remain out of 7 marbles.",
            "Multiply: (5/8)(4/7) = 20/56.",
          ],
          answer: "5/14",
        },
        mistakes: [
          "Reusing the original probability on the second draw when there is no replacement.",
          "Adding probabilities for events that both happen instead of multiplying.",
        ],
        video: "basic probability explained with and without replacement",
        videoAlt: ["probability of independent and dependent events"],
        practice: null,
        tags: ["probability", "chance", "counting"],
      },
      {
        slug: "counting-principle",
        title: "The Counting Principle",
        summary: "Multiplying choices to count possibilities without listing them.",
        level: "Core",
        keyIdea: "Independent choices multiply: m ways then n ways gives m·n.",
        simple: `If you have 4 shirts and 3 pairs of trousers, you have 4 × 3 = 12 outfits. Each shirt pairs with each pair of trousers.

That is the fundamental counting principle: multiply the number of options at each stage.

It extends to as many stages as you like. A 4-digit PIN using digits 0-9 has 10 × 10 × 10 × 10 = 10,000 possibilities.

If repeats are not allowed, the count shrinks at each stage. Arranging 5 people in a row: 5 × 4 × 3 × 2 × 1 = 120.`,
        complex: `The multiplication principle states that if a procedure has k independent stages with ~n₁, n₂, …, n_k~ options, the total number of outcomes is the product ~n₁·n₂·…·n_k~. Independence here means the number of options at each stage does not depend on earlier choices, though the specific options may.

Two standard specialisations follow. Permutations count ordered arrangements without repetition: ~P(n,r) = n!/(n−r)!~. Combinations count unordered selections: ~C(n,r) = n!/(r!(n−r)!)~, dividing by ~r!~ precisely because each unordered set was counted once for every ordering of its elements.

Deciding between them is a single question: would swapping two chosen items give a different outcome? Seating arrangements and passwords say yes (permutation); committees and lottery tickets say no (combination). These are developed further with the binomial theorem in Algebra 2.`,
        example: {
          prompt: "How many 3-letter codes can be made from A-Z if letters may repeat? If they may not?",
          steps: [
            "With repeats: 26 × 26 × 26.",
            "Without repeats: 26 × 25 × 24.",
          ],
          answer: "17,576 with repetition; 15,600 without",
        },
        mistakes: [
          "Adding the options at each stage instead of multiplying.",
          "Keeping the count constant when repetition is not allowed.",
        ],
        video: "fundamental counting principle explained",
        videoAlt: ["counting principle permutations combinations intro"],
        practice: null,
        tags: ["counting", "combinatorics", "probability"],
      },
    ],
  },
];

export const course = {
  id: "pre-algebra",
  short: "Pre-Algebra",
  title: "Pre-Algebra",
  tagline: "The arithmetic and number sense algebra assumes you already have.",
  description:
    "Pre-Algebra is where arithmetic turns into structure. Fractions, signed numbers, ratios and the first equations. Almost every student who struggles in Algebra 1 is actually still struggling with something on this list, which is why it is worth finishing properly rather than quickly.",
  color: "#2563eb",
  units,
};
