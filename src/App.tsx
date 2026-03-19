import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Zap,
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
  Trophy as TrophyIcon,
  Zap as ZapIcon,
  Smile
} from 'lucide-react';
import { SUBJECTS, TOPICS, Subject, Workbook, Question, Difficulty } from './types';
import { generateWorkbookQuestions } from './services/gemini';
import { downloadWorksheetPDF } from './services/pdfService';
import { STATIC_QUESTION_BANK } from './data/questionBank';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ICON_MAP: Record<string, React.ElementType> = {
  Plus, X, PieChart, Square, MessageSquare, Clock, Repeat,
  User, Leaf, Sun, Zap, Globe, Cloud, Settings,
  Type, Book, FileText, PenTool, Hash, Edit3, Layers,
  History, Map, Shield, Users, Home, DollarSign,
  PawPrint, Lightbulb, Trophy, Star, UserCircle, Flag
};

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(SUBJECTS[0]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [grade, setGrade] = useState<string>('Grade 3');
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [workbook, setWorkbook] = useState<Workbook | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [mode, setMode] = useState<'ai' | 'library'>('ai');

  const currentTopics = useMemo(() => TOPICS[selectedSubject], [selectedSubject]);

  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(null);
    setWorkbook(null);
  };

  const getQuestionCount = (diff: Difficulty) => {
    switch (diff) {
      case 'Easy': return 5;
      case 'Medium': return 10;
      case 'Hard': return 15;
      default: return 10;
    }
  };

  const handleGenerate = async (topicName: string) => {
    setSelectedTopic(topicName);
    setIsGenerating(true);
    setWorkbook(null);
    try {
      let questions: Question[] = [];
      const count = getQuestionCount(difficulty);

      if (mode === 'ai') {
        questions = await generateWorkbookQuestions(selectedSubject, topicName, grade, difficulty, count);
      } else {
        // Library mode
        const libraryQuestions = STATIC_QUESTION_BANK[selectedSubject]?.[topicName] || [];
        if (libraryQuestions.length === 0) {
          questions = await generateWorkbookQuestions(selectedSubject, topicName, grade, difficulty, count);
        } else {
          questions = libraryQuestions.slice(0, count);
        }
      }

      setWorkbook({
        title: `${topicName} Mastery Workbook`,
        subject: selectedSubject,
        topic: topicName,
        grade: grade,
        difficulty: difficulty,
        questions
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">KiddoWorkbooks</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a>
              <button 
                onClick={() => { setWorkbook(null); setSelectedTopic(null); }}
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
                Personalized Learning
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
          <div className="lg:col-span-3 space-y-6">
            <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Layout className="text-indigo-600" size={18} />
                  Settings
                </h2>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setMode('ai')}
                    className={cn("px-2 py-1 text-[10px] font-bold rounded-md transition-all", mode === 'ai' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500")}
                  >
                    AI
                  </button>
                  <button 
                    onClick={() => setMode('library')}
                    className={cn("px-2 py-1 text-[10px] font-bold rounded-md transition-all", mode === 'library' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500")}
                  >
                    Library
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Grade</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['G1', 'G2', 'G3', 'G4', 'G5'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGrade(`Grade ${g.slice(1)}`)}
                        className={cn(
                          "py-2 rounded-xl text-xs font-bold transition-all border",
                          grade === `Grade ${g.slice(1)}`
                            ? "bg-slate-900 border-slate-900 text-white" 
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300"
                        )}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Difficulty</label>
                  <div className="space-y-2">
                    {[
                      { id: 'Easy', icon: Smile, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                      { id: 'Medium', icon: ZapIcon, color: 'text-amber-500', bg: 'bg-amber-50' },
                      { id: 'Hard', icon: TrophyIcon, color: 'text-rose-500', bg: 'bg-rose-50' }
                    ].map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setDifficulty(d.id as Difficulty)}
                        className={cn(
                          "w-full flex items-center gap-3 p-3 rounded-xl border text-sm transition-all",
                          difficulty === d.id 
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-md" 
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300"
                        )}
                      >
                        <d.icon size={16} className={difficulty === d.id ? "text-white" : d.color} />
                        <span className="font-medium">{d.id}</span>
                        <span className={cn("ml-auto text-[10px] px-1.5 py-0.5 rounded-md", difficulty === d.id ? "bg-white/20" : d.bg, difficulty === d.id ? "text-white" : d.color)}>
                          {getQuestionCount(d.id as Difficulty)} Qs
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Subject</label>
                  <div className="space-y-2">
                    {SUBJECTS.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => handleSubjectChange(sub)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-xl border text-sm transition-all text-left",
                          selectedSubject === sub 
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-md" 
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300"
                        )}
                      >
                        {sub}
                        {selectedSubject === sub && <ChevronRight size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {!workbook && !isGenerating && (
                <motion.div
                  key="topics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-800">
                      Select a Topic in <span className="text-indigo-600">{selectedSubject}</span>
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
                            <h3 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{topic.name}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{topic.description}</p>
                          </div>
                          <div className="mt-6 flex items-center text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-all">
                            Generate Worksheet <ChevronRight size={14} className="ml-1" />
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
                    {mode === 'ai' ? (
                      <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600" size={32} />
                    ) : (
                      <Library className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600" size={32} />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {mode === 'ai' ? 'AI is Thinking...' : 'Fetching Library Content...'}
                  </h3>
                  <p className="text-slate-500">Preparing your {difficulty} level {grade} {selectedSubject} worksheet.</p>
                </motion.div>
              )}

              {workbook && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <button 
                        onClick={() => { setWorkbook(null); setSelectedTopic(null); }}
                        className="mt-1 p-2 hover:bg-slate-100 rounded-xl transition-all text-slate-400 hover:text-slate-600"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{workbook.title}</h2>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-500">
                          <span className="flex items-center gap-1"><FileText size={14} /> {workbook.questions.length} Questions</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span>{workbook.grade}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                            workbook.difficulty === 'Easy' ? "bg-emerald-50 text-emerald-600" :
                            workbook.difficulty === 'Medium' ? "bg-amber-50 text-amber-600" :
                            "bg-rose-50 text-rose-600"
                          )}>
                            {workbook.difficulty}
                          </span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                            {mode === 'ai' ? 'AI Generated' : 'Library Content'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowAnswers(!showAnswers)}
                        className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
                      >
                        {showAnswers ? 'Hide Answers' : 'Show Answers'}
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
                        <div key={q.id} className="group">
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
                                      <span className="font-bold mr-2 text-indigo-400">{String.fromCharCode(65 + optIdx)})</span>
                                      {opt}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {showAnswers && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100"
                                >
                                  <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-0.5" size={18} />
                                    <div>
                                      <p className="text-sm font-bold text-emerald-900">Correct Answer: {q.answer}</p>
                                      {q.explanation && (
                                        <p className="text-sm text-emerald-700 mt-1 leading-relaxed">
                                          {q.explanation}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
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
                      <p className="text-slate-500 text-sm mb-4">Ready to practice offline?</p>
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
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800">KiddoWorkbooks</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600">Contact Us</a>
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
