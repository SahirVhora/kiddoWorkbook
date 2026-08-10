import type { Subject, Topic } from "../types";

export type LessonContent = {
  hook: string;
  learn: string[];
  remember: string;
  tryIt: string;
};

// Every Year 5 quest has a topic-specific explanation. This prevents a newly
// added curriculum card from silently falling back to generic learning copy.
export const YEAR_5_LESSONS: Record<string, LessonContent> = {
  "Mathematics:Place Value & Roman Numerals": {
    hook: "Place value gives every digit a job, while Roman numerals use letters to build numbers.",
    learn: [
      "Read large numbers from left to right in groups of three digits.",
      "Use a number line to compare positive and negative numbers in context.",
      "Roman numerals use values such as I, V, X, L, C, D and M.",
    ],
    remember:
      "Place tells value. In Roman numerals, a smaller value before a larger one is subtracted.",
    tryIt:
      "Find a year on a building or TV credits and write it in Roman numerals.",
  },
  "Mathematics:Rounding": {
    hook: "Rounding swaps an exact number for a nearby friendly number that is easier to use.",
    learn: [
      "Choose the place you are rounding to and look one digit to its right.",
      "Digits 0 to 4 round down; digits 5 to 9 round up.",
      "Use estimation to check whether an exact calculation is sensible.",
    ],
    remember:
      "Circle the rounding place, look next door, then keep or add one.",
    tryIt:
      "Estimate the number of pages in three books by rounding each page count first.",
  },
  "Mathematics:Addition & Subtraction": {
    hook: "Addition combines amounts; subtraction finds what is left or the difference between them.",
    learn: [
      "Line up digits by place value before using a written method.",
      "Exchange carefully across columns and record each step.",
      "Estimate first, then use the inverse operation to check the answer.",
    ],
    remember: "Line up the columns and check with the opposite operation.",
    tryIt:
      "Plan a pretend £50,000 playground budget and calculate what remains.",
  },
  "Mathematics:Multiplication & Division": {
    hook: "Multiplication scales equal groups; division shares or finds how many groups fit.",
    learn: [
      "Partition numbers to make mental multiplication easier.",
      "Use a written method when the numbers no longer feel friendly.",
      "A remainder must be interpreted in the context of the problem.",
    ],
    remember: "Multiplication and division are inverse partners.",
    tryIt:
      "Work out how many teams of 6 can be made from different class sizes.",
  },
  "Mathematics:Prime Numbers": {
    hook: "Prime numbers are the secret agents of maths: they only let two factors unlock them.",
    learn: [
      "A prime number has exactly two factors: 1 and itself.",
      "2 is the only even prime number.",
      "1 is not prime because it has only one factor.",
    ],
    remember: "Prime means exactly two factors.",
    tryIt: "Make a number square and circle every prime up to 50.",
  },
  "Mathematics:Square & Cube Numbers": {
    hook: "Square and cube numbers grow from equal rows and equal layers.",
    learn: [
      "A square number is a whole number multiplied by itself.",
      "A cube number is multiplied by itself and then by itself again.",
      "The small raised numbers ² and ³ are called powers.",
    ],
    remember: "Square means two equal factors; cube means three.",
    tryIt: "Build square arrays and cubes with counters or small blocks.",
  },
  "Mathematics:Fractions": {
    hook: "Fractions describe equal parts, but they can also be numbers greater than one.",
    learn: [
      "Equivalent fractions name the same amount with different-sized parts.",
      "Use a common denominator to compare or calculate with fractions.",
      "Find a fraction of an amount by dividing by the denominator first.",
    ],
    remember: "The denominator names the parts; the numerator counts them.",
    tryIt:
      "Cut paper strips into different fractions and match equivalent lengths.",
  },
  "Mathematics:Multiplying Decimals": {
    hook: "Multiplying by 10, 100 or 1,000 changes every digit's place value.",
    learn: [
      "By 10, each digit moves one place to the left.",
      "By 100, each digit moves two places to the left.",
      "Use zero as a placeholder when a place is empty.",
    ],
    remember: "The digits move; the decimal point stays fixed.",
    tryIt: "Turn supermarket prices into the cost of 10 and 100 pretend items.",
  },
  "Mathematics:Percentages": {
    hook: "A percentage is a friendly way to describe a part of a whole out of 100.",
    learn: [
      "The symbol % means out of 100.",
      "50% is one half and 25% is one quarter.",
      "Find 10% by dividing by 10, then build other percentages.",
    ],
    remember: "Percent means per hundred.",
    tryIt: "Shade 10%, 25%, 50% and 75% on a hundred square.",
  },
  "Mathematics:Measurement & Conversions": {
    hook: "Measurement lets us compare the real world using agreed units.",
    learn: [
      "Know the links between common metric units such as km and m.",
      "Choose a sensible unit before measuring or estimating.",
      "Time calculations may cross an hour, day or year boundary.",
    ],
    remember: "Write the conversion fact before doing the calculation.",
    tryIt:
      "Measure five household objects and convert each result into a smaller unit.",
  },
  "Mathematics:Perimeter & Area": {
    hook: "Perimeter follows the edge; area covers the space inside.",
    learn: [
      "Add every outer side to find perimeter.",
      "Multiply length by width for the area of a rectangle.",
      "Equal perimeters do not always mean equal areas.",
    ],
    remember: "Perimeter is around; area is the surface.",
    tryIt:
      "Design two different rectangles with the same perimeter on squared paper.",
  },
  "Mathematics:Volume": {
    hook: "Volume describes how much three-dimensional space an object takes up.",
    learn: [
      "Count cubic units to compare solid shapes.",
      "Estimate capacity using familiar containers.",
      "A cuboid's volume can be found from length × width × height.",
    ],
    remember: "Area uses square units; volume uses cubic units.",
    tryIt: "Estimate and then test how many small cubes fit in a box.",
  },
  "Mathematics:Angles": {
    hook: "Angles measure turns, from tiny changes of direction to a full spin.",
    learn: [
      "A right angle is 90°, a straight angle is 180° and a full turn is 360°.",
      "Acute angles are below 90°; obtuse angles lie between 90° and 180°.",
      "Use known totals to calculate missing angles.",
    ],
    remember: "Right 90, straight 180, full turn 360.",
    tryIt: "Hunt for acute, right and obtuse angles around the room.",
  },
  "Mathematics:Shape Properties": {
    hook: "A shape's properties are the clues that let you name, sort and build it.",
    learn: [
      "Regular polygons have equal sides and equal angles.",
      "Use sides, angles, parallel lines and symmetry to classify 2D shapes.",
      "Connect 2D faces and nets to the 3D shapes they form.",
    ],
    remember: "Describe the properties before naming the shape.",
    tryIt: "Sort household packaging by its faces, edges and vertices.",
  },
  "Mathematics:Position & Direction": {
    hook: "Coordinates are an address for a point, and transformations describe how a shape moves.",
    learn: [
      "Read the x-coordinate before the y-coordinate.",
      "A translation slides every point the same distance and direction.",
      "A reflection flips a shape across a mirror line.",
    ],
    remember: "Along the x-axis, then up the y-axis.",
    tryIt: "Draw a shape on a coordinate grid, then translate and reflect it.",
  },
  "Mathematics:Line Graphs": {
    hook: "A line graph tells a story about how something changes.",
    learn: [
      "Read the title, axes, units and scale first.",
      "Plot each pair of values in the correct position.",
      "Use the pattern to compare, interpolate or spot a change.",
    ],
    remember: "Check the scale before reading the line.",
    tryIt: "Graph the temperature at the same time across one week.",
  },
  "Mathematics:Tables & Timetables": {
    hook: "Tables organise information so patterns, totals and comparisons are easier to find.",
    learn: [
      "Use row and column headings to locate the correct cell.",
      "Read timetable times carefully across hour boundaries.",
      "Combine values only when their categories and units match.",
    ],
    remember: "Headings first, value second, calculation third.",
    tryIt: "Use a local bus or train timetable to plan an imaginary day out.",
  },

  "English:Reading: Retrieval & Vocabulary": {
    hook: "Retrieval finds what a text says; vocabulary work unlocks what its words mean.",
    learn: [
      "Scan for names, dates and key words from the question.",
      "Use nearby clues to work out an unfamiliar word.",
      "Quote or point to the detail that proves an answer.",
    ],
    remember: "Find it, read around it, prove it.",
    tryIt: "Write three retrieval questions for a page of your current book.",
  },
  "English:Reading: Inference & Prediction": {
    hook: "Inference reads between the lines; prediction uses clues to look ahead.",
    learn: [
      "Combine text clues with sensible background knowledge.",
      "Explain how a character's actions or words reveal feelings.",
      "Update a prediction when the text gives new evidence.",
    ],
    remember: "An idea plus evidence makes an inference.",
    tryIt:
      "Pause before a chapter ending, predict what comes next, then check.",
  },
  "English:Reading: Summary & Themes": {
    hook: "A summary keeps the backbone of a text without carrying every tiny detail.",
    learn: [
      "Identify the main idea of each paragraph or section.",
      "Group related ideas and remove repetition.",
      "A theme is a bigger idea explored through characters and events.",
    ],
    remember: "Main ideas, in order, in fewer words.",
    tryIt: "Summarise a chapter in exactly three sentences.",
  },
  "English:Writing for Audience & Purpose": {
    hook: "Good writers change their choices depending on who will read the text and why.",
    learn: [
      "Decide the audience, purpose and form before drafting.",
      "Choose a suitable level of formality and subject vocabulary.",
      "Use text features that help the reader achieve the purpose.",
    ],
    remember:
      "Who is reading, why are they reading, what should they do or know?",
    tryIt: "Describe the same event in a diary entry and a news report.",
  },
  "English:Planning, Editing & Proofreading": {
    hook: "A first draft captures ideas; editing turns them into clear and confident writing.",
    learn: [
      "Plan the order and job of each paragraph.",
      "Edit meaning, structure and word choice before checking small errors.",
      "Proofread spelling, punctuation and grammar at the end.",
    ],
    remember: "Big improvements first; tiny corrections last.",
    tryIt:
      "Use two colours to mark one meaning edit and one accuracy correction.",
  },
  "English:Handwriting & Presentation": {
    hook: "Handwriting works best when clear letter shapes become comfortable and automatic.",
    learn: [
      "Keep letter size, spacing and position on the line consistent.",
      "Join letters when the join supports fluent, legible writing.",
      "Build speed gradually without sacrificing clarity or a relaxed grip.",
    ],
    remember: "Clear first, consistent next, speed with practice.",
    tryIt:
      "Copy one excellent sentence slowly, then repeat it smoothly for one minute.",
  },
  "English:Cohesion": {
    hook: "Cohesion is the invisible thread that helps ideas flow instead of feeling scattered.",
    learn: [
      "Use pronouns and synonyms to refer back without dull repetition.",
      "Choose linking words that show time, cause or contrast.",
      "Open each paragraph so its connection to the last is clear.",
    ],
    remember: "Every sentence should know its neighbour.",
    tryIt: "Reorder a mixed-up paragraph and explain the clues you used.",
  },
  "English:Spelling Patterns": {
    hook: "Spelling becomes easier when you notice word families, roots and reliable patterns.",
    learn: [
      "Break long words into roots, prefixes and suffixes.",
      "Notice silent letters and unusual letter strings.",
      "Check meaning as well as sound when choosing a homophone.",
    ],
    remember: "Look for the word inside the word.",
    tryIt:
      "Build a word family around one root and highlight the part that stays.",
  },
  "English:Suffixes: -ate, -ise, -ify": {
    hook: "The suffixes -ate, -ise and -ify can turn ideas and qualities into actions.",
    learn: [
      "Adding -ate can form verbs such as hyphenate.",
      "Adding -ise can form verbs such as realise.",
      "Adding -ify can form verbs such as clarify.",
    ],
    remember: "A suffix changes a word's job or meaning.",
    tryIt: "Collect five -ate, -ise or -ify verbs and use each in a sentence.",
  },
  "English:Relative Clauses": {
    hook: "A relative clause adds useful detail to a person, place or thing.",
    learn: [
      "Relative clauses often begin with who, which, that, whose or where.",
      "The clause should clearly follow the noun it describes.",
      "Use commas when the clause gives extra, removable information.",
    ],
    remember: "Who for people, which for things, where for places.",
    tryIt: "Add a relative clause to describe your favourite animal.",
  },
  "English:Modal Verbs": {
    hook: "Modal verbs adjust how possible, certain or necessary an idea sounds.",
    learn: [
      "May, might and could show possibility.",
      "Should gives advice; must shows strong necessity.",
      "Choose the modal that matches the exact strength you mean.",
    ],
    remember: "A modal verb turns the certainty dial.",
    tryIt: "Write secret-club rules using might, should and must.",
  },
  "English:Parenthesis": {
    hook: "Parenthesis tucks extra information into a sentence without losing the main idea.",
    learn: [
      "Use a pair of brackets, dashes or commas.",
      "The sentence should still make sense when the extra detail is removed.",
      "Choose punctuation that suits the effect and formality.",
    ],
    remember: "If it is extra, wrap both sides.",
    tryIt: "Describe a magical pet and add one parenthetical detail.",
  },
  "English:Commas & Punctuation": {
    hook: "Punctuation is a set of road signs that keeps a reader on the right meaning.",
    learn: [
      "Use a comma after an opening subordinate clause when it aids clarity.",
      "Use pairs of punctuation around parenthesis.",
      "Reread for ambiguity: one comma can completely change meaning.",
    ],
    remember: "Punctuation serves meaning, not decoration.",
    tryIt: "Find a sentence whose meaning changes when a comma moves.",
  },
  "English:Verb Tenses & Agreement": {
    hook: "Tense places action in time, while agreement keeps subjects and verbs working together.",
    learn: [
      "Keep tense consistent unless time really changes.",
      "Match a singular subject with a singular verb.",
      "Use has or have plus a past participle for the present perfect.",
    ],
    remember: "Who is doing it, and when is it happening?",
    tryIt: "Rewrite a short present-tense paragraph in the past tense.",
  },
  "English:Active & Passive Voice": {
    hook: "Active and passive sentences shine the spotlight on different parts of an event.",
    learn: [
      "Active voice starts with the doer: The dog chased the ball.",
      "Passive voice starts with the receiver: The ball was chased.",
      "Choose passive voice when the action or result matters more than the doer.",
    ],
    remember: "Active spotlights the doer; passive spotlights the receiver.",
    tryIt:
      "Turn five active news sentences into passive ones and compare the focus.",
  },
  "English:Vocabulary": {
    hook: "Precise vocabulary helps a reader see, feel and understand exactly what you mean.",
    learn: [
      "Synonyms are similar, but their strength and tone may differ.",
      "Antonyms show contrasting meanings.",
      "Use dictionaries and thesauruses to check meaning, not just find longer words.",
    ],
    remember: "Choose the right word, not simply the fanciest one.",
    tryIt: "Make a strength ladder from stroll to sprint using movement verbs.",
  },
  "English:Speaking & Presenting": {
    hook: "Speaking well means shaping ideas for listeners and making space for other voices.",
    learn: [
      "Organise points in a clear order and support them with examples.",
      "Adjust vocabulary, volume and pace for the audience.",
      "Listen actively, ask relevant questions and respond respectfully.",
    ],
    remember: "Explain, listen, respond and build on ideas.",
    tryIt:
      "Give a one-minute explanation, then ask your listener which point was clearest.",
  },

  "Science:Working Scientifically": {
    hook: "Scientists ask testable questions and let evidence improve their ideas.",
    learn: [
      "Choose a suitable enquiry and control relevant variables.",
      "Measure accurately, repeat when useful and record units.",
      "Use results to reach a conclusion and evaluate the method.",
    ],
    remember: "Question, method, evidence, conclusion, improvement.",
    tryIt: "Plan a fair test to find which paper makes the strongest bridge.",
  },
  "Science:Earth & Space": {
    hook: "Earth is part of the Solar System, moving through space while it spins.",
    learn: [
      "The Sun is a star at the centre of our Solar System.",
      "Earth's rotation causes day and night.",
      "Earth orbits the Sun while the Moon orbits Earth.",
    ],
    remember: "Spin makes a day; orbit makes a year.",
    tryIt: "Model the Sun, Earth and Moon with three household objects.",
  },
  "Science:Forces": {
    hook: "Forces are pushes and pulls that change motion or shape.",
    learn: [
      "Gravity pulls objects towards Earth.",
      "Friction, air resistance and water resistance oppose motion.",
      "Levers, pulleys and gears can change the effect of a force.",
    ],
    remember: "A force can start, stop, speed up, slow down or turn.",
    tryIt: "Compare how far the same object slides across two surfaces.",
  },
  "Science:Properties of Materials": {
    hook: "A material's properties decide which jobs it can do well.",
    learn: [
      "Compare hardness, transparency, conductivity and response to magnets.",
      "Dissolving forms a solution but the material still exists.",
      "Sieving, filtering and evaporation can separate different mixtures.",
    ],
    remember: "Choose a material because its properties fit the job.",
    tryIt: "Design a test to choose the best thermal insulator for a cup.",
  },
  "Science:Reversible Changes": {
    hook: "Some changes can be undone; others make new materials and cannot easily be reversed.",
    learn: [
      "Melting, freezing and dissolving can be reversible.",
      "Evaporation can recover a dissolved solid.",
      "Burning or reacting materials can create new substances.",
    ],
    remember: "Ask whether the starting material can be recovered.",
    tryIt:
      "List kitchen changes and sort them into reversible and irreversible.",
  },
  "Science:Life Cycles": {
    hook: "Every living thing has a life cycle, but different groups travel through it differently.",
    learn: [
      "Mammals, birds, amphibians and insects reproduce and develop in different ways.",
      "Some insects undergo complete metamorphosis.",
      "Plants reproduce sexually and some can reproduce asexually.",
    ],
    remember: "Life cycles repeat: birth, growth, reproduction and death.",
    tryIt: "Compare a frog life cycle with a butterfly life cycle.",
  },
  "Science:Human Development": {
    hook: "Humans change physically and emotionally from before birth through old age.",
    learn: [
      "The human life cycle includes infancy, childhood, adolescence, adulthood and old age.",
      "Puberty is a normal stage of development with physical and emotional changes.",
      "Different people develop at different rates.",
    ],
    remember: "Development is a life-long process, and variation is normal.",
    tryIt:
      "Create a respectful timeline of skills people may develop at different life stages.",
  },

  "History:Historical Enquiry": {
    hook: "Historians build explanations by questioning sources, not by simply collecting old facts.",
    learn: [
      "Chronology places events and periods in a secure sequence.",
      "Sources reveal evidence but also reflect a creator's viewpoint.",
      "Compare evidence before reaching a supported conclusion.",
    ],
    remember: "Who made it, when, why, and what can it really tell us?",
    tryIt:
      "Choose a household object and write questions a future historian might ask.",
  },
  "History:Ancient Greece": {
    hook: "Ancient Greek city-states developed ideas and achievements that still influence the world.",
    learn: [
      "Athens and Sparta had contrasting societies.",
      "Greek achievements included philosophy, theatre, art and the Olympic Games.",
      "Athenian democracy influenced later systems but excluded many people.",
    ],
    remember: "Compare city-states and trace Greek influence into the present.",
    tryIt: "Design a modern event inspired by the ancient Olympic Games.",
  },
  "History:The Vikings": {
    hook: "Vikings were raiders, traders, explorers, farmers and settlers from Scandinavia.",
    learn: [
      "Longships supported fast travel across seas and rivers.",
      "Viking attacks and settlement changed Anglo-Saxon Britain.",
      "Archaeology and written accounts offer different evidence.",
    ],
    remember: "Viking history is more than raids.",
    tryIt:
      "Plan a longship voyage with supplies justified by evidence about Viking life.",
  },
  "History:The Victorians": {
    hook: "Victorian Britain saw dramatic changes in industry, transport, cities and daily life.",
    learn: [
      "Factories and steam power changed how goods were produced.",
      "Railways connected places and helped towns grow.",
      "Change affected groups differently, including workers and children.",
    ],
    remember: "Ask what changed, what stayed, and who benefited.",
    tryIt: "Compare a Victorian street with the same kind of street today.",
  },
  "History:Victorian Schools": {
    hook: "School records and objects reveal both familiar routines and striking differences in Victorian childhood.",
    learn: [
      "Slates, logbooks and photographs provide evidence.",
      "Attendance and subjects were shaped by work, law and social expectations.",
      "One source never tells every child's story.",
    ],
    remember: "Compare sources before comparing then and now.",
    tryIt: "Create a source-based timetable for a Victorian school day.",
  },
  "History:The Maya Calendar": {
    hook: "Maya scholars used observation, mathematics and writing to organise time and society.",
    learn: [
      "Maya civilisation developed across Mesoamerica.",
      "Calendars supported farming, ceremonies and records.",
      "Writing, architecture and astronomy show a sophisticated society.",
    ],
    remember:
      "Study Maya achievements within their society, not as isolated curiosities.",
    tryIt: "Compare the purpose of a Maya calendar with a calendar used today.",
  },

  "Geography:Maps & Grid References": {
    hook: "Maps turn real places into patterns of symbols, direction, distance and coordinates.",
    learn: [
      "Use eight compass points for precise direction.",
      "Read eastings before northings in grid references.",
      "Keys and scale explain symbols and real-world distance.",
    ],
    remember: "Along the corridor, then up the stairs.",
    tryIt: "Make a map of a familiar route with a key, compass and scale.",
  },
  "Geography:Latitude, Longitude & Time Zones": {
    hook: "Invisible global lines give every place a location and help explain time around Earth.",
    learn: [
      "Latitude measures north or south of the Equator.",
      "Longitude measures east or west of the Prime Meridian.",
      "Earth's rotation explains why local time differs by longitude.",
    ],
    remember: "Latitude is flat; longitude is long from pole to pole.",
    tryIt: "Find the coordinates and current time zone of three world cities.",
  },
  "Geography:Place Comparison": {
    hook: "Comparing places reveals how environment and human choices shape life differently.",
    learn: [
      "Use the same categories to make a fair comparison.",
      "Include physical features, human features and processes.",
      "Support comparisons with maps, images and data.",
    ],
    remember: "Same category, two places, evidence for the difference.",
    tryIt: "Compare your region with a region in North or South America.",
  },
  "Geography:Fieldwork & Data": {
    hook: "Fieldwork turns a real place into evidence you can observe, measure and explain.",
    learn: [
      "Begin with a focused geographical question.",
      "Choose safe methods such as tallies, surveys, sketches or measurements.",
      "Present the data and decide what it shows and what it cannot show.",
    ],
    remember: "Question, collect, present, conclude, evaluate.",
    tryIt:
      "Map noise or footfall at several safe points around your local area.",
  },
  "Geography:North & South America": {
    hook: "The Americas contain many countries, climates, landscapes, cities and cultures.",
    learn: [
      "Locate countries and major cities using maps and atlases.",
      "Recognise physical features such as the Andes and Amazon basin.",
      "Avoid treating either continent as one single culture or environment.",
    ],
    remember: "A continent contains many different regions and stories.",
    tryIt:
      "Create a map journey linking three contrasting regions of the Americas.",
  },
  "Geography:Biomes": {
    hook: "A biome is a large region where climate shapes characteristic plants and animals.",
    learn: [
      "Temperature and rainfall influence vegetation.",
      "Organisms have adaptations suited to their biome.",
      "Biomes can be changed by natural processes and human activity.",
    ],
    remember: "Climate shapes vegetation; vegetation supports life.",
    tryIt: "Invent an animal whose adaptations suit one biome.",
  },
  "Geography:Energy Resources": {
    hook: "Energy choices depend on natural resources, technology, people and environmental impact.",
    learn: [
      "Renewable sources are replenished naturally.",
      "Fossil fuels are finite and release greenhouse gases when burned.",
      "Different locations suit different energy systems.",
    ],
    remember: "Compare availability, reliability, cost and impact.",
    tryIt: "Choose an energy mix for an imaginary island and justify it.",
  },
  "Geography:Trade Links": {
    hook: "Trade connects places because resources, skills and products are distributed unevenly.",
    learn: [
      "Imports come in; exports go out.",
      "A supply chain links source, production, transport and customer.",
      "Trade creates benefits and impacts for people and environments.",
    ],
    remember: "Import in, export out, trace every step.",
    tryIt:
      "Trace the likely supply chain of a fruit, T-shirt or electronic device.",
  },
  "Geography:Global Trade": {
    hook: "A product may cross several borders before it reaches a shop or home.",
    learn: [
      "Raw materials and finished goods often come from different places.",
      "Ports, roads, railways and air routes connect supply chains.",
      "Transport and production choices have social and environmental effects.",
    ],
    remember: "Ask where it came from, who changed it and how it travelled.",
    tryIt:
      "Investigate the country labels on five household objects and map them.",
  },
};

export function getLesson(subject: Subject, topic: Topic): LessonContent {
  return YEAR_5_LESSONS[`${subject}:${topic.name}`];
}
