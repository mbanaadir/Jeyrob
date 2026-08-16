// Canadian (Alberta) curriculum — Grades 10–12
window.CURRICULUM = window.CURRICULUM || {};

window.CURRICULUM[10] = {
  math: [
    {
      title: 'Measurement',
      summary: 'Measure and calculate lengths, areas, and volumes.',
      learn: ['Use metric and imperial units', 'Calculate area and volume', 'Solve measurement problems'],
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
