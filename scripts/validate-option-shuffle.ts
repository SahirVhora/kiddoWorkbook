import assert from "node:assert/strict";
import { shuffleQuestionOptions } from "../src/utils/shuffleQuestionOptions";

const original = {
  id: "fairness-check",
  text: "Which option is correct?",
  options: ["Correct", "Second", "Third", "Fourth"],
  answer: "Correct",
  explanation: "Used to validate answer-choice ordering.",
};

const originalOptions = [...original.options];
const answerPositions = new Set<number>();

for (let thirdSwap = 0; thirdSwap < 4; thirdSwap += 1) {
  for (let secondSwap = 0; secondSwap < 3; secondSwap += 1) {
    for (let firstSwap = 0; firstSwap < 2; firstSwap += 1) {
      const swaps = [
        (thirdSwap + 0.25) / 4,
        (secondSwap + 0.25) / 3,
        (firstSwap + 0.25) / 2,
      ];
      let call = 0;
      const shuffled = shuffleQuestionOptions(original, () => swaps[call++]);

      assert.equal(shuffled.answer, original.answer);
      assert.deepEqual([...shuffled.options!].sort(), [...originalOptions].sort());
      answerPositions.add(shuffled.options!.indexOf(original.answer));
    }
  }
}

assert.deepEqual(original.options, originalOptions, "source options were mutated");
assert.deepEqual(
  [...answerPositions].sort(),
  [0, 1, 2, 3],
  "the correct answer cannot reach every option position",
);

const writtenQuestion = {
  id: "written-answer",
  text: "Type an answer",
  answer: "Example",
};
assert.equal(
  shuffleQuestionOptions(writtenQuestion),
  writtenQuestion,
  "written-answer questions should remain unchanged",
);

console.log("Option shuffle validation passed.");
