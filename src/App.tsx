import React, { useState } from 'react';
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
  HelpCircle
} from 'lucide-react';
import { SUBJECTS, TOPICS, Subject, Workbook, Question } from './types';
import { generateWorkbookQuestions } from './services/gemini';
import { downloadWorksheetPDF } from './services/pdfService';
import { STATIC_QUESTION_BANK } from './data/questionBank';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(SUBJECTS[0]);
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[SUBJECTS[0]][0]);
  const [grade, setGrade] = useState<string>('Grade 3');
  const [isGenerating, setIsGenerating] = useState(false);
  const [workbook, setWorkbook] = useState<Workbook | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [mode, setMode] = useState<'ai' | 'library'>('ai');

  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(TOPICS[subject][0]);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setWorkbook(null);
    try {
      let questions: Question[] = [];
      if (mode === 'ai') {
        questions = await generateWorkbookQuestions(selectedSubject, selectedTopic, grade);
      } else {
        // Library mode
        const libraryQuestions = STATIC_QUESTION_BANK[selectedSubject]?.[selectedTopic] || [];
        if (libraryQuestions.length === 0) {
          // Fallback to AI if library is empty for this topic
          questions = await generateWorkbookQuestions(selectedSubject, selectedTopic, grade);
        } else {
          questions = libraryQuestions;
        }
      }

      setWorkbook({
        title: `${selectedTopic} Mastery Workbook`,
        subject: selectedSubject,
        topic: selectedTopic,
        grade: grade,
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
              <a href="#" className="hover:text-indigo-600 transition-colors">Subjects</a>
              <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
              Free Educational Resource
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Custom Workbooks for <br />
              <span className="text-indigo-600">Every Child.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're a parent or teacher, KiddoWorkbooks helps you create professional learning materials in seconds. 
              Completely free and easy to use.
            </p>
          </motion.div>
        </div>

        {/* How it Works for Non-Technical Users */}
        <div id="how-it-works" className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: MousePointer2, title: "1. Choose Subject", desc: "Select a subject and topic your child is currently learning." },
            { icon: Wand2, title: "2. Generate", desc: "Use our AI or browse our library to create a set of questions." },
            { icon: FileDown, title: "3. Download PDF", desc: "Get a professional worksheet ready for printing and practice." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <step.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Configuration Panel */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Layout className="text-indigo-600" size={20} />
                  Settings
                </h2>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setMode('ai')}
                    className={cn("px-3 py-1 text-xs font-bold rounded-md transition-all", mode === 'ai' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500")}
                  >
                    AI
                  </button>
                  <button 
                    onClick={() => setMode('library')}
                    className={cn("px-3 py-1 text-xs font-bold rounded-md transition-all", mode === 'library' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500")}
                  >
                    Library
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    Subject
                    <HelpCircle size={14} className="text-slate-400" />
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {SUBJECTS.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => handleSubjectChange(sub)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-xl border text-sm transition-all text-left",
                          selectedSubject === sub 
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100" 
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300"
                        )}
                      >
                        {sub}
                        {selectedSubject === sub && <ChevronRight size={16} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Topic</label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  >
                    {TOPICS[selectedSubject].map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Grade Level</label>
                  <div className="flex flex-wrap gap-2">
                    {['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGrade(g)}
                        className={cn(
                          "px-4 py-2 rounded-full text-xs font-bold transition-all",
                          grade === g 
                            ? "bg-slate-900 text-white" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        )}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-lg shadow-indigo-200"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      {mode === 'ai' ? 'Generating...' : 'Loading...'}
                    </>
                  ) : (
                    <>
                      {mode === 'ai' ? <Sparkles size={20} /> : <Library size={20} />}
                      {mode === 'ai' ? 'Generate with AI' : 'Load from Library'}
                    </>
                  )}
                </button>
              </div>
            </section>

            <div className="bg-indigo-900 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Info size={20} />
                  Free Forever
                </h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Our mission is to provide free educational tools for everyone. Use the AI generator for infinite variety or the Library for verified questions.
                </p>
              </div>
              <BrainCircuit className="absolute -right-4 -bottom-4 text-indigo-800 w-32 h-32" />
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!workbook && !isGenerating && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[500px] flex flex-col items-center justify-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 p-12 text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    <BookOpen className="text-slate-300" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Start?</h3>
                  <p className="text-slate-500 max-w-xs">
                    Select your subject and topic on the left. You can use our AI to create new questions or pick from our library.
                  </p>
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
                  <p className="text-slate-500">Preparing your {grade} {selectedSubject} worksheet.</p>
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
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{workbook.title}</h2>
                      <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><FileText size={14} /> {workbook.questions.length} Questions</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{workbook.grade}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                          {mode === 'ai' ? 'AI Generated' : 'Library Content'}
                        </span>
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
