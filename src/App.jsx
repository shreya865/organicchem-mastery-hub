import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRightLeft,
  Atom,
  BookOpen,
  Bookmark,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  Eye,
  EyeOff,
  FlaskConical,
  GraduationCap,
  Layers3,
  Lightbulb,
  Moon,
  NotebookPen,
  Search,
  Sparkles,
  SunMedium,
  Target,
  Trophy,
} from 'lucide-react';
import { chapters, overviewStats, reactionData, reagentGroups, conversionMatrix, practiceQuestions, flashcards, iconMap } from './data';

const STORAGE_KEYS = {
  bookmarks: 'organicChemBookmarks',
  completed: 'organicChemCompleted',
  theme: 'organicChemTheme'
};

const getInitialBookmarks = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || '[]');
  } catch {
    return [];
  }
};

const getInitialCompleted = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.completed) || '[]');
  } catch {
    return [];
  }
};

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    return saved || 'light';
  });
  const [activeSection, setActiveSection] = useState('overview');
  const [reactionSearch, setReactionSearch] = useState('');
  const [reactionFilter, setReactionFilter] = useState('all');
  const [selectedStart, setSelectedStart] = useState('Alcohol');
  const [selectedTarget, setSelectedTarget] = useState('Aldehyde');
  const [selectedTab, setSelectedTab] = useState('oxidizing');
  const [bookmarks, setBookmarks] = useState(getInitialBookmarks);
  const [completedChapters, setCompletedChapters] = useState(getInitialCompleted);
  const [flashIndex, setFlashIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState({});
  const [reactionOpen, setReactionOpen] = useState({});

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completedChapters));
  }, [completedChapters]);

  const filteredReactions = useMemo(() => {
    return reactionData.filter((reaction) => {
      const query = reactionSearch.toLowerCase();
      const matchesSearch =
        reaction.name.toLowerCase().includes(query) ||
        reaction.type.toLowerCase().includes(query) ||
        reaction.route.toLowerCase().includes(query) ||
        reaction.trick.toLowerCase().includes(query);
      const matchesFilter = reactionFilter === 'all' || reaction.type === reactionFilter;
      return matchesSearch && matchesFilter;
    });
  }, [reactionSearch, reactionFilter]);

  const availableFilters = ['all', ...new Set(reactionData.map((r) => r.type))];

  const matchingRoutes = useMemo(() => {
    return conversionMatrix.routes.filter(
      (route) => route.from === selectedStart && route.to === selectedTarget
    );
  }, [selectedStart, selectedTarget]);

  const completionPct = Math.round(
    (completedChapters.length / chapters.length) * 100
  );

  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleChapterComplete = (id) => {
    setCompletedChapters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentCard = flashcards[flashIndex % flashcards.length];

  const nextCard = () => {
    setFlipped(false);
    setFlashIndex((prev) => (prev + 1) % flashcards.length);
  };

  const toggleSolution = (idx) => {
    setPracticeOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleReactionOpen = (id) => {
    setReactionOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'chapters', label: 'Chapters', icon: Layers3 },
    { id: 'reactions', label: 'Reactions', icon: FlaskConical },
    { id: 'reagents', label: 'Reagents', icon: Atom },
    { id: 'flashcards', label: 'Flashcards', icon: BrainCircuit },
    { id: 'practice', label: 'Practice Vault', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row">
        <aside className="sticky top-0 z-20 h-auto border-b border-slate-200/80 bg-white/80 p-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 lg:h-screen lg:w-80 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-3 lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-indigo-500 to-violet-500 text-white shadow-lg shadow-brand-500/30">
                <Atom size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  OrganicChem
                </p>
                <h1 className="text-lg font-bold">Mastery Hub</h1>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 lg:hidden"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="mt-6 hidden rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 p-4 text-white shadow-lg shadow-brand-500/25 lg:block">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">Class 12 + JEE/NEET</p>
            <h2 className="mt-2 text-2xl font-bold">Revision Sprint</h2>
            <p className="mt-2 text-sm text-indigo-100">One-page command center for every organic chapter.</p>
          </div>

          <nav className="mt-6 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveSection(id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition ${
                  activeSection === id
                    ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-200 dark:bg-brand-500/10 dark:text-brand-200 dark:ring-brand-500/20'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} />
                  {label}
                </span>
                <ChevronRight size={15} />
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/80">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <Target size={16} className="text-brand-500" />
              Chapter completion
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-500"
                style={{ width: `${completionPct}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{completedChapters.length} of {chapters.length} done</span>
              <span>{completionPct}%</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <header className="mb-6 hidden items-center justify-between rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-soft dark:border-slate-700 dark:bg-slate-900/80 lg:flex">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">All-in-one revision portal</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">OrganicChem Mastery Hub</h2>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="soft-pill">
                <Sparkles size={14} />
                Smart revision mode
              </button>
              <button
                type="button"
                onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </header>

          {activeSection === 'overview' && (
            <section className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-6 text-white shadow-soft dark:border-slate-700">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <span className="soft-pill border-white/20 bg-white/10 text-white">
                      <GraduationCap size={14} />
                      Class 12 + JEE/NEET
                    </span>
                    <h3 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Concepts, reagents, and PYQs — in one place.</h3>
                    <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
                      Build strong fundamentals from haloalkanes to biomolecules, revise named reactions quickly, and sharpen exam skills with instant answer reveals.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                    {overviewStats.map(({ label, value, icon: Icon }) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                        <Icon size={16} className="text-indigo-200" />
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300">{label}</p>
                        <p className="mt-1 text-lg font-bold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {chapters.map((chapter) => {
                  const isCompleted = completedChapters.includes(chapter.id);
                  return (
                    <div key={chapter.id} className="card-surface p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-500">{chapter.name.split(' ')[0]}</p>
                          <h4 className="mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100">{chapter.name}</h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleChapterComplete(chapter.id)}
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${
                            isCompleted
                              ? 'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
                              : 'border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                          aria-label={`Mark chapter ${chapter.name} as complete`}
                        >
                          <CheckCircle2 size={18} />
                        </button>
                      </div>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{chapter.focus}</p>
                      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-500"
                          style={{ width: `${chapter.progress}%` }}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Progress</span>
                        <span>{chapter.progress}%</span>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {chapter.keyPoints.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {activeSection === 'chapters' && (
            <section className="space-y-4">
              <div className="card-surface p-5">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-brand-500" size={20} />
                  <h3 className="section-title">Chapter roadmap</h3>
                </div>
              </div>

              {chapters.map((chapter) => (
                <article key={chapter.id} className="card-surface p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="soft-pill">{chapter.id}</p>
                        <button
                          type="button"
                          onClick={() => toggleChapterComplete(chapter.id)}
                          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${
                            completedChapters.includes(chapter.id)
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                        >
                          {completedChapters.includes(chapter.id) ? 'Completed' : 'Mark done'}
                        </button>
                      </div>
                      <h4 className="mt-3 text-2xl font-bold text-slate-800 dark:text-white">{chapter.name}</h4>
                      <p className="mt-2 text-slate-600 dark:text-slate-300">{chapter.summary}</p>
                    </div>
                    <div className="w-full max-w-xs">
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>Mastery</span>
                        <span>{chapter.progress}%</span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-500" style={{ width: `${chapter.progress}%` }} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {chapter.keyPoints.map((point) => (
                      <span key={point} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          )}

          {activeSection === 'reactions' && (
            <section className="space-y-5">
              <div className="card-surface p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <FlaskConical className="text-brand-500" size={20} />
                    <h3 className="section-title">Named reactions explorer</h3>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="relative block">
                      <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={reactionSearch}
                        onChange={(e) => setReactionSearch(e.target.value)}
                        placeholder="Search reactions"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 md:w-64"
                      />
                    </label>
                    <select
                      value={reactionFilter}
                      onChange={(e) => setReactionFilter(e.target.value)}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    >
                      {availableFilters.map((filter) => (
                        <option key={filter} value={filter}>
                          {filter === 'all' ? 'All chapters' : filter}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-2">
                {filteredReactions.map((reaction) => {
                  const isBookmarked = bookmarks.includes(reaction.id);
                  const isOpen = reactionOpen[reaction.id];
                  return (
                    <div key={reaction.id} className="card-surface p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-brand-500">{reaction.type}</p>
                          <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{reaction.name}</h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleBookmark(reaction.id)}
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${
                            isBookmarked
                              ? 'border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300'
                              : 'border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                          aria-label={`Bookmark ${reaction.name}`}
                        >
                          <Bookmark size={17} fill={isBookmarked ? 'currentColor' : 'none'} />
                        </button>
                      </div>

                      <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/70 p-4 dark:border-brand-500/20 dark:bg-brand-500/5">
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-200">Reaction equation</p>
                        <p className="chem-formula mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100">{reaction.equation}</p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {reaction.reagents.map((reagent) => (
                          <span key={reagent} className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200">
                            {reagent}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Board answer</p>
                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{reaction.trick}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleReactionOpen(reaction.id)}
                        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        {isOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                        {isOpen ? 'Hide mechanism' : 'Show mechanism'}
                      </button>

                      {isOpen && (
                        <div className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Mechanism</p>
                          <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                            {reaction.mechanism.map((step, index) => (
                              <li key={step} className="flex gap-3">
                                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                                  {index + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {activeSection === 'reagents' && (
            <section className="space-y-5">
              <div className="card-surface p-5">
                <div className="flex items-center gap-3">
                  <Atom className="text-brand-500" size={20} />
                  <h3 className="section-title">Reagents & conversion matrix</h3>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="card-surface p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Start compound
                      <select
                        value={selectedStart}
                        onChange={(e) => setSelectedStart(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      >
                        {conversionMatrix.start.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                    <label className="space-y-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Target compound
                      <select
                        value={selectedTarget}
                        onChange={(e) => setSelectedTarget(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      >
                        {conversionMatrix.target.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="mt-5 space-y-3">
                    {matchingRoutes.length ? (
                      matchingRoutes.map((route) => (
                        <div key={`${route.from}-${route.to}-${route.method}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{route.method}</p>
                            <span className="rounded-full bg-brand-100 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                              {route.from} → {route.to}
                            </span>
                          </div>
                          <ol className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            {route.steps.map((step, idx) => (
                              <li key={step} className="flex items-start gap-2">
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                                  {idx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400">
                        No matching conversion route — try another combination.
                      </div>
                    )}
                  </div>
                </div>

                <div className="card-surface p-5">
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(reagentGroups).map(([key, items]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedTab(key)}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] transition ${
                          selectedTab === key
                            ? 'bg-brand-600 text-white'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3">
                    {reagentGroups[selectedTab].map((reagent) => (
                      <div key={reagent.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-base font-semibold text-slate-800 dark:text-white">{reagent.name}</p>
                          <span className="rounded-full bg-cyan-100 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200">
                            {selectedTab}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{reagent.formula}</p>
                        <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{reagent.use}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-brand-500">Example</p>
                        <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-200">{reagent.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'flashcards' && (
            <section className="space-y-5">
              <div className="card-surface p-5">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-brand-500" size={20} />
                  <h3 className="section-title">Reaction & reagent flashcards</h3>
                </div>
              </div>

              <div className="card-surface p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                    {currentCard.tag}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{flashIndex + 1} / {flashcards.length}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setFlipped((prev) => !prev)}
                  className="w-full rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50 p-6 text-left shadow-soft transition hover:shadow-lg dark:border-slate-700 dark:from-slate-900 dark:to-slate-800"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-500">
                    {flipped ? 'Answer' : 'Prompt'}
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-relaxed text-slate-800 dark:text-slate-100">
                    {flipped ? currentCard.back : currentCard.front}
                  </p>
                </button>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setFlipped((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-500"
                  >
                    {flipped ? 'Hide answer' : 'Flip card'}
                  </button>
                  <button
                    type="button"
                    onClick={nextCard}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    Next card
                  </button>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'practice' && (
            <section className="space-y-5">
              <div className="card-surface p-5">
                <div className="flex items-center gap-3">
                  <Target className="text-brand-500" size={20} />
                  <h3 className="section-title">PYQ & practice vault</h3>
                </div>
              </div>

              {practiceQuestions.map((item, index) => {
                const open = practiceOpen[index];
                return (
                  <article key={`${item.chapter}-${index}`} className="card-surface p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-500">{item.chapter}</p>
                        <h4 className="mt-2 text-lg font-semibold text-slate-800 dark:text-white">{item.question}</h4>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {item.difficulty}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => toggleSolution(index)}
                        className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-500"
                      >
                        {open ? 'Hide solution' : 'Reveal solution'}
                      </button>
                      <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <Lightbulb size={15} />
                        {item.hint}
                      </span>
                    </div>

                    {open && (
                      <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/5">
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-200">Model answer</p>
                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{item.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
