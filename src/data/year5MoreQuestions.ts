import type { Question } from "../types";
import { YEAR_5_SOURCES, type ContentSource } from "./year5QuestionExpansion";

type QuestionSeed = [
  text: string,
  options: [string, string, string, string],
  answer: string,
  explanation: string,
];

function topic(
  idPrefix: string,
  topicArea: string,
  source: ContentSource,
  seeds: QuestionSeed[],
): Question[] {
  return seeds.map(([text, options, answer, explanation], index) => ({
    id: `y5-more-${idPrefix}-${String(index + 1).padStart(2, "0")}`,
    text,
    options,
    answer,
    explanation,
    topicArea,
    source,
  }));
}

// Four additional original questions per topic take every Year 5 pool from six
// to ten. The linked GOV.UK programmes document curriculum alignment; question
// wording, examples and explanations are original to School Quest.
export const YEAR_5_MORE_QUESTIONS: Record<
  string,
  Record<string, Question[]>
> = {
  Mathematics: {
    "Place Value & Roman Numerals": topic(
      "m-place",
      "Place value and Roman numerals",
      YEAR_5_SOURCES.maths,
      [
        [
          "What is the value of the 2 in 602,407?",
          ["2", "200", "2,000", "20,000"],
          "2,000",
          "The 2 is in the thousands column, so its value is 2,000.",
        ],
        [
          "What is one more than 999,999?",
          ["999,100", "1,000,000", "1,000,999", "10,000,000"],
          "1,000,000",
          "Adding one crosses the place-value boundary from 999,999 to one million.",
        ],
        [
          "Which Roman numeral represents 94?",
          ["XCIV", "XCV", "IC", "LXXXXIV"],
          "XCIV",
          "XC is 90 and IV is 4, so XCIV represents 94.",
        ],
        [
          "Which list is ordered from smallest to greatest?",
          ["-2, -5, 0, 3", "-5, -2, 0, 3", "0, -2, -5, 3", "3, 0, -2, -5"],
          "-5, -2, 0, 3",
          "Numbers farther below zero are smaller, so -5 comes before -2.",
        ],
      ],
    ),
    Rounding: topic("m-round", "Rounding", YEAR_5_SOURCES.maths, [
      [
        "What is 348,765 rounded to the nearest 10,000?",
        ["340,000", "348,000", "350,000", "400,000"],
        "350,000",
        "The thousands digit is 8, so 348,765 rounds up to 350,000.",
      ],
      [
        "What is 650,000 rounded to the nearest 100,000?",
        ["600,000", "650,000", "700,000", "1,000,000"],
        "700,000",
        "650,000 is halfway, so it rounds up to 700,000.",
      ],
      [
        "Which number rounds to 42,000 to the nearest 1,000?",
        ["41,420", "41,650", "42,620", "43,100"],
        "41,650",
        "41,650 lies between 41,500 and 42,499, so it rounds to 42,000.",
      ],
      [
        "A town has 287,449 people. About how many is that to the nearest 10,000?",
        ["280,000", "287,000", "290,000", "300,000"],
        "290,000",
        "The thousands digit is 7, so 287,449 rounds up to 290,000.",
      ],
    ]),
    "Addition & Subtraction": topic(
      "m-add",
      "Addition and subtraction",
      YEAR_5_SOURCES.maths,
      [
        [
          "What is 67,485 + 18,769?",
          ["75,154", "85,244", "86,254", "96,254"],
          "86,254",
          "Careful column addition gives 67,485 + 18,769 = 86,254.",
        ],
        [
          "What is 120,000 - 38,756?",
          ["71,244", "81,244", "81,344", "91,244"],
          "81,244",
          "Subtracting 38,756 from 120,000 leaves 81,244.",
        ],
        [
          "A museum had 45,680 visitors, then 12,945 more arrived and 8,760 left. How many remained?",
          ["49,765", "49,865", "50,865", "67,385"],
          "49,865",
          "45,680 + 12,945 = 58,625, and 58,625 - 8,760 = 49,865.",
        ],
        [
          "Which inverse calculation checks that 73,205 - 28,417 = 44,788?",
          [
            "44,788 + 28,417",
            "73,205 + 28,417",
            "44,788 - 28,417",
            "73,205 - 44,788 - 28,417",
          ],
          "44,788 + 28,417",
          "Addition checks subtraction: 44,788 + 28,417 returns 73,205.",
        ],
      ],
    ),
    "Multiplication & Division": topic(
      "m-mult",
      "Multiplication and division",
      YEAR_5_SOURCES.maths,
      [
        [
          "What is 1,204 × 6?",
          ["6,024", "7,124", "7,224", "7,244"],
          "7,224",
          "1,200 × 6 is 7,200 and 4 × 6 is 24, making 7,224.",
        ],
        [
          "What is 3,276 ÷ 7?",
          ["458", "468", "478", "488"],
          "468",
          "7 × 468 = 3,276.",
        ],
        [
          "What is 42 × 38?",
          ["1,496", "1,596", "1,696", "1,796"],
          "1,596",
          "42 × 30 = 1,260 and 42 × 8 = 336; together they make 1,596.",
        ],
        [
          "1,058 apples are packed in boxes of 9. How many full boxes can be filled, and how many apples remain?",
          ["116 r4", "117 r5", "117 r6", "118 r4"],
          "117 r5",
          "9 × 117 = 1,053, leaving 5 apples.",
        ],
      ],
    ),
    "Prime Numbers": topic("m-prime", "Prime numbers", YEAR_5_SOURCES.maths, [
      [
        "Which pair lists all the prime numbers between 30 and 40?",
        ["31 and 37", "31 and 39", "33 and 37", "35 and 39"],
        "31 and 37",
        "31 and 37 each have exactly two factors; the other numbers are composite.",
      ],
      [
        "Which number cannot be prime because its digits add to a multiple of 3?",
        ["41", "47", "51", "53"],
        "51",
        "5 + 1 = 6, so 51 is divisible by 3 and is composite.",
      ],
      [
        "Which calculation shows that 49 is composite?",
        ["1 × 49", "2 × 24.5", "7 × 7", "49 + 0"],
        "7 × 7",
        "Because 49 has factors 7 and 7 as well as 1 and 49, it is composite.",
      ],
      [
        "What is the smallest prime number greater than 50?",
        ["51", "52", "53", "55"],
        "53",
        "51 is divisible by 3 and 52 is even; 53 has only 1 and 53 as factors.",
      ],
    ]),
    "Square & Cube Numbers": topic(
      "m-powers",
      "Square and cube numbers",
      YEAR_5_SOURCES.maths,
      [
        [
          "What is 12 squared?",
          ["24", "48", "124", "144"],
          "144",
          "12 squared means 12 × 12, which is 144.",
        ],
        [
          "What is 5 cubed?",
          ["15", "25", "75", "125"],
          "125",
          "5 cubed means 5 × 5 × 5 = 125.",
        ],
        [
          "Which square number lies between 80 and 100?",
          ["81", "84", "90", "99"],
          "81",
          "81 is 9 × 9, so it is a square number.",
        ],
        [
          "Which number is both a square number and a cube number?",
          ["16", "27", "36", "64"],
          "64",
          "64 is 8 squared and also 4 cubed.",
        ],
      ],
    ),
    Fractions: topic("m-frac", "Fractions", YEAR_5_SOURCES.maths, [
      [
        "What is 2/3 + 1/6?",
        ["3/9", "3/6", "5/6", "1"],
        "5/6",
        "Two thirds is four sixths; 4/6 + 1/6 = 5/6.",
      ],
      [
        "Which fraction is smallest?",
        ["3/4", "5/8", "2/3", "7/10"],
        "5/8",
        "As decimals these are 0.75, 0.625, about 0.667 and 0.7, so 5/8 is smallest.",
      ],
      [
        "What is 3 1/5 - 4/5?",
        ["2 1/5", "2 2/5", "2 3/5", "3 3/5"],
        "2 2/5",
        "Exchange one whole: 3 1/5 becomes 2 6/5, then subtract 4/5 to get 2 2/5.",
      ],
      [
        "A class reads 3/7 of a 56-page booklet. How many pages do they read?",
        ["8", "18", "24", "32"],
        "24",
        "One seventh of 56 is 8, so three sevenths is 3 × 8 = 24.",
      ],
    ]),
    "Multiplying Decimals": topic(
      "m-decimal",
      "Multiplying decimals",
      YEAR_5_SOURCES.maths,
      [
        [
          "What is 0.456 × 100?",
          ["0.0456", "4.56", "45.6", "456"],
          "45.6",
          "Multiplying by 100 makes each digit worth one hundred times as much.",
        ],
        [
          "What is 6.07 × 1,000?",
          ["60.7", "607", "6,070", "60,700"],
          "6,070",
          "Multiplying by 1,000 moves every digit three place-value columns left.",
        ],
        [
          "Which calculation has the answer 83.5?",
          ["8.35 × 10", "8.35 × 100", "83.5 × 10", "0.835 × 10"],
          "8.35 × 10",
          "Multiplying 8.35 by 10 gives 83.5.",
        ],
        [
          "A ribbon is 1.25 m long. Ten equal ribbons are placed end to end. What is the total length?",
          ["1.35 m", "12.5 m", "125 m", "1,250 m"],
          "12.5 m",
          "1.25 × 10 = 12.5 metres.",
        ],
      ],
    ),
    Percentages: topic("m-percent", "Percentages", YEAR_5_SOURCES.maths, [
      [
        "What is 40% of 60?",
        ["12", "20", "24", "40"],
        "24",
        "10% of 60 is 6, so 40% is 4 × 6 = 24.",
      ],
      [
        "What percentage is equal to 0.35?",
        ["3.5%", "30%", "35%", "350%"],
        "35%",
        "0.35 is 35 hundredths, so it is 35%.",
      ],
      [
        "Which percentage is equivalent to 3/5?",
        ["30%", "50%", "60%", "75%"],
        "60%",
        "Three fifths becomes 60/100, which is 60%.",
      ],
      [
        "A £80 bicycle helmet is reduced by 25%. What is the sale price?",
        ["£20", "£55", "£60", "£75"],
        "£60",
        "25% of £80 is £20, so the sale price is £80 - £20 = £60.",
      ],
    ]),
    "Measurement & Conversions": topic(
      "m-measure",
      "Measurement and conversions",
      YEAR_5_SOURCES.maths,
      [
        [
          "How many millilitres are in 2.75 litres?",
          ["27.5 ml", "275 ml", "2,750 ml", "27,500 ml"],
          "2,750 ml",
          "One litre is 1,000 ml, so 2.75 litres is 2,750 ml.",
        ],
        [
          "How many minutes are in 3 hours 20 minutes?",
          ["180", "190", "200", "320"],
          "200",
          "Three hours is 180 minutes; add 20 to make 200 minutes.",
        ],
        [
          "How many grams are in 4.2 kilograms?",
          ["42 g", "420 g", "4,200 g", "42,000 g"],
          "4,200 g",
          "One kilogram is 1,000 g, so 4.2 kg is 4,200 g.",
        ],
        [
          "A walk is 1.6 km followed by 350 m. What is the total distance in metres?",
          ["510 m", "1,635 m", "1,950 m", "3,510 m"],
          "1,950 m",
          "1.6 km is 1,600 m; adding 350 m gives 1,950 m.",
        ],
      ],
    ),
    "Perimeter & Area": topic(
      "m-area",
      "Perimeter and area",
      YEAR_5_SOURCES.maths,
      [
        [
          "A rectangle is 13 cm long and 7 cm wide. What is its perimeter?",
          ["20 cm", "40 cm", "91 cm", "182 cm"],
          "40 cm",
          "Perimeter is 13 + 7 + 13 + 7 = 40 cm.",
        ],
        [
          "What is the area of a 15 m by 8 m rectangle?",
          ["23 m²", "46 m²", "120 m²", "240 m²"],
          "120 m²",
          "Area of a rectangle is length × width: 15 × 8 = 120 m².",
        ],
        [
          "A square has perimeter 36 cm. What is its area?",
          ["9 cm²", "36 cm²", "72 cm²", "81 cm²"],
          "81 cm²",
          "Each side is 36 ÷ 4 = 9 cm, and 9 × 9 = 81 cm².",
        ],
        [
          "A rectangle has area 72 cm² and width 8 cm. What is its length?",
          ["8 cm", "9 cm", "16 cm", "64 cm"],
          "9 cm",
          "Length is area ÷ width: 72 ÷ 8 = 9 cm.",
        ],
      ],
    ),
    Volume: topic("m-volume", "Volume", YEAR_5_SOURCES.maths, [
      [
        "A solid is made from 4 layers of 6 cubes. How many cubes are used?",
        ["10", "18", "24", "46"],
        "24",
        "Four equal layers of six cubes use 4 × 6 = 24 cubes.",
      ],
      [
        "What is the volume of a cuboid measuring 5 cm by 3 cm by 2 cm?",
        ["10 cm³", "15 cm³", "30 cm³", "60 cm³"],
        "30 cm³",
        "Volume is 5 × 3 × 2 = 30 cubic centimetres.",
      ],
      [
        "Which unit is most suitable for the volume of a small box?",
        ["cm", "cm²", "cm³", "kg"],
        "cm³",
        "Volume is measured in cubic units, such as cubic centimetres.",
      ],
      [
        "A cuboid contains 48 unit cubes arranged in 3 equal layers. How many cubes are in each layer?",
        ["12", "16", "24", "45"],
        "16",
        "48 cubes shared across 3 equal layers gives 48 ÷ 3 = 16 per layer.",
      ],
    ]),
    Angles: topic("m-angle", "Angles", YEAR_5_SOURCES.maths, [
      [
        "Angles around a point total 360°. Three angles are 90°, 110° and 75°. What is the fourth?",
        ["75°", "85°", "95°", "105°"],
        "85°",
        "90 + 110 + 75 = 275, and 360 - 275 = 85°.",
      ],
      [
        "Which angle is reflex?",
        ["80°", "120°", "180°", "225°"],
        "225°",
        "A reflex angle is greater than 180° and less than 360°.",
      ],
      [
        "Two angles on a straight line are in the ratio shown by 72° and a missing angle. What is the missing angle?",
        ["98°", "108°", "118°", "288°"],
        "108°",
        "Angles on a straight line total 180°, so 180 - 72 = 108°.",
      ],
      [
        "An angle is 35° larger than a right angle. What is its size?",
        ["55°", "90°", "115°", "125°"],
        "125°",
        "A right angle is 90°, and 90 + 35 = 125°.",
      ],
    ]),
    "Shape Properties": topic(
      "m-shape",
      "Properties of shapes",
      YEAR_5_SOURCES.maths,
      [
        [
          "Which quadrilateral always has four equal sides and four right angles?",
          ["Kite", "Parallelogram", "Rectangle", "Square"],
          "Square",
          "A square has four equal sides and four right angles.",
        ],
        [
          "How many lines of symmetry does a regular pentagon have?",
          ["1", "2", "5", "10"],
          "5",
          "A regular pentagon has one line of symmetry through each vertex and the opposite side.",
        ],
        [
          "Which statement is always true for a parallelogram?",
          [
            "All sides are equal",
            "Opposite sides are parallel",
            "It has four right angles",
            "It has exactly one line of symmetry",
          ],
          "Opposite sides are parallel",
          "Both pairs of opposite sides in a parallelogram are parallel.",
        ],
        [
          "A regular polygon has eight equal sides. What is it called?",
          ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
          "Octagon",
          "An octagon is a polygon with eight sides.",
        ],
      ],
    ),
    "Position & Direction": topic(
      "m-position",
      "Position and direction",
      YEAR_5_SOURCES.maths,
      [
        [
          "Point A is at (2, 5). It moves 4 squares right. What are its new coordinates?",
          ["(2, 9)", "(4, 5)", "(6, 5)", "(6, 9)"],
          "(6, 5)",
          "Moving right increases the x-coordinate by 4: 2 + 4 = 6.",
        ],
        [
          "Point B is at (7, 3). It moves 2 squares up. Where does it finish?",
          ["(5, 3)", "(7, 1)", "(7, 5)", "(9, 3)"],
          "(7, 5)",
          "Moving up increases the y-coordinate from 3 to 5.",
        ],
        [
          "A shape is translated 3 left and 1 down. Which coordinate change describes this?",
          ["(-3, -1)", "(-3, 1)", "(1, -3)", "(3, 1)"],
          "(-3, -1)",
          "Left decreases x by 3 and down decreases y by 1.",
        ],
        [
          "Which point shares the same x-coordinate as (4, 8)?",
          ["(2, 8)", "(4, 1)", "(8, 2)", "(8, 4)"],
          "(4, 1)",
          "The x-coordinate is the first number, so both points must begin with 4.",
        ],
      ],
    ),
    "Line Graphs": topic("m-line", "Line graphs", YEAR_5_SOURCES.maths, [
      [
        "A line graph shows 12°C at 9am and 18°C at noon. What was the increase?",
        ["3°C", "6°C", "12°C", "30°C"],
        "6°C",
        "The increase is 18 - 12 = 6°C.",
      ],
      [
        "Why are plotted points joined on a line graph of temperature over time?",
        [
          "To decorate the graph",
          "Because the data changes continuously",
          "To hide missing values",
          "Because every graph needs a line",
        ],
        "Because the data changes continuously",
        "Joining the points shows how a continuous value changes between measured times.",
      ],
      [
        "A graph rises from 24 visitors on Monday to 39 on Tuesday. How many more visitors came on Tuesday?",
        ["13", "15", "24", "63"],
        "15",
        "39 - 24 = 15 more visitors.",
      ],
      [
        "What should you check before reading a value from a line graph?",
        [
          "The colour of the page",
          "The scale and axis labels",
          "The number of words",
          "The final point only",
        ],
        "The scale and axis labels",
        "The scale and labels tell you what each position and interval represents.",
      ],
    ]),
    "Tables & Timetables": topic(
      "m-table",
      "Tables and timetables",
      YEAR_5_SOURCES.maths,
      [
        [
          "A train leaves at 09:47 and arrives at 11:05. How long is the journey?",
          ["1 h 8 min", "1 h 18 min", "1 h 22 min", "2 h 18 min"],
          "1 h 18 min",
          "It is 13 minutes to 10:00, then 1 hour 5 minutes to 11:05: 1 hour 18 minutes.",
        ],
        [
          "A club table shows 18 children chose art, 14 chose music and 9 chose drama. How many children were counted?",
          ["32", "39", "41", "49"],
          "41",
          "18 + 14 + 9 = 41 children.",
        ],
        [
          "The next bus after 14:35 leaves every 20 minutes. Which is the next departure?",
          ["14:45", "14:50", "14:55", "15:05"],
          "14:55",
          "Adding 20 minutes to 14:35 gives 14:55.",
        ],
        [
          "A two-way table records 12 indoor wins, 8 indoor losses, 15 outdoor wins and 5 outdoor losses. How many games were outdoors?",
          ["13", "20", "27", "40"],
          "20",
          "Outdoor games total 15 wins + 5 losses = 20.",
        ],
      ],
    ),
  },
  English: {
    "Reading: Retrieval & Vocabulary": topic(
      "e-retrieve",
      "Reading retrieval and vocabulary",
      YEAR_5_SOURCES.english,
      [
        [
          "Read: ‘At dawn, Mina fastened her boots and checked the compass.’ What did Mina check?",
          ["Her coat", "Her compass", "Her map", "Her watch"],
          "Her compass",
          "The information is stated directly: Mina checked the compass.",
        ],
        [
          "In ‘the fragile shell cracked’, what does fragile most nearly mean?",
          ["Bright", "Easily broken", "Heavy", "Rough"],
          "Easily broken",
          "Fragile describes something that can be broken or damaged easily.",
        ],
        [
          "Read: ‘The path narrowed beside the roaring waterfall.’ Which word describes the sound?",
          ["Beside", "Narrowed", "Path", "Roaring"],
          "Roaring",
          "Roaring describes the loud sound made by the waterfall.",
        ],
        [
          "Which detail would best answer the retrieval question ‘When did the ship leave?’",
          [
            "At sunrise",
            "Because of the tide",
            "From the harbour",
            "With three sailors",
          ],
          "At sunrise",
          "A question beginning with when needs a time detail.",
        ],
      ],
    ),
    "Reading: Inference & Prediction": topic(
      "e-infer",
      "Reading inference and prediction",
      YEAR_5_SOURCES.english,
      [
        [
          "Read: ‘Leo tucked the torn letter behind his back when Mum entered.’ What can you infer?",
          [
            "Leo wants to hide the letter",
            "Leo has finished reading",
            "Mum wrote the letter",
            "The letter is a map",
          ],
          "Leo wants to hide the letter",
          "Hiding it behind his back suggests Leo does not want Mum to see it.",
        ],
        [
          "Read: ‘Clouds swallowed the sun and the picnic blanket began to flap.’ What is most likely next?",
          [
            "It may rain",
            "It will become hotter",
            "Night will end",
            "The wind will stop",
          ],
          "It may rain",
          "Dark clouds and rising wind are clues that rain may be approaching.",
        ],
        [
          "Read: ‘Aisha reread the instructions, bit her lip and reached for the screwdriver.’ How is she probably feeling?",
          ["Bored", "Careful or uncertain", "Furious", "Sleepy"],
          "Careful or uncertain",
          "Rereading and biting her lip suggest she wants to avoid a mistake.",
        ],
        [
          "Which answer gives evidence for an inference?",
          [
            "He was nervous because his hands shook",
            "He was nervous because I think so",
            "He was nervous because the book is long",
            "He was nervous because it rhymes",
          ],
          "He was nervous because his hands shook",
          "An inference should be supported by a clue from the text.",
        ],
      ],
    ),
    "Reading: Summary & Themes": topic(
      "e-summary",
      "Reading summary and themes",
      YEAR_5_SOURCES.english,
      [
        [
          "Which is the best summary of a chapter in which a lost dog follows clues and returns home?",
          [
            "A dog has brown fur",
            "A lost dog solves clues to find its way home",
            "There are three clues near a park",
            "The owner eats breakfast",
          ],
          "A lost dog solves clues to find its way home",
          "A good summary captures the main character, problem and outcome without minor details.",
        ],
        [
          "A story repeatedly shows characters sharing scarce food. Which theme is strongest?",
          ["Courage", "Generosity", "Jealousy", "Technology"],
          "Generosity",
          "Sharing something scarce develops the theme of generosity.",
        ],
        [
          "Which detail should usually be left out of a short summary?",
          [
            "The main problem",
            "The key outcome",
            "A minor character’s shoe colour",
            "The central event",
          ],
          "A minor character’s shoe colour",
          "A short summary focuses on important ideas rather than small descriptive details.",
        ],
        [
          "Two characters fail alone but succeed when they cooperate. Which message does this suggest?",
          [
            "Winning is easy",
            "Teamwork can solve problems",
            "Rules never matter",
            "Travel is dangerous",
          ],
          "Teamwork can solve problems",
          "Their success through cooperation supports a theme about teamwork.",
        ],
      ],
    ),
    "Writing for Audience & Purpose": topic(
      "e-audience",
      "Writing for audience and purpose",
      YEAR_5_SOURCES.english,
      [
        [
          "Which opening best suits an email asking a headteacher for permission?",
          [
            "Hey there!",
            "Dear Headteacher,",
            "Once upon a time,",
            "Guess what?",
          ],
          "Dear Headteacher,",
          "A formal letter needs a polite, appropriate greeting.",
        ],
        [
          "Which feature is most useful in instructions?",
          [
            "Commands in clear steps",
            "A surprise ending",
            "Dialogue",
            "Rhyme only",
          ],
          "Commands in clear steps",
          "Instructions guide the reader with ordered steps and imperative verbs.",
        ],
        [
          "A wildlife leaflet is written for younger children. Which sentence is most suitable?",
          [
            "Avian biodiversity is ecologically consequential.",
            "Look up—garden birds are busy building nests!",
            "Herewith is the ornithological analysis.",
            "The data are appended below pursuant to section four.",
          ],
          "Look up—garden birds are busy building nests!",
          "The vocabulary and lively tone suit a young audience.",
        ],
        [
          "Which purpose usually needs evidence and persuasive language?",
          ["A diary entry", "A campaign speech", "A recipe", "A riddle"],
          "A campaign speech",
          "A campaign speech aims to convince an audience using reasons and evidence.",
        ],
      ],
    ),
    "Planning, Editing & Proofreading": topic(
      "e-edit",
      "Planning, editing and proofreading",
      YEAR_5_SOURCES.english,
      [
        [
          "What should a writer decide during planning?",
          [
            "The audience, purpose and structure",
            "Only the final punctuation mark",
            "The page colour",
            "How quickly to finish",
          ],
          "The audience, purpose and structure",
          "Planning establishes who the writing is for, why it is written and how ideas will be organised.",
        ],
        [
          "Which revision improves ‘The dog went across the field’ with precise detail?",
          [
            "The dog was a dog in a field.",
            "The muddy spaniel bounded across the frosty field.",
            "The field went across the dog.",
            "Dog field across went.",
          ],
          "The muddy spaniel bounded across the frosty field.",
          "Specific nouns, an adjective and a precise verb create a clearer image.",
        ],
        [
          "What is proofreading mainly for?",
          [
            "Finding spelling and punctuation errors",
            "Choosing the whole plot",
            "Changing the audience",
            "Adding every possible adjective",
          ],
          "Finding spelling and punctuation errors",
          "Proofreading is the final careful check for surface errors.",
        ],
        [
          "Which sentence needs a subject–verb agreement correction?",
          [
            "The boxes are heavy.",
            "The basket of apples were full.",
            "The children were ready.",
            "The apple is ripe.",
          ],
          "The basket of apples were full.",
          "The subject is singular basket, so it should say ‘was full’.",
        ],
      ],
    ),
    "Handwriting & Presentation": topic(
      "e-handwriting",
      "Handwriting and presentation",
      YEAR_5_SOURCES.english,
      [
        [
          "Why should letters be a consistent size in joined handwriting?",
          [
            "To make writing readable",
            "To use more pages",
            "To avoid all punctuation",
            "To make every word identical",
          ],
          "To make writing readable",
          "Consistent letter size and spacing help readers recognise words easily.",
        ],
        [
          "Which presentation choice best helps a reader scan an information page?",
          [
            "Clear headings",
            "No paragraph breaks",
            "Tiny writing",
            "Random capitals",
          ],
          "Clear headings",
          "Headings organise information and help readers find sections quickly.",
        ],
        [
          "When might an unjoined capital letter be appropriate?",
          [
            "At the start of a proper noun",
            "In the middle of every word",
            "Instead of every full stop",
            "Only when writing numbers",
          ],
          "At the start of a proper noun",
          "Capital letters are normally unjoined and mark sentence starts and proper nouns.",
        ],
        [
          "What makes a handwritten paragraph easiest to follow?",
          [
            "Even spacing and a clear paragraph start",
            "Words overlapping",
            "Changing size on every line",
            "Removing margins",
          ],
          "Even spacing and a clear paragraph start",
          "Consistent spacing and visible paragraphing improve legibility and structure.",
        ],
      ],
    ),
    Cohesion: topic("e-cohesion", "Cohesion", YEAR_5_SOURCES.english, [
      [
        "Which linking word best shows contrast? ‘The path was steep; ___, we continued.’",
        ["for example", "however", "meanwhile", "therefore"],
        "however",
        "However signals a contrast between the difficulty and the decision to continue.",
      ],
      [
        "Which pronoun can replace ‘the red bicycle’ in the next sentence?",
        ["he", "it", "she", "they"],
        "it",
        "The singular object ‘bicycle’ can be referred to with the pronoun it.",
      ],
      [
        "Which phrase helps connect events by time?",
        [
          "As a result",
          "In contrast",
          "Later that afternoon",
          "For this reason",
        ],
        "Later that afternoon",
        "The phrase signals when the next event happens.",
      ],
      [
        "Why might a writer repeat a key noun instead of using a pronoun?",
        [
          "To remove meaning",
          "To avoid confusion about who or what is meant",
          "To make every sentence longer",
          "To change the tense",
        ],
        "To avoid confusion about who or what is meant",
        "Repeating the noun can make the reference clear when several possible subjects appear.",
      ],
    ]),
    "Spelling Patterns": topic(
      "e-spelling",
      "Spelling patterns",
      YEAR_5_SOURCES.english,
      [
        [
          "Which word is spelled correctly?",
          ["accomodate", "accommodate", "acommodate", "accommadate"],
          "accommodate",
          "Accommodate has two c letters and two m letters.",
        ],
        [
          "Which word contains the letter string ‘ough’ pronounced as in ‘off’?",
          ["although", "bough", "cough", "through"],
          "cough",
          "In cough, ‘ough’ is pronounced with an ‘off’ sound.",
        ],
        [
          "Which spelling completes the sentence? ‘Please ___ the parcel.’",
          ["receive", "recieve", "receeve", "receve"],
          "receive",
          "Receive is spelled r-e-c-e-i-v-e.",
        ],
        [
          "Which word has a silent first letter?",
          ["gnaw", "grow", "glow", "goal"],
          "gnaw",
          "The g in gnaw is written but not pronounced.",
        ],
      ],
    ),
    "Suffixes: -ate, -ise, -ify": topic(
      "e-suffix",
      "Suffixes -ate, -ise and -ify",
      YEAR_5_SOURCES.english,
      [
        [
          "Which verb means ‘to make something simple’?",
          ["simpleate", "simplify", "simplise", "simplicity"],
          "simplify",
          "Adding -ify to simple forms the verb simplify.",
        ],
        [
          "Which suffix turns ‘modern’ into a verb meaning ‘make modern’?",
          ["-ate", "-ful", "-ify", "-ise"],
          "-ise",
          "Modernise means to make something modern.",
        ],
        [
          "Which word is a verb ending in -ate?",
          ["active", "activate", "action", "actively"],
          "activate",
          "Activate is a verb formed with the suffix -ate.",
        ],
        [
          "Which sentence uses ‘classify’ correctly?",
          [
            "We classify the shells into groups.",
            "The classify shell was blue.",
            "She wore a classify.",
            "It was very classify outside.",
          ],
          "We classify the shells into groups.",
          "Classify is a verb meaning to arrange things into groups.",
        ],
      ],
    ),
    "Relative Clauses": topic(
      "e-relative",
      "Relative clauses",
      YEAR_5_SOURCES.english,
      [
        [
          "Which relative pronoun best completes: ‘The author, ___ book won, smiled.’?",
          ["that", "where", "whose", "which"],
          "whose",
          "Whose shows that the book belongs to the author.",
        ],
        [
          "Which words form the relative clause? ‘The bridge, which crossed the gorge, shook.’",
          [
            "The bridge",
            "which crossed the gorge",
            "crossed the gorge shook",
            "The bridge shook",
          ],
          "which crossed the gorge",
          "The relative clause begins with which and adds information about the bridge.",
        ],
        [
          "Which sentence uses a relative clause to add detail?",
          [
            "The fox ran quickly.",
            "The fox, which had a white tail, ran quickly.",
            "Quickly ran the fox.",
            "The fox and the badger ran.",
          ],
          "The fox, which had a white tail, ran quickly.",
          "The clause ‘which had a white tail’ adds information about the fox.",
        ],
        [
          "Which relative word refers to a place?",
          ["when", "where", "which", "who"],
          "where",
          "Where can introduce a relative clause about a place.",
        ],
      ],
    ),
    "Modal Verbs": topic("e-modal", "Modal verbs", YEAR_5_SOURCES.english, [
      [
        "Which modal verb shows the greatest certainty?",
        ["might", "must", "could", "may"],
        "must",
        "Must expresses stronger certainty or obligation than might, could or may.",
      ],
      [
        "Which sentence uses a modal verb to show possibility?",
        [
          "It might snow tonight.",
          "It snowed last night.",
          "Snow covered the road.",
          "Snow is cold.",
        ],
        "It might snow tonight.",
        "Might is a modal verb that signals possibility.",
      ],
      [
        "Which modal verb best completes polite advice? ‘You ___ check your answer again.’",
        ["did", "has", "should", "was"],
        "should",
        "Should is a modal verb commonly used to give advice.",
      ],
      [
        "How does changing ‘will’ to ‘could’ affect a sentence?",
        [
          "It makes the event less certain",
          "It changes it to past tense",
          "It removes the verb",
          "It makes it a question",
        ],
        "It makes the event less certain",
        "Will suggests a likely future event, while could presents a possibility.",
      ],
    ]),
    Parenthesis: topic("e-parenthesis", "Parenthesis", YEAR_5_SOURCES.english, [
      [
        "Which punctuation pair can mark parenthesis?",
        ["Apostrophes", "Brackets", "Full stops", "Question marks"],
        "Brackets",
        "Brackets can enclose extra information that is not essential to the main sentence.",
      ],
      [
        "Which part is parenthetical? ‘The lighthouse—built in 1890—still works.’",
        [
          "The lighthouse",
          "built in 1890",
          "still works",
          "The lighthouse still",
        ],
        "built in 1890",
        "The dashes enclose the extra information ‘built in 1890’.",
      ],
      [
        "Which sentence punctuates parenthesis correctly?",
        [
          "My aunt (a keen cyclist) crossed France.",
          "My aunt (a keen cyclist crossed France.",
          "My aunt a keen cyclist) crossed France.",
          "My aunt, (a keen cyclist crossed France).",
        ],
        "My aunt (a keen cyclist) crossed France.",
        "Both brackets correctly surround the removable extra detail.",
      ],
      [
        "What remains if the parenthesis is removed from ‘The puppy, exhausted after its walk, slept’?",
        [
          "The puppy slept.",
          "Exhausted slept.",
          "After its walk.",
          "The puppy exhausted.",
        ],
        "The puppy slept.",
        "Parenthetical information can be removed while leaving a complete main sentence.",
      ],
    ]),
    "Commas & Punctuation": topic(
      "e-punctuation",
      "Commas and punctuation",
      YEAR_5_SOURCES.english,
      [
        [
          "Which sentence uses a comma to avoid ambiguity?",
          [
            "After eating the children played.",
            "After eating, the children played.",
            "After, eating the children played.",
            "After eating the, children played.",
          ],
          "After eating, the children played.",
          "The comma separates the introductory phrase and makes clear that the children were not eaten.",
        ],
        [
          "Which punctuation best separates two closely related main clauses?",
          ["Apostrophe", "Hyphen", "Semicolon", "Speech mark"],
          "Semicolon",
          "A semicolon can join two closely related independent clauses.",
        ],
        [
          "Which sentence uses a colon correctly?",
          [
            "Pack three things: water, a map and a torch.",
            "Pack: three things water, a map and a torch.",
            "Pack three: things water a map and a torch.",
            "Pack three things water: a map: and a torch.",
          ],
          "Pack three things: water, a map and a torch.",
          "The colon introduces the list promised by the complete clause before it.",
        ],
        [
          "Where should the comma go? ‘Although it was late we finished the puzzle.’",
          [
            "Although, it was late we finished the puzzle.",
            "Although it was, late we finished the puzzle.",
            "Although it was late, we finished the puzzle.",
            "Although it was late we, finished the puzzle.",
          ],
          "Although it was late, we finished the puzzle.",
          "A comma separates the opening subordinate clause from the main clause.",
        ],
      ],
    ),
    "Verb Tenses & Agreement": topic(
      "e-tense",
      "Verb tenses and agreement",
      YEAR_5_SOURCES.english,
      [
        [
          "Which sentence is in the present perfect tense?",
          [
            "I finish my work.",
            "I finished my work.",
            "I have finished my work.",
            "I will finish my work.",
          ],
          "I have finished my work.",
          "Present perfect uses has or have with a past participle.",
        ],
        [
          "Which verb agrees with the subject? ‘The collection of shells ___ valuable.’",
          ["are", "be", "is", "were"],
          "is",
          "The subject collection is singular, so it takes is.",
        ],
        [
          "Which sentence keeps a consistent past tense?",
          [
            "She opened the gate and walks inside.",
            "She opens the gate and walked inside.",
            "She opened the gate and walked inside.",
            "She will open the gate and walked inside.",
          ],
          "She opened the gate and walked inside.",
          "Both verbs are in the simple past tense.",
        ],
        [
          "Which sentence uses the past progressive?",
          [
            "They climbed.",
            "They had climbed.",
            "They were climbing.",
            "They will climb.",
          ],
          "They were climbing.",
          "Past progressive uses was or were plus the -ing form.",
        ],
      ],
    ),
    "Active & Passive Voice": topic(
      "e-voice",
      "Active and passive voice",
      YEAR_5_SOURCES.english,
      [
        [
          "A science report focuses on the result. Which sentence uses passive voice?",
          [
            "The chef baked the bread.",
            "The bread was baked by the chef.",
            "The chef is baking.",
            "Bake the bread.",
          ],
          "The bread was baked by the chef.",
          "The receiver of the action, the bread, is the subject of the passive sentence.",
        ],
        [
          "Change to active voice: ‘The window was opened by Ravi.’",
          [
            "Ravi opened the window.",
            "The window opened Ravi.",
            "Ravi was opened by the window.",
            "Opening the window by Ravi.",
          ],
          "Ravi opened the window.",
          "In active voice, Ravi performs the action.",
        ],
        [
          "Why might a report use passive voice?",
          [
            "To focus on the action or result",
            "To remove every verb",
            "To make the text rhyme",
            "To turn facts into questions",
          ],
          "To focus on the action or result",
          "Passive voice can foreground what happened when the doer is unknown or less important.",
        ],
        [
          "Which option puts the birds, the doers, in the active position?",
          [
            "The nest was built by the birds.",
            "The trophy was lifted.",
            "The birds built the nest.",
            "The race was won by Asha.",
          ],
          "The birds built the nest.",
          "The subject, the birds, directly performs the action.",
        ],
      ],
    ),
    Vocabulary: topic("e-vocab", "Vocabulary", YEAR_5_SOURCES.english, [
      [
        "Which word is the strongest synonym for ‘walked slowly’?",
        ["dashed", "plodded", "skipped", "sprinted"],
        "plodded",
        "Plodded suggests walking slowly and heavily.",
      ],
      [
        "What does the prefix ‘anti-’ mean in ‘antisocial’?",
        ["again", "against", "before", "small"],
        "against",
        "The prefix anti- means against or opposed to.",
      ],
      [
        "Which word has the most positive connotation?",
        ["bony", "scrawny", "slender", "skinny"],
        "slender",
        "Slender often suggests an attractively slim shape, while the others can sound negative.",
      ],
      [
        "In ‘the moon was a silver coin’, which technique is used?",
        ["Alliteration", "Metaphor", "Onomatopoeia", "Rhetorical question"],
        "Metaphor",
        "The moon is directly described as a silver coin without using like or as.",
      ],
    ]),
    "Speaking & Presenting": topic(
      "e-speaking",
      "Speaking and presenting",
      YEAR_5_SOURCES.english,
      [
        [
          "What helps an audience follow a presentation?",
          [
            "A clear opening and organised points",
            "Speaking as quickly as possible",
            "Reading with no pauses",
            "Turning away while talking",
          ],
          "A clear opening and organised points",
          "A signposted structure helps listeners understand and remember the message.",
        ],
        [
          "Which behaviour shows active listening?",
          [
            "Interrupting immediately",
            "Looking at the speaker and responding to their point",
            "Starting a different conversation",
            "Ignoring questions",
          ],
          "Looking at the speaker and responding to their point",
          "Active listeners attend to what is said and build relevant responses.",
        ],
        [
          "Why should a speaker vary pace and volume?",
          [
            "To emphasise important ideas and keep attention",
            "To make words less clear",
            "To avoid planning",
            "To shorten every sentence",
          ],
          "To emphasise important ideas and keep attention",
          "Controlled pace and volume make meaning clearer and delivery more engaging.",
        ],
        [
          "Which is the best response in a respectful discussion?",
          [
            "You are completely wrong.",
            "I see your point; my evidence suggests another view.",
            "I was not listening.",
            "Only my idea matters.",
          ],
          "I see your point; my evidence suggests another view.",
          "It acknowledges the other speaker and offers a reasoned alternative.",
        ],
      ],
    ),
  },
  Science: {
    "Working Scientifically": topic(
      "s-working",
      "Working scientifically",
      YEAR_5_SOURCES.science,
      [
        [
          "In a test of how ramp height affects travel distance, what should be changed?",
          [
            "The ramp height",
            "The same toy car",
            "The floor surface",
            "The measuring tape",
          ],
          "The ramp height",
          "The independent variable is the one deliberately changed: the ramp height.",
        ],
        [
          "Why should repeated measurements be taken?",
          [
            "To make the table longer",
            "To improve reliability and spot unusual results",
            "To change every variable",
            "To guarantee the prediction",
          ],
          "To improve reliability and spot unusual results",
          "Repeats help reveal variation and allow a representative result to be calculated.",
        ],
        [
          "Which graph is usually best for showing temperature changing over time?",
          ["Line graph", "Pictogram only", "Pie chart", "Venn diagram"],
          "Line graph",
          "A line graph shows continuous change across time.",
        ],
        [
          "A result is very different from all repeats. What should a scientist do first?",
          [
            "Hide it",
            "Check the method and repeat the measurement",
            "Change the prediction",
            "Copy the nearest result",
          ],
          "Check the method and repeat the measurement",
          "An anomalous result should be investigated rather than silently removed.",
        ],
      ],
    ),
    "Earth & Space": topic(
      "s-space",
      "Earth and space",
      YEAR_5_SOURCES.science,
      [
        [
          "Why does the Sun appear to move across the sky?",
          [
            "Earth rotates on its axis",
            "The Sun circles Earth each day",
            "Clouds push the Sun",
            "The Moon moves the Sun",
          ],
          "Earth rotates on its axis",
          "Earth’s rotation makes the Sun appear to travel from east to west.",
        ],
        [
          "Approximately how long does Earth take to orbit the Sun?",
          ["24 hours", "28 days", "365 days", "10 years"],
          "365 days",
          "One orbit of the Sun takes about 365¼ days, defining a year.",
        ],
        [
          "Why does the Moon appear to change shape during a month?",
          [
            "We see different amounts of its sunlit half",
            "The Moon grows and shrinks",
            "Earth’s shadow always covers it",
            "Clouds cut pieces from it",
          ],
          "We see different amounts of its sunlit half",
          "As the Moon orbits Earth, our view of its illuminated half changes.",
        ],
        [
          "Which model best represents the Solar System?",
          [
            "Planets orbit the Sun",
            "The Sun orbits Earth",
            "All planets orbit the Moon",
            "Planets remain in a straight line",
          ],
          "Planets orbit the Sun",
          "The Solar System is heliocentric: its planets orbit the Sun.",
        ],
      ],
    ),
    Forces: topic("s-forces", "Forces", YEAR_5_SOURCES.science, [
      [
        "What force slows a cyclist when the brakes press on the wheel?",
        ["Friction", "Gravity", "Magnetism", "Upthrust"],
        "Friction",
        "Friction opposes motion where the brake pads contact the wheel.",
      ],
      [
        "Why does a parachute slow a falling person?",
        [
          "It increases air resistance",
          "It removes gravity",
          "It increases mass",
          "It creates magnetism",
        ],
        "It increases air resistance",
        "The large surface area creates more drag opposing the fall.",
      ],
      [
        "How can a lever help lift a heavy load?",
        [
          "It trades a larger movement for a smaller force",
          "It removes the load’s mass",
          "It stops all gravity",
          "It always makes the load lighter",
        ],
        "It trades a larger movement for a smaller force",
        "A lever provides mechanical advantage, allowing a smaller effort over a greater distance.",
      ],
      [
        "Which surface would usually create the least friction for a sliding block?",
        ["Rough carpet", "Sandpaper", "Smooth ice", "Gravel"],
        "Smooth ice",
        "A smooth icy surface offers less resistance than rough surfaces.",
      ],
    ]),
    "Properties of Materials": topic(
      "s-materials",
      "Properties of materials",
      YEAR_5_SOURCES.science,
      [
        [
          "Which material property is most important for a saucepan handle?",
          [
            "Poor thermal conductivity",
            "High transparency",
            "Magnetism",
            "Solubility",
          ],
          "Poor thermal conductivity",
          "A thermal insulator reduces heat transfer to the person holding the handle.",
        ],
        [
          "Which material is transparent?",
          ["Clear glass", "Cardboard", "Copper sheet", "Wood"],
          "Clear glass",
          "Transparent materials allow light to pass through so objects can be seen clearly.",
        ],
        [
          "A material can be pulled into a wire without snapping. Which property does this show?",
          ["Ductility", "Opacity", "Solubility", "Thermal insulation"],
          "Ductility",
          "Ductile materials can be drawn out into wires.",
        ],
        [
          "Why is copper often used inside electrical cables?",
          [
            "It conducts electricity well",
            "It dissolves in water",
            "It is transparent",
            "It is a gas",
          ],
          "It conducts electricity well",
          "Copper allows electric current to pass through it efficiently.",
        ],
      ],
    ),
    "Reversible Changes": topic(
      "s-reversible",
      "Reversible changes",
      YEAR_5_SOURCES.science,
      [
        [
          "Which change can be reversed by cooling?",
          [
            "Melting chocolate",
            "Burning paper",
            "Baking a cake",
            "Rusting iron",
          ],
          "Melting chocolate",
          "Cooling melted chocolate makes it solid again without creating a new substance.",
        ],
        [
          "How can dissolved salt be recovered from salt water?",
          [
            "Evaporate the water",
            "Filter it immediately",
            "Freeze the salt",
            "Add more water",
          ],
          "Evaporate the water",
          "When the water evaporates, solid salt crystals remain.",
        ],
        [
          "Which process separates an insoluble solid from a liquid?",
          ["Condensation", "Filtration", "Melting", "Rusting"],
          "Filtration",
          "A filter traps insoluble solid particles while the liquid passes through.",
        ],
        [
          "Why is dissolving sugar in water a reversible change?",
          [
            "The sugar can be recovered by evaporation",
            "A new gas is always made",
            "The sugar disappears forever",
            "The water becomes a solid",
          ],
          "The sugar can be recovered by evaporation",
          "Dissolving does not make a new substance, and the components can be separated.",
        ],
      ],
    ),
    "Life Cycles": topic("s-cycles", "Life cycles", YEAR_5_SOURCES.science, [
      [
        "Which stage comes after a butterfly larva?",
        ["Adult", "Egg", "Pupa", "Seed"],
        "Pupa",
        "A butterfly develops from egg to larva, then pupa, then adult.",
      ],
      [
        "What is one difference between amphibian and mammal reproduction?",
        [
          "Many amphibians lay eggs in water",
          "All mammals lay jelly-like eggs",
          "Amphibians feed young with milk",
          "Mammals begin as tadpoles",
        ],
        "Many amphibians lay eggs in water",
        "Many amphibians have aquatic eggs and larvae, while mammals usually develop differently.",
      ],
      [
        "Which part of a flowering plant produces pollen?",
        ["Anther", "Petal", "Root", "Sepal"],
        "Anther",
        "The anther is the pollen-producing part of the stamen.",
      ],
      [
        "Why is seed dispersal useful to a plant?",
        [
          "It reduces competition near the parent plant",
          "It stops all germination",
          "It keeps every seed together",
          "It removes the need for water",
        ],
        "It reduces competition near the parent plant",
        "Dispersal helps offspring reach new places with space, light, water and nutrients.",
      ],
    ]),
    "Human Development": topic(
      "s-development",
      "Human development",
      YEAR_5_SOURCES.science,
      [
        [
          "Which sequence shows the human life cycle in order?",
          [
            "Infant, child, adolescent, adult, older adult",
            "Child, infant, adult, adolescent, older adult",
            "Infant, adult, child, older adult, adolescent",
            "Adolescent, infant, child, adult, older adult",
          ],
          "Infant, child, adolescent, adult, older adult",
          "Humans grow through infancy, childhood, adolescence, adulthood and older age.",
        ],
        [
          "What happens during adolescence?",
          [
            "The body develops towards adulthood",
            "A person becomes an infant",
            "Growth stops completely",
            "All people change at exactly the same time",
          ],
          "The body develops towards adulthood",
          "Puberty brings physical and emotional changes as the body matures.",
        ],
        [
          "Why are growth charts based on many measurements?",
          [
            "People grow at different rates",
            "Everyone has identical height",
            "One measurement predicts every person",
            "Age never affects growth",
          ],
          "People grow at different rates",
          "Data from many people shows the range and pattern of typical development.",
        ],
        [
          "Which statement about human development is accurate?",
          [
            "Changes happen gradually and timing varies",
            "Everyone develops on the same birthday",
            "Adults never change",
            "Children become adults overnight",
          ],
          "Changes happen gradually and timing varies",
          "Development follows broad stages, but individuals change at different times and rates.",
        ],
      ],
    ),
  },
  History: {
    "Historical Enquiry": topic(
      "h-enquiry",
      "Historical enquiry",
      YEAR_5_SOURCES.history,
      [
        [
          "Which is a primary source for studying a Victorian child?",
          [
            "A diary written by the child",
            "A modern textbook",
            "A recent documentary",
            "A website summary",
          ],
          "A diary written by the child",
          "A source created by someone at the time is a primary source.",
        ],
        [
          "Why should historians compare several sources?",
          [
            "Sources may offer different evidence and viewpoints",
            "The oldest source is always wrong",
            "Every source says exactly the same thing",
            "Comparing removes the need for questions",
          ],
          "Sources may offer different evidence and viewpoints",
          "Comparison helps historians test claims and recognise perspective or gaps.",
        ],
        [
          "A source was made to persuade people during a war. What should a historian consider?",
          [
            "Its purpose and possible bias",
            "Only its colour",
            "Its price today",
            "Whether it rhymes",
          ],
          "Its purpose and possible bias",
          "The creator’s purpose can influence what a source includes or leaves out.",
        ],
        [
          "Which question helps judge a source’s reliability?",
          [
            "Who created it, when and why?",
            "Is it the longest source?",
            "Does it use my favourite font?",
            "Can it answer every question?",
          ],
          "Who created it, when and why?",
          "Origin, date and purpose are key evidence when evaluating a source.",
        ],
      ],
    ),
    "Ancient Greece": topic(
      "h-greece",
      "Ancient Greece",
      YEAR_5_SOURCES.history,
      [
        [
          "What was a Greek polis?",
          ["A city-state", "A farming tool", "A god", "A type of ship"],
          "A city-state",
          "Ancient Greece was organised into independent city-states called poleis.",
        ],
        [
          "How did democracy in ancient Athens differ from UK democracy today?",
          [
            "Only some male citizens could participate directly",
            "Every adult could vote online",
            "A king made every decision",
            "Children elected the army",
          ],
          "Only some male citizens could participate directly",
          "Women, enslaved people and foreigners were excluded from Athenian citizenship.",
        ],
        [
          "Which event began in ancient Greece?",
          [
            "The Olympic Games",
            "The football World Cup",
            "The Tour de France",
            "The space race",
          ],
          "The Olympic Games",
          "Athletic festivals at Olympia inspired the modern Olympic Games.",
        ],
        [
          "Why are Greek myths useful to historians?",
          [
            "They reveal beliefs and values",
            "They are exact photographs",
            "They list every citizen",
            "They prove every monster existed",
          ],
          "They reveal beliefs and values",
          "Myths show how Greeks explained the world and represented ideals, fears and gods.",
        ],
      ],
    ),
    "The Vikings": topic("h-vikings", "The Vikings", YEAR_5_SOURCES.history, [
      [
        "Why were Viking longships effective?",
        [
          "They could travel at sea and in shallow rivers",
          "They were made of stone",
          "They needed no crew",
          "They only sailed backwards",
        ],
        "They could travel at sea and in shallow rivers",
        "Their shallow hulls and sails made longships fast and flexible for travel and raids.",
      ],
      [
        "Which place-name ending can be evidence of Viking settlement?",
        ["-by", "-opolis", "-ville", "-burgum"],
        "-by",
        "The Old Norse ending -by means a farmstead or village and survives in names such as Whitby and Derby.",
      ],
      [
        "Which evidence shows Vikings were also settlers and traders?",
        [
          "Farms, workshops and traded objects",
          "Only battle stories",
          "Modern films",
          "Empty fields with no finds",
        ],
        "Farms, workshops and traded objects",
        "Settlement remains and goods from distant places show everyday life and trade networks.",
      ],
      [
        "Which ruler is linked with resisting Viking attacks and organising Wessex?",
        [
          "Alfred the Great",
          "Julius Caesar",
          "Queen Victoria",
          "William Shakespeare",
        ],
        "Alfred the Great",
        "Alfred defended Wessex and reached agreements with Viking leaders.",
      ],
    ]),
    "The Victorians": topic(
      "h-victorians",
      "The Victorians",
      YEAR_5_SOURCES.history,
      [
        [
          "Why did many British towns grow quickly during the Victorian era?",
          [
            "Factories attracted workers",
            "All farms closed in one day",
            "Railways were forbidden",
            "People stopped making goods",
          ],
          "Factories attracted workers",
          "Industrial jobs drew people to rapidly expanding towns and cities.",
        ],
        [
          "How did railways change Victorian Britain?",
          [
            "People and goods travelled farther and faster",
            "Journeys became possible only on foot",
            "Trade between towns stopped",
            "Clocks were no longer needed",
          ],
          "People and goods travelled farther and faster",
          "The railway network connected markets, workplaces and communities.",
        ],
        [
          "Which source could reveal conditions in a Victorian factory?",
          [
            "An inspector’s report from the time",
            "A Roman coin",
            "A medieval castle plan",
            "A future weather forecast",
          ],
          "An inspector’s report from the time",
          "Contemporary inspection evidence can describe hours, safety and working conditions.",
        ],
        [
          "Why were public-health reforms introduced in Victorian cities?",
          [
            "Overcrowding and poor sanitation spread disease",
            "Cities had too many parks",
            "People wanted dirtier water",
            "Factories produced no waste",
          ],
          "Overcrowding and poor sanitation spread disease",
          "Reformers improved sewers, water and housing as evidence linked sanitation to health.",
        ],
      ],
    ),
    "Victorian Schools": topic(
      "h-schools",
      "Victorian schools",
      YEAR_5_SOURCES.history,
      [
        [
          "What did the 1870 Education Act help establish in England and Wales?",
          [
            "More elementary schools",
            "Universities for every infant",
            "The end of all lessons",
            "Online classrooms",
          ],
          "More elementary schools",
          "The Act enabled elected school boards to provide schools where places were lacking.",
        ],
        [
          "Which object was commonly used for writing practice in a Victorian classroom?",
          [
            "Slate and chalk",
            "Tablet computer",
            "Ballpoint pen",
            "Whiteboard marker",
          ],
          "Slate and chalk",
          "Reusable slates were a practical writing surface for many pupils.",
        ],
        [
          "Why might a school logbook be valuable historical evidence?",
          [
            "It records events and attendance at the time",
            "It predicts future inventions",
            "It contains every child’s thoughts",
            "It is always completely unbiased",
          ],
          "It records events and attendance at the time",
          "A contemporary logbook offers direct evidence, though its author’s viewpoint still matters.",
        ],
        [
          "Which statement best reflects Victorian schooling over the whole era?",
          [
            "Access expanded, but experiences varied by time, place, class and gender",
            "Every school was identical",
            "No child learned to read",
            "All lessons used computers",
          ],
          "Access expanded, but experiences varied by time, place, class and gender",
          "Schooling changed substantially during Victoria’s reign and was not the same for every child.",
        ],
      ],
    ),
    "The Maya Calendar": topic(
      "h-maya",
      "The Maya calendar",
      YEAR_5_SOURCES.history,
      [
        [
          "Why did the Maya use more than one calendar?",
          [
            "Different cycles served ritual and everyday purposes",
            "They could not count days",
            "Each city had only one week",
            "The Sun changed speed daily",
          ],
          "Different cycles served ritual and everyday purposes",
          "Maya calendar systems tracked interlocking religious, agricultural and longer time cycles.",
        ],
        [
          "How many days were in the Maya Haab solar cycle?",
          ["260", "360", "365", "400"],
          "365",
          "The Haab approximated the solar year with 365 days.",
        ],
        [
          "What was the Tzolk’in?",
          [
            "A 260-day ritual calendar",
            "A stone weapon",
            "A farming village",
            "A European clock",
          ],
          "A 260-day ritual calendar",
          "The Tzolk’in combined number and day-name cycles across 260 days.",
        ],
        [
          "What does Maya calendar knowledge suggest about Maya society?",
          [
            "They developed detailed mathematics and astronomy",
            "They never observed the sky",
            "They had no number system",
            "They measured only hours",
          ],
          "They developed detailed mathematics and astronomy",
          "Tracking complex time cycles required careful observation, recording and calculation.",
        ],
      ],
    ),
  },
  Geography: {
    "Maps & Grid References": topic(
      "g-maps",
      "Maps and grid references",
      YEAR_5_SOURCES.geography,
      [
        [
          "In a four-figure grid reference, which numbers are read first?",
          ["Eastings", "Northings", "The map scale", "The height"],
          "Eastings",
          "Grid references are read along the corridor (eastings) before up the stairs (northings).",
        ],
        [
          "What extra precision does a six-figure grid reference provide?",
          [
            "A location within a grid square",
            "The map’s publication date",
            "The weather forecast",
            "The country’s population",
          ],
          "A location within a grid square",
          "The extra easting and northing digits divide the square into tenths.",
        ],
        [
          "A map scale says 1 cm represents 2 km. Two places are 4.5 cm apart. What is the real distance?",
          ["2.25 km", "6.5 km", "8 km", "9 km"],
          "9 km",
          "4.5 × 2 km = 9 km.",
        ],
        [
          "Why does a map use a key?",
          [
            "To explain symbols and colours",
            "To show only north",
            "To enlarge every road",
            "To hide the scale",
          ],
          "To explain symbols and colours",
          "A key tells the reader what mapped symbols represent.",
        ],
      ],
    ),
    "Latitude, Longitude & Time Zones": topic(
      "g-coordinates",
      "Latitude, longitude and time zones",
      YEAR_5_SOURCES.geography,
      [
        [
          "Which line of latitude is at 0°?",
          ["Equator", "Prime Meridian", "Tropic of Capricorn", "Arctic Circle"],
          "Equator",
          "The Equator is the reference line for latitude at 0°.",
        ],
        [
          "Which line of longitude passes through Greenwich?",
          [
            "Equator",
            "International Date Line",
            "Prime Meridian",
            "Tropic of Cancer",
          ],
          "Prime Meridian",
          "The Prime Meridian at 0° longitude passes through Greenwich in London.",
        ],
        [
          "Why do places east of the UK often experience noon earlier?",
          [
            "Earth rotates from west to east",
            "The Sun moves around Earth daily",
            "Eastern countries are always warmer",
            "Their clocks run faster",
          ],
          "Earth rotates from west to east",
          "As Earth rotates, places farther east face the Sun earlier.",
        ],
        [
          "A location at 20°S is in which hemisphere?",
          ["Eastern", "Northern", "Southern", "Western"],
          "Southern",
          "The S indicates latitude south of the Equator.",
        ],
      ],
    ),
    "Place Comparison": topic(
      "g-compare",
      "Place comparison",
      YEAR_5_SOURCES.geography,
      [
        [
          "Which evidence best compares the climates of two places?",
          [
            "Long-term temperature and rainfall data",
            "One photograph from each place",
            "A single afternoon’s weather",
            "Their names",
          ],
          "Long-term temperature and rainfall data",
          "Climate comparison needs patterns measured over many years.",
        ],
        [
          "What is a human geographical feature?",
          ["A railway", "A river", "A valley", "A volcano"],
          "A railway",
          "Railways are built by people, while the other features form naturally.",
        ],
        [
          "Two coastal towns have different jobs. Which factor might explain the difference?",
          [
            "Ports, tourism and local resources",
            "Their grid-line colour only",
            "The alphabet",
            "The shape of their flags alone",
          ],
          "Ports, tourism and local resources",
          "Employment patterns reflect connections, resources, landscapes and services.",
        ],
        [
          "Why should a place comparison use the same type of data for both places?",
          [
            "To make the comparison fair and meaningful",
            "To ensure both places are identical",
            "To remove all differences",
            "To avoid using evidence",
          ],
          "To make the comparison fair and meaningful",
          "Comparable measures allow similarities and differences to be judged reliably.",
        ],
      ],
    ),
    "Fieldwork & Data": topic(
      "g-fieldwork",
      "Fieldwork and data",
      YEAR_5_SOURCES.geography,
      [
        [
          "Which method could measure traffic flow near a school?",
          [
            "A timed vehicle tally",
            "A soil colour chart",
            "A star map",
            "A family tree",
          ],
          "A timed vehicle tally",
          "Counting vehicles for equal time periods creates comparable traffic data.",
        ],
        [
          "Why should fieldwork observations include the date and time?",
          [
            "Conditions can change",
            "Maps cannot use numbers",
            "It makes every result equal",
            "The location no longer matters",
          ],
          "Conditions can change",
          "Time provides context because weather, traffic and human activity vary.",
        ],
        [
          "Which sampling approach reduces bias in a park survey?",
          [
            "Use points selected by a consistent grid method",
            "Choose only the greenest patch",
            "Record one favourite tree",
            "Ignore inconvenient results",
          ],
          "Use points selected by a consistent grid method",
          "A systematic method samples the wider area rather than only preferred locations.",
        ],
        [
          "After collecting noise levels at several sites, what is a useful next step?",
          [
            "Map and compare the results",
            "Delete the highest value",
            "Change every unit",
            "Guess the conclusion without looking",
          ],
          "Map and compare the results",
          "Displaying results spatially helps reveal patterns and possible explanations.",
        ],
      ],
    ),
    "North & South America": topic(
      "g-americas",
      "North and South America",
      YEAR_5_SOURCES.geography,
      [
        [
          "Which mountain range runs along western South America?",
          ["Andes", "Alps", "Himalayas", "Urals"],
          "Andes",
          "The Andes extend along much of South America’s western edge.",
        ],
        [
          "Which major river basin lies mostly in South America?",
          ["Amazon", "Danube", "Ganges", "Nile"],
          "Amazon",
          "The Amazon basin covers a vast area of northern South America.",
        ],
        [
          "Which city and country are correctly paired in North America?",
          [
            "Toronto — Canada",
            "Lima — Mexico",
            "Santiago — Cuba",
            "Brasília — United States",
          ],
          "Toronto — Canada",
          "Toronto is a major Canadian city in North America.",
        ],
        [
          "Why do the Americas contain many climate zones?",
          [
            "They stretch across a great range of latitudes",
            "Every place has the same elevation",
            "They lie on one small island",
            "Ocean currents never affect them",
          ],
          "They stretch across a great range of latitudes",
          "The continents extend from polar to tropical latitudes and also vary greatly in relief.",
        ],
      ],
    ),
    Biomes: topic("g-biomes", "Biomes", YEAR_5_SOURCES.geography, [
      [
        "Which conditions are typical of a hot desert biome?",
        [
          "Very low rainfall and sparse vegetation",
          "Heavy rain all year and dense forest",
          "Permanent ice everywhere",
          "Mild rain and deciduous woodland only",
        ],
        "Very low rainfall and sparse vegetation",
        "Hot deserts receive little precipitation, so plants and animals need drought adaptations.",
      ],
      [
        "Why do tropical rainforests support high biodiversity?",
        [
          "Warm, wet conditions support growth year-round",
          "They receive no sunlight",
          "They have permanent frozen soil",
          "Only one plant can survive there",
        ],
        "Warm, wet conditions support growth year-round",
        "Reliable warmth, water and layered habitats support many species.",
      ],
      [
        "Which biome has permafrost and a very short growing season?",
        ["Grassland", "Mediterranean", "Tundra", "Tropical rainforest"],
        "Tundra",
        "Tundra has frozen subsoil, low temperatures and a brief summer growing period.",
      ],
      [
        "What mainly determines the plants found in a biome?",
        [
          "Climate, especially temperature and rainfall",
          "Country borders",
          "Road-sign colours",
          "The local currency",
        ],
        "Climate, especially temperature and rainfall",
        "Long-term temperature and precipitation strongly shape vegetation and ecosystems.",
      ],
    ]),
    "Energy Resources": topic(
      "g-energy",
      "Energy resources",
      YEAR_5_SOURCES.geography,
      [
        [
          "Which energy resource is renewable?",
          ["Coal", "Natural gas", "Solar", "Oil"],
          "Solar",
          "Sunlight is continually replenished, unlike finite fossil fuels.",
        ],
        [
          "Why are wind farms often built in exposed places?",
          [
            "Stronger, more reliable winds are available",
            "Wind turbines need coal",
            "There is no weather there",
            "Electricity cannot travel from cities",
          ],
          "Stronger, more reliable winds are available",
          "Open coasts, hills and offshore areas often provide useful wind conditions.",
        ],
        [
          "What is one disadvantage of burning fossil fuels?",
          [
            "It releases greenhouse gases",
            "It produces unlimited fuel",
            "It creates sunlight",
            "It removes air pollution",
          ],
          "It releases greenhouse gases",
          "Burning coal, oil and gas releases carbon dioxide that contributes to climate change.",
        ],
        [
          "Why might a region use a mix of energy sources?",
          [
            "Availability and demand vary over time",
            "Every source works identically",
            "Renewable sources need no landscape",
            "Electricity cannot be shared",
          ],
          "Availability and demand vary over time",
          "A diverse energy mix can balance reliability, cost, resources and environmental impact.",
        ],
      ],
    ),
    "Trade Links": topic(
      "g-trade-links",
      "Trade links",
      YEAR_5_SOURCES.geography,
      [
        [
          "What is an import to the UK?",
          [
            "A product brought into the UK from another country",
            "A product sent from the UK abroad",
            "A product used only where it is made",
            "A map of a port",
          ],
          "A product brought into the UK from another country",
          "Imports are goods or services purchased from another country.",
        ],
        [
          "Why are ports important trade links?",
          [
            "They transfer goods between sea and land transport",
            "They stop all international travel",
            "They grow every imported crop",
            "They set world time zones",
          ],
          "They transfer goods between sea and land transport",
          "Ports connect shipping routes with road and rail distribution networks.",
        ],
        [
          "Which route is most likely for bananas sold in a UK shop?",
          [
            "Farm, packing site, port, ship, UK distribution centre, shop",
            "Shop, farm, Moon, port",
            "UK mine, ship, tropical farm",
            "Factory, glacier, shop",
          ],
          "Farm, packing site, port, ship, UK distribution centre, shop",
          "A supply chain links production, packing, transport, distribution and retail.",
        ],
        [
          "How can transport infrastructure affect trade?",
          [
            "Reliable roads, railways and ports can reduce journey time and cost",
            "It changes every import into an export",
            "It removes the need for workers",
            "It makes distance meaningless",
          ],
          "Reliable roads, railways and ports can reduce journey time and cost",
          "Efficient connections help goods reach markets more quickly and predictably.",
        ],
      ],
    ),
    "Global Trade": topic(
      "g-global-trade",
      "Global trade",
      YEAR_5_SOURCES.geography,
      [
        [
          "What does fair trade aim to improve?",
          [
            "Prices and working conditions for producers",
            "The number of oceans",
            "The length of time zones",
            "The height of mountains",
          ],
          "Prices and working conditions for producers",
          "Fair-trade arrangements aim to make trading relationships fairer for producers and workers.",
        ],
        [
          "Why might a phone contain materials from several countries?",
          [
            "Resources, parts and skills are distributed globally",
            "One country contains every resource equally",
            "Phones are grown on farms",
            "Trade only happens locally",
          ],
          "Resources, parts and skills are distributed globally",
          "Modern supply chains connect raw materials, component factories, assembly and markets.",
        ],
        [
          "What is one possible environmental cost of long supply chains?",
          [
            "Transport emissions",
            "Shorter distances",
            "Less packaging in every case",
            "No energy use",
          ],
          "Transport emissions",
          "Moving goods long distances can use fuel and release greenhouse gases.",
        ],
        [
          "A drought damages a major cocoa-growing region. How could global trade be affected?",
          [
            "Supply may fall and prices may rise",
            "All demand disappears immediately",
            "Cocoa becomes a mineral",
            "Shipping routes stop existing",
          ],
          "Supply may fall and prices may rise",
          "Lower production can reduce global supply while demand remains, putting upward pressure on prices.",
        ],
      ],
    ),
  },
};
