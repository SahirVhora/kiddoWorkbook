import type { Question, Subject } from "../types";
import { YEAR_5_CORE_EXPANSION } from "./year5CoreExpansion";
import { YEAR_5_MORE_QUESTIONS } from "./year5MoreQuestions";
import { YEAR_5_QUESTION_EXPANSION } from "./year5QuestionExpansion";

export const BASE_QUESTION_BANK: Record<Subject, Record<string, Question[]>> = {
  Mathematics: {
    "Number Bonds": [
      {
        id: "m1",
        text: "Which pair of numbers makes 10?",
        options: ["3 and 6", "4 and 6", "5 and 4", "2 and 7"],
        answer: "4 and 6",
        explanation: "4 + 6 = 10",
        topicArea: "Addition",
      },
      {
        id: "m2",
        text: "What number added to 7 makes 20?",
        answer: "13",
        explanation: "7 + 13 = 20",
        topicArea: "Addition",
      },
      {
        id: "m3",
        text: "Find the missing number: 15 + ? = 20",
        answer: "5",
        explanation: "15 + 5 = 20",
        topicArea: "Addition",
      },
      {
        id: "m26",
        text: "What is the number bond to 10 for 7?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "7 + 3 = 10.",
        topicArea: "Number Bonds",
      },
      {
        id: "m27",
        text: "Which pair makes 20?",
        options: ["12 and 8", "15 and 4", "10 and 5", "18 and 1"],
        answer: "12 and 8",
        explanation: "12 + 8 = 20.",
        topicArea: "Number Bonds",
      },
    ],
    "Place Value": [
      {
        id: "m4",
        text: "In the number 42, what does the 4 represent?",
        options: ["4 ones", "4 tens", "4 hundreds", "4 units"],
        answer: "4 tens",
        explanation: "The 4 is in the tens place, so it represents 40.",
        topicArea: "Place Value",
      },
      {
        id: "m5",
        text: "What is the value of the digit 7 in 753?",
        options: ["7", "70", "700", "7000"],
        answer: "700",
        explanation: "The 7 is in the hundreds place.",
        topicArea: "Place Value",
      },
    ],
    Fractions: [
      {
        id: "m6",
        text: "What is half of 20?",
        answer: "10",
        explanation: "20 divided by 2 is 10.",
        topicArea: "Fractions",
      },
      {
        id: "m7",
        text: "Which fraction is the same as one quarter?",
        options: ["1/2", "1/3", "1/4", "2/4"],
        answer: "1/4",
        explanation: "One quarter is written as 1/4.",
        topicArea: "Fractions",
      },
    ],
    Money: [
      {
        id: "m8",
        text: "How many pennies are in £1?",
        options: ["10p", "50p", "100p", "200p"],
        answer: "100p",
        explanation: "There are 100 pence in one pound.",
        topicArea: "Money",
      },
      {
        id: "m9",
        text: "If you have two 50p coins, how much money do you have?",
        answer: "£1",
        explanation: "50p + 50p = 100p, which is £1.",
        topicArea: "Money",
      },
      {
        id: "m30",
        text: "How many pence are in £1?",
        options: ["10p", "50p", "100p", "200p"],
        answer: "100p",
        explanation: "There are 100 pennies in one pound.",
        topicArea: "Money",
      },
    ],
    "Time Basics": [
      {
        id: "m10",
        text: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation:
          "There are 7 days in a week: Mon, Tue, Wed, Thu, Fri, Sat, Sun.",
        topicArea: "Time",
      },
      {
        id: "m11",
        text: "Which month comes after January?",
        options: ["March", "February", "April", "December"],
        answer: "February",
        explanation: "February is the second month of the year.",
        topicArea: "Time",
      },
      {
        id: "m31",
        text: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "There are 7 days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.",
        topicArea: "Time",
      },
      {
        id: "m32",
        text: "Which month comes after January?",
        options: ["March", "February", "April", "December"],
        answer: "February",
        explanation: "February is the second month of the year.",
        topicArea: "Time",
      },
    ],
    "Negative Numbers": [
      {
        id: "m12",
        text: "What is 5 minus 10?",
        options: ["5", "-5", "0", "-10"],
        answer: "-5",
        explanation:
          "When you take away more than you have, you go below zero into negative numbers.",
        topicArea: "Negative Numbers",
      },
      {
        id: "m13",
        text: "Which number is smaller: -2 or -5?",
        options: ["-2", "-5", "0", "They are the same"],
        answer: "-5",
        explanation: "-5 is further below zero than -2, so it is smaller.",
        topicArea: "Negative Numbers",
      },
    ],
    "Addition & Subtraction": [
      {
        id: "m14",
        text: "What is 12 + 7?",
        options: ["18", "19", "20", "21"],
        answer: "19",
        explanation: "12 plus 7 equals 19.",
        topicArea: "Arithmetic",
      },
      {
        id: "m15",
        text: "What is 20 - 8?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "20 take away 8 leaves 12.",
        topicArea: "Arithmetic",
      },
    ],
    "Multiplication & Division": [
      {
        id: "m16",
        text: "What is 5 x 4?",
        options: ["15", "20", "25", "30"],
        answer: "20",
        explanation: "5 groups of 4 make 20.",
        topicArea: "Arithmetic",
      },
      {
        id: "m17",
        text: "What is 10 ÷ 2?",
        options: ["2", "4", "5", "6"],
        answer: "5",
        explanation: "10 shared between 2 is 5.",
        topicArea: "Arithmetic",
      },
    ],
    Algebra: [
      {
        id: "m18",
        text: "If x + 5 = 12, what is x?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "12 - 5 = 7, so x must be 7.",
        topicArea: "Algebra",
      },
      {
        id: "m19",
        text: "What is the value of 2y if y = 4?",
        options: ["6", "8", "10", "12"],
        answer: "8",
        explanation: "2 times 4 is 8.",
        topicArea: "Algebra",
      },
    ],
    Decimals: [
      {
        id: "m20",
        text: "What is 0.5 as a fraction?",
        options: ["1/4", "1/2", "1/10", "5/100"],
        answer: "1/2",
        explanation: "0.5 is five tenths, which simplifies to one half.",
        topicArea: "Decimals",
      },
      {
        id: "m21",
        text: "Which is larger: 0.7 or 0.07?",
        options: ["0.7", "0.07", "They are equal"],
        answer: "0.7",
        explanation:
          "0.7 is seven tenths, while 0.07 is only seven hundredths.",
        topicArea: "Decimals",
      },
    ],
    "Counting to 20": [
      {
        id: "m22",
        text: "Which number comes after 15?",
        options: ["14", "16", "17", "18"],
        answer: "16",
        explanation: "16 is one more than 15.",
        topicArea: "Counting",
      },
      {
        id: "m23",
        text: "How do you write the number twelve?",
        options: ["10", "11", "12", "21"],
        answer: "12",
        explanation: "Twelve is written as 12.",
        topicArea: "Counting",
      },
    ],
    "2D & 3D Shapes": [
      {
        id: "m24",
        text: "How many sides does a triangle have?",
        options: ["3", "4", "5", "6"],
        answer: "3",
        explanation: "A triangle always has 3 sides.",
        topicArea: "Shapes",
      },
      {
        id: "m25",
        text: "Which of these is a 3D shape?",
        options: ["Square", "Circle", "Cube", "Triangle"],
        answer: "Cube",
        explanation: "A cube is a 3D shape, like a dice.",
        topicArea: "Shapes",
      },
    ],
    Measurement: [
      {
        id: "m28",
        text: "Which unit would you use to measure the length of a pencil?",
        options: ["Kilograms", "Centimetres", "Litres", "Hours"],
        answer: "Centimetres",
        explanation: "We use centimetres (cm) for short lengths.",
        topicArea: "Measurement",
      },
      {
        id: "m29",
        text: "How many grams are in 1 kilogram?",
        options: ["10", "100", "1000", "10000"],
        answer: "1000",
        explanation: "There are 1000g in 1kg.",
        topicArea: "Measurement",
      },
    ],
    Percentages: [
      {
        id: "m33",
        text: "What is 50% of 80?",
        options: ["20", "40", "60", "80"],
        answer: "40",
        explanation: "50% is half of a number. Half of 80 is 40.",
        topicArea: "Percentages",
      },
      {
        id: "m34",
        text: "What is 25% as a fraction?",
        options: ["1/2", "1/4", "1/10", "3/4"],
        answer: "1/4",
        explanation: "25% is one quarter.",
        topicArea: "Percentages",
      },
    ],
    "Area & Perimeter": [
      {
        id: "m35",
        text: "How do you find the area of a rectangle?",
        options: [
          "Add all sides",
          "Length × Width",
          "Length + Width",
          "Double the length",
        ],
        answer: "Length × Width",
        explanation:
          "Area is calculated by multiplying the length by the width.",
        topicArea: "Measurement",
      },
    ],
    Statistics: [
      {
        id: "m36",
        text: "What is a tally chart used for?",
        options: [
          "To measure weight",
          "To count and record data quickly",
          "To draw a picture",
          "To tell the time",
        ],
        answer: "To count and record data quickly",
        explanation: "Tally charts use marks to keep track of counts.",
        topicArea: "Statistics",
      },
    ],
    "Position & Direction": [
      {
        id: "m37",
        text: "Which of these is a quarter turn?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        answer: "90 degrees",
        explanation: "A quarter turn is a 90-degree rotation.",
        topicArea: "Geometry",
      },
    ],
    "Money Calculations": [
      {
        id: "m38",
        text: "If an item costs 75p and you pay with a £1 coin, how much change do you get?",
        options: ["15p", "25p", "35p", "45p"],
        answer: "25p",
        explanation: "100p - 75p = 25p.",
        topicArea: "Money",
      },
    ],
    "Time: Quarter Past/To": [
      {
        id: "m39",
        text: "If the big hand is on the 9, what time is it?",
        options: ["Quarter past", "Quarter to", "Half past", "O'clock"],
        answer: "Quarter to",
        explanation:
          "When the minute hand is on 9, it is quarter to the next hour.",
        topicArea: "Time",
      },
    ],
    "Place Value to 1000": [
      {
        id: "m40",
        text: "What is the value of the 5 in 582?",
        options: ["5", "50", "500", "5000"],
        answer: "500",
        explanation: "The 5 is in the hundreds place.",
        topicArea: "Place Value",
      },
    ],
    "Column Addition": [
      {
        id: "m41",
        text: "When using column addition, where do you start adding?",
        options: ["The hundreds", "The tens", "The ones (units)", "Anywhere"],
        answer: "The ones (units)",
        explanation:
          "We always start adding from the right-hand side (the ones).",
        topicArea: "Arithmetic",
      },
    ],
    "Mass & Capacity": [
      {
        id: "m42",
        text: "Which unit is used to measure the amount of liquid in a bottle?",
        options: ["Grams", "Millilitres", "Metres", "Seconds"],
        answer: "Millilitres",
        explanation: "Millilitres (ml) and Litres (l) are units of capacity.",
        topicArea: "Measurement",
      },
    ],
    Perimeter: [
      {
        id: "m43",
        text: "How do you find the perimeter of a square with 5cm sides?",
        options: ["5 + 5", "5 x 5", "5 + 5 + 5 + 5", "5 x 2"],
        answer: "5 + 5 + 5 + 5",
        explanation:
          "Perimeter is the total distance around the edge. 5+5+5+5 = 20cm.",
        topicArea: "Measurement",
      },
    ],
    "Bar Charts": [
      {
        id: "m44",
        text: "In a bar chart, what does the height of the bar represent?",
        options: [
          "The color",
          "The frequency (how many)",
          "The name",
          "The date",
        ],
        answer: "The frequency (how many)",
        explanation: "The taller the bar, the higher the value it represents.",
        topicArea: "Statistics",
      },
    ],
    "Roman Numerals": [
      {
        id: "m45",
        text: 'What number does the Roman Numeral "X" represent?',
        options: ["1", "5", "10", "50"],
        answer: "10",
        explanation: "X is the Roman Numeral for 10.",
        topicArea: "Number",
      },
    ],
    "Line Symmetry": [
      {
        id: "m46",
        text: "How many lines of symmetry does a square have?",
        options: ["1", "2", "4", "8"],
        answer: "4",
        explanation:
          "A square has 4 lines of symmetry: vertical, horizontal, and two diagonals.",
        topicArea: "Geometry",
      },
    ],
    "24-Hour Clock": [
      {
        id: "m47",
        text: "What is 3:00 PM in the 24-hour clock?",
        options: ["03:00", "13:00", "15:00", "18:00"],
        answer: "15:00",
        explanation:
          "To get the 24-hour time for PM, add 12 to the hour. 3 + 12 = 15.",
        topicArea: "Time",
      },
    ],
    "Prime Numbers": [
      {
        id: "m48",
        text: "Which of these is a prime number?",
        options: ["4", "6", "7", "9"],
        answer: "7",
        explanation: "A prime number only has two factors: 1 and itself.",
        topicArea: "Number",
      },
    ],
    Volume: [
      {
        id: "m49",
        text: "How do you calculate the volume of a cube?",
        options: [
          "Side + Side + Side",
          "Side × Side × Side",
          "Side × 4",
          "Side × 6",
        ],
        answer: "Side × Side × Side",
        explanation:
          "Volume is length × width × height. For a cube, all are the same.",
        topicArea: "Measurement",
      },
    ],
    Rounding: [
      {
        id: "m50",
        text: "What is 47 rounded to the nearest 10?",
        options: ["40", "45", "50", "100"],
        answer: "50",
        explanation: "Since 7 is 5 or more, we round up to 50.",
        topicArea: "Number",
      },
    ],
    "Multiplying Decimals": [
      {
        id: "m51",
        text: "What is 0.5 × 10?",
        options: ["0.05", "5", "50", "500"],
        answer: "5",
        explanation:
          "Multiplying by 10 moves the decimal point one place to the right.",
        topicArea: "Arithmetic",
      },
    ],
    "Square & Cube Numbers": [
      {
        id: "m52",
        text: "What is 5 squared (5²)?",
        options: ["10", "15", "20", "25"],
        answer: "25",
        explanation: "5 squared means 5 × 5, which is 25.",
        topicArea: "Number",
      },
    ],
    "Ratio & Proportion": [
      {
        id: "m53",
        text: "If the ratio of red to blue balls is 1:2, and there are 3 red balls, how many blue balls are there?",
        options: ["3", "4", "5", "6"],
        answer: "6",
        explanation: "For every 1 red, there are 2 blue. 3 × 2 = 6.",
        topicArea: "Ratio",
      },
    ],
    "Long Division": [
      {
        id: "m54",
        text: "What is the first step in long division?",
        options: ["Subtract", "Multiply", "Divide", "Bring down"],
        answer: "Divide",
        explanation:
          "The standard steps are Divide, Multiply, Subtract, Bring down (DMSB).",
        topicArea: "Arithmetic",
      },
    ],
    "Order of Operations": [
      {
        id: "m55",
        text: "In the calculation 2 + 3 × 4, which part do you do first?",
        options: ["2 + 3", "3 × 4", "It doesn't matter", "2 + 4"],
        answer: "3 × 4",
        explanation:
          "According to BODMAS/BIDMAS, multiplication comes before addition.",
        topicArea: "Arithmetic",
      },
    ],
    Geometry: [
      {
        id: "m56",
        text: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: "180°",
        explanation:
          "The three interior angles of any triangle always add up to 180 degrees.",
        topicArea: "Geometry",
      },
    ],
    "Area of Triangles": [
      {
        id: "m57",
        text: "How do you find the area of a triangle?",
        options: [
          "Base × Height",
          "(Base × Height) ÷ 2",
          "Base + Height",
          "Side × 3",
        ],
        answer: "(Base × Height) ÷ 2",
        explanation:
          "The area of a triangle is half the area of a rectangle with the same base and height.",
        topicArea: "Measurement",
      },
    ],
    "Mean Average": [
      {
        id: "m58",
        text: "How do you find the mean of 2, 4, and 6?",
        options: [
          "Pick the middle number",
          "Add them and divide by 3",
          "Subtract the smallest from the largest",
          "Multiply them together",
        ],
        answer: "Add them and divide by 3",
        explanation:
          "To find the mean, add all numbers (12) and divide by the count (3). 12 ÷ 3 = 4.",
        topicArea: "Statistics",
      },
    ],
  },
  English: {
    Phonics: [
      {
        id: "e1",
        text: 'Which word has the "sh" sound?',
        options: ["Cat", "Fish", "Dog", "Bird"],
        answer: "Fish",
        explanation: 'Fish ends with the "sh" sound.',
        topicArea: "Phonics",
      },
      {
        id: "e2",
        text: 'Find the word with the "ch" sound.',
        options: ["Chair", "Table", "Lamp", "Door"],
        answer: "Chair",
        explanation: 'Chair starts with the "ch" sound.',
        topicArea: "Phonics",
      },
    ],
    Punctuation: [
      {
        id: "e3",
        text: "Which sentence ends with a question mark?",
        options: [
          "I like cake.",
          "Where is the dog?",
          "Stop that!",
          "The sun is hot.",
        ],
        answer: "Where is the dog?",
        explanation: "Questions end with a question mark.",
        topicArea: "Punctuation",
      },
      {
        id: "e4",
        text: 'Where should the capital letter go in: "my name is sam."',
        options: ["my and sam", "name", "is", "none"],
        answer: "my and sam",
        explanation: "Sentences start with a capital, and names need them too.",
        topicArea: "Punctuation",
      },
    ],
    Grammar: [
      {
        id: "e5",
        text: "Which of these is a verb (doing word)?",
        options: ["Apple", "Run", "Happy", "Table"],
        answer: "Run",
        explanation: "Run is an action, so it is a verb.",
        topicArea: "Grammar",
      },
      {
        id: "e6",
        text: "Which word is an adjective (describing word)?",
        options: ["Blue", "Jump", "Box", "Quickly"],
        answer: "Blue",
        explanation: "Blue describes what something looks like.",
        topicArea: "Grammar",
      },
    ],
    "Sentence Structure": [
      {
        id: "e7",
        text: "Which word is a conjunction (joining word)?",
        options: ["And", "Big", "Slowly", "The"],
        answer: "And",
        explanation: '"And" is used to join two parts of a sentence together.',
        topicArea: "Sentences",
      },
      {
        id: "e8",
        text: "Which of these is a full sentence?",
        options: [
          "The big dog.",
          "Running fast.",
          "The cat sat on the mat.",
          "Under the table.",
        ],
        answer: "The cat sat on the mat.",
        explanation: "A full sentence needs a subject and a verb.",
        topicArea: "Sentences",
      },
    ],
    "Capital Letters": [
      {
        id: "e10",
        text: "Which word should always start with a capital letter?",
        options: ["apple", "london", "happy", "run"],
        answer: "london",
        explanation:
          "Names of places (proper nouns) always need a capital letter.",
        topicArea: "Punctuation",
      },
    ],
    "Spelling Rules": [
      {
        id: "e11",
        text: "Which is the correct spelling?",
        options: ["Happyly", "Happily", "Happilye", "Happy-ly"],
        answer: "Happily",
        explanation:
          'When a word ends in "y", we often change it to "i" before adding "ly".',
        topicArea: "Spelling",
      },
    ],
    Vocabulary: [
      {
        id: "e12",
        text: 'What is a synonym for "big"?',
        options: ["Small", "Large", "Tiny", "Short"],
        answer: "Large",
        explanation: "Synonyms are words with the same meaning.",
        topicArea: "Vocabulary",
      },
      {
        id: "e13",
        text: 'What is an antonym for "hot"?',
        options: ["Warm", "Cold", "Burning", "Sunny"],
        answer: "Cold",
        explanation: "Antonyms are words with opposite meanings.",
        topicArea: "Vocabulary",
      },
    ],
    "Common Exception Words": [
      {
        id: "e14",
        text: 'Which of these is a "tricky" word that doesn\'t follow normal rules?',
        options: ["Cat", "The", "Dog", "Sit"],
        answer: "The",
        explanation:
          '"The" is a common exception word because the "e" doesn\'t make its usual sound.',
        topicArea: "Spelling",
      },
    ],
    "Sentence Writing": [
      {
        id: "e15",
        text: "What does every sentence need at the end?",
        options: ["A comma", "A full stop", "A capital letter", "A space"],
        answer: "A full stop",
        explanation: "A full stop shows that a sentence has finished.",
        topicArea: "Writing",
      },
    ],
    "Reading Comprehension": [
      {
        id: "e16",
        text: 'If a story says "The red cat sat on the mat", what color was the cat?',
        options: ["Black", "White", "Red", "Blue"],
        answer: "Red",
        explanation: "The sentence explicitly states the cat was red.",
        topicArea: "Reading",
      },
    ],
    "Rhyming Words": [
      {
        id: "e17",
        text: 'Which word rhymes with "cat"?',
        options: ["Dog", "Hat", "Sun", "Big"],
        answer: "Hat",
        explanation: "Cat and Hat have the same ending sound.",
        topicArea: "Phonics",
      },
    ],
    "Story Sequencing": [
      {
        id: "e18",
        text: "What usually comes at the very beginning of a story?",
        options: [
          "The end",
          "Once upon a time",
          "Happily ever after",
          "The middle",
        ],
        answer: "Once upon a time",
        explanation:
          'Many stories start with an opening phrase like "Once upon a time".',
        topicArea: "Writing",
      },
    ],
    Paragraphs: [
      {
        id: "e19",
        text: "Why do we use paragraphs in writing?",
        options: [
          "To make it look pretty",
          "To group related ideas together",
          "To use more paper",
          "To make it harder to read",
        ],
        answer: "To group related ideas together",
        explanation: "Paragraphs help organize writing into clear sections.",
        topicArea: "Writing",
      },
    ],
    Adverbs: [
      {
        id: "e20",
        text: "Which of these is an adverb?",
        options: ["Quickly", "Quick", "Quicker", "Quickest"],
        answer: "Quickly",
        explanation:
          'Adverbs often end in "ly" and describe how an action is done.',
        topicArea: "Grammar",
      },
    ],
    "Direct Speech": [
      {
        id: "e21",
        text: "What punctuation marks are used to show someone is speaking?",
        options: ["Question marks", "Inverted commas", "Full stops", "Commas"],
        answer: "Inverted commas",
        explanation:
          "Inverted commas (speech marks) go around the words spoken.",
        topicArea: "Punctuation",
      },
    ],
    Prefixes: [
      {
        id: "e22",
        text: 'What does the prefix "un" mean in the word "unhappy"?',
        options: ["Very", "Again", "Not", "Before"],
        answer: "Not",
        explanation: '"Un" means not, so unhappy means not happy.',
        topicArea: "Grammar",
      },
    ],
    Poetry: [
      {
        id: "e23",
        text: "What is a single line of poetry often called?",
        options: ["A sentence", "A verse", "A stanza", "A paragraph"],
        answer: "A verse",
        explanation: "A verse is a line or group of lines in a poem.",
        topicArea: "Writing",
      },
    ],
    Prepositions: [
      {
        id: "e24",
        text: "Which word is a preposition?",
        options: ["Under", "Run", "Blue", "Slowly"],
        answer: "Under",
        explanation:
          "Prepositions show the position or direction of something.",
        topicArea: "Grammar",
      },
    ],
    "Word Families": [
      {
        id: "e25",
        text: 'Which word is in the same family as "play"?',
        options: ["Player", "Run", "Jump", "Sing"],
        answer: "Player",
        explanation: 'Player comes from the root word "play".',
        topicArea: "Vocabulary",
      },
    ],
    "Fronted Adverbials": [
      {
        id: "e26",
        text: "Where does a fronted adverbial go in a sentence?",
        options: ["At the end", "In the middle", "At the start", "Nowhere"],
        answer: "At the start",
        explanation:
          "Fronted adverbials are words or phrases at the beginning of a sentence.",
        topicArea: "Grammar",
      },
    ],
    Pronouns: [
      {
        id: "e27",
        text: "Which of these is a pronoun?",
        options: ["Sam", "He", "Dog", "London"],
        answer: "He",
        explanation: "Pronouns take the place of a noun.",
        topicArea: "Grammar",
      },
    ],
    "Standard English": [
      {
        id: "e28",
        text: "Which sentence is written in Standard English?",
        options: [
          "I done my homework.",
          "I did my homework.",
          "I has my homework.",
          "I is doing homework.",
        ],
        answer: "I did my homework.",
        explanation: 'Standard English uses correct verb forms like "did".',
        topicArea: "Grammar",
      },
    ],
    "Possessive Apostrophes": [
      {
        id: "e29",
        text: 'Where should the apostrophe go to show the dog belongs to the boy? "The boys dog."',
        options: ["boys'", "boy's", "bo'ys", "boys"],
        answer: "boy's",
        explanation: "We use 's for singular possession.",
        topicArea: "Punctuation",
      },
    ],
    "Story Mapping": [
      {
        id: "e30",
        text: "What is a story map used for?",
        options: [
          "To find treasure",
          "To plan the events of a story",
          "To draw a picture",
          "To learn geography",
        ],
        answer: "To plan the events of a story",
        explanation:
          "Story maps help writers plan the beginning, middle, and end.",
        topicArea: "Writing",
      },
    ],
    "Noun Phrases": [
      {
        id: "e31",
        text: "Which is an expanded noun phrase?",
        options: ["The dog", "The big, brown dog", "Running dog", "Dog"],
        answer: "The big, brown dog",
        explanation:
          "Expanded noun phrases use adjectives to describe the noun.",
        topicArea: "Grammar",
      },
    ],
    "Relative Clauses": [
      {
        id: "e32",
        text: "Which word starts a relative clause?",
        options: ["And", "But", "Who", "Because"],
        answer: "Who",
        explanation:
          "Relative clauses often start with relative pronouns like who, which, or that.",
        topicArea: "Grammar",
      },
    ],
    "Modal Verbs": [
      {
        id: "e33",
        text: "Which of these is a modal verb?",
        options: ["Could", "Eat", "Sleep", "Walk"],
        answer: "Could",
        explanation:
          "Modal verbs like could, should, and must show possibility or necessity.",
        topicArea: "Grammar",
      },
    ],
    Parenthesis: [
      {
        id: "e34",
        text: "Which punctuation can be used for parenthesis?",
        options: [
          "Full stops",
          "Brackets",
          "Question marks",
          "Exclamation marks",
        ],
        answer: "Brackets",
        explanation:
          "Brackets, dashes, or commas can be used to add extra information.",
        topicArea: "Punctuation",
      },
    ],
    Cohesion: [
      {
        id: "e35",
        text: "What helps a piece of writing flow well?",
        options: [
          "Using the same word",
          "Linking words and phrases",
          "No punctuation",
          "Short sentences only",
        ],
        answer: "Linking words and phrases",
        explanation: "Cohesion makes writing flow smoothly between ideas.",
        topicArea: "Writing",
      },
    ],
    "Active & Passive Voice": [
      {
        id: "e36",
        text: "Which sentence is in the passive voice?",
        options: [
          "The cat chased the mouse.",
          "The mouse was chased by the cat.",
          "The cat is sleeping.",
          "The mouse ran away.",
        ],
        answer: "The mouse was chased by the cat.",
        explanation:
          "In passive voice, the subject is having something done to it.",
        topicArea: "Grammar",
      },
    ],
    "Semicolons & Colons": [
      {
        id: "e37",
        text: "What can a semicolon be used for?",
        options: [
          "To end a sentence",
          "To join two closely related full sentences",
          "To start a list",
          "To show someone is shouting",
        ],
        answer: "To join two closely related full sentences",
        explanation:
          "Semicolons link two independent clauses without a conjunction.",
        topicArea: "Punctuation",
      },
    ],
    "Formal Writing": [
      {
        id: "e38",
        text: "Which phrase is more formal?",
        options: [
          "Hi there!",
          "I am writing to inform you...",
          "What's up?",
          "See ya later.",
        ],
        answer: "I am writing to inform you...",
        explanation: "Formal writing uses professional and clear language.",
        topicArea: "Writing",
      },
    ],
    Hyphens: [
      {
        id: "e39",
        text: "What is a hyphen used for?",
        options: [
          "To end a sentence",
          "To join two words together (e.g., ice-cream)",
          "To show a pause",
          "To ask a question",
        ],
        answer: "To join two words together (e.g., ice-cream)",
        explanation: "Hyphens link words to show they are connected.",
        topicArea: "Punctuation",
      },
    ],
    "Subjunctive Form": [
      {
        id: "e40",
        text: "Which sentence uses the subjunctive form?",
        options: [
          "I was there.",
          "If I were you, I would go.",
          "I am going now.",
          "He was happy.",
        ],
        answer: "If I were you, I would go.",
        explanation:
          "The subjunctive is used for hypothetical or formal situations.",
        topicArea: "Grammar",
      },
    ],
  },
  Science: {
    Plants: [
      {
        id: "s1",
        text: "Which part of the plant grows underground?",
        options: ["Leaf", "Stem", "Roots", "Flower"],
        answer: "Roots",
        explanation: "Roots grow in the soil to soak up water.",
        topicArea: "Plants",
      },
      {
        id: "s2",
        text: "What do plants need to grow?",
        options: ["Chocolate", "Sunlight and water", "Toys", "Milk"],
        answer: "Sunlight and water",
        explanation: "Plants need light, water, and nutrients to grow.",
        topicArea: "Plants",
      },
    ],
    "Animals & Humans": [
      {
        id: "s3",
        text: "Which sense do you use to hear music?",
        options: ["Sight", "Smell", "Hearing", "Taste"],
        answer: "Hearing",
        explanation: "We use our ears for hearing.",
        topicArea: "Animals & Humans",
      },
      {
        id: "s4",
        text: "Which animal is a mammal?",
        options: ["Shark", "Frog", "Dog", "Snake"],
        answer: "Dog",
        explanation:
          "Dogs are mammals because they have fur and feed their babies milk.",
        topicArea: "Animals & Humans",
      },
    ],
    "Seasonal Changes": [
      {
        id: "s5",
        text: "In which season do leaves usually fall off the trees?",
        options: ["Spring", "Summer", "Autumn", "Winter"],
        answer: "Autumn",
        explanation:
          "In Autumn, the weather gets cooler and leaves change color and fall.",
        topicArea: "Seasons",
      },
    ],
    "States of Matter": [
      {
        id: "s6",
        text: "Which of these is a liquid at room temperature?",
        options: ["Ice", "Water", "Steam", "Rock"],
        answer: "Water",
        explanation: "Water is a liquid, ice is a solid, and steam is a gas.",
        topicArea: "States of Matter",
      },
      {
        id: "s7",
        text: "What happens to water when it freezes?",
        options: [
          "It becomes a gas",
          "It becomes a solid",
          "It stays a liquid",
          "It disappears",
        ],
        answer: "It becomes a solid",
        explanation: "Freezing turns liquid water into solid ice.",
        topicArea: "States of Matter",
      },
    ],
    Electricity: [
      {
        id: "s8",
        text: "What is needed for a simple circuit to work?",
        options: [
          "A battery and a complete loop",
          "Just a wire",
          "A piece of wood",
          "A plastic bottle",
        ],
        answer: "A battery and a complete loop",
        explanation:
          "Electricity needs a power source and a continuous path to flow.",
        topicArea: "Electricity",
      },
    ],
    "Living Things": [
      {
        id: "s9",
        text: "Which of these is a producer in a food chain?",
        options: ["Lion", "Rabbit", "Grass", "Eagle"],
        answer: "Grass",
        explanation:
          "Producers, like plants, make their own food using sunlight.",
        topicArea: "Biology",
      },
    ],
    "Rocks & Fossils": [
      {
        id: "s10",
        text: "What are fossils?",
        options: [
          "Old toys",
          "The remains of living things from long ago",
          "Rocks from space",
          "Types of plants",
        ],
        answer: "The remains of living things from long ago",
        explanation:
          "Fossils are the preserved remains or traces of animals and plants.",
        topicArea: "Geology",
      },
    ],
    "Earth & Space": [
      {
        id: "s11",
        text: "Which planet do we live on?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        answer: "Earth",
        explanation: "We live on planet Earth.",
        topicArea: "Space",
      },
      {
        id: "s12",
        text: "What is at the center of our solar system?",
        options: ["The Moon", "The Earth", "The Sun", "Mars"],
        answer: "The Sun",
        explanation: "The Sun is the star at the center of our solar system.",
        topicArea: "Space",
      },
    ],
    "Evolution & Inheritance": [
      {
        id: "s13",
        text: "Who is famous for the theory of evolution?",
        options: [
          "Isaac Newton",
          "Charles Darwin",
          "Albert Einstein",
          "Marie Curie",
        ],
        answer: "Charles Darwin",
        explanation:
          "Charles Darwin developed the theory of evolution by natural selection.",
        topicArea: "Biology",
      },
    ],
    "Light & Shadows": [
      {
        id: "s14",
        text: "How are shadows formed?",
        options: [
          "When light passes through an object",
          "When light is blocked by an object",
          "When it is night time",
          "When we close our eyes",
        ],
        answer: "When light is blocked by an object",
        explanation:
          "Shadows are areas where light cannot reach because something is in the way.",
        topicArea: "Light",
      },
    ],
    Forces: [
      {
        id: "s15",
        text: "Which force pulls objects towards the Earth?",
        options: ["Magnetism", "Friction", "Gravity", "Air Resistance"],
        answer: "Gravity",
        explanation:
          "Gravity is the force that pulls everything down towards the center of the Earth.",
        topicArea: "Forces",
      },
    ],
    "The Human Body": [
      {
        id: "s16",
        text: "Which organ pumps blood around your body?",
        options: ["Lungs", "Brain", "Heart", "Stomach"],
        answer: "Heart",
        explanation:
          "The heart is a muscle that pumps blood to all parts of your body.",
        topicArea: "Biology",
      },
    ],
    "Everyday Materials": [
      {
        id: "s17",
        text: "Which material is best for making a window?",
        options: ["Wood", "Glass", "Metal", "Fabric"],
        answer: "Glass",
        explanation: "Glass is transparent, meaning you can see through it.",
        topicArea: "Materials",
      },
    ],
    "Weather Patterns": [
      {
        id: "s18",
        text: "What do we call the white fluffy things in the sky that bring rain?",
        options: ["Stars", "Clouds", "Sun", "Moon"],
        answer: "Clouds",
        explanation: "Clouds are made of tiny water droplets or ice crystals.",
        topicArea: "Weather",
      },
    ],
    "Uses of Materials": [
      {
        id: "s19",
        text: "Why is metal used to make spoons?",
        options: [
          "It is soft",
          "It is strong and can be washed",
          "It is see-through",
          "It is light like a feather",
        ],
        answer: "It is strong and can be washed",
        explanation: "Metals are durable and can withstand heat and washing.",
        topicArea: "Materials",
      },
    ],
    "Micro-habitats": [
      {
        id: "s20",
        text: "Where might you find a woodlouse?",
        options: [
          "In the ocean",
          "Under a damp log",
          "In the desert",
          "In the sky",
        ],
        answer: "Under a damp log",
        explanation:
          "Woodlice like dark, damp places like under logs or stones.",
        topicArea: "Habitats",
      },
    ],
    "Healthy Eating": [
      {
        id: "s21",
        text: "Which of these is a healthy snack?",
        options: ["Chocolate bar", "An apple", "Fizzy drink", "Crisps"],
        answer: "An apple",
        explanation:
          "Fruit is a healthy snack because it has vitamins and fiber.",
        topicArea: "Health",
      },
    ],
    "Animals including Humans": [
      {
        id: "s22",
        text: "What do all animals need to survive?",
        options: ["Toys", "Food, water, and air", "Television", "Clothes"],
        answer: "Food, water, and air",
        explanation: "These are the basic needs for all living things.",
        topicArea: "Biology",
      },
    ],
    Soil: [
      {
        id: "s23",
        text: "What is soil made of?",
        options: [
          "Just rocks",
          "Rocks, dead plants, and tiny animals",
          "Just water",
          "Plastic",
        ],
        answer: "Rocks, dead plants, and tiny animals",
        explanation: "Soil is a mix of organic matter and broken-down rocks.",
        topicArea: "Geology",
      },
    ],
    Sound: [
      {
        id: "s24",
        text: "How is sound made?",
        options: ["By light", "By vibrations", "By silence", "By colors"],
        answer: "By vibrations",
        explanation:
          "Sound is created when something vibrates, sending waves through the air.",
        topicArea: "Physics",
      },
    ],
    "Digestive System": [
      {
        id: "s25",
        text: "Where does food go after you swallow it?",
        options: [
          "To your brain",
          "To your stomach",
          "To your lungs",
          "To your feet",
        ],
        answer: "To your stomach",
        explanation: "The stomach helps break down food after it is swallowed.",
        topicArea: "Biology",
      },
    ],
    "Properties of Materials": [
      {
        id: "s26",
        text: "Which word describes a material that allows heat to pass through it easily?",
        options: ["Insulator", "Conductor", "Transparent", "Opaque"],
        answer: "Conductor",
        explanation:
          "Conductors, like metals, allow heat or electricity to flow through them.",
        topicArea: "Materials",
      },
    ],
    "Life Cycles": [
      {
        id: "s27",
        text: "What is the first stage of a butterfly's life cycle?",
        options: ["Caterpillar", "Egg", "Pupa", "Adult butterfly"],
        answer: "Egg",
        explanation: "A butterfly starts its life as a tiny egg.",
        topicArea: "Biology",
      },
    ],
    "Human Development": [
      {
        id: "s28",
        text: "Which of these is a stage of human development?",
        options: ["Seed", "Baby", "Tadpole", "Caterpillar"],
        answer: "Baby",
        explanation: "Humans start as babies and grow into adults.",
        topicArea: "Biology",
      },
    ],
    "Reversible Changes": [
      {
        id: "s29",
        text: "Which of these is a reversible change?",
        options: [
          "Burning wood",
          "Melting chocolate",
          "Baking a cake",
          "Frying an egg",
        ],
        answer: "Melting chocolate",
        explanation:
          "Melting is reversible because you can freeze the chocolate back into a solid.",
        topicArea: "Chemistry",
      },
    ],
    Classification: [
      {
        id: "s30",
        text: "What do scientists use to group living things?",
        options: ["A ruler", "A classification key", "A map", "A clock"],
        answer: "A classification key",
        explanation:
          "Classification keys use questions to help identify and group organisms.",
        topicArea: "Biology",
      },
    ],
    "Micro-organisms": [
      {
        id: "s31",
        text: "Which of these is a type of micro-organism?",
        options: ["Elephant", "Bacteria", "Oak tree", "Whale"],
        answer: "Bacteria",
        explanation:
          "Bacteria are tiny living things that can only be seen with a microscope.",
        topicArea: "Biology",
      },
    ],
  },
  History: {
    "Significant Individuals": [
      {
        id: "h1",
        text: "Who was Florence Nightingale?",
        options: [
          "A famous singer",
          "A famous nurse",
          "A queen",
          "An explorer",
        ],
        answer: "A famous nurse",
        explanation:
          "She is known for her work in nursing during the Crimean War.",
        topicArea: "Significant Individuals",
      },
    ],
    "The Great Fire of London": [
      {
        id: "h2",
        text: "In which year did the Great Fire of London happen?",
        options: ["1066", "1666", "1966", "1866"],
        answer: "1666",
        explanation: "The fire started in September 1666.",
        topicArea: "The Great Fire of London",
      },
    ],
    "Famous Queens": [
      {
        id: "h3",
        text: "Who was the Queen of England for 63 years until 1901?",
        options: [
          "Queen Elizabeth I",
          "Queen Victoria",
          "Queen Mary",
          "Queen Anne",
        ],
        answer: "Queen Victoria",
        explanation: "Queen Victoria reigned during the Victorian era.",
        topicArea: "Famous Queens",
      },
    ],
    "The Romans in Britain": [
      {
        id: "h4",
        text: "What did the Romans build to help them travel quickly across Britain?",
        options: ["Canals", "Railways", "Roads", "Airports"],
        answer: "Roads",
        explanation:
          "The Romans built long, straight roads to move their armies and goods.",
        topicArea: "Romans",
      },
      {
        id: "h5",
        text: "Which famous wall did the Romans build in the North of England?",
        options: [
          "The Great Wall",
          "Hadrian's Wall",
          "The Berlin Wall",
          "London Wall",
        ],
        answer: "Hadrian's Wall",
        explanation:
          "Hadrian's Wall was built to mark the northern limit of the Roman Empire.",
        topicArea: "Romans",
      },
    ],
    "World War II": [
      {
        id: "h6",
        text: "In which year did World War II end?",
        options: ["1918", "1939", "1945", "1950"],
        answer: "1945",
        explanation: "World War II ended in 1945 after six years of conflict.",
        topicArea: "WW2",
      },
    ],
    "The Vikings": [
      {
        id: "h7",
        text: "Where did the Vikings come from?",
        options: ["Scandinavia", "Italy", "Egypt", "China"],
        answer: "Scandinavia",
        explanation:
          "The Vikings came from countries like Norway, Sweden, and Denmark.",
        topicArea: "Vikings",
      },
    ],
    "Ancient Egyptians": [
      {
        id: "h8",
        text: "Which river was vital to the Ancient Egyptians?",
        options: ["The Thames", "The Nile", "The Amazon", "The Ganges"],
        answer: "The Nile",
        explanation:
          "The Nile provided water and fertile land for farming in Ancient Egypt.",
        topicArea: "Egypt",
      },
      {
        id: "h9",
        text: "What were the giant stone tombs built for Pharaohs called?",
        options: ["Castles", "Pyramids", "Temples", "Palaces"],
        answer: "Pyramids",
        explanation:
          "Pyramids were built as grand tombs for the kings of Egypt.",
        topicArea: "Egypt",
      },
    ],
    "Ancient Greece": [
      {
        id: "h10",
        text: "Where did the first Olympic Games take place?",
        options: ["Rome", "Athens", "Olympia", "Sparta"],
        answer: "Olympia",
        explanation: "The Olympic Games began in Olympia, Ancient Greece.",
        topicArea: "Greece",
      },
    ],
    "Stone Age to Iron Age": [
      {
        id: "h11",
        text: "What was the main material used for tools in the Stone Age?",
        options: ["Iron", "Bronze", "Flint", "Plastic"],
        answer: "Flint",
        explanation:
          "Early humans used flint stones to make sharp tools and weapons.",
        topicArea: "Prehistory",
      },
    ],
    "The Victorians": [
      {
        id: "h12",
        text: "Who was the famous Queen during the Victorian era?",
        options: [
          "Queen Elizabeth II",
          "Queen Victoria",
          "Queen Anne",
          "Queen Mary",
        ],
        answer: "Queen Victoria",
        explanation: "The Victorian era is named after Queen Victoria.",
        topicArea: "Victorians",
      },
    ],
    "Changes in Living Memory": [
      {
        id: "h13",
        text: "Which of these was NOT used by your grandparents when they were children?",
        options: ["A radio", "A smartphone", "A bicycle", "A doll"],
        answer: "A smartphone",
        explanation:
          "Smartphones were invented much later than your grandparents' childhood.",
        topicArea: "Modern History",
      },
    ],
    "Events Beyond Memory": [
      {
        id: "h14",
        text: "Who was the first person to walk on the Moon in 1969?",
        options: [
          "Buzz Lightyear",
          "Neil Armstrong",
          "Tim Peake",
          "Yuri Gagarin",
        ],
        answer: "Neil Armstrong",
        explanation:
          "Neil Armstrong was the first human to step onto the lunar surface.",
        topicArea: "Modern History",
      },
    ],
    "Old and New Toys": [
      {
        id: "h15",
        text: "What were old toys often made from before plastic was common?",
        options: [
          "Wood and metal",
          "Glass and paper",
          "Rubber and wool",
          "Stone and clay",
        ],
        answer: "Wood and metal",
        explanation:
          "Before plastic, many toys were carved from wood or made from tin.",
        topicArea: "Modern History",
      },
    ],
    Explorers: [
      {
        id: "h16",
        text: "Which explorer is famous for his journey to the South Pole?",
        options: [
          "Christopher Columbus",
          "Captain Robert Falcon Scott",
          "Neil Armstrong",
          "Sir Francis Drake",
        ],
        answer: "Captain Robert Falcon Scott",
        explanation:
          "Captain Scott led an expedition to the South Pole in 1912.",
        topicArea: "Exploration",
      },
    ],
    "Nursing Pioneers": [
      {
        id: "h17",
        text: "Which nurse is famous for her work during the Crimean War alongside Florence Nightingale?",
        options: [
          "Marie Curie",
          "Mary Seacole",
          "Rosa Parks",
          "Emmeline Pankhurst",
        ],
        answer: "Mary Seacole",
        explanation:
          "Mary Seacole was a Jamaican nurse who helped soldiers during the Crimean War.",
        topicArea: "Significant Individuals",
      },
    ],
    "The First Aeroplane": [
      {
        id: "h18",
        text: "Who invented the first successful aeroplane?",
        options: [
          "The Wright Brothers",
          "The Smith Brothers",
          "The Jones Brothers",
          "The Brown Brothers",
        ],
        answer: "The Wright Brothers",
        explanation:
          "Orville and Wilbur Wright made the first powered flight in 1903.",
        topicArea: "Inventions",
      },
    ],
    "Local History": [
      {
        id: "h19",
        text: 'What is a "landmark" in a town?',
        options: [
          "A type of bird",
          "A famous building or feature",
          "A kind of tree",
          "A street name",
        ],
        answer: "A famous building or feature",
        explanation:
          "Landmarks help people recognize and find their way around a town.",
        topicArea: "Local History",
      },
    ],
    "Ancient Rome": [
      {
        id: "h20",
        text: "What language did the Ancient Romans speak?",
        options: ["English", "Latin", "Greek", "French"],
        answer: "Latin",
        explanation: "Latin was the language of the Roman Empire.",
        topicArea: "Romans",
      },
    ],
    "Egyptian Gods": [
      {
        id: "h21",
        text: "Which Egyptian god had the head of a jackal?",
        options: ["Ra", "Anubis", "Osiris", "Horus"],
        answer: "Anubis",
        explanation: "Anubis was the god of mummification and the afterlife.",
        topicArea: "Egypt",
      },
    ],
    Boudicca: [
      {
        id: "h22",
        text: "Who was Boudicca?",
        options: [
          "A Roman Empress",
          "Queen of the Iceni tribe",
          "A Greek Goddess",
          "A Viking warrior",
        ],
        answer: "Queen of the Iceni tribe",
        explanation:
          "Boudicca led a famous revolt against the Romans in Britain.",
        topicArea: "Romans",
      },
    ],
    "Anglo-Saxons & Scots": [
      {
        id: "h23",
        text: "Where did the Anglo-Saxons come from?",
        options: [
          "Germany, Denmark, and the Netherlands",
          "Italy and Greece",
          "Egypt and Syria",
          "France and Spain",
        ],
        answer: "Germany, Denmark, and the Netherlands",
        explanation:
          "The Anglo-Saxons were tribes from northern Europe who settled in Britain.",
        topicArea: "Anglo-Saxons",
      },
    ],
    "Anglo-Saxon Life": [
      {
        id: "h24",
        text: "What were Anglo-Saxon houses usually made of?",
        options: [
          "Brick and cement",
          "Wood and thatch",
          "Stone and glass",
          "Metal and plastic",
        ],
        answer: "Wood and thatch",
        explanation:
          "Anglo-Saxons built their homes using timber and straw roofs.",
        topicArea: "Anglo-Saxons",
      },
    ],
    "Roman Inventions": [
      {
        id: "h25",
        text: "Which of these was a Roman invention?",
        options: [
          "The Internet",
          "Underfloor heating (hypocaust)",
          "The telephone",
          "The steam engine",
        ],
        answer: "Underfloor heating (hypocaust)",
        explanation:
          "The Romans were famous for their advanced engineering, including central heating.",
        topicArea: "Romans",
      },
    ],
    "Victorian Schools": [
      {
        id: "h26",
        text: "What did Victorian children use to write on in school?",
        options: ["Ipads", "Slates", "Paper", "Whiteboards"],
        answer: "Slates",
        explanation:
          "Many Victorian children used a piece of slate and a slate pencil to practice writing.",
        topicArea: "Victorians",
      },
    ],
    "The Maya Calendar": [
      {
        id: "h27",
        text: "The Maya civilization was famous for being very good at which subject?",
        options: ["Cooking", "Astronomy and Maths", "Swimming", "Football"],
        answer: "Astronomy and Maths",
        explanation:
          "The Maya developed very accurate calendars based on the stars.",
        topicArea: "Maya",
      },
    ],
    "The Maya Civilization": [
      {
        id: "h28",
        text: "In which part of the world did the Maya live?",
        options: ["Europe", "Central America", "Africa", "Asia"],
        answer: "Central America",
        explanation:
          "The Maya civilization was located in modern-day Mexico and Central America.",
        topicArea: "Maya",
      },
    ],
    "Crime and Punishment": [
      {
        id: "h29",
        text: "In the past, what was a common punishment for minor crimes?",
        options: ["A fine", "The stocks", "A holiday", "A medal"],
        answer: "The stocks",
        explanation:
          "People were often put in the stocks in public as a form of humiliation.",
        topicArea: "Crime & Punishment",
      },
    ],
    "The Blitz": [
      {
        id: "h30",
        text: 'What was "The Blitz" during World War II?',
        options: [
          "A fast dance",
          "Heavy bombing of British cities",
          "A type of food",
          "A famous ship",
        ],
        answer: "Heavy bombing of British cities",
        explanation:
          "The Blitz was a period of intense bombing by the German air force.",
        topicArea: "WW2",
      },
    ],
    "Victorian Crime": [
      {
        id: "h31",
        text: "Who was a famous fictional detective from the Victorian era?",
        options: ["James Bond", "Sherlock Holmes", "Batman", "Harry Potter"],
        answer: "Sherlock Holmes",
        explanation:
          "Sherlock Holmes was created by Sir Arthur Conan Doyle in 1887.",
        topicArea: "Victorians",
      },
    ],
  },
  Geography: {
    "The UK": [
      {
        id: "g1",
        text: "What is the capital city of England?",
        options: ["Paris", "London", "Edinburgh", "Cardiff"],
        answer: "London",
        explanation: "London is the capital of England and the UK.",
        topicArea: "The UK",
      },
      {
        id: "g2",
        text: "Which of these is a country in the UK?",
        options: ["France", "Spain", "Wales", "Germany"],
        answer: "Wales",
        explanation:
          "The UK is made of England, Scotland, Wales, and Northern Ireland.",
        topicArea: "The UK",
      },
    ],
    "Continents & Oceans": [
      {
        id: "g3",
        text: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation:
          "There are 7 continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.",
        topicArea: "World",
      },
    ],
    "Volcanoes & Earthquakes": [
      {
        id: "g4",
        text: "What is the hot liquid rock called when it is inside a volcano?",
        options: ["Lava", "Magma", "Water", "Ash"],
        answer: "Magma",
        explanation:
          "It is called magma when inside the earth, and lava when it erupts out.",
        topicArea: "Physical Geography",
      },
    ],
    "Rivers & Water Cycle": [
      {
        id: "g5",
        text: "What is the process called when water turns into gas?",
        options: ["Condensation", "Evaporation", "Precipitation", "Freezing"],
        answer: "Evaporation",
        explanation:
          "Evaporation is when liquid water is heated and turns into water vapor.",
        topicArea: "Water Cycle",
      },
    ],
    "Climate Change": [
      {
        id: "g6",
        text: "Which of these helps to reduce global warming?",
        options: [
          "Cutting down trees",
          "Using more plastic",
          "Planting trees",
          "Leaving lights on",
        ],
        answer: "Planting trees",
        explanation:
          "Trees absorb carbon dioxide, which helps to cool the planet.",
        topicArea: "Environment",
      },
    ],
    "The Seasons": [
      {
        id: "g7",
        text: "How many seasons are there in a year?",
        options: ["2", "3", "4", "5"],
        answer: "4",
        explanation: "The four seasons are Spring, Summer, Autumn, and Winter.",
        topicArea: "Seasons",
      },
    ],
    "Map Skills": [
      {
        id: "g8",
        text: "What does a compass show?",
        options: ["Time", "Directions", "Weather", "Distance"],
        answer: "Directions",
        explanation: "A compass shows North, South, East, and West.",
        topicArea: "Maps",
      },
    ],
    "Hot and Cold Places": [
      {
        id: "g9",
        text: "Where on Earth is it usually the hottest?",
        options: ["The North Pole", "The South Pole", "The Equator", "The UK"],
        answer: "The Equator",
        explanation:
          "The Equator is the imaginary line around the middle of the Earth where it is hottest.",
        topicArea: "World",
      },
    ],
    Mountains: [
      {
        id: "g10",
        text: "What is the highest mountain in the world?",
        options: ["Ben Nevis", "Mount Everest", "Mont Blanc", "Kilimanjaro"],
        answer: "Mount Everest",
        explanation: "Mount Everest is the highest peak on Earth.",
        topicArea: "Physical Geography",
      },
    ],
    "Our Local Area": [
      {
        id: "g11",
        text: 'What is a "landmark" in a town?',
        options: [
          "A type of bird",
          "A famous building or feature",
          "A kind of tree",
          "A street name",
        ],
        answer: "A famous building or feature",
        explanation:
          "Landmarks help people recognize and find their way around a town.",
        topicArea: "Local Geography",
      },
    ],
    "Using a Compass": [
      {
        id: "g12",
        text: "Which direction is opposite to North?",
        options: ["East", "West", "South", "North-East"],
        answer: "South",
        explanation: "South is directly opposite North on a compass.",
        topicArea: "Map Skills",
      },
    ],
    "Comparing Places": [
      {
        id: "g13",
        text: "How might a village be different from a big city?",
        options: [
          "It has more skyscrapers",
          "It is usually quieter and has more green space",
          "It has more people",
          "It has more airports",
        ],
        answer: "It is usually quieter and has more green space",
        explanation: "Villages are smaller settlements than cities.",
        topicArea: "Human Geography",
      },
    ],
    "Aerial Photos": [
      {
        id: "g14",
        text: "What does an aerial photo show?",
        options: [
          "The ground from above",
          "The sky from below",
          "A close-up of a flower",
          "A person's face",
        ],
        answer: "The ground from above",
        explanation:
          "Aerial photos are taken from planes or satellites looking down.",
        topicArea: "Map Skills",
      },
    ],
    "Island Life": [
      {
        id: "g15",
        text: "What is an island?",
        options: [
          "A piece of land surrounded by water",
          "A very high mountain",
          "A large forest",
          "A dry desert",
        ],
        answer: "A piece of land surrounded by water",
        explanation: "Islands are completely surrounded by water on all sides.",
        topicArea: "Physical Geography",
      },
    ],
    "UK Counties & Cities": [
      {
        id: "g16",
        text: "Which of these is a city in Scotland?",
        options: ["London", "Edinburgh", "Cardiff", "Belfast"],
        answer: "Edinburgh",
        explanation: "Edinburgh is the capital city of Scotland.",
        topicArea: "The UK",
      },
    ],
    "Climate Zones": [
      {
        id: "g17",
        text: "Which climate zone is very cold all year round?",
        options: ["Tropical", "Temperate", "Polar", "Desert"],
        answer: "Polar",
        explanation:
          "Polar regions, like the Arctic and Antarctic, are freezing cold.",
        topicArea: "Climate",
      },
    ],
    "Map Symbols": [
      {
        id: "g18",
        text: "What does a blue line usually represent on a map?",
        options: ["A road", "A river", "A forest", "A mountain"],
        answer: "A river",
        explanation:
          "Blue is typically used for water features like rivers and lakes.",
        topicArea: "Map Skills",
      },
    ],
    "European Countries": [
      {
        id: "g19",
        text: "Which of these countries is in Europe?",
        options: ["Brazil", "France", "Australia", "Japan"],
        answer: "France",
        explanation: "France is a large country in Western Europe.",
        topicArea: "World",
      },
    ],
    "South America": [
      {
        id: "g20",
        text: "Which famous rainforest is located in South America?",
        options: [
          "The Sherwood Forest",
          "The Amazon Rainforest",
          "The Black Forest",
          "The Congo Basin",
        ],
        answer: "The Amazon Rainforest",
        explanation:
          "The Amazon is the largest tropical rainforest in the world.",
        topicArea: "World",
      },
    ],
    "North America": [
      {
        id: "g21",
        text: "Which of these countries is in North America?",
        options: ["Canada", "Italy", "Egypt", "China"],
        answer: "Canada",
        explanation: "Canada is the largest country in North America.",
        topicArea: "World",
      },
    ],
    "Trade Links": [
      {
        id: "g22",
        text: 'What is "importing"?',
        options: [
          "Selling goods to another country",
          "Bringing goods in from another country",
          "Making goods at home",
          "Throwing goods away",
        ],
        answer: "Bringing goods in from another country",
        explanation: "Importing is when a country buys goods from abroad.",
        topicArea: "Human Geography",
      },
    ],
    "Energy Resources": [
      {
        id: "g23",
        text: "Which of these is a renewable energy source?",
        options: ["Coal", "Oil", "Wind power", "Natural gas"],
        answer: "Wind power",
        explanation: "Wind is renewable because it won't run out.",
        topicArea: "Environment",
      },
    ],
    Biomes: [
      {
        id: "g24",
        text: 'What is a "desert" biome known for?',
        options: [
          "Lots of rain",
          "Very little rainfall",
          "Being very cold",
          "Having many trees",
        ],
        answer: "Very little rainfall",
        explanation: "Deserts are very dry places with minimal rain.",
        topicArea: "Physical Geography",
      },
    ],
    "Global Trade": [
      {
        id: "g25",
        text: "How are most goods transported around the world?",
        options: ["By car", "By cargo ship", "By bicycle", "By walking"],
        answer: "By cargo ship",
        explanation:
          "Large ships carry most of the world's goods across oceans.",
        topicArea: "Human Geography",
      },
    ],
    Globalisation: [
      {
        id: "g26",
        text: "What is globalisation?",
        options: [
          "The world becoming more connected",
          "The world getting bigger",
          "People staying in one place",
          "Learning only about your own town",
        ],
        answer: "The world becoming more connected",
        explanation:
          "Globalisation is the process of countries becoming more linked through trade and culture.",
        topicArea: "Human Geography",
      },
    ],
    Sustainability: [
      {
        id: "g27",
        text: 'What does "sustainability" mean?',
        options: [
          "Using everything up quickly",
          "Meeting our needs without harming the future",
          "Making lots of trash",
          "Cutting down all the forests",
        ],
        answer: "Meeting our needs without harming the future",
        explanation:
          "Sustainability is about protecting resources for future generations.",
        topicArea: "Environment",
      },
    ],
    "Climate Solutions": [
      {
        id: "g28",
        text: "Which of these helps to stop climate change?",
        options: [
          "Driving more cars",
          "Using solar panels",
          "Leaving the heating on",
          "Cutting down trees",
        ],
        answer: "Using solar panels",
        explanation: "Solar panels create clean energy from the sun.",
        topicArea: "Environment",
      },
    ],
  },
};

