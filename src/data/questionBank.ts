import { Question, Subject } from "../types";

export const STATIC_QUESTION_BANK: Record<Subject, Record<string, Question[]>> = {
  'Mathematics': {
    'Addition & Subtraction': [
      { id: 'm1', text: 'What is 15 + 27?', answer: '42', explanation: '15 + 27 = 42' },
      { id: 'm2', text: 'If you have 50 apples and give away 12, how many are left?', answer: '38', explanation: '50 - 12 = 38' },
      { id: 'm3', text: 'Solve: 123 + 456', answer: '579', explanation: '123 + 456 = 579' },
      { id: 'm4', text: 'What is 100 - 45?', answer: '55', explanation: '100 - 45 = 55' },
      { id: 'm5', text: 'Add: 88 + 12', answer: '100', explanation: '88 + 12 = 100' }
    ],
    'Multiplication & Division': [
      { id: 'm6', text: 'What is 5 x 8?', answer: '40', explanation: '5 times 8 is 40' },
      { id: 'm7', text: 'Divide 20 by 4.', answer: '5', explanation: '20 divided by 4 is 5' },
      { id: 'm8', text: 'What is 12 x 3?', answer: '36', explanation: '12 times 3 is 36' },
      { id: 'm9', text: 'If 3 friends share 15 cookies equally, how many does each get?', answer: '5', explanation: '15 / 3 = 5' }
    ]
  },
  'Science': {
    'The Human Body': [
      { id: 's1', text: 'Which organ pumps blood through your body?', options: ['Brain', 'Heart', 'Lungs', 'Stomach'], answer: 'Heart', explanation: 'The heart is a muscular organ that pumps blood.' },
      { id: 's2', text: 'How many senses do humans have?', answer: '5', explanation: 'Sight, hearing, smell, taste, and touch.' },
      { id: 's3', text: 'What part of the body do you use to breathe?', options: ['Lungs', 'Eyes', 'Ears', 'Feet'], answer: 'Lungs', explanation: 'Lungs are the primary organs of the respiratory system.' }
    ]
  },
  'English': {
    'Grammar': [
      { id: 'e1', text: 'Identify the noun in this sentence: "The cat sat on the mat."', options: ['Sat', 'On', 'Cat', 'The'], answer: 'Cat', explanation: 'A noun is a person, place, or thing.' },
      { id: 'e2', text: 'Which of these is a verb?', options: ['Apple', 'Run', 'Blue', 'Quickly'], answer: 'Run', explanation: 'A verb is an action word.' }
    ]
  },
  'Social Studies': {},
  'General Knowledge': {}
};
