import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenAbout: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAbout }) => {
  return (
    <section className="pt-2 sm:pt-4 md:pt-10 pb-12 md:pb-16 px-4 max-w-6xl mx-auto" id="about">
      <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left: Stats & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                Tentang Saya • About Me
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 leading-snug">
                Designing with Empathy, Building with Purpose
              </h3>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl glass-pill text-center hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">5+</p>
                <p className="text-[11px] text-gray-300 mt-1">Years Experience</p>
              </div>

              <div className="p-4 rounded-2xl glass-pill text-center hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">30+</p>
                <p className="text-[11px] text-gray-300 mt-1">Projects Completed</p>
              </div>

              <div className="p-4 rounded-2xl glass-pill text-center hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15+</p>
                <p className="text-[11px] text-gray-300 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right: Story Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light">
              I'm a dedicated web developer with five years of experience crafting modern, performant web applications. I solve complex challenges with clean code, modular architecture, and aesthetic interfaces that drive tangible real-world business results.
            </p>

            <div>
              <button
                onClick={onOpenAbout}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white px-5 py-2.5 rounded-full glass-pill hover:bg-white/10 hover:border-amber-400/50 transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                <span>More About Me</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