export const STATIC_QUESTION_BANK: Record<
  Subject,
  Record<string, Question[]>
> = Object.fromEntries(
  Object.entries(BASE_QUESTION_BANK).map(([subject, topics]) => [
    subject,
    Object.fromEntries(
      [
        ...new Set([
          ...Object.keys(topics),
          ...Object.keys(YEAR_5_CORE_EXPANSION[subject] ?? {}),
          ...Object.keys(YEAR_5_MORE_QUESTIONS[subject] ?? {}),
          ...Object.keys(YEAR_5_QUESTION_EXPANSION[subject] ?? {}),
        ]),
      ].map((topic) => [
        topic,
        [
          ...(topics[topic] ?? []),
          ...(YEAR_5_CORE_EXPANSION[subject]?.[topic] ?? []),
          ...(YEAR_5_MORE_QUESTIONS[subject]?.[topic] ?? []),
          ...(YEAR_5_QUESTION_EXPANSION[subject]?.[topic] ?? []),
        ],
      ]),
    ),
  ]),
) as Record<Subject, Record<string, Question[]>>;

export function getYear5Questions(subject: Subject, topic: string): Question[] {
  return (STATIC_QUESTION_BANK[subject]?.[topic] ?? []).filter((question) =>
    question.source?.url.startsWith("https://www.gov.uk/"),
  );
}
