import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CalendarDays,
  ChartColumn,
  ChartPie,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Compass,
  Download,
  Flame,
  FlaskConical,
  Globe2,
  GraduationCap,
  Hash,
  Heart,
  History,
  Info,
  Leaf,
  Layers,
  Lightbulb,
  LockKeyhole,
  Map,
  Menu,
  MessageSquare,
  PenTool,
  Play,
  Plus,
  PoundSterling,
  RotateCcw,
  Shield,
  Ship,
  Sparkles,
  Square,
  Star,
  Sun,
  Target,
  Trophy,
  Type,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getYear5Questions } from "./data/questionBank";
import { YEAR_5_LESSONS } from "./data/year5Lessons";
import { YEAR_5_SOURCES } from "./data/year5QuestionExpansion";
import { downloadWorksheetPDF } from "./services/pdfService";
import { shuffleQuestionOptions } from "./utils/shuffleQuestionOptions";
import {
  SUBJECTS,
  TOPICS_BY_YEAR,
  type Question,
  type Subject,
  type Topic,
  type Workbook,
} from "./types";

const YEAR = "Year 5" as const;
const STORAGE_KEY = "school-quest-progress-v1";
const CONTENT_VERSION = "year5-curriculum-map-v4";
const QUICK_QUEST_SIZE = 5;
const FULL_QUEST_SIZE = 10;
const SUBJECT_ICONS: Record<Subject, LucideIcon> = {
  Mathematics: Brain,
  English: BookOpen,
  Science: FlaskConical,
  History,
  Geography: Globe2,
};
const TOPIC_ICONS: Record<string, LucideIcon> = {
  Hash,
  Plus,
  X,
  Layers,
  PieChart: ChartPie,
  Clock: Clock3,
  Square,
  Repeat: RotateCcw,
  Map,
  Calendar: CalendarDays,
  BookOpen,
  Brain,
  PenTool,
  Edit3: PenTool,
  Book: BookOpen,
  Type,
  Zap,
  MessageSquare,
  FlaskConical,
  Sun,
  User: UserRound,
  Compass,
  History,
  Shield,
  GraduationCap,
  Globe: Globe2,
  BarChart: ChartColumn,
  Leaf,
  DollarSign: PoundSterling,
  Ship,
};
const SUBJECT_STYLES: Record<
  Subject,
  { color: string; soft: string; glow: string }
> = {
  Mathematics: { color: "#7257e8", soft: "#f0edff", glow: "#dcd4ff" },
  English: { color: "#ef7062", soft: "#fff0ed", glow: "#ffd9d3" },
  Science: { color: "#159f83", soft: "#e8faf4", glow: "#c4f0e2" },
  History: { color: "#d08b35", soft: "#fff6e6", glow: "#f7dfb6" },
  Geography: { color: "#3389c8", soft: "#e9f5ff", glow: "#c8e5f8" },
};
const CURRICULUM_NOTES: Record<Subject, string> = {
  Mathematics: "Year 5 programme of study",
  English: "Upper Key Stage 2 programme (Years 5-6)",
  Science: "Year 5 programme plus working scientifically",
  History: "Key Stage 2 theme - school order may vary",
  Geography: "Key Stage 2 theme - school order may vary",
};

type WeeklyMission = {
  subject: Subject;
  topic: string;
  title: string;
  blurb: string;
  minutes: number;
};

const WEEKLY_MISSIONS: WeeklyMission[] = [
  {
    subject: "Mathematics",
    topic: "Prime Numbers",
    title: "Crack the prime code",
    blurb: "Find the numbers with only two secret factors.",
    minutes: 10,
  },
  {
    subject: "English",
    topic: "Relative Clauses",
    title: "Add extra detail",
    blurb: "Make your writing more vivid with a clever clause.",
    minutes: 10,
  },
  {
    subject: "Science",
    topic: "Earth & Space",
    title: "Tour the Solar System",
    blurb: "Discover how Earth spins, orbits, and belongs.",
    minutes: 12,
  },
  {
    subject: "History",
    topic: "Ancient Greece",
    title: "Think like an Athenian",
    blurb: "Explore ideas, Olympics, and two famous city-states.",
    minutes: 12,
  },
  {
    subject: "Geography",
    topic: "Biomes",
    title: "Meet the world’s biomes",
    blurb: "See how climate shapes every living thing.",
    minutes: 12,
  },
];

const FEATURED_LESSONS: Record<
  string,
  { hook: string; learn: string[]; remember: string; tryIt: string }
