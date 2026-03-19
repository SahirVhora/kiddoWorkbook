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
  questions: Question[];
}

export type Subject = 'Mathematics' | 'Science' | 'English' | 'Social Studies' | 'General Knowledge';

export const SUBJECTS: Subject[] = ['Mathematics', 'Science', 'English', 'Social Studies', 'General Knowledge'];

export const TOPICS: Record<Subject, string[]> = {
  'Mathematics': ['Addition & Subtraction', 'Multiplication & Division', 'Fractions', 'Geometry', 'Word Problems'],
  'Science': ['The Human Body', 'Plants & Animals', 'Solar System', 'Matter & Energy', 'Environment'],
  'English': ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Spelling', 'Punctuation'],
  'Social Studies': ['History', 'Geography', 'Civics', 'Culture', 'Maps'],
  'General Knowledge': ['Animals', 'Inventions', 'Sports', 'World Records', 'Famous People']
};
