// Canadian (Alberta) curriculum — Grades 10–12
window.CURRICULUM = window.CURRICULUM || {};

window.CURRICULUM[10] = {
  math: [
    {
      title: 'Measurement',
      summary: 'Measure and calculate lengths, areas, and volumes.',
      learn: ['Use metric and imperial units', 'Calculate area and volume', 'Solve measurement problems'],
      lesson: [
        { t: 'p', text: 'Measurement is the process of assigning a number to a physical quantity such as length, area, volume, or mass. Choosing the right unit matters: millimetres and inches suit small objects, while kilometres and miles suit long distances.' },
        { t: 'key', text: 'The metric system is built on powers of 10. The base units are the metre (length), the litre (volume), and the gram (mass). Prefixes scale them: kilo- (1000 times), deci- (one tenth), centi- (one hundredth), milli- (one thousandth). So 1 km = 1000 m and 1 m = 100 cm.' },
        { t: 'example', title: 'Worked example', text: 'Convert 2.5 m to centimetres: multiply by 100 because there are 100 cm in 1 m. 2.5 × 100 = 250 cm. Convert 4500 mL to litres: divide by 1000 because 1 L = 1000 mL. 4500 ÷ 1000 = 4.5 L.' },
        { t: 'p', text: 'Area measures the surface a shape covers, in square units. A rectangle has area A = length × width; a triangle has A = (base × height) ÷ 2; a circle has A = πr². Volume measures the space an object occupies, in cubic units: a rectangular prism has V = length × width × height, and a cylinder has V = πr²h.' },
        { t: 'example', title: 'Worked example', text: 'A circular garden has radius 3 m. Its area is A = πr² = π × 3² = 9π ≈ 28.3 m². A cylinder 10 cm tall with radius 2 cm has volume V = πr²h = π × 4 × 10 = 40π ≈ 125.7 cm³.' },
        { t: 'key', text: 'The imperial system is still used in the United States and in some everyday Canadian measurements (feet, inches, pounds). Key conversions: 1 inch = 2.54 cm, 1 foot = 12 inches, 1 mile ≈ 1.6 km. Always state which unit you are using and convert before comparing measurements.' }
      ],
      quiz: [
        { q: 'Area of a circle = ...', options: ['πr²', '2πr', 'πd'], a: 0 },
        { q: '1 metre equals how many centimetres?', options: ['100', '10', '1000'], a: 0 },
        { q: 'Volume of a cylinder = ...', options: ['πr²h', 'πr²', '2πrh'], a: 0 }
      ]
    },
    {
      title: 'Trigonometry',
      summary: 'Use sine, cosine, and tangent on right triangles.',
      learn: ['Know SOH CAH TOA', 'Find missing sides and angles', 'Solve real-world problems'],
      lesson: [
        { t: 'p', text: 'Trigonometry studies the relationships between the sides and angles of triangles. In a right triangle, the longest side, opposite the 90° angle, is the hypotenuse. The other two sides are the legs, named relative to the angle you are working with: opposite (across from the angle) and adjacent (next to the angle, but not the hypotenuse).' },
        { t: 'key', text: 'For an angle θ in a right triangle: sine = opposite ÷ hypotenuse, cosine = adjacent ÷ hypotenuse, tangent = opposite ÷ adjacent. Remember the order with SOH CAH TOA.' },
        { t: 'example', title: 'Worked example', text: 'A ladder 5 m long leans against a wall and makes a 60° angle with the ground. How high up the wall does it reach? The height is opposite the 60° angle and the ladder is the hypotenuse, so sin 60° = height ÷ 5. Thus height = 5 × sin 60° = 5 × 0.866 ≈ 4.33 m.' },
        { t: 'p', text: 'To find a missing angle, use the inverse ratios sin⁻¹, cos⁻¹, and tan⁻¹ (read "inverse sine", "inverse cosine", "inverse tangent"). If you know any two sides of a right triangle, you can find either acute angle.' },
        { t: 'example', title: 'Worked example', text: 'A ramp rises 1.2 m over a horizontal run of 4 m. The angle of elevation θ satisfies tan θ = opposite ÷ adjacent = 1.2 ÷ 4 = 0.3. So θ = tan⁻¹(0.3) ≈ 16.7°.' },
        { t: 'p', text: 'Trigonometry is used to measure heights and distances that are hard to reach directly: the height of a tree, the width of a river, the slope of a road, or the angle of a roof. Draw a clear diagram, label the known sides and angle, choose the right ratio, and solve.' }
      ],
      quiz: [
        { q: 'Sine of an angle = ...', options: ['opposite / hypotenuse', 'adjacent / hypotenuse', 'opposite / adjacent'], a: 0 },
        { q: 'Cosine = ...', options: ['adjacent / hypotenuse', 'opposite / hypotenuse', 'opposite / adjacent'], a: 0 },
        { q: 'Tangent = ...', options: ['opposite / adjacent', 'adjacent / hypotenuse', 'hypotenuse / opposite'], a: 0 }
      ]
    },
    {
      title: 'Polynomials and Factoring',
      summary: 'Expand and factor polynomial expressions.',
      learn: ['Multiply binomials', 'Factor common factors', 'Factor difference of squares'],
      lesson: [
        { t: 'p', text: 'A polynomial is an expression made of terms, each a number (coefficient) times a variable raised to a whole-number power, for example 3x² + 5x − 2. The degree of a polynomial is the highest exponent: 3x² + 5x − 2 has degree 2. Polynomials with one, two, or three terms are called monomials, binomials, and trinomials.' },
        { t: 'key', text: 'To multiply binomials, distribute every term of the first over every term of the second. The acronym FOIL (First, Outer, Inner, Last) is a memory aid for (a + b)(c + d).' },
        { t: 'example', title: 'Worked example', text: 'Expand (x + 2)(x + 3). First: x·x = x². Outer: x·3 = 3x. Inner: 2·x = 2x. Last: 2·3 = 6. Combine like terms: x² + 3x + 2x + 6 = x² + 5x + 6.' },
        { t: 'key', text: 'Factoring reverses expansion: it rewrites an expression as a product. Always look for a common factor first. Then look for a difference of squares: a² − b² = (a − b)(a + b).' },
        { t: 'example', title: 'Worked example', text: 'Factor 2x + 6: the common factor is 2, so 2x + 6 = 2(x + 3). Factor x² − 9: this is a difference of squares, x² − 3², so x² − 9 = (x − 3)(x + 3). Factor x² + 5x + 6: find two numbers that multiply to 6 and add to 5 — 2 and 3 — so x² + 5x + 6 = (x + 2)(x + 3).' },
        { t: 'p', text: 'Check your factoring by expanding the product — you should recover the original expression. Factoring becomes the key tool for solving quadratic equations, which you will meet next.' }
      ],
      quiz: [
        { q: 'Factor x² - 9.', options: ['(x-3)(x+3)', '(x-9)(x+1)', '(x-3)²'], a: 0 },
        { q: 'Expand (x+2)(x+3).', options: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 5x + 5'], a: 0 },
        { q: 'Factor 2x + 6.', options: ['2(x+3)', '2(x+6)', 'x(2+6)'], a: 0 }
      ]
    },
    {
      title: 'Relations and Functions',
      summary: 'Understand and graph functions.',
      learn: ['Evaluate functions', 'Find domain and range', 'Graph linear and other functions'],
      lesson: [
        { t: 'p', text: 'A relation is any set of ordered pairs (x, y). A function is a special relation in which every x-value is paired with exactly one y-value. You can test a graph with the vertical line test: if any vertical line touches the graph more than once, it is not a function.' },
        { t: 'key', text: 'Function notation f(x), read "f of x", names the output for a given input. f(x) = 2x + 1 means: take an input x, double it, and add 1.' },
        { t: 'example', title: 'Worked example', text: 'If f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7, and f(−2) = 2(−2) + 1 = −3. Each input gives exactly one output, which is why f is a function.' },
        { t: 'key', text: 'The domain is the set of all possible x-values (inputs); the range is the set of all possible y-values (outputs). For f(x) = x², the domain is all real numbers, but the range is only y ≥ 0, because a square is never negative.' },
        { t: 'example', title: 'Worked example', text: 'Graph f(x) = 2x + 1 by plotting points: (0, 1), (1, 3), (−1, −1). They lie on a straight line with slope 2 and y-intercept 1, so f is a linear function. Its domain and range are both all real numbers.' }
      ],
      quiz: [
        { q: 'If f(x) = 2x + 1, what is f(3)?', options: ['7', '6', '5'], a: 0 },
        { q: 'The domain of a function is...', options: ['all possible x-values', 'all y-values', 'the slope'], a: 0 },
        { q: 'If f(x) = x², what is f(4)?', options: ['16', '8', '4'], a: 0 }
      ]
    },
    {
      title: 'Systems of Linear Equations',
      summary: 'Solve systems of equations.',
      learn: ['Solve by substitution', 'Solve by elimination', 'Graph two lines and find the intersection'],
      lesson: [
        { t: 'p', text: 'A system of linear equations is a set of two or more equations with the same variables, for example x + y = 5 and x − y = 1. A solution is an ordered pair (x, y) that satisfies every equation at once. Graphically, it is the point where the two lines intersect.' },
        { t: 'key', text: 'Two strategies: substitution (isolate one variable and replace it in the other equation) and elimination (add or subtract the equations to cancel one variable).' },
        { t: 'example', title: 'Worked example (substitution)', text: 'Solve x + y = 5 and x − y = 1. From the first equation, y = 5 − x. Substitute into the second: x − (5 − x) = 1, so x − 5 + x = 1, 2x = 6, x = 3. Then y = 5 − 3 = 2. Solution: (3, 2).' },
        { t: 'example', title: 'Worked example (elimination)', text: 'Add x + y = 5 and x − y = 1 term by term: (x + x) + (y − y) = 5 + 1, so 2x = 6 and x = 3. Then y = 2. Same solution — the two methods always agree. Check: 3 + 2 = 5 and 3 − 2 = 1.' },
        { t: 'key', text: 'Three possible outcomes: one solution (the lines cross once), no solution (the lines are parallel, for example x + y = 5 and x + y = 8), or infinitely many solutions (the equations describe the same line). Always check your answer in both original equations.' }
      ],
      quiz: [
        { q: 'Solve: x + y = 5 and x - y = 1. What is x?', options: ['3', '2', '4'], a: 0 },
        { q: 'In the system above, what is y?', options: ['2', '3', '1'], a: 0 },
        { q: 'The solution to a system is where the lines...', options: ['intersect', 'are parallel', 'end'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Literary Analysis',
      summary: 'Analyze literature in depth.',
      learn: ['Identify theme, tone, and symbolism', 'Analyze characters and conflict', 'Write about literature with evidence'],
      lesson: [
        { t: 'p', text: 'Literary analysis is the careful study of how a text creates meaning. Instead of retelling the plot, you examine the author\'s choices — words, structure, and literary devices — and explain what they reveal.' },
        { t: 'key', text: 'Theme is the central message or insight of a work, stated as an idea ("greed destroys relationships"), not a single word. Tone is the author\'s attitude toward the subject; mood is the feeling the reader experiences.' },
        { t: 'example', title: 'Worked example', text: 'In a story where a character repeatedly loses her keys, the keys may symbolize control or the fear of losing independence. Tracing the symbol across the story turns a small detail into evidence for the theme of self-reliance.' },
        { t: 'p', text: 'Characters drive conflict, which can be internal (a character struggles with their own feelings or choices) or external (a character struggles with another person, society, or nature). Asking what a character wants and what stands in the way reveals the engine of the story.' },
        { t: 'key', text: 'Every claim in a literary essay needs evidence — a direct quote or a precise moment — followed by analysis that explains how that evidence supports your point.' }
      ],
      quiz: [
        { q: 'Conflict in a story can be...', options: ['internal or external', 'only external', 'only happy'], a: 0 },
        { q: 'Tone is...', options: ['the author\'s attitude', 'the font', 'the title'], a: 0 },
        { q: 'A symbol represents...', options: ['an idea beyond its literal meaning', 'just itself', 'nothing'], a: 0 }
      ]
    },
    {
      title: 'Essay Writing',
      summary: 'Write clear, structured essays.',
      learn: ['Write a strong thesis', 'Use evidence and analysis', 'Structure intro, body, conclusion'],
      lesson: [
        { t: 'p', text: 'An essay is a structured argument. In the introduction you hook the reader and present your thesis; in the body each paragraph develops one main point with evidence; in the conclusion you restate the thesis and show why it matters.' },
        { t: 'key', text: 'A strong thesis is arguable and specific. "Pollution is bad" is a fact, not a thesis. "Cities should invest in public transit because it reduces emissions, eases congestion, and improves equity" is a thesis: someone could disagree, and the essay knows exactly what it must prove.' },
        { t: 'example', title: 'Worked example', text: 'Weak thesis: "Shakespeare\'s plays are still popular." Strong thesis: "Romeo and Juliet remains relevant because its themes of impulsive love and family conflict echo the social pressures young people face today." The strong thesis names the claim and the reasons.' },
        { t: 'p', text: 'Each body paragraph follows a pattern: a topic sentence that states the paragraph\'s point, evidence (a quote, a fact, or an example), and analysis explaining how the evidence proves the point. Without analysis, evidence is just a quotation.' },
        { t: 'key', text: 'The conclusion should restate the thesis in fresh words and summarize the argument — never introduce new evidence. End with a thought that leaves the reader something to consider.' }
      ],
      quiz: [
        { q: 'A thesis should be...', options: ['arguable and specific', 'a fact everyone knows', 'a question'], a: 0 },
        { q: 'Each body paragraph needs...', options: ['a topic sentence and evidence', 'only quotes', 'no structure'], a: 0 },
        { q: 'The conclusion should...', options: ['restate the thesis and summarize', 'add new evidence', 'be empty'], a: 0 }
      ]
    },
    {
      title: 'Research Skills',
      summary: 'Find, evaluate, and cite sources.',
      learn: ['Use academic sources', 'Paraphrase and quote', 'Cite properly (MLA/APA)'],
      lesson: [
        { t: 'p', text: 'Research is the process of finding, evaluating, and using information to answer a question. A good research project starts with a focused, answerable question, then gathers sources, then builds an answer with evidence.' },
        { t: 'key', text: 'Primary sources are original materials — letters, studies, data, photographs. Secondary sources interpret them — textbooks, reviews, documentaries. Scholarly sources are peer-reviewed: experts checked the work before publication.' },
        { t: 'example', title: 'Worked example', text: 'Suppose your question is "How has electric vehicle use changed in Canada since 2015?" A primary source is the government\'s vehicle sales data; a secondary source is a news article analyzing that data. Both are useful, but they play different roles.' },
        { t: 'p', text: 'Use your own words whenever possible. Paraphrasing restates an idea in new language; quoting copies exact words and must be marked with quotation marks. Cite every source — that is how you give credit and let readers verify your work. MLA style uses the author and page number in parentheses; APA style uses the author and year. Both end with a full reference list.' },
        { t: 'key', text: 'Plagiarism is using another person\'s words or ideas without credit, and it includes copying, buying essays, and reusing your own past work without permission. Careful note-taking — writing down where each fact came from — prevents accidental plagiarism.' }
      ],
      quiz: [
        { q: 'A scholarly source is...', options: ['peer-reviewed and credible', 'any blog', 'any social post'], a: 0 },
        { q: 'Paraphrasing is...', options: ['restating in your own words', 'copying exactly', 'deleting'], a: 0 },
        { q: 'Plagiarism is...', options: ['using others\' work without credit', 'citing sources', 'writing your own ideas'], a: 0 }
      ]
    },
    {
      title: 'Media and Persuasion',
      summary: 'Analyze persuasive techniques in media.',
      learn: ['Recognize rhetorical appeals (ethos, pathos, logos)', 'Identify bias', 'Evaluate arguments'],
      lesson: [
        { t: 'p', text: 'Media messages are created by someone, for a purpose, for an audience. To read them critically, ask: Who made this? Why? Who is it for? What techniques does it use to persuade me? What information is left out?' },
        { t: 'key', text: 'The three rhetorical appeals: ethos builds credibility and trust ("a licensed mechanic recommends this oil"), pathos stirs emotion (images of happy families, fear of loss), and logos uses logic and evidence (statistics, comparisons).' },
        { t: 'example', title: 'Worked example', text: 'A car advertisement showing a family laughing on a mountain road appeals to pathos. The fine print listing fuel-efficiency data appeals to logos. A celebrity driver endorsement appeals to ethos. A single ad often uses all three at once.' },
        { t: 'p', text: 'Bias is a leaning toward one side, and it shows up in word choice, framing, and what is omitted. "Devastating cuts" and "modest adjustments" can describe the same budget. To evaluate an argument, separate facts from opinions, check the evidence, and look for the other side.' }
      ],
      quiz: [
        { q: 'Pathos appeals to...', options: ['emotion', 'logic', 'credibility'], a: 0 },
        { q: 'Logos appeals to...', options: ['logic and reason', 'emotion', 'authority'], a: 0 },
        { q: 'Ethos appeals to...', options: ['credibility and trust', 'emotion', 'fear'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Communicate in formal and informal settings.',
      learn: ['Deliver effective presentations', 'Listen critically', 'Engage in discussion'],
      lesson: [
        { t: 'p', text: 'Good speaking starts with clear thinking. A presentation needs a purpose, an audience, and a structure: an introduction that states your main idea, a body with two or three key points and supporting evidence, and a conclusion that summarizes and ends strongly.' },
        { t: 'key', text: 'Delivery matters as much as content: speak loudly enough, slow down, make eye contact, and use pauses. Reading word-for-word from slides loses your audience — use brief notes and talk to people, not paper.' },
        { t: 'example', title: 'Worked example', text: 'A two-minute presentation on school recycling might have: a hook ("This school throws away enough paper each week to fill a classroom"), three points (what is recycled, what is not, one change), and a call to action ("Vote for the blue-bin program at Friday\'s assembly").' },
        { t: 'p', text: 'Critical listening means evaluating what you hear: Is the claim supported? Are the examples relevant? Critical listeners ask questions instead of accepting everything. In discussion, good participants listen fully, build on others\' ideas, and disagree with ideas — not with people.' }
      ],
      quiz: [
        { q: 'An effective presentation is...', options: ['organized and engaging', 'read word-for-word', 'unplanned'], a: 0 },
        { q: 'Critical listening means...', options: ['evaluating the message', 'accepting all', 'ignoring all'], a: 0 },
        { q: 'Good discussion involves...', options: ['listening and responding', 'dominating', 'no one speaking'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Energy and Matter',
      summary: 'Learn about energy forms and transformations.',
      learn: ['Know kinetic and potential energy', 'Understand energy conservation', 'Energy transfers and transforms'],
      lesson: [
        { t: 'p', text: 'Energy is the ability to do work or cause change, and it exists in many forms: kinetic (motion), potential (stored), thermal (heat), chemical, electrical, and radiant (light). Matter is what things are made of — anything that has mass and takes up space.' },
        { t: 'key', text: 'Kinetic energy is the energy of motion: KE = ½mv², where m is mass in kilograms and v is speed in metres per second. Potential energy is stored energy; gravitational potential energy near Earth\'s surface is PE = mgh, where g ≈ 9.8 m/s² and h is the height above a reference point.' },
        { t: 'example', title: 'Worked example', text: 'A 2 kg ball moves at 3 m/s. Its kinetic energy is KE = ½ × 2 × 3² = ½ × 2 × 9 = 9 J (joules). If the same ball sits on a shelf 1.5 m high, its gravitational potential energy is PE = 2 × 9.8 × 1.5 ≈ 29.4 J.' },
        { t: 'key', text: 'The law of conservation of energy states that energy cannot be created or destroyed — it only changes form. When a ball is dropped, potential energy becomes kinetic energy; when a car brakes, kinetic energy becomes thermal energy in the brakes and tires.' },
        { t: 'p', text: 'Energy transfers move energy from one object to another (a hot pan warms your hand); energy transformations change it from one form to another (a light bulb turns electrical energy into light and heat). No machine is perfectly efficient — some energy always escapes as heat.' }
      ],
      quiz: [
        { q: 'Energy of motion is called...', options: ['kinetic energy', 'potential energy', 'chemical energy'], a: 0 },
        { q: 'Stored energy is called...', options: ['potential energy', 'kinetic energy', 'thermal energy'], a: 0 },
        { q: 'Energy can be...', options: ['transformed, not destroyed', 'created from nothing', 'destroyed'], a: 0 }
      ]
    },
    {
      title: 'Chemical Reactions',
      summary: 'Learn how substances react chemically.',
      learn: ['Balance chemical equations', 'Know reaction types', 'Understand the law of conservation of mass'],
      lesson: [
        { t: 'p', text: 'A chemical reaction changes substances into new substances with different properties. The starting substances are reactants; the new substances are products. Evidence of a reaction includes a colour change, gas bubbles, heat or light, and the formation of a solid (a precipitate).' },
        { t: 'key', text: 'The law of conservation of mass says matter is neither created nor destroyed in a reaction: the total mass of the reactants equals the total mass of the products. That is why equations must be balanced — the same number of each atom on both sides.' },
        { t: 'example', title: 'Worked example', text: 'Balance H₂ + O₂ → H₂O. Hydrogen already balances (2 atoms each side), but oxygen has 2 atoms on the left and only 1 on the right. Put a 2 in front of H₂O: H₂ + O₂ → 2H₂O. Now oxygen balances (2 = 2), but hydrogen shows 2 on the left and 4 on the right. Put a 2 in front of H₂: 2H₂ + O₂ → 2H₂O. Now there are 4 hydrogen atoms and 2 oxygen atoms on each side — balanced.' },
        { t: 'p', text: 'Common reaction types: synthesis (two substances combine, A + B → AB), decomposition (one substance breaks apart, AB → A + B), and combustion (a substance reacts with oxygen, releasing heat and light, as in burning methane: CH₄ + 2O₂ → CO₂ + 2H₂O).' }
      ],
      quiz: [
        { q: 'In a chemical reaction, mass is...', options: ['conserved', 'lost', 'doubled'], a: 0 },
        { q: 'The substances that react are called...', options: ['reactants', 'products', 'catalysts'], a: 0 },
        { q: 'The substances formed are called...', options: ['products', 'reactants', 'solvents'], a: 0 }
      ]
    },
    {
      title: 'Cells and Cell Division',
      summary: 'Learn about cell structure and mitosis.',
      learn: ['Know cell organelles', 'Understand mitosis', 'See how cells divide for growth'],
      lesson: [
        { t: 'p', text: 'The cell is the basic unit of life. The cell theory states that all living things are made of cells, that cells are the smallest units of life, and that all cells come from existing cells. Inside a cell, organelles perform specialized jobs.' },
        { t: 'key', text: 'Key organelles: the nucleus is the control centre that holds DNA; the cell membrane controls what enters and leaves the cell; the mitochondria release energy from food (cellular respiration); ribosomes build proteins; the endoplasmic reticulum and Golgi apparatus make and ship materials. Plant cells also have a cell wall and chloroplasts for photosynthesis.' },
        { t: 'example', title: 'Worked example', text: 'Think of the cell as a factory: the nucleus is the manager\'s office (instructions), ribosomes are the assembly line (building proteins), mitochondria are the power plant (energy), and the cell membrane is the shipping gate (what comes in and goes out).' },
        { t: 'p', text: 'Cells divide so organisms can grow, repair tissue, and replace old cells. Mitosis is the division of the nucleus: the DNA is copied, then separated into two identical sets, and the cell splits into two daughter cells.' },
        { t: 'key', text: 'Mitosis produces two genetically identical daughter cells — the same chromosome number and the same DNA. (Meiosis, a different process, produces sex cells with half the chromosomes.) This is why a cut heals with cells exactly like the ones that were damaged.' }
      ],
      quiz: [
        { q: 'Mitosis is...', options: ['cell division for growth', 'cell death', 'photosynthesis'], a: 0 },
        { q: 'The "control centre" of the cell is the...', options: ['nucleus', 'membrane', 'wall'], a: 0 },
        { q: 'Mitosis produces cells that are...', options: ['genetically identical', 'completely different', 'half the chromosomes'], a: 0 }
      ]
    },
    {
      title: 'Climate and Ecosystems',
      summary: 'Learn about climate and how ecosystems work.',
      learn: ['Understand the greenhouse effect', 'Know ecosystem roles', 'See human impact on climate'],
      lesson: [
        { t: 'p', text: 'Weather is the day-to-day condition of the atmosphere — today\'s rain or sunshine. Climate is the long-term pattern of weather in a region, averaged over decades. Climate change means a sustained shift in those patterns, globally or regionally.' },
        { t: 'key', text: 'The greenhouse effect is natural and necessary: gases such as carbon dioxide, methane, and water vapour trap some of the Sun\'s heat, keeping Earth warm enough for life. The problem is the enhanced greenhouse effect — human activities (burning fossil fuels, clearing forests, farming) release extra greenhouse gases, trapping more heat and raising global temperatures.' },
        { t: 'example', title: 'Worked example', text: 'A car parked in the sun is a simple model: sunlight passes through the windows and warms the interior, but the heat cannot escape, so the car gets hotter than the outside air. Greenhouse gases act like the car\'s glass on a planetary scale.' },
        { t: 'p', text: 'Ecosystems are communities of organisms interacting with their environment. Producers (plants) make their own food; consumers (animals) eat other organisms; decomposers (bacteria and fungi) break down waste and dead matter, recycling nutrients back into the soil.' },
        { t: 'key', text: 'Human impact on climate is already visible: rising sea levels, more frequent heat waves, and shifting habitats. Responses include reducing fossil-fuel use, protecting forests, and adapting communities — actions that work best when taken locally and globally together.' }
      ],
      quiz: [
        { q: 'The greenhouse effect...', options: ['warms the planet', 'cools the planet', 'has no effect'], a: 0 },
        { q: 'A major greenhouse gas is...', options: ['carbon dioxide', 'oxygen', 'nitrogen'], a: 0 },
        { q: 'Climate change can...', options: ['raise sea levels', 'lower all temperatures', 'do nothing'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Globalization',
      summary: 'Understand how the world is connected.',
      learn: ['Define globalization', 'Know its economic, social, and political effects', 'See both benefits and challenges'],
      lesson: [
        { t: 'p', text: 'Globalization is the process by which people, goods, ideas, and cultures become increasingly connected across the world. Advances in transportation, communication, and trade have made it faster and more intense than at any time in history.' },
        { t: 'key', text: 'Globalization has three dimensions: economic (goods, services, and money cross borders), social (people, cultures, and ideas spread and mix), and political (governments cooperate through organizations and agreements).' },
        { t: 'example', title: 'Worked example', text: 'A single smartphone illustrates all three: its parts are designed in one country, manufactured in others, and sold worldwide (economic); its apps spread music, language, and trends across cultures (social); and its production is shaped by trade rules and international agreements (political).' },
        { t: 'p', text: 'Globalization brings benefits — more trade, cheaper goods, cultural exchange, and the spread of knowledge and technology. It also brings challenges: benefits are distributed unevenly, local industries can struggle against global competition, and cultural diversity can be eroded.' }
      ],
      quiz: [
        { q: 'Globalization is...', options: ['increasing global interconnection', 'isolation', 'one country ruling all'], a: 0 },
        { q: 'A benefit of globalization is...', options: ['more trade and cultural exchange', 'less communication', 'fewer jobs'], a: 0 },
        { q: 'A challenge of globalization is...', options: ['unequal benefits', 'nothing', 'more isolation'], a: 0 }
      ]
    },
    {
      title: 'Global Trade',
      summary: 'Learn how countries trade with each other.',
      learn: ['Understand imports and exports', 'Know trade agreements', 'See how trade affects economies'],
      lesson: [
        { t: 'p', text: 'International trade is the exchange of goods and services between countries. An import is a good or service bought from another country; an export is one sold to another country. Countries trade because it lets them specialize in what they produce well and buy what they cannot produce efficiently.' },
        { t: 'key', text: 'Trade is shaped by policies: a tariff is a tax on imports (making them more expensive); a quota limits the quantity of a good that can be imported; a trade agreement is a deal between countries to reduce barriers and set fair rules for trade.' },
        { t: 'example', title: 'Worked example', text: 'Canada exports wheat, timber, and energy, and imports tropical fruit, electronics, and clothing. A tariff on imported fruit raises its price for consumers; a trade agreement that removes that tariff makes fruit cheaper and increases trade in both directions.' },
        { t: 'p', text: 'Trade affects economies in both directions: exports create jobs and income in the producing country, while imports give consumers more choice and lower prices. The debate over trade is about balance — which industries gain, which lose, and how the gains are shared.' }
      ],
      quiz: [
        { q: 'Goods bought from another country are...', options: ['imports', 'exports', 'tariffs'], a: 0 },
        { q: 'Goods sold to another country are...', options: ['exports', 'imports', 'quotas'], a: 0 },
        { q: 'A tariff is...', options: ['a tax on imports', 'a free gift', 'a type of currency'], a: 0 }
      ]
    },
    {
      title: 'Identity and Globalization',
      summary: 'Learn how globalization affects culture and identity.',
      learn: ['Globalization spreads culture', 'Local cultures can be affected', 'Identity can be global and local'],
      lesson: [
        { t: 'p', text: 'Culture — the beliefs, customs, arts, and language of a group — has always spread between places. Globalization accelerates this spread: music, food, fashion, and ideas now travel around the world in seconds through media and the internet.' },
        { t: 'key', text: 'Cultural diffusion is the spread of cultural elements between societies. It can enrich: cuisines mix, languages borrow words, and art crosses borders. It can also threaten diversity when global mass culture dominates local traditions, a process critics call cultural homogenization.' },
        { t: 'example', title: 'Worked example', text: 'A family might celebrate a holiday with relatives online (global connection) while passing down traditional songs, recipes, and stories from their home region (local identity). Modern identity is often both at once.' },
        { t: 'p', text: 'Globalization does not erase identity — it multiplies the pieces people draw on. A person can feel fully local and fully global at the same time, and communities can preserve and share their culture with a worldwide audience, which was impossible for most of history.' }
      ],
      quiz: [
        { q: 'Globalization can spread...', options: ['culture and ideas', 'only goods', 'nothing'], a: 0 },
        { q: 'Local culture can be...', options: ['preserved and shared', 'only lost', 'ignored'], a: 0 },
        { q: 'A person can have...', options: ['both a local and global identity', 'only one identity', 'no identity'], a: 0 }
      ]
    },
    {
      title: 'Sustainability',
      summary: 'Understand sustainable development.',
      learn: ['Meet today\'s needs without harming tomorrow', 'Balance economy, society, environment', 'Act locally and globally'],
      lesson: [
        { t: 'p', text: 'Sustainability means meeting the needs of the present without compromising the ability of future generations to meet their own needs. It rests on the idea that resources, the environment, and people are linked across time.' },
        { t: 'key', text: 'Sustainable development balances three pillars: economic growth (jobs, prosperity), social well-being (equity, health, education), and environmental protection (clean air, water, biodiversity). A decision that helps one pillar while destroying another is not sustainable.' },
        { t: 'example', title: 'Worked example', text: 'Compare energy sources. Burning coal provides cheap power (economy) but emits carbon and harms air quality (environment). Solar and wind power cost more to build but produce clean energy (environment) and create lasting local jobs (economy and society). Renewable energy is the sustainable choice over the long run.' },
        { t: 'p', text: 'Sustainability is acted on at every scale: individuals reduce, reuse, and recycle; communities build transit and protect green spaces; governments set emissions targets and conservation rules. Because problems like climate change cross borders, local action must combine with global cooperation.' }
      ],
      quiz: [
        { q: 'Sustainability means...', options: ['meeting needs without harming the future', 'using everything now', 'ignoring the environment'], a: 0 },
        { q: 'Sustainable development balances...', options: ['economy, society, environment', 'only money', 'only nature'], a: 0 },
        { q: 'Renewable energy is...', options: ['solar and wind', 'coal', 'oil'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[11] = {
  math: [
    {
      title: 'Quadratic Functions',
      summary: 'Graph and solve quadratic functions.',
      learn: ['Graph parabolas', 'Find roots and vertex', 'Solve quadratic equations'],
      quiz: [
        { q: 'The graph of y = x² is a...', options: ['parabola', 'line', 'circle'], a: 0 },
        { q: 'The roots of x² - 4 = 0 are...', options: ['2 and -2', '4 and -4', '0 and 4'], a: 0 },
        { q: 'The vertex of y = x² is...', options: ['(0,0)', '(1,1)', '(0,1)'], a: 0 }
      ]
    },
    {
      title: 'Radicals',
      summary: 'Simplify and work with square roots.',
      learn: ['Simplify radicals', 'Add and multiply radicals', 'Rationalize denominators'],
      quiz: [
        { q: '√49 = ...', options: ['7', '14', '49'], a: 0 },
        { q: '√8 simplifies to...', options: ['2√2', '4', '8'], a: 0 },
        { q: '√9 + √16 = ...', options: ['7', '5', '25'], a: 0 }
      ]
    },
    {
      title: 'Sequences and Series',
      summary: 'Work with arithmetic and geometric sequences.',
      learn: ['Find the common difference or ratio', 'Write the general term', 'Sum a series'],
      quiz: [
        { q: 'In 2, 5, 8, 11, the common difference is...', options: ['3', '2', '5'], a: 0 },
        { q: 'In 2, 4, 8, 16, the common ratio is...', options: ['2', '4', '8'], a: 0 },
        { q: 'The next term in 2, 5, 8, 11 is...', options: ['14', '13', '12'], a: 0 }
      ]
    },
    {
      title: 'Trigonometry (Extended)',
      summary: 'Use trig ratios and special angles.',
      learn: ['Know special angles (30°, 45°, 60°)', 'Use sine and cosine laws', 'Solve trig problems'],
      quiz: [
        { q: 'sin(30°) = ...', options: ['0.5', '0.87', '1'], a: 0 },
        { q: 'cos(60°) = ...', options: ['0.5', '0.87', '0'], a: 0 },
        { q: 'sin²(x) + cos²(x) = ...', options: ['1', '0', '2'], a: 0 }
      ]
    },
    {
      title: 'Inequalities',
      summary: 'Solve and graph inequalities.',
      learn: ['Solve linear inequalities', 'Solve quadratic inequalities', 'Graph solutions on a number line'],
      quiz: [
        { q: 'Solve x + 3 > 7.', options: ['x > 4', 'x > 10', 'x < 4'], a: 0 },
        { q: 'Solve 2x ≤ 10.', options: ['x ≤ 5', 'x ≤ 20', 'x ≥ 5'], a: 0 },
        { q: 'On a number line, x > 2 uses...', options: ['an open circle at 2', 'a closed circle at 2', 'no mark'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Literary Analysis',
      summary: 'Analyze complex literary works.',
      learn: ['Analyze theme, character, and structure', 'Write critical essays', 'Compare texts'],
      quiz: [
        { q: 'A motif is...', options: ['a recurring element', 'a character', 'a setting'], a: 0 },
        { q: 'Irony is...', options: ['a contrast between expectation and reality', 'a simile', 'a rhyme'], a: 0 },
        { q: 'Foreshadowing is...', options: ['a hint of what will happen', 'a flashback', 'the ending'], a: 0 }
      ]
    },
    {
      title: 'Persuasive and Analytical Writing',
      summary: 'Write strong persuasive and analytical essays.',
      learn: ['Build logical arguments', 'Use rhetorical devices', 'Write with clarity and precision'],
      quiz: [
        { q: 'A strong argument has...', options: ['claim, evidence, reasoning', 'only emotion', 'no structure'], a: 0 },
        { q: 'A rhetorical question is...', options: ['asked for effect, not an answer', 'a real question', 'a command'], a: 0 },
        { q: 'Precision in writing means...', options: ['choosing the exact right word', 'using more words', 'being vague'], a: 0 }
      ]
    },
    {
      title: 'Research and Citation',
      summary: 'Conduct research and cite sources.',
      learn: ['Form research questions', 'Evaluate sources', 'Cite in MLA or APA'],
      quiz: [
        { q: 'A good research question is...', options: ['focused and answerable', 'too broad', 'unanswerable'], a: 0 },
        { q: 'Primary sources are...', options: ['original documents or data', 'textbooks', 'summaries'], a: 0 },
        { q: 'Citations are needed to...', options: ['credit sources', 'make text longer', 'avoid writing'], a: 0 }
      ]
    },
    {
      title: 'Media Literacy',
      summary: 'Critically analyze media and digital content.',
      learn: ['Recognize persuasion and bias', 'Evaluate digital sources', 'Understand media ownership'],
      quiz: [
        { q: 'Media bias can appear through...', options: ['word choice and framing', 'only images', 'nothing'], a: 0 },
        { q: 'A reliable news source...', options: ['reports facts with evidence', 'uses only opinion', 'has no author'], a: 0 },
        { q: 'Who owns media can affect...', options: ['what stories are told', 'the weather', 'nothing'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Present and debate at a high level.',
      learn: ['Deliver formal speeches', 'Engage in debate', 'Listen and evaluate critically'],
      quiz: [
        { q: 'A formal speech should...', options: ['have a clear structure', 'be unplanned', 'use slang only'], a: 0 },
        { q: 'Debating builds...', options: ['critical thinking', 'only aggression', 'nothing'], a: 0 },
        { q: 'Active listening involves...', options: ['focusing and responding', 'planning your reply only', 'daydreaming'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Biology: Energy and Matter Exchange',
      summary: 'Learn how organisms exchange energy and matter.',
      learn: ['Understand photosynthesis', 'Understand cellular respiration', 'See energy flow in ecosystems'],
      quiz: [
        { q: 'Photosynthesis uses...', options: ['sunlight, water, CO₂', 'oxygen only', 'soil only'], a: 0 },
        { q: 'Cellular respiration releases...', options: ['energy from food', 'sunlight', 'CO₂ only'], a: 0 },
        { q: 'Plants produce food through...', options: ['photosynthesis', 'respiration', 'digestion'], a: 0 }
      ]
    },
    {
      title: 'Biology: Ecosystems and Populations',
      summary: 'Learn how ecosystems and populations work.',
      learn: ['Understand food webs', 'Know population growth', 'See how humans affect ecosystems'],
      quiz: [
        { q: 'A food web shows...', options: ['feeding relationships', 'weather', 'maps'], a: 0 },
        { q: 'Population growth can be limited by...', options: ['resources and space', 'nothing', 'only weather'], a: 0 },
        { q: 'A keystone species...', options: ['has a large effect on its ecosystem', 'has no role', 'is extinct'], a: 0 }
      ]
    },
    {
      title: 'Chemistry: Chemical Bonding',
      summary: 'Learn how atoms bond to form compounds.',
      learn: ['Know ionic and covalent bonds', 'Understand polarity', 'Write formulas'],
      quiz: [
        { q: 'An ionic bond forms by...', options: ['transfer of electrons', 'sharing electrons', 'melting'], a: 0 },
        { q: 'A covalent bond forms by...', options: ['sharing electrons', 'transferring electrons', 'freezing'], a: 0 },
        { q: 'NaCl (table salt) is an...', options: ['ionic compound', 'covalent molecule', 'element'], a: 0 }
      ]
    },
    {
      title: 'Physics: Kinematics',
      summary: 'Learn about motion, speed, and acceleration.',
      learn: ['Use v = d/t', 'Understand acceleration', 'Analyze motion graphs'],
      quiz: [
        { q: 'Speed = ...', options: ['distance ÷ time', 'time ÷ distance', 'distance × time'], a: 0 },
        { q: 'Acceleration is a change in...', options: ['velocity', 'mass', 'distance'], a: 0 },
        { q: 'If you travel 100 km in 2 hours, your speed is...', options: ['50 km/h', '100 km/h', '200 km/h'], a: 0 }
      ]
    },
    {
      title: 'Physics: Newton\'s Laws',
      summary: 'Learn the laws of motion.',
      learn: ['Inertia (1st law)', 'F = ma (2nd law)', 'Action-reaction (3rd law)'],
      quiz: [
        { q: 'Newton\'s second law is...', options: ['F = ma', 'F = mv', 'F = m/a'], a: 0 },
        { q: 'Inertia is the tendency to...', options: ['resist changes in motion', 'speed up', 'slow down'], a: 0 },
        { q: 'For every action, there is...', options: ['an equal and opposite reaction', 'no reaction', 'double the force'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Nationalism',
      summary: 'Understand nationalism and its effects.',
      learn: ['Define nationalism', 'Know its positive and negative effects', 'See nationalism in history'],
      quiz: [
        { q: 'Nationalism is...', options: ['a strong sense of national identity', 'global unity', 'indifference'], a: 0 },
        { q: 'A positive effect of nationalism can be...', options: ['unity and pride', 'only conflict', 'nothing'], a: 0 },
        { q: 'A negative effect can be...', options: ['conflict and exclusion', 'only peace', 'more trade'], a: 0 }
      ]
    },
    {
      title: 'Nations and Self-Determination',
      summary: 'Learn how nations seek independence.',
      learn: ['Understand self-determination', 'Know independence movements', 'See peaceful vs violent paths'],
      quiz: [
        { q: 'Self-determination means...', options: ['a people choose their own future', 'outside rule', 'no choice'], a: 0 },
        { q: 'Independence movements can be...', options: ['peaceful or violent', 'always violent', 'always peaceful'], a: 0 },
        { q: 'A nation is...', options: ['a group with shared identity', 'only a country', 'only a government'], a: 0 }
      ]
    },
    {
      title: 'National Identity',
      summary: 'Learn how nations build identity.',
      learn: ['Identity comes from shared history and symbols', 'Nations use symbols and stories', 'Identity can be inclusive or exclusive'],
      quiz: [
        { q: 'National identity can be built through...', options: ['shared symbols and history', 'nothing', 'only laws'], a: 0 },
        { q: 'A national symbol can be...', options: ['a flag or anthem', 'only a colour', 'nothing'], a: 0 },
        { q: 'Inclusive identity...', options: ['welcomes diverse people', 'excludes others', 'has no meaning'], a: 0 }
      ]
    },
    {
      title: 'Nationalism in the Modern World',
      summary: 'See how nationalism shapes today\'s world.',
      learn: ['Nationalism affects politics', 'It can unite or divide', 'Globalization interacts with nationalism'],
      quiz: [
        { q: 'Nationalism and globalization can...', options: ['both coexist and conflict', 'never interact', 'be identical'], a: 0 },
        { q: 'Nationalism can influence...', options: ['elections and policies', 'the weather', 'nothing'], a: 0 },
        { q: 'Modern nationalism can be seen in...', options: ['political movements', 'only history', 'nowhere'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[12] = {
  math: [
    {
      title: 'Functions and Transformations',
      summary: 'Transform and analyze functions.',
      learn: ['Apply translations, reflections, stretches', 'Find inverse functions', 'Compose functions'],
      quiz: [
        { q: 'The graph of y = f(x) + 3 shifts...', options: ['up 3 units', 'down 3 units', 'left 3 units'], a: 0 },
        { q: 'The graph of y = f(x - 2) shifts...', options: ['right 2 units', 'left 2 units', 'up 2 units'], a: 0 },
        { q: 'The inverse of a function...', options: ['reverses the function', 'doubles it', 'is always the same'], a: 0 }
      ]
    },
    {
      title: 'Exponents and Logarithms',
      summary: 'Work with exponents and logarithms.',
      learn: ['Use exponent laws', 'Convert between exponential and log form', 'Solve exponential and log equations'],
      quiz: [
        { q: 'log₁₀(100) = ...', options: ['2', '10', '100'], a: 0 },
        { q: '2³ = ...', options: ['8', '6', '9'], a: 0 },
        { q: 'log₂(8) = ...', options: ['3', '4', '2'], a: 0 }
      ]
    },
    {
      title: 'Trigonometry (Advanced)',
      summary: 'Use trigonometric identities and equations.',
      learn: ['Use the unit circle', 'Solve trig equations', 'Apply trig identities'],
      quiz: [
        { q: 'sin(90°) = ...', options: ['1', '0', '0.5'], a: 0 },
        { q: 'cos(0°) = ...', options: ['1', '0', '0.5'], a: 0 },
        { q: 'tan(45°) = ...', options: ['1', '0', '2'], a: 0 }
      ]
    },
    {
      title: 'Combinatorics and Probability',
      summary: 'Count arrangements and calculate probability.',
      learn: ['Use permutations and combinations', 'Calculate probability', 'Use the fundamental counting principle'],
      quiz: [
        { q: 'The number of ways to arrange 3 books is...', options: ['3! = 6', '3', '9'], a: 0 },
        { q: 'C(5,2) = ...', options: ['10', '5', '20'], a: 0 },
        { q: 'Probability of an event = ...', options: ['favourable / total outcomes', 'total / favourable', 'favourable × total'], a: 0 }
      ]
    },
    {
      title: 'Introduction to Calculus',
      summary: 'Learn the basics of derivatives.',
      learn: ['Understand limits', 'Find the derivative of polynomials', 'Use the derivative to find slope'],
      quiz: [
        { q: 'The derivative of x² is...', options: ['2x', 'x', '2'], a: 0 },
        { q: 'The derivative of 3x is...', options: ['3', '3x', '0'], a: 0 },
        { q: 'The derivative gives the...', options: ['slope of a tangent', 'area under a curve', 'the y-intercept'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Advanced Literary Analysis',
      summary: 'Analyze literature at an advanced level.',
      learn: ['Analyze complex themes and techniques', 'Write sophisticated essays', 'Engage with critical perspectives'],
      quiz: [
        { q: 'Allusion is...', options: ['a reference to another work', 'a type of rhyme', 'a plot twist'], a: 0 },
        { q: 'A critical lens is...', options: ['a perspective for analyzing', 'a magnifying glass', 'a title'], a: 0 },
        { q: 'Diction refers to...', options: ['word choice', 'sentence length', 'paragraph breaks'], a: 0 }
      ]
    },
    {
      title: 'Essay and Thesis Writing',
      summary: 'Write university-level essays.',
      learn: ['Develop a strong thesis', 'Synthesize sources', 'Write with academic style'],
      quiz: [
        { q: 'Synthesis means...', options: ['combining ideas from sources', 'copying one source', 'listing facts'], a: 0 },
        { q: 'Academic style is...', options: ['formal and precise', 'casual', 'slang-heavy'], a: 0 },
        { q: 'A strong thesis is...', options: ['arguable and specific', 'obvious', 'a list'], a: 0 }
      ]
    },
    {
      title: 'Research Project',
      summary: 'Plan and complete a research project.',
      learn: ['Form a research question', 'Gather and evaluate sources', 'Present findings'],
      quiz: [
        { q: 'A research project starts with...', options: ['a focused question', 'a random topic', 'the conclusion'], a: 0 },
        { q: 'Evaluating sources means...', options: ['checking credibility and relevance', 'accepting all', 'ignoring authors'], a: 0 },
        { q: 'Presenting findings should...', options: ['be organized and clear', 'be confusing', 'skip the conclusion'], a: 0 }
      ]
    },
    {
      title: 'Communication and Media',
      summary: 'Analyze and create media.',
      learn: ['Analyze media messages', 'Create effective communication', 'Understand audience and purpose'],
      quiz: [
        { q: 'Audience and purpose shape...', options: ['how you communicate', 'the weather', 'nothing'], a: 0 },
        { q: 'Effective communication is...', options: ['clear and audience-focused', 'confusing', 'long'], a: 0 },
        { q: 'Media messages can be analyzed by...', options: ['asking who, what, why, and for whom', 'ignoring context', 'only watching'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Communicate at a professional level.',
      learn: ['Deliver formal presentations', 'Engage in seminars', 'Listen and synthesize discussion'],
      quiz: [
        { q: 'A seminar involves...', options: ['group discussion', 'one person only', 'no talking'], a: 0 },
        { q: 'Professional speaking requires...', options: ['clarity and confidence', 'mumbling', 'no eye contact'], a: 0 },
        { q: 'Synthesizing a discussion means...', options: ['combining key points', 'ignoring others', 'repeating one idea'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Biology: Genetics and Heredity',
      summary: 'Learn how traits are inherited.',
      learn: ['Understand DNA and genes', 'Know dominant and recessive traits', 'Use Punnett squares'],
      quiz: [
        { q: 'DNA contains...', options: ['genetic information', 'only proteins', 'no information'], a: 0 },
        { q: 'A dominant trait...', options: ['appears even with one copy', 'never appears', 'needs two copies'], a: 0 },
        { q: 'A Punnett square predicts...', options: ['possible offspring traits', 'the weather', 'nothing'], a: 0 }
      ]
    },
    {
      title: 'Biology: Human Body Systems',
      summary: 'Learn how body systems work together.',
      learn: ['Know the nervous and endocrine systems', 'Understand homeostasis', 'See how systems regulate the body'],
      quiz: [
        { q: 'Homeostasis is...', options: ['keeping internal balance', 'growing', 'sleeping'], a: 0 },
        { q: 'The nervous system...', options: ['sends electrical signals', 'digests food', 'pumps blood'], a: 0 },
        { q: 'Hormones are produced by the...', options: ['endocrine system', 'skeleton', 'skin'], a: 0 }
      ]
    },
    {
      title: 'Chemistry: Equilibrium and Acids/Bases',
      summary: 'Learn about equilibrium and pH.',
      learn: ['Understand chemical equilibrium', 'Know acids and bases', 'Understand pH scale'],
      quiz: [
        { q: 'The pH scale ranges from...', options: ['0 to 14', '0 to 7', '1 to 10'], a: 0 },
        { q: 'A pH below 7 is...', options: ['acidic', 'basic', 'neutral'], a: 0 },
        { q: 'A pH above 7 is...', options: ['basic (alkaline)', 'acidic', 'neutral'], a: 0 }
      ]
    },
    {
      title: 'Physics: Momentum and Energy',
      summary: 'Learn about momentum and energy conservation.',
      learn: ['Understand momentum (p = mv)', 'Know conservation of momentum', 'Understand energy conservation'],
      quiz: [
        { q: 'Momentum = ...', options: ['mass × velocity', 'mass ÷ velocity', 'mass + velocity'], a: 0 },
        { q: 'In a closed system, momentum is...', options: ['conserved', 'lost', 'doubled'], a: 0 },
        { q: 'Energy in a closed system is...', options: ['conserved', 'created', 'destroyed'], a: 0 }
      ]
    },
    {
      title: 'Physics: Electromagnetism and Modern Physics',
      summary: 'Learn about electromagnetism and modern physics.',
      learn: ['Understand electromagnetic waves', 'Know the electromagnetic spectrum', 'Learn basics of quantum theory'],
      quiz: [
        { q: 'Light is a form of...', options: ['electromagnetic radiation', 'sound', 'matter'], a: 0 },
        { q: 'The electromagnetic spectrum includes...', options: ['radio waves to gamma rays', 'only visible light', 'only X-rays'], a: 0 },
        { q: 'Quantum theory describes...', options: ['behaviour of very small particles', 'large objects only', 'weather'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Ideologies',
      summary: 'Understand major political ideologies.',
      learn: ['Know liberalism, conservatism, socialism', 'Understand how ideologies shape policy', 'Compare ideologies'],
      quiz: [
        { q: 'Liberalism generally values...', options: ['individual rights and freedom', 'strict control', 'no rights'], a: 0 },
        { q: 'Conservatism generally values...', options: ['tradition and stability', 'rapid change', 'anarchy'], a: 0 },
        { q: 'Socialism generally values...', options: ['social ownership and equality', 'total monarchy', 'individualism only'], a: 0 }
      ]
    },
    {
      title: 'Liberalism in History',
      summary: 'Learn how liberalism developed.',
      learn: ['Liberalism grew from the Enlightenment', 'It emphasizes rights and equality', 'It shaped modern democracies'],
      quiz: [
        { q: 'Liberalism grew from...', options: ['the Enlightenment', 'the Stone Age', 'feudalism only'], a: 0 },
        { q: 'Classical liberalism emphasized...', options: ['individual freedom and limited government', 'absolute monarchy', 'no rights'], a: 0 },
        { q: 'Liberalism influenced...', options: ['modern democracies', 'nothing', 'only monarchies'], a: 0 }
      ]
    },
    {
      title: 'Responses to Liberalism',
      summary: 'Learn how different ideologies respond to liberalism.',
      learn: ['Understand critiques of liberalism', 'Know alternative ideologies', 'See the spectrum of ideas'],
      quiz: [
        { q: 'Some critics argue liberalism...', options: ['overemphasizes individualism', 'is perfect', 'has no flaws'], a: 0 },
        { q: 'Collectivist ideologies emphasize...', options: ['the group over the individual', 'the individual over all', 'nothing'], a: 0 },
        { q: 'The political spectrum ranges from...', options: ['left to right', 'top to bottom', 'no range'], a: 0 }
      ]
    },
    {
      title: 'Ideologies in the Modern World',
      summary: 'See how ideologies shape today\'s world.',
      learn: ['Ideologies shape parties and policies', 'They influence global politics', 'Debate continues today'],
      quiz: [
        { q: 'Political parties are often based on...', options: ['ideologies', 'weather', 'nothing'], a: 0 },
        { q: 'Ideologies influence...', options: ['laws and policies', 'only culture', 'nothing'], a: 0 },
        { q: 'Understanding ideologies helps you...', options: ['evaluate political ideas', 'ignore politics', 'stay uninformed'], a: 0 }
      ]
    }
  ]
};
