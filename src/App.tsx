import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Download,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  Layout,
  RefreshCw,
  FileText,
  BrainCircuit,
  Info,
  Library,
  Wand2,
  MousePointer2,
  FileDown,
  HelpCircle,
  Plus,
  X,
  PieChart,
  Square,
  MessageSquare,
  Clock,
  Repeat,
  User,
  Leaf,
  Sun,
  Globe,
  Cloud,
  Settings,
  Type,
  Book,
  PenTool,
  Hash,
  Edit3,
  Layers,
  History,
  Map,
  Shield,
  Users,
  Home,
  DollarSign,
  PawPrint,
  Lightbulb,
  Trophy,
  Star,
  UserCircle,
  Flag,
  ArrowLeft,
  Smile,
  Zap,
  Calendar,
  Music,
  CloudRain,
  Gamepad2,
  Crown,
  Compass,
  Link,
  Bug,
  Apple,
  Plane,
  MapPin,
  Camera,
  Palmtree,
  BarChart,
  Mountain,
  Sword,
  Triangle,
  FlaskConical,
  Ship,
  Lock,
} from "lucide-react";
import {
  SUBJECTS,
  YEARS,
  TOPICS_BY_YEAR,
  Subject,
  Workbook,
  Question,
  Difficulty,
  YearGroup,
} from "./types";
import { generateWorkbookQuestions } from "./services/gemini";
import { downloadWorksheetPDF } from "./services/pdfService";
import { STATIC_QUESTION_BANK } from "./data/questionBank";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ICON_MAP: Record<string, React.ElementType> = {
  Plus,
  X,
  PieChart,
  Square,
  MessageSquare,
  Clock,
  Repeat,
  User,
  Leaf,
  Sun,
  Zap,
  Globe,
  Cloud,
  Settings,
  Type,
  Book,
  FileText,
  PenTool,
  Hash,
  Edit3,
  Layers,
  History,
  Map,
  Shield,
  Users,
  Home,
  DollarSign,
  PawPrint,
  Lightbulb,
  Trophy,
  Star,
  UserCircle,
  Flag,
  Calendar,
  Music,
  CloudRain,
  Gamepad2,
  Crown,
  Compass,
  Link,
  Bug,
  Apple,
  Plane,
  MapPin,
  Camera,
  Palmtree,
  BarChart,
  Mountain,
  Sword,
  Triangle,
  FlaskConical,
  Ship,
  Lock,
};

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(SUBJECTS[0]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [yearGroup, setYearGroup] = useState<YearGroup>(YEARS[2]); // Default to Year 3
  const [difficulty, setDifficulty] = useState<Difficulty>("Medium");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [workbook, setWorkbook] = useState<Workbook | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [mode, setMode] = useState<"ai" | "library">("ai");
  const [quizState, setQuizState] = useState<{
    isActive: boolean;
    currentQuestionIndex: number;
    userAnswers: Record<string, string>;
    results: {
      score: number;
      total: number;
      improvements: string[];
    } | null;
  }>({
    isActive: false,
    currentQuestionIndex: 0,
    userAnswers: {},
    results: null,
  });

  const currentTopics = useMemo(
    () => TOPICS_BY_YEAR[yearGroup][selectedSubject],
    [yearGroup, selectedSubject],
  );

  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(null);
    setWorkbook(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getQuestionCount = (diff: Difficulty) => {
    switch (diff) {
      case "Easy":
        return 5;
      case "Medium":
        return 10;
      case "Hard":
        return 15;
      default:
        return 10;
    }
  };

  const handleGenerate = async (topicName: string) => {
    setSelectedTopic(topicName);
    setIsGenerating(true);
    setWorkbook(null);
    setError(null);
    setQuizState({
      isActive: false,
      currentQuestionIndex: 0,
      userAnswers: {},
      results: null,
    });

    // Scroll to top to show loader/content clearly on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });

    try {
      let questions: Question[] = [];
      const count = getQuestionCount(difficulty);

      if (mode === "ai") {
        questions = await generateWorkbookQuestions(
          selectedSubject,
          topicName,
          yearGroup,
          difficulty,
          count,
        );
      } else {
        // Library mode - strictly no AI calls
        const libraryQuestions =
          STATIC_QUESTION_BANK[selectedSubject]?.[topicName] || [];
        if (libraryQuestions.length === 0) {
          throw new Error(
            `The topic "${topicName}" is not yet available in the Free Library. Please switch to AI Mode to generate it, or choose a different topic.`,
          );
        }
        questions = libraryQuestions.slice(0, count);
      }

      if (!questions || questions.length === 0) {
        throw new Error("No questions were generated. Please try again.");
      }

      setWorkbook({
        title: `${topicName} Mastery Workbook`,
        subject: selectedSubject,
        topic: topicName,
        grade: yearGroup,
        difficulty: difficulty,
        questions,
      });
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStartQuiz = () => {
    if (!workbook) return;
    setQuizState({
      isActive: true,
      currentQuestionIndex: 0,
      userAnswers: {},
      results: null,
    });
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setQuizState((prev) => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [questionId]: answer },
    }));
  };

  const handleNextQuestion = () => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  };

  const handleFinishQuiz = () => {
    if (!workbook) return;

    let score = 0;
    const wrongTopicAreas = new Set<string>();

    workbook.questions.forEach((q) => {
      if (quizState.userAnswers[q.id] === q.answer) {
        score++;
      } else {
        if (q.topicArea) wrongTopicAreas.add(q.topicArea);
      }
    });

    setQuizState((prev) => ({
      ...prev,
      isActive: false,
      results: {
        score,
        total: workbook.questions.length,
        improvements: Array.from(wrongTopicAreas),
      },
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                KiddoWorkbooks
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a
                href="#how-it-works"
                className="hover:text-indigo-600 transition-colors"
              >
                How it Works
              </a>
              <button
                onClick={() => {
                  setWorkbook(null);
                  setSelectedTopic(null);
                  setQuizState({
                    isActive: false,
                    currentQuestionIndex: 0,
                    userAnswers: {},
                    results: null,
                  });
                }}
                className="hover:text-indigo-600 transition-colors"
              >
                Create New
              </button>
              <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        {!workbook && !isGenerating && (
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                UK National Curriculum
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                What are we learning <br />
                <span className="text-indigo-600">today?</span>
              </h1>
            </motion.div>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Settings */}
          {!quizState.isActive && (
            <div
              className={cn(
                "lg:col-span-3 space-y-6",
                workbook && "hidden lg:block",
              )}
            >
              <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Layout className="text-indigo-600" size={18} />
                    Settings
                  </h2>
                  <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button
                      onClick={() => setMode("ai")}
                      className={cn(
                        "px-2 py-1 text-[10px] font-bold rounded-md transition-all",
                        mode === "ai"
                          ? "bg-white text-indigo-600 shadow-sm"
                          : "text-slate-500",
                      )}
                    >
                      AI
                    </button>
                    <button
                      onClick={() => setMode("library")}
                      className={cn(
                        "px-2 py-1 text-[10px] font-bold rounded-md transition-all",
                        mode === "library"
                          ? "bg-white text-indigo-600 shadow-sm"
                          : "text-slate-500",
                      )}
                    >
                      Library
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Year Group
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {YEARS.map((y) => (
                        <button
                          key={y}
                          onClick={() => setYearGroup(y)}
                          className={cn(
                            "py-2 rounded-xl text-xs font-bold transition-all border",
                            yearGroup === y
                              ? "bg-slate-900 border-slate-900 text-white"
                              : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300",
                          )}
                        >
                          {y.replace("Year ", "Y")}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Difficulty
                    </label>
                    <div className="space-y-2">
                      {[
                        {
                          id: "Easy",
                          icon: Smile,
                          color: "text-emerald-500",
                          bg: "bg-emerald-50",
                        },
                        {
                          id: "Medium",
                          icon: Zap,
                          color: "text-amber-500",
                          bg: "bg-amber-50",
                        },
                        {
                          id: "Hard",
                          icon: Trophy,
                          color: "text-rose-500",
                          bg: "bg-rose-50",
                        },
                      ].map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setDifficulty(d.id as Difficulty)}
                          className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-xl border text-sm transition-all",
                            difficulty === d.id
                              ? "bg-indigo-600 border-indigo-600 text-white shadow-md"
                              : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300",
                          )}
                        >
                          <d.icon
                            size={16}
                            className={
                              difficulty === d.id ? "text-white" : d.color
                            }
                          />
                          <span className="font-medium">{d.id}</span>
                          <span
                            className={cn(
                              "ml-auto text-[10px] px-1.5 py-0.5 rounded-md",
                              difficulty === d.id ? "bg-white/20" : d.bg,
                              difficulty === d.id ? "text-white" : d.color,
                            )}
                          >
                            {getQuestionCount(d.id as Difficulty)} Qs
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Subject
                    </label>
                    <div className="space-y-2">
                      {SUBJECTS.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => handleSubjectChange(sub)}
                          className={cn(
                            "w-full flex items-center justify-between p-3 rounded-xl border text-sm transition-all text-left",
                            selectedSubject === sub
                              ? "bg-indigo-600 border-indigo-600 text-white shadow-md"
                              : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300",
                          )}
                        >
                          {sub}
                          {selectedSubject === sub && (
                            <ChevronRight size={14} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Main Content Area */}
          <div
            className={cn(
              quizState.isActive
                ? "lg:col-span-12"
                : workbook
                  ? "lg:col-span-12 max-w-4xl mx-auto w-full"
                  : "lg:col-span-9",
            )}
          >
            <AnimatePresence mode="wait">
              {error && !isGenerating && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-rose-50 border border-rose-100 p-8 rounded-3xl text-center"
                >
                  <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">
                    Oops!
                  </h3>
                  <p className="text-rose-700 mb-6">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="px-6 py-2 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}

              {!workbook && !isGenerating && !error && (
                <motion.div
                  key="topics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-800">
                      Select a Topic in{" "}
                      <span className="text-indigo-600">{selectedSubject}</span>
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {currentTopics.map((topic) => {
                      const Icon = ICON_MAP[topic.icon] || BookOpen;
                      return (
                        <button
                          key={topic.name}
                          onClick={() => handleGenerate(topic.name)}
                          className="group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 transition-all text-left overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-indigo-100 transition-colors"></div>
                          <div className="relative z-10">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              <Icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                              {topic.name}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              {topic.description}
                            </p>
                          </div>
                          <div className="mt-6 flex items-center text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-all">
                            Generate Worksheet{" "}
                            <ChevronRight size={14} className="ml-1" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {isGenerating && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-100 p-12 text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                    {mode === "ai" ? (
                      <Sparkles
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600"
                        size={32}
                      />
                    ) : (
                      <Library
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600"
                        size={32}
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {mode === "ai"
                      ? "AI is Thinking..."
                      : "Fetching Library Content..."}
                  </h3>
                  <p className="text-slate-500">
                    Preparing your {difficulty} level {yearGroup}{" "}
                    {selectedSubject} worksheet.
                  </p>
                </motion.div>
              )}

              {workbook && !quizState.isActive && !quizState.results && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <button
                        onClick={() => {
                          setWorkbook(null);
                          setSelectedTopic(null);
                        }}
                        className="mt-1 p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-400 hover:text-slate-600"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                          {workbook.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <FileText size={14} /> {workbook.questions.length}{" "}
                            Questions
                          </span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span>{workbook.grade}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span
                            className={cn(
                              "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                              workbook.difficulty === "Easy"
                                ? "bg-emerald-50 text-emerald-600"
                                : workbook.difficulty === "Medium"
                                  ? "bg-amber-50 text-amber-600"
                                  : "bg-rose-50 text-rose-600",
                            )}
                          >
                            {workbook.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleStartQuiz}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                      >
                        <BrainCircuit size={18} />
                        Start Quiz
                      </button>
                      <button
                        onClick={() => downloadWorksheetPDF(workbook)}
                        className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                      >
                        <Download size={18} />
                        Download PDF
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 space-y-10">
                      {workbook.questions.map((q, idx) => (
                        <div
                          key={q.id}
                          className="group print-break-inside-avoid"
                        >
                          <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              {idx + 1}
                            </span>
                            <div className="flex-grow">
                              <p className="text-lg font-medium text-slate-800 leading-relaxed mb-4">
                                {q.text}
                              </p>

                              {q.options && q.options.length > 0 && (
                                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                                  {q.options.map((opt, optIdx) => (
                                    <div
                                      key={optIdx}
                                      className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-default"
                                    >
                                      <span className="font-bold mr-2 text-indigo-400">
                                        {String.fromCharCode(65 + optIdx)})
                                      </span>
                                      {opt}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          {idx < workbook.questions.length - 1 && (
                            <div className="h-px bg-slate-100 mt-10"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
                      <p className="text-slate-500 text-sm mb-4">
                        Ready to practice offline?
                      </p>
                      <button
                        onClick={() => downloadWorksheetPDF(workbook)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
                      >
                        <Download size={20} />
                        Get Your Free Worksheet
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {quizState.isActive && workbook && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-3xl mx-auto space-y-8"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          setQuizState((prev) => ({ ...prev, isActive: false }))
                        }
                        className="p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-400"
                      >
                        <X size={20} />
                      </button>
                      <h2 className="text-xl font-bold">
                        Quiz: {workbook.topic}
                      </h2>
                    </div>
                    <div className="text-sm font-bold text-slate-500">
                      Question {quizState.currentQuestionIndex + 1} of{" "}
                      {workbook.questions.length}
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-8">
                    <motion.div
                      className="bg-indigo-600 h-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((quizState.currentQuestionIndex + 1) / workbook.questions.length) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8">
                      {workbook.questions[quizState.currentQuestionIndex].text}
                    </h3>

                    <div className="space-y-4">
                      {workbook.questions[quizState.currentQuestionIndex]
                        .options ? (
                        workbook.questions[
                          quizState.currentQuestionIndex
                        ].options?.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleAnswer(
                                workbook.questions[
                                  quizState.currentQuestionIndex
                                ].id,
                                opt,
                              )
                            }
                            className={cn(
                              "w-full p-6 text-left rounded-2xl border-2 transition-all flex items-center gap-4",
                              quizState.userAnswers[
                                workbook.questions[
                                  quizState.currentQuestionIndex
                                ].id
                              ] === opt
                                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                                : "border-slate-100 hover:border-indigo-200 hover:bg-slate-50",
                            )}
                          >
                            <div
                              className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center font-bold",
                                quizState.userAnswers[
                                  workbook.questions[
                                    quizState.currentQuestionIndex
                                  ].id
                                ] === opt
                                  ? "bg-indigo-600 text-white"
                                  : "bg-slate-100 text-slate-400",
                              )}
                            >
                              {String.fromCharCode(65 + idx)}
                            </div>
                            {opt}
                          </button>
                        ))
                      ) : (
                        <input
                          type="text"
                          placeholder="Type your answer here..."
                          className="w-full p-6 rounded-2xl border-2 border-slate-100 focus:border-indigo-600 outline-none transition-all"
                          value={
                            quizState.userAnswers[
                              workbook.questions[quizState.currentQuestionIndex]
                                .id
                            ] || ""
                          }
                          onChange={(e) =>
                            handleAnswer(
                              workbook.questions[quizState.currentQuestionIndex]
                                .id,
                              e.target.value,
                            )
                          }
                        />
                      )}
                    </div>

                    <div className="mt-12 flex justify-end">
                      {quizState.currentQuestionIndex <
                      workbook.questions.length - 1 ? (
                        <button
                          disabled={
                            !quizState.userAnswers[
                              workbook.questions[quizState.currentQuestionIndex]
                                .id
                            ]
                          }
                          onClick={handleNextQuestion}
                          className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Next Question <ChevronRight size={18} />
                        </button>
                      ) : (
                        <button
                          disabled={
                            !quizState.userAnswers[
                              workbook.questions[quizState.currentQuestionIndex]
                                .id
                            ]
                          }
                          onClick={handleFinishQuiz}
                          className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Finish Quiz <CheckCircle2 size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {quizState.results && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-3xl mx-auto space-y-8"
                >
                  <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-xl text-center">
                    <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Trophy size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Quiz Complete!
                    </h2>
                    <p className="text-slate-500 mb-8">
                      Great effort on your {workbook?.topic} quiz.
                    </p>

                    <div className="text-6xl font-black text-indigo-600 mb-8">
                      {quizState.results.score} / {quizState.results.total}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                      <div className="bg-emerald-50 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-emerald-600">
                          {Math.round(
                            (quizState.results.score /
                              quizState.results.total) *
                              100,
                          )}
                          %
                        </div>
                        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          Accuracy
                        </div>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-2xl">
                        <div className="text-2xl font-bold text-amber-600">
                          {quizState.results.total - quizState.results.score}
                        </div>
                        <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                          Mistakes
                        </div>
                      </div>
                    </div>

                    {quizState.results.improvements.length > 0 && (
                      <div className="text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                          <Info size={18} className="text-indigo-600" />
                          Improvements Needed
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          Focus on these areas to get a better score next time:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {quizState.results.improvements.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setWorkbook(null);
                          setSelectedTopic(null);
                          setQuizState({
                            isActive: false,
                            currentQuestionIndex: 0,
                            userAnswers: {},
                            results: null,
                          });
                        }}
                        className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
                      >
                        Try Another Topic
                      </button>
                      <button
                        onClick={() =>
                          setQuizState({
                            isActive: false,
                            currentQuestionIndex: 0,
                            userAnswers: {},
                            results: null,
                          })
                        }
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                      >
                        Review Worksheet
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 mt-20 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800">
                KiddoWorkbooks
              </span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-indigo-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-600">
                Terms of Service
              </a>
              <a href="#" className="hover:text-indigo-600">
                Contact Us
              </a>
            </div>
            <p className="text-sm text-slate-400">
              © 2026 KiddoWorkbooks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
