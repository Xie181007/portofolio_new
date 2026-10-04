import React, { useState } from 'react';
import { Compass, Network, Code, ShieldCheck, Rocket } from 'lucide-react';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Requirement analysis, tech feasibility & roadmap planning.',
      icon: <Compass className="w-4 h-4 text-amber-400" />,
    },
    {
      num: '02',
      title: 'Architecture',
      desc: 'Database schema design, APIs layout, and component models.',
      icon: <Network className="w-4 h-4 text-amber-400" />,
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'Writing clean, test-driven, responsive frontend and backend code.',
      icon: <Code className="w-4 h-4 text-amber-400" />,
    },
    {
      num: '04',
      title: 'Testing',
      desc: 'Cross-browser QA, accessibility checks, and performance audit.',
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
    },
    {
      num: '05',
      title: 'Deploy & Scale',
      desc: 'CI/CD deployment, cloud hosting, monitoring and scaling.',
      icon: <Rocket className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <section className="py-14 md:py-18 px-4 max-w-6xl mx-auto" id="process">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
          Methodology
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
          Development Process I Follow
        </h3>
        <p className="text-xs text-gray-400 mt-1 max-w-lg">
          A structured 5-step engineering pipeline from initial discovery to production deployment.
        </p>
      </div>

      {/* Process Pipeline Grid with Direct Connecting Arrows (No Circles) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-7 relative">
        {steps.map((step, index) => {
          const isActive = activeStep === step.num;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.num} className="relative flex flex-col">
              {/* Process Card */}
              <div
                onClick={() => setActiveStep(isActive ? null : step.num)}
                className={`glass-card p-4 rounded-2xl relative border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between group ${
                  isActive
                    ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/15 -translate-y-1'
                    : 'border-white/10 hover:border-amber-400/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Card Header: Step number and icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
                      {step.num}
                    </span>
                    <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
                      {step.icon}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5 flex items-center justify-between">
                    <span>{step.title}</span>
                  </h4>

                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span className="text-[10px]">Phase {step.num}</span>
                  <span className="text-amber-400/90 text-[10px] font-semibold">
                    {isLast ? '✓ Production' : 'Sequential'}
                  </span>
                </div>
              </div>

              {/* Direct Connecting Arrow line to next card on Desktop (NO CIRCLE) */}
              {!isLast && (
                <div 
                  className="hidden md:flex absolute -right-[27px] top-1/2 -translate-y-1/2 z-20 items-center justify-center w-[26px] pointer-events-none text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                  aria-hidden="true"
                >
                  <svg 
                    className="w-full h-5 overflow-visible" 
                    viewBox="0 0 26 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Connecting shaft directly bridging from left card to right card */}
                    <line 
                      x1="0" 
                      y1="8" 
                      x2="23" 
                      y2="8" 
                      stroke="#f59e0b" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    {/* Arrow head pointing into next card */}
                    <polyline 
                      points="16,3 23,8 16,13" 
                      stroke="#f59e0b" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              )}

              {/* Direct Connecting Arrow line to next card on Mobile/Vertical (NO CIRCLE) */}
              {!isLast && (
                <div 
                  className="md:hidden flex justify-center py-2.5 text-amber-400 pointer-events-none drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                  aria-hidden="true"
                >
                  <svg 
                    className="w-5 h-7 overflow-visible" 
                    viewBox="0 0 16 26" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Connecting shaft pointing straight down to next card */}
                    <line 
                      x1="8" 
                      y1="0" 
                      x2="8" 
                      y2="23" 
                      stroke="#f59e0b" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    {/* Arrow head pointing down into next card */}
                    <polyline 
                      points="3,16 8,23 13,16" 
                      stroke="#f59e0b" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
