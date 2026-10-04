import React, { useState } from 'react';
import { Code2, Layers, Database, Palette, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  deliverables: string[];
}

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      desc: 'Building end-to-end web apps with scalable backend APIs, secure authentication, and seamless user experiences.',
      icon: <Code2 className="w-5 h-5" />,
      iconBg: 'bg-amber-500/10',
      iconBorder: 'border-amber-500/30',
      iconColor: 'text-amber-400',
      deliverables: [
        'End-to-end architecture & APIs',
        'Authentication & RBAC security',
        'Real-time WebSocket & data streams',
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Architecture',
      desc: 'Crafting lightning-fast responsive client apps using Next.js, React, Tailwind CSS, and optimized assets.',
      icon: <Layers className="w-5 h-5" />,
      iconBg: 'bg-purple-500/10',
      iconBorder: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      deliverables: [
        'Next.js SSR/SSG & App Router',
        'State management & caching',
        'Core Web Vitals sub-second speed',
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Cloud APIs',
      desc: 'Architecting robust microservices, PostgreSQL/Node backend pipelines, and serverless edge functions.',
      icon: <Database className="w-5 h-5" />,
      iconBg: 'bg-blue-500/10',
      iconBorder: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      deliverables: [
        'Node.js & Express / Python APIs',
        'PostgreSQL schema & query tuning',
        'Dockerized deployments & CI/CD',
      ],
    },
    {
      id: 'uiux',
      title: 'UI/UX Implementation',
      desc: 'Translating complex Figma prototypes into interactive, accessible, and pixel-perfect design systems.',
      icon: <Palette className="w-5 h-5" />,
      iconBg: 'bg-emerald-500/10',
      iconBorder: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      deliverables: [
        'Pixel-perfect Figma to code',
        'Accessible WCAG compliant tokens',
        'Fluid micro-interactions & motion',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto relative" id="services">
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
          Services
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
          Services I Offer
        </h3>
      </div>

      {/* Spherical Orb Element on side */}
      <div 
        className="absolute -right-8 top-1/2 w-28 h-28 rounded-full sphere-orb hidden xl:block pointer-events-none opacity-85 -z-10" 
        aria-hidden="true" 
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => {
          const isSelected = selectedService === service.id;
          return (
            <div
              key={service.id}
              onClick={() => setSelectedService(isSelected ? null : service.id)}
              className={`glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group cursor-pointer border ${
                isSelected ? 'border-amber-400 shadow-lg shadow-amber-500/15' : 'border-white/10'
              }`}
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl ${service.iconBg} border ${service.iconBorder} flex items-center justify-center ${service.iconColor} mb-4 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

                {/* Expandable deliverables on click */}
                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 animate-fadeIn">
                    <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">
                      Included Deliverables:
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 group-hover:text-amber-400 transition-colors font-medium">
                  {isSelected ? 'Tap to collapse' : 'View details'}
                </span>
                <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-400 text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
