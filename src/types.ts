export interface Question {
  id: string;
  text: string;
  options?: string[];
  answer: string;
  explanation?: string;
  topicArea?: string; // e.g., "Addition", "Punctuation", "Habitats"
}

export interface Workbook {
  title: string;
  subject: string;
  topic: string;
  grade: string;
  difficulty: Difficulty;
  questions: Question[];
}

export type Subject = 'Mathematics' | 'English' | 'Science' | 'History' | 'Geography';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type YearGroup = 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4' | 'Year 5' | 'Year 6';

export const SUBJECTS: Subject[] = ['Mathematics', 'English', 'Science', 'History', 'Geography'];
export const YEARS: YearGroup[] = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];

export interface Topic {
  name: string;
  description: string;
  icon: string;
}

export const TOPICS_BY_YEAR: Record<YearGroup, Record<Subject, Topic[]>> = {
  'Year 1': {
    'Mathematics': [
      { name: 'Number Bonds', description: 'Pairs of numbers that add to 10 or 20', icon: 'Plus' },
      { name: 'Counting to 20', description: 'Recognizing and writing numbers', icon: 'Hash' },
      { name: '2D & 3D Shapes', description: 'Naming common shapes', icon: 'Square' },
      { name: 'Measurement', description: 'Length, mass, and capacity', icon: 'Clock' },
      { name: 'Addition & Subtraction', description: 'Basic sums within 20', icon: 'Plus' },
      { name: 'Fractions', description: 'Finding halves and quarters', icon: 'PieChart' },
      { name: 'Money', description: 'Recognizing coins and notes', icon: 'DollarSign' },
      { name: 'Time Basics', description: 'Days of the week and months', icon: 'Calendar' }
    ],
    'English': [
      { name: 'Phonics', description: 'Letters and sounds', icon: 'Type' },
      { name: 'Capital Letters', description: 'Using capitals for names and starts', icon: 'Edit3' },
      { name: 'Common Exception Words', description: 'Tricky words to read and spell', icon: 'Book' },
      { name: 'Sentence Writing', description: 'Forming simple sentences', icon: 'PenTool' },
      { name: 'Reading Comprehension', description: 'Understanding simple stories', icon: 'BookOpen' },
      { name: 'Rhyming Words', description: 'Finding words that sound the same', icon: 'Music' },
      { name: 'Story Sequencing', description: 'Beginning, middle, and end', icon: 'Layers' }
    ],
    'Science': [
      { name: 'Plants', description: 'Parts of a plant and growth', icon: 'Leaf' },
      { name: 'Animals & Humans', description: 'Senses and common animals', icon: 'User' },
      { name: 'Seasonal Changes', description: 'Weather and day length', icon: 'Cloud' },
      { name: 'Everyday Materials', description: 'Identifying wood, plastic, metal', icon: 'Layers' },
      { name: 'The Human Body', description: 'Parts of the body and senses', icon: 'User' },
      { name: 'Weather Patterns', description: 'Types of weather in the UK', icon: 'CloudRain' }
    ],
    'History': [
      { name: 'Changes in Living Memory', description: 'How toys and clothes have changed', icon: 'History' },
      { name: 'Significant Individuals', description: 'Famous people from the past', icon: 'UserCircle' },
      { name: 'Events Beyond Memory', description: 'The first moon landing', icon: 'Globe' },
      { name: 'Old and New Toys', description: 'Comparing toys from different eras', icon: 'Gamepad2' },
      { name: 'Famous Queens', description: 'Elizabeth I and Victoria', icon: 'Crown' }
    ],
    'Geography': [
      { name: 'The UK', description: 'Countries and capitals of the UK', icon: 'Map' },
      { name: 'The Seasons', description: 'Weather patterns in the UK', icon: 'Sun' },
      { name: 'Hot and Cold Places', description: 'Equator and North/South Poles', icon: 'Globe' },
      { name: 'Our Local Area', description: 'Landmarks and features nearby', icon: 'Home' },
      { name: 'Using a Compass', description: 'North, South, East, and West', icon: 'Compass' }
    ]
  },
  'Year 2': {
    'Mathematics': [
      { name: 'Place Value', description: 'Tens and ones', icon: 'Layers' },
      { name: 'Addition & Subtraction', description: 'Mental and written methods', icon: 'Plus' },
      { name: 'Multiplication & Division', description: '2, 5, and 10 times tables', icon: 'X' },
      { name: 'Fractions', description: 'Halves, quarters, and thirds', icon: 'PieChart' },
      { name: 'Statistics', description: 'Simple pictograms and tally charts', icon: 'PieChart' },
      { name: 'Position & Direction', description: 'Turns and movements', icon: 'Repeat' },
      { name: 'Money Calculations', description: 'Giving change and adding totals', icon: 'DollarSign' },
      { name: 'Time: Quarter Past/To', description: 'Reading clocks to 15 minutes', icon: 'Clock' }
    ],
    'English': [
      { name: 'Sentence Structure', description: 'Using conjunctions like and, but, or', icon: 'Type' },
      { name: 'Punctuation', description: 'Question marks and exclamation marks', icon: 'Hash' },
      { name: 'Spelling Rules', description: 'Suffixes and homophones', icon: 'PenTool' },
      { name: 'Creative Writing', description: 'Writing short narratives', icon: 'Edit3' },
      { name: 'Grammar', description: 'Nouns, verbs, and adjectives', icon: 'Type' },
      { name: 'Compound Words', description: 'Joining two words together', icon: 'Link' },
      { name: 'Using "Because"', description: 'Explaining reasons in writing', icon: 'MessageSquare' }
    ],
    'Science': [
      { name: 'Living Things', description: 'Habitats and food chains', icon: 'Globe' },
      { name: 'Uses of Materials', description: 'Properties of everyday objects', icon: 'Zap' },
      { name: 'Plants', description: 'What plants need to grow', icon: 'Leaf' },
      { name: 'Animals including Humans', description: 'Life cycles and basic needs', icon: 'User' },
      { name: 'Micro-habitats', description: 'Life in small places like logs', icon: 'Bug' },
      { name: 'Healthy Eating', description: 'Food groups and exercise', icon: 'Apple' }
    ],
    'History': [
      { name: 'The Great Fire of London', description: 'Events and impact', icon: 'History' },
      { name: 'Explorers', description: 'Famous journeys', icon: 'Map' },
      { name: 'Nursing Pioneers', description: 'Florence Nightingale and Mary Seacole', icon: 'UserCircle' },
      { name: 'The First Aeroplane', description: 'The Wright Brothers', icon: 'Plane' },
      { name: 'Local History', description: 'How our town has changed', icon: 'MapPin' }
    ],
    'Geography': [
      { name: 'Continents & Oceans', description: 'World geography basics', icon: 'Globe' },
      { name: 'Comparing Places', description: 'UK vs a non-European country', icon: 'Map' },
      { name: 'Map Skills', description: 'Using compass directions', icon: 'Flag' },
      { name: 'Aerial Photos', description: 'Looking at the world from above', icon: 'Camera' },
      { name: 'Island Life', description: 'Features of islands', icon: 'Palmtree' }
    ]
  },
  'Year 3': {
    'Mathematics': [
      { name: 'Place Value to 1000', description: 'Hundreds, tens, and ones', icon: 'Layers' },
      { name: 'Column Addition', description: 'Formal written methods', icon: 'Plus' },
      { name: 'Times Tables', description: '3, 4, and 8 times tables', icon: 'X' },
      { name: 'Time', description: 'Analogue and digital clocks', icon: 'Clock' },
      { name: 'Fractions', description: 'Adding and subtracting fractions', icon: 'PieChart' },
      { name: 'Mass & Capacity', description: 'Measuring in g, kg, ml, l', icon: 'Zap' },
      { name: 'Perimeter', description: 'Measuring around 2D shapes', icon: 'Square' },
      { name: 'Bar Charts', description: 'Reading and drawing graphs', icon: 'BarChart' }
    ],
    'English': [
      { name: 'Paragraphs', description: 'Grouping related ideas', icon: 'Type' },
      { name: 'Adverbs', description: 'Describing how things are done', icon: 'Edit3' },
      { name: 'Direct Speech', description: 'Using inverted commas', icon: 'MessageSquare' },
      { name: 'Prefixes', description: 'Un-, dis-, mis-, re-', icon: 'Hash' },
      { name: 'Poetry', description: 'Rhyme and rhythm', icon: 'PenTool' },
      { name: 'Prepositions', description: 'Words like under, over, next to', icon: 'MapPin' },
      { name: 'Word Families', description: 'Words with the same root', icon: 'Layers' }
    ],
    'Science': [
      { name: 'Rocks & Fossils', description: 'Types of rocks and how fossils form', icon: 'Square' },
      { name: 'Light & Shadows', description: 'Reflection and darkness', icon: 'Sun' },
      { name: 'Forces & Magnets', description: 'Pushes, pulls, and magnetic poles', icon: 'Zap' },
      { name: 'Plants', description: 'Pollination and seed dispersal', icon: 'Leaf' },
      { name: 'Animals & Nutrition', description: 'Skeletons and muscles', icon: 'User' },
      { name: 'Soil', description: 'What is soil made of?', icon: 'Mountain' }
    ],
    'History': [
      { name: 'Stone Age to Iron Age', description: 'Early Britain', icon: 'History' },
      { name: 'Ancient Egyptians', description: 'Life by the Nile', icon: 'UserCircle' },
      { name: 'Ancient Rome', description: 'The Roman Empire', icon: 'Shield' },
      { name: 'Egyptian Gods', description: 'Beliefs and mythology', icon: 'Crown' },
      { name: 'Boudicca', description: 'The Iceni revolt', icon: 'Sword' }
    ],
    'Geography': [
      { name: 'UK Counties & Cities', description: 'Local geography', icon: 'Map' },
      { name: 'Volcanoes & Earthquakes', description: 'Physical geography', icon: 'Globe' },
      { name: 'Climate Zones', description: 'Tropical, temperate, and polar', icon: 'Sun' },
      { name: 'Map Symbols', description: 'Reading OS maps', icon: 'Flag' },
      { name: 'European Countries', description: 'Capitals and flags', icon: 'Globe' }
    ]
  },
  'Year 4': {
    'Mathematics': [
      { name: 'Negative Numbers', description: 'Numbers below zero', icon: 'Hash' },
      { name: 'Decimals', description: 'Tenths and hundredths', icon: 'PieChart' },
      { name: 'Area & Perimeter', description: 'Measuring space', icon: 'Square' },
      { name: 'Times Tables to 12x12', description: 'Mastery of all tables', icon: 'X' },
      { name: 'Coordinates', description: 'Plotting points on a grid', icon: 'Map' },
      { name: 'Roman Numerals', description: 'Reading numbers to 100', icon: 'Type' },
      { name: 'Line Symmetry', description: 'Reflecting shapes', icon: 'Repeat' },
      { name: '24-Hour Clock', description: 'Converting AM/PM to 24h', icon: 'Clock' }
    ],
    'English': [
      { name: 'Fronted Adverbials', description: 'Starting sentences with phrases', icon: 'Type' },
      { name: 'Pronouns', description: 'Avoiding repetition', icon: 'User' },
      { name: 'Standard English', description: 'Formal vs informal language', icon: 'Edit3' },
      { name: 'Possessive Apostrophes', description: 'Plural possession', icon: 'Hash' },
      { name: 'Story Mapping', description: 'Planning a narrative', icon: 'Layers' },
      { name: 'Noun Phrases', description: 'Expanding simple nouns', icon: 'Type' },
      { name: 'Direct Speech', description: 'Punctuating dialogue', icon: 'MessageSquare' }
    ],
    'Science': [
      { name: 'States of Matter', description: 'Solids, liquids, and gases', icon: 'Cloud' },
      { name: 'Sound', description: 'Vibrations and pitch', icon: 'Zap' },
      { name: 'Electricity', icon: 'Zap', description: 'Circuits and components' },
      { name: 'Living Things', description: 'Classification keys', icon: 'Globe' },
      { name: 'Digestive System', description: 'Teeth and digestion', icon: 'User' },
      { name: 'Food Chains', description: 'Producers, consumers, predators', icon: 'Repeat' }
    ],
    'History': [
      { name: 'The Romans in Britain', description: 'Impact of the Roman Empire', icon: 'History' },
      { name: 'Anglo-Saxons & Scots', description: 'Settlements and culture', icon: 'Shield' },
      { name: 'The Vikings', description: 'Raids and resistance', icon: 'Shield' },
      { name: 'Anglo-Saxon Life', description: 'Village life and jobs', icon: 'Home' },
      { name: 'Roman Inventions', description: 'Roads, baths, and heating', icon: 'Zap' }
    ],
    'Geography': [
      { name: 'Rivers & Water Cycle', description: 'How water moves', icon: 'Cloud' },
      { name: 'European Countries', description: 'Major cities and features', icon: 'Map' },
      { name: 'South America', description: 'The Amazon and Andes', icon: 'Globe' },
      { name: 'Mountains', description: 'How they form and famous peaks', icon: 'Mountain' },
      { name: 'North America', description: 'Countries and biomes', icon: 'Globe' }
    ]
  },
  'Year 5': {
    'Mathematics': [
      { name: 'Prime Numbers', description: 'Factors and multiples', icon: 'Hash' },
      { name: 'Percentages', description: 'Parts of 100', icon: 'PieChart' },
      { name: 'Angles', description: 'Measuring in degrees', icon: 'Repeat' },
      { name: 'Line Graphs', description: 'Interpreting data', icon: 'MessageSquare' },
      { name: 'Volume', description: 'Measuring 3D space', icon: 'Square' },
      { name: 'Rounding', description: 'Numbers to 1,000,000', icon: 'Hash' },
      { name: 'Multiplying Decimals', description: 'By 10, 100, and 1000', icon: 'X' },
      { name: 'Square & Cube Numbers', description: 'Powers of 2 and 3', icon: 'Layers' }
    ],
    'English': [
      { name: 'Relative Clauses', description: 'Using who, which, where', icon: 'Type' },
      { name: 'Modal Verbs', description: 'Possibility and certainty', icon: 'Zap' },
      { name: 'Parenthesis', description: 'Using brackets and dashes', icon: 'Hash' },
      { name: 'Cohesion', description: 'Linking paragraphs', icon: 'Layers' },
      { name: 'Vocabulary', description: 'Synonyms and antonyms', icon: 'Book' },
      { name: 'Active & Passive Voice', description: 'Sentence focus', icon: 'Type' },
      { name: 'Suffixes: -ate, -ise, -ify', description: 'Converting nouns to verbs', icon: 'Edit3' }
    ],
    'Science': [
      { name: 'Earth & Space', description: 'The solar system and gravity', icon: 'Sun' },
      { name: 'Forces', description: 'Air resistance and friction', icon: 'Zap' },
      { name: 'Properties of Materials', description: 'Dissolving and separating', icon: 'Square' },
      { name: 'Life Cycles', description: 'Mammals, amphibians, insects', icon: 'Repeat' },
      { name: 'Human Development', description: 'Changes as humans age', icon: 'User' },
      { name: 'Reversible Changes', description: 'Mixing and dissolving', icon: 'FlaskConical' }
    ],
    'History': [
      { name: 'Ancient Greece', description: 'Philosophy and Olympics', icon: 'History' },
      { name: 'The Vikings', description: 'Raids and settlements', icon: 'Shield' },
      { name: 'The Victorians', description: 'Industrial Revolution', icon: 'History' },
      { name: 'Victorian Schools', description: 'Life for children in the 1800s', icon: 'GraduationCap' },
      { name: 'The Maya Calendar', description: 'Ancient timekeeping', icon: 'Clock' }
    ],
    'Geography': [
      { name: 'North & South America', description: 'Major features and biomes', icon: 'Globe' },
      { name: 'Trade Links', description: 'Global economics', icon: 'DollarSign' },
      { name: 'Energy Resources', description: 'Renewable and non-renewable', icon: 'Zap' },
      { name: 'Biomes', description: 'Rainforests, deserts, and tundras', icon: 'Leaf' },
      { name: 'Global Trade', description: 'How goods move around the world', icon: 'Ship' }
    ]
  },
  'Year 6': {
    'Mathematics': [
      { name: 'Algebra', description: 'Using variables and equations', icon: 'Hash' },
      { name: 'Ratio & Proportion', description: 'Comparing quantities', icon: 'PieChart' },
      { name: 'Long Division', description: 'Formal written division', icon: 'X' },
      { name: 'Pie Charts', description: 'Data visualization', icon: 'PieChart' },
      { name: 'Order of Operations', description: 'BODMAS/BIDMAS', icon: 'Layers' },
      { name: 'Geometry', description: 'Properties of circles', icon: 'Repeat' },
      { name: 'Area of Triangles', description: 'Calculating space in 2D', icon: 'Triangle' },
      { name: 'Mean Average', description: 'Finding the middle value', icon: 'BarChart' }
    ],
    'English': [
      { name: 'Active & Passive Voice', description: 'Sentence focus', icon: 'Type' },
      { name: 'Semicolons & Colons', description: 'Advanced punctuation', icon: 'Hash' },
      { name: 'Formal Writing', description: 'Tone and cohesion', icon: 'Edit3' },
      { name: 'Hyphens', description: 'Avoiding ambiguity', icon: 'Hash' },
      { name: 'Subjunctive Form', description: 'Formal expressions', icon: 'Type' },
      { name: 'Formal vs Informal', description: 'Choosing the right tone', icon: 'User' },
      { name: 'Advanced Vocabulary', description: 'Shades of meaning', icon: 'Book' }
    ],
    'Science': [
      { name: 'Evolution & Inheritance', description: 'Fossils and adaptation', icon: 'History' },
      { name: 'Light', description: 'How light travels', icon: 'Sun' },
      { name: 'Circulatory System', description: 'Heart and blood vessels', icon: 'User' },
      { name: 'Classification', description: 'Linnaean system', icon: 'Layers' },
      { name: 'Electricity', description: 'Voltage and resistance', icon: 'Zap' },
      { name: 'Micro-organisms', description: 'Bacteria, viruses, and fungi', icon: 'Bug' }
    ],
    'History': [
      { name: 'World War II', description: 'Global conflict and impact', icon: 'History' },
      { name: 'The Maya Civilization', description: 'Ancient American culture', icon: 'History' },
      { name: 'Crime and Punishment', description: 'Changes through history', icon: 'Shield' },
      { name: 'The Blitz', description: 'Life in London during WW2', icon: 'CloudRain' },
      { name: 'Victorian Crime', description: 'Prisons and punishments', icon: 'Lock' }
    ],
    'Geography': [
      { name: 'Climate Change', description: 'Impact on the planet', icon: 'Cloud' },
      { name: 'Natural Resources', description: 'Energy and sustainability', icon: 'Zap' },
      { name: 'Globalisation', description: 'Interconnected world', icon: 'Globe' },
      { name: 'Sustainability', description: 'Protecting the environment', icon: 'Leaf' },
      { name: 'Climate Solutions', description: 'How we can help the planet', icon: 'Sun' }
    ]
  }
};
