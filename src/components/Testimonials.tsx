import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  initials: string;
  rating: number;
  accentGradient: string;
  borderHover: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'Rizki is an exceptional full-stack developer. He understood our microservices architecture immediately and delivered an ultra-responsive platform ahead of schedule.',
      name: 'Karin Sharma',
      role: 'CTO',
      company: 'Finora Tech',
      project: 'Financial Analytics Suite',
      initials: 'KS',
      rating: 5,
      accentGradient: 'from-amber-500/30 to-yellow-500/20 text-amber-300',
      borderHover: 'hover:border-amber-400/40',
    },
    {
      quote:
        'Working with Rizki was seamless. His modern stack decisions, clean TypeScript architecture, and modular coding standards made scaling our MVP effortless.',
      name: 'Mohit Verma',
      role: 'Founder & CEO',
      company: 'Omnia Labs',
      project: 'AI Workflow Platform',
      initials: 'MV',
      rating: 5,
      accentGradient: 'from-indigo-500/30 to-purple-500/20 text-indigo-300',
      borderHover: 'hover:border-indigo-400/40',
    },
    {
      quote:
        'Rizki has a rare eye for both sleek design and backend performance. The frontend fluidity and Sub-second API responses exceeded our highest expectations.',
      name: 'Renee Naim',
      role: 'Head of Product',
      company: 'CloudNova Systems',
      project: 'SaaS DevOps Portal',
      initials: 'RN',
      rating: 5,
      accentGradient: 'from-emerald-500/30 to-teal-500/20 text-emerald-300',
      borderHover: 'hover:border-emerald-400/40',
    },
    {
      quote:
        'Delivered an astonishing 99/100 Lighthouse performance score on our ecommerce redesign. Rizki is punctual, dedicated, and writes pristine code.',
      name: 'David Vance',
      role: 'VP of Engineering',
      company: 'Aura Commerce',
      project: 'Next.js Global Storefront',
      initials: 'DV',
      rating: 5,
      accentGradient: 'from-amber-500/30 to-orange-500/20 text-amber-300',
      borderHover: 'hover:border-amber-400/40',
    },
    {
      quote:
        'His communication was top-tier from kickoff to deployment. Handled complex real-time WebSocket state management with zero friction.',
      name: 'Elena Rostova',
      role: 'Lead Architect',
      company: 'Nexus Grid',
      project: 'Realtime Fleet Telemetry',
      initials: 'ER',
      rating: 5,
      accentGradient: 'from-pink-500/30 to-rose-500/20 text-pink-300',
      borderHover: 'hover:border-pink-400/40',
    },
    {
      quote:
        'A rare senior talent who bridges design engineering and rock-solid systems. Will definitely hire Rizki again for our upcoming Series A expansion.',
      name: 'Taufiq Hidayat',
      role: 'Co-Founder',
      company: 'Synapse AI',
      project: 'Enterprise RAG Dashboard',
      initials: 'TH',
      rating: 5,
      accentGradient: 'from-yellow-500/30 to-amber-500/20 text-yellow-300',
      borderHover: 'hover:border-amber-400/40',
    },
  ];

  // Duplicate for seamless 100% infinite marquee loop
  const marqueeList = [...testimonials, ...testimonials];

  return (
    <section className="py-14 md:py-20 overflow-hidden relative" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
            Client Feedback
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
            What Clients Say
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Infinite Marquee • Hover to pause</span>
        </div>
      </div>

      {/* Marquee Container with Optical Edge Mask */}
      <div className="marquee-container w-full overflow-hidden marquee-mask py-3">
        <div className="animate-marquee-left flex gap-5">
          {marqueeList.map((item, idx) => (
            <div
              key={idx}
              className={`w-[320px] sm:w-[360px] md:w-[390px] shrink-0 glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10 ${item.borderHover} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10 group`}
            >
              <div>
                {/* Header: Stars + Company Tag + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono ml-1">5.0</span>
                  </div>
                  <Quote className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Project Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-cyan-300 mb-3.5">
                  {item.project}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs text-gray-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.accentGradient} font-bold text-xs flex items-center justify-center shrink-0 border border-white/15 shadow-inner`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white leading-tight flex items-center gap-1">
                      {item.name}
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    </h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {item.role} • <span className="text-gray-300 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
