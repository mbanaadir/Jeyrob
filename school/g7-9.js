// Canadian (Alberta) curriculum — Grades 7–9
window.CURRICULUM = window.CURRICULUM || {};

window.CURRICULUM[7] = {
  math: [
    {
      title: 'Integers',
      summary: 'Add, subtract, multiply, and divide positive and negative numbers.',
      learn: ['Add and subtract integers', 'Multiply and divide integers', 'Apply integer rules to problems'],
      lesson: [
        { t: 'p', text: 'Integers are the whole numbers and their opposites: ..., -3, -2, -1, 0, 1, 2, 3, ... They do not include fractions or decimals. Positive integers are greater than zero, negative integers are less than zero, and zero is neither positive nor negative.' },
        { t: 'key', text: 'To add integers with the same sign, add their values and keep the sign. To add integers with different signs, subtract the smaller value from the larger and keep the sign of the one with the larger value. Subtracting an integer is the same as adding its opposite: a - b = a + (-b).' },
        { t: 'example', title: 'Worked example', text: 'Compute -3 + 7. The signs are different, so subtract: 7 - 3 = 4. Keep the sign of the number with the larger value (7 is positive), so -3 + 7 = 4.' },
        { t: 'p', text: 'For multiplication and division, the rule is simple: two numbers with the same sign give a positive result, and two numbers with different signs give a negative result. For example, (-2) x (-5) = 10, and 10 / (-2) = -5.' },
        { t: 'example', title: 'Worked example', text: 'Evaluate 6 - (-2). Change the subtraction into adding the opposite: 6 + 2 = 8. The two minus signs cancel each other into a plus, so 6 - (-2) = 8.' },
      ],
      quiz: [
        { q: 'What is -3 + 7?', options: ['4', '-4', '10'], a: 0 },
        { q: 'What is (-2) × (-5)?', options: ['10', '-10', '7'], a: 0 },
        { q: 'What is 6 - (-2)?', options: ['8', '4', '-8'], a: 0 }
      ]
    },
    {
      title: 'Fractions, Decimals, and Percent',
      summary: 'Work fluently with fractions, decimals, and percents.',
      learn: ['Convert between the three forms', 'Add and multiply fractions', 'Solve percent problems'],
      lesson: [
        { t: 'p', text: 'A fraction shows a part of a whole, a decimal writes the same part using place value, and a percent is a part out of 100. The same amount can be written in all three forms: 3/4 = 0.75 = 75%.' },
        { t: 'key', text: 'To convert a fraction to a decimal, divide the numerator by the denominator. To convert a decimal to a percent, multiply by 100 (move the decimal point two places to the right). To convert a percent to a fraction, write it over 100 and simplify.' },
        { t: 'example', title: 'Worked example', text: 'Convert 3/4 to a decimal: 3 / 4 = 0.75. Then 0.75 x 100 = 75, so 3/4 = 0.75 = 75%. Each form names the same amount.' },
        { t: 'p', text: 'To add or subtract fractions, first write them with a common denominator, then add or subtract the numerators. To multiply, multiply the numerators and the denominators straight across. To divide, multiply by the reciprocal of the second fraction.' },
        { t: 'example', title: 'Worked example', text: 'Find 1/3 + 1/3. The denominators are already the same, so add the numerators: (1 + 1)/3 = 2/3. To find 15% of 200, write 15% as 0.15 and multiply: 0.15 x 200 = 30.' },
      ],
      quiz: [
        { q: '3/4 as a decimal is...', options: ['0.75', '0.34', '0.5'], a: 0 },
        { q: 'What is 1/3 + 1/3?', options: ['2/3', '1/6', '2/6'], a: 0 },
        { q: '15% of 200 is...', options: ['30', '15', '40'], a: 0 }
      ]
    },
    {
      title: 'Algebra: Expressions and Equations',
      summary: 'Write expressions and solve simple equations.',
      learn: ['Simplify expressions', 'Solve one-step equations', 'Use variables to represent unknowns'],
      lesson: [
        { t: 'p', text: 'Algebra uses letters, called variables, to stand for unknown numbers. An expression such as 2x + 3 combines numbers and variables with operations. An equation such as x + 5 = 12 states that two expressions are equal.' },
        { t: 'key', text: 'To simplify an expression, combine like terms: terms with the same variable raised to the same power. For example, 2x + 3x = 5x because you add the coefficients (2 + 3) and keep the variable.' },
        { t: 'example', title: 'Worked example', text: 'Solve x + 5 = 12. Use inverse operations: subtract 5 from both sides, so x = 12 - 5 = 7. Check the answer: 7 + 5 = 12, which is true, so x = 7 is correct.' },
        { t: 'p', text: 'An equation is like a balance scale: whatever you do to one side, you must do to the other to keep it balanced. Division undoes multiplication, so if 3x = 15, then x = 15 / 3 = 5.' },
        { t: 'key', text: 'A solution is the value of the variable that makes the equation true. Always check your answer by substituting it back into the original equation before you finish.' },
      ],
      quiz: [
        { q: 'If x + 5 = 12, what is x?', options: ['7', '17', '5'], a: 0 },
        { q: 'Simplify 2x + 3x.', options: ['5x', '6x', '5x²'], a: 0 },
        { q: 'If 3x = 15, what is x?', options: ['5', '3', '12'], a: 0 }
      ]
    },
    {
      title: 'Geometry',
      summary: 'Work with angles, area, and transformations.',
      learn: ['Find missing angles', 'Calculate area of composite shapes', 'Perform translations, rotations, reflections'],
      lesson: [
        { t: 'p', text: 'Geometry is the study of shapes, sizes, and positions. Angles are measured in degrees: a full turn is 360 degrees, a straight line is 180 degrees, and a right angle is 90 degrees.' },
        { t: 'key', text: 'The angles inside a triangle always add up to 180 degrees, and the angles inside a quadrilateral always add up to 360 degrees. If you know some of the angles, you can find a missing one by subtracting.' },
        { t: 'example', title: 'Worked example', text: 'A quadrilateral has three angles of 90, 110, and 80 degrees. The missing angle is 360 - (90 + 110 + 80) = 360 - 280 = 80 degrees.' },
        { t: 'p', text: 'Area measures the space inside a two-dimensional shape. A parallelogram has area equal to base x height, and a triangle is half of a parallelogram, so its area is base x height / 2.' },
        { t: 'p', text: 'Transformations move shapes without changing their size: a translation slides a shape, a rotation turns it around a point, and a reflection flips it over a line to create a mirror image.' },
      ],
      quiz: [
        { q: 'The sum of angles in a quadrilateral is...', options: ['360°', '180°', '270°'], a: 0 },
        { q: 'A reflection is...', options: ['a mirror image', 'a slide', 'a turn'], a: 0 },
        { q: 'Area of a parallelogram = ...', options: ['base × height', 'base × height ÷ 2', 'base + height'], a: 0 }
      ]
    },
    {
      title: 'Data and Probability',
      summary: 'Analyze data and predict outcomes.',
      learn: ['Calculate mean, median, mode, range', 'Make circle graphs', 'Find experimental probability'],
      lesson: [
        { t: 'p', text: 'Statistics uses data from a sample — a subset of a population — to draw conclusions about the whole group. For the conclusions to be trustworthy, the sample must represent the population.' },
        { t: 'key', text: 'A biased sample does not reflect the population. Surveying only one club about a school-wide issue gives a biased result; choosing participants randomly helps avoid bias.' },
        { t: 'p', text: 'Probability runs from 0 to 1: an impossible event has probability 0, a certain event has probability 1, and a fair coin landing heads has probability 1/2.' },
        { t: 'example', title: 'Worked example', text: 'Rolling a six-sided die: P(3) = 1/6, P(an even number) = 3/6 = 1/2, and P(7) = 0, because 7 is not on the die. Each outcome is one of six equally likely results.' },
        { t: 'p', text: 'Look for bias in data as well: who collected it, what was measured, and how the question was asked can all skew the results. Reading data critically is part of numeracy.' },
      ],
      quiz: [
        { q: 'The range of 3, 7, 10 is...', options: ['7', '5', '10'], a: 0 },
        { q: 'The mean of 4, 8, 12 is...', options: ['8', '12', '6'], a: 0 },
        { q: 'A circle graph shows data as...', options: ['parts of a circle (percent)', 'bars', 'lines'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Analyze themes, characters, and author choices.',
      learn: ['Identify theme and point of view', 'Analyze characters', 'Compare texts'],
      lesson: [
        { t: 'p', text: 'Analyzing complex texts means noticing how authors create meaning — through literary devices, structure, and word choice — and evaluating the ideas the text presents.' },
        { t: 'key', text: 'Key devices: a metaphor is a comparison without \'like\' or \'as\'; a simile uses \'like\' or \'as\'; symbolism uses an object to represent an idea; irony is a gap between expectation and reality.' },
        { t: 'p', text: 'Evaluating themes means asking what the text says about life, people, or society, and whether the evidence in the text actually supports that message.' },
        { t: 'example', title: 'Worked example', text: 'In a story, a character who hoards food while neighbours starve may use the hoard as a symbol of greed. The theme could be about the cost of selfishness — the symbol points to the message.' },
        { t: 'p', text: 'To critique an argument, test its logic: are the premises true, does the conclusion follow from them, and are there counterarguments the author ignored?' },
      ],
      quiz: [
        { q: 'Point of view is...', options: ['who tells the story', 'the setting', 'the title'], a: 0 },
        { q: 'First-person point of view uses...', options: ['"I" and "me"', '"he" and "she"', '"they" only'], a: 0 },
        { q: 'Analyzing a character means...', options: ['understanding their traits and motives', 'just naming them', 'counting them'], a: 0 }
      ]
    },
    {
      title: 'Writing: Essays and Narratives',
      summary: 'Write well-structured essays and stories.',
      learn: ['Write a thesis statement', 'Use paragraphs with evidence', 'Plan and revise'],
      lesson: [
        { t: 'p', text: 'An essay is organized writing that presents a main idea and supports it. A thesis statement is one sentence that states the essay\'s main argument or focus, and everything else in the essay should connect to it.' },
        { t: 'key', text: 'A strong essay has a clear structure: an introduction that ends with the thesis, body paragraphs that each develop one point with evidence, and a conclusion that wraps up the ideas without introducing anything new.' },
        { t: 'example', title: 'Worked example', text: 'Thesis: \'Recess improves learning because it boosts attention and builds social skills.\' Each body paragraph should support one part of that claim with examples, facts, or details.' },
        { t: 'p', text: 'A narrative tells a story with a plot, characters, and a setting. Use specific details, dialogue, and sensory language so readers can picture the scene and feel what the characters feel.' },
        { t: 'p', text: 'Good writers plan before they draft and revise after they finish. Planning organizes ideas before writing; revision improves word choice, clarity, and organization — it is much more than fixing spelling.' },
      ],
      quiz: [
        { q: 'A thesis statement...', options: ['states the main argument', 'is a title', 'is the last word'], a: 0 },
        { q: 'Each body paragraph should...', options: ['support the thesis with evidence', 'introduce a new unrelated topic', 'be empty'], a: 0 },
        { q: 'An essay typically has...', options: ['intro, body, conclusion', 'one paragraph', 'only dialogue'], a: 0 }
      ]
    },
    {
      title: 'Grammar and Conventions',
      summary: 'Use correct grammar in writing.',
      learn: ['Use correct verb tense', 'Use commas and semicolons', 'Avoid common errors'],
      lesson: [
        { t: 'p', text: 'Grammar is the system of rules that makes language clear and consistent. Conventions are the standard spellings, punctuation, and usage that readers expect in formal writing.' },
        { t: 'key', text: 'Verbs must agree with their subjects and show the correct tense. \'She runs every day\' (present) and \'She ran yesterday\' (past) are correct; \'She run every day\' is not, because the verb does not match the subject.' },
        { t: 'p', text: 'Commas separate items in a list, set off introductory words, and join clauses together with conjunctions. A semicolon joins two closely related independent clauses without a conjunction.' },
        { t: 'example', title: 'Worked example', text: '\'The game was cancelled; the field was flooded.\' Both parts could stand alone as sentences, so a semicolon (or a period) is correct. A comma by itself would create a comma splice, which is an error.' },
        { t: 'key', text: 'Watch for common confusions: \'they\'re\' (they are), \'their\' (belonging to them), and \'there\' (a place); also \'its\' (belonging to it) versus \'it\'s\' (it is). Reading your writing aloud helps you catch these errors.' },
      ],
      quiz: [
        { q: 'Which is correct?', options: ['She runs every day.', 'She run every day.', 'She running every day.'], a: 0 },
        { q: 'A semicolon (;) joins...', options: ['two related independent clauses', 'a word and a number', 'nothing'], a: 0 },
        { q: 'Which is correct?', options: ['They\'re going home.', 'Their going home.', 'There going home.'], a: 0 }
      ]
    },
    {
      title: 'Media Literacy',
      summary: 'Think critically about media messages.',
      learn: ['Identify the purpose of media', 'Recognize bias', 'Evaluate sources'],
      lesson: [
        { t: 'p', text: 'Media includes everything created to reach an audience: news articles, advertisements, videos, social media posts, and more. Media literacy is the skill of reading media critically instead of passively accepting it.' },
        { t: 'key', text: 'Every media message is created by someone, for a purpose — to inform, to persuade, to entertain, or some mix of these. Ask: who made this, and what do they want me to think or do?' },
        { t: 'p', text: 'Bias is a tendency to favour one side. Media can be biased through word choice, through what it includes, and through what it leaves out.' },
        { t: 'example', title: 'Worked example', text: 'Two headlines about the same event: \'City Plans Big New Park\' versus \'City Spends Millions on Park\'. Each choice of words nudges the reader\'s feelings — that is bias showing up in framing.' },
        { t: 'p', text: 'Evaluate sources before trusting them: check who wrote the message, whether claims are supported by evidence, and whether other reliable sources agree. A reliable source is trustworthy and accurate.' },
      ],
      quiz: [
        { q: 'Media can be created to...', options: ['inform, persuade, or entertain', 'only confuse', 'only sell'], a: 0 },
        { q: 'Bias means...', options: ['favouring one side', 'being neutral', 'being fair'], a: 0 },
        { q: 'A reliable source is...', options: ['trustworthy and accurate', 'any website', 'always a video'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Communicate ideas clearly in formal settings.',
      learn: ['Deliver a structured presentation', 'Use evidence in discussion', 'Listen critically'],
      lesson: [
        { t: 'p', text: 'Debates and formal discussions require you to build and defend arguments, listen to opposing views, and respond with evidence and respect.' },
        { t: 'key', text: 'A debate argument has a clear position, reasons, and evidence. A rebuttal responds directly to the other side\'s strongest points instead of simply repeating your own.' },
        { t: 'p', text: 'Respectful disagreement challenges ideas, not people. Attack the argument, never the person — this keeps discussions productive and fair.' },
        { t: 'example', title: 'Worked example', text: 'Opponent: \'School should start later because teenagers need more sleep.\' Rebuttal: \'True, but later starts conflict with bus schedules and after-school jobs — here is how those could be managed.\' Acknowledge the point, then counter it.' },
        { t: 'key', text: 'Evidence is the currency of debate: facts, examples, and expert opinion persuade. Raised voices and insults do not.' },
      ],
      quiz: [
        { q: 'A formal presentation should have...', options: ['clear structure and evidence', 'no plan', 'only jokes'], a: 0 },
        { q: 'Critical listening means...', options: ['evaluating what you hear', 'accepting everything', 'ignoring everything'], a: 0 },
        { q: 'Using evidence in a discussion makes your point...', options: ['stronger', 'weaker', 'confusing'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Interactions and Ecosystems',
      summary: 'Learn how living things interact with their environment.',
      learn: ['Understand food chains and webs', 'Know producers, consumers, decomposers', 'See how ecosystems change'],
      lesson: [
        { t: 'p', text: 'An ecosystem is a community of living things together with the non-living environment around them — soil, water, air, and sunlight. All the parts interact, and a change in one part can affect the whole system.' },
        { t: 'key', text: 'Organisms have roles based on how they get energy: producers make their own food through photosynthesis (plants), consumers eat other organisms, and decomposers break down dead matter and return nutrients to the soil.' },
        { t: 'example', title: 'Worked example', text: 'In a meadow food chain, grass (a producer) is eaten by a rabbit (a consumer), which is eaten by a hawk (a consumer). When the rabbit dies, fungi and bacteria (decomposers) recycle its matter back into the soil.' },
        { t: 'p', text: 'A food chain shows one path of energy flow; a food web shows many connected chains within an ecosystem. Energy is lost at every step, which is why food chains are short and food webs are complex.' },
        { t: 'p', text: 'Ecosystems change over time through seasons, natural events such as fires and floods, and human activity. Removing or adding one species can ripple through the whole web of life.' },
      ],
      quiz: [
        { q: 'A producer is an organism that...', options: ['makes its own food', 'eats others', 'breaks down waste'], a: 0 },
        { q: 'A consumer is an organism that...', options: ['eats other organisms', 'makes food', 'is non-living'], a: 0 },
        { q: 'A decomposer...', options: ['breaks down dead matter', 'hunts', 'photosynthesizes'], a: 0 }
      ]
    },
    {
      title: 'Heat and Temperature',
      summary: 'Learn the difference between heat and temperature.',
      learn: ['Heat is energy; temperature measures it', 'Heat transfers by conduction, convection, radiation', 'Insulation slows heat transfer'],
      lesson: [
        { t: 'p', text: 'Heat and temperature are related but not the same. Heat is energy that flows from a hotter object to a colder one. Temperature measures how hot something is — it reflects the average motion of the particles in a substance.' },
        { t: 'key', text: 'Heat always moves from hot to cold until both objects reach the same temperature. It travels in three ways: conduction (direct contact), convection (movement of fluids), and radiation (energy moving through space).' },
        { t: 'example', title: 'Worked example', text: 'A metal spoon left in hot soup gets hot along its whole length because heat conducts from the hot end to your hand. The Sun warms Earth by radiation, which can travel through empty space.' },
        { t: 'p', text: 'Insulation is material that slows heat transfer. A thermos, a winter coat, or a foam cup works by trapping air, which is a poor conductor, keeping heat in or out.' },
        { t: 'key', text: 'Temperature is measured with a thermometer in degrees Celsius. Adding heat usually raises temperature, but during a change of state — melting, freezing, or boiling — the energy goes into the change while the temperature stays constant.' },
      ],
      quiz: [
        { q: 'Heat always moves from...', options: ['hot to cold', 'cold to hot', 'nowhere'], a: 0 },
        { q: 'Heat transfer through direct touch is...', options: ['conduction', 'radiation', 'evaporation'], a: 0 },
        { q: 'Heat transfer through empty space is...', options: ['radiation', 'conduction', 'convection'], a: 0 }
      ]
    },
    {
      title: 'Structures and Forces',
      summary: 'Learn how structures support loads.',
      learn: ['Understand compression and tension', 'Know how to strengthen structures', 'Analyze why structures fail'],
      lesson: [
        { t: 'p', text: 'A structure is something built to hold a load. Forces act on every structure: gravity pulls down, wind pushes sideways, and the structure pushes back to stay stable. A structure must be strong enough for the loads it carries.' },
        { t: 'key', text: 'Two key internal forces are compression and tension. Compression squeezes or pushes materials together, like a column under a heavy roof. Tension stretches or pulls materials apart, like a rope in a tug-of-war.' },
        { t: 'p', text: 'Shape and material both matter. Triangles are especially strong because they cannot be squeezed out of shape without changing the length of their sides — that is why bridges and roof trusses use triangular frames.' },
        { t: 'example', title: 'Worked example', text: 'A flat sheet of cardboard bends easily, but the same cardboard folded into a triangle or a cylinder can hold a heavy book. The shape spreads the load so no single part bends or buckles.' },
        { t: 'p', text: 'Structures fail when forces overcome their strength: too much load, weak joints, or materials that bend, crack, or snap. Engineers test designs to find these weak points before building.' },
      ],
      quiz: [
        { q: 'A force that squeezes is...', options: ['compression', 'tension', 'friction'], a: 0 },
        { q: 'A force that stretches is...', options: ['tension', 'compression', 'gravity'], a: 0 },
        { q: 'A triangle makes a structure...', options: ['stronger', 'weaker', 'heavier'], a: 0 }
      ]
    },
    {
      title: 'Planet Earth',
      summary: 'Learn about rocks, minerals, and Earth\'s changes.',
      learn: ['Know the rock cycle', 'Understand plate tectonics', 'Identify landforms'],
      lesson: [
        { t: 'p', text: 'Earth\'s crust is made of rock, and rocks are made of minerals — naturally occurring solids with a definite chemical makeup. The rock cycle shows how rocks change from one type to another over millions of years.' },
        { t: 'key', text: 'There are three rock types: igneous rock forms when magma or lava cools, sedimentary rock forms when layers of sediment are pressed together, and metamorphic rock forms when heat and pressure change existing rock deep underground.' },
        { t: 'example', title: 'Worked example', text: 'Granite forms when magma cools slowly underground, so it is igneous. Sandstone forms from pressed sand in ancient riverbeds, so it is sedimentary. Marble forms when limestone is squeezed and heated, so it is metamorphic.' },
        { t: 'p', text: 'Earth\'s outer shell is broken into tectonic plates that move very slowly. Where plates meet, they can collide, pull apart, or slide past one another — building mountains, causing earthquakes, and creating volcanoes.' },
        { t: 'p', text: 'Landforms such as mountains, valleys, plains, and coastlines are shaped by plate movements and by erosion from water, ice, and wind. These same processes continue to shape the planet today.' },
      ],
      quiz: [
        { q: 'The three rock types are...', options: ['igneous, sedimentary, metamorphic', 'solid, liquid, gas', 'hard, soft, medium'], a: 0 },
        { q: 'Earth\'s crust is made of moving...', options: ['tectonic plates', 'clouds', 'oceans'], a: 0 },
        { q: 'A volcano forms when...', options: ['magma reaches the surface', 'water freezes', 'wind blows'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Canada Before Confederation',
      summary: 'Learn about Canada before 1867.',
      learn: ['First Nations and Europeans interacted', 'British and French colonies existed', 'The fur trade shaped the land'],
      lesson: [
        { t: 'p', text: 'Before 1867, the land we now call Canada was home to many First Nations and Inuit peoples, and later to European colonies. These groups interacted through trade, alliances, and sometimes conflict.' },
        { t: 'key', text: 'The fur trade shaped the land and its peoples. Demand for beaver fur in Europe created networks of trade routes, and Indigenous peoples and European traders exchanged furs for manufactured goods such as tools and cloth.' },
        { t: 'example', title: 'Worked example', text: 'The Hudson\'s Bay Company and the North West Company built trading posts across the continent. Rivers and lakes became highways: canoes carried furs east and goods west, and many settlements grew around these posts.' },
        { t: 'p', text: 'Two main European colonial powers were Britain and France. Their rivalry, including wars fought partly on North American soil, helped determine which areas became British and which kept French language and culture.' },
        { t: 'p', text: 'Indigenous peoples were essential partners in the fur trade and central to the history of the land. Treaties and alliances shaped relations between Indigenous nations and newcomers for centuries.' },
      ],
      quiz: [
        { q: 'Before Confederation, Canada was made of...', options: ['British colonies', 'one country', 'only cities'], a: 0 },
        { q: 'The fur trade was driven by demand for...', options: ['beaver fur', 'gold', 'oil'], a: 0 },
        { q: 'Two main European groups in early Canada were...', options: ['British and French', 'Spanish and Dutch', 'Russian and German'], a: 0 }
      ]
    },
    {
      title: 'Confederation (1867)',
      summary: 'Learn how Canada became a country.',
      learn: ['Leaders met to unite the colonies', 'Confederation happened in 1867', 'Ontario, Quebec, NB, and NS joined first'],
      lesson: [
        { t: 'p', text: 'Confederation was the joining of separate British colonies into one country called Canada. It took effect on July 1, 1867, the date now celebrated as Canada Day.' },
        { t: 'key', text: 'Leaders from the colonies met at conferences — most importantly at Charlottetown and Quebec City — to plan the union. These men and women are remembered as the Fathers of Confederation.' },
        { t: 'p', text: 'The first four provinces were Ontario, Quebec, New Brunswick, and Nova Scotia. The new country created a federal government for national matters and provincial governments for local ones.' },
        { t: 'example', title: 'Worked example', text: 'One key reason for uniting was defence: the colonies felt threatened by American expansion and wanted to protect themselves together. A union also made it possible to build the railway that would connect the colonies.' },
        { t: 'p', text: 'Confederation created the Dominion of Canada with its capital at Ottawa. More provinces and territories joined over the following decades, expanding the country from sea to sea.' },
      ],
      quiz: [
        { q: 'Canada became a country in...', options: ['1867', '1812', '1901'], a: 0 },
        { q: 'Confederation means...', options: ['colonies joining into one country', 'a war', 'a trade deal only'], a: 0 },
        { q: 'The "Fathers of Confederation" were...', options: ['the leaders who united Canada', 'kings', 'farmers'], a: 0 }
      ]
    },
    {
      title: 'Canada After Confederation',
      summary: 'Learn how Canada grew after 1867.',
      learn: ['Canada expanded westward', 'The railway connected the country', 'More provinces joined'],
      lesson: [
        { t: 'p', text: 'After 1867, Canada grew quickly. The new country expanded westward, and the promise of land and opportunity drew settlers to the prairies and beyond.' },
        { t: 'key', text: 'The Canadian Pacific Railway was completed in 1885, connecting the east and west coasts. It made travel, trade, and communication across the country possible and helped bind the provinces together.' },
        { t: 'p', text: 'New provinces joined over time: Manitoba, British Columbia, Prince Edward Island, Saskatchewan, and Alberta. Each addition changed the shape and the character of the country.' },
        { t: 'example', title: 'Worked example', text: 'British Columbia agreed to join Canada in 1871 partly because the federal government promised a railway to the Pacific coast. The completion of the CPR in 1885 fulfilled that promise.' },
        { t: 'p', text: 'Growth also had a heavy cost: Indigenous peoples were displaced from their lands, and government policies such as the residential school system caused deep and lasting harm. Understanding these chapters is part of understanding Canada.' },
      ],
      quiz: [
        { q: 'The Canadian Pacific Railway...', options: ['connected east and west', 'was a river', 'only carried mail'], a: 0 },
        { q: 'Canada expanded by adding...', options: ['western provinces', 'only eastern provinces', 'no new land'], a: 0 },
        { q: 'The last province to join was...', options: ['Newfoundland and Labrador', 'Ontario', 'Quebec'], a: 0 }
      ]
    },
    {
      title: "Canada's Identity",
      summary: 'Explore what makes Canada unique.',
      learn: ['Canada is bilingual and multicultural', 'Canadian symbols and values', 'Indigenous peoples are central to identity'],
      lesson: [
        { t: 'p', text: 'Canada\'s identity is the set of symbols, values, and experiences that make the country distinctive. It is shaped by geography, history, and the many cultures that call Canada home.' },
        { t: 'key', text: 'Canada is officially bilingual — English and French are both official languages — and multicultural, welcoming people from many backgrounds. The Canadian Charter of Rights and Freedoms protects the rights and freedoms of everyone in Canada.' },
        { t: 'p', text: 'Symbols of Canada include the maple leaf, the beaver, the national anthem \'O Canada\', and the red-and-white flag adopted in 1965.' },
        { t: 'p', text: 'Indigenous peoples are central to Canadian identity. Their languages, cultures, and knowledge shaped this land long before Confederation, and they continue to shape the country today.' },
        { t: 'p', text: 'Canadian identity is not a single story: it includes many regions, languages, and traditions. Understanding identity means listening to the many voices that make up the country.' },
      ],
      quiz: [
        { q: 'Canada\'s two official languages are...', options: ['English and French', 'English and Spanish', 'French and German'], a: 0 },
        { q: 'Which is a Canadian symbol?', options: ['The maple leaf', 'The eagle only', 'The lion only'], a: 0 },
        { q: 'Canada is known for being...', options: ['multicultural', 'monolingual', 'closed'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[8] = {
  math: [
    {
      title: 'Rational Numbers',
      summary: 'Work with all rational numbers.',
      learn: ['Understand integers and fractions as rational numbers', 'Multiply and divide fractions', 'Solve problems with rational numbers'],
      lesson: [
        { t: 'p', text: 'A rational number is any number that can be written as a fraction a/b, where a and b are integers and b is not zero. Integers, fractions, and decimals that end or repeat are all rational numbers.' },
        { t: 'key', text: 'The rational numbers include positive and negative values. Numbers that cannot be written as a fraction of two integers — such as the square root of 2 or pi — are called irrational numbers.' },
        { t: 'p', text: 'To multiply fractions, multiply the numerators and multiply the denominators. To divide by a fraction, multiply by its reciprocal — the fraction flipped upside down.' },
        { t: 'example', title: 'Worked example', text: '1/2 x 3/4 = (1 x 3)/(2 x 4) = 3/8. And 2/3 / 2 = 2/3 x 1/2 = 2/6 = 1/3. Division by a whole number is division by a fraction with denominator 1.' },
        { t: 'p', text: 'Adding and subtracting fractions requires a common denominator first. Rational numbers follow the same sign rules as integers: two same signs multiply to a positive, and two different signs multiply to a negative.' },
      ],
      quiz: [
        { q: 'What is 1/2 × 3/4?', options: ['3/8', '3/4', '1/8'], a: 0 },
        { q: 'What is 2/3 ÷ 2?', options: ['1/3', '2/6', '4/3'], a: 0 },
        { q: 'Which is a rational number?', options: ['-4/5', '√2', 'π'], a: 0 }
      ]
    },
    {
      title: 'The Pythagorean Theorem',
      summary: 'Use a² + b² = c² to find sides of right triangles.',
      learn: ['Identify the hypotenuse', 'Use the theorem to find a missing side', 'Apply it to real problems'],
      lesson: [
        { t: 'p', text: 'The Pythagorean theorem connects the sides of a right triangle: the square of the hypotenuse equals the sum of the squares of the other two sides. In symbols, a squared + b squared = c squared, where c is the hypotenuse.' },
        { t: 'key', text: 'The hypotenuse is the longest side of a right triangle and is always opposite the right angle. The other two sides are called the legs.' },
        { t: 'example', title: 'Worked example', text: 'In a 3-4-5 triangle: 3 squared + 4 squared = 9 + 16 = 25, and 25 = 5 squared, so the hypotenuse is 5. This is the most famous Pythagorean triple.' },
        { t: 'p', text: 'To find a missing leg, rearrange the theorem: a squared = c squared - b squared. Then take the square root of both sides to get the length.' },
        { t: 'example', title: 'Worked example', text: 'If the legs are 6 and 8, then c squared = 6 squared + 8 squared = 36 + 64 = 100, so c = 10 (the square root of 100). The triangle is a 6-8-10 triangle.' },
        { t: 'p', text: 'The theorem is used in real life whenever a distance cannot be measured directly — in construction, navigation, and design. Carpenters even use 3-4-5 triangles to check that corners are square.' },
      ],
      quiz: [
        { q: 'The Pythagorean theorem is...', options: ['a² + b² = c²', 'a + b = c', 'a × b = c'], a: 0 },
        { q: 'For a 3-4-5 triangle, the hypotenuse is...', options: ['5', '3', '4'], a: 0 },
        { q: 'If a=6 and b=8, what is c?', options: ['10', '14', '48'], a: 0 }
      ]
    },
    {
      title: 'Linear Relations',
      summary: 'Graph and understand linear relationships.',
      learn: ['Plot points on a coordinate grid', 'Understand slope', 'Graph a linear equation'],
      lesson: [
        { t: 'p', text: 'A linear relation is a relationship between two variables that graphs as a straight line. It can be written like y = 2x + 1, where each x-value produces exactly one y-value.' },
        { t: 'key', text: 'Points on a coordinate grid are written (x, y): the first value tells how far right or left, and the second tells how far up or down. The point (3, 4) is 3 units right and 4 units up from the origin (0, 0).' },
        { t: 'p', text: 'Slope measures how steep a line is: slope = rise / run, where rise is the vertical change and run is the horizontal change. A positive slope rises to the right, a negative slope falls, and a horizontal line has slope zero.' },
        { t: 'example', title: 'Worked example', text: 'For y = 2x + 1: when x = 0, y = 1; when x = 1, y = 3; when x = 2, y = 5. Plot the points (0, 1), (1, 3), and (2, 5) and connect them — they form a straight line.' },
        { t: 'key', text: 'The y-intercept is the point where the line crosses the y-axis, where x = 0. In the form y = mx + b, m is the slope and b is the y-intercept.' },
      ],
      quiz: [
        { q: 'The slope of a line is...', options: ['rise over run', 'the y-value', 'the x-value'], a: 0 },
        { q: 'The point (3, 4) means...', options: ['x=3, y=4', 'x=4, y=3', 'x=3, y=3'], a: 0 },
        { q: 'A straight line on a graph shows a...', options: ['linear relation', 'circle', 'curve'], a: 0 }
      ]
    },
    {
      title: 'Geometry: Surface Area and Volume',
      summary: 'Find surface area and volume of 3D shapes.',
      learn: ['Find volume of prisms and cylinders', 'Find surface area', 'Apply to real objects'],
      lesson: [
        { t: 'p', text: 'Surface area is the total area of all the faces of a three-dimensional shape — the amount of material needed to cover it. Volume is the amount of space inside — the amount it can hold.' },
        { t: 'key', text: 'Volume of a prism equals the area of its base times its height. For a box (a rectangular prism): volume = length x width x height. Volume is measured in cubic units, like cubic centimetres.' },
        { t: 'example', title: 'Worked example', text: 'A box that is 5 cm long, 3 cm wide, and 2 cm high has volume 5 x 3 x 2 = 30 cubic centimetres. Its surface area is 2(5 x 3) + 2(5 x 2) + 2(3 x 2) = 30 + 20 + 12 = 62 square centimetres.' },
        { t: 'p', text: 'A cylinder has volume pi x radius squared x height, because its base is a circle. Its surface area is the two circular ends plus the curved side, which unrolls into a rectangle.' },
        { t: 'p', text: 'Surface area is measured in square units, like square centimetres. Together the two measures answer real questions: how much cardboard is in this box (surface area) and how much fits inside it (volume).' },
      ],
      quiz: [
        { q: 'Volume of a box = ...', options: ['length × width × height', 'length + width + height', 'length × width ÷ height'], a: 0 },
        { q: 'Volume is measured in...', options: ['cubic units', 'square units', 'degrees'], a: 0 },
        { q: 'Surface area is...', options: ['the total area of all faces', 'the inside space', 'the height'], a: 0 }
      ]
    },
    {
      title: 'Data and Probability',
      summary: 'Analyze data and calculate probability.',
      learn: ['Find theoretical probability', 'Use tree diagrams', 'Interpret graphs'],
      lesson: [
        { t: 'p', text: 'Statistics uses data from a sample — a subset of a population — to draw conclusions about the whole group. For the conclusions to be trustworthy, the sample must represent the population.' },
        { t: 'key', text: 'A biased sample does not reflect the population. Surveying only one club about a school-wide issue gives a biased result; choosing participants randomly helps avoid bias.' },
        { t: 'p', text: 'Probability runs from 0 to 1: an impossible event has probability 0, a certain event has probability 1, and a fair coin landing heads has probability 1/2.' },
        { t: 'example', title: 'Worked example', text: 'Rolling a six-sided die: P(3) = 1/6, P(an even number) = 3/6 = 1/2, and P(7) = 0, because 7 is not on the die. Each outcome is one of six equally likely results.' },
        { t: 'p', text: 'Look for bias in data as well: who collected it, what was measured, and how the question was asked can all skew the results. Reading data critically is part of numeracy.' },
      ],
      quiz: [
        { q: 'Theoretical probability is...', options: ['what should happen based on outcomes', 'a guess', 'always 50%'], a: 0 },
        { q: 'Probability of flipping two heads in a row is...', options: ['1/4', '1/2', '1/8'], a: 0 },
        { q: 'A tree diagram helps...', options: ['list all outcomes', 'measure area', 'count angles'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Interpret and critique texts.',
      learn: ['Analyze author\'s purpose and tone', 'Evaluate arguments', 'Synthesize information from multiple texts'],
      lesson: [
        { t: 'p', text: 'Analyzing complex texts means noticing how authors create meaning — through literary devices, structure, and word choice — and evaluating the ideas the text presents.' },
        { t: 'key', text: 'Key devices: a metaphor is a comparison without \'like\' or \'as\'; a simile uses \'like\' or \'as\'; symbolism uses an object to represent an idea; irony is a gap between expectation and reality.' },
        { t: 'p', text: 'Evaluating themes means asking what the text says about life, people, or society, and whether the evidence in the text actually supports that message.' },
        { t: 'example', title: 'Worked example', text: 'In a story, a character who hoards food while neighbours starve may use the hoard as a symbol of greed. The theme could be about the cost of selfishness — the symbol points to the message.' },
        { t: 'p', text: 'To critique an argument, test its logic: are the premises true, does the conclusion follow from them, and are there counterarguments the author ignored?' },
      ],
      quiz: [
        { q: 'Tone is...', options: ['the author\'s attitude', 'the page number', 'the font'], a: 0 },
        { q: 'Evaluating an argument means...', options: ['judging if it is supported by evidence', 'accepting it blindly', 'ignoring it'], a: 0 },
        { q: 'Synthesizing means...', options: ['combining ideas from different texts', 'copying one text', 'deleting ideas'], a: 0 }
      ]
    },
    {
      title: 'Writing: Argument and Exposition',
      summary: 'Write persuasive and explanatory essays.',
      learn: ['Build a clear argument with evidence', 'Explain ideas with examples', 'Write a strong conclusion'],
      lesson: [
        { t: 'p', text: 'Argumentative writing takes a position and defends it; expository writing explains a topic clearly. Both need organization, evidence, and careful word choice.' },
        { t: 'key', text: 'A strong argument has three parts: a claim (your position), reasons (why you hold it), and evidence (facts, examples, or quotes that support the reasons). A claim without evidence is just an opinion.' },
        { t: 'example', title: 'Worked example', text: 'Claim: \'Schools should offer free breakfast.\' Evidence: studies show students who eat breakfast concentrate better, and local programs report improved attendance. The evidence makes the claim persuasive.' },
        { t: 'p', text: 'An explanation makes ideas clear to a reader who may know nothing about them: define unfamiliar terms, use concrete examples, and order steps logically.' },
        { t: 'key', text: 'A conclusion should summarize the main points and leave the reader with a final thought. It should never introduce a brand-new topic — that belongs in the body.' },
      ],
      quiz: [
        { q: 'An argument needs...', options: ['a claim supported by evidence', 'only opinions', 'no structure'], a: 0 },
        { q: 'A conclusion should...', options: ['summarize the main points', 'introduce new topics', 'be empty'], a: 0 },
        { q: 'Evidence can be...', options: ['facts, examples, quotes', 'feelings only', 'guesses'], a: 0 }
      ]
    },
    {
      title: 'Grammar and Style',
      summary: 'Use precise grammar and varied sentences.',
      learn: ['Vary sentence structure', 'Use active voice', 'Choose precise words'],
      lesson: [
        { t: 'p', text: 'Clear writing comes from deliberate choices: parallel structure, economy of words, and correct punctuation.' },
        { t: 'key', text: 'Parallel structure means using the same grammatical pattern for related ideas. Say \'I like hiking, swimming, and biking\' — not \'I like hiking, swimming, and to bike.\' The pattern must match.' },
        { t: 'p', text: 'Wordiness buries meaning. Cut the filler: \'He ran fast\' beats \'He proceeded to run in a very fast manner.\' Aim for the shortest clear version of every sentence.' },
        { t: 'p', text: 'Punctuation organizes sentences: commas separate and set off, semicolons join related clauses, colons introduce lists or explanations, and apostrophes show possession and contractions.' },
        { t: 'example', title: 'Worked example', text: 'Fix the comma splice \'She likes to read, she enjoys painting\' by splitting it into two sentences, joining it with a conjunction, or using a semicolon: \'She likes to read; she enjoys painting.\'' },
      ],
      quiz: [
        { q: 'Active voice: "The dog chased the ball." The subject is...', options: ['the dog (does the action)', 'the ball', 'there is none'], a: 0 },
        { q: 'Varying sentence length makes writing...', options: ['more engaging', 'confusing', 'shorter'], a: 0 },
        { q: 'Precise words make writing...', options: ['clearer', 'vaguer', 'longer'], a: 0 }
      ]
    },
    {
      title: 'Media and Digital Literacy',
      summary: 'Evaluate digital media and sources.',
      learn: ['Check if a source is credible', 'Recognize misinformation', 'Understand how media shapes views'],
      lesson: [
        { t: 'p', text: 'Digital media surrounds us, so evaluating it is a life skill. Credibility means a source is trustworthy and accurate — the information can be checked and stands up to scrutiny.' },
        { t: 'key', text: 'To check credibility, ask: Who is the author and what are their qualifications? Is the information supported by evidence and confirmed by other reliable sources? When was it published, and is it still current?' },
        { t: 'p', text: 'Misinformation is false or misleading information spread without the intent to deceive; disinformation is spread deliberately to mislead. Both can travel very fast online.' },
        { t: 'example', title: 'Worked example', text: 'A viral post claims that a new law was passed. Before sharing, check the official government website, a reputable news outlet, and the date of the post. If no reliable source confirms it, do not share it.' },
        { t: 'p', text: 'Media shapes our views by what it shows, how it frames it, and what it leaves out. Being aware of that power helps you consume media critically instead of automatically.' },
      ],
      quiz: [
        { q: 'To check credibility, you should...', options: ['verify with multiple sources', 'trust the first result', 'ignore the author'], a: 0 },
        { q: 'Misinformation is...', options: ['false or misleading information', 'always true', 'a type of chart'], a: 0 },
        { q: 'Media can shape views by...', options: ['what it shows and omits', 'nothing', 'only colours'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Communicate persuasively and listen critically.',
      learn: ['Deliver a persuasive speech', 'Listen to evaluate arguments', 'Respond to questions'],
      lesson: [
        { t: 'p', text: 'Debates and formal discussions require you to build and defend arguments, listen to opposing views, and respond with evidence and respect.' },
        { t: 'key', text: 'A debate argument has a clear position, reasons, and evidence. A rebuttal responds directly to the other side\'s strongest points instead of simply repeating your own.' },
        { t: 'p', text: 'Respectful disagreement challenges ideas, not people. Attack the argument, never the person — this keeps discussions productive and fair.' },
        { t: 'example', title: 'Worked example', text: 'Opponent: \'School should start later because teenagers need more sleep.\' Rebuttal: \'True, but later starts conflict with bus schedules and after-school jobs — here is how those could be managed.\' Acknowledge the point, then counter it.' },
        { t: 'key', text: 'Evidence is the currency of debate: facts, examples, and expert opinion persuade. Raised voices and insults do not.' },
      ],
      quiz: [
        { q: 'A persuasive speech should...', options: ['give reasons and evidence', 'just shout', 'have no point'], a: 0 },
        { q: 'When listening, evaluate...', options: ['the strength of the argument', 'the speaker\'s shoes', 'nothing'], a: 0 },
        { q: 'Answering questions well shows...', options: ['understanding', 'confusion', 'rudeness'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Mix and Flow of Matter (Fluids)',
      summary: 'Learn about fluids, density, and viscosity.',
      learn: ['Understand density', 'Know viscosity (thickness)', 'Use particle model of matter'],
      lesson: [
        { t: 'p', text: 'A fluid is anything that can flow: liquids and gases. The particle model of matter explains fluids: their particles are in constant motion, and the spacing and speed of the particles determine the fluid\'s properties.' },
        { t: 'key', text: 'Density is the amount of mass in a given volume: density = mass / volume. An object floats when it is less dense than the fluid around it and sinks when it is denser.' },
        { t: 'example', title: 'Worked example', text: 'A one-litre bottle of water has about one kilogram of mass, so its density is about 1 kg per litre. Ice floats because solid water is slightly less dense than liquid water — the particles spread out as it freezes.' },
        { t: 'p', text: 'Viscosity is a fluid\'s resistance to flow — its thickness. Honey has high viscosity and flows slowly; water has low viscosity and flows easily. Viscosity changes with temperature: syrup flows faster when it is warm.' },
        { t: 'p', text: 'Fluids are everywhere in technology. Hydraulic systems use fluids to multiply force, and engineers who design pipelines, pumps, and engines must understand density and viscosity to make them work.' },
      ],
      quiz: [
        { q: 'Density is...', options: ['mass per unit volume', 'colour', 'temperature'], a: 0 },
        { q: 'A fluid with high viscosity is...', options: ['thick, like honey', 'thin, like water', 'invisible'], a: 0 },
        { q: 'An object floats if it is...', options: ['less dense than the fluid', 'more dense', 'the same colour'], a: 0 }
      ]
    },
    {
      title: 'Cells and Systems',
      summary: 'Learn about cells, organs, and body systems.',
      learn: ['Cells are the basic unit of life', 'Know plant vs animal cells', 'Understand organ systems'],
      lesson: [
        { t: 'p', text: 'The cell is the basic unit of life. All living things — plants, animals, fungi, and bacteria — are made of cells, and every new cell comes from an existing cell.' },
        { t: 'key', text: 'Plant and animal cells share important parts: the nucleus (the control centre), cytoplasm, and mitochondria (where energy is released). Plant cells also have a cell wall, chloroplasts for photosynthesis, and a large vacuole.' },
        { t: 'p', text: 'Cells are organized into tissues, tissues into organs, and organs into organ systems. Each system has a job, and the systems work together to keep the body alive.' },
        { t: 'example', title: 'Worked example', text: 'The heart is an organ in the circulatory system. It pumps blood carrying oxygen and nutrients to every cell in the body; without it, cells could not get what they need to survive.' },
        { t: 'p', text: 'Major systems include the circulatory (heart and blood), digestive (stomach and intestines), respiratory (lungs), and nervous (brain and nerves) systems. A problem in one system affects the whole body.' },
      ],
      quiz: [
        { q: 'The basic unit of life is the...', options: ['cell', 'organ', 'tissue'], a: 0 },
        { q: 'Which structure is found in plant cells but not animal cells?', options: ['Cell wall', 'Nucleus', 'Mitochondria'], a: 0 },
        { q: 'The heart is part of the...', options: ['circulatory system', 'digestive system', 'nervous system'], a: 0 }
      ]
    },
    {
      title: 'Light and Optics',
      summary: 'Learn how light behaves and how we see.',
      learn: ['Light reflects and refracts', 'Lenses bend light', 'Understand how the eye works'],
      lesson: [
        { t: 'p', text: 'Light is a form of energy that travels in straight lines at enormous speed. When light meets matter, it interacts in three main ways: reflection, refraction, and absorption.' },
        { t: 'key', text: 'Reflection is light bouncing off a surface. A mirror follows the law of reflection: the angle of incidence equals the angle of reflection. Refraction is light bending as it passes from one material into another, such as from air into water.' },
        { t: 'example', title: 'Worked example', text: 'A straw in a glass of water looks bent at the surface. The light from the straw changes direction as it leaves the water, so your eye sees the straw in a slightly different position — that is refraction.' },
        { t: 'p', text: 'Lenses bend light to form images. A convex lens is thicker in the middle and brings light together, so it is used in magnifying glasses and cameras. A concave lens is thinner in the middle and spreads light apart.' },
        { t: 'key', text: 'The eye works like a camera: the lens focuses light onto the retina at the back, which sends signals to the brain. Glasses correct vision by adjusting how light is bent before it enters the eye.' },
      ],
      quiz: [
        { q: 'Light bouncing off a surface is...', options: ['reflection', 'refraction', 'absorption'], a: 0 },
        { q: 'Light bending as it passes through water is...', options: ['refraction', 'reflection', 'diffusion'], a: 0 },
        { q: 'A lens that is thicker in the middle is...', options: ['convex', 'concave', 'flat'], a: 0 }
      ]
    },
    {
      title: 'Water Systems',
      summary: 'Learn about water on Earth and its importance.',
      learn: ['Understand the water cycle', 'Know how water is distributed', 'See how humans affect water'],
      lesson: [
        { t: 'p', text: 'Water covers most of Earth\'s surface, but about 97 percent of it is saltwater in the oceans. Fresh water — the kind we drink — makes up only a small and precious share.' },
        { t: 'key', text: 'The water cycle moves water continuously: evaporation turns liquid water into vapour, condensation turns vapour into clouds, precipitation returns it as rain or snow, and collection stores it in oceans, lakes, and rivers.' },
        { t: 'p', text: 'Fresh water is stored in lakes, rivers, groundwater, and ice. Much of it is frozen or underground, so the fresh water we can easily use is very limited.' },
        { t: 'example', title: 'Worked example', text: 'A drop of rain falls on a mountain, flows into a stream, joins a river, reaches a lake, evaporates into a cloud, and falls again as rain. The same water keeps cycling — nothing is lost, only moved.' },
        { t: 'p', text: 'Humans affect water systems through pollution, dams, and climate change, which alter the cycle and water quality. Conserving water and protecting watersheds keeps the system healthy for everyone.' },
      ],
      quiz: [
        { q: 'Most of Earth\'s water is...', options: ['saltwater in oceans', 'freshwater in lakes', 'frozen in clouds'], a: 0 },
        { q: 'Evaporation is when water...', options: ['turns into vapour', 'freezes', 'falls as rain'], a: 0 },
        { q: 'Fresh water is...', options: ['limited and precious', 'unlimited', 'always salty'], a: 0 }
      ]
    },
    {
      title: 'Mechanical Systems',
      summary: 'Learn how machines transfer force and motion.',
      learn: ['Understand simple machines', 'Calculate mechanical advantage', 'See how machines make work easier'],
      lesson: [
        { t: 'p', text: 'Machines make work easier by changing the size or direction of a force. The simple machines are the lever, pulley, wheel and axle, inclined plane, wedge, and screw.' },
        { t: 'key', text: 'Work is done when a force moves an object: work = force x distance. A machine does not reduce the total work needed — it makes the work easier to apply.' },
        { t: 'p', text: 'Mechanical advantage is how much a machine multiplies your force: MA = output force / input force. A machine with a mechanical advantage of 4 lets you lift a load using only one quarter of the force.' },
        { t: 'example', title: 'Worked example', text: 'A lever lets a small person lift a heavy rock: pushing down on a long arm raises a short arm with much greater force. The longer the effort arm compared with the load arm, the bigger the advantage.' },
        { t: 'key', text: 'Machines also trade force for distance. A ramp, which is an inclined plane, lets you push a load up a gentle slope with less force — but over a longer distance.' },
      ],
      quiz: [
        { q: 'Mechanical advantage means a machine...', options: ['multiplies force', 'adds weight', 'removes friction'], a: 0 },
        { q: 'A lever, pulley, and wheel are...', options: ['simple machines', 'chemicals', 'cells'], a: 0 },
        { q: 'Work is done when...', options: ['a force moves an object', 'nothing moves', 'time passes'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Worldviews',
      summary: 'Understand how worldviews shape people and societies.',
      learn: ['A worldview is how a person sees the world', 'Worldviews are shaped by culture, religion, geography', 'Different societies have different worldviews'],
      lesson: [
        { t: 'p', text: 'A worldview is the framework of beliefs and values through which a person or society sees and understands the world. It acts like a lens that shapes how experiences are interpreted.' },
        { t: 'key', text: 'Worldviews are shaped by culture, religion, geography, history, and daily experience. People in different times and places can look at the same event and see very different things.' },
        { t: 'example', title: 'Worked example', text: 'A farming society may view land as a living source of life to be respected and protected, while an industrial society may view the same land as a resource to be developed. Both views come from different worldviews.' },
        { t: 'p', text: 'Worldviews influence real choices: what people value, how they govern themselves, what they trade, and how they treat outsiders.' },
        { t: 'key', text: 'Understanding worldviews helps explain history — why societies clashed, traded, or allied — and helps you notice your own assumptions. Your worldview is one lens among many.' },
      ],
      quiz: [
        { q: 'A worldview is...', options: ['how a person or group sees the world', 'a map', 'a language'], a: 0 },
        { q: 'Worldviews can be shaped by...', options: ['culture and religion', 'only weather', 'nothing'], a: 0 },
        { q: 'Two societies can have...', options: ['different worldviews', 'identical worldviews always', 'no worldview'], a: 0 }
      ]
    },
    {
      title: 'The Renaissance',
      summary: 'Learn about the rebirth of art and learning in Europe.',
      learn: ['The Renaissance began in Italy', 'It valued art, science, and humanism', 'Famous figures include Leonardo da Vinci'],
      lesson: [
        { t: 'p', text: 'The Renaissance was a period of renewed interest in art, science, and learning that began in Italy around the 1300s and spread across Europe. The word \'Renaissance\' means rebirth.' },
        { t: 'key', text: 'Humanism was the heart of the movement: a focus on human potential, achievement, and the study of classical Greek and Roman ideas. It did not replace religion, but it added a new confidence in human ability.' },
        { t: 'p', text: 'The Renaissance produced breathtaking art: realistic painting with perspective, detailed sculpture, and grand architecture. Wealthy cities such as Florence supported artists and scholars.' },
        { t: 'example', title: 'Worked example', text: 'Leonardo da Vinci was the Renaissance ideal: painter of the Mona Lisa, and also an inventor and scientist who studied anatomy, flight, and machines. One person mastering many fields was the Renaissance ideal.' },
        { t: 'p', text: 'The invention of the printing press spread Renaissance ideas quickly. More books meant more people could learn, which helped spark the Reformation and the beginnings of modern science.' },
      ],
      quiz: [
        { q: 'The Renaissance began in...', options: ['Italy', 'China', 'Canada'], a: 0 },
        { q: 'Humanism focused on...', options: ['human potential and learning', 'only religion', 'war'], a: 0 },
        { q: 'Leonardo da Vinci was a famous...', options: ['artist and inventor', 'king', 'soldier'], a: 0 }
      ]
    },
    {
      title: 'Japan (Edo Period)',
      summary: 'Learn about Japanese society during the Edo period.',
      learn: ['Japan was ruled by the shogun', 'Society had a strict class system', 'Japan was largely isolated'],
      lesson: [
        { t: 'p', text: 'The Edo period (1603 to 1868) was a long era of peace and stability in Japan under the Tokugawa shogunate. The shogun was the military ruler who held real power, while the emperor remained a symbolic figure.' },
        { t: 'key', text: 'Japanese society had a strict class system. At the top were the samurai warriors, followed by farmers, artisans, and merchants. Movement between classes was rare, and everyone had expected duties.' },
        { t: 'p', text: 'Japan was largely isolated during this period: the shogunate limited contact with outsiders, controlled trade, and forbade most foreigners from entering the country.' },
        { t: 'example', title: 'Worked example', text: 'Under the policy of isolation, only the port of Nagasaki remained open for limited trade with the Dutch and Chinese. This control helped keep Japan stable and independent for more than two centuries.' },
        { t: 'p', text: 'Despite isolation, Edo Japan flourished: cities grew, arts such as woodblock printing and kabuki theatre thrived, and literacy rose. In 1868 the shogunate fell, and the Meiji era of rapid change began.' },
      ],
      quiz: [
        { q: 'During the Edo period, Japan was ruled by the...', options: ['shogun', 'emperor only', 'samurai only'], a: 0 },
        { q: 'The samurai were...', options: ['warriors', 'farmers', 'merchants'], a: 0 },
        { q: 'Japan\'s isolation meant it...', options: ['limited contact with outsiders', 'traded with everyone', 'had no culture'], a: 0 }
      ]
    },
    {
      title: 'The Aztec Civilization',
      summary: 'Learn about the Aztec empire and worldview.',
      learn: ['The Aztecs lived in central Mexico', 'They built the city of Tenochtitlan', 'Their worldview centred on gods and sacrifice'],
      lesson: [
        { t: 'p', text: 'The Aztecs built a powerful empire in central Mexico. Their capital, Tenochtitlan, was a great city built on an island in a lake — the site of modern-day Mexico City.' },
        { t: 'key', text: 'Aztec society was highly organized: it had a calendar, a writing system, busy markets, and great engineering — causeways, canals, and aqueducts. An emperor ruled at the top of a complex social structure.' },
        { t: 'p', text: 'The Aztec worldview centred on the gods and the need to keep the world balanced. Religious ceremonies, including human sacrifice, were part of that belief system.' },
        { t: 'example', title: 'Worked example', text: 'Tenochtitlan connected to the mainland by causeways and used canals like streets, with boats moving people and goods. At its centre stood great temple pyramids dedicated to the gods.' },
        { t: 'p', text: 'The empire grew through conquest and tribute, collecting goods from conquered peoples. When Spanish forces arrived in 1519, alliances with peoples who resented Aztec rule helped bring the empire down.' },
      ],
      quiz: [
        { q: 'The Aztecs built their capital on...', options: ['an island (Tenochtitlan)', 'a mountain top', 'a desert'], a: 0 },
        { q: 'The Aztec capital was in modern-day...', options: ['Mexico', 'Peru', 'Canada'], a: 0 },
        { q: 'The Aztec worldview centred on...', options: ['gods and sacrifice', 'machines', 'space travel'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[9] = {
  math: [
    {
      title: 'Polynomials',
      summary: 'Add, subtract, multiply, and divide polynomials.',
      learn: ['Identify terms and degrees', 'Add and subtract polynomials', 'Multiply polynomials'],
      lesson: [
        { t: 'p', text: 'A polynomial is an expression made of terms — numbers, variables, and their products — added or subtracted. Examples include 3x squared, 2x + 1, and 4x cubed - x + 7.' },
        { t: 'key', text: 'The degree of a term is the exponent of its variable, and the degree of a polynomial is the highest degree among its terms. For example, 3x squared has degree 2, so the polynomial 3x squared + 2x + 1 also has degree 2.' },
        { t: 'p', text: 'To add or subtract polynomials, combine like terms — terms with the same variable raised to the same power. When subtracting, distribute the minus sign to every term of the second polynomial.' },
        { t: 'example', title: 'Worked example', text: '(2x squared + 3x + 1) + (x squared - x + 4) = 3x squared + 2x + 5. And (2x) + (3x) = 5x, because 2 + 3 = 5 and the variable stays the same.' },
        { t: 'p', text: 'To multiply polynomials, multiply every term of the first by every term of the second, then combine like terms: (x)(x) = x squared, and (x + 2)(x + 3) = x squared + 5x + 6.' },
        { t: 'key', text: 'When multiplying terms, multiply the coefficients and add the exponents of the same variable: x squared times x cubed equals x to the fifth. Watch your signs — a negative times a positive is negative.' },
      ],
      quiz: [
        { q: 'What is (2x) + (3x)?', options: ['5x', '6x', '5x²'], a: 0 },
        { q: 'What is (x)(x)?', options: ['x²', '2x', 'x'], a: 0 },
        { q: 'The degree of 3x² is...', options: ['2', '3', '1'], a: 0 }
      ]
    },
    {
      title: 'Linear Equations and Inequalities',
      summary: 'Solve and graph linear equations and inequalities.',
      learn: ['Solve multi-step equations', 'Graph lines', 'Solve and graph inequalities'],
      lesson: [
        { t: 'p', text: 'A linear equation has variables raised only to the first power — no squares or cubes — and its graph is a straight line. Solving it means isolating the variable using inverse operations.' },
        { t: 'key', text: 'Multi-step equations need several steps in order: simplify each side first, then undo addition or subtraction, and finally undo multiplication or division.' },
        { t: 'example', title: 'Worked example', text: 'Solve 2x + 3 = 11. Subtract 3 from both sides: 2x = 8. Divide both sides by 2: x = 4. Check: 2(4) + 3 = 11, which is true, so x = 4 is correct.' },
        { t: 'p', text: 'An inequality compares two expressions using the symbols <, >, less than or equal to, or greater than or equal to. Solve it like an equation, but flip the inequality sign when you multiply or divide by a negative number.' },
        { t: 'example', title: 'Worked example', text: 'If x > 5, then 6 works, but 4 and 5 do not. And for x - 2 = 7, add 2 to both sides to get x = 9. Inequalities describe a range of answers, while equations give one.' },
        { t: 'p', text: 'To graph a line, choose x-values and plot the points, or use the slope and y-intercept. To graph an inequality, draw the boundary line and shade the side where the inequality is true.' },
      ],
      quiz: [
        { q: 'If 2x + 3 = 11, what is x?', options: ['4', '3', '5'], a: 0 },
        { q: 'If x > 5, which value works?', options: ['6', '4', '5'], a: 0 },
        { q: 'The solution to x - 2 = 7 is...', options: ['9', '5', '7'], a: 0 }
      ]
    },
    {
      title: 'Similarity and Congruence',
      summary: 'Understand similar and congruent shapes.',
      learn: ['Congruent shapes are identical', 'Similar shapes have the same shape, different size', 'Use scale factors'],
      lesson: [
        { t: 'p', text: 'Congruent figures are identical in both shape and size — one can be placed exactly on top of the other. Similar figures have the same shape but may differ in size, like enlargements or reductions.' },
        { t: 'key', text: 'For congruent figures, corresponding angles are equal and corresponding sides are equal. For similar figures, corresponding angles are equal and corresponding sides are proportional.' },
        { t: 'example', title: 'Worked example', text: 'A photo enlarged from 10 cm wide to 20 cm wide is similar to the original: every length doubled, so the scale factor is 2, and all angles stayed the same.' },
        { t: 'p', text: 'The scale factor describes how sizes change between similar figures: a scale factor of 2 makes every length twice as big, and a scale factor of 1/2 makes every length half as big.' },
        { t: 'p', text: 'Similarity is used everywhere: maps, blueprints, and scale models represent real objects at a different size while keeping every proportion true to the original.' },
      ],
      quiz: [
        { q: 'Congruent shapes have...', options: ['same shape AND size', 'same shape only', 'different shape'], a: 0 },
        { q: 'Similar shapes have...', options: ['same shape, different size', 'same size only', 'nothing in common'], a: 0 },
        { q: 'A scale factor of 2 makes a shape...', options: ['twice as big', 'half as big', 'the same'], a: 0 }
      ]
    },
    {
      title: 'Circle Geometry',
      summary: 'Learn about chords, tangents, and angles in circles.',
      learn: ['Know parts of a circle', 'Understand inscribed angles', 'Solve circle problems'],
      lesson: [
        { t: 'p', text: 'A circle is the set of all points at a fixed distance, called the radius, from a centre point. The diameter is twice the radius and passes through the centre; the circumference is the distance around the circle.' },
        { t: 'key', text: 'An inscribed angle has its vertex on the circle and sides that are chords. An inscribed angle is half the size of the central angle that opens to the same arc.' },
        { t: 'example', title: 'Worked example', text: 'If a central angle is 80 degrees, the inscribed angle subtending the same arc is 40 degrees. And if the arc is a semicircle — cut by a diameter — the inscribed angle is 90 degrees, a right angle.' },
        { t: 'p', text: 'A tangent is a line that touches the circle at exactly one point. A tangent is always perpendicular to the radius drawn to that point of contact.' },
        { t: 'p', text: 'Chord properties help solve problems: a line from the centre perpendicular to a chord bisects the chord. These rules let you find missing angles and lengths in circle problems.' },
      ],
      quiz: [
        { q: 'The distance across a circle through the centre is the...', options: ['diameter', 'radius', 'chord'], a: 0 },
        { q: 'The diameter is how many times the radius?', options: ['2', '3', 'half'], a: 0 },
        { q: 'The distance around a circle is its...', options: ['circumference', 'area', 'diameter'], a: 0 }
      ]
    },
    {
      title: 'Data and Probability',
      summary: 'Analyze data and understand probability.',
      learn: ['Use samples to make conclusions', 'Calculate probability of events', 'Identify bias in data'],
      lesson: [
        { t: 'p', text: 'Statistics uses data from a sample — a subset of a population — to draw conclusions about the whole group. For the conclusions to be trustworthy, the sample must represent the population.' },
        { t: 'key', text: 'A biased sample does not reflect the population. Surveying only one club about a school-wide issue gives a biased result; choosing participants randomly helps avoid bias.' },
        { t: 'p', text: 'Probability runs from 0 to 1: an impossible event has probability 0, a certain event has probability 1, and a fair coin landing heads has probability 1/2.' },
        { t: 'example', title: 'Worked example', text: 'Rolling a six-sided die: P(3) = 1/6, P(an even number) = 3/6 = 1/2, and P(7) = 0, because 7 is not on the die. Each outcome is one of six equally likely results.' },
        { t: 'p', text: 'Look for bias in data as well: who collected it, what was measured, and how the question was asked can all skew the results. Reading data critically is part of numeracy.' },
      ],
      quiz: [
        { q: 'A sample should be...', options: ['representative of the population', 'biased', 'very small'], a: 0 },
        { q: 'Probability of an impossible event is...', options: ['0', '1', '0.5'], a: 0 },
        { q: 'Probability of a certain event is...', options: ['1', '0', '0.5'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Analyze complex texts and author techniques.',
      learn: ['Analyze literary devices', 'Evaluate themes', 'Critique arguments'],
      lesson: [
        { t: 'p', text: 'Analyzing complex texts means noticing how authors create meaning — through literary devices, structure, and word choice — and evaluating the ideas the text presents.' },
        { t: 'key', text: 'Key devices: a metaphor is a comparison without \'like\' or \'as\'; a simile uses \'like\' or \'as\'; symbolism uses an object to represent an idea; irony is a gap between expectation and reality.' },
        { t: 'p', text: 'Evaluating themes means asking what the text says about life, people, or society, and whether the evidence in the text actually supports that message.' },
        { t: 'example', title: 'Worked example', text: 'In a story, a character who hoards food while neighbours starve may use the hoard as a symbol of greed. The theme could be about the cost of selfishness — the symbol points to the message.' },
        { t: 'p', text: 'To critique an argument, test its logic: are the premises true, does the conclusion follow from them, and are there counterarguments the author ignored?' },
      ],
      quiz: [
        { q: 'A metaphor is...', options: ['a comparison without "like"', 'a comparison using "like"', 'a rhyme'], a: 0 },
        { q: 'A simile uses...', options: ['"like" or "as"', '"because"', '"and"'], a: 0 },
        { q: 'Symbolism is...', options: ['using an object to represent an idea', 'using big words', 'writing in short lines'], a: 0 }
      ]
    },
    {
      title: 'Writing: Analytical Essays',
      summary: 'Write essays that analyze texts.',
      learn: ['Build a thesis and support it', 'Quote and analyze evidence', 'Write a strong conclusion'],
      lesson: [
        { t: 'p', text: 'An analytical essay examines a text or topic and explains how it works: what it means and the techniques that create that meaning. It is not a summary.' },
        { t: 'key', text: 'The thesis — usually at the end of the introduction — states your interpretation and the reasons you will develop. Every body paragraph should connect back to it.' },
        { t: 'p', text: 'Use quotations as evidence, but never just paste them in. Introduce the quote, then explain what it shows and why it matters to your argument.' },
        { t: 'example', title: 'Worked example', text: 'Thesis: \'In the novel, the river symbolizes change and escape.\' A body paragraph quotes a moment on the river, then analyzes how the language portrays movement and freedom.' },
        { t: 'key', text: 'A strong conclusion restates the thesis in fresh words, summarizes the key evidence, and offers a final insight. It never introduces a new argument.' },
      ],
      quiz: [
        { q: 'An analytical essay...', options: ['examines and explains a text', 'just summarizes', 'tells a story'], a: 0 },
        { q: 'When you quote evidence, you should...', options: ['explain why it matters', 'just paste it', 'ignore it'], a: 0 },
        { q: 'A thesis is found in the...', options: ['introduction', 'conclusion only', 'title only'], a: 0 }
      ]
    },
    {
      title: 'Grammar and Style',
      summary: 'Write with clarity and precision.',
      learn: ['Use parallel structure', 'Avoid wordiness', 'Use punctuation correctly'],
      lesson: [
        { t: 'p', text: 'Clear writing comes from deliberate choices: parallel structure, economy of words, and correct punctuation.' },
        { t: 'key', text: 'Parallel structure means using the same grammatical pattern for related ideas. Say \'I like hiking, swimming, and biking\' — not \'I like hiking, swimming, and to bike.\' The pattern must match.' },
        { t: 'p', text: 'Wordiness buries meaning. Cut the filler: \'He ran fast\' beats \'He proceeded to run in a very fast manner.\' Aim for the shortest clear version of every sentence.' },
        { t: 'p', text: 'Punctuation organizes sentences: commas separate and set off, semicolons join related clauses, colons introduce lists or explanations, and apostrophes show possession and contractions.' },
        { t: 'example', title: 'Worked example', text: 'Fix the comma splice \'She likes to read, she enjoys painting\' by splitting it into two sentences, joining it with a conjunction, or using a semicolon: \'She likes to read; she enjoys painting.\'' },
      ],
      quiz: [
        { q: 'Parallel structure means...', options: ['using the same grammatical pattern', 'writing long sentences', 'using only short words'], a: 0 },
        { q: 'Wordy writing should be...', options: ['concise', 'longer', 'more complex'], a: 0 },
        { q: 'Which is more concise?', options: ['"He ran fast."', '"He ran at a very fast speed."', '"He proceeded to run in a fast manner."'], a: 0 }
      ]
    },
    {
      title: 'Research and Citation',
      summary: 'Find sources and cite them properly.',
      learn: ['Find credible sources', 'Paraphrase and quote correctly', 'Avoid plagiarism'],
      lesson: [
        { t: 'p', text: 'Research starts with finding credible sources: authoritative authors, evidence-based content, and current information. Libraries, databases, and official publications are strong starting points.' },
        { t: 'key', text: 'Paraphrasing means restating an idea in your own words — not just changing a few words. Quoting means using the exact words, placed in quotation marks. Both require a citation.' },
        { t: 'p', text: 'Plagiarism is using someone else\'s work without giving credit, whether you copied it or paraphrased it. It is academic dishonesty, and it is avoided by careful note-taking and citing as you go.' },
        { t: 'example', title: 'Worked example', text: 'Original: \'Bees pollinate most flowering plants.\' Paraphrase with citation: According to the source, bees are responsible for pollinating the majority of flowering plants (Author, year).' },
        { t: 'key', text: 'Cite whenever you use someone else\'s ideas or words — direct quotes, paraphrases, statistics, or images. When in doubt, cite.' },
      ],
      quiz: [
        { q: 'Plagiarism is...', options: ['using others\' work without credit', 'citing sources', 'writing your own ideas'], a: 0 },
        { q: 'Paraphrasing means...', options: ['putting ideas in your own words', 'copying exactly', 'deleting'], a: 0 },
        { q: 'You should cite a source when...', options: ['you use its ideas or words', 'you write your own idea', 'never'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Present and debate effectively.',
      learn: ['Build and defend an argument', 'Listen to opposing views', 'Use evidence respectfully'],
      lesson: [
        { t: 'p', text: 'Debates and formal discussions require you to build and defend arguments, listen to opposing views, and respond with evidence and respect.' },
        { t: 'key', text: 'A debate argument has a clear position, reasons, and evidence. A rebuttal responds directly to the other side\'s strongest points instead of simply repeating your own.' },
        { t: 'p', text: 'Respectful disagreement challenges ideas, not people. Attack the argument, never the person — this keeps discussions productive and fair.' },
        { t: 'example', title: 'Worked example', text: 'Opponent: \'School should start later because teenagers need more sleep.\' Rebuttal: \'True, but later starts conflict with bus schedules and after-school jobs — here is how those could be managed.\' Acknowledge the point, then counter it.' },
        { t: 'key', text: 'Evidence is the currency of debate: facts, examples, and expert opinion persuade. Raised voices and insults do not.' },
      ],
      quiz: [
        { q: 'In a debate, you should...', options: ['support your side with evidence', 'interrupt constantly', 'ignore the other side'], a: 0 },
        { q: 'Respectful disagreement means...', options: ['challenging ideas, not people', 'insulting', 'walking away'], a: 0 },
        { q: 'A strong rebuttal...', options: ['responds to the other side\'s points', 'ignores them', 'repeats only'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Biological Diversity',
      summary: 'Learn about the variety of life and why it matters.',
      learn: ['Understand genetic and species diversity', 'Know how species are classified', 'See why biodiversity is important'],
      lesson: [
        { t: 'p', text: 'Biodiversity is the variety of life: the number and kinds of species, the genetic variation within them, and the ecosystems they form together.' },
        { t: 'key', text: 'Genetic diversity is the variety of genes within a species; species diversity is the number of different species in an area. Both make ecosystems more resilient to change, disease, and stress.' },
        { t: 'p', text: 'Classification groups organisms by shared traits using a hierarchy: kingdom, phylum, class, order, family, genus, and species. Every species has a two-part scientific name.' },
        { t: 'example', title: 'Worked example', text: 'A wolf (Canis lupus) and a domestic dog (Canis familiaris) share the same genus, Canis — close relatives. The two-part name shows their relationship at a glance.' },
        { t: 'p', text: 'Biodiversity matters because it provides food, medicine, clean air and water, and ecosystem stability. Habitat loss and climate change are shrinking biodiversity, which harms ecosystems — and us.' },
      ],
      quiz: [
        { q: 'Biodiversity means...', options: ['the variety of life', 'one species only', 'extinct animals'], a: 0 },
        { q: 'Species are classified based on...', options: ['shared traits', 'size only', 'colour only'], a: 0 },
        { q: 'Losing biodiversity can...', options: ['harm ecosystems', 'help nothing', 'increase food'], a: 0 }
      ]
    },
    {
      title: 'Matter and Chemical Change',
      summary: 'Learn about chemical reactions and the periodic table.',
      learn: ['Know elements, compounds, mixtures', 'Understand the periodic table', 'Recognize signs of chemical change'],
      lesson: [
        { t: 'p', text: 'All matter is made of atoms. An element is a pure substance made of one kind of atom; a compound is made of two or more elements chemically combined; a mixture combines substances without chemical bonding.' },
        { t: 'key', text: 'The periodic table organizes the elements by atomic number and groups them by similar properties. The rows, called periods, and the columns, called groups, reveal patterns in how elements behave.' },
        { t: 'p', text: 'A chemical change forms new substances. Its signs include a colour change, gas production, heat or light given off, and a new solid forming. Unlike a physical change, a chemical change is hard or impossible to reverse.' },
        { t: 'example', title: 'Worked example', text: 'Burning wood is a chemical change: it produces ash, gases, heat, and light, and the wood cannot be turned back. Melting ice is a physical change — the melted water is still water.' },
        { t: 'p', text: 'In a chemical reaction, atoms are rearranged but never created or destroyed, so the total mass stays the same. This is the law of conservation of mass.' },
      ],
      quiz: [
        { q: 'The smallest unit of an element is an...', options: ['atom', 'cell', 'molecule'], a: 0 },
        { q: 'A chemical change...', options: ['forms a new substance', 'just changes shape', 'is always reversible'], a: 0 },
        { q: 'The periodic table organizes...', options: ['elements', 'animals', 'planets'], a: 0 }
      ]
    },
    {
      title: 'Electricity',
      summary: 'Learn about electric circuits and energy.',
      learn: ['Understand current, voltage, resistance', 'Build series and parallel circuits', 'Know electrical safety'],
      lesson: [
        { t: 'p', text: 'Electricity is the flow of electric charge, usually electrons moving through a conductor. Current, measured in amperes, is the amount of charge flowing past a point each second.' },
        { t: 'key', text: 'Voltage, measured in volts, is the push that drives the charge through a circuit. Resistance, measured in ohms, is how much a material opposes the flow. Ohm\'s law connects them: V = I x R, where I is the current.' },
        { t: 'p', text: 'In a series circuit, components sit on one single path. The current is the same everywhere, and if one bulb breaks, the circuit opens and everything stops.' },
        { t: 'p', text: 'In a parallel circuit, components sit on separate branches. Each branch gets the full voltage, and if one branch breaks, the others stay lit.' },
        { t: 'key', text: 'Electrical safety matters: water and electricity do not mix, overloaded outlets overheat, and damaged cords expose live wires. Circuit breakers and fuses protect people by opening the circuit when current gets too high.' },
      ],
      quiz: [
        { q: 'Current is the flow of...', options: ['electric charge', 'water', 'air'], a: 0 },
        { q: 'In a series circuit, if one bulb breaks...', options: ['the whole circuit stops', 'others stay lit', 'nothing happens'], a: 0 },
        { q: 'Voltage is measured in...', options: ['volts', 'amps', 'watts'], a: 0 }
      ]
    },
    {
      title: 'Space Exploration',
      summary: 'Learn about space science and exploration.',
      learn: ['Understand how telescopes work', 'Know about satellites and probes', 'See how space tech helps us'],
      lesson: [
        { t: 'p', text: 'Space exploration studies objects beyond Earth using tools on the ground and in space. It began with the naked eye, and the telescope opened up the universe.' },
        { t: 'key', text: 'Telescopes collect light. Optical telescopes gather visible light with lenses or mirrors, while radio telescopes detect radio waves from space. Bigger telescopes can see fainter and more distant objects.' },
        { t: 'p', text: 'Satellites are objects placed in orbit around Earth or other bodies. They power GPS, weather forecasting, communications, and Earth observation.' },
        { t: 'example', title: 'Worked example', text: 'A weather satellite orbits Earth taking images and measurements of clouds and temperature. That data feeds the forecasts you check each morning — space technology working for everyday life.' },
        { t: 'p', text: 'Probes and rovers explore other worlds. They have visited every planet, landed on Mars and the Moon, and studied asteroids — teaching us about Earth\'s past and the search for life.' },
        { t: 'key', text: 'Space technology has spinoffs on Earth: satellite navigation, weather prediction, new materials, and medical devices all benefit from space research.' },
      ],
      quiz: [
        { q: 'A telescope helps us...', options: ['see distant objects', 'hear sound', 'measure heat'], a: 0 },
        { q: 'A satellite is...', options: ['an object orbiting a planet', 'a star', 'a moon only'], a: 0 },
        { q: 'Space technology has given us...', options: ['GPS and weather satellites', 'nothing', 'only toys'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Governance and Rights',
      summary: 'Learn about government and individual rights.',
      learn: ['Understand different forms of government', 'Know the Canadian Charter', 'See how laws are made'],
      lesson: [
        { t: 'p', text: 'Governance is how a society organizes and exercises power. Forms of government range from democracies, where citizens choose their leaders, to authoritarian systems, where power is concentrated in few hands.' },
        { t: 'key', text: 'Canada is a constitutional monarchy and a parliamentary democracy. The monarch is the formal head of state, while elected representatives make the laws and a prime minister leads the government.' },
        { t: 'p', text: 'The Canadian Charter of Rights and Freedoms, adopted in 1982, protects fundamental freedoms — expression, religion, and assembly — as well as democratic, legal, and equality rights.' },
        { t: 'example', title: 'Worked example', text: 'Laws in Canada are made by Parliament: elected representatives debate and vote on bills, the Senate reviews them, and the monarch\'s representative grants royal assent before a bill becomes law.' },
        { t: 'p', text: 'Rights come with limits: the Charter allows reasonable limits, such as laws against hate speech, when they are justified in a free society. Courts interpret and protect these rights.' },
      ],
      quiz: [
        { q: 'Canada\'s government is a...', options: ['constitutional monarchy and democracy', 'dictatorship', 'theocracy'], a: 0 },
        { q: 'The Charter protects...', options: ['individual rights and freedoms', 'only the government', 'no one'], a: 0 },
        { q: 'Laws in Canada are made by...', options: ['elected representatives', 'the military', 'random choice'], a: 0 }
      ]
    },
    {
      title: 'Economic Systems',
      summary: 'Learn about different economic systems.',
      learn: ['Understand market and mixed economies', 'Know supply and demand', 'See how Canada\'s economy works'],
      lesson: [
        { t: 'p', text: 'An economic system decides what to produce, how to produce it, and who gets what is produced. The main types are traditional, command, market, and mixed economies.' },
        { t: 'key', text: 'In a market economy, supply and demand set prices. Supply is how much of a good is available; demand is how much people want it. Prices rise when demand outpaces supply, and fall the other way.' },
        { t: 'p', text: 'In a command economy, the government makes the production decisions. In a market economy, private choices and competition between businesses decide what gets made.' },
        { t: 'example', title: 'Worked example', text: 'Canada has a mixed economy: most goods are produced by private businesses responding to supply and demand, while the government provides public services such as health care and education and regulates markets.' },
        { t: 'p', text: 'Understanding economics helps you read the news, manage your money, and see how global trade connects Canada to the rest of the world.' },
      ],
      quiz: [
        { q: 'In a market economy, prices are set by...', options: ['supply and demand', 'the government only', 'chance'], a: 0 },
        { q: 'Canada has a...', options: ['mixed economy', 'pure market economy', 'command economy only'], a: 0 },
        { q: 'Supply is...', options: ['how much is available', 'what people want', 'the price only'], a: 0 }
      ]
    },
    {
      title: 'Quality of Life',
      summary: 'Understand the factors that affect quality of life.',
      learn: ['Know economic, social, and environmental factors', 'Compare quality of life', 'See how choices affect it'],
      lesson: [
        { t: 'p', text: 'Quality of life is how well people\'s needs and wants are met. It is broader than money: it includes health, education, safety, the environment, and community.' },
        { t: 'key', text: 'The factors include economic ones (income and jobs), social ones (health care, education, and family), and environmental ones (clean air, clean water, and green space). Countries can be compared using indicators such as life expectancy and literacy rates.' },
        { t: 'example', title: 'Worked example', text: 'Two countries with similar wealth can differ in quality of life: one spends on public health and parks, the other does not. Money is a means, not the whole measure of well-being.' },
        { t: 'p', text: 'Choices at every level affect quality of life — individual habits, community decisions, and government policy all play a part.' },
        { t: 'key', text: 'Comparing quality of life requires care: indicators measure averages, and averages can hide inequality within a country. Look beneath the numbers.' },
      ],
      quiz: [
        { q: 'Quality of life includes...', options: ['health, education, safety', 'only money', 'only entertainment'], a: 0 },
        { q: 'A high quality of life usually means...', options: ['basic needs met and more', 'only wealth', 'no community'], a: 0 },
        { q: 'Environmental factors include...', options: ['clean air and water', 'only roads', 'only buildings'], a: 0 }
      ]
    },
    {
      title: 'Consumerism',
      summary: 'Learn how consumer choices affect society.',
      learn: ['Understand advertising and wants', 'Make informed consumer choices', 'See the impact of consumption'],
      lesson: [
        { t: 'p', text: 'Consumerism is the culture of buying goods and services, often beyond basic needs. Advertising shapes what we want, not just what we need.' },
        { t: 'key', text: 'Advertising aims to persuade — through emotion, status, fear, or celebrity. Recognizing these techniques lets you decide with your head rather than just your feelings.' },
        { t: 'p', text: 'An informed consumer compares price, quality, and need before buying: research products, read reviews, and ask whether the purchase is a want or a need.' },
        { t: 'example', title: 'Worked example', text: 'Before buying a new phone, an informed consumer compares models and prices, checks durability and repair options, and asks whether the current phone still works well enough.' },
        { t: 'p', text: 'Consumption has impact: producing, shipping, and disposing of goods uses resources and creates waste. Over-consumption can harm the environment, so sustainable choices — buying less, reusing, and recycling — matter.' },
      ],
      quiz: [
        { q: 'Advertising aims to...', options: ['persuade you to buy', 'inform only', 'confuse'], a: 0 },
        { q: 'An informed consumer...', options: ['thinks before buying', 'buys everything', 'ignores prices'], a: 0 },
        { q: 'Over-consumption can...', options: ['harm the environment', 'help nothing', 'clean the air'], a: 0 }
      ]
    }
  ]
};