> = {
  "Mathematics:Prime Numbers": {
    hook: "Prime numbers are the secret agents of maths: they only let two numbers unlock them.",
    learn: [
      "A prime number has exactly two factors: 1 and itself.",
      "2 is the only even prime number. Every other even number can be split into 2 groups.",
      "1 is not prime because it has only one factor, not two.",
    ],
    remember:
      "Prime = two factors. Test small numbers by trying to divide them.",
    tryIt: "Can you spot the primes hiding in a number square?",
  },
  "Mathematics:Percentages": {
    hook: "A percentage is a friendly way to describe a part of a whole out of 100.",
    learn: [
      "The symbol % means ‘out of 100’. So 25% means 25 out of every 100.",
      "50% is the same as one half. 25% is the same as one quarter.",
      "To find 10%, divide by 10. Build other percentages from 10% and 50%.",
    ],
    remember: "Percent means per hundred.",
    tryIt: "What would 25% of your favourite collection look like?",
  },
  "Mathematics:Angles": {
    hook: "Angles are turns. A full spin is 360°, so every smaller turn is a piece of it.",
    learn: [
      "A right angle is a square corner: exactly 90°.",
      "An acute angle is smaller than 90°. An obtuse angle is bigger than 90° but smaller than 180°.",
      "A straight line makes 180° and a full turn makes 360°.",
    ],
    remember: "Right = 90°, straight = 180°, full turn = 360°.",
    tryIt: "Look around the room and find three different-sized turns.",
  },
  "Mathematics:Line Graphs": {
    hook: "A line graph tells a story about how something changes over time.",
    learn: [
      "The horizontal axis usually shows time or categories; the vertical axis shows the amount.",
      "Read the labels and scale before reading a point.",
      "A rising line means the value is increasing; a falling line means it is decreasing.",
    ],
    remember: "Check the axes, then follow the line.",
    tryIt: "Could you graph the temperature across one day?",
  },
  "English:Relative Clauses": {
    hook: "A relative clause is a mini sentence that adds extra detail to a noun.",
    learn: [
      "Relative clauses often begin with who, which, that, whose, or where.",
      "They can be tucked into a sentence to tell us more about a person, place, or thing.",
      "Use commas around extra information when the sentence still makes sense without it.",
    ],
    remember: "Who = people; which/that = things; where = places.",
    tryIt: "Add a relative clause to describe your favourite animal.",
  },
  "English:Modal Verbs": {
    hook: "Modal verbs are tiny power words that show how certain, possible, or necessary something is.",
    learn: [
      "Could, might, and may show possibility.",
      "Should gives advice, while must shows strong necessity.",
      "Modal verbs stay the same even when the subject changes.",
    ],
    remember: "Modal verbs change the strength of an idea.",
    tryIt: "Write three rules for a secret club using must, should, and might.",
  },
  "English:Parenthesis": {
    hook: "Parenthesis is extra information tucked into a sentence like a helpful side note.",
    learn: [
      "Brackets, dashes, and pairs of commas can show parenthesis.",
      "The sentence should still make sense if the extra information is removed.",
      "Use parenthesis to add detail, not to hide the main idea.",
    ],
    remember: "If it is extra, wrap it up.",
    tryIt: "Describe a magical pet and add one brilliant side note.",
  },
  "Science:Earth & Space": {
    hook: "Earth is part of a huge neighbourhood called the Solar System, with the Sun at its centre.",
    learn: [
      "The Sun is a star. Its gravity keeps the planets in orbit.",
      "Earth spins on its axis, giving us day and night.",
      "Earth travels around the Sun once each year. The Moon travels around Earth.",
    ],
    remember: "Spin = day and night. Orbit = a journey around something.",
    tryIt: "Make a mini Solar System with objects from your room.",
  },
  "Science:Forces": {
    hook: "Forces are pushes and pulls that can make things speed up, slow down, or change direction.",
    learn: [
      "Gravity pulls objects towards Earth.",
      "Friction slows objects when two surfaces rub together.",
      "Air resistance pushes against moving objects through the air.",
    ],
    remember:
      "A force can start, stop, speed up, slow down, or turn something.",
    tryIt:
      "Slide two objects across different surfaces. Which has more friction?",
  },
  "Science:Properties of Materials": {
    hook: "Materials have special properties that make them useful for different jobs.",
    learn: [
      "A conductor lets heat or electricity pass through easily.",
      "An insulator slows heat or electricity down.",
      "Some changes, like dissolving, can be reversed; others, like baking, cannot.",
    ],
    remember:
      "Choose a material because of its properties, not just its appearance.",
    tryIt:
      "Which material would make the best handle for a hot mug? Explain why.",
  },
  "History:Ancient Greece": {
    hook: "Ancient Greece was a collection of city-states that shaped ideas we still use today.",
    learn: [
      "Athens is remembered for democracy, art, theatre, and philosophy.",
      "Sparta was famous for its disciplined warriors and military culture.",
      "The first Olympic Games took place at Olympia.",
    ],
    remember: "Athens thought; Sparta trained; Olympia competed.",
    tryIt: "Design a new Olympic event inspired by an Ancient Greek skill.",
  },
  "History:The Vikings": {
    hook: "The Vikings were skilled sailors, traders, explorers, and settlers from Scandinavia.",
    learn: [
      "They travelled in longships that were quick and flexible.",
      "Vikings settled in parts of Britain and traded across Europe.",
      "Their stories and myths included gods such as Thor and Odin.",
    ],
    remember:
      "Viking life was more than raids: it also included farming, trade, and exploration.",
    tryIt:
      "Plan a safe Viking voyage. What supplies and skills would you need?",
  },
  "Geography:Biomes": {
    hook: "A biome is a large living zone with its own climate, plants, and animals.",
    learn: [
      "Rainforests are hot and wet with many layers of life.",
      "Deserts receive very little rainfall, so plants and animals must save water.",
      "Tundra is cold, windy, and has a short growing season.",
    ],
    remember: "Climate shapes the plants and animals that can survive there.",
    tryIt: "Invent an animal perfectly adapted to one biome.",
  },
  "Geography:Trade Links": {
    hook: "Trade links connect places as people exchange goods, food, materials, and ideas.",
    learn: [
      "An import is something brought into a country; an export is sent out.",
      "A product may travel through several countries before reaching a shop.",
      "Transport, cost, weather, and resources all affect trade.",
    ],
    remember: "Import in. Export out.",
    tryIt: "Choose an everyday object and trace its journey to your home.",
  },
};

const LESSONS = { ...YEAR_5_LESSONS, ...FEATURED_LESSONS };

const FALLBACK_LESSON = (subject: Subject, topic: Topic) => ({
  hook: `${topic.name} is a Year 5 adventure in ${subject}. Let’s unlock the big idea together.`,
  learn: [
    `Start with the key idea: ${topic.description.toLowerCase()}.`,
    "Look for patterns, examples, and clues rather than trying to memorise everything at once.",
    "Explain the idea in your own words. If you can teach it, you understand it.",
  ],
  remember: `Keep asking: how does ${topic.name.toLowerCase()} work, and why does it matter?`,
  tryIt: "Make a drawing, example, or question that shows what you discovered.",
});

type ProgressItem = {
  best: number;
  bestTotal?: number;
  attempts: number;
  completed: boolean;
  lastScore?: number;
  missedQuestionIds?: string[];
  lastPlayedAt?: string;
  reviewAttempts?: number;
  lastReviewScore?: number;
  lastReviewAt?: string;
  contentVersion?: string;
};
type Progress = Record<string, ProgressItem>;

type Screen = "home" | "lesson" | "quiz" | "results";

