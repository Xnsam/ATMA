import React, { useState } from 'react';
import { Activity, ShieldCheck, PlayCircle, Loader2 } from 'lucide-react';
import Section from './components/Section';
import ResultCard from './components/ResultCard';
import { SectionData, AnalysisState } from './types';
import { analyzeTriage } from './services/geminiService';

const App: React.FC = () => {
  const [baselineData, setBaselineData] = useState<SectionData>({
    image: null,
    audio: null,
    json: null,
  });

  const [realtimeData, setRealtimeData] = useState<SectionData>({
    image: null,
    audio: null,
    json: null,
  });

  const [analysis, setAnalysis] = useState<AnalysisState>({
    status: 'idle',
    result: null,
  });

  const handleAnalyze = async () => {
    if (!realtimeData.image && !realtimeData.audio && !realtimeData.json) {
      alert("Please upload at least one Real-time data point to analyze.");
      return;
    }

    setAnalysis({ status: 'loading', result: null });
    try {
      const result = await analyzeTriage(baselineData, realtimeData);
      setAnalysis({ status: 'success', result });
    } catch (error) {
      setAnalysis({ status: 'error', result: null, error: "Failed to analyze data." });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
               <Activity className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-none">ATMA</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">ALZHEIMER'S & DEMENTIA TRIAGE MONITORING SYSTEM</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <ShieldCheck className="w-3 h-3 mr-1" />
              System Active
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Intro Text */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Crisis Triage Monitor</h2>
          <p className="mt-4 text-lg text-slate-600">
            Upload patient baseline data and real-time inputs. The ATMA system will analyze multimodal signals to determine crisis immediacy.
          </p>
        </div>

        {/* Input Sections */}
        <div className="flex flex-col lg:flex-row gap-8">
          <Section 
            title="Section A: Baseline" 
            description="Historical patient context (Stable State)"
            data={baselineData} 
            setData={setBaselineData}
            colorTheme="blue"
          />
          
          <div className="flex items-center justify-center lg:pt-20">
             <div className="hidden lg:block w-8 h-0.5 bg-slate-300"></div>
          </div>

          <Section 
            title="Section B: Real-Time" 
            description="Current sensor and environmental inputs"
            data={realtimeData} 
            setData={setRealtimeData}
            colorTheme="indigo"
          />
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            onClick={handleAnalyze}
            disabled={analysis.status === 'loading'}
            className={`
              group relative flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full 
              text-lg font-bold shadow-xl hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 
              transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
            `}
          >
            {analysis.status === 'loading' ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Processing Multimodal Data...
              </>
            ) : (
              <>
                <PlayCircle className="w-6 h-6 group-hover:text-green-400 transition-colors" />
                Analyze Triage Protocol
              </>
            )}
          </button>

          {analysis.status === 'error' && (
             <div className="text-red-600 bg-red-50 px-4 py-2 rounded-lg text-sm font-medium">
               Error: {analysis.error || 'System unable to process request.'}
             </div>
          )}
        </div>

        {/* Results Area */}
        {analysis.status === 'success' && analysis.result && (
          <div className="max-w-3xl mx-auto mt-8">
            <ResultCard result={analysis.result} />
          </div>
        )}

      </main>

      <footer className="mt-auto py-6 text-center text-slate-400 text-sm border-t border-slate-200">
         <p>© 2025 ATMA System. Medical assistance tool only.</p>
      </footer>
    </div>
  );
};

export default App;