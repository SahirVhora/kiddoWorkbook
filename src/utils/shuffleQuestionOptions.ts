import type { Question } from "../types";

type RandomSource = () => number;

export function shuffleOptions(
  options: readonly string[],
  random: RandomSource = Math.random,
): string[] {
  const shuffled = [...options];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export function shuffleQuestionOptions(
  question: Question,
  random: RandomSource = Math.random,
): Question {
  if (!question.options || question.options.length < 2) return question;

  return {
    ...question,
    options: shuffleOptions(question.options, random),
  };
}