function readProgress(): Progress {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return {};
    return Object.fromEntries(
      Object.entries(parsed).flatMap(([key, value]) => {
        if (!value || typeof value !== "object" || Array.isArray(value))
          return [];
        const item = value as Record<string, unknown>;
        if (
          typeof item.best !== "number" ||
          typeof item.attempts !== "number" ||
          typeof item.completed !== "boolean"
        )
          return [];
        if (item.contentVersion !== CONTENT_VERSION) {
          return [
            [
              key,
              {
                ...item,
                best: 0,
                attempts: item.attempts,
                completed: item.completed,
                lastScore: undefined,
                missedQuestionIds: [],
                lastPlayedAt: undefined,
                contentVersion: CONTENT_VERSION,
              },
            ],
          ];
        }
        return [[key, item]];
      }),
    ) as Progress;
  } catch {
    return {};
  }
}

function getValidMissedQuestionIds(
  subject: Subject,
  topic: Topic,
  item?: ProgressItem,
) {
  const availableIds = new Set(
    getYear5Questions(subject, topic.name).map((question) => question.id),
  );
  return [...new Set(item?.missedQuestionIds ?? [])].filter((id) =>
    availableIds.has(id),
  );
}

function makeWorkbook(
  subject: Subject,
  topic: Topic,
  questions: Question[],
): Workbook {
  return {
    title: `${topic.name} Quest`,
    subject,
    topic: topic.name,
    grade: YEAR,
    difficulty: "Medium",
    questions,
  };
}

