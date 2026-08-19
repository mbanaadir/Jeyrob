// Canadian (Alberta) curriculum — Grades 4–6
window.CURRICULUM = window.CURRICULUM || {};

window.CURRICULUM[4] = {
  math: [
    {
      title: 'Numbers to 10 000',
      summary: 'Read, write, compare, and round numbers to ten thousand.',
      learn: ['Understand thousands, hundreds, tens, ones', 'Compare and order large numbers', 'Round to the nearest ten and hundred'],
      lesson: [
        { t: 'p', text: 'Our number system uses place value: the position of a digit gives it its value. In 4,562 the digit 4 sits in the thousands place, so it means 4,000 — four thousand — not just 4.' },
        { t: 'key', text: 'Place value columns from right to left: ones, tens, hundreds, thousands. The value of a digit is the digit times its place. The comma separates the thousands from the hundreds: 4,562 is read "four thousand five hundred sixty-two.' },
        { t: 'p', text: 'To compare two numbers, start at the left. 10,001 has five digits and 9,999 has four, so 10,001 is larger even though 9 is a big digit. To round, look at the digit to the right of the place you are rounding to.' },
        { t: 'example', title: 'Worked example', text: 'Round 47 to the nearest ten. The tens digit is 4; look at the ones digit, 7. Since 7 is 5 or more, round up: 47 rounds to 50. Now round 42: the ones digit is 2, which is less than 5, so round down: 42 rounds to 40.' },
        { t: 'p', text: 'Vocabulary: expanded form writes each digit with its value, like 4,562 = 4,000 + 500 + 60 + 2. Rounding means finding the closest number in a certain place value.' }
      ],
      quiz: [
        { q: 'In 4,562, the digit 4 means...', options: ['4 thousands (4000)', '4 hundreds', '4 ones'], a: 0 },
        { q: 'Round 47 to the nearest ten.', options: ['40', '50', '45'], a: 1 },
        { q: 'Which is largest?', options: ['9,999', '10,001', '9,900'], a: 1 }
      ]
    },
    {
      title: 'Multiplication and Division',
      summary: 'Multiply and divide larger numbers.',
      learn: ['Know facts up to 10 × 10', 'Multiply 2-digit by 1-digit', 'Divide with remainders'],
      lesson: [
        { t: 'p', text: 'Multiplication is fast adding of equal groups: 12 × 4 means four groups of 12, or 12 + 12 + 12 + 12 = 48. Division is the reverse — sharing into equal groups.' },
        { t: 'key', text: 'The multiplication facts up to 10 × 10 are the building blocks of all bigger problems. To multiply a 2-digit number by a 1-digit number, multiply the ones, then the tens, then add: 23 × 3 → 3 × 3 = 9 ones, and 3 × 20 = 60, so 60 + 9 = 69.' },
        { t: 'p', text: 'Division can leave a remainder. 47 ÷ 5 = 9 with a remainder of 2, because 9 × 5 = 45 and 2 are left over. You can always check division with multiplication: (9 × 5) + 2 = 47.' },
        { t: 'example', title: 'Worked example', text: '45 ÷ 5 = 9, because 9 × 5 = 45. Multiplication and division are inverse operations — they undo each other. If you know your times tables, you already know most of your division facts.' },
        { t: 'p', text: 'Vocabulary: the product is the answer to multiplication, the quotient is the answer to division, and the remainder is the amount left over.' }
      ],
      quiz: [
        { q: 'What is 12 × 4?', options: ['48', '44', '52'], a: 0 },
        { q: 'What is 45 ÷ 5?', options: ['8', '9', '10'], a: 1 },
        { q: 'What is 23 × 3?', options: ['69', '66', '63'], a: 0 }
      ]
    },
    {
      title: 'Fractions and Decimals',
      summary: 'Understand fractions and connect them to decimals.',
      learn: ['Compare fractions', 'Write fractions as decimals', 'Add simple fractions'],
      lesson: [
        { t: 'p', text: 'A fraction shows a part of a whole. The denominator (bottom number) tells how many equal parts the whole is split into; the numerator (top number) tells how many parts you have. In 3/4 the whole is split into 4 equal parts and you have 3 of them.' },
        { t: 'key', text: 'A decimal is another way to write a fraction with a denominator of 10 or 100. 1/2 = 5/10 = 0.5. The decimal point separates the whole part from the parts smaller than one.' },
        { t: 'p', text: 'To compare fractions with the same denominator, compare the numerators. To compare 3/4 and 1/2, first change 1/2 to 2/4 — now 3/4 and 2/4 have the same denominator, and 3 is bigger than 2, so 3/4 wins. Fractions that name the same amount, like 1/2 = 2/4 = 3/6, are called equivalent.' },
        { t: 'example', title: 'Worked example', text: 'Write 0.25 as a fraction. 0.25 means 25 hundredths, or 25/100. Divide the top and bottom by 25: 25/100 = 1/4. So 0.25 and 1/4 are two names for the same amount.' },
        { t: 'p', text: 'To add fractions with the same denominator, add the numerators and keep the denominator: 1/4 + 1/4 = 2/4, which is the same as 1/2.' }
      ],
      quiz: [
        { q: '1/2 as a decimal is...', options: ['0.5', '0.2', '0.25'], a: 0 },
        { q: 'Which is bigger — 3/4 or 1/2?', options: ['1/2', '3/4', 'They are equal'], a: 1 },
        { q: '0.25 as a fraction is...', options: ['1/4', '1/2', '3/4'], a: 0 }
      ]
    },
    {
      title: 'Area and Perimeter',
      summary: 'Measure the area and perimeter of shapes.',
      learn: ['Perimeter is the distance around a shape', 'Area is the space inside a shape', 'Use square units for area'],
      lesson: [
        { t: 'p', text: 'Perimeter is the distance around the outside of a shape — like the length of fence you need to surround a yard. Area is the amount of space inside — like how much grass covers the yard.' },
        { t: 'key', text: 'Perimeter is measured in plain units (cm, m); area is measured in square units (cm², m²). A square unit is a square that is 1 unit by 1 unit, and area counts how many of them fit inside.' },
        { t: 'p', text: 'For a rectangle: perimeter = 2 × (length + width), and area = length × width. Take a 3 cm by 4 cm rectangle: area = 3 × 4 = 12 cm², and perimeter = 2 × (3 + 4) = 14 cm.' },
        { t: 'example', title: 'Worked example', text: 'A square has sides of 5 cm. Area = 5 × 5 = 25 cm². Perimeter = 5 + 5 + 5 + 5 = 20 cm. Notice the units: area is in square centimetres (cm²), perimeter in plain centimetres (cm).' },
        { t: 'p', text: 'Vocabulary: the little 2 in cm² means the unit is squared — the area is measured in square units, not single units.' }
      ],
      quiz: [
        { q: 'The distance around a shape is its...', options: ['perimeter', 'area', 'volume'], a: 0 },
        { q: 'Area of a 3 cm by 4 cm rectangle is...', options: ['12 cm²', '7 cm²', '14 cm²'], a: 0 },
        { q: 'Perimeter of a 3 cm by 4 cm rectangle is...', options: ['12 cm', '14 cm', '7 cm'], a: 1 }
      ]
    },
    {
      title: 'Geometry and Data',
      summary: 'Name shapes, angles, and read graphs.',
      learn: ['Name 2D and 3D shapes', 'Identify right angles', 'Read bar graphs and pictographs'],
      lesson: [
        { t: 'p', text: 'Geometry is the study of shapes. Flat 2D shapes: triangles (3 sides), squares and rectangles (4 sides), pentagons (5), hexagons (6), octagons (8). Solid 3D shapes have depth: cubes, spheres, cylinders, and pyramids.' },
        { t: 'key', text: 'An angle measures the turn between two lines. A right angle is exactly 90° — like the corner of a piece of paper. Angles smaller than a right angle are acute; angles larger are obtuse.' },
        { t: 'p', text: 'Data is information collected to answer questions. A bar graph shows amounts as bars of different heights, so you can compare at a glance. A pictograph uses pictures, with each picture standing for a set number of items.' },
        { t: 'example', title: 'Worked example', text: 'Reading a bar graph: if the bar labelled "books read" reaches the line marked 10, that student read 10 books. To compare two students, compare the heights of their bars — the taller bar is the bigger amount.' },
        { t: 'p', text: 'Vocabulary: data means information, an axis is one of the lines along the bottom or side of a graph, and the scale is the set of numbers the bars are measured against.' }
      ],
      quiz: [
        { q: 'A right angle is...', options: ['90 degrees', '45 degrees', '180 degrees'], a: 0 },
        { q: 'A shape with 8 sides is an...', options: ['octagon', 'hexagon', 'pentagon'], a: 0 },
        { q: 'A bar graph is used to...', options: ['compare amounts', 'measure weight', 'count money'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Understand longer texts and find evidence.',
      learn: ['Find the main idea and details', 'Use evidence from the text', 'Summarize a passage'],
      lesson: [
        { t: 'p', text: 'Comprehension means understanding what you read. Good readers think while they read: What is this about? What did I just learn? What might happen next?' },
        { t: 'key', text: 'The main idea is the most important point of a paragraph; details are the smaller pieces of information that support it. The topic sentence — usually the first sentence — often states the main idea.' },
        { t: 'p', text: 'Evidence means pointing to the exact words in the text that support your answer, the way a detective shows clues. Starting your answer with "The text says..." is a good habit.' },
        { t: 'example', title: 'Worked example', text: 'Passage: "The beaver builds a lodge of sticks and mud. Its lodge has an underwater entrance." Main idea: beavers build lodges. Evidence: the text says the beaver "builds a lodge of sticks and mud.' },
        { t: 'p', text: 'A summary is a short version of a text that keeps only the main points, in your own words. It is shorter than the original but never loses the important ideas.' }
      ],
      quiz: [
        { q: 'Evidence from the text means...', options: ['quoting or pointing to the text', 'guessing', 'using your opinion only'], a: 0 },
        { q: 'A summary is...', options: ['a short version of the main points', 'the whole text copied', 'the title'], a: 0 },
        { q: 'The main idea of a paragraph is usually found...', options: ['in the topic sentence', 'in the last word', 'nowhere'], a: 0 }
      ]
    },
    {
      title: 'Vocabulary Building',
      summary: 'Learn new words and use them correctly.',
      learn: ['Use prefixes and suffixes', 'Use context clues', 'Choose precise words'],
      lesson: [
        { t: 'p', text: 'Every new word you learn makes reading and writing easier. One powerful tool is word parts: prefixes attach to the beginning of a word and suffixes attach to the end.' },
        { t: 'key', text: 'Prefixes change meaning: un- means not (unhappy = not happy), re- means again (redo = do again), pre- means before (preview = view before). Suffixes change a word\'s job: -ful means full of (joyful = full of joy), -less means without (fearless = without fear).' },
        { t: 'p', text: 'Context clues are hints in the sentences around an unknown word. If the text says "The desert is arid, with almost no rain," the phrase "almost no rain" tells you arid means very dry.' },
        { t: 'example', title: 'Worked example', text: '"The giant was enormous, towering over the houses." The clue "towering over the houses" tells you enormous means very big. You figured out the meaning without a dictionary!' },
        { t: 'p', text: 'Choosing precise words makes writing clearer. Instead of "nice," try "kind," "cheerful," or "generous" — each one paints a more exact picture.' }
      ],
      quiz: [
        { q: 'The prefix "un-" in "unhappy" means...', options: ['not', 'very', 'again'], a: 0 },
        { q: 'The suffix "-ful" in "joyful" means...', options: ['full of', 'without', 'before'], a: 0 },
        { q: 'A synonym for "happy" is...', options: ['glad', 'sad', 'angry'], a: 0 }
      ]
    },
    {
      title: 'Narrative Writing',
      summary: 'Write a story with a clear beginning, middle, and end.',
      learn: ['Plan characters and setting', 'Write events in order', 'Use descriptive words'],
      lesson: [
        { t: 'p', text: 'A narrative is a story. Every story needs characters (who the story is about), a setting (where and when it happens), and a plot (what happens).' },
        { t: 'key', text: 'A plot has three parts: a beginning that introduces the characters and setting, a middle where events and problems happen, and an end where the problem is solved.' },
        { t: 'p', text: 'Before writing, plan: Who is my main character? What do they want? What gets in the way? How is it solved? A quick plan of a few sentences makes the writing much easier.' },
        { t: 'example', title: 'Worked example', text: 'Plan for a story: Character — a shy raccoon named Pip. Setting — a busy campground at night. Problem — Pip loses the food he gathered. End — Pip\'s friends help him find it.' },
        { t: 'p', text: 'Descriptive words help the reader picture the scene. Instead of "The forest was nice," write "Tall pines swayed in the cool evening breeze." The reader can see and feel the forest.' }
      ],
      quiz: [
        { q: 'The beginning of a story introduces...', options: ['characters and setting', 'the ending', 'the moral'], a: 0 },
        { q: 'Descriptive words help the reader...', options: ['picture the scene', 'skip ahead', 'get bored'], a: 0 },
        { q: 'Events in a story should be in...', options: ['order', 'random order', 'reverse'], a: 0 }
      ]
    },
    {
      title: 'Grammar and Punctuation',
      summary: 'Use punctuation and parts of speech correctly.',
      learn: ['Use commas and quotation marks', 'Know nouns, verbs, adjectives, adverbs', 'Write complete sentences'],
      lesson: [
        { t: 'p', text: 'Grammar is the set of rules that makes sentences clear. The main parts of speech: nouns name people, places, or things; verbs show action or state of being; adjectives describe nouns; adverbs describe verbs, adjectives, or other adverbs.' },
        { t: 'example', title: 'Worked example', text: 'In "The small dog barked loudly," dog is the noun, small is an adjective describing the dog, barked is the verb, and loudly is an adverb telling how it barked.' },
        { t: 'key', text: 'Punctuation tells readers how to read. Commas separate items in a list and mark pauses; quotation marks show the exact words someone speaks; periods end statements; question marks end questions.' },
        { t: 'p', text: 'In dialogue, the comma and period go inside the quotation marks: "Hello," she said. The speaker tag (she said) comes after the comma, inside the quotes.' },
        { t: 'p', text: 'A complete sentence has a subject and a verb and expresses a full thought: "The cat slept." The subject is the cat; the verb is slept.' }
      ],
      quiz: [
        { q: 'Which sentence is punctuated correctly?', options: ['"Hello," she said.', '"Hello, she said', 'Hello" she said.'], a: 0 },
        { q: 'An adverb describes...', options: ['a verb', 'a noun only', 'a number'], a: 0 },
        { q: 'Which word is an adverb?', options: ['quickly', 'quick', 'quickness'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Present ideas and listen for understanding.',
      learn: ['Organize a short presentation', 'Speak clearly and confidently', 'Listen and ask good questions'],
      lesson: [
        { t: 'p', text: 'Speaking and listening are skills you can practice, just like reading and writing. A good presentation has a clear order: an introduction, the main points, and a closing.' },
        { t: 'key', text: 'To organize a short presentation, pick two or three main points, put them in order, and practice. Speaking clearly means a steady pace, a strong voice, and eye contact with your audience.' },
        { t: 'p', text: 'Listening is active, not passive. Pay attention to the speaker\'s main ideas, then ask questions that show you listened: "Can you tell me more about...?" or "Why did you choose...?' },
        { t: 'example', title: 'Worked example', text: 'Presenting "My Favourite Animal": 1) Introduce the animal and why you chose it. 2) Give two facts about it. 3) End with one interesting detail and thank the audience.' },
        { t: 'p', text: 'Vocabulary: the audience is the group of people listening, and feedback is the helpful comments they give to make your next talk better.' }
      ],
      quiz: [
        { q: 'A good presentation has...', options: ['a clear order', 'no structure', 'whispering only'], a: 0 },
        { q: 'Asking good questions shows you...', options: ['are listening', 'are confused', 'are bored'], a: 0 },
        { q: 'Eye contact while speaking shows...', options: ['confidence', 'fear', 'nothing'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Waste and Our World',
      summary: 'Learn how waste affects the environment and how to reduce it.',
      learn: ['Know the 3 Rs: reduce, reuse, recycle', 'Understand decomposition', 'See how waste harms nature'],
      lesson: [
        { t: 'p', text: 'Everything we throw away goes somewhere — usually a landfill, where it can take a very long time to break down. Too much waste harms nature and animals.' },
        { t: 'key', text: 'The 3 Rs, in order of importance: reduce (use less in the first place), reuse (use things again), recycle (turn old materials into new products). Reducing is best because it stops waste before it starts.' },
        { t: 'p', text: 'Decomposition is when living things break down dead material. Some things decompose quickly — an apple core disappears in weeks — while plastic can take hundreds of years.' },
        { t: 'example', title: 'Worked example', text: 'Composting: food scraps like banana peels and apple cores go into a bin with air and moisture. Tiny living things break them down into dark, rich soil called compost that helps gardens grow.' },
        { t: 'p', text: 'Vocabulary: decompose means to rot or break down into smaller pieces; a landfill is a large site where garbage is buried.' }
      ],
      quiz: [
        { q: 'The 3 Rs are...', options: ['reduce, reuse, recycle', 'read, write, run', 'rain, snow, sun'], a: 0 },
        { q: 'Composting turns food scraps into...', options: ['healthy soil', 'plastic', 'metal'], a: 0 },
        { q: 'Which reduces waste best?', options: ['Using less in the first place', 'Throwing more away', 'Burning trash'], a: 0 }
      ]
    },
    {
      title: 'Wheels and Levers',
      summary: 'Learn how simple machines make work easier.',
      learn: ['A lever is a bar that pivots', 'A wheel and axle reduce friction', 'Simple machines help us do work'],
      lesson: [
        { t: 'p', text: 'Simple machines are basic tools that make work easier. Two of them are everywhere: the lever and the wheel and axle.' },
        { t: 'key', text: 'A lever is a bar that pivots (turns) on a fixed point called a fulcrum. A seesaw is a lever: you push down on one end and the other end goes up. The closer the load is to the fulcrum, the easier it is to lift.' },
        { t: 'p', text: 'A wheel and axle is a wheel attached to a rod (the axle) that turns with it. Wheels make moving things easier by reducing friction — the rubbing between surfaces that slows motion.' },
        { t: 'example', title: 'Worked example', text: 'A wheelbarrow uses both: the handles and tray work as a lever, and the front wheel is a wheel and axle. Lifting the handles pivots the tray, so one person can move heavy loads with less effort.' },
        { t: 'p', text: 'Vocabulary: pivot means to turn around a point; friction is the force that rubs against moving things and slows them; effort is the force you put in.' }
      ],
      quiz: [
        { q: 'A seesaw is an example of a...', options: ['lever', 'wheel', 'spring'], a: 0 },
        { q: 'Wheels make moving objects easier by reducing...', options: ['friction', 'weight', 'colour'], a: 0 },
        { q: 'A machine makes work...', options: ['easier', 'harder', 'impossible'], a: 0 }
      ]
    },
    {
      title: 'Light and Shadow',
      summary: 'Learn how light travels and makes shadows.',
      learn: ['Light travels in straight lines', 'Opaque objects block light', 'Shadows change with the light source'],
      lesson: [
        { t: 'p', text: 'Light is a form of energy that lets us see. It travels in straight lines, and it moves extremely fast — faster than anything else we know.' },
        { t: 'key', text: 'When light hits an object, one of three things happens: it passes through (transparent — clear glass), it passes partly (translucent — frosted glass), or it is blocked (opaque — wood, or your hand).' },
        { t: 'p', text: 'A shadow forms when an opaque object blocks light. Because light travels in straight lines, the shadow appears on the side of the object away from the light source.' },
        { t: 'example', title: 'Worked example', text: 'Hold your hand between a flashlight and the wall: your hand blocks the light, and a shadow appears. Move the flashlight closer and the shadow grows bigger; move it farther away and the shadow shrinks.' },
        { t: 'p', text: 'Shadows change during the day. When the Sun is low in the sky — morning and evening — shadows are long. At noon, when the Sun is high overhead, shadows are short.' }
      ],
      quiz: [
        { q: 'Light travels in...', options: ['straight lines', 'circles', 'zigzags'], a: 0 },
        { q: 'A shadow forms when an object...', options: ['blocks light', 'gives light', 'reflects light'], a: 0 },
        { q: 'A material that lets no light through is...', options: ['opaque', 'transparent', 'glowing'], a: 0 }
      ]
    },
    {
      title: 'Plant Growth and Changes',
      summary: 'Learn how plants grow and reproduce.',
      learn: ['Plants need water, light, air, and soil', 'Seeds grow into plants', 'Plants have roots, stems, leaves, flowers'],
      lesson: [
        { t: 'p', text: 'Plants are living things that need water, light, air, and nutrients to grow. Most plants start life as seeds.' },
        { t: 'key', text: 'Germination is when a seed begins to sprout. With water and warmth, the seed coat opens, a root grows downward, and a shoot grows upward. The seed uses stored food to fuel this first growth.' },
        { t: 'p', text: 'Each plant part has a special job: roots take in water and nutrients and anchor the plant in the ground; the stem carries water upward and holds the leaves up to the light; leaves make food; flowers make seeds.' },
        { t: 'example', title: 'Worked example', text: 'Photosynthesis: leaves use sunlight, water, and air to make food for the plant. That is why a plant in a sunny window grows better than the same plant in a dark corner.' },
        { t: 'p', text: 'Vocabulary: nutrients are the tiny materials in soil that plants need to grow; photosynthesis is the process plants use to make their own food with sunlight.' }
      ],
      quiz: [
        { q: 'A seed needs water and warmth to...', options: ['germinate (sprout)', 'melt', 'shrink'], a: 0 },
        { q: 'Leaves make food for the plant using...', options: ['sunlight', 'soil only', 'rocks'], a: 0 },
        { q: 'Roots take in...', options: ['water and nutrients', 'sunlight', 'air only'], a: 0 }
      ]
    },
    {
      title: 'Devices That Move',
      summary: 'Build and test simple moving devices.',
      learn: ['Use wheels, axles, and levers', 'Test and improve your design', 'Explain how your device works'],
      lesson: [
        { t: 'p', text: 'Engineers build moving devices by combining simple machines. Wheels, axles, levers, and pulleys each do a specific job.' },
        { t: 'key', text: 'A pulley is a wheel with a groove that a rope fits into. Pulling down on one end of the rope lifts the load at the other end. It changes the direction of your force, and it can make lifting easier.' },
        { t: 'p', text: 'Designing is a cycle: build a first version (a prototype), test it, see what works and what does not, then improve it and test again. Engineers call this the design process.' },
        { t: 'example', title: 'Worked example', text: 'Build a cart: a board, four wheels, and two axles. Test it — does it roll straight? If a wheel wobbles, inspect the axle: it may be bent or loose. Fix it and test again.' },
        { t: 'p', text: 'Vocabulary: a prototype is a first model built for testing; improve means to make something better based on what the tests showed.' }
      ],
      quiz: [
        { q: 'To improve a design, you should...', options: ['test and make changes', 'give up', 'guess'], a: 0 },
        { q: 'A pulley helps you...', options: ['lift heavy things', 'see far', 'hear better'], a: 0 },
        { q: 'The part that a wheel spins on is the...', options: ['axle', 'seat', 'handle'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: "Alberta's Geography",
      summary: 'Learn about the regions and land of Alberta.',
      learn: ['Name Alberta\'s natural regions', 'Know major rivers and mountains', 'Understand climate differences'],
      lesson: [
        { t: 'p', text: 'Alberta is a province in western Canada. Its landscape is not all the same — it is divided into natural regions, each with its own land, climate, plants, and animals.' },
        { t: 'key', text: 'Alberta\'s main natural regions include the Rocky Mountains in the southwest (high, rocky peaks), the Foothills, the Prairies (flat grassland where much of the farming happens), and the Boreal Forest in the north.' },
        { t: 'p', text: 'Alberta\'s climate varies by region: the south is drier with warm summers, the north is colder with longer winters. The mountains receive heavy snow, while the prairies can swing from hot summers to very cold winters.' },
        { t: 'example', title: 'Worked example', text: 'Compare two students\' regions: a student in Calgary sees the Rocky Mountains to the west and open prairie to the east. A student in Fort McMurray, in the north, sees boreal forest and long, cold winters.' },
        { t: 'p', text: 'Vocabulary: a region is an area whose features make it different from the areas around it; climate is the usual weather of a place over a long time.' }
      ],
      quiz: [
        { q: 'The Rocky Mountains are in...', options: ['western Alberta', 'eastern Alberta', 'the Arctic'], a: 0 },
        { q: 'The Prairies are mostly...', options: ['flat grassland', 'mountains', 'desert'], a: 0 },
        { q: 'Alberta\'s capital city is...', options: ['Edmonton', 'Calgary', 'Red Deer'], a: 0 }
      ]
    },
    {
      title: "Alberta's History",
      summary: 'Learn about the people who shaped Alberta.',
      learn: ['First Nations lived here for thousands of years', 'Fossils show dinosaurs lived in Alberta', 'The fur trade brought newcomers'],
      lesson: [
        { t: 'p', text: 'Alberta has a very long history. First Nations peoples lived on this land for thousands of years before any European explorers arrived.' },
        { t: 'key', text: 'Alberta is world-famous for fossils: dinosaurs roamed this land millions of years ago, and the Badlands are rich in dinosaur bones. The Royal Tyrrell Museum in Drumheller displays many of these fossils.' },
        { t: 'p', text: 'In the 1700s and 1800s, the fur trade brought European traders to the region. They traded manufactured goods for animal furs — especially beaver pelts, which were made into hats in Europe.' },
        { t: 'example', title: 'Worked example', text: 'Timeline: millions of years ago — dinosaurs live in Alberta; thousands of years ago — First Nations peoples settle here; 1700s–1800s — the fur trade grows; 1905 — Alberta becomes a province.' },
        { t: 'p', text: 'Vocabulary: a fossil is the preserved remains of a living thing from long ago; a pelt is an animal skin with the fur still on it.' }
      ],
      quiz: [
        { q: 'Alberta is famous for finding many...', options: ['dinosaur fossils', 'ocean fish', 'volcanoes'], a: 0 },
        { q: 'The first people to live in Alberta were...', options: ['First Nations', 'fur traders', 'railway workers'], a: 0 },
        { q: 'The fur trade involved trading...', options: ['animal furs', 'computers', 'gold coins'], a: 0 }
      ]
    },
    {
      title: "Alberta's People",
      summary: 'Learn about the diverse communities of Alberta.',
      learn: ['Many cultures live in Alberta', 'Communities can be urban or rural', 'People contribute in different ways'],
      lesson: [
        { t: 'p', text: 'Alberta is home to people from many cultures and backgrounds. This mix of cultures is called diversity.' },
        { t: 'key', text: 'Communities can be urban or rural. An urban community is a city or town with many people, buildings, and services. A rural community is the countryside — farms, villages, and small towns.' },
        { t: 'p', text: 'People contribute to their communities in different ways: farmers grow food, teachers educate, nurses care for the sick, firefighters keep people safe. Every job helps the community work.' },
        { t: 'example', title: 'Worked example', text: 'Compare two communities: Edmonton is urban — tall buildings, buses, many schools and stores. A village in the countryside is rural — farms, a small school, and one general store.' },
        { t: 'p', text: 'Vocabulary: diverse means made up of many different kinds of people; a community is a group of people who live and work together in one area.' }
      ],
      quiz: [
        { q: 'A city is an example of an...', options: ['urban community', 'rural community', 'island'], a: 0 },
        { q: 'A farm is an example of a...', options: ['rural area', 'urban area', 'subway'], a: 0 },
        { q: 'Diversity means...', options: ['many different people and cultures', 'everyone the same', 'one language only'], a: 0 }
      ]
    },
    {
      title: "Alberta's Resources",
      summary: 'Learn about the resources and jobs in Alberta.',
      learn: ['Alberta has oil, gas, farming, and forestry', 'Resources come from the land', 'Resources support jobs and communities'],
      lesson: [
        { t: 'p', text: 'A natural resource is something found in nature that people use. Alberta is very rich in natural resources.' },
        { t: 'key', text: 'Alberta\'s main resources: oil and natural gas (found deep underground, mostly in the east and north), farmland (wheat, canola, and cattle), and forests (timber from the boreal forest).' },
        { t: 'p', text: 'Resources create jobs and support communities: oil workers pump and refine petroleum, farmers plant and harvest crops, forestry workers cut and process wood. Towns grow up around these industries.' },
        { t: 'example', title: 'Worked example', text: 'Follow a resource: oil is pumped from the ground, sent by pipeline to a refinery, turned into gasoline, and delivered to gas stations. Follow wheat: it is harvested, trucked to an elevator, shipped by train, and made into bread.' },
        { t: 'p', text: 'Vocabulary: renewable resources, like trees and crops, can regrow; non-renewable resources, like oil and gas, took millions of years to form and cannot be replaced. Industry is the business of making goods or providing services.' }
      ],
      quiz: [
        { q: 'Which is a natural resource in Alberta?', options: ['Oil', 'Diamonds', 'Gold'], a: 0 },
        { q: 'Farming produces...', options: ['food like wheat and beef', 'oil', 'steel'], a: 0 },
        { q: 'Forestry gives us...', options: ['wood and paper', 'gasoline', 'gold'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[5] = {
  math: [
    {
      title: 'Whole Numbers and Decimals',
      summary: 'Work with large numbers and decimals.',
      learn: ['Read and write large numbers', 'Add and subtract decimals', 'Compare decimals'],
      lesson: [
        { t: 'p', text: 'A decimal is a number with a decimal point that separates the whole part from parts smaller than one. 2.5 means 2 wholes and 5 tenths.' },
        { t: 'key', text: 'Decimal place values after the point: tenths, hundredths, thousandths. 0.7 is 7 tenths; 0.69 is 69 hundredths. Because tenths are bigger than hundredths, 0.7 is greater than 0.69.' },
        { t: 'p', text: 'To add or subtract decimals, line up the decimal points so the digits in each place value line up too. 2.5 + 1.3: 5 tenths + 3 tenths = 8 tenths, and 2 + 1 = 3, so the answer is 3.8.' },
        { t: 'example', title: 'Worked example', text: 'Round 3.6 to the nearest whole number. Look at the tenths digit, 6 — it is 5 or more, so round up: 3.6 rounds to 4. Round 3.4: the tenths digit is less than 5, so it rounds down to 3.' },
        { t: 'p', text: 'Vocabulary: tenths and hundredths name the size of each decimal part; to estimate means to find an answer close to the exact answer.' }
      ],
      quiz: [
        { q: 'What is 2.5 + 1.3?', options: ['3.8', '3.6', '4.8'], a: 0 },
        { q: 'Which is bigger — 0.7 or 0.69?', options: ['0.7', '0.69', 'They are equal'], a: 0 },
        { q: 'Round 3.6 to the nearest whole number.', options: ['3', '4', '3.5'], a: 1 }
      ]
    },
    {
      title: 'Fractions',
      summary: 'Compare, add, and understand fractions.',
      learn: ['Find equivalent fractions', 'Add fractions with the same denominator', 'Write fractions as mixed numbers'],
      lesson: [
        { t: 'p', text: 'Equivalent fractions name the same amount with different numbers: 1/2, 2/4, and 3/6 all show half of a whole.' },
        { t: 'key', text: 'To make an equivalent fraction, multiply or divide the top and bottom by the same number: 1/2 × 2/2 = 2/4. To simplify, divide the top and bottom by the same number: 2/4 ÷ 2/2 = 1/2.' },
        { t: 'p', text: 'To add fractions with the same denominator, add the numerators and keep the denominator: 1/4 + 1/4 = 2/4, which simplifies to 1/2.' },
        { t: 'example', title: 'Worked example', text: 'A mixed number has a whole part and a fraction: 1 1/2 means one whole plus one half. As an improper fraction: 1 whole = 2/2, so 1 1/2 = 2/2 + 1/2 = 3/2.' },
        { t: 'p', text: 'Vocabulary: the numerator is the top number (the parts you have); the denominator is the bottom number (the equal parts in the whole); an improper fraction has a numerator bigger than its denominator.' }
      ],
      quiz: [
        { q: 'Which is equivalent to 1/2?', options: ['2/4', '1/3', '2/3'], a: 0 },
        { q: 'What is 1/4 + 1/4?', options: ['1/2', '1/4', '2/4'], a: 0 },
        { q: 'The mixed number 1 1/2 equals...', options: ['3/2', '2/2', '1/3'], a: 0 }
      ]
    },
    {
      title: 'Multiplication and Division',
      summary: 'Multiply and divide multi-digit numbers.',
      learn: ['Multiply 2-digit by 2-digit', 'Divide by 1-digit divisors', 'Use estimation to check'],
      lesson: [
        { t: 'p', text: 'Multiplying 2-digit by 2-digit numbers uses the same place value ideas as smaller multiplication. 25 × 12 = 25 × 10 + 25 × 2 = 250 + 50 = 300. Breaking one number apart makes big multiplication easy.' },
        { t: 'key', text: 'The area model shows this: draw a rectangle and split it by place values. 25 × 12 = (20 + 5) × (10 + 2) = 20×10 + 20×2 + 5×10 + 5×2 = 200 + 40 + 50 + 10 = 300.' },
        { t: 'p', text: 'Division asks: how many of the divisor fit into the dividend? 96 ÷ 8: how many 8s make 96? Since 12 × 8 = 96, the answer is 12. Check any division by multiplying the quotient by the divisor.' },
        { t: 'example', title: 'Worked example', text: 'Estimate 48 × 5: round 48 to 50, then 50 × 5 = 250. The exact answer is 240, which is close to the estimate — a quick way to catch mistakes.' },
        { t: 'p', text: 'Vocabulary: an estimate is a close guess used to check work; the quotient is the answer to a division; the divisor is the number you divide by.' }
      ],
      quiz: [
        { q: 'What is 25 × 12?', options: ['300', '250', '325'], a: 0 },
        { q: 'What is 96 ÷ 8?', options: ['12', '11', '13'], a: 0 },
        { q: 'Estimate 48 × 5:', options: ['about 250', 'about 100', 'about 500'], a: 0 }
      ]
    },
    {
      title: 'Geometry',
      summary: 'Classify shapes and find angles.',
      learn: ['Classify triangles and quadrilaterals', 'Measure angles with a protractor', 'Know acute, right, obtuse angles'],
      lesson: [
        { t: 'p', text: 'Grade 5 geometry gets precise: we classify shapes by their sides and angles, and we measure angles in degrees.' },
        { t: 'key', text: 'Angles: acute is less than 90°, right is exactly 90°, obtuse is more than 90° but less than 180°, and straight is 180°. A protractor measures angles in degrees.' },
        { t: 'p', text: 'Triangles can be classified by sides: equilateral (all sides and angles equal), isosceles (two sides equal), scalene (no sides equal). Or by angles: acute, right, or obtuse.' },
        { t: 'example', title: 'Worked example', text: 'A triangle has angles of 60°, 60°, and 60°. All angles are acute and all sides are equal, so it is both an acute triangle and an equilateral triangle.' },
        { t: 'p', text: 'Quadrilaterals: a square has 4 equal sides and 4 right angles; a rectangle has opposite sides equal and 4 right angles; a rhombus has 4 equal sides; a trapezoid has one pair of parallel sides.' }
      ],
      quiz: [
        { q: 'An angle less than 90° is...', options: ['acute', 'obtuse', 'right'], a: 0 },
        { q: 'An angle greater than 90° is...', options: ['obtuse', 'acute', 'straight'], a: 0 },
        { q: 'A triangle with 3 equal sides is...', options: ['equilateral', 'scalene', 'right'], a: 0 }
      ]
    },
    {
      title: 'Data and Probability',
      summary: 'Collect data and understand chance.',
      learn: ['Make and read graphs', 'Find the mean (average)', 'Describe probability of events'],
      lesson: [
        { t: 'p', text: 'Data is information we collect to answer questions, and graphs are how we show it clearly. Bar graphs use bar heights to compare amounts; line graphs show how things change over time.' },
        { t: 'key', text: 'The mean, or average, is found by adding all the numbers and dividing by how many there are. For 2, 4, and 6: 2 + 4 + 6 = 12, then 12 ÷ 3 = 4. The mean is 4.' },
        { t: 'p', text: 'Probability describes how likely an event is. When all outcomes are equally likely: probability = number of wanted outcomes ÷ total number of outcomes.' },
        { t: 'example', title: 'Worked example', text: 'Flip a fair coin and want heads: 1 wanted outcome, 2 total outcomes, so the probability is 1 out of 2. Roll a die and want a 6: 1 out of 6, because a die has 6 faces.' },
        { t: 'p', text: 'Vocabulary: data is information; an outcome is a possible result; words like certain, likely, unlikely, and impossible describe how probable an event is.' }
      ],
      quiz: [
        { q: 'The mean of 2, 4, and 6 is...', options: ['4', '3', '5'], a: 0 },
        { q: 'Flipping a fair coin — chance of heads is...', options: ['1 out of 2', '1 out of 10', 'always'], a: 0 },
        { q: 'A bar graph shows data using...', options: ['bars', 'circles', 'arrows'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Understand and respond to a variety of texts.',
      learn: ['Compare ideas in two texts', 'Make inferences', 'Identify the author\'s purpose'],
      lesson: [
        { t: 'p', text: 'In grade 5, readers compare texts and read between the lines. Comparing two texts means noticing how they are alike and different — in topic, facts, and point of view.' },
        { t: 'key', text: 'An inference is a conclusion you make from clues in the text plus your own knowledge. The author does not say it directly; you figure it out. If a character shivers and puts on a coat, you can infer it is cold.' },
        { t: 'p', text: 'The author\'s purpose is the reason the text was written: to inform (give facts), to persuade (change your mind), or to entertain (tell an enjoyable story).' },
        { t: 'example', title: 'Worked example', text: 'A text about recycling says, "Every bottle we recycle saves enough energy to power a light bulb for hours." Purpose: to persuade readers to recycle. Evidence: the word "every" and the energy fact.' },
        { t: 'p', text: 'When you answer, support your ideas: quote the text and explain how the quote supports your answer.' }
      ],
      quiz: [
        { q: 'An inference is...', options: ['a conclusion from clues in the text', 'a direct quote', 'a random guess'], a: 0 },
        { q: 'The author\'s purpose can be to...', options: ['inform, persuade, or entertain', 'only to confuse', 'only to count'], a: 0 },
        { q: 'Comparing two texts means...', options: ['finding how they are alike and different', 'reading one only', 'copying'], a: 0 }
      ]
    },
    {
      title: 'Vocabulary and Spelling',
      summary: 'Expand vocabulary and spell accurately.',
      learn: ['Learn roots, prefixes, suffixes', 'Use a thesaurus', 'Spell grade-level words'],
      lesson: [
        { t: 'p', text: 'Word parts unlock many new words. Roots carry the core meaning, and prefixes and suffixes attach to them — knowing one root helps you understand a whole family of words.' },
        { t: 'key', text: 'Prefixes: re- means again (rewrite = write again), mis- means wrongly (misspell), pre- means before (prepay). Suffixes: -tion turns a verb into a noun (inform → information); -ly makes adverbs (quick → quickly).' },
        { t: 'p', text: 'A thesaurus is a collection of synonyms — words with similar meanings. It helps you choose precise words: instead of "big," try "enormous," "huge," or "massive.' },
        { t: 'example', title: 'Worked example', text: 'The word necessary is tricky to spell: n-e-c-e-s-s-a-r-y. Memory trick: "Never Eat Chips, Eat Salad Sandwiches And Remain Young" — the first letters spell necessary.' },
        { t: 'p', text: 'Vocabulary: a root is the base of a word; a synonym is a word with a similar meaning; an antonym is a word with the opposite meaning.' }
      ],
      quiz: [
        { q: 'A thesaurus helps you find...', options: ['synonyms', 'recipes', 'maps'], a: 0 },
        { q: 'The prefix "re-" in "rewrite" means...', options: ['again', 'not', 'before'], a: 0 },
        { q: 'Which is spelled correctly?', options: ['necessary', 'neccessary', 'necesary'], a: 0 }
      ]
    },
    {
      title: 'Writing: Persuasive and Informative',
      summary: 'Write to convince and to explain.',
      learn: ['State a clear opinion and reasons', 'Write facts with details', 'Organize ideas in paragraphs'],
      lesson: [
        { t: 'p', text: 'Persuasive writing tries to convince the reader; informative writing explains facts. Both need a clear structure: an introduction, body paragraphs, and a conclusion.' },
        { t: 'key', text: 'A persuasive text states an opinion and backs it with reasons. A strong paragraph: state the reason, give a fact or example, then explain why it matters.' },
        { t: 'p', text: 'An informative text organizes facts: introduce the topic, explain the details in a sensible order, and end with a conclusion that wraps up the main points.' },
        { t: 'example', title: 'Worked example', text: 'Persuasive: "Our school should have a recycling program. First, recycling reduces garbage. Second, it teaches students to care for the environment. Third, it saves resources." Three clear reasons support one opinion.' },
        { t: 'p', text: 'Each paragraph should have one main idea, and everything in it supports that idea. Linking words — first, also, finally — connect your ideas and guide the reader.' }
      ],
      quiz: [
        { q: 'A persuasive text tries to...', options: ['convince the reader', 'only list facts', 'tell a joke'], a: 0 },
        { q: 'An informative text...', options: ['explains facts', 'tells a made-up story', 'persuades'], a: 0 },
        { q: 'Each paragraph should have...', options: ['one main idea', 'many unrelated ideas', 'no idea'], a: 0 }
      ]
    },
    {
      title: 'Grammar: Sentences and Punctuation',
      summary: 'Write correct sentences with proper punctuation.',
      learn: ['Use commas in lists', 'Use quotation marks for dialogue', 'Avoid run-on sentences'],
      lesson: [
        { t: 'p', text: 'Punctuation is the traffic signal of writing — it tells the reader when to pause, stop, or listen to speech. Commas and quotation marks are the stars of grade 5.' },
        { t: 'key', text: 'Commas separate items in a list: "I like apples, pears, and grapes." Commas also follow introductory words: "First, we mixed the batter." Quotation marks show exactly what someone says: "Let\'s go," she said — and the comma and period go inside the quotation marks.' },
        { t: 'p', text: 'A run-on sentence mashes two sentences together without punctuation: "I went to the store I bought milk." That is confusing to read.' },
        { t: 'example', title: 'Worked example', text: 'Fix the run-on: "I went to the store I bought milk." → "I went to the store. I bought milk." or "I went to the store, and I bought milk." Both are clear and correct.' },
        { t: 'p', text: 'Vocabulary: a run-on sentence joins complete thoughts without proper punctuation; a fragment is an incomplete sentence missing a subject, a verb, or both.' }
      ],
      quiz: [
        { q: 'Which uses commas correctly?', options: ['I like apples, pears, and grapes.', 'I like apples pears and grapes.', 'I, like apples pears and grapes.'], a: 0 },
        { q: 'A run-on sentence is...', options: ['two sentences joined without punctuation', 'a short sentence', 'a question'], a: 0 },
        { q: 'Quotation marks show...', options: ['someone speaking', 'a title', 'a number'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Present and listen with purpose.',
      learn: ['Prepare and deliver a talk', 'Listen for key points', 'Give and receive feedback'],
      lesson: [
        { t: 'p', text: 'Speaking and listening with purpose means preparing what you say and paying full attention to what others say.' },
        { t: 'key', text: 'To prepare a talk: choose two or three key points, plan an opening that grabs attention, practice out loud, and end with a strong closing that reminds the audience of your main message.' },
        { t: 'p', text: 'Listening for key points means catching the main ideas, not every single word. Ask yourself as you listen: What is the speaker\'s main message? What are the supporting points?' },
        { t: 'example', title: 'Worked example', text: 'Giving feedback after a classmate\'s talk: first say something kind ("I liked your opening"), then something helpful ("You could speak a little louder"), and end with encouragement ("Keep practicing!").' },
        { t: 'p', text: 'Vocabulary: feedback is information that helps someone improve; key points are the most important ideas in a talk.' }
      ],
      quiz: [
        { q: 'Preparing a talk means...', options: ['planning your points', 'reading without thinking', 'not practicing'], a: 0 },
        { q: 'Good feedback is...', options: ['kind and helpful', 'mean', 'vague'], a: 0 },
        { q: 'Listening for key points means...', options: ['finding the main ideas', 'remembering every word', 'ignoring everything'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Electricity and Magnetism',
      summary: 'Learn how electricity and magnetism work.',
      learn: ['Build simple circuits', 'Know conductors and insulators', 'An electric current creates a magnetic field'],
      lesson: [
        { t: 'p', text: 'Electricity is the flow of tiny charged particles called electrons. For electricity to flow, it needs a complete path called a circuit.' },
        { t: 'key', text: 'A simple circuit has a battery (the energy source), wires (the path), and a bulb (the load) connected in a loop. If the loop is broken anywhere, the current stops — that is exactly what a switch does.' },
        { t: 'p', text: 'Conductors let electricity flow easily — copper, aluminum, and water. Insulators block it — rubber, plastic, wood, and glass. That is why wires are copper inside but coated in plastic.' },
        { t: 'example', title: 'Worked example', text: 'Test a nail: connect it between the ends of a circuit. If the bulb lights, the nail is a conductor. Now test a pencil eraser: the bulb stays off, so the eraser is an insulator.' },
        { t: 'p', text: 'A wire carrying current creates a magnetic field around itself — that is how electromagnets work. Vocabulary: current is the flow of electricity; a conductor lets it pass; an insulator blocks it.' }
      ],
      quiz: [
        { q: 'A circuit needs a closed path for electricity to...', options: ['flow', 'stop', 'disappear'], a: 0 },
        { q: 'Which is a conductor of electricity?', options: ['Copper wire', 'Rubber', 'Wood'], a: 0 },
        { q: 'Which is an insulator?', options: ['Plastic', 'Copper', 'Iron'], a: 0 }
      ]
    },
    {
      title: 'Weather Watch',
      summary: 'Learn how weather forms and how we measure it.',
      learn: ['Measure temperature, wind, and precipitation', 'Know the water cycle', 'Understand weather patterns'],
      lesson: [
        { t: 'p', text: 'Weather is what the air is doing right now — temperature, wind, clouds, and precipitation. Weather changes day to day, unlike climate, which is the long-term pattern.' },
        { t: 'key', text: 'The water cycle: evaporation (the Sun heats water and it rises as vapour), condensation (vapour cools and forms clouds), precipitation (water falls as rain or snow), and collection (water gathers in lakes and oceans — then the cycle repeats).' },
        { t: 'p', text: 'Meteorologists measure weather with tools: a thermometer measures temperature, a wind vane shows wind direction, an anemometer measures wind speed, a rain gauge measures precipitation, and a barometer measures air pressure.' },
        { t: 'example', title: 'Worked example', text: 'Weather journal: Monday 22°C and sunny; Tuesday 19°C and rain. The temperature dropped and precipitation fell — a weather front moved through and brought the rain.' },
        { t: 'p', text: 'Vocabulary: precipitation is water falling from clouds (rain, snow, hail); a forecast is a prediction of the weather to come.' }
      ],
      quiz: [
        { q: 'Precipitation includes...', options: ['rain and snow', 'wind', 'clouds only'], a: 0 },
        { q: 'The water cycle includes...', options: ['evaporation, condensation, precipitation', 'mixing, melting, freezing', 'light, heat, sound'], a: 0 },
        { q: 'We measure temperature with a...', options: ['thermometer', 'barometer', 'scale'], a: 0 }
      ]
    },
    {
      title: 'Wetland Ecosystems',
      summary: 'Learn about wetlands and why they matter.',
      learn: ['Name plants and animals in a wetland', 'Wetlands clean water', 'Wetlands are important habitats'],
      lesson: [
        { t: 'p', text: 'A wetland is land covered with water for at least part of the year — marshes, swamps, and ponds. Wetlands are packed with life.' },
        { t: 'key', text: 'Wetland plants and animals are adapted to wet conditions: cattails and bulrushes grow right in the shallow water, and frogs, beavers, ducks, and dragonflies make wetlands their home.' },
        { t: 'p', text: 'Wetlands are nature\'s water cleaners: plant roots and soil trap dirt and pollution, so water leaving a wetland is cleaner than the water entering it. Wetlands also soak up floodwater and release it slowly.' },
        { t: 'example', title: 'Worked example', text: 'A wetland food chain: cattails (plant) → dragonfly larva (eats plant bits) → frog (eats the larva) → heron (eats the frog). Every living thing in the wetland depends on the others.' },
        { t: 'p', text: 'Vocabulary: an ecosystem is a community of living things together with their environment; a habitat is the place where a plant or animal naturally lives.' }
      ],
      quiz: [
        { q: 'A wetland is a place that is...', options: ['covered with water part of the year', 'always dry', 'always frozen'], a: 0 },
        { q: 'Wetlands help by...', options: ['cleaning water', 'making pollution', 'drying the land'], a: 0 },
        { q: 'Which animal might live in a wetland?', options: ['A frog', 'A camel', 'A polar bear'], a: 0 }
      ]
    },
    {
      title: 'Classroom Chemistry',
      summary: 'Explore mixtures, solutions, and chemical changes.',
      learn: ['Separate mixtures', 'Dissolve solids in liquids', 'Recognize chemical vs physical change'],
      lesson: [
        { t: 'p', text: 'Chemistry is the study of matter and how it changes. Matter is anything that takes up space — solids, liquids, and gases are all matter.' },
        { t: 'key', text: 'A mixture combines substances without changing what they are — sand mixed with salt, or cereal in milk. A solution is a special mixture where one substance dissolves evenly into another, like salt dissolved in water.' },
        { t: 'p', text: 'In a physical change, the substance stays the same kind of matter — melting ice is still water. In a chemical change, a new substance forms — iron turning to rust, or bread baking in the oven.' },
        { t: 'example', title: 'Worked example', text: 'Separate a mixture of iron filings and sand: run a magnet through it and the iron filings are pulled out. Separate salt from salt water: let the water evaporate, and salt crystals are left behind.' },
        { t: 'p', text: 'Vocabulary: dissolve means to mix evenly into a liquid; evaporate means to change from a liquid into a gas; matter is anything that has mass and takes up space.' }
      ],
      quiz: [
        { q: 'Salt in water forms a...', options: ['solution', 'rock', 'gas only'], a: 0 },
        { q: 'A chemical change makes...', options: ['a new substance', 'the same substance', 'nothing'], a: 0 },
        { q: 'Melting ice is a...', options: ['physical change', 'chemical change', 'permanent change'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Geography of Canada',
      summary: 'Learn about Canada\'s regions and landforms.',
      learn: ['Name Canada\'s provinces and territories', 'Know major landforms and water bodies', 'Understand regional differences'],
      lesson: [
        { t: 'p', text: 'Canada is the second-largest country in the world. It is divided into 10 provinces and 3 territories, and its capital city is Ottawa.' },
        { t: 'key', text: 'The 10 provinces: British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, New Brunswick, Nova Scotia, Prince Edward Island, and Newfoundland and Labrador. The 3 territories: Yukon, Northwest Territories, and Nunavut.' },
        { t: 'p', text: 'Canada\'s landforms: the Rocky Mountains in the west, the flat Prairies, the Canadian Shield (old, rocky land around Hudson Bay), the Great Lakes in the southeast, and the Arctic islands in the far north.' },
        { t: 'example', title: 'Worked example', text: 'Compare regions: British Columbia has mountains and a mild, rainy coast; Saskatchewan is flat prairie farmland; Nunavut is Arctic tundra with very cold winters and permafrost.' },
        { t: 'p', text: 'Vocabulary: a province is a region with its own government; a territory is a region governed more directly by the federal government; a landform is a natural feature of the land.' }
      ],
      quiz: [
        { q: 'How many provinces does Canada have?', options: ['10', '13', '8'], a: 0 },
        { q: 'Canada has how many territories?', options: ['3', '5', '2'], a: 0 },
        { q: 'The capital of Canada is...', options: ['Ottawa', 'Toronto', 'Vancouver'], a: 0 }
      ]
    },
    {
      title: 'History of Canada',
      summary: 'Learn key events in Canadian history.',
      learn: ['First Peoples lived here first', 'Explorers and settlers arrived from Europe', 'Canada became a country in 1867'],
      lesson: [
        { t: 'p', text: 'Canada\'s history goes back thousands of years. First Nations, Inuit, and Métis peoples lived across this land long before Europeans arrived.' },
        { t: 'key', text: 'Key events in order: First Peoples arrive; Vikings visit around 1000 CE; European explorers like Jacques Cartier arrive in the 1500s; the fur trade grows; settlers arrive; and on July 1, 1867, the colonies unite as the Dominion of Canada — that is why we celebrate Canada Day.' },
        { t: 'p', text: 'The fur trade connected Europeans and First Nations: traders exchanged European goods — metal tools, blankets, and beads — for furs, especially beaver pelts.' },
        { t: 'example', title: 'Worked example', text: 'Timeline practice: put these in order — (1) First Peoples live across the land; (2) explorers arrive from Europe; (3) the fur trade grows; (4) Canada becomes a country in 1867; (5) more provinces and territories join over time.' },
        { t: 'p', text: 'Vocabulary: a colony is a settlement ruled by another country; Confederation is the joining of colonies to form Canada; an explorer is a person who travels to discover new places.' }
      ],
      quiz: [
        { q: 'Canada became a country in...', options: ['1867', '1776', '1901'], a: 0 },
        { q: 'The first peoples of Canada are called...', options: ['First Nations, Inuit, and Métis', 'settlers', 'explorers'], a: 0 },
        { q: 'The day Canada celebrates its founding is...', options: ['Canada Day (July 1)', 'New Year', 'Halloween'], a: 0 }
      ]
    },
    {
      title: 'People of Canada',
      summary: 'Learn about Canada\'s diverse population.',
      learn: ['Canada is a multicultural country', 'People have different traditions', 'Immigration shaped Canada'],
      lesson: [
        { t: 'p', text: 'Canada is a multicultural country: people from many cultures, languages, and religions live together. Multicultural means many cultures in one society.' },
        { t: 'key', text: 'Immigration has shaped Canada. Immigrants are people who move to a new country to live. Over the centuries people have come from Europe, Asia, Africa, the Caribbean, and everywhere else — and they brought their traditions with them.' },
        { t: 'p', text: 'Canada has two official languages — English and French — and many other languages are spoken in homes across the country.' },
        { t: 'example', title: 'Worked example', text: 'A class celebrates diversity: students share foods from their families\' cultures — samosas, pierogi, dumplings, and tortillas. Everyone learns where each dish comes from and why it matters to that family.' },
        { t: 'p', text: 'Vocabulary: diversity means many different backgrounds living together; an immigrant is someone who moves to a new country to live; a tradition is a custom passed down through generations.' }
      ],
      quiz: [
        { q: 'Multicultural means...', options: ['many cultures living together', 'one culture only', 'no culture'], a: 0 },
        { q: 'Immigrants are people who...', options: ['move to a new country to live', 'stay in one place', 'travel for a day'], a: 0 },
        { q: 'Canada\'s two official languages are...', options: ['English and French', 'English and Spanish', 'French and German'], a: 0 }
      ]
    },
    {
      title: 'How Canada is Governed',
      summary: 'Learn the basics of Canadian government.',
      learn: ['Canada is a democracy', 'We vote to choose leaders', 'There are federal, provincial, and local levels'],
      lesson: [
        { t: 'p', text: 'Canada is a democracy: the people choose their leaders by voting. Citizens elect representatives to make decisions on their behalf.' },
        { t: 'key', text: 'There are three levels of government. The federal government (in Ottawa, led by the Prime Minister) handles the whole country. The provincial government (led by a Premier) handles one province. The municipal government (led by a mayor and council) handles one city or town.' },
        { t: 'p', text: 'Who does what? Defence, money, and national parks — federal. Schools and healthcare — provincial. Local roads, garbage pickup, and parks — municipal. Each level has its own job.' },
        { t: 'example', title: 'Worked example', text: 'A pothole on your street: report it to the municipal government — streets are a city job. A new hospital: the provincial government plans and funds healthcare. An international treaty: the federal government handles it.' },
        { t: 'p', text: 'Vocabulary: democracy means government by the people through voting; a citizen is a member of a country with rights and duties; an election is the process of choosing leaders by vote.' }
      ],
      quiz: [
        { q: 'In a democracy, citizens...', options: ['vote', 'cannot choose', 'are ruled by one person'], a: 0 },
        { q: 'The leader of the federal government is the...', options: ['Prime Minister', 'Mayor', 'Premier'], a: 0 },
        { q: 'A provincial leader is called a...', options: ['Premier', 'Prime Minister', 'Senator'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[6] = {
  math: [
    {
      title: 'Numbers and Integers',
      summary: 'Work with large numbers and negative numbers.',
      learn: ['Read and write numbers to the millions', 'Understand positive and negative integers', 'Compare and order integers'],
      lesson: [
        { t: 'p', text: 'Integers are whole numbers, zero, and their opposites: ... -3, -2, -1, 0, 1, 2, 3 ... Negative numbers are less than zero. We use them for temperatures below freezing, for debts, and for floors below ground.' },
        { t: 'key', text: 'On a number line, numbers increase to the right and decrease to the left. Negative numbers sit to the left of zero. Since -5 is farther left than -2, -5 is the smaller number. Zero is neither positive nor negative.' },
        { t: 'p', text: 'To compare integers, ask which one is farther to the right on the number line: -2 is to the right of -5, so -2 > -5. Think of temperature: -2°C is warmer than -5°C.' },
        { t: 'example', title: 'Worked example', text: 'Order from smallest to largest: 0, -3, 2, -1. On a number line: -3 is farthest left, then -1, then 0, then 2. So the order is -3, -1, 0, 2.' },
        { t: 'p', text: 'Vocabulary: an integer is a whole number or its opposite; negative means less than zero; positive means greater than zero.' }
      ],
      quiz: [
        { q: 'Which is smallest?', options: ['-5', '-2', '0'], a: 0 },
        { q: 'The number -3 is...', options: ['less than 0', 'greater than 0', 'equal to 0'], a: 0 },
        { q: 'Which number is 1 million?', options: ['1,000,000', '100,000', '10,000'], a: 0 }
      ]
    },
    {
      title: 'Fractions, Decimals, and Percent',
      summary: 'Connect fractions, decimals, and percents.',
      learn: ['Convert between fractions, decimals, percent', 'Find a percent of a number', 'Compare values'],
      lesson: [
        { t: 'p', text: 'Fractions, decimals, and percents are three ways to name the same part of a whole: 1/2 = 0.5 = 50%. They are equivalent — just written differently.' },
        { t: 'key', text: 'Percent means "out of 100." To convert: fraction → decimal by dividing the top by the bottom (1/2 = 1 ÷ 2 = 0.5); decimal → percent by multiplying by 100 (0.5 → 50%); percent → decimal by dividing by 100 (50% → 0.5).' },
        { t: 'p', text: 'To find a percent of a number: 25% of 80. Since 25% = 1/4, divide 80 by 4: the answer is 20. Another way: 10% of 80 is 8, so 20% is 16, plus 5% is 4, giving 20.' },
        { t: 'example', title: 'Worked example', text: 'Convert 0.75 to a percent: 0.75 × 100 = 75%. Convert 50% to a fraction: 50% = 50/100, which simplifies to 1/2. All three — 1/2, 0.5, 50% — name the same amount.' },
        { t: 'p', text: 'Vocabulary: percent means parts per hundred; equivalent means equal in value; convert means to change from one form to another.' }
      ],
      quiz: [
        { q: '50% as a fraction is...', options: ['1/2', '1/4', '1/5'], a: 0 },
        { q: '0.75 as a percent is...', options: ['75%', '7.5%', '0.75%'], a: 0 },
        { q: '25% of 80 is...', options: ['20', '25', '40'], a: 0 }
      ]
    },
    {
      title: 'Ratios',
      summary: 'Understand and use ratios to compare quantities.',
      learn: ['Write ratios', 'Find equivalent ratios', 'Solve ratio problems'],
      lesson: [
        { t: 'p', text: 'A ratio compares two quantities. It can be written three ways: 2:4, "2 to 4," or as the fraction 2/4. Ratios compare the same kind of thing — numbers of students, apples, or laps.' },
        { t: 'key', text: 'Equivalent ratios show the same comparison: 2:4 is the same ratio as 1:2, because you divide both parts by 2. Just like equivalent fractions, you can multiply or divide both parts of a ratio by the same number.' },
        { t: 'p', text: 'To solve ratio problems, find the value of one part first. If the ratio of boys to girls is 3:2 and there are 15 boys: 3 parts = 15, so 1 part = 5. Girls are 2 parts, so 2 × 5 = 10 girls.' },
        { t: 'example', title: 'Worked example', text: 'A recipe needs 2 cups of flour for every 1 cup of sugar — ratio 2:1. To make a double batch: 4 cups of flour and 2 cups of sugar. The ratio 4:2 is equivalent to 2:1.' },
        { t: 'p', text: 'Vocabulary: a ratio is a comparison of two quantities; equivalent ratios name the same comparison; a unit ratio has one part equal to 1, like 3:1.' }
      ],
      quiz: [
        { q: 'A ratio compares...', options: ['two quantities', 'one number', 'two shapes'], a: 0 },
        { q: 'The ratio 2:4 simplifies to...', options: ['1:2', '2:1', '4:2'], a: 0 },
        { q: 'If the ratio of boys to girls is 3:2, and there are 15 boys, how many girls?', options: ['10', '12', '20'], a: 0 }
      ]
    },
    {
      title: 'Geometry',
      summary: 'Measure angles and find area of shapes.',
      learn: ['Find the area of triangles and parallelograms', 'Measure and draw angles', 'Understand symmetry'],
      lesson: [
        { t: 'p', text: 'Grade 6 geometry adds measurement: the area of triangles and parallelograms, angle measurement, and symmetry.' },
        { t: 'key', text: 'Area of a parallelogram = base × height, where the height is the perpendicular distance between the bases. Area of a triangle = base × height ÷ 2, because a triangle is exactly half of a parallelogram.' },
        { t: 'p', text: 'The angles inside any triangle add up to 180°, and the angles inside any quadrilateral add up to 360°. A protractor measures and draws angles.' },
        { t: 'example', title: 'Worked example', text: 'A triangle has a base of 8 cm and a height of 5 cm: area = 8 × 5 ÷ 2 = 40 ÷ 2 = 20 cm². If two of its angles are 70° and 60°, the third angle is 180 − 70 − 60 = 50°.' },
        { t: 'p', text: 'A shape has symmetry if it can be folded so the two halves match exactly; the fold line is the line of symmetry. A square has 4 lines of symmetry, a rectangle has 2.' }
      ],
      quiz: [
        { q: 'Area of a triangle = ...', options: ['base × height ÷ 2', 'base × height', 'base + height'], a: 0 },
        { q: 'The sum of angles in a triangle is...', options: ['180°', '360°', '90°'], a: 0 },
        { q: 'A shape that is identical on both sides has...', options: ['symmetry', 'angles', 'volume'], a: 0 }
      ]
    },
    {
      title: 'Data and Probability',
      summary: 'Analyze data and calculate probability.',
      learn: ['Find mean, median, mode', 'Create graphs', 'Express probability as a fraction'],
      lesson: [
        { t: 'p', text: 'Grade 6 data analysis goes beyond averages: we use the mean, the median, and the mode, and we express probability as fractions.' },
        { t: 'key', text: 'Mean (average): add all the values and divide by how many there are. Median: the middle value when the data is in order (with two middle values, average them). Mode: the value that appears most often.' },
        { t: 'p', text: 'A data set can have one mode, more than one mode, or no mode at all. In 3, 7, 7, 9, 12 the mode is 7 — it appears twice — and the median is also 7, the middle of the ordered list.' },
        { t: 'example', title: 'Worked example', text: 'Data set: 2, 4, 4, 6, 9. Mean = (2 + 4 + 4 + 6 + 9) ÷ 5 = 25 ÷ 5 = 5. Median = 4, the middle value. Mode = 4, the value that appears twice.' },
        { t: 'p', text: 'Probability as a fraction: favourable outcomes ÷ total outcomes. Rolling a 6 on a fair die: 1 ÷ 6 = 1/6. Flipping heads on a coin: 1/2.' }
      ],
      quiz: [
        { q: 'The median is...', options: ['the middle value in order', 'the biggest value', 'the average'], a: 0 },
        { q: 'The mode is...', options: ['the most common value', 'the middle value', 'the smallest value'], a: 0 },
        { q: 'Chance of rolling a 6 on a fair die is...', options: ['1 out of 6', '1 out of 2', '1 out of 3'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Analyze and respond to complex texts.',
      learn: ['Identify theme and main idea', 'Analyze characters and plot', 'Make and support inferences'],
      lesson: [
        { t: 'p', text: 'In grade 6 you read more deeply: you identify themes, analyze characters and plot, and support your inferences with evidence.' },
        { t: 'key', text: 'The theme is the big message or lesson of a story — not the topic, but what the story says about the topic. A story about a race (the topic) might have the theme "perseverance pays off.' },
        { t: 'p', text: 'The plot is the sequence of events: introduction (characters and setting), rising action (the problem builds), climax (the turning point), falling action, and resolution (how it all ends).' },
        { t: 'example', title: 'Worked example', text: 'A story about a girl who fails her first test, studies harder, and passes: the theme is that effort and persistence lead to improvement. Evidence: she studies after failing, and her mark improves.' },
        { t: 'p', text: 'To support an inference, always point to the text: "The author writes..., which shows..." Evidence is what makes your reading defensible.' }
      ],
      quiz: [
        { q: 'A theme is...', options: ['the big message or lesson', 'a character\'s name', 'the page number'], a: 0 },
        { q: 'The plot is...', options: ['the sequence of events', 'the setting only', 'the cover'], a: 0 },
        { q: 'To support an inference, you need...', options: ['evidence from the text', 'only your feelings', 'guessing'], a: 0 }
      ]
    },
    {
      title: 'Vocabulary',
      summary: 'Learn advanced words and word parts.',
      learn: ['Use Greek and Latin roots', 'Understand multiple-meaning words', 'Use precise vocabulary'],
      lesson: [
        { t: 'p', text: 'Many English words are built from Greek and Latin roots. Learn one root and you unlock a whole family of words.' },
        { t: 'key', text: 'Greek roots: geo means earth (geography, geology), bio means life (biology, biography), hydro means water (hydroplane), tele means far (telephone, telescope). Latin roots: port means carry (transport), spect means look (inspect), dict means say (predict).' },
        { t: 'p', text: 'Homographs are words spelled the same but with different meanings: bat (the animal) and bat (sports equipment); bow (to bend) and bow (the front of a ship). Context tells you which meaning is meant.' },
        { t: 'example', title: 'Worked example', text: 'Break apart the word predict: pre- (before) + dict (say) = say before. Now break apart transport: trans- (across) + port (carry) = carry across.' },
        { t: 'p', text: 'Precise vocabulary means choosing the exact word for the exact meaning: stroll versus march, whisper versus shout, tiny versus minuscule.' }
      ],
      quiz: [
        { q: 'The root "geo" means...', options: ['earth', 'water', 'fire'], a: 0 },
        { q: 'The root "bio" means...', options: ['life', 'stone', 'air'], a: 0 },
        { q: 'A word with more than one meaning is...', options: ['homograph', 'a number', 'a period'], a: 0 }
      ]
    },
    {
      title: 'Writing: Reports and Stories',
      summary: 'Write clear reports and engaging stories.',
      learn: ['Write an introduction, body, conclusion', 'Use paragraphs effectively', 'Edit and revise your work'],
      lesson: [
        { t: 'p', text: 'Reports explain and inform; stories entertain and move the reader. Both need structure, but they organize ideas differently.' },
        { t: 'key', text: 'A report has an introduction (states the topic and what the reader will learn), body paragraphs (facts and details, one main idea each), and a conclusion (sums up the main points).' },
        { t: 'p', text: 'A story uses plot structure: a beginning that hooks the reader, a middle with a problem and rising action, and an ending with a resolution.' },
        { t: 'example', title: 'Worked example', text: 'Report outline on the grizzly bear: introduction — grizzlies are powerful omnivores of western North America; body — what they eat, where they live, how they survive winter; conclusion — why they matter to their ecosystems.' },
        { t: 'p', text: 'Revising improves ideas and wording — adding details, reordering parts. Editing fixes spelling, grammar, and punctuation. Every good writer does both.' }
      ],
      quiz: [
        { q: 'A report should have...', options: ['intro, body, conclusion', 'only one sentence', 'no structure'], a: 0 },
        { q: 'Revising means...', options: ['improving ideas and wording', 'writing the first draft only', 'deleting everything'], a: 0 },
        { q: 'Editing focuses on...', options: ['spelling and grammar', 'new ideas', 'the title'], a: 0 }
      ]
    },
    {
      title: 'Grammar: Advanced Sentences',
      summary: 'Use complex sentences correctly.',
      learn: ['Use conjunctions to join ideas', 'Write compound and complex sentences', 'Avoid fragments'],
      lesson: [
        { t: 'p', text: 'Conjunctions join words and ideas: and, but, or, so, because, although, when, since. They are the glue that builds complex sentences.' },
        { t: 'key', text: 'A compound sentence joins two complete sentences with a comma and a conjunction: "I wanted to play, but it was raining." A complex sentence joins a main idea with a dependent clause: "Because it was raining, we stayed inside.' },
        { t: 'p', text: 'A fragment is an incomplete thought — it is missing a subject, a verb, or both. "Because it was raining" is a fragment: it leaves you asking "so what?" Fix it by attaching it to a main clause.' },
        { t: 'example', title: 'Worked example', text: 'Fix the fragment: "When the bell rang" → "When the bell rang, the students packed their bags." Now it is a complete complex sentence with a main clause and a dependent clause.' },
        { t: 'p', text: 'Vocabulary: a clause is a group of words with a subject and a verb; an independent clause can stand alone as a sentence; a dependent clause cannot.' }
      ],
      quiz: [
        { q: 'Which is a conjunction?', options: ['and', 'run', 'blue'], a: 0 },
        { q: 'A sentence fragment is...', options: ['an incomplete thought', 'a full sentence', 'a question'], a: 0 },
        { q: '"Because it was raining" is...', options: ['a fragment', 'a complete sentence', 'a question'], a: 0 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Communicate effectively in groups.',
      learn: ['Participate in discussions', 'Support your opinion with reasons', 'Listen and summarize others\' views'],
      lesson: [
        { t: 'p', text: 'In grade 6, speaking and listening move into group work: discussions, debates, and collaboration.' },
        { t: 'key', text: 'In a discussion, everyone gets a turn: listen to the speaker, respond to their ideas rather than over them, and build on what others say (for example, "I agree with Amina, and I would add...").' },
        { t: 'p', text: 'Supporting your opinion means giving reasons and evidence, for example: "I think the class should have longer recess because physical activity helps us focus, and many students say they feel tired by the afternoon" — that is a reason backed by evidence.' },
        { t: 'example', title: 'Worked example', text: 'Summarizing someone\'s view shows you listened: "So you are saying the library should stay open at lunch so students have a quiet place to work — is that right?" The speaker confirms or corrects you, and the discussion moves forward.' },
        { t: 'p', text: 'Vocabulary: a discussion is a group talk about a topic; to summarize is to restate the main points briefly; respect means treating others\' ideas seriously even when you disagree.' }
      ],
      quiz: [
        { q: 'In a discussion, you should...', options: ['listen and respond respectfully', 'talk over others', 'stay silent'], a: 0 },
        { q: 'Supporting your opinion means...', options: ['giving reasons and evidence', 'just saying "because"', 'shouting'], a: 0 },
        { q: 'Summarizing someone\'s view shows...', options: ['you listened', 'you ignored them', 'you disagree always'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Air and Aerodynamics',
      summary: 'Learn how air moves and affects objects.',
      learn: ['Air is made of matter', 'Air resistance slows moving objects', 'Air pressure affects flight'],
      lesson: [
        { t: 'p', text: 'Air is matter: it takes up space and has mass, even though we cannot see it. It is a mixture of gases, mostly nitrogen and oxygen.' },
        { t: 'key', text: 'Air resistance, also called drag, is the force of air pushing against a moving object. It slows things down. A streamlined shape — smooth and pointed — slices through the air with less drag.' },
        { t: 'p', text: 'Air pressure is the push of air pressing on everything around us. Air presses in all directions at once; you do not feel it because your body pushes back with equal force.' },
        { t: 'example', title: 'Worked example', text: 'Drop two sheets of paper: one flat, one crumpled into a ball. The crumpled ball lands first — it has less surface area, so it meets less air resistance.' },
        { t: 'p', text: 'Vocabulary: matter is anything with mass and volume; drag is air resistance; streamlined means shaped to move through air easily.' }
      ],
      quiz: [
        { q: 'Air resistance is also called...', options: ['drag', 'lift', 'gravity'], a: 0 },
        { q: 'Air is...', options: ['matter made of gases', 'empty space', 'a liquid'], a: 0 },
        { q: 'A streamlined shape reduces...', options: ['air resistance', 'weight', 'colour'], a: 0 }
      ]
    },
    {
      title: 'Flight',
      summary: 'Learn how things fly.',
      learn: ['Know the four forces: lift, weight, thrust, drag', 'Wings create lift', 'Different flying machines'],
      lesson: [
        { t: 'p', text: 'Four forces act on every flying object: lift (up), weight (down), thrust (forward), and drag (backward). When lift beats weight and thrust beats drag, the object flies.' },
        { t: 'key', text: 'A wing is shaped like an airfoil — curved on top, flatter on the bottom. Air moves faster over the curved top, which creates lower pressure there; the higher pressure below pushes the wing up. That push is lift.' },
        { t: 'p', text: 'Different machines fly in different ways: airplanes use wings and engines; helicopters use spinning rotors; hot-air balloons rise because warm air is lighter than the cooler air around it.' },
        { t: 'example', title: 'Worked example', text: 'Paper airplane test: fold a dart-style plane and throw it gently. Thrust comes from your hand, lift from the wings, drag slows it down, and weight pulls it to the ground. Tilt the wings slightly and test again — small changes make big differences.' },
        { t: 'p', text: 'Vocabulary: an airfoil is the wing shape that creates lift; thrust is the forward force; lift is the upward force.' }
      ],
      quiz: [
        { q: 'The force that pushes a plane upward is...', options: ['lift', 'drag', 'weight'], a: 0 },
        { q: 'The force that pulls objects down is...', options: ['gravity (weight)', 'lift', 'thrust'], a: 0 },
        { q: 'The shape of a wing is called an...', options: ['airfoil', 'anchor', 'axle'], a: 0 }
      ]
    },
    {
      title: 'Sky Science (Space)',
      summary: 'Learn about the Sun, Moon, planets, and stars.',
      learn: ['The Sun is the centre of our solar system', 'The Moon orbits Earth', 'Seasons are caused by Earth\'s tilt'],
      lesson: [
        { t: 'p', text: 'Our solar system has the Sun at its centre, with 8 planets orbiting it: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The Moon orbits Earth, and Earth orbits the Sun.' },
        { t: 'key', text: 'Seasons happen because Earth\'s axis is tilted about 23.5 degrees. When the Northern Hemisphere tilts toward the Sun, it is summer there; when it tilts away, it is winter. Distance from the Sun is not what causes the seasons.' },
        { t: 'p', text: 'The Moon shows phases because we see different amounts of its sunlit side as it orbits Earth: new moon, crescent, half, gibbous, full — then back to new.' },
        { t: 'example', title: 'Worked example', text: 'Why is winter colder? In winter the Northern Hemisphere tilts away from the Sun, so sunlight arrives at a low angle and spreads over more ground — less heat per square metre — and the days are shorter.' },
        { t: 'p', text: 'Vocabulary: orbit means to travel around another object; the axis is the imaginary pole that Earth spins on; a phase is one of the changing shapes of the Moon we see.' }
      ],
      quiz: [
        { q: 'Earth orbits the...', options: ['Sun', 'Moon', 'Mars'], a: 0 },
        { q: 'Seasons happen because...', options: ['Earth is tilted on its axis', 'Earth is closer to the Sun', 'the Moon moves'], a: 0 },
        { q: 'How many planets are in our solar system?', options: ['8', '9', '7'], a: 0 }
      ]
    },
    {
      title: 'Trees and Forests',
      summary: 'Learn about forests as ecosystems.',
      learn: ['Name the parts of a tree', 'Forests provide oxygen and habitats', 'Trees grow in layers (canopy, understory)'],
      lesson: [
        { t: 'p', text: 'A forest is an ecosystem where trees are the main form of life. Forests cover huge areas of land and support thousands of other species.' },
        { t: 'key', text: 'Parts of a tree: roots anchor the tree and take in water; the trunk carries water upward and supports the branches; leaves make food; seeds grow into new trees. Tree rings tell a tree\'s age — one ring per year.' },
        { t: 'p', text: 'Forests grow in layers: the canopy is the tops of the tallest trees; the understory is the smaller trees and shrubs below them; the forest floor holds moss, ferns, leaf litter, and soil.' },
        { t: 'example', title: 'Worked example', text: 'Why do forests matter? During photosynthesis, trees take in carbon dioxide and release oxygen — the air we breathe. Forests also give animals habitat, keep water clean, and provide wood and paper.' },
        { t: 'p', text: 'Vocabulary: an ecosystem is a community of living things and their environment; the canopy is the top layer of a forest; photosynthesis is how leaves use sunlight to make food and oxygen.' }
      ],
      quiz: [
        { q: 'Trees produce...', options: ['oxygen', 'carbon dioxide only', 'plastic'], a: 0 },
        { q: 'The top layer of a forest is the...', options: ['canopy', 'root', 'soil'], a: 0 },
        { q: 'Forests are important because they...', options: ['provide habitats and oxygen', 'make pollution', 'have no use'], a: 0 }
      ]
    },
    {
      title: 'Evidence and Investigation',
      summary: 'Use the scientific method to investigate.',
      learn: ['Make a hypothesis', 'Do a fair test (change one thing)', 'Record and interpret results'],
      lesson: [
        { t: 'p', text: 'Scientists investigate by asking questions and testing ideas. The scientific method is a plan for doing that fairly and carefully.' },
        { t: 'key', text: 'A hypothesis is a prediction you can test — an "if... then... because..." statement. A fair test changes only ONE thing, called the variable, and keeps everything else the same.' },
        { t: 'p', text: 'Fair test example: does light affect plant growth? Change only the light — keep the soil, water, and pot size the same for every plant. If you change two things at once, you cannot tell which one caused the difference.' },
        { t: 'example', title: 'Worked example', text: 'Hypothesis: "If I add more salt to water, then it will take longer to freeze." Test: freeze three cups with 0, 1, and 2 spoons of salt, record how long each takes to freeze, and compare the results.' },
        { t: 'p', text: 'After an experiment, record your results, look for patterns, and draw a conclusion: does the evidence support the hypothesis? Share your findings so others can repeat the test.' }
      ],
      quiz: [
        { q: 'A hypothesis is...', options: ['a prediction you can test', 'a proven fact', 'a wild guess with no test'], a: 0 },
        { q: 'A fair test changes...', options: ['only one variable', 'everything at once', 'nothing'], a: 0 },
        { q: 'After an experiment, you should...', options: ['record and interpret results', 'ignore results', 'delete data'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Democracy in Action',
      summary: 'Learn how local government works.',
      learn: ['We elect representatives', 'Citizens can participate', 'Local government provides services'],
      lesson: [
        { t: 'p', text: 'In a democracy, government gets its power from the people. Citizens choose representatives by voting, and those representatives make decisions on their behalf.' },
        { t: 'key', text: 'Local (municipal) government provides the services you use every day: roads, water, parks, libraries, garbage pickup, and fire protection. It is led by a mayor and a council.' },
        { t: 'p', text: 'Citizens participate in many ways: voting in elections, volunteering, attending community meetings, writing to their representatives, and even running for office themselves.' },
        { t: 'example', title: 'Worked example', text: 'A neighbourhood wants a new crosswalk. Citizens attend the council meeting and speak, and they sign a petition. The council hears them and votes to build the crosswalk. Citizen participation worked.' },
        { t: 'p', text: 'Vocabulary: a representative is someone chosen to act for others; municipal means relating to a city or town; to participate means to take part.' }
      ],
      quiz: [
        { q: 'In a democracy, citizens...', options: ['vote to choose leaders', 'cannot speak up', 'are not involved'], a: 0 },
        { q: 'Local government provides...', options: ['roads and libraries', 'the army only', 'nothing'], a: 0 },
        { q: 'Citizens participate by...', options: ['voting and volunteering', 'ignoring issues', 'only watching'], a: 0 }
      ]
    },
    {
      title: 'Ancient Athens',
      summary: 'Learn about democracy in ancient Athens.',
      learn: ['Athens had an early democracy', 'Only free men could vote', 'Athenian ideas influenced us today'],
      lesson: [
        { t: 'p', text: 'Ancient Athens, in Greece, is famous as the birthplace of democracy — the idea that citizens govern themselves. Around 508 BCE, Athenian citizens began making decisions by voting.' },
        { t: 'key', text: 'In Athens, an assembly of citizens met to debate and vote on laws. But democracy was limited: only free adult men who were citizens could take part — women, enslaved people, and foreigners could not.' },
        { t: 'p', text: 'Athenians used both voting and sortition — choosing officials by lottery — and citizens served on juries. Because many people shared power, no single person ruled alone.' },
        { t: 'example', title: 'Worked example', text: 'Compare governments: in ancient Athens, citizens debated and voted on laws directly at the assembly. In Canada today, citizens vote for representatives who then make laws. Both are democracies, but they work differently.' },
        { t: 'p', text: 'Vocabulary: democracy means rule by the people; an assembly is a gathering of citizens to make decisions; a citizen is a member of a state with political rights.' }
      ],
      quiz: [
        { q: 'Athens is in which country today?', options: ['Greece', 'Italy', 'Egypt'], a: 0 },
        { q: 'In ancient Athens, who could vote?', options: ['Only free men', 'Everyone', 'Only women'], a: 0 },
        { q: 'Athens is known as the birthplace of...', options: ['democracy', 'monarchy', 'farming'], a: 0 }
      ]
    },
    {
      title: 'Iroquois Confederacy',
      summary: 'Learn about the Iroquois system of government.',
      learn: ['The Confederacy united several nations', 'Decisions were made by consensus', 'It had a constitution (Great Law of Peace)'],
      lesson: [
        { t: 'p', text: 'The Haudenosaunee, also called the Iroquois, united several First Nations — the Mohawk, Oneida, Onondaga, Cayuga, and Seneca, later joined by the Tuscarora — in a lasting alliance across what is now New York state and Ontario.' },
        { t: 'key', text: 'The Confederacy was governed by the Great Law of Peace, a constitution that divided powers among the nations and created a council of chiefs who made decisions together. Decisions were made by consensus — everyone had to agree before a decision was final.' },
        { t: 'p', text: 'The Confederacy had its own checks and balances: separate councils handled different decisions, and clan mothers — women — chose the chiefs and could remove them, balancing power between leaders and the people.' },
        { t: 'example', title: 'Worked example', text: 'Consensus in action: a council discusses a new alliance. Instead of a majority vote, they talk until all nations agree. If one nation disagrees, the discussion continues — unity matters more than speed.' },
        { t: 'p', text: 'Vocabulary: a confederacy is an alliance of groups; consensus means general agreement; a constitution is a set of rules for how a government works.' }
      ],
      quiz: [
        { q: 'The Iroquois Confederacy united...', options: ['several First Nations', 'one city', 'two villages'], a: 0 },
        { q: 'Decisions were made by...', options: ['consensus (agreement)', 'one chief alone', 'random choice'], a: 0 },
        { q: 'The Great Law of Peace was...', options: ['a constitution', 'a war', 'a treaty with Europe'], a: 0 }
      ]
    },
    {
      title: 'Rights and Responsibilities',
      summary: 'Learn about rights and the responsibilities that go with them.',
      learn: ['Everyone has basic rights', 'With rights come responsibilities', 'The Charter protects rights in Canada'],
      lesson: [
        { t: 'p', text: 'A right is something you are entitled to — like the right to an education, to express your opinion, and to be treated fairly. Rights belong to everyone.' },
        { t: 'key', text: 'With every right comes a responsibility. If you have the right to speak, you are responsible for letting others speak too. Rights and responsibilities go together like two sides of the same coin.' },
        { t: 'p', text: 'In Canada, the Charter of Rights and Freedoms — part of the Constitution since 1982 — protects fundamental rights: freedom of expression, freedom of religion, equality rights, and more.' },
        { t: 'example', title: 'Worked example', text: 'You have the right to a clean and safe classroom. The responsibility that goes with it: put your garbage in the bin, push in your chair, and report hazards. Everyone\'s rights are protected when everyone does their part.' },
        { t: 'p', text: 'Vocabulary: a right is something you are entitled to; a responsibility is a duty that comes with a right; the Charter is the Canadian law that protects fundamental rights and freedoms.' }
      ],
      quiz: [
        { q: 'A right is...', options: ['something you are entitled to', 'a chore', 'a privilege only for some'], a: 0 },
        { q: 'With rights come...', options: ['responsibilities', 'nothing', 'more money'], a: 0 },
        { q: 'In Canada, rights are protected by the...', options: ['Charter of Rights and Freedoms', 'tax code', 'weather'], a: 0 }
      ]
    }
  ]
};
