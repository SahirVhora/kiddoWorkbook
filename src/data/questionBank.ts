import { Question, Subject } from "../types";

export const STATIC_QUESTION_BANK: Record<Subject, Record<string, Question[]>> = {
  'Mathematics': {
    'Number Bonds': [
      { id: 'm1', text: 'Which pair of numbers makes 10?', options: ['3 and 6', '4 and 6', '5 and 4', '2 and 7'], answer: '4 and 6', explanation: '4 + 6 = 10', topicArea: 'Addition' },
      { id: 'm2', text: 'What number added to 7 makes 20?', answer: '13', explanation: '7 + 13 = 20', topicArea: 'Addition' },
      { id: 'm3', text: 'Find the missing number: 15 + ? = 20', answer: '5', explanation: '15 + 5 = 20', topicArea: 'Addition' }
    ],
    'Place Value': [
      { id: 'm4', text: 'In the number 42, what does the 4 represent?', options: ['4 ones', '4 tens', '4 hundreds', '4 units'], answer: '4 tens', explanation: 'The 4 is in the tens place, so it represents 40.', topicArea: 'Place Value' },
      { id: 'm5', text: 'What is the value of the digit 7 in 753?', options: ['7', '70', '700', '7000'], answer: '700', explanation: 'The 7 is in the hundreds place.', topicArea: 'Place Value' }
    ],
    'Fractions': [
      { id: 'm6', text: 'What is half of 20?', answer: '10', explanation: '20 divided by 2 is 10.', topicArea: 'Fractions' },
      { id: 'm7', text: 'Which fraction is the same as one quarter?', options: ['1/2', '1/3', '1/4', '2/4'], answer: '1/4', explanation: 'One quarter is written as 1/4.', topicArea: 'Fractions' }
    ]
  },
  'English': {
    'Phonics': [
      { id: 'e1', text: 'Which word has the "sh" sound?', options: ['Cat', 'Fish', 'Dog', 'Bird'], answer: 'Fish', explanation: 'Fish ends with the "sh" sound.', topicArea: 'Phonics' },
      { id: 'e2', text: 'Find the word with the "ch" sound.', options: ['Chair', 'Table', 'Lamp', 'Door'], answer: 'Chair', explanation: 'Chair starts with the "ch" sound.', topicArea: 'Phonics' }
    ],
    'Punctuation': [
      { id: 'e3', text: 'Which sentence ends with a question mark?', options: ['I like cake.', 'Where is the dog?', 'Stop that!', 'The sun is hot.'], answer: 'Where is the dog?', explanation: 'Questions end with a question mark.', topicArea: 'Punctuation' },
      { id: 'e4', text: 'Where should the capital letter go in: "my name is sam."', options: ['my and sam', 'name', 'is', 'none'], answer: 'my and sam', explanation: 'Sentences start with a capital, and names need them too.', topicArea: 'Punctuation' }
    ]
  },
  'Science': {
    'Plants': [
      { id: 's1', text: 'Which part of the plant grows underground?', options: ['Leaf', 'Stem', 'Roots', 'Flower'], answer: 'Roots', explanation: 'Roots grow in the soil to soak up water.', topicArea: 'Plants' },
      { id: 's2', text: 'What do plants need to grow?', options: ['Chocolate', 'Sunlight and water', 'Toys', 'Milk'], answer: 'Sunlight and water', explanation: 'Plants need light, water, and nutrients to grow.', topicArea: 'Plants' }
    ],
    'Animals & Humans': [
      { id: 's3', text: 'Which sense do you use to hear music?', options: ['Sight', 'Smell', 'Hearing', 'Taste'], answer: 'Hearing', explanation: 'We use our ears for hearing.', topicArea: 'Animals & Humans' }
    ]
  },
  'History': {
    'Significant Individuals': [
      { id: 'h1', text: 'Who was Florence Nightingale?', options: ['A famous singer', 'A famous nurse', 'A queen', 'An explorer'], answer: 'A famous nurse', explanation: 'She is known for her work in nursing during the Crimean War.', topicArea: 'Significant Individuals' }
    ],
    'The Great Fire of London': [
      { id: 'h2', text: 'In which year did the Great Fire of London happen?', options: ['1066', '1666', '1966', '1866'], answer: '1666', explanation: 'The fire started in September 1666.', topicArea: 'The Great Fire of London' }
    ]
  },
  'Geography': {
    'The UK': [
      { id: 'g1', text: 'What is the capital city of England?', options: ['Paris', 'London', 'Edinburgh', 'Cardiff'], answer: 'London', explanation: 'London is the capital of England and the UK.', topicArea: 'The UK' },
      { id: 'g2', text: 'Which of these is a country in the UK?', options: ['France', 'Spain', 'Wales', 'Germany'], answer: 'Wales', explanation: 'The UK is made of England, Scotland, Wales, and Northern Ireland.', topicArea: 'The UK' }
    ]
  }
};
