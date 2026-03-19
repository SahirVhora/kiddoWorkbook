export interface Question {
  id: string;
  text: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export interface Workbook {
  title: string;
  subject: string;
  topic: string;
  grade: string;
  difficulty: Difficulty;
  questions: Question[];
}

export type Subject = 'Mathematics' | 'Science' | 'English' | 'Social Studies' | 'General Knowledge';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export const SUBJECTS: Subject[] = ['Mathematics', 'Science', 'English', 'Social Studies', 'General Knowledge'];

export const TOPICS: Record<Subject, { name: string; description: string; icon: string }[]> = {
  'Mathematics': [
    { name: 'Addition & Subtraction', description: 'Basic arithmetic operations', icon: 'Plus' },
    { name: 'Multiplication & Division', description: 'Advanced arithmetic', icon: 'X' },
    { name: 'Fractions', description: 'Parts of a whole', icon: 'PieChart' },
    { name: 'Geometry', description: 'Shapes and space', icon: 'Square' },
    { name: 'Word Problems', description: 'Real-world math', icon: 'MessageSquare' },
    { name: 'Time & Money', description: 'Practical math skills', icon: 'Clock' },
    { name: 'Patterns', description: 'Sequences and logic', icon: 'Repeat' }
  ],
  'Science': [
    { name: 'The Human Body', description: 'Organs and systems', icon: 'User' },
    { name: 'Plants & Animals', description: 'Biology basics', icon: 'Leaf' },
    { name: 'Solar System', description: 'Space and planets', icon: 'Sun' },
    { name: 'Matter & Energy', description: 'Physics intro', icon: 'Zap' },
    { name: 'Environment', description: 'Ecology and nature', icon: 'Globe' },
    { name: 'Weather', description: 'Meteorology basics', icon: 'Cloud' },
    { name: 'Simple Machines', description: 'Engineering intro', icon: 'Settings' }
  ],
  'English': [
    { name: 'Grammar', description: 'Rules of language', icon: 'Type' },
    { name: 'Vocabulary', description: 'Word power', icon: 'Book' },
    { name: 'Reading Comprehension', description: 'Understanding text', icon: 'FileText' },
    { name: 'Spelling', description: 'Letter patterns', icon: 'PenTool' },
    { name: 'Punctuation', description: 'Sentence structure', icon: 'Hash' },
    { name: 'Creative Writing', description: 'Storytelling', icon: 'Edit3' },
    { name: 'Parts of Speech', description: 'Nouns, verbs, etc.', icon: 'Layers' }
  ],
  'Social Studies': [
    { name: 'History', description: 'Past events', icon: 'History' },
    { name: 'Geography', description: 'Places and maps', icon: 'Map' },
    { name: 'Civics', description: 'Government and rules', icon: 'Shield' },
    { name: 'Culture', description: 'Traditions and people', icon: 'Users' },
    { name: 'Communities', description: 'Living together', icon: 'Home' },
    { name: 'Economics', description: 'Needs and wants', icon: 'DollarSign' }
  ],
  'General Knowledge': [
    { name: 'Animals', description: 'Wildlife facts', icon: 'PawPrint' },
    { name: 'Inventions', description: 'Great ideas', icon: 'Lightbulb' },
    { name: 'Sports', description: 'Games and athletes', icon: 'Trophy' },
    { name: 'World Records', description: 'Amazing feats', icon: 'Star' },
    { name: 'Famous People', description: 'Leaders and icons', icon: 'UserCircle' },
    { name: 'Flags', description: 'World symbols', icon: 'Flag' }
  ]
};
