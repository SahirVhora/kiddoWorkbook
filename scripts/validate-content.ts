import {
  getYear5Questions,
  STATIC_QUESTION_BANK,
} from "../src/data/questionBank";
import { YEAR_5_CORE_EXPANSION } from "../src/data/year5CoreExpansion";
import { YEAR_5_LESSONS } from "../src/data/year5Lessons";
import { YEAR_5_MORE_QUESTIONS } from "../src/data/year5MoreQuestions";
import { YEAR_5_QUESTION_EXPANSION } from "../src/data/year5QuestionExpansion";
import {
  SUBJECTS,
  TOPICS_BY_YEAR,
  type Question,
  type Subject,
} from "../src/types";

const YEAR = "Year 5" as const;
const errors: string[] = [];
const ids = new Set<string>();
let totalQuestions = 0;
let expansionQuestions = 0;
let year5Questions = 0;
let year5SourcedQuestions = 0;

function checkQuestion(
  subject: Subject,
  topic: string,
  question: Question,
  isExpansion: boolean,
) {
  totalQuestions += 1;
  if (isExpansion) expansionQuestions += 1;
  if (ids.has(question.id)) errors.push(`duplicate id: ${question.id}`);
  ids.add(question.id);
  if (!question.text.trim())
    errors.push(`${subject}/${topic}: empty question text (${question.id})`);
  if (!question.answer.trim())
    errors.push(`${subject}/${topic}: empty answer (${question.id})`);
  if (!question.explanation?.trim())
    errors.push(`${subject}/${topic}: missing explanation (${question.id})`);
  if (!question.topicArea?.trim())
    errors.push(`${subject}/${topic}: missing topic area (${question.id})`);
  if (
    isExpansion &&
    (!question.source?.title?.trim() ||
      !question.source.url.startsWith("https://"))
  ) {
    errors.push(
      `${subject}/${topic}: expansion question missing HTTPS source metadata (${question.id})`,
    );
  }
  if (question.options) {
    if (isExpansion && question.options.length !== 4)
      errors.push(
        `${subject}/${topic}: expansion question expected 4 options (${question.id})`,
      );
    if (new Set(question.options).size !== question.options.length)
      errors.push(
        `${subject}/${topic}: duplicate answer options (${question.id})`,
      );
    if (!question.options.includes(question.answer)) {
      errors.push(
        `${subject}/${topic}: answer is not one of the options (${question.id})`,
      );
    }
  }
}

const questionTexts = new Set<string>();

for (const subject of SUBJECTS) {
  const topicDefinitions = TOPICS_BY_YEAR[YEAR][subject];
  const expectedTopics = topicDefinitions.map(({ name }) => name);
  const actualTopics = Object.keys(STATIC_QUESTION_BANK[subject]);
  for (const topic of topicDefinitions) {
    if (!topic.strand?.trim())
      errors.push(
        `Year 5 topic missing curriculum strand: ${subject}/${topic.name}`,
      );
    const lesson = YEAR_5_LESSONS[`${subject}:${topic.name}`];
    if (!lesson) errors.push(`missing Year 5 lesson: ${subject}/${topic.name}`);
    if (
      lesson &&
      (lesson.learn.length < 3 ||
        !lesson.hook.trim() ||
        !lesson.remember.trim() ||
        !lesson.tryIt.trim())
    ) {
      errors.push(`incomplete Year 5 lesson: ${subject}/${topic.name}`);
    }
  }
  const expansionTopics = new Set([
    ...Object.keys(YEAR_5_CORE_EXPANSION[subject] ?? {}),
    ...Object.keys(YEAR_5_MORE_QUESTIONS[subject] ?? {}),
    ...Object.keys(YEAR_5_QUESTION_EXPANSION[subject] ?? {}),
  ]);
  for (const expansionTopic of expansionTopics) {
    if (!expectedTopics.includes(expansionTopic))
      errors.push(
        `expansion topic is not in Year 5 curriculum: ${subject}/${expansionTopic}`,
      );
  }
  for (const topic of expectedTopics) {
    const topicQuestions = getYear5Questions(subject, topic);
    const sourcedQuestions = topicQuestions.filter((question) =>
      question.source?.url.startsWith("https://www.gov.uk/"),
    ).length;
    year5Questions += topicQuestions.length;
    year5SourcedQuestions += sourcedQuestions;
    if (!topicQuestions.length)
      errors.push(`missing source-backed Year 5 topic: ${subject}/${topic}`);
    if (topicQuestions.length < 10)
      errors.push(
        `Year 5 topic needs at least 10 questions: ${subject}/${topic}`,
      );
    if (sourcedQuestions < 10)
      errors.push(
        `Year 5 topic needs at least 10 GOV.UK-sourced questions: ${subject}/${topic}`,
      );
  }
  for (const topic of actualTopics) {
    for (const question of STATIC_QUESTION_BANK[subject][topic] ?? []) {
      const isExpansion = Boolean(
        YEAR_5_CORE_EXPANSION[subject]?.[topic]?.some(
          (item) => item.id === question.id,
        ) ||
        YEAR_5_MORE_QUESTIONS[subject]?.[topic]?.some(
          (item) => item.id === question.id,
        ) ||
        YEAR_5_QUESTION_EXPANSION[subject]?.[topic]?.some(
          (item) => item.id === question.id,
        ),
      );
      const normalizedText = question.text.trim().toLowerCase();
      if (isExpansion && questionTexts.has(normalizedText))
        errors.push(
          `duplicate expansion question text: ${subject}/${topic}/${question.id}`,
        );
      if (isExpansion) questionTexts.add(normalizedText);
      checkQuestion(subject, topic, question, isExpansion);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `content validation passed: ${totalQuestions} total questions, ${year5Questions} Year 5 questions (${year5SourcedQuestions} source-backed), ${expansionQuestions} expansion questions, ${ids.size} unique IDs`,
);
