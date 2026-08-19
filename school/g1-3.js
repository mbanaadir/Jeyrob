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
      ],
      lesson: [
        { t: 'p', text: 'Numbers help us count things: how many crayons are in the box, how many steps to the door, how many friends are in your class.' },
        { t: 'key', text: 'Counting forward goes 1, 2, 3, 4, 5 and up to 20. Counting backward goes 20, 19, 18 and down to 1.' },
        { t: 'p', text: 'We can write a number as a digit (5) or as a word (five). Both tell the same amount.' },
        { t: 'example', title: 'Worked example', text: 'Look at 8 and 5. Which is bigger? When we count, 8 comes after 5, so 8 is bigger.' },
        { t: 'p', text: 'Try it at home: count the forks on the table, or count your toys from 1 to 20 and back again.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Adding means putting groups together to find how many in all. Subtracting means taking some away to find what is left.' },
        { t: 'key', text: '3 + 4 = 7 means 3 things and 4 things make 7 things together. 9 - 2 = 7 means 9 things with 2 taken away leaves 7.' },
        { t: 'example', title: 'Worked example', text: 'You have 5 apples and your friend gives you 3 more. 5 + 3 = 8, so now you have 8 apples.' },
        { t: 'p', text: 'Use your fingers or small objects like buttons to help you add and subtract.' },
        { t: 'example', title: 'Worked example', text: '7 birds sit on a fence. 2 fly away. 7 - 2 = 5, so 5 birds are left.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A pattern is something that repeats over and over in the same order.' },
        { t: 'key', text: 'Find the part that repeats, and it is easy to continue the pattern.' },
        { t: 'example', title: 'Worked example', text: 'Look at this pattern: red, blue, red, blue, red. The repeating part is red, blue. What comes next? Blue!' },
        { t: 'p', text: 'Patterns are everywhere: stripes on a shirt, beats in a song, tiles on a floor, steps on a staircase.' },
        { t: 'example', title: 'Worked example', text: 'Look at the numbers 2, 4, 6, ?. Each number is 2 more than the one before, so the next number is 8.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Flat shapes are like pictures you can draw: a circle, a square, a triangle, and a rectangle.' },
        { t: 'key', text: 'Solid objects take up space and can be held: a cube, a sphere, a cone, and a cylinder.' },
        { t: 'example', title: 'Worked example', text: 'A ball is a sphere. A dice is a cube. An ice cream cone is a cone. A soup can is a cylinder.' },
        { t: 'p', text: 'Count the sides and corners of flat shapes. A triangle has 3 sides, a square has 4 equal sides, a rectangle has 4 sides too.' },
        { t: 'example', title: 'Worked example', text: 'Look around your room: a clock is a circle, a door is a rectangle, a window can be a square.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We measure to find out how long, how heavy, or how tall things are.' },
        { t: 'key', text: 'Long and short tell about length. Heavy and light tell about weight. A clock tells us the time.' },
        { t: 'example', title: 'Worked example', text: 'A bus is longer than a pencil. An elephant is heavier than a cat.' },
        { t: 'p', text: 'A clock has 12 numbers. When the big hand points to 12 and the small hand points to 3, it is 3 o\'clock.' },
        { t: 'example', title: 'Worked example', text: 'Bedtime is at 8 o\'clock. The small hand points to 8 and the big hand points to 12.' }
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
      ],
      lesson: [
        { t: 'p', text: 'The alphabet has 26 letters, from A to Z. Letters are the building blocks of words.' },
        { t: 'key', text: 'Every letter makes a sound. B says \'b\' like in ball, and M says \'m\' like in moon.' },
        { t: 'example', title: 'Worked example', text: 'The word cat starts with C. C makes the \'k\' sound, like in cake and car.' },
        { t: 'p', text: 'Practice saying the alphabet every day. Sing the ABC song while you point to each letter.' },
        { t: 'example', title: 'Worked example', text: 'Match letters to pictures: A is for apple, B is for ball, C is for cat.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We read words by blending sounds together. Each sound is like a puzzle piece.' },
        { t: 'key', text: 'Blend the sounds c-a-t and you get the word cat.' },
        { t: 'example', title: 'Worked example', text: 'd-o-g blends to dog. s-u-n blends to sun. h-a-t blends to hat.' },
        { t: 'p', text: 'Now read short sentences, like \'The sun is hot.\' or \'The dog can run.\'' },
        { t: 'key', text: 'A sentence starts with a capital letter and ends with a period.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Listening means paying attention with your ears and your whole body.' },
        { t: 'key', text: 'When someone is talking, look at them and listen. Wait for your turn to speak.' },
        { t: 'example', title: 'Worked example', text: 'If a friend tells a story about a dog at the park, you can retell it: first the dog ran, then it found a ball.' },
        { t: 'p', text: 'Speaking clearly means using a calm, clear voice so everyone can understand you.' },
        { t: 'example', title: 'Worked example', text: 'When you answer a question, say a whole sentence. Instead of \'red\', say \'My favourite colour is red.\'' }
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
      ],
      lesson: [
        { t: 'p', text: 'Writing lets us put our ideas on paper so other people can read them.' },
        { t: 'key', text: 'Letters form words, and words form sentences. A sentence ends with a period.' },
        { t: 'example', title: 'Worked example', text: 'Write your name with a capital first letter: Ayaan, Omar, or Huda.' },
        { t: 'p', text: 'A complete sentence tells a whole idea. \'The cat ran.\' is a sentence.' },
        { t: 'example', title: 'Worked example', text: '\'The dog\' is not a sentence — it does not say what the dog does. \'The dog barks.\' is a sentence.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Stories have people or animals in them. These are called characters.' },
        { t: 'key', text: 'Stories happen in order: first something happens, then next, and last.' },
        { t: 'example', title: 'Worked example', text: 'In \'The Three Little Pigs\', first the pigs build houses, next the wolf comes, and last the pigs are safe.' },
        { t: 'p', text: 'Ask questions about stories: Who is in it? Where does it happen? What happens at the end?' },
        { t: 'example', title: 'Worked example', text: 'Retell your favourite story to your family. Start with \'Once upon a time...\'.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Living things need certain things to stay alive and grow.' },
        { t: 'key', text: 'Plants need water, light, air, and soil. Animals need food, water, air, and shelter.' },
        { t: 'example', title: 'Worked example', text: 'Put a seed in soil, give it water and sun, and it will sprout and grow into a plant.' },
        { t: 'p', text: 'A plant has parts: roots, a stem, leaves, and sometimes a flower.' },
        { t: 'example', title: 'Worked example', text: 'Roots drink water from the soil. Leaves catch sunlight to help the plant make food.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We explore the world with our five senses. They help us learn about everything around us.' },
        { t: 'key', text: 'We see with our eyes, hear with our ears, smell with our nose, taste with our tongue, and touch with our skin.' },
        { t: 'example', title: 'Worked example', text: 'Look at a flower: you see its colour, you smell its scent, and you can gently touch its soft petals.' },
        { t: 'p', text: 'Different senses tell us different things about the same object.' },
        { t: 'example', title: 'Worked example', text: 'An apple: it looks red (seeing), tastes sweet (tasting), feels smooth (touching), and sounds crunchy when you bite it (hearing).' }
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
      ],
      lesson: [
        { t: 'p', text: 'There are four seasons in a year: spring, summer, fall, and winter.' },
        { t: 'key', text: 'Each season has its own weather, and we wear different clothes for each one.' },
        { t: 'example', title: 'Worked example', text: 'In winter it is cold and snowy, so we wear a coat, a hat, and boots. In summer it is hot, so we wear shorts.' },
        { t: 'p', text: 'In fall, leaves change colour and fall from the trees. In spring, flowers bloom and the weather warms up.' },
        { t: 'example', title: 'Worked example', text: 'Look outside and ask: what season is it now? What clothes are you wearing today?' }
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
      ],
      lesson: [
        { t: 'p', text: 'People build things using materials like wood, plastic, paper, and metal.' },
        { t: 'key', text: 'A good structure is strong and keeps its shape.' },
        { t: 'example', title: 'Worked example', text: 'A house is made strong with wood and brick. A bridge must be strong so cars can drive over it.' },
        { t: 'p', text: 'Test materials: can a sheet of paper hold up a book? Can a block of wood? Try it and see.' },
        { t: 'example', title: 'Worked example', text: 'Drop a piece of wood and a rock into water. The wood floats, and the rock sinks.' }
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
      ],
      lesson: [
        { t: 'p', text: 'The primary colours are red, blue, and yellow. Every other colour can be made from them.' },
        { t: 'key', text: 'Mixing two primary colours makes a brand new colour.' },
        { t: 'example', title: 'Worked example', text: 'Blue and yellow make green. Red and blue make purple. Red and yellow make orange.' },
        { t: 'p', text: 'Sort your toys by colour. Find one thing that is red, one that is blue, and one that is yellow.' },
        { t: 'example', title: 'Worked example', text: 'Look at a rainbow: red, orange, yellow, green, blue, and purple — all in a row!' }
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
      ],
      lesson: [
        { t: 'p', text: 'A family is a group of people who love and care for each other.' },
        { t: 'key', text: 'Families help each other by caring, sharing, and working together.' },
        { t: 'example', title: 'Worked example', text: 'Parents, brothers, sisters, and grandparents can all be part of your family.' },
        { t: 'p', text: 'Traditions are special things a family does again and again, like a holiday meal or a game night.' },
        { t: 'example', title: 'Worked example', text: 'Tell a friend about something your family does every year. That is one of your family traditions.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Your school is a community, and your town or city is a bigger community.' },
        { t: 'key', text: 'Helpers keep us safe and healthy: teachers, principals, doctors, nurses, and firefighters.' },
        { t: 'example', title: 'Worked example', text: 'A firefighter puts out fires. A doctor helps you when you are sick. A teacher helps you learn.' },
        { t: 'p', text: 'Rules keep everyone safe and happy, like walking in the hallway and taking turns.' },
        { t: 'example', title: 'Worked example', text: 'Think about a rule at your school. Why do we have it? Rules protect us and help us get along.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Your neighbourhood has many places: homes, a school, a park, and stores.' },
        { t: 'key', text: 'Stay safe near roads: stop, look both ways, and listen before you cross.' },
        { t: 'example', title: 'Worked example', text: 'You go to the store to buy food, to the park to play, and to school to learn.' },
        { t: 'p', text: 'Know your way around: which street is your home on? Where is the school? Where is the park?' },
        { t: 'example', title: 'Worked example', text: 'Draw a simple map of your neighbourhood with your home in the middle.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Needs are things we must have to live: food, water, shelter, and clothes.' },
        { t: 'key', text: 'Wants are things that are nice to have but not needed: toys, treats, and games.' },
        { t: 'example', title: 'Worked example', text: 'Water is a need because our bodies need it every day. A video game is a want because we can live without it.' },
        { t: 'p', text: 'Needs come first. Wants can wait.' },
        { t: 'example', title: 'Worked example', text: 'In winter, a warm coat is a need. A shiny new toy is a want — nice, but not necessary.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We all belong to groups: a family, a class, a team, or a club.' },
        { t: 'key', text: 'In a group, everyone is important and everyone has a job to do.' },
        { t: 'example', title: 'Worked example', text: 'In your class, everyone can help keep the room tidy, share supplies, and be kind.' },
        { t: 'p', text: 'Being kind helps everyone feel welcome and safe in the group.' },
        { t: 'example', title: 'Worked example', text: 'Say hello to a new classmate and invite them to play. That helps them feel they belong.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Numbers up to 100 are made of tens and ones.' },
        { t: 'key', text: 'In the number 47, the 4 means 4 tens, which is 40, and the 7 means 7 ones.' },
        { t: 'example', title: 'Worked example', text: '25 is 2 tens and 5 ones. What is 10 more than 25? Add one more ten: 35.' },
        { t: 'p', text: 'Skip counting helps us count fast: by 2s is 2, 4, 6, 8; by 5s is 5, 10, 15; by 10s is 10, 20, 30.' },
        { t: 'example', title: 'Worked example', text: 'Compare 63 and 58. Look at the tens first: 6 tens is more than 5 tens, so 63 is bigger.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We can add and subtract two-digit numbers, just like one-digit numbers, by working with tens and ones.' },
        { t: 'key', text: 'Regrouping means trading 10 ones for 1 ten (carrying), or trading 1 ten for 10 ones (borrowing).' },
        { t: 'example', title: 'Worked example', text: '34 + 20: 3 tens plus 2 tens is 5 tens, and 4 ones plus 0 ones is 4 ones. The answer is 54.' },
        { t: 'example', title: 'Worked example', text: '70 - 30: 7 tens take away 3 tens leaves 4 tens, so the answer is 40.' },
        { t: 'p', text: 'Always check your answer. Ask yourself: does this answer make sense?' }
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
      ],
      lesson: [
        { t: 'p', text: 'Multiplication is a fast way to add the same number again and again.' },
        { t: 'key', text: '3 × 4 means 3 groups of 4, which is 4 + 4 + 4 = 12.' },
        { t: 'example', title: 'Worked example', text: '2 groups of 3 apples make 6 apples, so 2 × 3 = 6.' },
        { t: 'p', text: 'Skip counting helps you multiply. To find 3 × 4, count by 4s three times: 4, 8, 12.' },
        { t: 'example', title: 'Worked example', text: 'What is 5 × 2? Count by 2s five times: 2, 4, 6, 8, 10. So 5 × 2 = 10.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A fraction is a part of a whole. We cut things into equal parts and name one part.' },
        { t: 'key', text: 'A half is 1 of 2 equal parts. A third is 1 of 3 equal parts. A quarter is 1 of 4 equal parts.' },
        { t: 'example', title: 'Worked example', text: 'Cut a pizza into 2 equal slices. Each slice is one half of the pizza.' },
        { t: 'p', text: 'Equal parts matter! The parts must be the same size, or they are not real fractions.' },
        { t: 'example', title: 'Worked example', text: 'Which is bigger, one half or one quarter? Think of pizza: one of 2 big slices is more than one of 4 small slices, so one half is bigger.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We measure length in centimetres (cm) for small things and metres (m) for big things.' },
        { t: 'key', text: 'Canadian money uses cents and dollars. 100 cents equals 1 dollar.' },
        { t: 'example', title: 'Worked example', text: 'A loonie is 1 dollar. A quarter is 25 cents. Two quarters equal 50 cents.' },
        { t: 'p', text: 'Compare lengths: a pencil is about 15 centimetres long, and a door is about 2 metres tall.' },
        { t: 'example', title: 'Worked example', text: 'Count four quarters: 25 + 25 + 25 + 25 = 100 cents, which is exactly 1 dollar.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Phonics is how letters make sounds, and how sounds build words.' },
        { t: 'key', text: 'The vowels are a, e, i, o, and u. Blends like \'sh\' and \'ch\' make special sounds.' },
        { t: 'example', title: 'Worked example', text: '\'Ship\' starts with the \'sh\' sound. \'Chair\' starts with the \'ch\' sound.' },
        { t: 'p', text: 'A long vowel says its own name. \'See\' has a long e sound, but \'bed\' has a short e sound.' },
        { t: 'example', title: 'Worked example', text: 'Practice spelling common words: friend, house, school, and because.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Fluency means reading smoothly, without stopping at every single word.' },
        { t: 'key', text: 'Pause at periods. Change your voice to match the story — loud for surprises, soft for quiet moments.' },
        { t: 'example', title: 'Worked example', text: 'Read \'The big dog ran fast.\' in one smooth breath, like you are telling it to a friend.' },
        { t: 'p', text: 'Practice reading aloud every day. Rereading the same page helps you get smoother each time.' },
        { t: 'example', title: 'Worked example', text: 'Read like you talk: with a clear, friendly voice that people enjoy listening to.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A sentence is a complete thought that makes sense on its own.' },
        { t: 'key', text: 'A sentence starts with a capital letter, ends with a period, and has a subject and a verb.' },
        { t: 'example', title: 'Worked example', text: 'In \'The dog barks.\', dog is the subject (who the sentence is about) and barks is the verb (what the dog does).' },
        { t: 'p', text: 'A group of words without a complete thought is called a fragment.' },
        { t: 'example', title: 'Worked example', text: '\'The dog\' is a fragment. Fix it by adding a verb: \'The dog sleeps.\' Now it is a sentence.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Stories are built from parts called story elements: characters, setting, problem, and solution.' },
        { t: 'key', text: 'The setting is where and when the story happens.' },
        { t: 'example', title: 'Worked example', text: 'In a story about a castle long ago, the setting is the castle, in the past.' },
        { t: 'p', text: 'The problem is what goes wrong in the story, and the solution is how it gets fixed.' },
        { t: 'example', title: 'Worked example', text: 'If a bunny loses its carrot (the problem), it finds a friend who shares (the solution).' }
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
      ],
      lesson: [
        { t: 'p', text: 'Good listeners listen for the main idea — what the speaker is mostly talking about.' },
        { t: 'key', text: 'Show you are listening by looking at the speaker and staying quiet until they finish.' },
        { t: 'example', title: 'Worked example', text: 'If a friend tells about a trip to the zoo, the main idea is the zoo trip, even if they mention many animals.' },
        { t: 'p', text: 'Speak in full sentences so others can understand your ideas clearly.' },
        { t: 'example', title: 'Worked example', text: 'Instead of saying \'ball\', say \'I want to play with the ball.\' Full sentences share complete ideas.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Some things float in water, and some things sink. Let us find out why.' },
        { t: 'key', text: 'Buoyancy is what keeps things afloat. Shape matters: a wide, hollow boat floats even if its material is heavy.' },
        { t: 'example', title: 'Worked example', text: 'A rock sinks, but a wooden stick floats. A ball of clay sinks, but the same clay shaped like a bowl floats.' },
        { t: 'p', text: 'Test objects around you: does a cork float? Does a nail sink? Try them in a bowl of water.' },
        { t: 'example', title: 'Worked example', text: 'Boats are built with hollow parts filled with air. The air helps the whole boat float.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A magnet pulls on things made of iron, like paper clips and nails.' },
        { t: 'key', text: 'Magnets have two poles: north and south. Same poles push apart (repel). Different poles pull together (attract).' },
        { t: 'example', title: 'Worked example', text: 'Push two north poles together and they push apart. Bring a north pole near a south pole and they snap together.' },
        { t: 'p', text: 'Magnets do not attract wood, paper, or plastic.' },
        { t: 'example', title: 'Worked example', text: 'Test a paper clip, a pencil, and a coin with a magnet. Which one sticks?' }
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
      ],
      lesson: [
        { t: 'p', text: 'We measure how hot or cold something is with a thermometer.' },
        { t: 'key', text: 'Heat moves from hot things to cold things. Insulation slows that movement down.' },
        { t: 'example', title: 'Worked example', text: 'A winter jacket insulates: it traps warm air close to your body so you stay warm outside.' },
        { t: 'p', text: 'Ice melts when it gets warmer. Water freezes into ice when it gets colder.' },
        { t: 'example', title: 'Worked example', text: 'A thermos keeps hot chocolate hot and cold drinks cold, because it insulates both ways.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Small animals live all around us: ants, bees, butterflies, worms, and spiders.' },
        { t: 'key', text: 'An insect has 6 legs and 3 body parts. A spider has 8 legs, so a spider is not an insect.' },
        { t: 'example', title: 'Worked example', text: 'A butterfly has 6 legs and flies. A worm has no legs at all and crawls in the soil.' },
        { t: 'p', text: 'These small animals are important. Bees carry pollen from flower to flower, which helps plants make seeds.' },
        { t: 'example', title: 'Worked example', text: 'Watch an ant carry a crumb back to its nest. Ants work together to feed their colony.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Canada is a very big country, and different communities live in different parts of it.' },
        { t: 'key', text: 'Acadian communities live in eastern Canada, like Nova Scotia. Inuit communities live in the North. Prairie communities live on the flat plains.' },
        { t: 'example', title: 'Worked example', text: 'Prairie farmers grow wheat on flat land. Inuit communities build strong homes for very cold winters.' },
        { t: 'p', text: 'Each community adapts to its land and climate.' },
        { t: 'example', title: 'Worked example', text: 'Near the ocean, Acadians fish for a living. On the plains, people farm the land.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Land and water shape where people choose to live.' },
        { t: 'key', text: 'Many towns grew near rivers, lakes, or coasts, because water gives people food, travel, and drinking water.' },
        { t: 'example', title: 'Worked example', text: 'A town on a lake has boats and fishing. A town in the mountains has hiking and skiing.' },
        { t: 'p', text: 'Maps show where places are. Words like north, south, east, and west help us read maps.' },
        { t: 'example', title: 'Worked example', text: 'Find your city on a map. Is it near water? What landforms are around it?' }
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
      ],
      lesson: [
        { t: 'p', text: 'Life long ago was very different from life today.' },
        { t: 'key', text: 'Before cars, people travelled by horse. Before electricity, people used candles and oil lamps.' },
        { t: 'example', title: 'Worked example', text: 'Long ago, washing clothes took hours of scrubbing by hand. Today, machines do it in minutes.' },
        { t: 'p', text: 'Some things stay the same across time: families, celebrations, and traditions.' },
        { t: 'example', title: 'Worked example', text: 'People gathered for festivals long ago, and we still gather for festivals today.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Climate is the usual weather of a place over a long time, not just one day.' },
        { t: 'key', text: 'Land can be flat, hilly, or mountainous, and it shapes how people live and work.' },
        { t: 'example', title: 'Worked example', text: 'People who live near the sea often fish. People who live in the mountains may ski or hike.' },
        { t: 'p', text: 'People adapt to their climate: warm coats in cold places, light clothes in hot places.' },
        { t: 'example', title: 'Worked example', text: 'A town in a desert saves water carefully. A town with lots of rain keeps umbrellas handy.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Numbers up to 1000 have hundreds, tens, and ones.' },
        { t: 'key', text: 'In 365, the 3 means 3 hundreds (300), the 6 means 6 tens (60), and the 5 means 5 ones.' },
        { t: 'example', title: 'Worked example', text: '200 + 30 + 5 = 235. Two hundreds, three tens, and five ones.' },
        { t: 'p', text: 'To compare numbers, look at the hundreds first, then the tens, then the ones.' },
        { t: 'example', title: 'Worked example', text: '512 is bigger than 498 because 5 hundreds is more than 4 hundreds. Rounding: 470 rounds to 500 at the nearest hundred.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We can add and subtract three-digit numbers using the same regrouping rules as smaller numbers.' },
        { t: 'key', text: 'Regrouping means trading: 10 ones for 1 ten, or 10 tens for 1 hundred.' },
        { t: 'example', title: 'Worked example', text: '250 + 350: 2 hundreds plus 3 hundreds is 5 hundreds (500), and 50 + 50 is 100. So 500 + 100 = 600.' },
        { t: 'example', title: 'Worked example', text: '800 - 250: think of 80 tens minus 25 tens, which is 55 tens, so the answer is 550.' },
        { t: 'p', text: 'Estimate first, then check your answer. If your estimate and answer are far apart, look again.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Multiplication is repeated addition. Division is sharing equally.' },
        { t: 'key', text: '6 × 4 = 24 means 6 groups of 4. 12 ÷ 3 = 4 means 12 things shared into 3 equal groups of 4.' },
        { t: 'example', title: 'Worked example', text: 'Multiplication and division are linked. If 5 × 6 = 30, then 30 ÷ 6 = 5.' },
        { t: 'p', text: 'Know your times tables up to 10. Practice a little every day, like a sport.' },
        { t: 'example', title: 'Worked example', text: 'What is 24 ÷ 4? Think: 4 × 6 = 24, so 24 ÷ 4 = 6.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Fractions name parts of a whole: 1/2, 1/3, 1/4, and more.' },
        { t: 'key', text: '2/4 is the same amount as 1/2 — both are half of the whole. Half of 10 is 5.' },
        { t: 'example', title: 'Worked example', text: 'If 4 friends share 12 cookies equally, each friend gets 3 cookies. That is 12 ÷ 4 = 3, or one quarter of the cookies.' },
        { t: 'p', text: 'When comparing fractions of the same whole, the bigger the denominator, the smaller each piece.' },
        { t: 'example', title: 'Worked example', text: 'A chocolate bar cut into 2 pieces gives 1/2 pieces. Cut into 4 pieces gives 1/4 pieces. One half is bigger than one quarter.' }
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
      ],
      lesson: [
        { t: 'p', text: 'We measure length in centimetres and metres, and mass in grams (g) and kilograms (kg).' },
        { t: 'key', text: '1000 grams equals 1 kilogram.' },
        { t: 'example', title: 'Worked example', text: 'A paper clip weighs about 1 gram. A bag of sugar weighs 1 kilogram.' },
        { t: 'p', text: 'Name 2D shapes by their sides: a triangle has 3, a square 4, a pentagon 5, a hexagon 6.' },
        { t: 'example', title: 'Worked example', text: 'A stop sign is an octagon, because it has 8 sides.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Comprehension means understanding what you read, not just saying the words.' },
        { t: 'key', text: 'Ask who, what, where, when, and why to dig into a text.' },
        { t: 'example', title: 'Worked example', text: '\'The boy walked to the park on Saturday.\' Who? The boy. Where? The park. When? On Saturday.' },
        { t: 'p', text: 'Predicting means using clues to guess what happens next in a story.' },
        { t: 'example', title: 'Worked example', text: 'If a story says storm clouds are gathering, you can predict it will rain soon. The main idea is the big point the whole text makes.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A bigger word bank makes reading and writing easier and more fun.' },
        { t: 'key', text: 'Use a dictionary to find what a word means and how to spell it.' },
        { t: 'example', title: 'Worked example', text: 'Look up the word \'brave\' in a dictionary: it means showing courage, not giving in to fear.' },
        { t: 'p', text: 'Context clues are the words around an unknown word that hint at its meaning.' },
        { t: 'example', title: 'Worked example', text: '\'The puppy was tiny — smaller than a loaf of bread.\' The clue \'smaller than a loaf of bread\' tells us tiny means very small. Learn a few new words each week and use them in sentences.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A paragraph is a group of sentences that all talk about one main idea.' },
        { t: 'key', text: 'Start with a topic sentence, add 2 or 3 detail sentences, and finish with a closing sentence.' },
        { t: 'example', title: 'Worked example', text: 'Topic: \'My dog is the best pet.\' Details: he fetches the ball, his fur is soft, and he makes us laugh. Closing: \'That is why I love him.\'' },
        { t: 'p', text: 'One paragraph, one main idea. If you change the idea, start a new paragraph.' },
        { t: 'example', title: 'Worked example', text: 'Plan before you write: decide your topic, list your details, then write your closing.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A noun names a person, place, or thing: teacher, school, ball.' },
        { t: 'key', text: 'A verb shows action: run, jump, read. An adjective describes a noun: blue, tall, happy.' },
        { t: 'example', title: 'Worked example', text: 'In \'The tall boy jumps.\', tall is an adjective, boy is a noun, and jumps is a verb.' },
        { t: 'p', text: 'Find the verb by asking: what is happening in this sentence?' },
        { t: 'example', title: 'Worked example', text: '\'The cat sleeps.\' What does the cat do? It sleeps — so sleeps is the verb.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Sharing ideas clearly helps other people understand what you mean.' },
        { t: 'key', text: 'Give reasons for your opinion: \'I like swimming because it is fun and healthy.\'' },
        { t: 'example', title: 'Worked example', text: '\'I think recess should be longer because we play better when we rest.\' The reason makes the opinion stronger.' },
        { t: 'p', text: 'Listen politely: wait for your turn, look at the speaker, and think about what they say.' },
        { t: 'example', title: 'Worked example', text: 'If you disagree, say it kindly: \'I see it differently, because...\' Respectful disagreement keeps conversations friendly.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Rocks are all around us — under our feet, in hills, and on mountains.' },
        { t: 'key', text: 'Rocks are made of minerals. There are three main types of rock.' },
        { t: 'example', title: 'Worked example', text: 'Granite is a very hard rock used for buildings and counters. Sandstone is made of tiny grains of sand pressed together.' },
        { t: 'p', text: 'People use rocks in many ways, from building roads to making homes.' },
        { t: 'example', title: 'Worked example', text: 'Look at a sidewalk: concrete is made with crushed rock mixed with cement and water.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Builders and engineers choose materials that fit the job.' },
        { t: 'key', text: 'A strong structure has a wide, stable base.' },
        { t: 'example', title: 'Worked example', text: 'A bridge needs a strong material like steel or concrete. A tent needs light, bendy material so it can fold up.' },
        { t: 'p', text: 'Test materials: bend them, press them, drop them. See which ones hold up.' },
        { t: 'example', title: 'Worked example', text: 'Aluminum is strong and light, which is why it is used to build airplanes.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Sound is made by vibrations — things moving back and forth very fast.' },
        { t: 'key', text: 'Sound travels through the air to your ears. Pitch is how high or low a sound is.' },
        { t: 'example', title: 'Worked example', text: 'Pluck a rubber band: it vibrates and makes a sound. A whistle makes a high-pitched sound; thunder makes a low-pitched sound.' },
        { t: 'p', text: 'Loud or soft is called volume. High or low is called pitch. They are different things.' },
        { t: 'example', title: 'Worked example', text: 'When you speak, the vocal cords in your throat vibrate, and that vibration becomes your voice.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Living things grow and change through stages. The whole journey is called a life cycle.' },
        { t: 'key', text: 'A butterfly life cycle: egg, caterpillar, chrysalis, then butterfly.' },
        { t: 'example', title: 'Worked example', text: 'A frog life cycle: egg, tadpole, froglet, then adult frog.' },
        { t: 'p', text: 'Some life cycles are short, like a fly\'s, and some are very long, like a tree\'s.' },
        { t: 'example', title: 'Worked example', text: 'A plant life cycle: seed, sprout, plant, flower, and then new seeds to start again.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A force is a push or a pull. Forces can start things moving, stop them, or change their direction.' },
        { t: 'key', text: 'Magnets push and pull: like poles repel each other, and opposite poles attract.' },
        { t: 'example', title: 'Worked example', text: 'Rub a balloon on your hair: static electricity makes your hair stand up, and the balloon can stick to a wall.' },
        { t: 'p', text: 'Kicking a ball is a push. Catching a ball is a pull. Both are forces.' },
        { t: 'example', title: 'Worked example', text: 'Bring two magnets close. Same poles push apart, opposite poles snap together — you can feel the force in your hands.' }
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
      ],
      lesson: [
        { t: 'p', text: 'A global citizen cares about the whole world, not just their own town or country.' },
        { t: 'key', text: 'We all share one planet — the same air, water, and land.' },
        { t: 'example', title: 'Worked example', text: 'Recycling paper, bottles, and cans helps protect the planet we share.' },
        { t: 'p', text: 'Small actions add up: turn off lights, save water, plant a tree, and be kind to others.' },
        { t: 'example', title: 'Worked example', text: 'Respecting other cultures means learning about them with an open mind, instead of judging.' }
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
      ],
      lesson: [
        { t: 'p', text: 'People around the world live in communities like ours — and in some ways differently too.' },
        { t: 'key', text: 'India, Tunisia, Ukraine, and Peru each have their own culture, food, clothing, and traditions.' },
        { t: 'example', title: 'Worked example', text: 'In Peru, the high Andes mountains shape how people live. In Ukraine, very cold winters shape homes and clothing.' },
        { t: 'p', text: 'Compare daily life: school, meals, games, and celebrations.' },
        { t: 'example', title: 'Worked example', text: 'Learning about other countries helps us understand our world and the people in it.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Quality of life is how well people are able to live.' },
        { t: 'key', text: 'Basic needs are food, water, shelter, and health care. Education and safety matter too.' },
        { t: 'example', title: 'Worked example', text: 'A child who is healthy, safe, and able to go to school has a good quality of life.' },
        { t: 'p', text: 'Quality of life is about more than money. Friends, family, and nature also make life good.' },
        { t: 'example', title: 'Worked example', text: 'Clean water and a safe home improve quality of life for everyone in a community.' }
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
      ],
      lesson: [
        { t: 'p', text: 'Goods are things you can touch and hold: books, apples, and chairs.' },
        { t: 'key', text: 'Services are jobs people do for you: a haircut, a bus ride, or a doctor\'s care.' },
        { t: 'example', title: 'Worked example', text: 'Buying a loaf of bread is buying a good. The baker baking the bread is providing a service.' },
        { t: 'p', text: 'People who make or sell goods and services are called producers.' },
        { t: 'example', title: 'Worked example', text: 'A farmer grows apples (a good). A driver delivers the apples to the store (a service).' }
      ]
    }
  ]
};
