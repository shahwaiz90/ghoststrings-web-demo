import React from 'react';
import { GhostStringsProvider, useGhostStrings, GhostText } from '@ghoststrings/ai';

// Live verification project configurations
const gsConfig = {
  projectId: '030d17f9', // Live Showcase Project ID
  track: 'prod' as const,
  cacheTtl: 0, // Bypass TTL for instant dynamic syncing changes in showcase
  fallbacks: {
    app_name: 'GhostStrings Showcase',
    hero_badge: '✦ OTA Content Layer',
    hero_title: 'GhostStrings Showcase',
    hero_subtitle: 'Change any word in your app — instantly, without a rebuild.',
    cta_primary: 'Explore Platform',
    cta_secondary: 'Developer Portal',
    stat_1_value: '0ms',
    stat_1_label: 'Redeploy Time',
    stat_2_value: '1KB',
    stat_2_label: 'SDK Size',
    stat_3_value: '100+',
    stat_3_label: 'Languages',
    feature_1_title: 'Zero-Rebuild Deploy',
    feature_1_desc: 'Update copy and UI logic instantly across all platforms',
    feature_2_title: 'Global Edge Sync',
    feature_2_desc: 'Instant localization with AI-powered context awareness',
    feature_3_title: 'Enterprise Grade',
    feature_3_desc: 'Built-in versioning, rollback, and team permissions',
  }
};

function ShowcaseApp() {
  const { loading, setLanguage, sdk } = useGhostStrings();
  const [activeLang, setActiveLang] = React.useState('en');

  const handleLanguageChange = async (lang: string) => {
    setActiveLang(lang);
    await setLanguage(lang === 'en' ? '' : lang); // English uses base keys on server
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500/30">
      
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 font-bold text-lg select-none">
            👻
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
            GhostStrings <span className="text-blue-500 font-medium text-sm ml-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">AI</span>
          </span>
          <a
            href="https://www.npmjs.com/package/@ghoststrings/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono bg-slate-950/80 border border-slate-850 text-blue-400 hover:text-slate-200 px-3 py-1.5 rounded-xl transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 256 256" style={{ minWidth: '12px' }}>
              <path d="M0 0h256v256H0z" fill="#CB3837"/>
              <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF"/>
            </svg>
            @ghoststrings/ai
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Caching Status Tag */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${
            loading 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 animate-pulse'
              : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
          }`}>
            <span className={`w-2 h-2 rounded-full ${loading ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
            {loading ? 'SYNCING OTA...' : 'SYNCHRONIZED (CACHE ACTIVE)'}
          </div>

          {/* Dynamic Language Selection */}
          <div className="flex bg-slate-950/80 border border-slate-800 rounded-xl p-1 gap-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeLang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('es')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeLang === 'es' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Español
            </button>
            <button
              onClick={() => handleLanguageChange('ur')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeLang === 'ur' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              اردو
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-20">
        
        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center gap-6 max-w-4xl mx-auto pt-8">
          {/* Background Ambient Glows */}
          <div className="absolute -top-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl -z-10"></div>
          <div className="absolute -bottom-24 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl -z-10"></div>

          {/* Hero Badge Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold tracking-wide shadow-inner">
            <GhostText id="hero_badge" />
          </div>

          {/* Title with full dynamic layout support */}
          <h1 className="font-black text-5xl md:text-6xl tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent py-2">
            <GhostText id="hero_title" />
          </h1>

          {/* Subtext description */}
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            <GhostText id="hero_subtitle" />
          </p>

          {/* Dynamic Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-extrabold text-sm transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02]">
              <GhostText id="cta_primary" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 font-extrabold text-sm transition-all hover:scale-[1.02]">
              <GhostText id="cta_secondary" />
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl flex flex-col items-center text-center gap-2 hover:border-slate-800 transition-all">
            <span className="text-4xl font-black text-blue-500 tracking-tight">
              <GhostText id="stat_1_value" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              <GhostText id="stat_1_label" />
            </span>
          </div>

          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl flex flex-col items-center text-center gap-2 hover:border-slate-800 transition-all">
            <span className="text-4xl font-black text-blue-500 tracking-tight">
              <GhostText id="stat_2_value" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              <GhostText id="stat_2_label" />
            </span>
          </div>

          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl flex flex-col items-center text-center gap-2 hover:border-slate-800 transition-all">
            <span className="text-4xl font-black text-blue-500 tracking-tight">
              <GhostText id="stat_3_value" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              <GhostText id="stat_3_label" />
            </span>
          </div>
        </section>

        {/* Features Comparison Area */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900/30 border border-slate-850/80 p-8 rounded-2xl flex flex-col gap-4 hover:bg-slate-900/40 hover:border-slate-800 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
              🚀
            </div>
            <h3 className="font-extrabold text-xl text-slate-100">
              <GhostText id="feature_1_title" />
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              <GhostText id="feature_1_desc" />
            </p>
          </div>

          <div className="bg-slate-900/30 border border-slate-850/80 p-8 rounded-2xl flex flex-col gap-4 hover:bg-slate-900/40 hover:border-slate-800 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl">
              🌐
            </div>
            <h3 className="font-extrabold text-xl text-slate-100">
              <GhostText id="feature_2_title" />
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              <GhostText id="feature_2_desc" />
            </p>
          </div>

          <div className="bg-slate-900/30 border border-slate-850/80 p-8 rounded-2xl flex flex-col gap-4 hover:bg-slate-900/40 hover:border-slate-800 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
              ⚙️
            </div>
            <h3 className="font-extrabold text-xl text-slate-100">
              <GhostText id="feature_3_title" />
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              <GhostText id="feature_3_desc" />
            </p>
          </div>
        </section>

        {/* Live Debug Showcase Dashboard Mockup */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-black text-slate-100">
              🔬 Interactive OTA Sandbox Debugger
            </h3>
            <p className="text-sm text-slate-400">
              Under the hood, the standard React components dynamically pull and render translations directly from memory in linear time. Check the active strings cache loaded inside the browser client below.
            </p>
          </div>

          {/* Active cache viewer */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
              Client Memory Buffer (JSON)
            </span>
            <pre className="bg-slate-950 border border-slate-850 p-6 rounded-2xl overflow-x-auto text-xs text-blue-400 font-mono leading-relaxed">
              {JSON.stringify(sdk?.getAllStrings() || {}, null, 2)}
            </pre>
          </div>
        </section>

      </main>

      {/* Footer copyright */}
      <footer className="border-t border-slate-900/80 py-8 px-6 text-center text-xs text-slate-600 bg-slate-950/40">
        ✦ GhostStrings Showcase Demo — Powered by @ghoststrings/ai SDK v1.0.1
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <GhostStringsProvider config={gsConfig}>
      <ShowcaseApp />
    </GhostStringsProvider>
  );
}
