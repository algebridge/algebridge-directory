/**
 * Geometry curriculum for the Algebridge Directory.
 *
 * Sits between Algebra 1 and Algebra 2 in the standard sequence.
 *
 * Convention (same as the other course files):
 *   simple  — no jargon, the version you say out loud to someone stuck
 *   complex — the precise version, with names, general forms and the reasons
 *   ~text~  — renders as an inline maths chip
 *
 * The Pre-Algebra course already covers the measurement basics (area,
 * perimeter, the Pythagorean theorem, basic transformations). This course
 * deliberately does not repeat them: it starts from proof and goes deeper.
 * AlgeBridge has no geometry skills yet, so `practice` is null except where a
 * topic genuinely maps to an existing algebra skill.
 */

const units = [
  {
    id: "geo-foundations",
    title: "Foundations & Proof",
    blurb:
      "The undefined terms everything is built from, and the reason geometry is the course where you finally have to prove things.",
    topics: [
      {
        slug: "points-lines-and-planes",
        title: "Points, Lines & Planes",
        summary: "The three things geometry refuses to define, and why that is deliberate.",
        level: "Intro",
        keyIdea: "Point, line and plane are undefined terms — everything else is built from them.",
        simple: `Geometry starts with three ideas it does not define: point, line and plane.

A point marks a position and has no size. A line goes on forever in both directions and has no thickness. A plane is a flat surface stretching forever in every direction.

That sounds like dodging the question, and it is — on purpose. Every definition has to be written using simpler words, and eventually you run out of simpler words. So geometry picks three starting ideas, describes them, and defines everything else from there.

Notation matters here. A point is a capital letter, A. A line through A and B is written with a double arrow over AB. A segment is the piece between two points, with a plain bar over AB. A ray starts at one point and goes forever the other way.`,
        complex: `Point, line and plane are the primitive (undefined) terms of Euclidean geometry. Defining them would require prior terms, so an axiomatic system instead names its primitives, states axioms describing how they behave, and derives everything else.

The core incidence axioms: two distinct points determine exactly one line; three non-collinear points determine exactly one plane; if two points lie in a plane, the entire line through them lies in that plane; two distinct planes meeting at all meet in a line.

Vocabulary that later theorems depend on: points are collinear if one line contains them all, and coplanar if one plane does. Two lines in space that are neither parallel nor intersecting are skew, which is only possible in three dimensions.

The distinction between a figure and its measure runs through the whole course. ~AB~ with a bar denotes the segment, an object; ~AB~ without one denotes its length, a number. Segments are congruent (~≅~), lengths are equal (~=~), and using the wrong symbol in a proof is a genuine error rather than a typo.`,
        example: {
          prompt: "Points A, B and C are collinear with B between A and C. Name the segments and rays, and say how many planes contain all three points.",
          steps: [
            "Segments: AB, BC and AC.",
            "Rays from B: BA and BC, which together form line AC.",
            "Three collinear points do not determine a unique plane.",
          ],
          answer: "Infinitely many planes contain a single line, so infinitely many contain A, B and C.",
        },
        mistakes: [
          "Writing AB = CD when you mean the segments are congruent. Lengths are equal; segments are congruent.",
          "Assuming any three points determine a plane — they must be non-collinear.",
        ],
        video: "points lines and planes geometry basics",
        videoAlt: ["undefined terms geometry point line plane"],
        practice: null,
        tags: ["foundations", "notation", "postulates"],
      },
      {
        slug: "segment-addition-and-midpoint",
        title: "Segment Addition & Midpoints",
        summary: "Adding lengths along a line, and finding the exact middle.",
        level: "Intro",
        keyIdea: "If B is between A and C, then AB + BC = AC.",
        simple: `If a point sits between two others, the two short pieces add up to the whole. With B between A and C:

AB + BC = AC

That is the Segment Addition Postulate, and it turns a diagram into an equation. If AB = 3x, BC = 2x + 1 and AC = 26, then 3x + 2x + 1 = 26, so x = 5.

A midpoint cuts a segment into two equal halves. If M is the midpoint of AB, then AM = MB, and each is half of AB.

A segment bisector is anything — a line, ray or segment — that passes through the midpoint. A perpendicular bisector does both: it passes through the midpoint and meets the segment at 90°.`,
        complex: `The Segment Addition Postulate states that for B between A and C, ~AB + BC = AC~. Betweenness is a genuine hypothesis, not a formality: the relation fails if B lies outside the segment, which is why diagrams must be read for order before the equation is written.

A midpoint M of ~AB~ satisfies ~AM = MB = ½AB~, and it is unique. On the coordinate plane this becomes the midpoint formula, the componentwise average ~((x₁+x₂)/2, (y₁+y₂)/2)~.

The perpendicular bisector has a characterisation worth remembering because it does most of the work in later constructions and proofs: a point lies on the perpendicular bisector of a segment exactly when it is equidistant from the two endpoints. That equidistance property is what makes the perpendicular bisectors of a triangle's sides meet at the circumcentre, the centre of the circle through all three vertices.

The parallel result for angles is the angle bisector, whose points are equidistant from the two sides of the angle.`,
        example: {
          prompt: "M is the midpoint of AB. AM = 4x − 3 and MB = 2x + 9. Find AB.",
          steps: [
            "Midpoint means the halves are equal: 4x − 3 = 2x + 9.",
            "2x = 12, so x = 6.",
            "AM = 4(6) − 3 = 21.",
            "AB is twice one half.",
          ],
          answer: "AB = 42",
        },
        mistakes: [
          "Solving for x and reporting it as the length when the question asked for AB.",
          "Applying segment addition without checking which point is actually between the others.",
        ],
        video: "segment addition postulate midpoint geometry",
        videoAlt: ["segment addition postulate examples"],
        practice: null,
        tags: ["segments", "midpoint", "postulates"],
      },
      {
        slug: "angle-relationships",
        title: "Angle Relationships",
        summary: "Vertical, linear, complementary and supplementary pairs, used as equations.",
        level: "Intro",
        keyIdea: "Vertical angles are congruent; a linear pair sums to 180°.",
        simple: `A handful of angle pairs come up constantly.

- Complementary: two angles adding to 90°.
- Supplementary: two angles adding to 180°.
- Linear pair: two adjacent angles forming a straight line. Always supplementary.
- Vertical angles: the opposite pairs formed when two lines cross. Always congruent.

Angles also add like segments do. If a ray sits inside an angle, the two smaller angles sum to the whole one. An angle bisector splits an angle into two congruent halves.

In problems these relationships are what supply the equation. Vertical angles give you "set them equal." A linear pair gives you "set the sum to 180."`,
        complex: `The Angle Addition Postulate states that if D lies in the interior of ~∠ABC~, then ~m∠ABD + m∠DBC = m∠ABC~.

The Linear Pair Postulate states that two angles forming a linear pair are supplementary. The Vertical Angles Theorem — that vertical angles are congruent — is then a theorem rather than a postulate, proved in one line: both angles are supplementary to the same angle, and supplements of the same angle are congruent.

That proof pattern, the Congruent Supplements Theorem, generalises: two angles supplementary to the same angle (or to congruent angles) are congruent, and likewise for complements. It is often the missing step in a two-column proof.

Precision of notation matters in proofs. ~∠ABC~ names an angle, an object, while ~m∠ABC~ names its measure, a number. Angles are congruent; measures are equal. Writing ~∠A = ∠B~ where ~∠A ≅ ∠B~ is meant is the single most common notation error in the course.`,
        example: {
          prompt: "Two lines cross. One angle is (5x − 8)° and the angle vertical to it is (3x + 12)°. Find all four angles.",
          steps: [
            "Vertical angles are congruent: 5x − 8 = 3x + 12.",
            "2x = 20, so x = 10.",
            "The angle is 5(10) − 8 = 42°.",
            "Its linear-pair partner is 180 − 42 = 138°.",
          ],
          answer: "42°, 138°, 42°, 138°",
        },
        mistakes: [
          "Setting a linear pair equal to each other instead of summing them to 180°.",
          "Assuming two angles that look adjacent form a linear pair without a straight line.",
        ],
        video: "angle relationships vertical linear pair complementary supplementary",
        videoAlt: ["angle pair relationships geometry solving"],
        practice: null,
        tags: ["angles", "vertical angles", "supplementary"],
      },
      {
        slug: "parallel-lines-and-transversals",
        title: "Parallel Lines & Transversals",
        summary: "Eight angles, two sizes, and the converses that prove lines parallel.",
        level: "Core",
        keyIdea: "A transversal across parallel lines makes every angle either equal or supplementary.",
        simple: `When a transversal cuts two parallel lines, eight angles appear — but only two different sizes, and they add to 180°.

The named pairs:
- Corresponding angles (same position at each intersection): congruent.
- Alternate interior angles (inside, opposite sides, a Z shape): congruent.
- Alternate exterior angles (outside, opposite sides): congruent.
- Co-interior or same-side interior angles (inside, same side, a C shape): supplementary.

A shortcut that never fails: any two of the eight angles are either congruent or supplementary. If they look the same size, they are congruent; if one looks acute and the other obtuse, they add to 180°.

Every one of these runs backwards too. If corresponding angles are congruent, the lines *must* be parallel. That is how you prove parallelism rather than assume it.`,
        complex: `Given ~ℓ ∥ m~ cut by a transversal, the Corresponding Angles Postulate gives congruent corresponding angles; alternate interior, alternate exterior and same-side relationships all follow from it via vertical angles and linear pairs.

Each theorem has a converse that is also true, and the distinction is the crux of the topic. The theorem takes parallelism as given and concludes an angle relationship; the converse takes the angle relationship as given and concludes parallelism. A proof must invoke the correct direction, and marking a diagram with arrows for "given parallel" versus proving it are different tasks.

Two further results are used constantly: two lines perpendicular to the same line are parallel, and two lines parallel to the same line are parallel to each other (transitivity).

Parallelism ultimately rests on the Parallel Postulate — through a point not on a line there is exactly one parallel. Denying it produces consistent non-Euclidean geometries, in which triangle angle sums differ from 180°. Everything in this course lives inside the Euclidean choice.`,
        example: {
          prompt: "Lines ℓ and m are parallel. One same-side interior angle is (2x + 10)° and the other is (3x − 30)°. Find both.",
          steps: [
            "Same-side interior angles are supplementary: (2x + 10) + (3x − 30) = 180.",
            "5x − 20 = 180, so 5x = 200 and x = 40.",
            "First angle: 2(40) + 10 = 90°.",
            "Second: 3(40) − 30 = 90°.",
          ],
          answer: "Both are 90°, so the transversal is perpendicular to both lines.",
        },
        mistakes: [
          "Setting same-side interior angles equal rather than summing them to 180°.",
          "Using a theorem when the problem requires its converse, assuming what you were asked to prove.",
        ],
        video: "parallel lines cut by a transversal angle theorems",
        videoAlt: ["alternate interior angles corresponding angles proofs"],
        practice: null,
        tags: ["parallel lines", "transversal", "converse"],
      },
      {
        slug: "conditional-statements",
        title: "Conditional Statements & Logic",
        summary: "If-then statements, their converse, inverse and contrapositive.",
        level: "Core",
        keyIdea: "A statement and its contrapositive are always both true or both false.",
        simple: `Geometry runs on if-then statements: "If it is a square, then it is a rectangle." The if part is the hypothesis, the then part is the conclusion.

Three statements are built from any conditional:
- Converse: swap them. "If it is a rectangle, then it is a square."
- Inverse: negate both. "If it is not a square, then it is not a rectangle."
- Contrapositive: swap *and* negate. "If it is not a rectangle, then it is not a square."

The important fact: a statement and its contrapositive always have the same truth value. The example above is true, and so is its contrapositive. But its converse is false — plenty of rectangles are not squares.

When a statement and its converse are both true, you get a biconditional, written "if and only if". Every definition in geometry is a biconditional.`,
        complex: `For a conditional ~p → q~: the converse is ~q → p~, the inverse is ~¬p → ¬q~, and the contrapositive is ~¬q → ¬p~.

A conditional is logically equivalent to its contrapositive, and the converse is equivalent to the inverse. A conditional and its converse are independent — either can hold without the other, which is precisely why every geometry theorem's converse must be proved separately rather than assumed.

When both ~p → q~ and ~q → p~ hold, the biconditional ~p ↔ q~ is true. Definitions are always biconditional even when written as one-directional sentences: "a midpoint divides a segment into two congruent segments" is understood to work both ways, which is what allows a definition to be used in either direction inside a proof.

The two reasoning modes used in the course: deductive reasoning applies accepted facts to reach a guaranteed conclusion, while inductive reasoning generalises from observed patterns and only produces a conjecture. A single counterexample disproves a conjecture, whereas no number of confirming examples proves one — the reason a proof is required at all.`,
        example: {
          prompt: "Write the converse, inverse and contrapositive of: 'If two angles are vertical, then they are congruent.' Which are true?",
          steps: [
            "Converse: If two angles are congruent, then they are vertical.",
            "Inverse: If two angles are not vertical, then they are not congruent.",
            "Contrapositive: If two angles are not congruent, then they are not vertical.",
            "The original is true, so the contrapositive is true.",
          ],
          answer: "Original and contrapositive true; converse and inverse false — two 40° angles can be congruent without being vertical.",
        },
        mistakes: [
          "Assuming the converse of a true statement is also true.",
          "Negating only one part when forming the contrapositive.",
        ],
        video: "conditional statements converse inverse contrapositive geometry",
        videoAlt: ["conditional statements logic geometry examples"],
        practice: null,
        tags: ["logic", "conditionals", "reasoning"],
      },
      {
        slug: "two-column-proofs",
        title: "Writing Two-Column Proofs",
        summary: "Statements on the left, reasons on the right, and how to get unstuck.",
        level: "Advanced",
        keyIdea: "Every statement needs a reason: a given, a definition, a postulate or a proved theorem.",
        simple: `A two-column proof lists statements on the left and the reason for each on the right. The first statements are the givens; the last is what you were asked to prove.

Every reason must be one of four things: a given, a definition, a postulate, or a theorem already proved. "It looks that way" is never a reason.

How to get started when you are stuck:
1. Mark the diagram with everything you are given.
2. Write the goal at the bottom and ask what would immediately produce it.
3. Work backwards from the goal and forwards from the givens until they meet.

Three reasons carry a surprising amount of the work: the Reflexive Property (a shared side is congruent to itself), vertical angles, and the definition of a midpoint or bisector.

Diagrams may be trusted for which points lie between others, but never for lengths or angle sizes.`,
        complex: `A proof is a finite chain of statements, each justified, leading from hypothesis to conclusion. The two-column format is a bookkeeping device; paragraph and flowchart proofs carry identical logical content.

The properties of equality and congruence supply many reasons: reflexive (~a = a~), symmetric, transitive, and the substitution property. The reflexive property is the one students overlook, and it is exactly what licenses using a shared side in a triangle congruence proof.

Deciding what may be assumed from a diagram is a real skill. Collinearity, betweenness and intersection may be read off. Congruence, parallelism, perpendicularity and right angles may not, unless marked or given.

Strategically, most proofs are found by working backwards. Identify the last step — the theorem whose conclusion is exactly the goal — then treat that theorem's hypotheses as the new goals and recurse. Proofs of segment or angle congruence typically route through triangle congruence and CPCTC, which is why that pair dominates the middle of the course.`,
        example: {
          prompt: "Given: M is the midpoint of AB. Prove: AM = ½AB.",
          steps: [
            "M is the midpoint of AB — Given.",
            "AM ≅ MB, so AM = MB — Definition of midpoint.",
            "AM + MB = AB — Segment Addition Postulate.",
            "AM + AM = AB, so 2AM = AB — Substitution; therefore AM = ½AB by division.",
          ],
          answer: "AM = ½AB, proved from the definition of midpoint and segment addition.",
        },
        mistakes: [
          "Assuming from the diagram that two segments are congruent because they look it.",
          "Giving a statement with no reason, or the reason 'obvious'.",
        ],
        video: "two column proofs geometry how to write",
        videoAlt: ["geometry proofs for beginners two column"],
        practice: null,
        tags: ["proof", "reasoning", "two-column"],
      },
    ],
  },
  {
    id: "geo-triangles",
    title: "Triangles & Congruence",
    blurb:
      "The centre of the course. Five congruence criteria, what they unlock, and the special segments inside every triangle.",
    topics: [
      {
        slug: "triangle-angle-theorems",
        title: "Triangle Angle Theorems",
        summary: "The 180° sum proved, plus the exterior angle shortcut.",
        level: "Intro",
        keyIdea: "An exterior angle equals the sum of the two remote interior angles.",
        simple: `Every triangle's angles add to 180°. That is worth seeing proved rather than just accepted: draw a line through one vertex parallel to the opposite side, and the alternate interior angles move the other two angles up to form a straight line.

The Exterior Angle Theorem is the time-saver. Extend one side of a triangle and the angle formed outside equals the sum of the two angles it is *not* touching.

If the two far angles are 50° and 60°, the exterior angle is 110° — no subtraction from 180 needed.

Triangles are classified by angles (acute, right, obtuse) and by sides (scalene, isosceles, equilateral). A triangle can have at most one right or obtuse angle, since two would already reach or exceed 180°.`,
        complex: `The Triangle Sum Theorem, ~m∠A + m∠B + m∠C = 180°~, is a consequence of the Parallel Postulate: the auxiliary line through one vertex parallel to the opposite side creates two pairs of congruent alternate interior angles that together with the third angle form a straight angle.

The Exterior Angle Theorem follows immediately: an exterior angle is supplementary to its adjacent interior angle, and the three interior angles sum to 180°, so the exterior angle equals the sum of the two remote interior angles. A corollary is that an exterior angle is strictly greater than either remote interior angle, which is the inequality used in indirect proofs.

Two further corollaries: the acute angles of a right triangle are complementary, and each angle of an equiangular triangle is 60°.

Generalising to convex polygons, the interior sum is ~(n − 2)·180°~ while the exterior sum is 360° for every n, since traversing the boundary turns through one full revolution.`,
        example: {
          prompt: "In triangle ABC, the exterior angle at C is 125° and ∠A = 55°. Find ∠B and ∠ACB.",
          steps: [
            "Exterior angle = sum of remote interior angles: 125 = 55 + m∠B.",
            "m∠B = 70°.",
            "∠ACB is supplementary to the exterior angle: 180 − 125.",
          ],
          answer: "∠B = 70° and ∠ACB = 55°",
        },
        mistakes: [
          "Adding the adjacent interior angle into the exterior angle sum. Use only the two remote ones.",
          "Assuming a triangle can have two obtuse angles.",
        ],
        video: "triangle sum theorem exterior angle theorem",
        videoAlt: ["exterior angle theorem triangle geometry"],
        practice: null,
        tags: ["triangles", "angle sum", "exterior angle"],
      },
      {
        slug: "congruence-and-rigid-motion",
        title: "What Congruence Means",
        summary: "Same shape and size, defined by motion rather than by measurement.",
        level: "Core",
        keyIdea: "Two figures are congruent when a sequence of rigid motions maps one onto the other.",
        simple: `Congruent figures have the same shape and size. Modern geometry defines that precisely: two figures are congruent if you can slide, turn or flip one onto the other exactly.

Those three moves — translation, rotation, reflection — are the rigid motions. They preserve every length and every angle, which is why the image is identical to the original.

Order in a congruence statement is not decoration. Writing △ABC ≅ △DEF claims A matches D, B matches E and C matches F. From that single line you can read off six facts: three pairs of congruent sides and three pairs of congruent angles.

Getting the letters in the wrong order makes the statement false even when the triangles really are congruent.`,
        complex: `A rigid motion (isometry) is a transformation preserving distance; translations, rotations and reflections generate all of them in the plane. Two figures are congruent precisely when some composition of rigid motions maps one onto the other. This definition replaces the older "same size and shape" and has the advantage of being checkable.

Because isometries preserve distance, they preserve angle measure, betweenness, collinearity and area as well.

A congruence statement encodes a specific vertex correspondence. ~△ABC ≅ △DEF~ asserts ~AB ≅ DE~, ~BC ≅ EF~, ~AC ≅ DF~, ~∠A ≅ ∠D~, ~∠B ≅ ∠E~, ~∠C ≅ ∠F~ — the six facts abbreviated as CPCTC.

Verifying all six is unnecessary. The congruence criteria (SSS, SAS, ASA, AAS, HL) each establish congruence from three well-chosen pieces, and the reason they work is that three such constraints determine a triangle up to rigid motion.

Composition of an even number of reflections is a direct isometry (a translation or rotation, preserving orientation); an odd number reverses orientation.`,
        example: {
          prompt: "Given △PQR ≅ △STU, list every congruence that follows, and name the transformation type if the orientation is reversed.",
          steps: [
            "Sides: PQ ≅ ST, QR ≅ TU, PR ≅ SU.",
            "Angles: ∠P ≅ ∠S, ∠Q ≅ ∠T, ∠R ≅ ∠U.",
            "Reversed orientation means an odd number of reflections is involved.",
          ],
          answer: "Six congruences; a reversed orientation indicates a reflection or glide reflection.",
        },
        mistakes: [
          "Writing the vertices in a non-corresponding order in the congruence statement.",
          "Calling figures congruent after a dilation — that changes size, so it gives similarity.",
        ],
        video: "congruence rigid motions transformations geometry",
        videoAlt: ["congruent triangles corresponding parts notation"],
        practice: null,
        tags: ["congruence", "rigid motion", "correspondence"],
      },
      {
        slug: "triangle-congruence-sss-sas",
        title: "Proving Congruence: SSS & SAS",
        summary: "Three sides, or two sides and the angle between them.",
        level: "Core",
        keyIdea: "SAS needs the angle *between* the two sides — SSA is not a criterion.",
        simple: `You do not need all six pairs to prove two triangles congruent. Three of the right pieces are enough.

SSS: all three pairs of sides congruent. Triangles are rigid, so the three side lengths lock the shape completely.

SAS: two pairs of sides and the pair of angles *between* them. The word "included" is doing real work — the angle must sit between the two sides you used.

SSA is not a criterion. Two sides and a non-included angle can produce two genuinely different triangles, which is why it fails. (The one exception is a right angle, which gets its own rule, HL.)

In proofs, look for a shared side. It is congruent to itself by the Reflexive Property, and it is very often the third piece you need.`,
        complex: `SSS and SAS are taken as postulates in most treatments, or derived from rigid-motion arguments in transformation-based ones: given the matching parts, an explicit sequence of isometries maps one triangle onto the other.

The included-angle condition in SAS is essential. SSA fails because a circle of the given radius can meet the far ray in two points, producing two non-congruent triangles — the ambiguous case, which reappears in the Law of Sines in trigonometry. Whether zero, one or two triangles exist depends on the relationship between the given side and the altitude.

AAA also fails as a congruence criterion, since it fixes shape but not size. It is exactly the similarity criterion AA in disguise.

In practice, the marked diagram determines the route: three tick-marked sides suggest SSS; two sides with the angle between them suggest SAS. Shared sides (reflexive property) and vertical angles supply the missing third piece more often than any other pair of facts.`,
        example: {
          prompt: "In quadrilateral ABCD, AB ≅ CD and AD ≅ CB. Prove △ABD ≅ △CDB.",
          steps: [
            "AB ≅ CD — Given.",
            "AD ≅ CB — Given.",
            "BD ≅ DB — Reflexive Property (shared side).",
            "Three pairs of sides are congruent.",
          ],
          answer: "△ABD ≅ △CDB by SSS.",
        },
        mistakes: [
          "Using SAS with an angle that is not between the two sides.",
          "Treating SSA as a valid criterion.",
        ],
        video: "SSS and SAS triangle congruence proofs",
        videoAlt: ["triangle congruence postulates SSS SAS examples"],
        practice: null,
        tags: ["congruence", "SSS", "SAS"],
      },
      {
        slug: "triangle-congruence-asa-aas-hl",
        title: "Proving Congruence: ASA, AAS & HL",
        summary: "The angle-based criteria, and the one reserved for right triangles.",
        level: "Core",
        keyIdea: "ASA has the side between the angles; AAS does not; HL is right triangles only.",
        simple: `Three more ways to prove triangles congruent.

ASA: two angles and the side *between* them.
AAS: two angles and a side *not* between them. This works because knowing two angles gives you the third for free, which turns it back into ASA.
HL: for right triangles only — the hypotenuse and one leg.

HL is the exception that makes SSA work, and only because the right angle removes the ambiguity.

So the full list is SSS, SAS, ASA, AAS and HL. The two that do not work are SSA (except as HL) and AAA.

To use HL you must state that both triangles are right triangles. Skipping that step invalidates the proof.`,
        complex: `ASA is typically a postulate; AAS follows from it as a theorem via the Triangle Sum Theorem, since two pairs of congruent angles force the third pair to be congruent, converting the non-included side into an included one.

HL applies only to right triangles and is provable from the Pythagorean theorem: with the hypotenuse and one leg fixed, the remaining leg is determined as ~√(c² − a²)~, reducing HL to SSS. This is why the right angle rescues what would otherwise be the ambiguous SSA configuration.

The complete set of valid criteria is SSS, SAS, ASA, AAS and HL. AAA establishes similarity only. SSA is invalid in general.

The choice among them is driven by the diagram: two marked angles with a side between them give ASA, a side outside them gives AAS, and a right-angle mark with hypotenuse and leg gives HL. When a diagram supplies parallel lines, the alternate interior angle theorem is usually the source of the second angle pair.`,
        example: {
          prompt: "Given: ∠A ≅ ∠D, ∠B ≅ ∠E, and BC ≅ EF. Which criterion proves △ABC ≅ △DEF?",
          steps: [
            "BC is opposite ∠A, and EF is opposite ∠D.",
            "So the congruent side is not between the two congruent angles.",
            "Two angles and a non-included side.",
          ],
          answer: "AAS (equivalently ASA, since the third angle pair follows from the Triangle Sum Theorem).",
        },
        mistakes: [
          "Applying HL without first establishing that both triangles have a right angle.",
          "Labelling an AAS configuration as ASA, or vice versa, by misreading which side is included.",
        ],
        video: "ASA AAS HL triangle congruence proofs",
        videoAlt: ["hypotenuse leg theorem right triangle congruence"],
        practice: null,
        tags: ["congruence", "ASA", "AAS", "HL"],
      },
      {
        slug: "cpctc",
        title: "CPCTC",
        summary: "Prove the triangles congruent first, then everything else follows.",
        level: "Advanced",
        keyIdea: "Corresponding Parts of Congruent Triangles are Congruent — used after the congruence is established.",
        simple: `CPCTC stands for "Corresponding Parts of Congruent Triangles are Congruent." It is the payoff step.

The order is what matters. You cannot use CPCTC to prove triangles congruent — you use one of the five criteria for that, and *then* CPCTC gives you the remaining three pairs.

So the standard proof shape is:
1. Establish three pairs of parts.
2. Conclude the triangles are congruent by SSS, SAS, ASA, AAS or HL.
3. Use CPCTC to get whichever leftover side or angle you actually wanted.

Whenever a problem asks you to prove two segments or two angles congruent and they sit in different triangles, this is almost always the route.`,
        complex: `CPCTC is the converse direction of the definition of congruence: once ~△ABC ≅ △DEF~ is established, all six correspondences hold. It is a valid reason in a proof only on a line *after* the congruence statement.

Its role is structural. The congruence criteria each require three specific parts; CPCTC releases the other three. Chained proofs exploit this repeatedly — prove one pair of triangles congruent, use CPCTC to obtain a segment or angle congruence, then use that new fact to prove a second pair congruent.

CPCTC is also the standard route to properties that are not obviously about triangles at all. That a parallelogram's diagonals bisect each other, that the base angles of an isosceles triangle are congruent, and that a point on a perpendicular bisector is equidistant from the endpoints are all proved by constructing triangles, proving them congruent, and applying CPCTC.

An auxiliary line is often required to create the triangles in the first place, and drawing the right one is usually the whole difficulty of the proof.`,
        example: {
          prompt: "Given: AB ≅ AD and BC ≅ DC. Prove ∠B ≅ ∠D.",
          steps: [
            "AB ≅ AD and BC ≅ DC — Given.",
            "AC ≅ AC — Reflexive Property.",
            "△ABC ≅ △ADC — SSS.",
            "∠B ≅ ∠D — CPCTC.",
          ],
          answer: "∠B ≅ ∠D, obtained by CPCTC after establishing congruence by SSS.",
        },
        mistakes: [
          "Citing CPCTC as the reason the triangles are congruent — it is the consequence, not the cause.",
          "Applying CPCTC to a pair of parts that are not actually corresponding under the stated congruence.",
        ],
        video: "CPCTC geometry proofs explained",
        videoAlt: ["CPCTC corresponding parts congruent triangles proofs"],
        practice: null,
        tags: ["CPCTC", "proof", "congruence"],
      },
      {
        slug: "isosceles-triangle-theorems",
        title: "Isosceles & Equilateral Triangles",
        summary: "Equal sides force equal angles, and the converse holds too.",
        level: "Core",
        keyIdea: "Base angles of an isosceles triangle are congruent, and conversely.",
        simple: `In an isosceles triangle the two equal sides are the legs, the third is the base, and the two angles at the base are congruent.

The Base Angles Theorem: if two sides are congruent, the angles opposite them are congruent.

Its converse is also true: if two angles are congruent, the sides opposite them are congruent. This is how you prove a triangle is isosceles.

Equilateral triangles are the special case. All three sides equal means all three angles equal, and since they sum to 180°, each is 60°.

One more useful fact: in an isosceles triangle, the segment from the apex to the midpoint of the base is simultaneously the median, the altitude, the angle bisector and the perpendicular bisector. All four coincide.`,
        complex: `The Isosceles Triangle Theorem states that if ~AB ≅ AC~ then ~∠B ≅ ∠C~. The classical proof draws the bisector of the apex angle and applies SAS, then CPCTC.

Its converse — congruent base angles imply congruent opposite sides — is proved similarly and is what licenses concluding "therefore the triangle is isosceles" from angle information alone.

Corollaries: a triangle is equilateral if and only if it is equiangular, and each angle of an equilateral triangle measures 60°.

The coincidence of the four special segments from the apex is a genuinely useful fact, because it means a single auxiliary line can be justified as whichever of the four the proof needs. The converse direction is also true and gives a test: if a triangle's median from a vertex is also an altitude, the triangle is isosceles.

This coincidence is the reason equilateral triangles have their centroid, circumcentre, incentre and orthocentre all at the same point, which is not the case for any other triangle.`,
        example: {
          prompt: "In isosceles △ABC with AB ≅ AC, ∠A = 40°. Find the base angles.",
          steps: [
            "Base angles ∠B and ∠C are congruent.",
            "Let each be x: 40 + x + x = 180.",
            "2x = 140.",
          ],
          answer: "∠B = ∠C = 70°",
        },
        mistakes: [
          "Assuming the base angles are the ones adjacent to the marked congruent sides — they are the ones opposite them.",
          "Splitting the remaining degrees unevenly between the two base angles.",
        ],
        video: "isosceles triangle theorem base angles converse",
        videoAlt: ["isosceles and equilateral triangle theorems geometry"],
        practice: null,
        tags: ["isosceles", "base angles", "equilateral"],
      },
      {
        slug: "triangle-inequalities",
        title: "Triangle Inequalities",
        summary: "Which three lengths can actually form a triangle, and which angle is biggest.",
        level: "Core",
        keyIdea: "Any two sides must sum to more than the third.",
        simple: `Not every set of three lengths makes a triangle. The two shorter ones have to reach across the longest, so:

any two sides added together must exceed the third.

For 3, 4 and 8: 3 + 4 = 7, which is less than 8. Those cannot form a triangle. The short sides simply do not reach.

Testing all three pairs works, but there is a shortcut: check only the two smallest against the largest. If that passes, the others automatically do.

There is also an ordering rule. The longest side is always opposite the largest angle, and the shortest side opposite the smallest. So in a triangle with angles 30°, 60° and 90°, the sides go in that same order of size.`,
        complex: `The Triangle Inequality Theorem states that for any triangle, ~a + b > c~ for every labelling of the sides. Equality would collapse the triangle into a segment, so the inequality is strict.

Given two sides a and b, the third satisfies ~|a − b| < c < a + b~, which is the standard way to state the range of possible third sides.

The side-angle ordering theorem states that in any triangle, the larger angle lies opposite the longer side, and conversely. Both directions are used: side lengths order the angles, and angle measures order the sides.

The Hinge Theorem (SAS Inequality) extends this to two triangles: given two pairs of congruent sides, the triangle with the larger included angle has the longer third side. Its converse orders the included angles from the third sides.

These results are typically proved indirectly, by assuming the negation and deriving a contradiction with the Exterior Angle Theorem — which is why triangle inequality is the standard setting for introducing proof by contradiction.`,
        example: {
          prompt: "Two sides of a triangle are 7 and 11. Find the range of possible third sides, then order the angles of a triangle with sides 5, 9 and 7.",
          steps: [
            "Third side c satisfies |11 − 7| < c < 11 + 7.",
            "So 4 < c < 18.",
            "For 5, 9, 7: the largest side is 9, then 7, then 5.",
            "Angles follow the same order as their opposite sides.",
          ],
          answer: "4 < c < 18; the largest angle is opposite 9, then the one opposite 7, then the one opposite 5.",
        },
        mistakes: [
          "Allowing equality, treating 3, 4, 7 as a valid triangle.",
          "Matching the largest angle to the shortest side.",
        ],
        video: "triangle inequality theorem possible side lengths",
        videoAlt: ["triangle inequality theorem hinge theorem geometry"],
        practice: null,
        tags: ["inequalities", "triangles", "hinge theorem"],
      },
      {
        slug: "special-segments-in-triangles",
        title: "Medians, Altitudes & Centres",
        summary: "Four segments, four points of concurrency, and what each one does.",
        level: "Advanced",
        keyIdea: "Medians meet at the centroid, which sits two thirds of the way along each.",
        simple: `Every triangle has four families of special segments, and each family meets at a single point.

- Median: vertex to the midpoint of the opposite side. The three meet at the centroid, the balance point.
- Altitude: vertex perpendicular to the opposite side. The three meet at the orthocentre.
- Perpendicular bisector of each side. These meet at the circumcentre, which is equidistant from the three vertices — the centre of the circle through them.
- Angle bisector. These meet at the incentre, equidistant from the three sides — the centre of the circle that fits inside.

The centroid has a useful ratio: it sits two thirds of the way from each vertex to the opposite midpoint, splitting every median 2:1.

Which centre a problem wants is decided by one question: equidistant from the vertices means circumcentre, equidistant from the sides means incentre.`,
        complex: `Each family of segments is concurrent, and the four points of concurrency have distinct characterisations.

The centroid divides each median in a ~2:1~ ratio measured from the vertex, and is the triangle's centre of mass. In coordinates it is the average of the vertices, ~((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)~.

The circumcentre is equidistant from the vertices because every point on a side's perpendicular bisector is equidistant from that side's endpoints. It lies inside an acute triangle, on the hypotenuse's midpoint of a right triangle, and outside an obtuse one.

The incentre is equidistant from the sides, by the corresponding property of angle bisectors, and always lies inside the triangle.

The orthocentre also moves outside for obtuse triangles, and for a right triangle it coincides with the right-angle vertex.

The centroid, circumcentre and orthocentre are collinear on the Euler line for every non-equilateral triangle, with the centroid dividing the segment in a 2:1 ratio. In an equilateral triangle all four centres coincide.`,
        example: {
          prompt: "In △ABC, medians meet at G. If AG = 8 on the median from A to midpoint M, find AM and GM.",
          steps: [
            "The centroid splits each median 2:1 from the vertex.",
            "AG is the longer piece, worth 2 parts, so 1 part = 4.",
            "GM = 4.",
            "AM = AG + GM = 8 + 4.",
          ],
          answer: "AM = 12 and GM = 4",
        },
        mistakes: [
          "Applying the 2:1 ratio from the midpoint rather than from the vertex.",
          "Using the incentre when the problem asks for a point equidistant from the vertices.",
        ],
        video: "medians altitudes centroid circumcenter incenter orthocenter",
        videoAlt: ["points of concurrency triangle centers geometry"],
        practice: null,
        tags: ["medians", "centroid", "concurrency"],
      },
      {
        slug: "midsegment-theorem",
        title: "The Midsegment Theorem",
        summary: "Join two midpoints and you get a parallel segment, half as long.",
        level: "Core",
        keyIdea: "A midsegment is parallel to the third side and half its length.",
        simple: `A midsegment joins the midpoints of two sides of a triangle. It always does two things at once:

- it is parallel to the third side, and
- it is exactly half as long.

So if the third side is 14, the midsegment is 7, and they never meet.

Drawing all three midsegments cuts the triangle into four smaller triangles, all congruent to each other and similar to the original with a scale factor of ½.

The theorem is convenient in coordinate geometry: it gives a parallel line and a length in one step, which is often faster than computing slopes and distances separately.`,
        complex: `The Triangle Midsegment Theorem states that the segment joining the midpoints of two sides is parallel to the third side and equal to half its length.

The coordinate proof is short: placing the triangle with vertices ~(0,0)~, ~(2a,0)~ and ~(2b,2c)~ makes the midpoints ~(a,0)~ and ~(a+b,c)~, whose connecting segment has slope ~c/b~, matching the third side, and length ~√(b² + c²)~, exactly half.

It follows from, and is a special case of, the Side-Splitter Theorem with the ratio fixed at ½; the parallel conclusion is the converse direction of the proportionality relationship.

The three midsegments form the medial triangle, similar to the original with ratio ½, hence a quarter of the area and half the perimeter. The four resulting small triangles are congruent to one another.

The corresponding result for trapezoids — the midsegment is parallel to both bases and equal to their average — reduces to this one by drawing a diagonal.`,
        example: {
          prompt: "In △ABC, D and E are midpoints of AB and AC. If DE = 3x − 4 and BC = 4x + 6, find BC.",
          steps: [
            "Midsegment is half the third side: 2(DE) = BC.",
            "2(3x − 4) = 4x + 6.",
            "6x − 8 = 4x + 6, so 2x = 14 and x = 7.",
            "BC = 4(7) + 6.",
          ],
          answer: "BC = 34 (and DE = 17)",
        },
        mistakes: [
          "Setting the midsegment equal to the third side instead of half of it.",
          "Applying the theorem to a segment joining points that are not both midpoints.",
        ],
        video: "triangle midsegment theorem explained",
        videoAlt: ["midsegment theorem triangle geometry examples"],
        practice: null,
        tags: ["midsegment", "parallel", "triangles"],
      },
    ],
  },
  {
    id: "geo-similarity",
    title: "Similarity & Right Triangles",
    blurb:
      "Same shape at a different scale, and the right-triangle results that fall out of it.",
    topics: [
      {
        slug: "similar-polygons",
        title: "Similar Polygons",
        summary: "Equal angles, proportional sides, and what scaling does to perimeter and area.",
        level: "Core",
        keyIdea: "Similar figures have congruent angles and a constant ratio of corresponding sides.",
        simple: `Similar figures have the same shape but not necessarily the same size. Two conditions must both hold: corresponding angles are congruent, and corresponding sides are in a constant ratio.

That ratio is the scale factor, k. Find it by dividing any pair of corresponding sides.

Congruence is the special case where k = 1.

The consequences for measurement are worth over-learning:
- lengths, including perimeter, scale by k
- areas scale by k²

So a figure scaled up by 3 has 3 times the perimeter but 9 times the area. Doubling a photo's dimensions quadruples the paper it needs.

As with congruence, the order of letters in a similarity statement records which vertices correspond.`,
        complex: `Two polygons are similar when there is a vertex correspondence with all corresponding angles congruent and all corresponding sides proportional. Both conditions are required for polygons in general — a rectangle and a square have congruent angles but are not similar, while a square and a rhombus have proportional sides but are not similar.

Triangles are the exception where either condition alone suffices, which is what makes the triangle similarity criteria so powerful.

Equivalently, in transformational terms, two figures are similar when a sequence of rigid motions followed by a dilation maps one onto the other. The dilation contributes the scale factor k.

Under a similarity of ratio k, every length scales by k, every area by ~k²~ and every volume by ~k³~ — the exponent being the dimension of the measurement. Angles are unchanged, since dilation preserves angle measure.

The distinction between the scale factor and its square is the most common source of error, and stating which quantity is being scaled before computing prevents nearly all of them.`,
        example: {
          prompt: "Two similar pentagons have corresponding sides 6 and 15. The smaller has perimeter 40 and area 90. Find the larger's perimeter and area.",
          steps: [
            "Scale factor k = 15/6 = 2.5.",
            "Perimeter scales by k: 40 × 2.5 = 100.",
            "Area scales by k²= 6.25.",
            "90 × 6.25 = 562.5.",
          ],
          answer: "Perimeter 100, area 562.5",
        },
        mistakes: [
          "Scaling area by k instead of k².",
          "Concluding similarity from proportional sides alone for a non-triangle.",
        ],
        video: "similar polygons scale factor perimeter area ratio",
        videoAlt: ["similar figures scale factor area ratio geometry"],
        practice: null,
        tags: ["similarity", "scale factor", "area ratio"],
      },
      {
        slug: "triangle-similarity-criteria",
        title: "Triangle Similarity: AA, SSS & SAS",
        summary: "Why two angles are enough to prove triangles similar.",
        level: "Core",
        keyIdea: "AA alone proves similarity — the third angle comes free.",
        simple: `Triangles are easier to prove similar than other polygons, because you do not need both conditions.

AA: two pairs of congruent angles. That is enough. The third pair must match because all three sum to 180°.

SSS similarity: all three pairs of sides in the same ratio.

SAS similarity: two pairs of sides in the same ratio with the included angles congruent.

AA is the one you will use most, and parallel lines are its usual source — they hand you congruent corresponding or alternate interior angles for free.

This is the machinery behind indirect measurement. A person and a flagpole cast shadows at the same time, forming two similar triangles, and the flagpole's height comes from a proportion.`,
        complex: `AA similarity holds because the Triangle Sum Theorem makes the third angle pair automatically congruent, and equiangular triangles have proportional sides. It is the criterion that fails as a congruence criterion (AAA) precisely because it fixes shape without size.

SSS similarity requires ~a₁/a₂ = b₁/b₂ = c₁/c₂~, and SAS similarity requires two proportional pairs with congruent included angles — the same included-angle caution as in SAS congruence.

Setting up the proportion correctly matters more than the algebra. Corresponding sides must occupy corresponding positions, which the similarity statement's vertex order determines. Writing the proportion as (side of small)/(matching side of large) consistently on both sides prevents inversion errors.

Similar triangles are the engine behind several later results: the Side-Splitter Theorem, the geometric mean relations in right triangles, the constancy of trigonometric ratios, and the invariance of slope. Each is an application of the same criterion.`,
        example: {
          prompt: "A 6 ft person casts a 4 ft shadow while a flagpole casts a 22 ft shadow. Find the flagpole's height.",
          steps: [
            "Both triangles have a right angle and share the sun's angle, so AA gives similarity.",
            "Set up matching ratios: height/shadow is constant.",
            "6/4 = h/22.",
            "4h = 132.",
          ],
          answer: "The flagpole is 33 ft tall.",
        },
        mistakes: [
          "Writing a proportion with one ratio inverted relative to the other.",
          "Using SAS similarity with an angle that is not included between the proportional sides.",
        ],
        video: "triangle similarity AA SSS SAS theorems",
        videoAlt: ["proving triangles similar AA similarity examples"],
        practice: null,
        tags: ["similarity", "AA", "proportions"],
      },
      {
        slug: "side-splitter-theorem",
        title: "The Side-Splitter Theorem",
        summary: "A line parallel to one side cuts the other two proportionally.",
        level: "Advanced",
        keyIdea: "A line parallel to a triangle's side divides the other two sides proportionally.",
        simple: `Draw a line across a triangle parallel to one of its sides. It cuts the other two sides into pieces that are in the same ratio.

If the line splits one side into 3 and 6, it splits the other into pieces with the same 1:2 ratio.

The converse is also true and is how you prove a line is parallel: if the two sides are divided proportionally, the line must be parallel to the third side.

Watch which pieces you are comparing. The theorem relates the *parts* to each other — top piece to bottom piece on each side. Comparing a part to the whole side works too, as long as you do the same on both sides. Mixing the two is the usual mistake.

A related result: three or more parallel lines cut any two transversals proportionally.`,
        complex: `The Side-Splitter (Basic Proportionality or Thales') Theorem states that if a line parallel to one side of a triangle intersects the other two sides, it divides them proportionally: ~AD/DB = AE/EC~.

It follows from AA similarity, since the parallel line creates a smaller triangle with congruent corresponding angles, hence ~△ADE ∼ △ABC~. That similarity gives ~AD/AB = AE/AC~, which rearranges to the part-to-part form. Both forms are valid; the error is mixing part-to-part on one side with part-to-whole on the other.

The converse holds and is the standard tool for proving parallelism from length information alone.

Two extensions appear in problems. Three parallel lines cutting two transversals divide them proportionally, and a triangle's angle bisector divides the opposite side into segments proportional to the adjacent sides — ~BD/DC = AB/AC~ — which is proved by constructing an auxiliary parallel line.`,
        example: {
          prompt: "In △ABC, DE ∥ BC with D on AB and E on AC. AD = 4, DB = 6, AE = 5. Find EC.",
          steps: [
            "Part-to-part on both sides: AD/DB = AE/EC.",
            "4/6 = 5/EC.",
            "4·EC = 30.",
          ],
          answer: "EC = 7.5",
        },
        mistakes: [
          "Comparing a part on one side to the whole on the other.",
          "Applying the theorem when the cutting line is not parallel to a side.",
        ],
        video: "side splitter theorem triangle proportionality",
        videoAlt: ["triangle proportionality theorem parallel line"],
        practice: null,
        tags: ["proportionality", "parallel", "similarity"],
      },
      {
        slug: "geometric-mean-in-right-triangles",
        title: "Geometric Mean in Right Triangles",
        summary: "Drop an altitude to the hypotenuse and three similar triangles appear.",
        level: "Advanced",
        keyIdea: "The altitude to the hypotenuse is the geometric mean of the two hypotenuse pieces.",
        simple: `Drop a perpendicular from the right angle to the hypotenuse. You now have three triangles — the original and two small ones — and all three are similar to each other.

That similarity produces two relationships worth memorising.

The altitude is the geometric mean of the two pieces it creates:
altitude² = (left piece)(right piece)

Each leg is the geometric mean of the whole hypotenuse and the piece next to it:
leg² = (whole hypotenuse)(adjacent piece)

The geometric mean of a and b is √(ab). So if the hypotenuse splits into 4 and 9, the altitude is √36 = 6.

The trap is pairing a leg with the *far* piece. Each leg goes with the piece it touches.`,
        complex: `The altitude from the right angle to the hypotenuse creates two triangles each similar to the original and to each other, by AA — each shares an acute angle with the original and has a right angle.

The proportions that follow are the geometric mean relations. With hypotenuse split into segments p and q adjacent to legs a and b respectively, and altitude h:

~h² = pq    a² = cp    b² = cq~

where ~c = p + q~. Each is a statement that one length is the geometric mean ~√(xy)~ of two others.

Adding the last two recovers the Pythagorean theorem: ~a² + b² = c(p + q) = c²~, which is one of the standard proofs of it.

The geometric mean of a and b is ~√(ab)~, and it always lies between them, satisfying ~√(ab) ≤ (a+b)/2~ with equality only when ~a = b~ — the arithmetic-geometric mean inequality.

Matching each leg to its adjacent segment is what the similarity statement dictates; pairing a leg with the far segment is the standard error.`,
        example: {
          prompt: "The altitude to the hypotenuse divides it into 4 and 9. Find the altitude and both legs.",
          steps: [
            "Altitude: h² = 4 × 9 = 36, so h = 6.",
            "Hypotenuse c = 13.",
            "Leg next to 4: a² = 13 × 4 = 52, so a = 2√13.",
            "Leg next to 9: b² = 13 × 9 = 117, so b = 3√13.",
          ],
          answer: "h = 6, legs 2√13 and 3√13 (check: 52 + 117 = 169 ✓)",
        },
        mistakes: [
          "Pairing a leg with the hypotenuse segment it does not touch.",
          "Using the arithmetic mean (a+b)/2 rather than the geometric mean √(ab).",
        ],
        video: "geometric mean right triangle altitude hypotenuse",
        videoAlt: ["right triangle altitude geometric mean theorem"],
        practice: null,
        tags: ["geometric mean", "right triangles", "similarity"],
      },
      {
        slug: "pythagorean-converse-and-triples",
        title: "The Converse & Pythagorean Triples",
        summary: "Using a² + b² = c² backwards to classify any triangle.",
        level: "Core",
        keyIdea: "Compare a² + b² to c² to decide whether a triangle is acute, right or obtuse.",
        simple: `The Pythagorean theorem tells you a side when you already know the triangle is right. Its converse runs the other way: if a² + b² = c², the triangle *must* be right.

That turns it into a classification test. With c as the longest side:

- a² + b² = c² → right
- a² + b² > c² → acute
- a² + b² < c² → obtuse

For 6, 8, 11: 36 + 64 = 100, which is less than 121, so the triangle is obtuse.

Pythagorean triples are whole-number side sets. Knowing them on sight saves real time: 3-4-5, 5-12-13, 8-15-17, 7-24-25, 9-40-41.

Any multiple of a triple is also a triple, so 6-8-10 and 30-40-50 are both right triangles.`,
        complex: `The converse states that if ~a² + b² = c²~ with c the longest side, the angle opposite c is right. It is proved by constructing a right triangle with legs a and b, applying the theorem to get hypotenuse c, and concluding congruence by SSS.

The comparison version generalises this into a classification and follows from the Law of Cosines, ~c² = a² + b² − 2ab·cos C~: the sign of ~a² + b² − c²~ matches the sign of ~cos C~, which is positive for acute C, zero for right and negative for obtuse.

A necessary first check is the triangle inequality — 3, 4, 20 satisfies no triangle at all, so classifying it is meaningless.

Primitive Pythagorean triples are those with ~gcd(a,b,c) = 1~, and all are generated by ~a = m² − n²~, ~b = 2mn~, ~c = m² + n²~ for coprime ~m > n~ of opposite parity. Scaling any triple by an integer produces another, which is why recognising 9-12-15 as ~3×(3,4,5)~ is faster than computing.`,
        example: {
          prompt: "Classify the triangles with sides (9, 12, 15) and (7, 9, 12).",
          steps: [
            "First: 81 + 144 = 225 and 15² = 225.",
            "Equal, so right — it is 3×(3,4,5).",
            "Second: 49 + 81 = 130 and 12² = 144.",
            "130 < 144.",
          ],
          answer: "(9,12,15) is right; (7,9,12) is obtuse.",
        },
        mistakes: [
          "Comparing against a side that is not the longest.",
          "Reversing the inequality, calling a² + b² > c² obtuse.",
        ],
        video: "converse of pythagorean theorem classify triangles",
        videoAlt: ["pythagorean triples converse acute obtuse right"],
        practice: { unit: "exponents-radicals", skill: "simplifying-radicals" },
        tags: ["pythagorean", "converse", "triples"],
      },
      {
        slug: "special-right-triangles",
        title: "Special Right Triangles",
        summary: "45-45-90 and 30-60-90, and the shortcuts they give you.",
        level: "Core",
        keyIdea: "45-45-90 sides are x, x, x√2. 30-60-90 sides are x, x√3, 2x.",
        simple: `Two right triangles come up so often that their side ratios are worth memorising.

45-45-90 (half a square): legs are equal, hypotenuse is a leg times √2.
So legs x, x and hypotenuse x√2.

30-60-90 (half an equilateral triangle): sides are x, x√3, 2x.
- shortest side (opposite 30°): x
- middle side (opposite 60°): x√3
- hypotenuse (opposite 90°): 2x

The rule for keeping them straight: always start from the *shortest* side in a 30-60-90. Double it for the hypotenuse, multiply by √3 for the middle.

Working backwards means dividing, and that often needs rationalising. If the hypotenuse of a 45-45-90 is 10, each leg is 10/√2 = 5√2.`,
        complex: `Both triangles are derived rather than memorised facts. The 45-45-90 is half a square cut along a diagonal: with legs x, the Pythagorean theorem gives hypotenuse ~x√2~. The 30-60-90 is half an equilateral triangle of side ~2x~ cut by an altitude, giving legs x and ~√(4x² − x²) = x√3~.

The ratios are ~1 : 1 : √2~ and ~1 : √3 : 2~ respectively, with the 30-60-90 always ordered from the 30° side.

These supply the exact trigonometric values used throughout the rest of mathematics: ~sin 30° = ½~, ~sin 45° = √2/2~, ~sin 60° = √3/2~, and the corresponding cosines and tangents. Knowing the triangles means never memorising that table separately.

Working from the hypotenuse back to a leg requires division, and answers should be rationalised: ~10/√2 = 5√2~. Leaving a radical in a denominator is the most common presentation error in the topic, and decimal approximations lose the exactness that makes these triangles worth using at all.`,
        example: {
          prompt: "A 30-60-90 triangle has hypotenuse 14. Find both legs. Then find the leg of a 45-45-90 with hypotenuse 8.",
          steps: [
            "Hypotenuse is 2x, so x = 7 — the short leg.",
            "Long leg is x√3 = 7√3.",
            "For 45-45-90: leg = hypotenuse/√2 = 8/√2.",
            "Rationalise: 8√2/2 = 4√2.",
          ],
          answer: "Legs 7 and 7√3; the 45-45-90 leg is 4√2.",
        },
        mistakes: [
          "Applying √3 to the hypotenuse instead of to the short leg.",
          "Leaving an answer as 8/√2 rather than rationalising to 4√2.",
        ],
        video: "special right triangles 30 60 90 45 45 90",
        videoAlt: ["special right triangles shortcuts geometry"],
        practice: { unit: "exponents-radicals", skill: "simplifying-radicals" },
        tags: ["special triangles", "30-60-90", "45-45-90"],
      },
      {
        slug: "solving-right-triangles",
        title: "Solving Right Triangles",
        summary: "Trig ratios applied to real heights and distances.",
        level: "Advanced",
        keyIdea: "Pick the ratio containing the two sides you know and want.",
        simple: `Solving a triangle means finding every missing side and angle. In a right triangle you need the three trig ratios:

sin θ = opposite/hypotenuse
cos θ = adjacent/hypotenuse
tan θ = opposite/adjacent

Choosing the right one is the whole skill. Label the sides relative to the angle you are using, see which two are involved, and pick the ratio that contains exactly those.

To find an angle instead, use the inverse: sin⁻¹, cos⁻¹, tan⁻¹.

Two words appear constantly in word problems. An angle of elevation is measured *up* from the horizontal; an angle of depression is measured *down* from it. They are equal to each other for the same line of sight, because the horizontals are parallel and they are alternate interior angles.

Check your calculator is in degrees.`,
        complex: `Solving a right triangle requires one side plus either a second side or an acute angle. With two sides, use an inverse trig function for the angles; with a side and an angle, use a direct ratio for the sides and the complementary relationship for the remaining angle.

The ratios are well defined because all right triangles sharing an acute angle are similar, so their side ratios are invariant — the same similarity argument that makes slope well defined.

Angles of elevation and depression are congruent for a given line of sight, being alternate interior angles between parallel horizontal lines. Depression is measured from the horizontal, not from the vertical, which is the most common setup error in these problems.

The cofunction identity ~sin θ = cos(90° − θ)~ reflects the fact that the opposite side for one acute angle is the adjacent side for the other.

Beyond right triangles, the Law of Sines and Law of Cosines handle oblique cases, with the Law of Sines carrying an ambiguous case for SSA configurations — the same ambiguity that disqualifies SSA as a congruence criterion.`,
        example: {
          prompt: "From a point 40 m from a building, the angle of elevation to the top is 32°. How tall is the building?",
          steps: [
            "The 40 m is adjacent to the angle; the height is opposite.",
            "Opposite and adjacent means tangent: tan 32° = h/40.",
            "h = 40 · tan 32°.",
            "tan 32° ≈ 0.6249.",
          ],
          answer: "About 25 m tall.",
        },
        mistakes: [
          "Measuring an angle of depression from the vertical instead of the horizontal.",
          "Leaving the calculator in radian mode.",
        ],
        video: "solving right triangles angles of elevation and depression",
        videoAlt: ["right triangle trigonometry word problems elevation"],
        practice: null,
        tags: ["trigonometry", "elevation", "solving triangles"],
      },
    ],
  },
  {
    id: "geo-quadrilaterals",
    title: "Quadrilaterals & Polygons",
    blurb:
      "The family tree of four-sided figures, what each one guarantees, and how to prove which is which.",
    topics: [
      {
        slug: "polygon-angle-sums",
        title: "Polygon Angle Sums",
        summary: "Interior angles grow with the number of sides; exterior angles never do.",
        level: "Intro",
        keyIdea: "Interior sum is (n − 2)·180°; the exterior sum is always 360°.",
        simple: `Split a polygon into triangles by drawing every diagonal from one vertex. An n-sided polygon breaks into n − 2 triangles, so its interior angles total:

(n − 2) × 180°

A pentagon gives 3 × 180 = 540°. An octagon gives 6 × 180 = 1080°.

For a *regular* polygon, every angle is equal, so divide by n. Each angle of a regular octagon is 1080 ÷ 8 = 135°.

The exterior angles behave much more simply. They always total 360°, no matter how many sides. Walking once around any convex polygon turns you through one full circle.

So each exterior angle of a regular n-gon is 360/n, and the interior angle is its supplement — often the faster route.`,
        complex: `For a convex n-gon, drawing all diagonals from a single vertex produces ~n − 2~ triangles, giving an interior angle sum of ~(n − 2)·180°~. Each interior angle of a regular n-gon is therefore ~(n − 2)·180°/n~.

The exterior angle sum is 360° for every convex polygon, independent of n, because traversing the boundary rotates the direction of travel through exactly one revolution. Each exterior angle of a regular n-gon is ~360°/n~, and since interior and exterior angles at a vertex form a linear pair, the interior angle is ~180° − 360°/n~ — usually the quicker computation.

Working backwards is a standard question type: given an interior angle, solve ~(n − 2)·180/n = θ~ for n, or more simply ~n = 360/(180 − θ)~. A non-integer result means no such regular polygon exists.

The exterior formula also explains which regular polygons tile the plane: the interior angle must divide 360° exactly, which happens only for the triangle, square and hexagon.`,
        example: {
          prompt: "Each interior angle of a regular polygon is 156°. How many sides does it have?",
          steps: [
            "Exterior angle = 180 − 156 = 24°.",
            "Exterior angles total 360°.",
            "n = 360/24.",
          ],
          answer: "15 sides",
        },
        mistakes: [
          "Using n·180 instead of (n − 2)·180 for the interior sum.",
          "Assuming the exterior sum grows with the number of sides.",
        ],
        video: "polygon interior and exterior angle sum formula",
        videoAlt: ["regular polygon angle sum geometry"],
        practice: null,
        tags: ["polygons", "angle sum", "regular polygons"],
      },
      {
        slug: "properties-of-parallelograms",
        title: "Properties of Parallelograms",
        summary: "Five guarantees you get from one definition.",
        level: "Core",
        keyIdea: "Opposite sides and angles are congruent; the diagonals bisect each other.",
        simple: `A parallelogram is defined by one thing: both pairs of opposite sides are parallel. Everything else follows.

From that single definition you get:
- opposite sides congruent
- opposite angles congruent
- consecutive angles supplementary
- diagonals bisect each other

That last one is easy to misremember. The diagonals cut *each other* in half, but they are not equal to each other and they do not bisect the angles.

Each of these has a converse that proves a quadrilateral *is* a parallelogram. Showing opposite sides congruent, or diagonals bisecting each other, or one pair of sides both parallel and congruent, is enough.

That last test — one pair both parallel and congruent — is often the fastest in coordinate geometry.`,
        complex: `From the definition (both pairs of opposite sides parallel), the properties follow by drawing a diagonal and applying ASA: the diagonal creates two triangles congruent by alternate interior angles and the shared side, and CPCTC then gives congruent opposite sides and angles.

Consecutive angles are supplementary because they are same-side interior angles between parallel lines.

Each property's converse is a valid test for a parallelogram: both pairs of opposite sides congruent; both pairs of opposite angles congruent; diagonals bisecting each other; or one pair of opposite sides both parallel and congruent. Note that one pair parallel and the *other* pair congruent is not sufficient — that admits an isosceles trapezoid.

In coordinate proofs, the efficient route is usually the midpoint test: computing the midpoints of both diagonals and showing they coincide proves the diagonals bisect each other in two calculations, with no slopes or distances required.

A parallelogram's diagonals also divide it into four triangles of equal area, and each diagonal alone bisects its area.`,
        example: {
          prompt: "In parallelogram ABCD, ∠A = (3x + 15)° and ∠C = (5x − 25)°. Find ∠A and ∠B.",
          steps: [
            "∠A and ∠C are opposite, so congruent: 3x + 15 = 5x − 25.",
            "2x = 40, so x = 20.",
            "∠A = 3(20) + 15 = 75°.",
            "∠B is consecutive to ∠A, so supplementary: 180 − 75.",
          ],
          answer: "∠A = 75° and ∠B = 105°",
        },
        mistakes: [
          "Claiming the diagonals of a parallelogram are congruent — that only holds for rectangles.",
          "Setting consecutive angles equal instead of summing them to 180°.",
        ],
        video: "properties of parallelograms proofs geometry",
        videoAlt: ["parallelogram properties diagonals opposite angles"],
        practice: null,
        tags: ["parallelogram", "quadrilaterals", "diagonals"],
      },
      {
        slug: "rectangles-rhombuses-squares",
        title: "Rectangles, Rhombuses & Squares",
        summary: "Three special parallelograms and the diagonal test for each.",
        level: "Core",
        keyIdea: "Rectangles have congruent diagonals; rhombuses have perpendicular diagonals.",
        simple: `All three are parallelograms with something extra.

Rectangle: four right angles. Its diagonals are congruent.
Rhombus: four congruent sides. Its diagonals are perpendicular and bisect the angles.
Square: both at once. It gets every property of both.

The diagonals are the fastest way to tell them apart:
- congruent diagonals → rectangle
- perpendicular diagonals → rhombus
- both → square

Think of the family tree. Every square is a rhombus and a rectangle; every rectangle and rhombus is a parallelogram. It does not run the other way — most rectangles are not squares.

A rhombus's diagonals split it into four congruent right triangles, which is why its area can be found as half the product of the diagonals.`,
        complex: `Each is a parallelogram with an added constraint, and each constraint has an equivalent diagonal characterisation.

A parallelogram is a rectangle if and only if its diagonals are congruent. It is a rhombus if and only if its diagonals are perpendicular, equivalently if and only if each diagonal bisects a pair of opposite angles. A square satisfies both, so its diagonals are congruent, perpendicular and angle-bisecting.

The hierarchy is strict: ~square ⊂ rhombus ⊂ parallelogram~ and ~square ⊂ rectangle ⊂ parallelogram~. Inclusion statements must be read in the right direction — every square is a rectangle, but the converse fails.

A rhombus's perpendicular diagonals give the area formula ~A = ½d₁d₂~, which holds for any quadrilateral with perpendicular diagonals, kites included.

In coordinate geometry the tests are computational: congruent diagonals via the distance formula, perpendicular diagonals via slopes multiplying to −1, and the parallelogram base established first via the midpoint test.`,
        example: {
          prompt: "A quadrilateral has diagonals that bisect each other, are congruent, and are perpendicular. Classify it.",
          steps: [
            "Diagonals bisecting each other → parallelogram.",
            "Congruent diagonals → rectangle.",
            "Perpendicular diagonals → rhombus.",
            "Both a rectangle and a rhombus.",
          ],
          answer: "A square.",
        },
        mistakes: [
          "Saying every rectangle is a square. The inclusion runs the other way.",
          "Assuming a rhombus has congruent diagonals — they are perpendicular, not equal.",
        ],
        video: "rectangle rhombus square properties diagonals",
        videoAlt: ["special parallelograms rhombus rectangle square geometry"],
        practice: null,
        tags: ["rectangle", "rhombus", "square"],
      },
      {
        slug: "trapezoids-and-kites",
        title: "Trapezoids & Kites",
        summary: "The two quadrilaterals that are not parallelograms.",
        level: "Core",
        keyIdea: "A trapezoid's midsegment is the average of the two bases.",
        simple: `A trapezoid has exactly one pair of parallel sides, called the bases. The other two are the legs.

Its midsegment joins the midpoints of the legs, runs parallel to both bases, and its length is the *average* of them:

midsegment = (base₁ + base₂)/2

An isosceles trapezoid has congruent legs, and it gains two properties: base angles are congruent, and the diagonals are congruent.

A kite has two pairs of adjacent congruent sides — adjacent, not opposite, which is what separates it from a parallelogram. Its diagonals are perpendicular, and one diagonal bisects the other.

For both a kite and a rhombus, the area is half the product of the diagonals, because the diagonals meet at right angles.`,
        complex: `A trapezoid has exactly one pair of parallel sides under the exclusive definition used in most US courses; some treatments use the inclusive definition where parallelograms count as trapezoids. Which convention is in force changes the truth of several statements, so it is worth knowing which your course uses.

The midsegment theorem for trapezoids states the midsegment is parallel to both bases with length ~(b₁ + b₂)/2~. It reduces to the triangle midsegment theorem by drawing a diagonal, treating the figure as two triangles.

An isosceles trapezoid has congruent legs, congruent base angles at each base, and congruent diagonals; each of these is also a sufficient condition for a trapezoid to be isosceles. Because its base angles are congruent, it is cyclic — a circle passes through all four vertices.

A kite has two distinct pairs of congruent adjacent sides. Its diagonals are perpendicular, the diagonal between the congruent pairs bisects the other, and exactly one pair of opposite angles is congruent.

The area formula ~A = ½d₁d₂~ applies to any quadrilateral with perpendicular diagonals.`,
        example: {
          prompt: "A trapezoid has bases 12 and 20 and midsegment 3x + 1. Find x.",
          steps: [
            "Midsegment is the average of the bases: (12 + 20)/2 = 16.",
            "3x + 1 = 16.",
            "3x = 15.",
          ],
          answer: "x = 5",
        },
        mistakes: [
          "Adding the bases without halving them for the midsegment.",
          "Defining a kite by opposite congruent sides — they must be adjacent.",
        ],
        video: "trapezoid midsegment kite properties geometry",
        videoAlt: ["isosceles trapezoid and kite properties"],
        practice: null,
        tags: ["trapezoid", "kite", "midsegment"],
      },
      {
        slug: "proving-quadrilaterals",
        title: "Proving Quadrilateral Types",
        summary: "Choosing the least work needed to classify a shape.",
        level: "Advanced",
        keyIdea: "Prove parallelogram first, then add the one property that pins down the type.",
        simple: `To classify a quadrilateral, work in two stages. First establish it is a parallelogram, then add whichever single property identifies the subtype.

On the coordinate plane, three tools do all the work:
- Distance formula → is a side or diagonal congruent?
- Slope → are sides parallel? Are diagonals perpendicular?
- Midpoint formula → do the diagonals bisect each other?

An efficient route for a coordinate proof:
1. Midpoints of both diagonals match → parallelogram.
2. Diagonal lengths equal → rectangle.
3. Diagonal slopes multiply to −1 → rhombus.
4. Both → square.

Compute only what you need. Finding all four side lengths and all four slopes when two midpoints would settle it wastes time and creates chances for arithmetic slips.`,
        complex: `Classification proofs are exercises in choosing an efficient sufficient condition. Any of the parallelogram tests establishes the base type; the diagonal characterisations then distinguish rectangle, rhombus and square with a single additional computation each.

In coordinate proofs the three formulas map onto the three questions: distance answers congruence, slope answers parallelism and perpendicularity, and midpoint answers bisection. The midpoint test is usually the cheapest parallelogram proof, requiring two midpoint computations rather than four distances or four slopes.

For a general placement proof — showing a result holds for *every* figure of a type, not one example — variables are used for coordinates, and the figure should be positioned to simplify the algebra: one vertex at the origin, one side along the x-axis, and coordinates like ~(2a, 0)~ and ~(2b, 2c)~ chosen so midpoints avoid fractions.

In synthetic proofs the analogous efficiency question is which pair of triangles to prove congruent, since a single congruence plus CPCTC usually delivers the needed property.`,
        example: {
          prompt: "A quadrilateral has vertices A(0,0), B(4,3), C(9,3), D(5,0). Classify it.",
          steps: [
            "Slope AB = 3/4, slope DC = 3/4 — parallel.",
            "Slope BC = 0, slope AD = 0 — parallel. So it is a parallelogram.",
            "AB = √(16+9) = 5, and BC = 5 — adjacent sides congruent.",
            "A parallelogram with congruent adjacent sides has all four sides congruent.",
          ],
          answer: "A rhombus (not a square — the sides are not perpendicular).",
        },
        mistakes: [
          "Proving one pair of sides parallel and concluding parallelogram.",
          "Computing every distance and slope when two midpoints would settle the question.",
        ],
        video: "coordinate geometry proving parallelogram rhombus rectangle",
        videoAlt: ["classify quadrilateral coordinate proof distance slope midpoint"],
        practice: { unit: "forms-linear-equations", skill: "parallel-perpendicular" },
        tags: ["coordinate proof", "classification", "quadrilaterals"],
      },
    ],
  },
  {
    id: "geo-circles",
    title: "Circles",
    blurb:
      "Angles, arcs, chords and tangents — a set of theorems that all reduce to one relationship.",
    topics: [
      {
        slug: "circle-vocabulary",
        title: "Circle Vocabulary",
        summary: "Radius, chord, secant, tangent, and the words the theorems depend on.",
        level: "Intro",
        keyIdea: "A tangent touches at exactly one point and is perpendicular to the radius there.",
        simple: `Circle theorems are mostly vocabulary. Get the words right and the theorems become readable.

- Radius: centre to the edge.
- Chord: a segment with both endpoints on the circle.
- Diameter: a chord through the centre. The longest chord, and twice the radius.
- Secant: a *line* through two points of the circle.
- Tangent: a line touching at exactly one point.

The single most used fact: a tangent is perpendicular to the radius drawn to the point of contact. That right angle is what lets you bring in the Pythagorean theorem.

Two more worth knowing: two tangents drawn from the same outside point are congruent, and concentric circles share a centre.`,
        complex: `A circle is the locus of points at a fixed distance r from a centre. Chords, secants and tangents are classified by how many points they share with that locus: two, two, and one respectively.

The Tangent-Radius Theorem states that a tangent is perpendicular to the radius at the point of tangency, and its converse holds — a line perpendicular to a radius at its endpoint on the circle is tangent. It is proved indirectly: any other point of the tangent line lies outside the circle, so the radius is the shortest distance and therefore perpendicular.

The Two Tangents Theorem states that tangent segments from a common external point are congruent, proved by HL on the two right triangles formed with the radii.

The perpendicularity is what makes circle problems computable, since it introduces right triangles with the radius as one leg and the tangent as the other, letting the Pythagorean theorem relate the tangent length to the distance from the centre.

A polygon is inscribed in a circle when all vertices lie on it, and circumscribed about a circle when all sides are tangent to it.`,
        example: {
          prompt: "A tangent from external point P touches circle O at T. OT = 5 and OP = 13. Find PT.",
          steps: [
            "The radius is perpendicular to the tangent at T, so △OTP is right-angled at T.",
            "OP is the hypotenuse: 5² + PT² = 13².",
            "PT² = 169 − 25 = 144.",
          ],
          answer: "PT = 12",
        },
        mistakes: [
          "Treating the tangent as perpendicular to the wrong segment — it meets the radius at the point of contact, not the diameter elsewhere.",
          "Confusing a chord (a segment) with a secant (a line).",
        ],
        video: "circle vocabulary radius chord tangent secant geometry",
        videoAlt: ["tangent radius perpendicular theorem circles"],
        practice: null,
        tags: ["circles", "tangent", "vocabulary"],
      },
      {
        slug: "arcs-and-central-angles",
        title: "Arcs & Central Angles",
        summary: "Measuring a piece of a circle in degrees.",
        level: "Core",
        keyIdea: "A central angle equals the measure of the arc it cuts off.",
        simple: `A central angle has its vertex at the centre. The arc it cuts off has exactly the same degree measure. A 70° central angle intercepts a 70° arc.

Arcs come in sizes:
- Minor arc: less than 180°, named with two letters.
- Major arc: more than 180°, named with three letters so nobody confuses it with the minor one.
- Semicircle: exactly 180°, cut off by a diameter.

Arcs on the same circle add: adjacent arcs combine into a bigger arc, and a full circle is 360°.

Do not confuse arc *measure* with arc *length*. Measure is in degrees and does not care how big the circle is. Length is an actual distance and does. Two circles of different sizes can both have a 60° arc with completely different lengths.`,
        complex: `A central angle's measure equals the measure of its intercepted arc, which is the definition of arc measure rather than a theorem.

Arc addition: adjacent arcs sum, and the arcs of a full circle total 360°. A major arc's measure is ~360° − ~ the corresponding minor arc.

The distinction between arc measure (degrees, scale-invariant) and arc length (a distance, proportional to r) is the conceptual crux, and it is what makes radian measure natural: dividing arc length by radius gives a scale-free number, ~θ = s/r~.

In congruent circles, or within the same circle, congruent central angles intercept congruent arcs and congruent chords — all three congruences are equivalent, which is why chord problems can be converted into arc problems and back.

The three-letter naming convention for major arcs exists because two letters alone are ambiguous: the same two endpoints bound both a minor and a major arc.`,
        example: {
          prompt: "In circle O, central angle AOB = 84°. Find the measure of minor arc AB and major arc ACB.",
          steps: [
            "Central angle equals its intercepted arc.",
            "Minor arc AB = 84°.",
            "Major arc = 360 − 84.",
          ],
          answer: "Minor arc AB = 84°, major arc ACB = 276°",
        },
        mistakes: [
          "Treating arc measure and arc length as the same quantity.",
          "Naming a major arc with only two letters, leaving it ambiguous.",
        ],
        video: "central angles and arcs circle geometry",
        videoAlt: ["arc measure central angle major minor arc"],
        practice: null,
        tags: ["arcs", "central angles", "circles"],
      },
      {
        slug: "inscribed-angles",
        title: "Inscribed Angles",
        summary: "Half the arc, and the right angle inside every semicircle.",
        level: "Core",
        keyIdea: "An inscribed angle is half its intercepted arc.",
        simple: `An inscribed angle has its vertex *on* the circle rather than at the centre. Its measure is half the arc it intercepts.

So a 100° arc gives a 50° inscribed angle. Compare that to a central angle, which gets the full 100°.

Two consequences do a lot of work:

Any inscribed angle in a semicircle is a right angle. If a triangle's longest side is a diameter, the angle opposite it is 90°.

Inscribed angles intercepting the *same* arc are congruent, no matter where their vertices sit on the circle.

And for a quadrilateral inscribed in a circle, opposite angles are supplementary.

The habit that prevents errors: check where the vertex is. On the circle means halve the arc. At the centre means do not.`,
        complex: `The Inscribed Angle Theorem states that an inscribed angle measures half its intercepted arc. The proof splits into three cases by where the centre lies relative to the angle, with the case where one side is a diameter proved via the isosceles triangle formed by two radii and the exterior angle theorem; the other cases follow by adding or subtracting.

Corollaries: an angle inscribed in a semicircle is right (Thales' theorem); inscribed angles intercepting the same arc are congruent; and opposite angles of a cyclic quadrilateral are supplementary, since their intercepted arcs together make the full 360°.

The tangent-chord angle, formed by a chord and a tangent at its endpoint, is also half its intercepted arc — the limiting case of an inscribed angle as one endpoint approaches the vertex.

These unify with the vertex-position rule that governs all circle angles: a vertex at the centre gives the full arc, on the circle gives half the arc, inside gives half the *sum* of the two intercepted arcs, and outside gives half their *difference*.`,
        example: {
          prompt: "Inscribed angle ABC intercepts arc AC = 116°. Find ∠ABC. If AC were a diameter, what would ∠ABC be?",
          steps: [
            "Inscribed angle is half its arc: 116/2.",
            "∠ABC = 58°.",
            "A diameter cuts off a 180° arc.",
            "Half of 180.",
          ],
          answer: "58°; and 90° if AC is a diameter.",
        },
        mistakes: [
          "Giving the inscribed angle the full arc measure, as if it were central.",
          "Doubling instead of halving — the arc is the larger of the two numbers.",
        ],
        video: "inscribed angle theorem circle geometry",
        videoAlt: ["inscribed angles semicircle cyclic quadrilateral"],
        practice: null,
        tags: ["inscribed angle", "circles", "arcs"],
      },
      {
        slug: "tangents-and-secants",
        title: "Angles from Tangents & Secants",
        summary: "Vertex inside gives half the sum; vertex outside gives half the difference.",
        level: "Advanced",
        keyIdea: "Vertex inside: half the sum of arcs. Vertex outside: half the difference.",
        simple: `Every circle angle rule depends on one thing: where the vertex is.

- At the centre: the angle equals the arc.
- On the circle: half the arc.
- Inside (two chords crossing): half the *sum* of the two intercepted arcs.
- Outside (two secants, two tangents, or one of each): half the *difference* of the two intercepted arcs.

That is the whole family, and it is far easier than memorising six separate theorems.

Notice the pattern: as the vertex moves from the centre outward, the angle shrinks. Full arc, then half, then half the sum, then half the difference.

For the outside case, always subtract the near arc from the far one. A negative answer means you did it backwards.`,
        complex: `The four cases are unified by vertex position relative to the circle.

Centre: ~θ = arc~. On the circle: ~θ = ½·arc~. Interior intersection of two chords: ~θ = ½(arc₁ + arc₂)~, where the arcs are the two intercepted by the vertical pair. Exterior: ~θ = ½|arc_far − arc_near|~.

The interior and exterior formulas both follow from the Inscribed Angle Theorem plus the Exterior Angle Theorem applied to an auxiliary triangle formed by joining two endpoints of the chords or secants — each is a sum or difference of two inscribed angles.

The exterior case covers three configurations (two secants, two tangents, or a tangent and a secant) with the same formula, since a tangent is the limiting case of a secant whose two intersection points coincide, making its two "endpoints" identical.

For two tangents from an external point, the two arcs sum to 360°, so the angle simplifies to ~180° − arc_near~, giving the useful fact that the angle between two tangents and the near arc are supplementary.`,
        example: {
          prompt: "Two secants meet outside a circle, intercepting arcs of 130° and 40°. Find the angle. Then find the angle if two chords met inside intercepting the same arcs.",
          steps: [
            "Outside: half the difference.",
            "(130 − 40)/2 = 45°.",
            "Inside: half the sum.",
            "(130 + 40)/2 = 85°.",
          ],
          answer: "45° from outside, 85° from inside.",
        },
        mistakes: [
          "Adding the arcs for an exterior vertex, or subtracting them for an interior one.",
          "Subtracting the far arc from the near one and reporting a negative angle.",
        ],
        video: "angles formed by chords secants tangents circle",
        videoAlt: ["circle angle theorems inside outside vertex"],
        practice: null,
        tags: ["secants", "tangents", "circle angles"],
      },
      {
        slug: "chords-and-arcs",
        title: "Chords, Arcs & Segment Lengths",
        summary: "Perpendicular bisectors through the centre, and the products that stay equal.",
        level: "Advanced",
        keyIdea: "A radius perpendicular to a chord bisects it.",
        simple: `Two chord facts come up constantly.

A radius or diameter perpendicular to a chord bisects that chord and its arc. This creates a right triangle with the radius as hypotenuse, half the chord as one leg, and the distance from the centre as the other — which means the Pythagorean theorem finishes the problem.

Also: chords equally far from the centre are congruent, and longer chords sit closer to the centre. The diameter, at distance zero, is the longest.

Then there are the product rules for lengths:
- Two chords crossing inside: the products of their pieces are equal.
- Two secants from outside: (whole)(outside part) is the same for both.
- Tangent and secant: tangent² = (whole secant)(outside part).

For the outside rules, always use the *whole* secant, not just the far piece.`,
        complex: `The perpendicular from the centre to a chord bisects both the chord and its arc, and conversely the perpendicular bisector of any chord passes through the centre — which is how a circle's centre is reconstructed from three points on it.

This produces a right triangle relating radius r, half-chord ~c/2~ and centre distance d by ~r² = d² + (c/2)²~, the standard computational tool for chord problems.

Congruent chords are equidistant from the centre, and conversely; chord length decreases as centre distance increases.

The length relationships are all instances of the power of a point. For a point P and a circle, the product of the signed distances along any line through P to the two intersection points is constant, equal to ~d² − r²~ where d is the distance from P to the centre. Interior points give the two-chord rule ~ab = cd~; exterior points give the secant-secant rule ~(whole₁)(outside₁) = (whole₂)(outside₂)~ and, in the limiting case where the two intersections coincide, the tangent-secant rule ~t² = (whole)(outside)~.

The recurring error is substituting the external segment where the whole secant belongs.`,
        example: {
          prompt: "A chord of length 24 sits 5 units from the centre. Find the radius.",
          steps: [
            "The perpendicular from the centre bisects the chord: half-chord = 12.",
            "Right triangle with legs 5 and 12, hypotenuse r.",
            "r² = 25 + 144 = 169.",
          ],
          answer: "r = 13",
        },
        mistakes: [
          "Using the full chord length as a leg instead of half of it.",
          "Using only the external part of a secant where the whole secant is required.",
        ],
        video: "chord properties circle perpendicular bisector power of a point",
        videoAlt: ["intersecting chords secants tangent segment lengths"],
        practice: null,
        tags: ["chords", "power of a point", "circles"],
      },
      {
        slug: "arc-length-and-sector-area",
        title: "Arc Length & Sector Area",
        summary: "Taking a fraction of the circumference or of the area.",
        level: "Core",
        keyIdea: "Multiply the whole circle by θ/360.",
        simple: `A sector is a slice of a circle. An arc is the curved edge of that slice. Both are just fractions of the whole.

The fraction is θ/360, where θ is the central angle.

Arc length = (θ/360) × 2πr
Sector area = (θ/360) × πr²

A 90° sector is a quarter of the circle: a quarter of the circumference and a quarter of the area.

Watch the units. Arc length is a distance (cm), sector area is a space (cm²). If your answer has an r² in it, it is an area.

A segment — different from a sector — is the region between a chord and its arc. Find it by taking the sector and subtracting the triangle formed by the two radii and the chord.`,
        complex: `Arc length and sector area are proportional parts of the whole circle, with proportion ~θ/360~ in degrees:

~s = (θ/360)·2πr    A_sector = (θ/360)·πr²~

In radians both simplify, since ~θ_rad = 2π(θ/360)~:

~s = rθ    A_sector = ½r²θ~

The disappearance of the conversion constant is the practical reason radians are preferred in analytic work.

A circular segment is the region bounded by a chord and its arc, computed as the sector minus the triangle: ~A = ½r²(θ − sin θ)~ in radians. That subtraction is the step most often omitted.

Dimensionally, arc length is degree 1 in r and sector area degree 2, so scaling a circle by k scales arc lengths by k and sector areas by ~k²~ — the same dimensional rule as for similar figures generally.

Answers are normally left in terms of π unless a decimal is requested, since ~6π~ is exact where 18.85 is not.`,
        example: {
          prompt: "A circle has radius 9. Find the arc length and sector area for a 120° central angle, in terms of π.",
          steps: [
            "Fraction: 120/360 = 1/3.",
            "Circumference = 2π(9) = 18π, so arc = 18π/3 = 6π.",
            "Area = π(81) = 81π.",
            "Sector = 81π/3.",
          ],
          answer: "Arc length 6π, sector area 27π",
        },
        mistakes: [
          "Using the same formula for both, forgetting the area needs r².",
          "Computing a segment as the sector without subtracting the triangle.",
        ],
        video: "arc length and sector area formulas circle",
        videoAlt: ["arc length sector area radians degrees"],
        practice: null,
        tags: ["arc length", "sector", "circles"],
      },
      {
        slug: "equation-of-a-circle",
        title: "The Equation of a Circle",
        summary: "The distance formula, rearranged into a locus.",
        level: "Core",
        keyIdea: "(x − h)² + (y − k)² = r² for centre (h, k) and radius r.",
        simple: `A circle is every point sitting a fixed distance from the centre. Writing that with the distance formula and squaring both sides gives:

(x − h)² + (y − k)² = r²

with centre (h, k) and radius r.

Two things to watch. The signs flip: (x − 3)² means h = 3, and (y + 2)² means k = −2. And the right side is r², so a 25 there means the radius is 5, not 25.

If the equation is expanded instead — something like x² + y² − 6x + 4y − 12 = 0 — complete the square on the x terms and the y terms separately to get back to the useful form.

To test whether a point is inside, on, or outside, substitute it: less than r² is inside, equal is on, greater is outside.`,
        complex: `The equation follows directly from the distance formula: the locus of points at distance r from ~(h,k)~ satisfies ~√((x−h)² + (y−k)²) = r~, and squaring gives the standard form ~(x−h)² + (y−k)² = r²~. It is the Pythagorean theorem stated as a locus.

The general form ~x² + y² + Dx + Ey + F = 0~ converts to standard form by completing the square in both variables. The result ~(x + D/2)² + (y + E/2)² = (D² + E² − 4F)/4~ has a real circle only when the right side is positive; zero gives a single point and negative gives no real graph.

Substituting a point classifies its position: the left-hand side evaluates to less than, equal to, or greater than ~r²~ for interior, boundary and exterior points respectively.

The circle is the conic section with equal coefficients on ~x²~ and ~y²~ and no ~xy~ term, and is the special case of an ellipse with equal axes. Combining it with a line and solving the resulting system determines whether the line is a secant (two solutions), tangent (one) or external (none) — an algebraic version of the tangent condition.`,
        example: {
          prompt: "Write the equation of the circle with centre (−3, 4) passing through (1, 7).",
          steps: [
            "Radius = distance from centre to the point: √((1+3)² + (7−4)²).",
            "= √(16 + 9) = 5.",
            "Centre (−3, 4) gives (x + 3)² + (y − 4)².",
            "Right side is r² = 25.",
          ],
          answer: "(x + 3)² + (y − 4)² = 25",
        },
        mistakes: [
          "Reading the radius directly off the right-hand side without taking the square root.",
          "Getting the centre's signs backwards, reading (x + 3)² as h = 3.",
        ],
        video: "equation of a circle center radius standard form",
        videoAlt: ["writing equation of circle completing the square"],
        practice: null,
        tags: ["circle equation", "coordinate geometry", "distance"],
      },
    ],
  },
  {
    id: "geo-solids",
    title: "Area, Volume & Solids",
    blurb:
      "Measuring flat figures precisely, then moving into three dimensions.",
    topics: [
      {
        slug: "areas-of-regular-polygons",
        title: "Areas of Regular Polygons",
        summary: "The apothem, and why the formula is really about triangles.",
        level: "Core",
        keyIdea: "A = ½ × apothem × perimeter.",
        simple: `A regular polygon splits into congruent triangles, one per side, all meeting at the centre. The apothem is the height of each of those triangles — the perpendicular distance from the centre to the middle of a side.

That gives the formula:

A = ½ × apothem × perimeter

It is the triangle area formula applied n times and tidied up.

Do not mix up the apothem with the radius. The apothem reaches the middle of a side; the radius reaches a vertex. The radius is always longer.

When only the side length is given, find the apothem with trigonometry: the central angle for each triangle is 360/n, half of it sits in the right triangle, and the apothem is the adjacent leg.

For composite shapes, break the figure into pieces you know and add or subtract.`,
        complex: `A regular n-gon decomposes into n congruent isosceles triangles with apex at the centre, each of base s and height a (the apothem). Total area is ~n·(½sa) = ½a·(ns) = ½aP~ where P is the perimeter.

The apothem is the inradius and the distance to a vertex is the circumradius; they satisfy ~a = R·cos(180°/n)~ and ~s = 2R·sin(180°/n)~. Each central triangle has apex angle ~360°/n~, and bisecting it produces the right triangle from which the apothem is computed as ~a = (s/2)/tan(180°/n)~.

As ~n → ∞~, the apothem approaches the radius and ~½aP~ approaches ~½r·2πr = πr²~, recovering the circle's area — the classical exhaustion argument.

For composite figures, area is additive over non-overlapping regions, so decomposition and subtraction handle any shape built from known pieces. Shaded-region problems are almost always a subtraction, most often a polygon minus an inscribed circle or a sector.`,
        example: {
          prompt: "A regular hexagon has side 8. Find its apothem and area.",
          steps: [
            "Central angle per triangle = 360/6 = 60°, halved gives 30°.",
            "Apothem = (8/2)/tan(30°) = 4√3.",
            "Perimeter = 48.",
            "A = ½(4√3)(48).",
          ],
          answer: "Apothem 4√3 ≈ 6.93; area 96√3 ≈ 166.3",
        },
        mistakes: [
          "Using the distance to a vertex as the apothem.",
          "Forgetting the ½ in the formula.",
        ],
        video: "area of regular polygons apothem formula",
        videoAlt: ["apothem regular polygon area geometry"],
        practice: null,
        tags: ["area", "apothem", "regular polygons"],
      },
      {
        slug: "surface-area-of-solids",
        title: "Surface Area of Solids",
        summary: "Unfolding a shape and adding up the faces.",
        level: "Core",
        keyIdea: "Surface area = lateral area + the bases.",
        simple: `Surface area is how much material would wrap a solid. The reliable method is to imagine unfolding it into a flat net and adding the pieces.

- Prism: two bases plus the lateral faces. Lateral area = perimeter of base × height.
- Cylinder: two circles plus a rectangle that wraps around. SA = 2πr² + 2πrh.
- Pyramid: base plus triangular faces. Lateral area = ½ × base perimeter × slant height.
- Cone: circle plus a sector. SA = πr² + πrℓ.
- Sphere: SA = 4πr², which is exactly four of its great circles.

The trap is slant height. For pyramids and cones the *slant* height goes on the sloping face, not the vertical height. If you are given the vertical height, get the slant height with the Pythagorean theorem first.`,
        complex: `Surface area is computed by decomposition into a net. For a prism or cylinder, the lateral surface unrolls into a rectangle of width equal to the base perimeter (or circumference) and height h, giving ~LA = Ph~ and ~LA = 2πrh~.

For a regular pyramid, the lateral faces are congruent triangles of base s and height ℓ (the slant height), so ~LA = ½Pℓ~. For a cone the lateral surface unrolls into a circular sector, giving ~LA = πrℓ~.

The slant height relates to the vertical height by ~ℓ = √(h² + r²)~ for a cone, and ~ℓ = √(h² + a²)~ for a pyramid, where a is the base's apothem. Substituting h for ℓ is the dominant error in the topic.

The sphere's ~SA = 4πr²~ has no elementary net, since a sphere is not developable — the reason all flat world maps distort. It satisfies ~dV/dr = SA~, mirroring the circle's ~dA/dr = C~.

Under a similarity of ratio k, surface areas scale by ~k²~ and volumes by ~k³~.`,
        example: {
          prompt: "A cone has radius 6 and vertical height 8. Find its total surface area in terms of π.",
          steps: [
            "Slant height: ℓ = √(6² + 8²) = √100 = 10.",
            "Lateral: πrℓ = π(6)(10) = 60π.",
            "Base: πr² = 36π.",
            "Total = 60π + 36π.",
          ],
          answer: "96π square units",
        },
        mistakes: [
          "Using the vertical height in place of the slant height for a cone or pyramid.",
          "Including two bases for a pyramid or cone, which have only one.",
        ],
        video: "surface area of prisms cylinders cones pyramids spheres",
        videoAlt: ["surface area formulas solids slant height"],
        practice: null,
        tags: ["surface area", "solids", "slant height"],
      },
      {
        slug: "volume-of-solids",
        title: "Volume of Solids",
        summary: "Base area times height, and the one-third rule for anything pointed.",
        level: "Core",
        keyIdea: "Prisms and cylinders: V = Bh. Pyramids and cones: V = ⅓Bh.",
        simple: `If a solid has the same cross-section all the way up, its volume is simply the base area times the height:

V = Bh

That covers every prism and every cylinder. For a cylinder, B = πr², so V = πr²h.

Anything that narrows to a point holds exactly one third as much:

V = ⅓Bh

for pyramids and cones. Same base, same height, one third the volume — and that is worth remembering because it is easy to check against intuition.

The sphere is its own case: V = (4/3)πr³.

Use the *vertical* height here, not the slant height. Slant height belongs to surface area; volume always uses the perpendicular height.

A slanted (oblique) solid has the same volume as an upright one with the same base and height.`,
        complex: `For any solid with congruent parallel cross-sections, ~V = Bh~. Cavalieri's principle generalises this: two solids of equal height whose cross-sections have equal area at every level have equal volume, which is why an oblique prism matches the corresponding right prism.

Pyramids and cones satisfy ~V = ⅓Bh~. The factor arises because the cross-sectional area shrinks quadratically with height, and ~∫₀ʰ B(1 − x/h)² dx = Bh/3~. Three congruent pyramids assemble into a cube, which is the standard non-calculus demonstration.

The sphere's ~V = (4/3)πr³~ follows from Cavalieri applied to a hemisphere and a cylinder with an inscribed cone removed.

Volume uses the perpendicular height throughout; slant height appears only in lateral surface area.

Under a similarity of ratio k, volume scales by ~k³~ while surface area scales by ~k²~. The resulting fall in surface-area-to-volume ratio as objects grow is why large animals overheat less easily and why crushed ice melts faster than a block.`,
        example: {
          prompt: "A cone and a cylinder both have radius 5 and height 12. Find each volume and their ratio.",
          steps: [
            "Cylinder: V = πr²h = π(25)(12) = 300π.",
            "Cone: V = ⅓πr²h = 100π.",
            "Ratio cone : cylinder = 100π : 300π.",
          ],
          answer: "Cylinder 300π, cone 100π — the cone is exactly one third.",
        },
        mistakes: [
          "Using slant height instead of vertical height in a volume formula.",
          "Omitting the ⅓ for a cone or pyramid.",
        ],
        video: "volume of prisms cylinders pyramids cones spheres",
        videoAlt: ["volume formulas solids geometry explained"],
        practice: null,
        tags: ["volume", "solids", "cavalieri"],
      },
      {
        slug: "cross-sections-and-rotations",
        title: "Cross-Sections & Solids of Revolution",
        summary: "Slicing a solid, and spinning a flat shape into one.",
        level: "Advanced",
        keyIdea: "Slicing reduces dimension by one; rotating raises it by one.",
        simple: `Two ways to move between two and three dimensions.

Slicing: cut a solid with a plane and look at the flat shape you expose. A cylinder cut horizontally gives a circle; cut vertically it gives a rectangle. A cube can give a triangle, square, rectangle, pentagon or even a hexagon depending on the angle.

Rotating: spin a flat shape around a line and it sweeps out a solid.
- A rectangle spun about one side gives a cylinder.
- A right triangle spun about a leg gives a cone.
- A semicircle spun about its diameter gives a sphere.

The axis matters. Spin the same rectangle about its other side and you get a cylinder with different dimensions. Spin it about a line *outside* the shape and you get a ring rather than a solid.

Working out which solid you get, and its radius and height, is most of these problems.`,
        complex: `A cross-section is the intersection of a solid with a plane, and its shape depends on the plane's orientation. Cross-sections parallel to a prism's base are congruent to the base; oblique planes produce other figures. A cube admits triangular, quadrilateral, pentagonal and hexagonal cross-sections, the regular hexagon arising from the plane through the midpoints of six edges.

Cross-sections parallel to the base of a pyramid or cone are similar to the base with ratio equal to the fractional distance from the apex, which is exactly the quadratic shrinking that produces the ⅓ factor in the volume formula.

A solid of revolution is generated by rotating a plane region about an axis. The generating region's distance from the axis determines the radius, and its extent along the axis the height. Rotating a region not touching the axis produces a torus or annular solid rather than a simple one.

This is the geometric foundation of the disc and shell methods of integral calculus, where the volume is ~∫πr(x)² dx~ — a continuous version of stacking cross-sections.`,
        example: {
          prompt: "A right triangle with legs 3 and 4 is rotated about the leg of length 4. Describe and measure the solid.",
          steps: [
            "Rotating a right triangle about a leg gives a cone.",
            "The axis leg becomes the height: h = 4.",
            "The other leg sweeps the base: r = 3.",
            "V = ⅓π(9)(4).",
          ],
          answer: "A cone with r = 3, h = 4 and volume 12π.",
        },
        mistakes: [
          "Swapping radius and height by rotating about the wrong leg.",
          "Assuming every cross-section of a solid is congruent to its base.",
        ],
        video: "cross sections of solids and solids of revolution",
        videoAlt: ["rotating 2d shapes into 3d solids cross sections"],
        practice: null,
        tags: ["cross-sections", "revolution", "solids"],
      },
      {
        slug: "similar-solids",
        title: "Similar Solids",
        summary: "Scale by k and volume grows by k³.",
        level: "Advanced",
        keyIdea: "Lengths scale by k, areas by k², volumes by k³.",
        simple: `Two solids are similar if one is a scaled copy of the other — same shape, all corresponding lengths in the same ratio k.

The three scaling rules:
- lengths (edges, radii, heights) scale by k
- surface areas scale by k²
- volumes scale by k³

So doubling every dimension gives 4 times the surface area and 8 times the volume.

Working backwards is the common exam question. If two similar solids have volumes in the ratio 27:8, then k³ = 27/8, so k = 3/2, and the surface areas are in ratio 9:4.

The rule of thumb: to go from a volume ratio back to a length ratio, take the cube root. From an area ratio, take the square root.

This is why a scale model weighs so much less than the scale suggests, and why doubling a recipe's pan size does not double the cooking time.`,
        complex: `Similar solids have congruent corresponding angles and all corresponding lengths in a constant ratio k. Under such a similarity, any length scales by k, any area by ~k²~ and any volume by ~k³~ — the exponent being the measurement's dimension.

Consequently the ratios interconvert: ~k = √(A₁/A₂) = ∛(V₁/V₂)~, which is how a length ratio is recovered from area or volume data.

The physical consequences are substantial. Since strength depends on cross-sectional area (~k²~) while weight depends on volume (~k³~), the strength-to-weight ratio falls as ~1/k~ — the square-cube law, which limits how large a structure or organism of a given design can be. It also explains why small animals lose heat quickly, having high surface-area-to-volume ratio.

Care is required with the word "similar": all spheres and all cubes are similar to one another, but two cylinders are similar only if their radius-to-height ratios match. Similarity is not implied by sharing a shape name.`,
        example: {
          prompt: "Two similar cylinders have volumes 54π and 128π. Find the ratio of their radii and surface areas.",
          steps: [
            "Volume ratio: 54/128 = 27/64.",
            "k = ∛(27/64) = 3/4.",
            "Radii are in ratio 3:4.",
            "Surface areas scale by k² = 9/16.",
          ],
          answer: "Radii 3:4, surface areas 9:16",
        },
        mistakes: [
          "Taking the square root of a volume ratio to get the scale factor.",
          "Assuming two cylinders are similar just because both are cylinders.",
        ],
        video: "similar solids scale factor volume surface area ratio",
        videoAlt: ["similar solids ratio of volumes cube root"],
        practice: null,
        tags: ["similarity", "scale factor", "volume ratio"],
      },
    ],
  },
  {
    id: "geo-coordinate",
    title: "Coordinate Geometry & Transformations",
    blurb:
      "Where geometry and algebra meet: proving theorems with formulas, and defining congruence by motion.",
    topics: [
      {
        slug: "distance-and-midpoint-formulas",
        title: "Distance & Midpoint Formulas",
        summary: "The Pythagorean theorem and an average, doing most of coordinate geometry.",
        level: "Intro",
        keyIdea: "Distance is Pythagoras on the gaps; midpoint is the average of the coordinates.",
        simple: `Two formulas cover most coordinate geometry.

Distance: d = √((x₂ − x₁)² + (y₂ − y₁)²)

That is just the Pythagorean theorem. The horizontal gap and the vertical gap are the legs of a right triangle, and the distance is the hypotenuse.

Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2)

Average the x's, average the y's. The answer is a point, so it needs both coordinates.

Because both differences get squared, the order of subtraction does not matter for distance. It very much does for slope.

A common variant gives you the midpoint and one endpoint and asks for the other. Do not average — work backwards: the midpoint is as far from the known endpoint as the unknown one is, so double the midpoint and subtract.`,
        complex: `The distance formula is the Pythagorean theorem applied to the legs ~|x₂ − x₁|~ and ~|y₂ − y₁|~, so ~d = √((x₂−x₁)² + (y₂−y₁)²)~. Squaring removes any sign dependence, making subtraction order irrelevant.

The midpoint is the componentwise arithmetic mean, ~((x₁+x₂)/2, (y₁+y₂)/2)~, the ~t = ½~ case of the section formula ~(x₁ + t(x₂−x₁), y₁ + t(y₂−y₁))~ which locates any point dividing a segment in a given ratio.

For the missing-endpoint problem, solving ~(x₁ + x₂)/2 = m_x~ gives ~x₂ = 2m_x − x₁~.

Both formulas extend to three dimensions by adding a z term, and the distance formula generalises to any dimension as the Euclidean norm.

Together with slope, these are the three tools of coordinate proof: distance settles congruence, midpoint settles bisection, and slope settles parallelism and perpendicularity. Choosing which to compute — rather than computing all of them — is what makes a coordinate proof efficient.`,
        example: {
          prompt: "M(3, −1) is the midpoint of AB with A(−2, 5). Find B, then find AB.",
          steps: [
            "x of B: 2(3) − (−2) = 8.",
            "y of B: 2(−1) − 5 = −7. So B(8, −7).",
            "AB = √((8+2)² + (−7−5)²) = √(100 + 144).",
            "= √244 = 2√61.",
          ],
          answer: "B(8, −7) and AB = 2√61 ≈ 15.6",
        },
        mistakes: [
          "Averaging the midpoint with the known endpoint when finding the missing endpoint.",
          "Forgetting to square both differences before adding.",
        ],
        video: "distance formula and midpoint formula coordinate geometry",
        videoAlt: ["distance midpoint formula examples geometry"],
        practice: { unit: "linear-equations-graphs", skill: "coordinate-plane" },
        tags: ["distance", "midpoint", "coordinate geometry"],
      },
      {
        slug: "coordinate-proofs",
        title: "Coordinate Proofs",
        summary: "Proving a theorem for every case by using variables instead of numbers.",
        level: "Advanced",
        keyIdea: "Place the figure conveniently, then let the algebra do the proving.",
        simple: `A coordinate proof puts a figure on the grid and proves something with formulas rather than with a two-column argument.

The critical move is placement. Put a vertex at the origin and a side along the x-axis. That kills as many variables as possible and makes the algebra manageable.

Use variables, not numbers. Proving something for the specific triangle (0,0), (4,0), (2,6) shows it holds for that one triangle. Using (0,0), (2a,0), (2b,2c) proves it for all of them.

Choose coefficients that keep midpoints clean. Writing 2a instead of a means the midpoint is a rather than a/2, which saves fractions throughout.

Then match the tool to the claim: distance for congruent, slope for parallel or perpendicular, midpoint for bisects.`,
        complex: `A coordinate proof establishes a general result by assigning variable coordinates and verifying the claim algebraically. Generality requires that the placement impose no conditions beyond the figure's definition — placing a triangle at ~(0,0)~, ~(2a,0)~, ~(2b,2c)~ is fully general, since translation and rotation are rigid motions that preserve everything being proved, whereas placing it at ~(0,0)~, ~(2a,0)~, ~(a,2c)~ silently assumes isosceles.

Strategic placement uses the available rigid motions to zero out coordinates: one vertex at the origin and one side along an axis costs nothing and removes three variables. Doubling coefficients avoids fractions in midpoints.

The tool follows the claim: distance for congruence, slope for parallelism (equal) and perpendicularity (product −1), midpoint for bisection, and the midpoint of both diagonals for parallelogram tests.

Coordinate proofs are often shorter than synthetic ones — the triangle midsegment theorem takes three lines — but they are less illuminating about why a result holds, which is why both methods are taught.`,
        example: {
          prompt: "Prove the diagonals of a parallelogram bisect each other, using coordinates.",
          steps: [
            "Place it generally: A(0,0), B(a,0), C(a+b, c), D(b, c).",
            "Midpoint of AC: ((a+b)/2, c/2).",
            "Midpoint of BD: ((a+b)/2, c/2).",
            "The midpoints coincide.",
          ],
          answer: "Both diagonals share a midpoint, so each bisects the other.",
        },
        mistakes: [
          "Using specific numbers, which proves only one case.",
          "Placing the figure so that it accidentally assumes an extra property such as isosceles or right.",
        ],
        video: "coordinate proofs geometry placing figures variables",
        videoAlt: ["coordinate geometry proof parallelogram diagonals"],
        practice: null,
        tags: ["coordinate proof", "algebra", "generality"],
      },
      {
        slug: "rigid-motions-and-symmetry",
        title: "Rigid Motions & Symmetry",
        summary: "Translations, reflections, rotations, and the symmetry they reveal.",
        level: "Core",
        keyIdea: "Rigid motions preserve distance, so the image is always congruent.",
        simple: `Three motions preserve size and shape:

- Translation: slide. (x, y) → (x + h, y + k)
- Reflection: flip over a line. Over the x-axis: (x, y) → (x, −y). Over the y-axis: (x, −y)... careful — over the y-axis it is (−x, y). Over y = x: (y, x).
- Rotation about the origin: 90° anticlockwise is (x, y) → (−y, x); 180° is (−x, −y); 270° anticlockwise is (y, −x).

All three produce a congruent image, which is exactly why congruence can be *defined* by them.

A figure has line symmetry if some reflection maps it onto itself, and rotational symmetry if some rotation under 360° does. A regular n-gon has n lines of symmetry and rotational symmetry every 360/n degrees.

Composing two reflections over parallel lines gives a translation; over intersecting lines it gives a rotation.`,
        complex: `The plane isometries are translations, rotations, reflections and glide reflections. Each preserves distance, and hence angle measure, collinearity, betweenness and area.

Coordinate rules for the common cases: translation ~(x,y) → (x+h, y+k)~; reflection across the x-axis ~(x,−y)~, across the y-axis ~(−x,y)~, across ~y = x~ ~(y,x)~; rotation about the origin by 90° anticlockwise ~(−y,x)~, by 180° ~(−x,−y)~, by 270° anticlockwise ~(y,−x)~.

Isometries are classified by orientation: translations and rotations are direct (orientation-preserving), while reflections and glide reflections are opposite. Composing an even number of reflections yields a direct isometry, an odd number an opposite one — and every plane isometry is a composition of at most three reflections.

Composition of reflections across two parallel lines gives a translation by twice the distance between them; across two intersecting lines it gives a rotation about the intersection by twice the angle between them.

The symmetries of a figure form a group under composition; for a regular n-gon this is the dihedral group of order ~2n~, comprising n rotations and n reflections.`,
        example: {
          prompt: "Point P(4, −2) is reflected over the y-axis, then rotated 90° anticlockwise about the origin. Find the image.",
          steps: [
            "Reflection over the y-axis: (4, −2) → (−4, −2).",
            "Rotation 90° anticlockwise: (x, y) → (−y, x).",
            "(−4, −2) → (2, −4).",
          ],
          answer: "(2, −4)",
        },
        mistakes: [
          "Swapping the two axis-reflection rules — reflecting over the x-axis negates y, not x.",
          "Applying the transformations in the wrong order; composition is not commutative.",
        ],
        video: "rigid motions transformations coordinate rules symmetry",
        videoAlt: ["reflections rotations translations coordinate rules"],
        practice: null,
        tags: ["transformations", "symmetry", "isometry"],
      },
      {
        slug: "dilations-and-similarity-transformations",
        title: "Dilations & Similarity Transformations",
        summary: "The one transformation that changes size, and what it preserves.",
        level: "Core",
        keyIdea: "A dilation scales distance from a centre by k, preserving angles.",
        simple: `A dilation resizes a figure from a fixed centre by a scale factor k. From the origin, the rule is simply:

(x, y) → (kx, ky)

If k > 1 the figure grows; if 0 < k < 1 it shrinks. A negative k also flips it through the centre.

Dilations are the odd one out. They preserve angles and parallelism, so the shape stays the same, but they change every length. The image is therefore similar to the original, not congruent — unless k = 1.

Because angles survive, slope survives too: a dilated line is parallel to the original, or is the same line if it passes through the centre.

Combining rigid motions with a dilation gives a similarity transformation, and that composition is exactly what "similar" means: two figures are similar when some sequence of rigid motions plus a dilation maps one onto the other.`,
        complex: `A dilation with centre C and scale factor ~k ≠ 0~ maps each point P to ~P′~ on ray ~CP~ with ~CP′ = |k|·CP~, and on the opposite ray when ~k < 0~. Centred at the origin the rule is ~(x,y) → (kx, ky)~; centred at ~(a,b)~ it is ~(a + k(x−a), b + k(y−b))~.

Dilations preserve angle measure, parallelism, collinearity and betweenness, but scale distances by ~|k|~, areas by ~k²~ and volumes by ~k³~. They are therefore not isometries, and the image is similar rather than congruent.

A line through the centre maps to itself; any other line maps to a parallel line. This is the geometric content of the Side-Splitter Theorem and the reason slope is preserved.

A similarity transformation is a composition of rigid motions with a dilation, and two figures are similar exactly when such a transformation maps one to the other. This transformational definition matches the classical angle-and-proportion definition but is easier to apply and generalises to figures that are not polygons.`,
        example: {
          prompt: "Triangle with vertices (2, 4), (6, 4), (2, 10) is dilated from the origin by k = 1/2. Find the image and compare areas.",
          steps: [
            "Multiply each coordinate by 1/2: (1,2), (3,2), (1,5).",
            "Original legs: 4 and 6, area = ½(4)(6) = 12.",
            "Image legs: 2 and 3, area = 3.",
            "Ratio 3/12 = 1/4 = k².",
          ],
          answer: "Image (1,2), (3,2), (1,5); area falls by k² = 1/4.",
        },
        mistakes: [
          "Calling a dilated figure congruent — it is similar unless k = 1.",
          "Scaling area by k rather than k².",
        ],
        video: "dilations scale factor center similarity transformations",
        videoAlt: ["dilation coordinate rule similarity transformation"],
        practice: null,
        tags: ["dilation", "similarity", "transformations"],
      },
    ],
  },
];

export const course = {
  id: "geometry",
  short: "Geometry",
  title: "Geometry",
  tagline: "Proof, congruence, similarity and the shapes algebra describes.",
  description:
    "Geometry is the course where you stop taking results on trust and start proving them. It is also the one that looks least like the algebra either side of it, which catches students out. The reasoning skills built here — stating what you know, justifying every step, spotting what a diagram does and does not tell you — are what the rest of mathematics assumes you have.",
  color: "#3b82f6",
  units,
};