function App() {
  const [selectedSubject, setSelectedSubject] =
    useState<Subject>("Mathematics");
  const [selectedTopic, setSelectedTopic] = useState<Topic>(
    TOPICS_BY_YEAR[YEAR].Mathematics[0],
  );
  const [screen, setScreen] = useState<Screen>("home");
  const [progress, setProgress] = useState<Progress>(() => readProgress());
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [showParentPanel, setShowParentPanel] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<Question[] | null>(
    null,
  );
  const [isReview, setIsReview] = useState(false);
  const [selectedStrand, setSelectedStrand] = useState("All");

  const topics = TOPICS_BY_YEAR[YEAR][selectedSubject];
  const strands = [
    ...new Set(
      topics
        .map((topic) => topic.strand)
        .filter((strand): strand is string => Boolean(strand)),
    ),
  ];
  const visibleTopics =
    selectedStrand === "All"
      ? topics
      : topics.filter((topic) => topic.strand === selectedStrand);
  const questions =
    activeQuestions ?? getYear5Questions(selectedSubject, selectedTopic.name);
  const lesson =
    LESSONS[`${selectedSubject}:${selectedTopic.name}`] ??
    FALLBACK_LESSON(selectedSubject, selectedTopic);
  const currentQuestion = questions[quizIndex];
  const lessonSource =
    questions.find((question) => question.source)?.source ??
    (selectedSubject === "Mathematics"
      ? YEAR_5_SOURCES.maths
      : selectedSubject === "English"
        ? YEAR_5_SOURCES.english
        : selectedSubject === "Science"
          ? YEAR_5_SOURCES.science
          : selectedSubject === "History"
            ? YEAR_5_SOURCES.history
            : YEAR_5_SOURCES.geography);
  const progressKey = `${selectedSubject}:${selectedTopic.name}`;
  const completedCount = Object.keys(progress).filter(
    (key) => progress[key].completed,
  ).length;
  const totalTopics = SUBJECTS.reduce(
    (total, subject) => total + TOPICS_BY_YEAR[YEAR][subject].length,
    0,
  );
  const overallPercent = Math.min(
    100,
    Math.round((completedCount / Math.max(totalTopics, 1)) * 100),
  );
  const exploredCount = Object.keys(progress).length;
  const topicProgress = progress[progressKey];
  const reviewCandidates = SUBJECTS.flatMap((subject) =>
    TOPICS_BY_YEAR[YEAR][subject].map((topic) => {
      const item = progress[`${subject}:${topic.name}`];
      const validMissedIds = getValidMissedQuestionIds(subject, topic, item);
      const accuracy = item?.bestTotal ? (item.best ?? 0) / item.bestTotal : 1;
      return { subject, topic, item, validMissedIds, accuracy };
    }),
  )
    .filter(({ validMissedIds }) => validMissedIds.length > 0)
    .sort((a, b) => {
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      return (
        new Date(b.item?.lastPlayedAt ?? 0).getTime() -
        new Date(a.item?.lastPlayedAt ?? 0).getTime()
      );
    });
  const reviewCandidate = reviewCandidates[0];
  const nextMission =
    WEEKLY_MISSIONS.find(
      (mission) => !progress[`${mission.subject}:${mission.topic}`]?.completed,
    ) ?? WEEKLY_MISSIONS[0];
  const recommendedSubject = reviewCandidate?.subject ?? nextMission.subject;
  const recommendedTopic =
    reviewCandidate?.topic ??
    TOPICS_BY_YEAR[YEAR][nextMission.subject].find(
      (topic) => topic.name === nextMission.topic,
    ) ??
    TOPICS_BY_YEAR[YEAR][nextMission.subject][0];
  const MissionIcon =
    SUBJECT_ICONS[reviewCandidate ? recommendedSubject : nextMission.subject];
  const originalQuestions = getYear5Questions(
    selectedSubject,
    selectedTopic.name,
  );
  const year5QuestionCount = SUBJECTS.reduce(
    (total, subject) =>
      total +
      TOPICS_BY_YEAR[YEAR][subject].reduce(
        (subjectTotal, topic) =>
          subjectTotal + getYear5Questions(subject, topic.name).length,
        0,
      ),
    0,
  );
  const subjectSummaries = SUBJECTS.map((subject) => {
    const subjectTopics = TOPICS_BY_YEAR[YEAR][subject];
    return {
      subject,
      complete: subjectTopics.filter(
        (topic) => progress[`${subject}:${topic.name}`]?.completed,
      ).length,
      total: subjectTopics.length,
    };
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Progress is a helpful extra; the learning flow still works if storage is unavailable.
    }
  }, [progress]);

  useEffect(() => {
    if (!showParentPanel) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowParentPanel(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showParentPanel]);

  const chooseSubject = (subject: Subject) => {
    const nextTopic = TOPICS_BY_YEAR[YEAR][subject][0];
    setSelectedSubject(subject);
    setSelectedTopic(nextTopic);
    setActiveQuestions(null);
    setIsReview(false);
    setSelectedStrand("All");
    setScreen("home");
    setMenuOpen(false);
  };

  const openTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setActiveQuestions(null);
    setIsReview(false);
    setScreen("lesson");
    setQuizIndex(0);
    setAnswers({});
    setAnswerRevealed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openReview = (subject: Subject, topic: Topic, missedIds: string[]) => {
    const missed = new Set(missedIds);
    const reviewQuestions = getYear5Questions(subject, topic.name).filter(
      (question) => missed.has(question.id),
    );
    if (!reviewQuestions.length) return;
    setSelectedSubject(subject);
    setSelectedTopic(topic);
    setActiveQuestions(reviewQuestions);
    setIsReview(true);
    setScreen("lesson");
    setQuizIndex(0);
    setAnswers({});
    setAnswerRevealed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startQuest = (requestedSize = QUICK_QUEST_SIZE) => {
    if (!originalQuestions.length) return;
    const selectedQuestions = isReview
      ? questions
      : [...originalQuestions]
          .map((question) => ({ question, order: Math.random() }))
          .sort((a, b) => a.order - b.order)
          .slice(0, Math.min(requestedSize, originalQuestions.length))
          .map(({ question }) => question);
    const nextQuestions = selectedQuestions.map((question) =>
      shuffleQuestionOptions(question),
    );
    setActiveQuestions(nextQuestions);
    setQuizIndex(0);
    setAnswers({});
    setAnswerRevealed(false);
    setScore(0);
    setScreen("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectAnswer = (answer: string) => {
    if (answerRevealed || !currentQuestion) return;
    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: answer }));
    setAnswerRevealed(true);
    if (
      answer.trim().toLowerCase() ===
      currentQuestion.answer.trim().toLowerCase()
    ) {
      setScore((previous) => previous + 1);
    }
  };

  const draftAnswer = (answer: string) => {
    if (answerRevealed || !currentQuestion) return;
    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: answer }));
  };

  const checkAnswer = () => {
    if (
      !currentQuestion ||
      answerRevealed ||
      !answers[currentQuestion.id]?.trim()
    )
      return;
    const answer = answers[currentQuestion.id];
    setAnswerRevealed(true);
    if (
      answer.trim().toLowerCase() ===
      currentQuestion.answer.trim().toLowerCase()
    ) {
      setScore((previous) => previous + 1);
    }
  };

  const finishQuest = () => {
    const finalScore = score;
    const missedQuestionIds = questions
      .filter(
        (question) =>
          answers[question.id]?.trim().toLowerCase() !==
          question.answer.trim().toLowerCase(),
      )
      .map((question) => question.id);
    const playedQuestionIds = new Set(questions.map((question) => question.id));
    const previousItem = progress[progressKey];
    const previousMissedIds = getValidMissedQuestionIds(
      selectedSubject,
      selectedTopic,
      previousItem,
    );
    const remainingMissedIds = [
      ...new Set([
        ...previousMissedIds.filter((id) => !playedQuestionIds.has(id)),
        ...missedQuestionIds,
      ]),
    ];
    const now = new Date().toISOString();
    const previousBest = previousItem?.best ?? 0;
    const previousBestTotal = previousItem?.bestTotal ?? QUICK_QUEST_SIZE;
    const previousBestRatio = previousBest / Math.max(previousBestTotal, 1);
    const currentRatio = finalScore / Math.max(questions.length, 1);
    const isNewBest =
      currentRatio > previousBestRatio ||
      (currentRatio === previousBestRatio && finalScore > previousBest);

    setProgress((previous) => ({
      ...previous,
      [progressKey]: isReview
        ? {
            ...previousItem,
            best: previousItem?.best ?? 0,
            attempts: previousItem?.attempts ?? 0,
            completed: previousItem?.completed ?? true,
            lastScore: previousItem?.lastScore,
            missedQuestionIds: remainingMissedIds,
            lastPlayedAt: previousItem?.lastPlayedAt,
            reviewAttempts: (previousItem?.reviewAttempts ?? 0) + 1,
            lastReviewScore: finalScore,
            lastReviewAt: now,
            contentVersion: CONTENT_VERSION,
          }
        : {
            ...previousItem,
            best: isNewBest ? finalScore : previousBest,
            bestTotal: isNewBest ? questions.length : previousBestTotal,
            attempts: (previousItem?.attempts ?? 0) + 1,
            completed: true,
            lastScore: finalScore,
            missedQuestionIds: remainingMissedIds,
            lastPlayedAt: now,
            contentVersion: CONTENT_VERSION,
          },
    }));
    setScreen("results");
  };

  const nextQuestion = () => {
    if (quizIndex >= questions.length - 1) {
      finishQuest();
      return;
    }
    setQuizIndex((previous) => previous + 1);
    setAnswerRevealed(false);
  };

  const downloadPack = () => {
    if (originalQuestions.length)
      downloadWorksheetPDF(
        makeWorkbook(selectedSubject, selectedTopic, originalQuestions),
      );
  };

  const resetProgress = () => {
    setProgress({});
    setShowParentPanel(false);
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <button
          className="brand"
          onClick={() => setScreen("home")}
          aria-label="Go to School Quest home"
        >
          <span className="brand-mark">
            <GraduationCap size={21} strokeWidth={2.5} />
          </span>
          <span>
            <strong>School</strong> Quest
          </span>
        </button>
        <div className="topbar-actions">
          <div className="streak-pill" title="Quests explored on this device">
            <Flame size={16} /> {exploredCount} quests explored
          </div>
          <button
            className="parent-button"
            onClick={() => setShowParentPanel(true)}
          >
            <LockKeyhole size={15} /> For grown-ups
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <p className="eyebrow">Explore Year 5</p>
            {SUBJECTS.map((subject) => (
              <button key={subject} onClick={() => chooseSubject(subject)}>
                {subject}
                <ChevronRight size={16} />
              </button>
            ))}
            <button onClick={() => setShowParentPanel(true)}>
              <LockKeyhole size={15} /> For grown-ups
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="page-content">
        {screen === "home" && (
          <motion.div
            className="dashboard"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <section className="welcome-row">
              <div>
                <p className="eyebrow">
                  <Sparkles size={14} /> Your Year 5 learning space
                </p>
                <h1>
                  Ready for a <span>brilliant</span> little adventure?
                </h1>
                <p className="lede">
                  Short lessons, curious questions, and tiny wins that make
                  school feel easier.
                </p>
                <div
                  className="catalogue-pills"
                  aria-label="Learning library size"
                >
                  <span>
                    <BookOpen size={14} /> {totalTopics} topic quests
                  </span>
                  <span>
                    <CircleHelp size={14} /> {year5QuestionCount} practice
                    questions
                  </span>
                </div>
              </div>
              <div className="avatar-orbit" aria-hidden="true">
                <div className="orbit-star">
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="avatar-face">🌈</div>
                <div className="orbit-dot" />
              </div>
            </section>

            <section className="progress-banner">
              <div className="progress-copy">
                <div className="progress-icon">
                  <Target size={21} />
                </div>
                <div>
                  <p className="eyebrow">Your quest map</p>
                  <h2>
                    {overallPercent === 0
                      ? "Your first adventure starts here"
                      : `${overallPercent}% of your map explored`}
                  </h2>
                  <p>Every lesson you try helps your confidence grow.</p>
                </div>
              </div>
              <div className="progress-meter">
                <div className="progress-meter-track">
                  <span style={{ width: `${Math.max(overallPercent, 4)}%` }} />
                </div>
                <strong>
                  {completedCount}
                  <small> quests complete</small>
                </strong>
              </div>
            </section>

            <div className="dashboard-grid">
              <section className="mission-card">
                <div className="mission-glow" />
                <div className="mission-heading">
                  <span className="mission-label">
                    <Zap size={14} fill="currentColor" />{" "}
                    {reviewCandidate ? "Smart review" : "Today’s mission"}
                  </span>
                  <span className="time-label">
                    <Clock3 size={14} />{" "}
                    {reviewCandidate ? "5 min" : `${nextMission.minutes} min`}
                  </span>
                </div>
                <div className="mission-content">
                  <div className="mission-icon">
                    {reviewCandidate ? (
                      <RotateCcw size={31} />
                    ) : (
                      <MissionIcon size={31} />
                    )}
                  </div>
                  <div>
                    <p className="subject-label">
                      {reviewCandidate
                        ? `${recommendedSubject} · Revisit`
                        : `${nextMission.subject} · ${YEAR}`}
                    </p>
                    <h2>
                      {reviewCandidate
                        ? `Strengthen ${recommendedTopic.name}`
                        : nextMission.title}
                    </h2>
                    <p>
                      {reviewCandidate
                        ? "A few friendly retry questions will turn mistakes into confidence."
                        : nextMission.blurb}
                    </p>
                  </div>
                </div>
                <button
                  className="primary-button"
                  onClick={() =>
                    reviewCandidate
                      ? openReview(
                          recommendedSubject,
                          recommendedTopic,
                          reviewCandidate.validMissedIds,
                        )
                      : openTopic(recommendedTopic)
                  }
                >
                  Begin mission <ArrowRight size={17} />
                </button>
                <div className="mission-foot">
                  <span>
                    <CheckCircle2 size={15} /> Learn first
                  </span>
                  <span>
                    <Trophy size={15} /> Earn 20 XP
                  </span>
                </div>
              </section>

              <section className="stats-card">
                <div className="card-heading">
                  <h3>Your highlights</h3>
                  <Award size={19} />
                </div>
                <div className="stat-list">
                  <div>
                    <span className="stat-emoji">🔥</span>
                    <p>
                      <strong>{exploredCount} quests</strong>
                      <small>explored so far</small>
                    </p>
                  </div>
                  <div>
                    <span className="stat-emoji">⭐</span>
                    <p>
                      <strong>{completedCount * 20} XP</strong>
                      <small>confidence points</small>
                    </p>
                  </div>
                  <div>
                    <span className="stat-emoji">💡</span>
                    <p>
                      <strong>{completedCount ? "Growing" : "Ready"}</strong>
                      <small>curiosity level</small>
                    </p>
                  </div>
                </div>
                <div className="encouragement">
                  <Heart size={15} fill="currentColor" /> Small steps are big
                  progress.
                </div>
              </section>
            </div>

            <section className="weekly-quest-card">
              <div className="weekly-heading">
                <div>
                  <p className="eyebrow">
                    <Map size={14} /> Your guided route
                  </p>
                  <h2>A little learning rhythm</h2>
                  <p>Five small adventures make a brilliant Year 5 week.</p>
                </div>
                <span className="route-badge">
                  {
                    WEEKLY_MISSIONS.filter(
                      (mission) =>
                        progress[`${mission.subject}:${mission.topic}`]
                          ?.completed,
                    ).length
                  }
                  /{WEEKLY_MISSIONS.length} complete
                </span>
              </div>
              <div className="route-list">
                {WEEKLY_MISSIONS.map((mission, index) => {
                  const done =
                    progress[`${mission.subject}:${mission.topic}`]?.completed;
                  const missionTopic =
                    TOPICS_BY_YEAR[YEAR][mission.subject].find(
                      (topic) => topic.name === mission.topic,
                    ) ?? TOPICS_BY_YEAR[YEAR][mission.subject][0];
                  return (
                    <button
                      key={mission.topic}
                      className={`route-item ${done ? "done" : ""}`}
                      onClick={() => openTopic(missionTopic)}
                    >
                      <span className="route-number">
                        {done ? <Check size={14} /> : index + 1}
                      </span>
                      <span className="route-copy">
                        <strong>{mission.title}</strong>
                        <small>
                          {mission.subject} · {mission.minutes} min
                        </small>
                      </span>
                      <ChevronRight size={16} />
                    </button>
                  );
                })}
              </div>
            </section>

            {reviewCandidate && (
              <section className="review-banner">
                <div className="review-banner-icon">
                  <RotateCcw size={19} />
                </div>
                <div>
                  <p className="eyebrow">A helpful next step</p>
                  <strong>Revisit {recommendedTopic.name}</strong>
                  <p>
                    You have {reviewCandidate.validMissedIds.length} question
                    {reviewCandidate.validMissedIds.length === 1
                      ? ""
                      : "s"}{" "}
                    waiting for a second look.
                  </p>
                </div>
                <button
                  className="secondary-button"
                  onClick={() =>
                    openReview(
                      recommendedSubject,
                      recommendedTopic,
                      reviewCandidate.validMissedIds,
                    )
                  }
                >
                  Review now <ArrowRight size={15} />
                </button>
              </section>
            )}

            <section className="section-block">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Pick your path</p>
                  <h2>What would you like to explore?</h2>
                </div>
                <span className="year-badge">
                  Year 5 <ChevronRight size={14} />
                </span>
              </div>
              <div className="subject-tabs">
                {SUBJECTS.map((subject) => {
                  const Icon = SUBJECT_ICONS[subject];
                  const style = SUBJECT_STYLES[subject];
                  return (
                    <button
                      key={subject}
                      className={`subject-tab ${selectedSubject === subject ? "active" : ""}`}
                      style={
                        {
                          "--subject-color": style.color,
                          "--subject-soft": style.soft,
                        } as React.CSSProperties
                      }
                      onClick={() => chooseSubject(subject)}
                    >
                      <span>
                        <Icon size={18} />
                      </span>
                      {subject}
                    </button>
                  );
                })}
              </div>
              <div className="curriculum-strip">
                <GraduationCap size={16} />
                <div>
                  <strong>{CURRICULUM_NOTES[selectedSubject]}</strong>
                  <span>
                    {topics.length} carefully mapped topics · choose a{" "}
                    {QUICK_QUEST_SIZE}-question quick quest or a{" "}
                    {FULL_QUEST_SIZE}-question full challenge
                  </span>
                </div>
              </div>
              <div
                className="strand-filter"
                aria-label={`Filter ${selectedSubject} topics by strand`}
              >
                <span>Show me</span>
                <button
                  className={selectedStrand === "All" ? "active" : ""}
                  onClick={() => setSelectedStrand("All")}
                  aria-pressed={selectedStrand === "All"}
                >
                  All <small>{topics.length}</small>
                </button>
                {strands.map((strand) => {
                  const count = topics.filter(
                    (topic) => topic.strand === strand,
                  ).length;
                  return (
                    <button
                      key={strand}
                      className={selectedStrand === strand ? "active" : ""}
                      onClick={() => setSelectedStrand(strand)}
                      aria-pressed={selectedStrand === strand}
                    >
                      {strand} <small>{count}</small>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="topic-grid" aria-live="polite">
              {visibleTopics.map((topic) => {
                const Icon =
                  TOPIC_ICONS[topic.icon] ?? SUBJECT_ICONS[selectedSubject];
                const style = SUBJECT_STYLES[selectedSubject];
                const item = progress[`${selectedSubject}:${topic.name}`];
                const questionCount = getYear5Questions(
                  selectedSubject,
                  topic.name,
                ).length;
                return (
                  <motion.button
                    key={topic.name}
                    className={`topic-card ${topic.name === selectedTopic.name ? "featured" : ""}`}
                    style={
                      {
                        "--topic-color": style.color,
                        "--topic-soft": style.soft,
                        "--topic-glow": style.glow,
                      } as React.CSSProperties
                    }
                    onClick={() => openTopic(topic)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="topic-card-top">
                      <span className="topic-icon">
                        <Icon size={21} />
                      </span>
                      {item?.completed ? (
                        <span className="completed-badge">
                          <Check size={13} /> Explored
                        </span>
                      ) : (
                        <span className="topic-arrow">
                          <ArrowUpRightIcon />
                        </span>
                      )}
                    </div>
                    <p className="topic-number">
                      {topic.strand ?? selectedSubject} · {questionCount}{" "}
                      sourced questions
                    </p>
                    <h3>{topic.name}</h3>
                    <p>{topic.description}</p>
                    <span className="topic-cta">
                      Open lesson <ChevronRight size={15} />
                    </span>
                  </motion.button>
                );
              })}
            </section>

            <section className="parent-note">
              <div className="parent-note-icon">
                <Info size={19} />
              </div>
              <div>
                <strong>
                  Made for curious kids, with grown-up peace of mind.
                </strong>
                <p>
                  School Quest keeps progress on this device. There are no
                  adverts, no accounts, and no child details needed.
                </p>
              </div>
              <button onClick={() => setShowParentPanel(true)}>
                How it works <ArrowRight size={15} />
              </button>
            </section>
          </motion.div>
        )}

        {screen === "lesson" && (
          <LessonView
            subject={selectedSubject}
            topic={selectedTopic}
            lesson={lesson}
            questions={isReview ? questions : originalQuestions}
            isReview={isReview}
            source={lessonSource}
            progress={topicProgress}
            onBack={() => setScreen("home")}
            onStartQuick={() => startQuest(QUICK_QUEST_SIZE)}
            onStartFull={() => startQuest(FULL_QUEST_SIZE)}
            onDownload={downloadPack}
          />
        )}

        {screen === "quiz" && currentQuestion && (
          <QuizView
            subject={selectedSubject}
            topic={selectedTopic}
            question={currentQuestion}
            index={quizIndex}
            total={questions.length}
            selectedAnswer={answers[currentQuestion.id]}
            revealed={answerRevealed}
            score={score}
            isReview={isReview}
            onBack={() => setScreen("lesson")}
            onAnswer={selectAnswer}
            onDraft={draftAnswer}
            onCheck={checkAnswer}
            onNext={nextQuestion}
          />
        )}

        {screen === "results" && (
          <ResultsView
            topic={selectedTopic}
            score={score}
            total={questions.length}
            best={progress[progressKey]?.best ?? score}
            bestTotal={progress[progressKey]?.bestTotal ?? questions.length}
            isReview={isReview}
            onAgain={() => startQuest(questions.length)}
            onHome={() => setScreen("home")}
            onReview={() => setScreen("lesson")}
          />
        )}
      </main>

      <footer className="site-footer">
        <span>
          <GraduationCap size={17} /> School Quest
        </span>
        <p>Little lessons for big imaginations.</p>
        <button onClick={() => setShowParentPanel(true)}>
          Parents & carers
        </button>
      </footer>

      <AnimatePresence>
        {showParentPanel && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowParentPanel(false)}
          >
            <motion.div
              className="parent-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="grown-up-panel-title"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setShowParentPanel(false)}
                aria-label="Close parent view"
              >
                <X size={19} />
              </button>
              <div className="modal-icon">
                <LockKeyhole size={22} />
              </div>
              <p className="eyebrow">For parents and carers</p>
              <h2 id="grown-up-panel-title">
                A safe, useful place to practise.
              </h2>
              <p>
                School Quest now maps the Year 5 programmes for maths and
                science, and the Years 5-6 English programme. History and
                geography are mapped to Key Stage 2 because schools choose their
                own order and themes.
              </p>
              <div className="parent-progress">
                <p className="eyebrow">Progress on this device</p>
                {subjectSummaries.map(({ subject, complete, total }) => (
                  <div key={subject}>
                    <span>{subject}</span>
                    <strong>
                      {complete}/{total} explored
                    </strong>
                  </div>
                ))}
              </div>
              <div className="privacy-list">
                <span>
                  <CheckCircle2 size={16} /> No child data collected
                </span>
                <span>
                  <CheckCircle2 size={16} /> No adverts or social features
                </span>
                <span>
                  <CheckCircle2 size={16} /> Progress stays in this browser
                </span>
              </div>
              <p className="parent-curriculum-note">
                Quick quests use five varied questions for a manageable session.
                Full challenges and printable packs use all ten questions for
                the chosen topic.
              </p>
              <div className="modal-actions">
                <button className="secondary-button" onClick={resetProgress}>
                  <RotateCcw size={15} /> Reset progress
                </button>
                <button
                  className="primary-button"
                  onClick={() => setShowParentPanel(false)}
                >
                  Back to quest <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={15} className="arrow-up-right" />;
}

function LessonView({
  subject,
  topic,
  lesson,
  questions,
  isReview,
  source,
  progress,
  onBack,
  onStartQuick,
  onStartFull,
  onDownload,
}: {
  subject: Subject;
  topic: Topic;
  lesson: { hook: string; learn: string[]; remember: string; tryIt: string };
  questions: Question[];
  isReview: boolean;
  source: { title: string; url: string };
  progress?: ProgressItem;
  onBack: () => void;
  onStartQuick: () => void;
  onStartFull: () => void;
  onDownload: () => void;
}) {
  const Icon = SUBJECT_ICONS[subject];
  const style = SUBJECT_STYLES[subject];
  return (
    <motion.div
      className="lesson-view"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <button className="back-link" onClick={onBack}>
        <ArrowLeft size={17} /> Back to your quest map
      </button>
      <div
        className="lesson-hero"
        style={
          {
            "--lesson-color": style.color,
            "--lesson-soft": style.soft,
            "--lesson-glow": style.glow,
          } as React.CSSProperties
        }
      >
        <div className="lesson-hero-copy">
          <span className="subject-chip">
            <Icon size={14} /> {subject} · {YEAR}
          </span>
          <h1>{topic.name}</h1>
          <p>{lesson.hook}</p>
          <div className="lesson-meta">
            <span>
              <Clock3 size={15} /> About 10 minutes
            </span>
            <span>
              <Sparkles size={15} />{" "}
              {progress?.completed ? "Ready for a replay" : "New adventure"}
            </span>
          </div>
        </div>
        <div className="lesson-hero-art">
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <Icon size={62} />
        </div>
      </div>
      <div className="lesson-layout">
        <div className="learn-column">
          <p className="eyebrow">The big idea</p>
          <h2>Let’s unlock it together</h2>
          {lesson.learn.map((point, index) => (
            <div className="learn-step" key={point}>
              <span>{index + 1}</span>
              <p>{point}</p>
            </div>
          ))}
          <div className="remember-card">
            <Lightbulb size={20} />
            <div>
              <p className="eyebrow">Memory spark</p>
              <strong>{lesson.remember}</strong>
            </div>
          </div>
          <a
            className="source-note"
            href={source.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${source.title} in a new tab`}
          >
            <Info size={15} />
            <span>
              <strong>Curriculum alignment for grown-ups</strong>
              <small>{source.title}</small>
            </span>
            <ArrowRight size={14} />
          </a>
        </div>
        <aside className="try-column">
          <div className="try-card">
            <span className="try-icon">
              <Compass size={24} />
            </span>
            <p className="eyebrow">Your real-world mission</p>
            <h3>Try this!</h3>
            <p>{lesson.tryIt}</p>
            <div className="try-dots">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="lesson-actions">
            <button
              className="primary-button wide"
              onClick={onStartQuick}
              disabled={!questions.length}
            >
              <Play size={16} fill="currentColor" />{" "}
              {isReview ? "Start smart review" : "Start quick quest"}{" "}
              <span>
                {isReview
                  ? questions.length
                  : Math.min(QUICK_QUEST_SIZE, questions.length)}{" "}
                questions
              </span>
            </button>
            {!isReview && (
              <button
                className="secondary-button wide"
                onClick={onStartFull}
                disabled={!questions.length}
              >
                <Trophy size={16} /> Try the full challenge{" "}
                <span>
                  {Math.min(FULL_QUEST_SIZE, questions.length)} questions
                </span>
              </button>
            )}
            <button
              className="secondary-button wide"
              onClick={onDownload}
              disabled={!questions.length}
            >
              <Download size={16} /> Print full practice pack
            </button>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function QuizView({
  subject,
  topic,
  question,
  index,
  total,
  selectedAnswer,
  revealed,
  score,
  isReview,
  onBack,
  onAnswer,
  onDraft,
  onCheck,
  onNext,
}: {
  subject: Subject;
  topic: Topic;
  question: Question;
  index: number;
  total: number;
  selectedAnswer?: string;
  revealed: boolean;
  score: number;
  isReview: boolean;
  onBack: () => void;
  onAnswer: (answer: string) => void;
  onDraft: (answer: string) => void;
  onCheck: () => void;
  onNext: () => void;
}) {
  const Icon = SUBJECT_ICONS[subject];
  const isCorrect =
    selectedAnswer?.trim().toLowerCase() ===
    question.answer.trim().toLowerCase();
  return (
    <motion.div
      className="quiz-view"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="quiz-top">
        <button className="back-link" onClick={onBack}>
          <ArrowLeft size={17} /> Leave quest
        </button>
        <div className="quiz-score">
          <Star size={15} fill="currentColor" /> {score} correct
        </div>
      </div>
      <div className="quiz-progress" aria-live="polite">
        <div>
          <span>
            {topic.name} ·{" "}
            {isReview
              ? "Smart review"
              : total > QUICK_QUEST_SIZE
                ? "Full challenge"
                : "Quick quest"}
          </span>
          <strong>
            {index + 1}
            <small> / {total}</small>
          </strong>
        </div>
        <div className="quiz-track">
          <span style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
      </div>
      <div className="question-card">
        <div className="question-kicker">
          <span>
            <Icon size={15} /> Question {index + 1}
          </span>
          <span>{question.topicArea ?? subject}</span>
        </div>
        <h1>{question.text}</h1>
        {question.options?.length ? (
          <div className="answer-grid">
            {question.options.map((option, optionIndex) => {
              const chosen = selectedAnswer === option;
              const correct = revealed && option === question.answer;
              const wrong = revealed && chosen && !correct;
              return (
                <button
                  key={option}
                  className={`answer-option ${chosen ? "chosen" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`}
                  onClick={() => onAnswer(option)}
                  disabled={revealed}
                >
                  <span className="answer-letter">
                    {String.fromCharCode(65 + optionIndex)}
                  </span>
                  <span>{option}</span>
                  {correct && <CheckCircle2 size={18} />}
                  {wrong && <X size={18} />}
                </button>
              );
            })}{" "}
          </div>
        ) : (
          <input
            className="answer-input"
            autoFocus
            value={selectedAnswer ?? ""}
            onChange={(event) => onDraft(event.target.value)}
            placeholder="Type your answer…"
            disabled={revealed}
          />
        )}
        {revealed && (
          <motion.div
            role="status"
            className={`answer-feedback ${isCorrect ? "good" : "try-again"}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>
              {isCorrect
                ? "✨ Brilliant thinking!"
                : "🌱 Good try — now you know more!"}
            </span>
            <p>{question.explanation ?? `The answer is ${question.answer}.`}</p>
            {question.source && (
              <a
                className="answer-source"
                href={question.source.url}
                target="_blank"
                rel="noreferrer"
              >
                <Info size={13} /> Curriculum reference: {question.source.title}
              </a>
            )}
          </motion.div>
        )}
        <div className="question-actions">
          {!revealed ? (
            question.options?.length ? (
              <p className="hint-text">
                <CircleHelp size={15} /> Choose an answer to continue
              </p>
            ) : (
              <button
                className="primary-button"
                onClick={onCheck}
                disabled={!selectedAnswer?.trim()}
              >
                Check answer <Check size={17} />
              </button>
            )
          ) : (
            <button className="primary-button" onClick={onNext}>
              {index === total - 1 ? "See my result" : "Next question"}{" "}
              <ArrowRight size={17} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ResultsView({
  topic,
  score,
  total,
  best,
  bestTotal,
  isReview,
  onAgain,
  onHome,
  onReview,
}: {
  topic: Topic;
  score: number;
  total: number;
  best: number;
  bestTotal: number;
  isReview: boolean;
  onAgain: () => void;
  onHome: () => void;
  onReview: () => void;
}) {
  const percent = total ? Math.round((score / total) * 100) : 0;
  const message =
    percent === 100
      ? "You absolutely aced it!"
      : percent >= 60
        ? "That was a strong adventure!"
        : "Every try makes your brain stronger!";
  return (
    <motion.div
      className="results-view"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="results-orbit">
        <Trophy size={48} />
      </div>
      <p className="eyebrow">
        {isReview ? "Review complete" : "Quest complete"}
      </p>
      <h1>{message}</h1>
      <p className="results-lede">
        {isReview ? (
          <>
            You revisited <strong>{topic.name}</strong> and gave those tricky
            questions another go.
          </>
        ) : (
          <>
            You explored <strong>{topic.name}</strong> and made it all the way
            to the end.
          </>
        )}
      </p>
      <div className="score-bubble">
        <strong>
          {score}
          <small> / {total}</small>
        </strong>
        <span>correct answers</span>
      </div>
      <div className="result-stats">
        <div>
          <span>Accuracy</span>
          <strong>{percent}%</strong>
        </div>
        <div>
          <span>{isReview ? "Quest best" : "Best score"}</span>
          <strong>
            {best}/{bestTotal}
          </strong>
        </div>
        <div>
          <span>XP earned</span>
          <strong>+{score * 20}</strong>
        </div>
      </div>
      <div className="results-actions">
        <button className="primary-button" onClick={onAgain}>
          <RotateCcw size={16} /> Try again
        </button>
        <button className="secondary-button" onClick={onReview}>
          <BookOpen size={16} /> Review lesson
        </button>
        <button className="text-button" onClick={onHome}>
          Explore another topic <ArrowRight size={15} />
        </button>
      </div>
      <div className="celebration-note">
        <Sparkles size={17} /> Keep going — the next tiny win is waiting.
      </div>
    </motion.div>
  );
}

export default App;
