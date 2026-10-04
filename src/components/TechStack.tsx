import React, { useState } from 'react';
import { 
  ReactIcon, 
  NextJsIcon, 
  TypeScriptIcon, 
  NodeJsIcon,
  TailwindIcon,
  PythonIcon, 
  PostgresIcon, 
  DockerIcon,
  GraphQlIcon,
  RedisIcon,
  AwsIcon
} from './BrandIcons';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'database';
  icon: React.ReactNode;
  level: string;
  experience: string;
}

export const TechStack: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'devops' | 'database'>('all');
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const technologies: TechItem[] = [
    {
      name: 'React',
      category: 'frontend',
      icon: <ReactIcon className="w-5 h-5 shrink-0" />,
      level: 'Expert',
      experience: '5+ years',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      icon: <NextJsIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '4 years',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      icon: <TypeScriptIcon className="w-5 h-5 shrink-0" />,
      level: 'Expert',
      experience: '5 years',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: <TailwindIcon className="w-5 h-5 shrink-0" />,
      level: 'Expert',
      experience: '5 years',
    },
    {
      name: 'Node.js',
      category: 'backend',
      icon: <NodeJsIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '4+ years',
    },
    {
      name: 'Python',
      category: 'backend',
      icon: <PythonIcon className="w-5 h-5 shrink-0" />,
      level: 'Proficient',
      experience: '3 years',
    },
    {
      name: 'GraphQL',
      category: 'backend',
      icon: <GraphQlIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '3 years',
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      icon: <PostgresIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '4 years',
    },
    {
      name: 'Redis',
      category: 'database',
      icon: <RedisIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '3 years',
    },
    {
      name: 'Docker',
      category: 'devops',
      icon: <DockerIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '3+ years',
    },
    {
      name: 'AWS Cloud',
      category: 'devops',
      icon: <AwsIcon className="w-5 h-5 shrink-0" />,
      level: 'Advanced',
      experience: '3+ years',
    },
  ];

  const filtered = activeFilter === 'all'
    ? technologies
    : technologies.filter((t) => t.category === activeFilter);

  return (
    <section className="py-10 md:py-14 px-4 max-w-6xl mx-auto" id="skills">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
            Technologies
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
            Technologies I Use
          </h3>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start sm:self-auto overflow-x-auto max-w-full">
          {(['all', 'frontend', 'backend', 'database', 'devops'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-lg text-xs font-medium capitalize whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Badges Grid with Authentic Official Logos */}
      <div className="glass-card rounded-2xl p-5 md:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 border border-white/10">
        {filtered.map((tech) => {
          const isClicked = activeTech === tech.name;
          return (
            <div
              key={tech.name}
              onClick={() => setActiveTech(isClicked ? null : tech.name)}
              className={`flex flex-col sm:flex-row items-center sm:items-center gap-2.5 px-3.5 py-3 rounded-xl glass-pill transition-all duration-200 cursor-pointer active:scale-95 group ${
                isClicked
                  ? 'border-cyan-400 bg-cyan-500/15 shadow-lg shadow-cyan-500/25 -translate-y-0.5'
                  : 'hover:border-cyan-400/50 hover:bg-white/[0.08] hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-black/40 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-center sm:text-left min-w-0">
                <span className="text-xs font-semibold text-gray-200 block truncate">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-400 group-hover:text-cyan-300 block font-mono transition-colors">
                  {isClicked ? `${tech.level} • ${tech.experience}` : tech.experience}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
