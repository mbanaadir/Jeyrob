// Canadian (Alberta) curriculum — Grades 1–3
window.CURRICULUM = window.CURRICULUM || {};

window.CURRICULUM[1] = {
  math: [
    {
      title: 'Numbers 0 to 20',
      summary: 'Count, read, write, and compare numbers up to 20.',
      learn: ['Count forward and backward to 20', 'Read and write number words', 'Tell which number is bigger or smaller'],
      quiz: [
        { q: 'What number comes after 9?', options: ['8', '10', '11'], a: 1 },
        { q: 'Which number is the biggest?', options: ['7', '12', '15'], a: 2 },
        { q: 'Count the word "seven". What number is it?', options: ['6', '7', '8'], a: 1 }
      ]
    },
    {
      title: 'Addition and Subtraction to 20',
      summary: 'Add and take away numbers up to 20.',
      learn: ['Add two numbers (like 3 + 4 = 7)', 'Subtract (like 9 - 2 = 7)', 'Use objects or fingers to help'],
      quiz: [
        { q: 'What is 5 + 3?', options: ['7', '8', '9'], a: 1 },
        { q: 'What is 9 - 4?', options: ['4', '5', '6'], a: 1 },
        { q: 'What is 10 + 10?', options: ['20', '19', '21'], a: 0 }
      ]
    },
    {
      title: 'Patterns',
      summary: 'See, copy, and make patterns.',
      learn: ['Find the repeating part', 'Continue a pattern', 'Make your own pattern'],
      quiz: [
        { q: 'What comes next? 🔴🔵🔴🔵🔴', options: ['🔵', '🔴', '🟢'], a: 0 },
        { q: 'What comes next? 2, 4, 6, ?', options: ['7', '8', '9'], a: 1 },
        { q: 'A pattern repeats the same thing over and over. True or false?', options: ['True', 'False'], a: 0 }
      ]
    },
    {
      title: 'Shapes and Objects',
      summary: 'Name flat shapes and solid objects.',
      learn: ['Name shapes: circle, square, triangle, rectangle', 'Name objects: cube, sphere, cone', 'Sort shapes by size and sides'],
      quiz: [
        { q: 'Which shape has 4 equal sides?', options: ['Circle', 'Square', 'Triangle'], a: 1 },
        { q: 'Which shape is round like a ball?', options: ['Sphere', 'Cube', 'Cone'], a: 0 },
        { q: 'How many sides does a triangle have?', options: ['2', '3', '4'], a: 1 }
      ]
    },
    {
      title: 'Measurement and Time',
      summary: 'Measure length, compare weight, and read time.',
      learn: ['Compare long and short', 'Compare heavy and light', 'Read the hour on a clock'],
      quiz: [
        { q: 'Which is longer — a pencil or a bus?', options: ['Pencil', 'Bus'], a: 1 },
        { q: 'Which is heavier — an elephant or a cat?', options: ['Elephant', 'Cat'], a: 0 },
        { q: 'A clock has how many numbers?', options: ['10', '12', '24'], a: 1 }
      ]
    }
  ],
  english: [
    {
      title: 'Letters and Sounds',
      summary: 'Learn the alphabet and the sounds letters make.',
      learn: ['Say the alphabet A to Z', 'Know the sound of each letter', 'Match letters to pictures'],
      quiz: [
        { q: 'Which letter makes the first sound in "cat"?', options: ['C', 'T', 'A'], a: 0 },
        { q: 'How many letters are in the alphabet?', options: ['24', '26', '30'], a: 1 },
        { q: 'What is the last letter of the alphabet?', options: ['X', 'Y', 'Z'], a: 2 }
      ]
    },
    {
      title: 'Reading Simple Words',
      summary: 'Sound out and read short words.',
      learn: ['Blend sounds: c-a-t = cat', 'Read simple words: dog, sun, hat', 'Read short sentences'],
      quiz: [
        { q: 'What word is this: d-o-g?', options: ['dig', 'dog', 'god'], a: 1 },
        { q: 'Which word rhymes with "cat"?', options: ['hat', 'cup', 'bed'], a: 0 },
        { q: 'A sentence always starts with a...', options: ['full stop', 'capital letter', 'number'], a: 1 }
      ]
    },
    {
      title: 'Listening and Speaking',
      summary: 'Listen carefully and talk clearly.',
      learn: ['Listen to a story and retell it', 'Answer questions about what you heard', 'Take turns when speaking'],
      quiz: [
        { q: 'When someone is talking, you should...', options: ['Listen', 'Talk over them', 'Walk away'], a: 0 },
        { q: 'After listening to a story, you can...', options: ['Forget it', 'Retell it in your own words', 'Stay quiet always'], a: 1 },
        { q: 'Speaking clearly means...', options: ['Whispering', 'Using a clear voice', 'Shouting'], a: 1 }
      ]
    },
    {
      title: 'Writing Words and Sentences',
      summary: 'Write letters, words, and simple sentences.',
      learn: ['Form letters correctly', 'Write your name', 'Write a simple sentence'],
      quiz: [
        { q: 'A sentence ends with a...', options: ['period (.)', 'letter', 'number'], a: 0 },
        { q: 'Which is a complete sentence?', options: ['The cat', 'The cat ran.', 'Cat ran the'], a: 1 },
        { q: 'We write our name starting with a...', options: ['small letter', 'capital letter'], a: 1 }
      ]
    },
    {
      title: 'Stories and Understanding',
      summary: 'Understand what happens in a story.',
      learn: ['Name the characters', 'Tell what happens first, next, last', 'Say what you liked about the story'],
      quiz: [
        { q: 'The people or animals in a story are called...', options: ['characters', 'colours', 'numbers'], a: 0 },
        { q: 'What happens first in a story is the...', options: ['ending', 'beginning', 'title'], a: 1 },
        { q: 'A story with animals that talk is called...', options: ['a fable', 'a map', 'a menu'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Needs of Plants and Animals',
      summary: 'Learn what living things need to live and grow.',
      learn: ['Plants need water, light, and soil', 'Animals need food, water, and shelter', 'Name parts of a plant'],
      quiz: [
        { q: 'What do plants need to grow?', options: ['Water and light', 'Candy', 'Toys'], a: 0 },
        { q: 'Which of these is a need of animals?', options: ['Food', 'Video games', 'Cars'], a: 0 },
        { q: 'The part of a plant that grows in the soil is the...', options: ['leaf', 'root', 'flower'], a: 1 }
      ]
    },
    {
      title: 'My Five Senses',
      summary: 'Use your senses to explore the world.',
      learn: ['Name the 5 senses', 'Know which body part is used for each sense', 'Describe objects using senses'],
      quiz: [
        { q: 'How many senses do we have?', options: ['3', '4', '5'], a: 2 },
        { q: 'Which sense do you use with your eyes?', options: ['Hearing', 'Seeing', 'Tasting'], a: 1 },
        { q: 'You hear with your...', options: ['ears', 'nose', 'hands'], a: 0 }
      ]
    },
    {
      title: 'The Seasons',
      summary: 'Learn about spring, summer, fall, and winter.',
      learn: ['Name the 4 seasons', 'Know what the weather is like in each season', 'Know what clothes to wear'],
      quiz: [
        { q: 'How many seasons are there?', options: ['2', '4', '6'], a: 1 },
        { q: 'Which season is the coldest?', options: ['Summer', 'Winter', 'Spring'], a: 1 },
        { q: 'In winter, we wear...', options: ['a coat and boots', 'a swimsuit', 'sandals'], a: 0 }
      ]
    },
    {
      title: 'Building Things',
      summary: 'Use materials to build and test structures.',
      learn: ['Name materials: wood, plastic, paper, metal', 'Build a simple structure', 'Test if it is strong'],
      quiz: [
        { q: 'Which material is used to make a house strong?', options: ['Paper', 'Wood or brick', 'Leaves'], a: 1 },
        { q: 'A bridge should be...', options: ['weak', 'strong', 'wet'], a: 1 },
        { q: 'Which material floats on water?', options: ['Wood', 'A rock', 'Iron'], a: 0 }
      ]
    },
    {
      title: 'Colours',
      summary: 'Mix and sort colours.',
      learn: ['Name the primary colours', 'Mix two colours to make a new one', 'Sort objects by colour'],
      quiz: [
        { q: 'Which two colours make green?', options: ['Red and yellow', 'Blue and yellow', 'Red and blue'], a: 1 },
        { q: 'Red and blue make...', options: ['purple', 'green', 'orange'], a: 0 },
        { q: 'Which is a primary colour?', options: ['Green', 'Purple', 'Blue'], a: 2 }
      ]
    }
  ],
  social: [
    {
      title: 'My Family',
      summary: 'Learn about families and how they care for each other.',
      learn: ['Name the people in your family', 'Tell how families help each other', 'Describe family traditions'],
      quiz: [
        { q: 'Family members can be...', options: ['parents and siblings', 'only strangers', 'only toys'], a: 0 },
        { q: 'A family helps each other by...', options: ['caring and sharing', 'ignoring each other', 'fighting'], a: 0 },
        { q: 'A tradition is something a family...', options: ['does again every year', 'never does', 'hides'], a: 0 }
      ]
    },
    {
      title: 'My School and Community',
      summary: 'Learn about your school and the people who help you.',
      learn: ['Name helpers in school (teacher, principal)', 'Know community helpers (doctor, firefighter)', 'Explain why we have rules'],
      quiz: [
        { q: 'Who helps put out fires?', options: ['A doctor', 'A firefighter', 'A teacher'], a: 1 },
        { q: 'Who helps you when you are sick?', options: ['A doctor', 'A baker', 'A driver'], a: 0 },
        { q: 'We have rules to keep everyone...', options: ['sad', 'safe', 'lost'], a: 1 }
      ]
    },
    {
      title: 'My Neighbourhood',
      summary: 'Learn about the places in your neighbourhood.',
      learn: ['Name places: school, park, store', 'Know how to get around', 'Be safe near roads'],
      quiz: [
        { q: 'Where do you go to learn?', options: ['School', 'Park', 'Store'], a: 0 },
        { q: 'Before crossing a road, you should...', options: ['run fast', 'look both ways', 'close your eyes'], a: 1 },
        { q: 'A place to buy food is a...', options: ['store', 'school', 'hospital'], a: 0 }
      ]
    },
    {
      title: 'Needs and Wants',
      summary: 'Learn the difference between needs and wants.',
      learn: ['Needs: food, water, shelter, clothes', 'Wants: toys, treats, games', 'Know that needs come first'],
      quiz: [
        { q: 'Which is a NEED?', options: ['Water', 'A toy', 'Candy'], a: 0 },
        { q: 'Which is a WANT?', options: ['Food', 'A video game', 'Shelter'], a: 1 },
        { q: 'Shelter means...', options: ['a place to live', 'a game', 'a snack'], a: 0 }
      ]
    },
    {
      title: 'Groups and Belonging',
      summary: 'Learn how we belong to groups.',
      learn: ['You belong to a family and a class', 'Groups have rules and jobs', 'Everyone is important'],
      quiz: [
        { q: 'You belong to a group when you are in a...', options: ['class', 'cloud', 'dream'], a: 0 },
        { q: 'In a group, everyone...', options: ['is important', 'should be left out', 'is the same'], a: 0 },
        { q: 'Being kind to others helps everyone feel...', options: ['left out', 'welcome', 'sad'], a: 1 }
      ]
    }
  ]
};

window.CURRICULUM[2] = {
  math: [
    {
      title: 'Numbers to 100',
      summary: 'Count, compare, and understand numbers up to 100.',
      learn: ['Count by 1s, 2s, 5s, and 10s', 'Know tens and ones (place value)', 'Compare numbers'],
      quiz: [
        { q: 'In the number 47, the digit 4 means...', options: ['4 ones', '4 tens (40)', '4 hundreds'], a: 1 },
        { q: 'Which number is 10 more than 25?', options: ['35', '26', '15'], a: 0 },
        { q: 'Count by 5s: 5, 10, 15, ?', options: ['16', '20', '25'], a: 1 }
      ]
    },
    {
      title: 'Addition and Subtraction to 100',
      summary: 'Add and subtract two-digit numbers.',
      learn: ['Add two-digit numbers', 'Subtract two-digit numbers', 'Use regrouping (carrying)'],
      quiz: [
        { q: 'What is 34 + 20?', options: ['54', '44', '64'], a: 0 },
        { q: 'What is 70 - 30?', options: ['30', '40', '50'], a: 1 },
        { q: 'What is 25 + 25?', options: ['45', '50', '55'], a: 1 }
      ]
    },
    {
      title: 'Introduction to Multiplication',
      summary: 'Understand multiplication as repeated addition.',
      learn: ['See 3 × 4 as 3 groups of 4', 'Use skip counting to multiply', 'Know simple facts like 2 × 3'],
      quiz: [
        { q: '2 groups of 3 apples = ?', options: ['5', '6', '9'], a: 1 },
        { q: '4 × 2 = ?', options: ['6', '8', '10'], a: 1 },
        { q: '3 groups of 5 = ?', options: ['15', '8', '12'], a: 0 }
      ]
    },
    {
      title: 'Fractions',
      summary: 'Understand halves, thirds, and quarters.',
      learn: ['A half is one of two equal parts', 'A quarter is one of four equal parts', 'Compare fractions of the same size'],
      quiz: [
        { q: 'One half of a pizza is...', options: ['one of 2 equal parts', 'the whole pizza', 'one of 4 parts'], a: 0 },
        { q: 'One quarter of a cake is...', options: ['one of 4 equal parts', 'one of 2 parts', 'the whole cake'], a: 0 },
        { q: 'Which is bigger — one half or one quarter?', options: ['One quarter', 'One half', 'They are the same'], a: 1 }
      ]
    },
    {
      title: 'Measurement and Money',
      summary: 'Measure length and count money.',
      learn: ['Measure in centimetres', 'Count coins (cents and dollars)', 'Compare lengths'],
      quiz: [
        { q: 'Which is a coin?', options: ['A loonie', 'A brick', 'A ruler'], a: 0 },
        { q: 'Two quarters equal...', options: ['50 cents', '25 cents', '75 cents'], a: 0 },
        { q: '100 cents equals...', options: ['1 dollar', '10 dollars', '1 cent'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Phonics and Spelling',
      summary: 'Sound out and spell common words.',
      learn: ['Know vowel sounds (a, e, i, o, u)', 'Spell common sight words', 'Use blends like "sh", "ch"'],
      quiz: [
        { q: 'Which word starts with the "sh" sound?', options: ['ship', 'cat', 'dog'], a: 0 },
        { q: 'Which word has a long "e" sound?', options: ['bed', 'see', 'red'], a: 1 },
        { q: 'Which is spelled correctly?', options: ['frend', 'friend', 'friand'], a: 1 }
      ]
    },
    {
      title: 'Reading Fluency',
      summary: 'Read smoothly and with expression.',
      learn: ['Read without stopping at every word', 'Pause at periods', 'Read aloud with a clear voice'],
      quiz: [
        { q: 'Fluent reading means reading...', options: ['smoothly', 'very slowly', 'backwards'], a: 0 },
        { q: 'At a period (.) you should...', options: ['pause', 'shout', 'skip words'], a: 0 },
        { q: 'Reading with expression means...', options: ['using a flat voice', 'changing your voice to match the story', 'whispering only'], a: 1 }
      ]
    },
    {
      title: 'Writing Sentences',
      summary: 'Write complete sentences with a capital and period.',
      learn: ['Start with a capital letter', 'End with a period', 'Write a sentence with a subject and verb'],
      quiz: [
        { q: 'Every sentence starts with a...', options: ['capital letter', 'small letter', 'number'], a: 0 },
        { q: 'Which is a complete sentence?', options: ['The dog barks.', 'The dog.', 'Barks the dog'], a: 0 },
        { q: 'The word that shows action is a...', options: ['verb', 'period', 'capital'], a: 0 }
      ]
    },
    {
      title: 'Story Elements',
      summary: 'Find the beginning, middle, and end of a story.',
      learn: ['Identify the characters', 'Describe the setting', 'Tell the problem and solution'],
      quiz: [
        { q: 'Where a story takes place is the...', options: ['setting', 'title', 'cover'], a: 0 },
        { q: 'The problem in a story is...', options: ['what goes wrong', 'the happy ending', 'the book cover'], a: 0 },
        { q: 'The middle of a story is where...', options: ['the action happens', 'the story ends', 'nothing happens'], a: 0 }
      ]
    },
    {
      title: 'Listening and Speaking',
      summary: 'Listen for details and share ideas clearly.',
      learn: ['Listen for the main idea', 'Ask and answer questions', 'Speak in full sentences'],
      quiz: [
        { q: 'The main idea is...', options: ['what the text is mostly about', 'a small detail', 'the last word'], a: 0 },
        { q: 'To show you are listening, you can...', options: ['look at the speaker', 'look away', 'talk'], a: 0 },
        { q: 'Speaking in full sentences means...', options: ['using one word', 'a complete thought', 'whispering'], a: 1 }
      ]
    }
  ],
  science: [
    {
      title: 'Boats and Buoyancy',
      summary: 'Learn why things float or sink.',
      learn: ['Things float if they are less dense than water', 'Shape can help things float', 'Test materials in water'],
      quiz: [
        { q: 'A boat floats because of...', options: ['buoyancy', 'magnetism', 'wind'], a: 0 },
        { q: 'Which object sinks in water?', options: ['A cork', 'A rock', 'A wooden stick'], a: 1 },
        { q: 'A wide, hollow shape helps a boat...', options: ['float', 'sink', 'break'], a: 0 }
      ]
    },
    {
      title: 'Magnetism',
      summary: 'Learn how magnets attract and repel.',
      learn: ['Magnets attract iron', 'Like poles repel', 'Opposite poles attract'],
      quiz: [
        { q: 'A magnet attracts...', options: ['iron', 'wood', 'plastic'], a: 0 },
        { q: 'Two north poles together will...', options: ['repel (push apart)', 'attract', 'melt'], a: 0 },
        { q: 'A north pole and a south pole will...', options: ['attract (pull together)', 'repel', 'do nothing'], a: 0 }
      ]
    },
    {
      title: 'Hot and Cold',
      summary: 'Understand temperature and insulation.',
      learn: ['Use a thermometer', 'Heat moves from hot to cold', 'Insulation keeps things warm or cool'],
      quiz: [
        { q: 'We measure temperature with a...', options: ['thermometer', 'ruler', 'scale'], a: 0 },
        { q: 'A winter jacket keeps you warm because it...', options: ['insulates', 'cools', 'melts'], a: 0 },
        { q: 'Ice melts when it gets...', options: ['warmer', 'colder', 'harder'], a: 0 }
      ]
    },
    {
      title: 'Small Crawling and Flying Animals',
      summary: 'Learn about insects and other small animals.',
      learn: ['Name insects: ant, bee, butterfly', 'Insects have 6 legs', 'Some animals fly, some crawl'],
      quiz: [
        { q: 'How many legs does an insect have?', options: ['4', '6', '8'], a: 1 },
        { q: 'Which animal can fly?', options: ['A butterfly', 'A worm', 'A snail'], a: 0 },
        { q: 'A spider has how many legs?', options: ['6', '8', '10'], a: 1 }
      ]
    }
  ],
  social: [
    {
      title: "Canada's Three Communities",
      summary: 'Learn about Acadian, Inuit, and Prairie communities.',
      learn: ['Acadians live in eastern Canada', 'Inuit live in the North', 'Prairie people live on the plains'],
      quiz: [
        { q: 'Inuit people traditionally live in...', options: ['the North', 'the desert', 'the jungle'], a: 0 },
        { q: 'The Prairies are known for...', options: ['flat farmland', 'high mountains', 'ocean'], a: 0 },
        { q: 'Acadian communities are found in...', options: ['eastern Canada', 'northern Canada', 'western Canada'], a: 0 }
      ]
    },
    {
      title: 'Geography of Communities',
      summary: 'Learn how land and water shape communities.',
      learn: ['Communities are near rivers, lakes, or coasts', 'Climate affects how people live', 'Maps show where places are'],
      quiz: [
        { q: 'Many towns grew near...', options: ['rivers and lakes', 'deserts', 'clouds'], a: 0 },
        { q: 'A map shows...', options: ['where places are', 'what to eat', 'the weather'], a: 0 },
        { q: 'Cold climates mean people need...', options: ['warm homes', 'swimming pools', 'fans'], a: 0 }
      ]
    },
    {
      title: 'Community Then and Now',
      summary: 'Compare life in the past and today.',
      learn: ['People travelled by horse before cars', 'Tools and jobs have changed', 'Some traditions stay the same'],
      quiz: [
        { q: 'Before cars, people often travelled by...', options: ['horse', 'airplane', 'rocket'], a: 0 },
        { q: 'Which is a new technology?', options: ['A smartphone', 'A stone wheel', 'A candle'], a: 0 },
        { q: 'Traditions are...', options: ['passed down over time', 'brand new every day', 'forgotten'], a: 0 }
      ]
    },
    {
      title: 'Land and Climate',
      summary: 'Learn how land and climate affect daily life.',
      learn: ['Climate means the usual weather of a place', 'Land can be flat, hilly, or mountainous', 'People adapt to their land'],
      quiz: [
        { q: 'Climate means...', options: ['usual weather of a place', 'one day of rain', 'a type of tree'], a: 0 },
        { q: 'Mountains are...', options: ['very high land', 'flat land', 'underwater'], a: 0 },
        { q: 'People near the sea often...', options: ['fish', 'ski', 'mine'], a: 0 }
      ]
    }
  ]
};

window.CURRICULUM[3] = {
  math: [
    {
      title: 'Numbers to 1000',
      summary: 'Read, write, and compare numbers up to 1000.',
      learn: ['Know hundreds, tens, and ones', 'Read and write 3-digit numbers', 'Compare and round numbers'],
      quiz: [
        { q: 'In 365, the 3 means...', options: ['3 hundreds (300)', '3 tens', '3 ones'], a: 0 },
        { q: 'Which number is bigger?', options: ['498', '512', '470'], a: 1 },
        { q: 'The number 200 + 30 + 5 equals...', options: ['235', '253', '325'], a: 0 }
      ]
    },
    {
      title: 'Addition and Subtraction to 1000',
      summary: 'Add and subtract three-digit numbers.',
      learn: ['Add with regrouping', 'Subtract with borrowing', 'Check your answers'],
      quiz: [
        { q: 'What is 250 + 350?', options: ['600', '500', '700'], a: 0 },
        { q: 'What is 800 - 250?', options: ['550', '650', '450'], a: 0 },
        { q: 'What is 125 + 125?', options: ['250', '240', '260'], a: 0 }
      ]
    },
    {
      title: 'Multiplication and Division',
      summary: 'Learn multiplication and division facts.',
      learn: ['Know times tables to 10', 'Division is sharing equally', 'See the link between × and ÷'],
      quiz: [
        { q: 'What is 6 × 4?', options: ['24', '20', '28'], a: 0 },
        { q: 'What is 12 ÷ 3?', options: ['3', '4', '5'], a: 1 },
        { q: 'If 5 × 6 = 30, then 30 ÷ 6 = ?', options: ['5', '6', '30'], a: 0 }
      ]
    },
    {
      title: 'Fractions',
      summary: 'Understand, compare, and add simple fractions.',
      learn: ['Name fractions (1/2, 1/3, 1/4)', 'Compare fractions', 'Find fractions of a group'],
      quiz: [
        { q: 'Which fraction is the same as 2/4?', options: ['1/2', '1/3', '1/4'], a: 0 },
        { q: 'Half of 10 is...', options: ['4', '5', '6'], a: 1 },
        { q: 'Which is bigger — 1/2 or 1/4?', options: ['1/4', '1/2', 'They are equal'], a: 1 }
      ]
    },
    {
      title: 'Measurement and Shapes',
      summary: 'Measure length, mass, and describe shapes.',
      learn: ['Measure in cm and m', 'Measure mass in grams and kilograms', 'Name and sort 2D shapes'],
      quiz: [
        { q: '1000 grams equals...', options: ['1 kilogram', '10 kilograms', '100 kilograms'], a: 0 },
        { q: 'How many sides does a pentagon have?', options: ['4', '5', '6'], a: 1 },
        { q: 'Which unit measures length?', options: ['centimetre', 'gram', 'litre'], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: 'Reading Comprehension',
      summary: 'Read and understand paragraphs.',
      learn: ['Find the main idea', 'Answer who, what, where, when, why', 'Make predictions'],
      quiz: [
        { q: 'A good reader asks...', options: ['who, what, where, when, why', 'nothing', 'only "why not"'], a: 0 },
        { q: 'Predicting means...', options: ['guessing what happens next', 'rereading', 'counting words'], a: 0 },
        { q: 'The main idea is...', options: ['the big point of the text', 'one tiny detail', 'the title only'], a: 0 }
      ]
    },
    {
      title: 'Spelling and Vocabulary',
      summary: 'Build a bigger word bank and spell well.',
      learn: ['Learn new words each week', 'Use a dictionary', 'Use context clues'],
      quiz: [
        { q: 'A dictionary helps you find...', options: ['word meanings', 'recipes', 'maps'], a: 0 },
        { q: 'Context clues are...', options: ['words around a word that hint its meaning', 'a type of shoe', 'numbers'], a: 0 },
        { q: 'Which is spelled correctly?', options: ['bautiful', 'beautiful', 'beutiful'], a: 1 }
      ]
    },
    {
      title: 'Writing Paragraphs',
      summary: 'Write a paragraph with a topic sentence and details.',
      learn: ['Start with a topic sentence', 'Add 2-3 supporting details', 'End with a closing sentence'],
      quiz: [
        { q: 'A paragraph usually starts with a...', options: ['topic sentence', 'question mark', 'drawing'], a: 0 },
        { q: 'Supporting details...', options: ['explain the topic', 'repeat the title', 'are unrelated'], a: 0 },
        { q: 'How many main ideas should one paragraph have?', options: ['One', 'Five', 'Ten'], a: 0 }
      ]
    },
    {
      title: 'Grammar: Nouns and Verbs',
      summary: 'Know nouns, verbs, and adjectives.',
      learn: ['A noun names a person, place, or thing', 'A verb shows action', 'An adjective describes'],
      quiz: [
        { q: 'Which word is a noun?', options: ['run', 'school', 'fast'], a: 1 },
        { q: 'Which word is a verb?', options: ['jump', 'table', 'happy'], a: 0 },
        { q: 'Which word is an adjective?', options: ['dog', 'blue', 'sit'], a: 1 }
      ]
    },
    {
      title: 'Speaking and Listening',
      summary: 'Share ideas and listen to others.',
      learn: ['Speak clearly and loudly enough', 'Give reasons for your opinion', 'Listen and respond politely'],
      quiz: [
        { q: 'When sharing an opinion, you should...', options: ['give a reason', 'shout', 'ignore others'], a: 0 },
        { q: 'Good listening includes...', options: ['waiting your turn', 'talking over others', 'looking away'], a: 0 },
        { q: 'Disagreeing politely means...', options: ['respecting the other view', 'insulting', 'walking away'], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: 'Rocks and Minerals',
      summary: 'Learn how rocks and minerals form and are used.',
      learn: ['Name the 3 rock types', 'Minerals are the building blocks of rocks', 'Rocks are used in building'],
      quiz: [
        { q: 'How many main rock types are there?', options: ['2', '3', '5'], a: 1 },
        { q: 'Rocks are made of...', options: ['minerals', 'water', 'air'], a: 0 },
        { q: 'Which is a use of rock?', options: ['Building roads and homes', 'Eating', 'Drinking'], a: 0 }
      ]
    },
    {
      title: 'Building with Materials',
      summary: 'Test materials to build strong structures.',
      learn: ['Test materials for strength', 'Choose the best material for a job', 'Build and test a structure'],
      quiz: [
        { q: 'To build a bridge, choose a material that is...', options: ['strong', 'bendy', 'weak'], a: 0 },
        { q: 'A structure is stronger when its base is...', options: ['wide and stable', 'narrow', 'tilted'], a: 0 },
        { q: 'Which material is strong and light?', options: ['Plastic', 'Paper', 'Metal (aluminum)'], a: 2 }
      ]
    },
    {
      title: 'Hearing and Sound',
      summary: 'Learn how sound travels and how we hear.',
      learn: ['Sound is a vibration', 'Sound travels through air', 'Pitch is how high or low a sound is'],
      quiz: [
        { q: 'Sound is caused by...', options: ['vibration', 'light', 'colour'], a: 0 },
        { q: 'A high-pitched sound is...', options: ['high like a whistle', 'low like thunder', 'silent'], a: 0 },
        { q: 'We hear with our...', options: ['ears', 'eyes', 'nose'], a: 0 }
      ]
    },
    {
      title: 'Life Cycles',
      summary: 'Learn how animals grow and change.',
      learn: ['Name the stages of a life cycle', 'A butterfly starts as an egg', 'Animals change as they grow'],
      quiz: [
        { q: 'A butterfly starts life as...', options: ['an egg', 'a bird', 'a fish'], a: 0 },
        { q: 'A tadpole grows into a...', options: ['frog', 'fish', 'bird'], a: 0 },
        { q: 'A life cycle shows...', options: ['stages of growth', 'a map', 'a recipe'], a: 0 }
      ]
    },
    {
      title: 'Forces That Attract and Repel',
      summary: 'Learn about magnetism and static electricity.',
      learn: ['Magnets attract and repel', 'Static electricity can attract small objects', 'Forces can push and pull'],
      quiz: [
        { q: 'Static electricity can make your hair...', options: ['stand up', 'fall off', 'change colour'], a: 0 },
        { q: 'A push or a pull is a...', options: ['force', 'rock', 'sound'], a: 0 },
        { q: 'Rubbing a balloon can give it...', options: ['static charge', 'water', 'heat'], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: 'Global Citizenship',
      summary: 'Learn what it means to be a global citizen.',
      learn: ['We all share one planet', 'Small actions can help the world', 'Respect other cultures'],
      quiz: [
        { q: 'A global citizen cares about...', options: ['the whole world', 'only themselves', 'only one town'], a: 0 },
        { q: 'Recycling helps...', options: ['protect the planet', 'make trash', 'waste energy'], a: 0 },
        { q: 'Respecting other cultures means...', options: ['learning about them', 'ignoring them', 'making fun of them'], a: 0 }
      ]
    },
    {
      title: 'Four Countries: India, Tunisia, Ukraine, Peru',
      summary: 'Compare communities in four countries.',
      learn: ['Name the 4 countries', 'Each has its own culture and traditions', 'Compare daily life'],
      quiz: [
        { q: 'Which of these is one of the four focus countries?', options: ['Peru', 'France', 'Japan'], a: 0 },
        { q: 'Communities in different countries may have different...', options: ['traditions', 'sun', 'gravity'], a: 0 },
        { q: 'Learning about other countries helps us...', options: ['understand them', 'forget them', 'avoid them'], a: 0 }
      ]
    },
    {
      title: 'Quality of Life',
      summary: 'Understand what makes a good quality of life.',
      learn: ['Basic needs: food, water, shelter, health', 'Education and safety matter', 'Compare quality of life'],
      quiz: [
        { q: 'Which is a basic need?', options: ['Clean water', 'A smartphone', 'A toy'], a: 0 },
        { q: 'Quality of life includes...', options: ['health and safety', 'only money', 'only games'], a: 0 },
        { q: 'Education improves quality of life because...', options: ['it opens opportunities', 'it is boring', 'it costs nothing'], a: 0 }
      ]
    },
    {
      title: 'Goods and Services',
      summary: 'Learn the difference between goods and services.',
      learn: ['Goods are things you can touch', 'Services are jobs people do for you', 'Both are part of daily life'],
      quiz: [
        { q: 'Which is a GOOD?', options: ['A book', 'A haircut', 'A bus ride'], a: 0 },
        { q: 'Which is a SERVICE?', options: ['A doctor\'s care', 'A chair', 'An apple'], a: 0 },
        { q: 'People who sell goods or services are called...', options: ['producers', 'rocks', 'rivers'], a: 0 }
      ]
    }
  ]
};
