import React, { useState } from 'react';
import { X, ExternalLink, Github, Check, Layers, Monitor, Smartphone, ShieldCheck } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  metrics: string;
  features: string[];
  techStack: string[];
  mockupType: string;
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');
  const [interactiveCounter, setInteractiveCounter] = useState(24580);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Production Ready
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 mt-5 mb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
              activeTab === 'overview'
                ? 'bg-white text-slate-900 shadow-md font-semibold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition flex items-center gap-1.5 ${
              activeTab === 'preview'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Monitor className="w-3 h-3" /> Interactive UI Sandbox
          </button>
        </div>

        {activeTab === 'overview' ? (
          <div className="space-y-6 text-xs text-gray-300">
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] text-gray-400 block mb-0.5">Impact Metric</span>
                <span className="text-base font-bold text-emerald-400">{project.metrics}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] text-gray-400 block mb-0.5">Tech Focus</span>
                <span className="text-base font-bold text-amber-400">{project.tags[0]}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] text-gray-400 block mb-0.5">Architecture</span>
                <span className="text-base font-bold text-purple-400">Micro-frontend</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" /> Key Features & Capabilities
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed text-[11px]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" /> Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 text-[11px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Preview tab */
          <div className="p-4 rounded-2xl bg-[#0c1017] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
              <span className="text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live Simulated View
              </span>
              <span className="text-[11px] font-mono text-amber-400">demo-sandbox.local</span>
            </div>

            {project.mockupType === 'finance' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-amber-950/30 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Total Portfolio Balance</div>
                    <div className="text-2xl font-bold text-white tracking-tight mt-0.5">
                      ${interactiveCounter.toLocaleString()}.00
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setInteractiveCounter((prev) => prev + 500)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-semibold transition"
                    >
                      + Deposit $500
                    </button>
                    <button
                      onClick={() => setInteractiveCounter((prev) => Math.max(0, prev - 250))}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-semibold transition"
                    >
                      - Transfer $250
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[10px] text-gray-400">24h Gain</span>
                    <p className="text-xs font-bold text-emerald-400 mt-1">+12.4%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[10px] text-gray-400">Active Assets</span>
                    <p className="text-xs font-bold text-amber-400 mt-1">8 Cryptos</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[10px] text-gray-400">Security Score</span>
                    <p className="text-xs font-bold text-indigo-400 mt-1">99.8%</p>
                  </div>
                </div>
              </div>
            )}

            {project.mockupType === 'analytics' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Weekly Traffic & API Latency</span>
                  <span className="text-emerald-400 font-semibold">Real-time Stream</span>
                </div>
                <div className="h-28 flex items-end gap-2 px-2 pt-4 bg-slate-900/60 rounded-xl border border-white/5">
                  <div className="flex-1 bg-amber-500/30 rounded-t h-[40%] hover:bg-amber-400 transition-colors"></div>
                  <div className="flex-1 bg-amber-500/50 rounded-t h-[65%] hover:bg-amber-400 transition-colors"></div>
                  <div className="flex-1 bg-amber-400/50 rounded-t h-[50%] hover:bg-amber-400 transition-colors"></div>
                  <div className="flex-1 bg-amber-400 rounded-t h-[92%] shadow-glow-amber"></div>
                  <div className="flex-1 bg-yellow-500/40 rounded-t h-[60%] hover:bg-amber-400 transition-colors"></div>
                  <div className="flex-1 bg-amber-500/40 rounded-t h-[75%] hover:bg-amber-400 transition-colors"></div>
                  <div className="flex-1 bg-emerald-400/60 rounded-t h-[85%] hover:bg-amber-400 transition-colors"></div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            )}

            {project.mockupType === 'saas' && (
              <div className="p-6 rounded-xl bg-gradient-to-br from-amber-950/30 to-slate-900 border border-white/10 text-center space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold">
                  Next-Gen Workflow Platform
                </div>
                <h5 className="text-base font-bold text-white">Automate Your Developer Pipeline</h5>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Integrated telemetry, CI/CD automated branches, and instantaneous edge distribution.
                </p>
                <div className="pt-2">
                  <button className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition">
                    Start Interactive Tour
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleShare}
            className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition"
          >
            {copiedLink ? (
              <span className="text-emerald-400 font-medium">Link copied to clipboard!</span>
            ) : (
              <>Share Project Link</>
            )}
          </button>
          
          <div className="flex items-center gap-2.5">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white text-xs font-medium flex items-center gap-1.5 border border-white/10 transition"
              >
                <Github className="w-3.5 h-3.5" /> Source Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Preview
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
