import React from 'react';
import { TriageResponse } from '../types';
import { AlertTriangle, AlertCircle, Info, Activity } from 'lucide-react';

interface ResultCardProps {
  result: TriageResponse;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const getSeverityConfig = (level: string) => {
    if (level.toLowerCase().includes('level 1')) {
      return {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-900',
        icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
        badge: 'bg-red-600 text-white',
        title: 'CRITICAL CRISIS'
      };
    }
    if (level.toLowerCase().includes('level 2')) {
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-900',
        icon: <AlertCircle className="w-8 h-8 text-orange-600" />,
        badge: 'bg-orange-500 text-white',
        title: 'URGENT ATTENTION'
      };
    }
    return {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
      icon: <Info className="w-8 h-8 text-green-600" />,
      badge: 'bg-green-600 text-white',
      title: 'ROUTINE LOGGING'
    };
  };

  const config = getSeverityConfig(result.Triage_Level);

  return (
    <div className={`w-full rounded-2xl border-2 ${config.border} ${config.bg} p-6 shadow-lg animate-fade-in`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-full shadow-sm">
            {config.icon}
          </div>
          <div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${config.badge} mb-2 inline-block`}>
              {result.Triage_Level}
            </span>
            <h3 className={`text-2xl font-extrabold ${config.text}`}>
              {config.title}
            </h3>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-slate-400">
           <Activity className="w-5 h-5" />
           <span className="text-xs font-mono">ATMA-AI ANALYZED</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/60 rounded-xl p-4 border border-white/50">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Recommended Action</label>
          <p className={`text-xl font-bold mt-1 ${config.text}`}>
            {result.Triage_Action}
          </p>
        </div>

        <div className="bg-white/60 rounded-xl p-4 border border-white/50">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Reasoning & Evidence</label>
          <p className="text-slate-800 mt-1 leading-relaxed">
            {result.Reasoning_Summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;