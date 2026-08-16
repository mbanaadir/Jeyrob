// Jeyrob School — Grade 11 original curriculum (fully self-contained, no external links)
window.CURRICULUM = window.CURRICULUM || {};
window.CURRICULUM[11] = {
  math: [
    {
      title: "Quadratic Functions",
      summary: "Understand parabolas, their vertex, and their roots.",
      lesson: [
        { t: "p", text: "A quadratic function has the form f(x) = ax² + bx + c, where a is not zero. Its graph is a smooth U-shaped curve called a parabola. If a is positive, the parabola opens upward like a smile; if a is negative, it opens downward like a frown." },
        { t: "key", text: "The vertex is the turning point of the parabola — the highest or lowest point. The axis of symmetry is the vertical line that passes through the vertex and divides the parabola into two mirror halves." },
        { t: "p", text: "The roots (or zeros) are the x-values where the graph crosses the x-axis. To find them, set f(x) = 0 and solve by factoring, completing the square, or the quadratic formula: x = (−b ± √(b² − 4ac)) / 2a." },
        { t: "example", title: "Worked example", text: "Solve x² − 5x + 6 = 0. Factor it: (x − 2)(x − 3) = 0. So x − 2 = 0 or x − 3 = 0, giving x = 2 and x = 3. The parabola crosses the x-axis at 2 and 3." },
        { t: "p", text: "The expression b² − 4ac inside the square root is called the discriminant. If it is positive there are two real roots; if zero, one root; if negative, no real roots." }
      ],
      quiz: [
        { q: "The graph of y = x² is a...", options: ["parabola", "straight line", "circle"], a: 0 },
        { q: "The roots of x² − 4 = 0 are...", options: ["2 and −2", "4 and −4", "0 and 4"], a: 0 },
        { q: "The vertex of y = x² is at...", options: ["(0, 0)", "(1, 1)", "(0, 1)"], a: 0 }
      ]
    },
    {
      title: "Radicals",
      summary: "Simplify square roots and rationalize denominators.",
      lesson: [
        { t: "p", text: "A radical such as √x is the square root of x. The number under the root sign is called the radicand. A square root asks: what number, multiplied by itself, gives the radicand?" },
        { t: "key", text: "The product rule is √(ab) = √a × √b. Use it to simplify a radical by pulling out perfect squares. For example √50 = √(25 × 2) = √25 × √2 = 5√2." },
        { t: "p", text: "To add or subtract radicals, they must have the same radicand (they are 'like' terms). For example 2√3 + 5√3 = 7√3, but √2 + √3 cannot be combined." },
        { t: "example", title: "Worked example", text: "Simplify √72. Break it into a perfect square and a leftover: √72 = √(36 × 2) = √36 × √2 = 6√2." },
        { t: "p", text: "Rationalizing the denominator means removing a radical from the bottom of a fraction. Multiply the top and bottom by the radical in the denominator. For example 1/√2 becomes (1 × √2)/(√2 × √2) = √2/2." }
      ],
      quiz: [
        { q: "√49 = ...", options: ["7", "14", "49"], a: 0 },
        { q: "√8 simplifies to...", options: ["2√2", "4", "8"], a: 0 },
        { q: "√50 simplifies to...", options: ["5√2", "25√2", "10"], a: 0 }
      ]
    },
    {
      title: "Sequences and Series",
      summary: "Work with arithmetic and geometric sequences and their sums.",
      lesson: [
        { t: "p", text: "A sequence is an ordered list of numbers. In an arithmetic sequence, each term is found by adding a fixed amount called the common difference (d). In a geometric sequence, each term is found by multiplying by a fixed amount called the common ratio (r)." },
        { t: "key", text: "Arithmetic nth term: aₙ = a₁ + (n − 1)d. Sum of the first n terms: Sₙ = (n/2)(a₁ + aₙ)." },
        { t: "example", title: "Worked example", text: "In 2, 5, 8, 11, … the common difference is d = 3. The 10th term is a₁₀ = 2 + 9(3) = 29. The sum of the first 10 terms is S₁₀ = (10/2)(2 + 29) = 5 × 31 = 155." },
        { t: "p", text: "Geometric nth term: aₙ = a₁ · r^(n−1). Sum of the first n terms: Sₙ = a₁(1 − rⁿ)/(1 − r), when r ≠ 1." },
        { t: "example", title: "Worked example", text: "In 2, 4, 8, 16, … the common ratio is r = 2. The 5th term is a₅ = 2 · 2⁴ = 2 · 16 = 32." }
      ],
      quiz: [
        { q: "In 2, 5, 8, 11, the common difference is...", options: ["3", "2", "5"], a: 0 },
        { q: "The next term in 2, 5, 8, 11 is...", options: ["14", "13", "12"], a: 0 },
        { q: "In 2, 4, 8, 16, the common ratio is...", options: ["2", "4", "8"], a: 0 }
      ]
    },
    {
      title: "Trigonometry",
      summary: "Use trig ratios, special angles, and the sine and cosine laws.",
      lesson: [
        { t: "p", text: "Trigonometry connects the sides and angles of triangles. In a right triangle, relative to a chosen angle θ: sine = opposite ÷ hypotenuse, cosine = adjacent ÷ hypotenuse, and tangent = opposite ÷ adjacent. Remember it as SOH CAH TOA." },
        { t: "key", text: "Special angles worth memorizing: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2. Also cos 30° = √3/2, cos 45° = √2/2, cos 60° = 1/2, and tan 45° = 1." },
        { t: "p", text: "For triangles that are not right-angled, use the sine law — a/sin A = b/sin B = c/sin C — or the cosine law — c² = a² + b² − 2ab·cos C." },
        { t: "example", title: "Worked example", text: "In a right triangle the side opposite θ is 3 and the hypotenuse is 6. Then sin θ = 3/6 = 1/2, so θ = 30°." },
        { t: "key", text: "A fundamental identity is sin²θ + cos²θ = 1 for any angle θ." }
      ],
      quiz: [
        { q: "sin(30°) = ...", options: ["0.5", "0.87", "1"], a: 0 },
        { q: "cos(60°) = ...", options: ["0.5", "0.87", "0"], a: 0 },
        { q: "sin²(x) + cos²(x) = ...", options: ["1", "0", "2"], a: 0 }
      ]
    },
    {
      title: "Inequalities",
      summary: "Solve linear and quadratic inequalities and write interval notation.",
      lesson: [
        { t: "p", text: "An inequality compares two expressions using <, >, ≤, or ≥. Solving an inequality is like solving an equation, with one important difference: when you multiply or divide both sides by a negative number, you must flip the inequality sign." },
        { t: "key", text: "Write solutions in interval notation. For example x > 4 is written (4, ∞). Use a square bracket [ or ] to include an endpoint, and a round bracket ( or ) to exclude it." },
        { t: "example", title: "Worked example", text: "Solve 3x − 2 > 7. Add 2 to both sides: 3x > 9. Divide by 3: x > 3. In interval notation this is (3, ∞)." },
        { t: "example", title: "Worked example (negative)", text: "Solve −2x ≤ 10. Divide both sides by −2 and flip the sign: x ≥ −5. In interval notation: [−5, ∞)." },
        { t: "p", text: "On a number line, use an open circle for < or > (endpoint not included) and a closed circle for ≤ or ≥ (endpoint included)." }
      ],
      quiz: [
        { q: "Solve x + 3 > 7.", options: ["x > 4", "x > 10", "x < 4"], a: 0 },
        { q: "Solve 2x ≤ 10.", options: ["x ≤ 5", "x ≤ 20", "x ≥ 5"], a: 0 },
        { q: "On a number line, x > 2 uses...", options: ["an open circle at 2", "a closed circle at 2", "no mark"], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: "Literary Analysis",
      summary: "Analyze theme, symbolism, and literary devices.",
      lesson: [
        { t: "p", text: "Literary analysis means examining how an author uses language, structure, and literary devices to create meaning. Instead of just summarizing the plot, you explain what the text means and how it achieves that effect." },
        { t: "key", text: "Key devices: theme (the central message), motif (a recurring element), symbolism (an object that represents an idea), irony (a contrast between expectation and reality), and foreshadowing (a hint of what is to come)." },
        { t: "example", title: "Worked example", text: "If a character tends a small plant that keeps wilting, the plant may symbolize hope or resilience. Noticing that the plant reappears throughout the story (a motif) points to the theme of endurance." },
        { t: "p", text: "When you write about literature, support every claim with evidence from the text — a quote or a specific moment — and then explain why that evidence matters." },
        { t: "key", text: "A metaphor compares two things without 'like' or 'as'; a simile compares using 'like' or 'as'." }
      ],
      quiz: [
        { q: "A metaphor is...", options: ["a comparison without 'like' or 'as'", "a comparison using 'like'", "a rhyme"], a: 0 },
        { q: "A simile uses...", options: ["'like' or 'as'", "'because'", "'and'"], a: 0 },
        { q: "A motif is...", options: ["a recurring element", "a character's name", "the page number"], a: 0 }
      ]
    },
    {
      title: "Persuasive Writing",
      summary: "Build arguments with claim, evidence, and rhetorical appeals.",
      lesson: [
        { t: "p", text: "Persuasive writing aims to convince the reader. A strong argument has three parts: a clear claim (what you believe), evidence (facts, examples, or data), and reasoning (why the evidence supports the claim)." },
        { t: "key", text: "Three rhetorical appeals: ethos (credibility and trust), pathos (emotion), and logos (logic and reason). Strong arguments often combine all three." },
        { t: "example", title: "Worked example", text: "Claim: 'School should start later.' Logos: research shows teenagers need more sleep. Pathos: tired students suffer and lose motivation. Ethos: major medical organizations recommend later start times." },
        { t: "p", text: "Organize a persuasive essay with an introduction (hook + thesis), body paragraphs (one main reason each, with evidence), and a conclusion that restates the argument and calls the reader to act." }
      ],
      quiz: [
        { q: "Pathos appeals to...", options: ["emotion", "logic", "credibility"], a: 0 },
        { q: "Logos appeals to...", options: ["logic and reason", "emotion", "authority"], a: 0 },
        { q: "Ethos appeals to...", options: ["credibility and trust", "emotion", "fear"], a: 0 }
      ]
    },
    {
      title: "Research and Citation",
      summary: "Find credible sources, paraphrase, and cite to avoid plagiarism.",
      lesson: [
        { t: "p", text: "Research means finding, evaluating, and using information from sources. A credible source is trustworthy and accurate — for example, peer-reviewed journals, official reports, and reputable news outlets." },
        { t: "key", text: "Primary sources are original documents or data (a letter, a study, a photograph). Secondary sources interpret or analyze primary sources (a textbook, a review)." },
        { t: "p", text: "Plagiarism is using someone else's words or ideas without giving credit. Avoid it by paraphrasing (putting ideas in your own words) and by citing every source you use." },
        { t: "example", title: "Worked example", text: "To cite a book in APA style: Author, A. A. (Year). Title of the book. Publisher. Always follow the specific citation style your teacher requires (MLA or APA)." }
      ],
      quiz: [
        { q: "Plagiarism is...", options: ["using others' work without credit", "citing sources", "writing your own ideas"], a: 0 },
        { q: "A primary source is...", options: ["an original document or data", "a textbook", "a summary"], a: 0 },
        { q: "Paraphrasing means...", options: ["putting ideas in your own words", "copying exactly", "deleting"], a: 0 }
      ]
    },
    {
      title: "Media Literacy",
      summary: "Evaluate media messages and recognize bias.",
      lesson: [
        { t: "p", text: "Media literacy is the ability to analyze and evaluate media messages. Every message is created by someone, for a purpose, and for a particular audience." },
        { t: "key", text: "Ask five questions: Who created this? Why was it made? Who is the intended audience? What techniques persuade? What is left out?" },
        { t: "example", title: "Worked example", text: "A headline that calls a policy 'devastating' rather than 'significant' shows bias through word choice. Recognizing that framing helps you read critically." },
        { t: "p", text: "Bias is a tendency to favour one side. Reliable sources report facts with evidence and separate news from opinion. Checking multiple sources protects you from misinformation." }
      ],
      quiz: [
        { q: "Bias means...", options: ["favouring one side", "being neutral", "being fair"], a: 0 },
        { q: "A reliable source...", options: ["reports facts with evidence", "uses only opinion", "has no author"], a: 0 },
        { q: "Word choice can reveal...", options: ["bias", "the weather", "nothing"], a: 0 }
      ]
    },
    {
      title: "Speaking and Listening",
      summary: "Deliver organized speeches and listen critically.",
      lesson: [
        { t: "p", text: "Effective speaking is organized, clear, and audience-focused. A strong speech has a clear structure and is delivered with confidence." },
        { t: "key", text: "Structure a speech in three parts: an introduction (hook + thesis), a body (main points with evidence), and a conclusion (summary + call to action)." },
        { t: "example", title: "Worked example", text: "In a debate, rebut the other side's strongest point directly — respond with evidence, never insults. This builds critical thinking and persuades the audience." },
        { t: "p", text: "Active listening means focusing on the speaker, understanding their main points, and responding thoughtfully rather than only planning your reply." }
      ],
      quiz: [
        { q: "A formal speech should have...", options: ["a clear structure", "no plan", "only jokes"], a: 0 },
        { q: "Active listening involves...", options: ["focusing and responding", "planning your reply only", "daydreaming"], a: 0 },
        { q: "Debating builds...", options: ["critical thinking", "only aggression", "nothing"], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: "Biology: Photosynthesis and Respiration",
      summary: "Learn how organisms make and use energy.",
      lesson: [
        { t: "p", text: "Photosynthesis is how plants make their own food. Using sunlight, they combine carbon dioxide and water to make glucose (a sugar) and release oxygen as a by-product." },
        { t: "key", text: "Photosynthesis equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Cellular respiration is essentially the reverse: glucose + oxygen → carbon dioxide + water + energy (ATP)." },
        { t: "p", text: "Cellular respiration happens in the cells of nearly all living things, including plants and animals. It releases the energy stored in food so the organism can grow and move." },
        { t: "example", title: "Worked example", text: "A plant in sunlight takes in CO₂ and releases O₂ through photosynthesis. At the same time, its cells respire, using oxygen and releasing CO₂ — day and night." }
      ],
      quiz: [
        { q: "Photosynthesis uses...", options: ["sunlight, water, and CO₂", "oxygen only", "soil only"], a: 0 },
        { q: "Cellular respiration releases...", options: ["energy from food", "sunlight", "CO₂ only"], a: 0 },
        { q: "Plants make food through...", options: ["photosynthesis", "respiration", "digestion"], a: 0 }
      ]
    },
    {
      title: "Biology: Ecosystems and Populations",
      summary: "Learn how ecosystems and populations function.",
      lesson: [
        { t: "p", text: "An ecosystem includes all the living things in an area and the non-living environment they interact with. A population is a group of the same species living in one place." },
        { t: "key", text: "A food web shows the feeding relationships among organisms. A keystone species has a disproportionately large effect on its ecosystem relative to its abundance. Carrying capacity is the largest population an environment can support." },
        { t: "example", title: "Worked example", text: "Sea otters are a keystone species. Remove them and sea urchins multiply, overgrazing and destroying kelp forests — showing how one species can shape a whole ecosystem." },
        { t: "p", text: "Population growth is limited by resources such as food, water, and space, as well as predators and disease. These limits keep populations near their carrying capacity." }
      ],
      quiz: [
        { q: "A food web shows...", options: ["feeding relationships", "weather", "maps"], a: 0 },
        { q: "A keystone species...", options: ["has a large effect on its ecosystem", "has no role", "is extinct"], a: 0 },
        { q: "Population growth is limited by...", options: ["resources and space", "nothing", "only weather"], a: 0 }
      ]
    },
    {
      title: "Chemistry: Chemical Bonding",
      summary: "Learn how atoms bond to form compounds.",
      lesson: [
        { t: "p", text: "Atoms bond to become more stable. The two main types of chemical bond are ionic and covalent." },
        { t: "key", text: "An ionic bond forms when electrons are transferred from one atom to another — usually between a metal and a non-metal (for example, NaCl). A covalent bond forms when atoms share electrons — usually between non-metals (for example, H₂O)." },
        { t: "example", title: "Worked example", text: "In NaCl, a sodium atom (a metal) gives one electron to a chlorine atom (a non-metal). This forms Na⁺ and Cl⁻ ions, held together by the attraction of opposite charges." },
        { t: "p", text: "Ionic compounds conduct electricity when dissolved in water; most covalent compounds do not. Ionic compounds also tend to have high melting points compared with covalent ones." }
      ],
      quiz: [
        { q: "An ionic bond forms by...", options: ["transfer of electrons", "sharing electrons", "melting"], a: 0 },
        { q: "A covalent bond forms by...", options: ["sharing electrons", "transferring electrons", "freezing"], a: 0 },
        { q: "NaCl (table salt) is an...", options: ["ionic compound", "covalent molecule", "element"], a: 0 }
      ]
    },
    {
      title: "Physics: Kinematics",
      summary: "Describe motion with speed, velocity, and acceleration.",
      lesson: [
        { t: "p", text: "Kinematics is the study of motion without considering its causes. The key quantities are distance, displacement, speed, velocity, and acceleration." },
        { t: "key", text: "Speed = distance ÷ time. Velocity is speed with a direction. Acceleration = change in velocity ÷ time." },
        { t: "example", title: "Worked example", text: "A car travels 100 km in 2 hours, so its speed is 100 ÷ 2 = 50 km/h. If a cyclist speeds up from 0 to 30 m/s in 6 seconds, the acceleration is 30 ÷ 6 = 5 m/s²." },
        { t: "p", text: "Distance is how far you travel; displacement is how far you are from the start, in a straight line, with direction. Motion graphs — position-time and velocity-time — help you read speed and acceleration." }
      ],
      quiz: [
        { q: "Speed = ...", options: ["distance ÷ time", "time ÷ distance", "distance × time"], a: 0 },
        { q: "Acceleration is a change in...", options: ["velocity", "mass", "distance"], a: 0 },
        { q: "100 km in 2 hours gives a speed of...", options: ["50 km/h", "100 km/h", "200 km/h"], a: 0 }
      ]
    },
    {
      title: "Physics: Newton's Laws",
      summary: "Learn the three laws of motion.",
      lesson: [
        { t: "p", text: "Newton's three laws describe how forces affect motion." },
        { t: "key", text: "First law (inertia): an object stays at rest or moves at a constant velocity unless a net force acts on it. Second law: F = ma — force equals mass times acceleration. Third law: for every action there is an equal and opposite reaction." },
        { t: "example", title: "Worked example", text: "A 2 kg object accelerates at 3 m/s². Using F = ma, the force is F = 2 × 3 = 6 N (newtons)." },
        { t: "p", text: "Inertia is the tendency of an object to resist changes in its motion — heavier objects have more inertia. Action–reaction pairs always act on two different objects, which is why a rocket pushes exhaust down and is pushed up." }
      ],
      quiz: [
        { q: "Newton's second law is...", options: ["F = ma", "F = mv", "F = m/a"], a: 0 },
        { q: "Inertia is the tendency to...", options: ["resist changes in motion", "speed up", "slow down"], a: 0 },
        { q: "For every action, there is...", options: ["an equal and opposite reaction", "no reaction", "double the force"], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: "Nationalism",
      summary: "Understand nationalism and its effects.",
      lesson: [
        { t: "p", text: "Nationalism is a strong sense of identity with one's nation, built on shared history, language, culture, or territory. It can motivate people to unite, but it can also divide them." },
        { t: "key", text: "Nationalism has positive effects — unity, pride, and independence — and negative effects — conflict, exclusion, and prejudice. The same force can build a nation or tear one apart." },
        { t: "example", title: "Worked example", text: "A colony seeking self-rule is driven by nationalism. So is pride in a national sports team. Both come from the same sense of belonging to a nation." },
        { t: "p", text: "Studying nationalism means asking who belongs, who is excluded, and how national identity is created and challenged." }
      ],
      quiz: [
        { q: "Nationalism is...", options: ["a strong sense of national identity", "global unity", "indifference"], a: 0 },
        { q: "A positive effect of nationalism can be...", options: ["unity and pride", "only conflict", "nothing"], a: 0 },
        { q: "A negative effect can be...", options: ["conflict and exclusion", "only peace", "more trade"], a: 0 }
      ]
    },
    {
      title: "Self-Determination",
      summary: "Learn how nations seek to choose their own future.",
      lesson: [
        { t: "p", text: "Self-determination is the right of a people to choose their own political future and form of government." },
        { t: "key", text: "Some nations achieve self-determination peacefully — through referendums, negotiation, and law — while others achieve it through conflict and struggle." },
        { t: "example", title: "Worked example", text: "Norway became independent from Sweden peacefully in 1905 after a public referendum. This is a classic example of self-determination through peaceful means." },
        { t: "p", text: "A nation is a group of people who share a common identity — culture, language, history — whether or not they have their own country. Not every nation has a state, and not every state contains only one nation." }
      ],
      quiz: [
        { q: "Self-determination means...", options: ["a people choose their own future", "outside rule", "no choice"], a: 0 },
        { q: "Independence movements can be...", options: ["peaceful or violent", "always violent", "always peaceful"], a: 0 },
        { q: "A nation is...", options: ["a group with shared identity", "only a country", "only a government"], a: 0 }
      ]
    },
    {
      title: "National Identity",
      summary: "Learn how nations build and express identity.",
      lesson: [
        { t: "p", text: "National identity is how a nation understands and represents itself — through symbols, stories, shared values, and collective memory." },
        { t: "key", text: "Symbols include flags, anthems, and monuments. Identity can be inclusive (welcoming diverse people) or exclusive (defining who does not belong)." },
        { t: "example", title: "Worked example", text: "Canada's maple leaf flag and its policy of multiculturalism shape an inclusive national identity that welcomes people from many backgrounds." },
        { t: "p", text: "Identity is not fixed — it is continuously built and rebuilt through education, media, and public debate about what a nation stands for." }
      ],
      quiz: [
        { q: "National identity can be built through...", options: ["shared symbols and history", "nothing", "only laws"], a: 0 },
        { q: "A national symbol can be...", options: ["a flag or anthem", "only a colour", "nothing"], a: 0 },
        { q: "Inclusive identity...", options: ["welcomes diverse people", "excludes others", "has no meaning"], a: 0 }
      ]
    },
    {
      title: "Nationalism in the Modern World",
      summary: "See how nationalism shapes today's politics.",
      lesson: [
        { t: "p", text: "Nationalism remains a powerful force in modern politics, influencing elections, policies, and international relations." },
        { t: "key", text: "Nationalism and globalization coexist and often conflict. Globalization pushes toward open borders and trade, while nationalism emphasizes national interests and sovereignty." },
        { t: "example", title: "Worked example", text: "Trade policy often balances two forces: protecting national jobs (nationalism) versus joining global free-trade agreements (globalization)." },
        { t: "p", text: "Understanding nationalism helps you evaluate political ideas and see why leaders and parties appeal to national identity in different ways." }
      ],
      quiz: [
        { q: "Nationalism can influence...", options: ["elections and policies", "the weather", "nothing"], a: 0 },
        { q: "Nationalism and globalization can...", options: ["both coexist and conflict", "never interact", "be identical"], a: 0 },
        { q: "Understanding nationalism helps you...", options: ["evaluate political ideas", "ignore politics", "stay uninformed"], a: 0 }
      ]
    }
  ]
};
