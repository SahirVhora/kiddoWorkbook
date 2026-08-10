export interface Question {
  id: string;
  text: string;
  options?: string[];
  answer: string;
  explanation?: string;
  topicArea?: string; // e.g., "Addition", "Punctuation", "Habitats"
  source?: {
    title: string;
    url: string;
  };
}

export interface Workbook {
  title: string;
  subject: string;
  topic: string;
  grade: string;
  difficulty: Difficulty;
  questions: Question[];
}

export type Subject =
  "Mathematics" | "English" | "Science" | "History" | "Geography";
export type Difficulty = "Easy" | "Medium" | "Hard";
export type YearGroup =
  "Year 1" | "Year 2" | "Year 3" | "Year 4" | "Year 5" | "Year 6";

export const SUBJECTS: Subject[] = [
  "Mathematics",
  "English",
  "Science",
  "History",
  "Geography",
];
export const YEARS: YearGroup[] = [
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
];

export interface Topic {
  name: string;
  description: string;
  icon: string;
  strand?: string;
}

export const TOPICS_BY_YEAR: Record<YearGroup, Record<Subject, Topic[]>> = {
  "Year 1": {
    Mathematics: [
      {
        name: "Number Bonds",
        description: "Pairs of numbers that add to 10 or 20",
        icon: "Plus",
      },
      {
        name: "Counting to 20",
        description: "Recognizing and writing numbers",
        icon: "Hash",
      },
      {
        name: "2D & 3D Shapes",
        description: "Naming common shapes",
        icon: "Square",
      },
      {
        name: "Measurement",
        description: "Length, mass, and capacity",
        icon: "Clock",
      },
      {
        name: "Addition & Subtraction",
        description: "Basic sums within 20",
        icon: "Plus",
      },
      {
        name: "Fractions",
        description: "Finding halves and quarters",
        icon: "PieChart",
      },
      {
        name: "Money",
        description: "Recognizing coins and notes",
        icon: "DollarSign",
      },
      {
        name: "Time Basics",
        description: "Days of the week and months",
        icon: "Calendar",
      },
    ],
    English: [
      { name: "Phonics", description: "Letters and sounds", icon: "Type" },
      {
        name: "Capital Letters",
        description: "Using capitals for names and starts",
        icon: "Edit3",
      },
      {
        name: "Common Exception Words",
        description: "Tricky words to read and spell",
        icon: "Book",
      },
      {
        name: "Sentence Writing",
        description: "Forming simple sentences",
        icon: "PenTool",
      },
      {
        name: "Reading Comprehension",
        description: "Understanding simple stories",
        icon: "BookOpen",
      },
      {
        name: "Rhyming Words",
        description: "Finding words that sound the same",
        icon: "Music",
      },
      {
        name: "Story Sequencing",
        description: "Beginning, middle, and end",
        icon: "Layers",
      },
    ],
    Science: [
      {
        name: "Plants",
        description: "Parts of a plant and growth",
        icon: "Leaf",
      },
      {
        name: "Animals & Humans",
        description: "Senses and common animals",
        icon: "User",
      },
      {
        name: "Seasonal Changes",
        description: "Weather and day length",
        icon: "Cloud",
      },
      {
        name: "Everyday Materials",
        description: "Identifying wood, plastic, metal",
        icon: "Layers",
      },
      {
        name: "The Human Body",
        description: "Parts of the body and senses",
        icon: "User",
      },
      {
        name: "Weather Patterns",
        description: "Types of weather in the UK",
        icon: "CloudRain",
      },
    ],
    History: [
      {
        name: "Changes in Living Memory",
        description: "How toys and clothes have changed",
        icon: "History",
      },
      {
        name: "Significant Individuals",
        description: "Famous people from the past",
        icon: "UserCircle",
      },
      {
        name: "Events Beyond Memory",
        description: "The first moon landing",
        icon: "Globe",
      },
      {
        name: "Old and New Toys",
        description: "Comparing toys from different eras",
        icon: "Gamepad2",
      },
      {
        name: "Famous Queens",
        description: "Elizabeth I and Victoria",
        icon: "Crown",
      },
    ],
    Geography: [
      {
        name: "The UK",
        description: "Countries and capitals of the UK",
        icon: "Map",
      },
      {
        name: "The Seasons",
        description: "Weather patterns in the UK",
        icon: "Sun",
      },
      {
        name: "Hot and Cold Places",
        description: "Equator and North/South Poles",
        icon: "Globe",
      },
      {
        name: "Our Local Area",
        description: "Landmarks and features nearby",
        icon: "Home",
      },
      {
        name: "Using a Compass",
        description: "North, South, East, and West",
        icon: "Compass",
      },
    ],
  },
  "Year 2": {
    Mathematics: [
      { name: "Place Value", description: "Tens and ones", icon: "Layers" },
      {
        name: "Addition & Subtraction",
        description: "Mental and written methods",
        icon: "Plus",
      },
      {
        name: "Multiplication & Division",
        description: "2, 5, and 10 times tables",
        icon: "X",
      },
      {
        name: "Fractions",
        description: "Halves, quarters, and thirds",
        icon: "PieChart",
      },
      {
        name: "Statistics",
        description: "Simple pictograms and tally charts",
        icon: "PieChart",
      },
      {
        name: "Position & Direction",
        description: "Turns and movements",
        icon: "Repeat",
      },
      {
        name: "Money Calculations",
        description: "Giving change and adding totals",
        icon: "DollarSign",
      },
      {
        name: "Time: Quarter Past/To",
        description: "Reading clocks to 15 minutes",
        icon: "Clock",
      },
    ],
    English: [
      {
        name: "Sentence Structure",
        description: "Using conjunctions like and, but, or",
        icon: "Type",
      },
      {
        name: "Punctuation",
        description: "Question marks and exclamation marks",
        icon: "Hash",
      },
      {
        name: "Spelling Rules",
        description: "Suffixes and homophones",
        icon: "PenTool",
      },
      {
        name: "Creative Writing",
        description: "Writing short narratives",
        icon: "Edit3",
      },
      {
        name: "Grammar",
        description: "Nouns, verbs, and adjectives",
        icon: "Type",
      },
      {
        name: "Compound Words",
        description: "Joining two words together",
        icon: "Link",
      },
      {
        name: 'Using "Because"',
        description: "Explaining reasons in writing",
        icon: "MessageSquare",
      },
    ],
    Science: [
      {
        name: "Living Things",
        description: "Habitats and food chains",
        icon: "Globe",
      },
      {
        name: "Uses of Materials",
        description: "Properties of everyday objects",
        icon: "Zap",
      },
      { name: "Plants", description: "What plants need to grow", icon: "Leaf" },
      {
        name: "Animals including Humans",
        description: "Life cycles and basic needs",
        icon: "User",
      },
      {
        name: "Micro-habitats",
        description: "Life in small places like logs",
        icon: "Bug",
      },
      {
        name: "Healthy Eating",
        description: "Food groups and exercise",
        icon: "Apple",
      },
    ],
    History: [
      {
        name: "The Great Fire of London",
        description: "Events and impact",
        icon: "History",
      },
      { name: "Explorers", description: "Famous journeys", icon: "Map" },
      {
        name: "Nursing Pioneers",
        description: "Florence Nightingale and Mary Seacole",
        icon: "UserCircle",
      },
      {
        name: "The First Aeroplane",
        description: "The Wright Brothers",
        icon: "Plane",
      },
      {
        name: "Local History",
        description: "How our town has changed",
        icon: "MapPin",
      },
    ],
    Geography: [
      {
        name: "Continents & Oceans",
        description: "World geography basics",
        icon: "Globe",
      },
      {
        name: "Comparing Places",
        description: "UK vs a non-European country",
        icon: "Map",
      },
      {
        name: "Map Skills",
        description: "Using compass directions",
        icon: "Flag",
      },
      {
        name: "Aerial Photos",
        description: "Looking at the world from above",
        icon: "Camera",
      },
      {
        name: "Island Life",
        description: "Features of islands",
        icon: "Palmtree",
      },
    ],
  },
  "Year 3": {
    Mathematics: [
      {
        name: "Place Value to 1000",
        description: "Hundreds, tens, and ones",
        icon: "Layers",
      },
      {
        name: "Column Addition",
        description: "Formal written methods",
        icon: "Plus",
      },
      {
        name: "Times Tables",
        description: "3, 4, and 8 times tables",
        icon: "X",
      },
      {
        name: "Time",
        description: "Analogue and digital clocks",
        icon: "Clock",
      },
      {
        name: "Fractions",
        description: "Adding and subtracting fractions",
        icon: "PieChart",
      },
      {
        name: "Mass & Capacity",
        description: "Measuring in g, kg, ml, l",
        icon: "Zap",
      },
      {
        name: "Perimeter",
        description: "Measuring around 2D shapes",
        icon: "Square",
      },
      {
        name: "Bar Charts",
        description: "Reading and drawing graphs",
        icon: "BarChart",
      },
    ],
    English: [
      {
        name: "Paragraphs",
        description: "Grouping related ideas",
        icon: "Type",
      },
      {
        name: "Adverbs",
        description: "Describing how things are done",
        icon: "Edit3",
      },
      {
        name: "Direct Speech",
        description: "Using inverted commas",
        icon: "MessageSquare",
      },
      { name: "Prefixes", description: "Un-, dis-, mis-, re-", icon: "Hash" },
      { name: "Poetry", description: "Rhyme and rhythm", icon: "PenTool" },
      {
        name: "Prepositions",
        description: "Words like under, over, next to",
        icon: "MapPin",
      },
      {
        name: "Word Families",
        description: "Words with the same root",
        icon: "Layers",
      },
    ],
    Science: [
      {
        name: "Rocks & Fossils",
        description: "Types of rocks and how fossils form",
        icon: "Square",
      },
      {
        name: "Light & Shadows",
        description: "Reflection and darkness",
        icon: "Sun",
      },
      {
        name: "Forces & Magnets",
        description: "Pushes, pulls, and magnetic poles",
        icon: "Zap",
      },
      {
        name: "Plants",
        description: "Pollination and seed dispersal",
        icon: "Leaf",
      },
      {
        name: "Animals & Nutrition",
        description: "Skeletons and muscles",
        icon: "User",
      },
      { name: "Soil", description: "What is soil made of?", icon: "Mountain" },
    ],
    History: [
      {
        name: "Stone Age to Iron Age",
        description: "Early Britain",
        icon: "History",
      },
      {
        name: "Ancient Egyptians",
        description: "Life by the Nile",
        icon: "UserCircle",
      },
      { name: "Ancient Rome", description: "The Roman Empire", icon: "Shield" },
      {
        name: "Egyptian Gods",
        description: "Beliefs and mythology",
        icon: "Crown",
      },
      { name: "Boudicca", description: "The Iceni revolt", icon: "Sword" },
    ],
    Geography: [
      {
        name: "UK Counties & Cities",
        description: "Local geography",
        icon: "Map",
      },
      {
        name: "Volcanoes & Earthquakes",
        description: "Physical geography",
        icon: "Globe",
      },
      {
        name: "Climate Zones",
        description: "Tropical, temperate, and polar",
        icon: "Sun",
      },
      { name: "Map Symbols", description: "Reading OS maps", icon: "Flag" },
      {
        name: "European Countries",
        description: "Capitals and flags",
        icon: "Globe",
      },
    ],
  },
  "Year 4": {
    Mathematics: [
      {
        name: "Negative Numbers",
        description: "Numbers below zero",
        icon: "Hash",
      },
      {
        name: "Decimals",
        description: "Tenths and hundredths",
        icon: "PieChart",
      },
      {
        name: "Area & Perimeter",
        description: "Measuring space",
        icon: "Square",
      },
      {
        name: "Times Tables to 12x12",
        description: "Mastery of all tables",
        icon: "X",
      },
      {
        name: "Coordinates",
        description: "Plotting points on a grid",
        icon: "Map",
      },
      {
        name: "Roman Numerals",
        description: "Reading numbers to 100",
        icon: "Type",
      },
      {
        name: "Line Symmetry",
        description: "Reflecting shapes",
        icon: "Repeat",
      },
      {
        name: "24-Hour Clock",
        description: "Converting AM/PM to 24h",
        icon: "Clock",
      },
    ],
    English: [
      {
        name: "Fronted Adverbials",
        description: "Starting sentences with phrases",
        icon: "Type",
      },
      { name: "Pronouns", description: "Avoiding repetition", icon: "User" },
      {
        name: "Standard English",
        description: "Formal vs informal language",
        icon: "Edit3",
      },
      {
        name: "Possessive Apostrophes",
        description: "Plural possession",
        icon: "Hash",
      },
      {
        name: "Story Mapping",
        description: "Planning a narrative",
        icon: "Layers",
      },
      {
        name: "Noun Phrases",
        description: "Expanding simple nouns",
        icon: "Type",
      },
      {
        name: "Direct Speech",
        description: "Punctuating dialogue",
        icon: "MessageSquare",
      },
    ],
    Science: [
      {
        name: "States of Matter",
        description: "Solids, liquids, and gases",
        icon: "Cloud",
      },
      { name: "Sound", description: "Vibrations and pitch", icon: "Zap" },
      {
        name: "Electricity",
        icon: "Zap",
        description: "Circuits and components",
      },
      {
        name: "Living Things",
        description: "Classification keys",
        icon: "Globe",
      },
      {
        name: "Digestive System",
        description: "Teeth and digestion",
        icon: "User",
      },
      {
        name: "Food Chains",
        description: "Producers, consumers, predators",
        icon: "Repeat",
      },
    ],
    History: [
      {
        name: "The Romans in Britain",
        description: "Impact of the Roman Empire",
        icon: "History",
      },
      {
        name: "Anglo-Saxons & Scots",
        description: "Settlements and culture",
        icon: "Shield",
      },
      {
        name: "The Vikings",
        description: "Raids and resistance",
        icon: "Shield",
      },
      {
        name: "Anglo-Saxon Life",
        description: "Village life and jobs",
        icon: "Home",
      },
      {
        name: "Roman Inventions",
        description: "Roads, baths, and heating",
        icon: "Zap",
      },
    ],
    Geography: [
      {
        name: "Rivers & Water Cycle",
        description: "How water moves",
        icon: "Cloud",
      },
      {
        name: "European Countries",
        description: "Major cities and features",
        icon: "Map",
      },
      {
        name: "South America",
        description: "The Amazon and Andes",
        icon: "Globe",
      },
      {
        name: "Mountains",
        description: "How they form and famous peaks",
        icon: "Mountain",
      },
      {
        name: "North America",
        description: "Countries and biomes",
        icon: "Globe",
      },
    ],
  },
  "Year 5": {
    Mathematics: [
      {
        name: "Place Value & Roman Numerals",
        description: "Large numbers, negative numbers and Roman numerals",
        icon: "Hash",
        strand: "Number",
      },
      {
        name: "Rounding",
        description: "Round numbers to 1,000,000",
        icon: "Hash",
        strand: "Number",
      },
      {
        name: "Addition & Subtraction",
        description: "Written methods and multi-step problems",
        icon: "Plus",
        strand: "Calculation",
      },
      {
        name: "Multiplication & Division",
        description: "Written methods and problem solving",
        icon: "X",
        strand: "Calculation",
      },
      {
        name: "Prime Numbers",
        description: "Factors, multiples and primes",
        icon: "Hash",
        strand: "Calculation",
      },
      {
        name: "Square & Cube Numbers",
        description: "Powers of 2 and 3",
        icon: "Layers",
        strand: "Calculation",
      },
      {
        name: "Fractions",
        description: "Compare, calculate and find fractions",
        icon: "PieChart",
        strand: "Fractions & decimals",
      },
      {
        name: "Multiplying Decimals",
        description: "Multiply by 10, 100 and 1,000",
        icon: "X",
        strand: "Fractions & decimals",
      },
      {
        name: "Percentages",
        description: "Connect fractions, decimals and parts of 100",
        icon: "PieChart",
        strand: "Fractions & decimals",
      },
      {
        name: "Measurement & Conversions",
        description: "Convert metric units and time",
        icon: "Clock",
        strand: "Measurement",
      },
      {
        name: "Perimeter & Area",
        description: "Measure and estimate 2D space",
        icon: "Square",
        strand: "Measurement",
      },
      {
        name: "Volume",
        description: "Estimate capacity and 3D space",
        icon: "Square",
        strand: "Measurement",
      },
      {
        name: "Angles",
        description: "Measure, calculate and compare angles",
        icon: "Repeat",
        strand: "Geometry",
      },
      {
        name: "Shape Properties",
        description: "Regular polygons and 3D shapes",
        icon: "Square",
        strand: "Geometry",
      },
      {
        name: "Position & Direction",
        description: "Reflect and translate shapes",
        icon: "Map",
        strand: "Geometry",
      },
      {
        name: "Line Graphs",
        description: "Read change over time",
        icon: "MessageSquare",
        strand: "Statistics",
      },
      {
        name: "Tables & Timetables",
        description: "Read and solve comparison problems",
        icon: "Calendar",
        strand: "Statistics",
      },
    ],
    English: [
      {
        name: "Reading: Retrieval & Vocabulary",
        description: "Find evidence and work out word meaning",
        icon: "BookOpen",
        strand: "Reading",
      },
      {
        name: "Reading: Inference & Prediction",
        description: "Read between the lines and justify ideas",
        icon: "Brain",
        strand: "Reading",
      },
      {
        name: "Reading: Summary & Themes",
        description: "Identify main ideas and compare texts",
        icon: "Layers",
        strand: "Reading",
      },
      {
        name: "Writing for Audience & Purpose",
        description: "Choose form, tone and useful detail",
        icon: "PenTool",
        strand: "Writing",
      },
      {
        name: "Planning, Editing & Proofreading",
        description: "Shape ideas and improve a draft",
        icon: "Edit3",
        strand: "Writing",
      },
      {
        name: "Handwriting & Presentation",
        description: "Write legibly, fluently and at speed",
        icon: "PenTool",
        strand: "Writing",
      },
      {
        name: "Cohesion",
        description: "Link ideas within and across paragraphs",
        icon: "Layers",
        strand: "Writing",
      },
      {
        name: "Spelling Patterns",
        description: "Prefixes, suffixes and tricky word families",
        icon: "Book",
        strand: "Spelling",
      },
      {
        name: "Suffixes: -ate, -ise, -ify",
        description: "Convert nouns and adjectives to verbs",
        icon: "Edit3",
        strand: "Spelling",
      },
      {
        name: "Relative Clauses",
        description: "Add detail using who, which and where",
        icon: "Type",
        strand: "Grammar & punctuation",
      },
      {
        name: "Modal Verbs",
        description: "Show possibility, certainty and obligation",
        icon: "Zap",
        strand: "Grammar & punctuation",
      },
      {
        name: "Parenthesis",
        description: "Use brackets, dashes and commas",
        icon: "Hash",
        strand: "Grammar & punctuation",
      },
      {
        name: "Commas & Punctuation",
        description: "Make meaning clear and avoid ambiguity",
        icon: "Hash",
        strand: "Grammar & punctuation",
      },
      {
        name: "Verb Tenses & Agreement",
        description: "Keep tense and subjects consistent",
        icon: "Repeat",
        strand: "Grammar & punctuation",
      },
      {
        name: "Active & Passive Voice",
        description: "Change the focus of a sentence",
        icon: "Type",
        strand: "Grammar & punctuation",
      },
      {
        name: "Vocabulary",
        description: "Use precise synonyms and antonyms",
        icon: "Book",
        strand: "Language",
      },
      {
        name: "Speaking & Presenting",
        description: "Explain ideas, listen and respond",
        icon: "MessageSquare",
        strand: "Spoken language",
      },
    ],
    Science: [
      {
        name: "Working Scientifically",
        description: "Plan fair tests, measure and use evidence",
        icon: "FlaskConical",
        strand: "Scientific enquiry",
      },
      {
        name: "Earth & Space",
        description: "The Solar System, day and night",
        icon: "Sun",
        strand: "Physical science",
      },
      {
        name: "Forces",
        description: "Gravity, resistance and mechanisms",
        icon: "Zap",
        strand: "Physical science",
      },
      {
        name: "Properties of Materials",
        description: "Compare, dissolve and separate materials",
        icon: "Square",
        strand: "Materials",
      },
      {
        name: "Reversible Changes",
        description: "Mixing, dissolving and new materials",
        icon: "FlaskConical",
        strand: "Materials",
      },
      {
        name: "Life Cycles",
        description: "Mammals, birds, amphibians and insects",
        icon: "Repeat",
        strand: "Living things",
      },
      {
        name: "Human Development",
        description: "Changes across the human life cycle",
        icon: "User",
        strand: "Animals including humans",
      },
    ],
    History: [
      {
        name: "Historical Enquiry",
        description: "Use chronology, sources and evidence",
        icon: "Compass",
        strand: "History skills",
      },
      {
        name: "Ancient Greece",
        description: "Greek life, achievements and influence",
        icon: "History",
        strand: "World history",
      },
      {
        name: "The Vikings",
        description: "Raids, settlements and resistance",
        icon: "Shield",
        strand: "British history",
      },
      {
        name: "The Victorians",
        description: "Industry and change beyond 1066",
        icon: "History",
        strand: "British history",
      },
      {
        name: "Victorian Schools",
        description: "Compare childhood using historical sources",
        icon: "GraduationCap",
        strand: "British history",
      },
      {
        name: "The Maya Calendar",
        description: "Maya society, writing and timekeeping",
        icon: "Clock",
        strand: "World history",
      },
    ],
    Geography: [
      {
        name: "Maps & Grid References",
        description: "Use compass points, symbols and OS grids",
        icon: "Map",
        strand: "Geographical skills",
      },
      {
        name: "Latitude, Longitude & Time Zones",
        description: "Locate places using global lines",
        icon: "Globe",
        strand: "Locational knowledge",
      },
      {
        name: "Place Comparison",
        description: "Compare regions using physical and human features",
        icon: "Compass",
        strand: "Place knowledge",
      },
      {
        name: "Fieldwork & Data",
        description: "Observe, measure, map and present findings",
        icon: "BarChart",
        strand: "Geographical skills",
      },
      {
        name: "North & South America",
        description: "Countries, cities and major features",
        icon: "Globe",
        strand: "Locational knowledge",
      },
      {
        name: "Biomes",
        description: "Climate, vegetation and adaptation",
        icon: "Leaf",
        strand: "Physical geography",
      },
      {
        name: "Energy Resources",
        description: "Renewable and non-renewable resources",
        icon: "Zap",
        strand: "Human geography",
      },
      {
        name: "Trade Links",
        description: "Imports, exports and supply chains",
        icon: "DollarSign",
        strand: "Human geography",
      },
      {
        name: "Global Trade",
        description: "How goods move around the world",
        icon: "Ship",
        strand: "Human geography",
      },
    ],
  },
  "Year 6": {
    Mathematics: [
      {
        name: "Algebra",
        description: "Using variables and equations",
        icon: "Hash",
      },
      {
        name: "Ratio & Proportion",
        description: "Comparing quantities",
        icon: "PieChart",
      },
      {
        name: "Long Division",
        description: "Formal written division",
        icon: "X",
      },
      {
        name: "Pie Charts",
        description: "Data visualization",
        icon: "PieChart",
      },
      {
        name: "Order of Operations",
        description: "BODMAS/BIDMAS",
        icon: "Layers",
      },
      {
        name: "Geometry",
        description: "Properties of circles",
        icon: "Repeat",
      },
      {
        name: "Area of Triangles",
        description: "Calculating space in 2D",
        icon: "Triangle",
      },
      {
        name: "Mean Average",
        description: "Finding the middle value",
        icon: "BarChart",
      },
    ],
    English: [
      {
        name: "Active & Passive Voice",
        description: "Sentence focus",
        icon: "Type",
      },
      {
        name: "Semicolons & Colons",
        description: "Advanced punctuation",
        icon: "Hash",
      },
      {
        name: "Formal Writing",
        description: "Tone and cohesion",
        icon: "Edit3",
      },
      { name: "Hyphens", description: "Avoiding ambiguity", icon: "Hash" },
      {
        name: "Subjunctive Form",
        description: "Formal expressions",
        icon: "Type",
      },
      {
        name: "Formal vs Informal",
        description: "Choosing the right tone",
        icon: "User",
      },
      {
        name: "Advanced Vocabulary",
        description: "Shades of meaning",
        icon: "Book",
      },
    ],
    Science: [
      {
        name: "Evolution & Inheritance",
        description: "Fossils and adaptation",
        icon: "History",
      },
      { name: "Light", description: "How light travels", icon: "Sun" },
      {
        name: "Circulatory System",
        description: "Heart and blood vessels",
        icon: "User",
      },
      {
        name: "Classification",
        description: "Linnaean system",
        icon: "Layers",
      },
      {
        name: "Electricity",
        description: "Voltage and resistance",
        icon: "Zap",
      },
      {
        name: "Micro-organisms",
        description: "Bacteria, viruses, and fungi",
        icon: "Bug",
      },
    ],
    History: [
      {
        name: "World War II",
        description: "Global conflict and impact",
        icon: "History",
      },
      {
        name: "The Maya Civilization",
        description: "Ancient American culture",
        icon: "History",
      },
      {
        name: "Crime and Punishment",
        description: "Changes through history",
        icon: "Shield",
      },
      {
        name: "The Blitz",
        description: "Life in London during WW2",
        icon: "CloudRain",
      },
      {
        name: "Victorian Crime",
        description: "Prisons and punishments",
        icon: "Lock",
      },
    ],
    Geography: [
      {
        name: "Climate Change",
        description: "Impact on the planet",
        icon: "Cloud",
      },
      {
        name: "Natural Resources",
        description: "Energy and sustainability",
        icon: "Zap",
      },
      {
        name: "Globalisation",
        description: "Interconnected world",
        icon: "Globe",
      },
      {
        name: "Sustainability",
        description: "Protecting the environment",
        icon: "Leaf",
      },
      {
        name: "Climate Solutions",
        description: "How we can help the planet",
        icon: "Sun",
      },
    ],
  },
};
