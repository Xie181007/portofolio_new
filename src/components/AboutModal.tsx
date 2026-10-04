import React from 'react';
import { X, CheckCircle2, Heart, Cpu, Rocket } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold tracking-wider uppercase mb-2">
              Background & Vision
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">About M. Rizki Irawan</h3>
            <p className="text-xs text-gray-400 mt-0.5">Software Craftsman, Clean Code Advocate & Lifelong Learner</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6 text-xs text-gray-300 leading-relaxed">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5 mb-2">
              <Rocket className="w-3.5 h-3.5" /> My Journey
            </h4>
            <p className="text-gray-300">
              I started coding during university, building tools to automate laboratory simulations. Since then, I've spent the past 5+ years specializing in JavaScript/TypeScript ecosystems, delivering products ranging from FinTech transaction systems to high-concurrency SaaS applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <Cpu className="w-4 h-4 text-amber-400 mb-2" />
              <h5 className="font-bold text-white text-xs mb-1">Architecture First</h5>
              <p className="text-[11px] text-gray-400">Scalable, maintainable code structures with strong typing.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <Heart className="w-4 h-4 text-purple-400 mb-2" />
              <h5 className="font-bold text-white text-xs mb-1">User Empathy</h5>
              <p className="text-[11px] text-gray-400">Polished micro-interactions and accessible experiences.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <Rocket className="w-4 h-4 text-emerald-400 mb-2" />
              <h5 className="font-bold text-white text-xs mb-1">Speed & Polish</h5>
              <p className="text-[11px] text-gray-400">Sub-second loading times and Core Web Vitals optimization.</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-300 mb-2">
              What I Bring To Every Project
            </h4>
            <ul className="space-y-2 text-[11px] text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Pixel-perfect translation of Figma mockups with responsive layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Modern React 19 / Next.js architecture with clean state management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Secure backend APIs with PostgreSQL, Node.js, and Dockerized deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Clear communication, proactive milestone updates, and thorough documentation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
