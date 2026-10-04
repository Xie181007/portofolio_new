import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData } from './ProjectModal';

interface ProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const projectList: ProjectData[] = [
    {
      id: 'finova',
      title: 'Finova — Finance & Wealth Suite',
      category: 'FinTech & Web3',
      tags: ['Next.js', 'Tailwind', 'FinTech', 'WebSockets'],
      description: 'A modern decentralized multi-currency asset portfolio with instant transfers, portfolio analytics, and automated yield tracking.',
      metrics: '+$24k Vol / 99.9% Uptime',
      mockupType: 'finance',
      features: [
        'Multi-currency balance aggregation and fiat on-ramp integration',
        'Sub-100ms real-time quote streaming via WebSocket feeds',
        'Biometric authentication and hardware wallet ledger support',
      ],
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Docker'],
      demoUrl: 'https://example.com/demo/finova',
      repoUrl: 'https://github.com/rizkiboiz02/finova-finance',
    },
    {
      id: 'pulsegrid',
      title: 'PulseGrid — Cloud Telemetry SaaS',
      category: 'Enterprise SaaS',
      tags: ['React 19', 'Chart.js', 'PostgreSQL', 'Redis'],
      description: 'High-density real-time metrics telemetry dashboard engineered for high-concurrency cloud API monitoring and anomaly alerting.',
      metrics: '1.2M Events / Sec Processed',
      mockupType: 'analytics',
      features: [
        'Dynamic interactive time-series charts with zero dropped frames',
        'Custom SQL query builder with real-time query explain plans',
        'Automated anomaly detection alerts sent directly to Slack/Discord',
      ],
      techStack: ['React 19', 'Chart.js', 'PostgreSQL', 'Node.js', 'Express', 'Redis'],
      demoUrl: 'https://example.com/demo/pulsegrid',
      repoUrl: 'https://github.com/rizkiboiz02/pulsegrid-telemetry',
    },
    {
      id: 'hyperstore',
      title: 'HyperStore — Headless E-Commerce',
      category: 'E-Commerce',
      tags: ['Next.js 14', 'Stripe', 'Tailwind CSS', 'Algolia'],
      description: 'Blazing-fast global headless storefront with instant faceted search, multi-currency checkout, and 99/100 Lighthouse score.',
      metrics: '+48% Conversion Rate',
      mockupType: 'ecommerce',
      features: [
        'Sub-50ms Algolia catalog search and dynamic faceted filtration',
        'Stripe Elements secure multi-currency checkout pipeline',
        'Incremental static regeneration (ISR) for 100,000+ SKU inventory',
      ],
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Redis', 'Zustand'],
      demoUrl: 'https://example.com/demo/hyperstore',
      repoUrl: 'https://github.com/rizkiboiz02/hyperstore-ecommerce',
    },
    {
      id: 'cloudgateway',
      title: 'CloudGateway — Distributed API Mesh',
      category: 'Cloud Architecture',
      tags: ['Node.js', 'Go', 'Redis', 'Docker'],
      description: 'High-throughput reverse proxy and API routing mesh supporting distributed rate limiting, JWT validation, and circuit breaking.',
      metrics: '<2ms Gateway Overhead',
      mockupType: 'analytics',
      features: [
        'Dynamic traffic splitting and canary deployment routing engine',
        'Sub-millisecond token bucket rate limiting powered by Redis Cluster',
        'Automated mTLS mutual authentication between microservice pods',
      ],
      techStack: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'PostgreSQL', 'Express'],
      demoUrl: 'https://example.com/demo/cloudgateway',
      repoUrl: 'https://github.com/rizkiboiz02/cloud-api-gateway',
    },
    {
      id: 'taskflow',
      title: 'TaskFlow Pro — Agile Workspace',
      category: 'Enterprise SaaS',
      tags: ['React', 'GraphQL', 'Node.js', 'Tailwind'],
      description: 'Collaborative agile project management platform with optimistic UI updates, drag-and-drop workflow kanban, and sprint tracking.',
      metrics: '25,000+ Active Sprint Tasks',
      mockupType: 'kanban',
      features: [
        'Real-time multi-user cursor and board presence via WebSockets',
        'Optimistic state updates with zero-latency drag-and-drop response',
        'Custom sprint burndown charts and velocity analytics',
      ],
      techStack: ['React', 'GraphQL', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      demoUrl: 'https://example.com/demo/taskflow',
      repoUrl: 'https://github.com/rizkiboiz02/taskflow-pro',
    },
    {
      id: 'omnistream',
      title: 'OmniStream — Low-Latency Broadcast Hub',
      category: 'Enterprise SaaS',
      tags: ['WebRTC', 'Canvas API', 'Node.js', 'FFmpeg'],
      description: 'Ultra-low latency browser-based video broadcasting suite with interactive canvas overlay filters, telemetry, and live chat.',
      metrics: '<200ms Global Latency',
      mockupType: 'stream',
      features: [
        'Hybrid P2P and SFU WebRTC mesh fallback for resilient streaming',
        'Real-time audio frequency visualizer via Web Audio API',
        'Automated cloud recording and instant HLS video archiving',
      ],
      techStack: ['WebRTC', 'Canvas 2D', 'Node.js', 'Express', 'FFmpeg', 'Docker'],
      demoUrl: 'https://example.com/demo/omnistream',
      repoUrl: 'https://github.com/rizkiboiz02/omnistream-webrtc',
    },
    {
      id: 'novaui',
      title: 'NovaUI — Accessible Design System',
      category: 'Developer Tools',
      tags: ['TypeScript', 'Tailwind CSS', 'Storybook', 'Vite'],
      description: 'Production-ready, keyboard-navigable component library engineered for high-compliance enterprise web applications.',
      metrics: '100% WCAG 2.1 AA Compliant',
      mockupType: 'saas',
      features: [
        'Zero-runtime design tokens powered by Tailwind CSS and CSS variables',
        'Full keyboard accessibility and WAI-ARIA compliant screen-reader patterns',
        'Interactive Storybook component playground and automated test suite',
      ],
      techStack: ['TypeScript', 'Tailwind CSS', 'Vite', 'Storybook', 'npm Registry'],
      demoUrl: 'https://example.com/demo/novaui',
      repoUrl: 'https://github.com/rizkiboiz02/novaui-components',
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 max-w-6xl mx-auto" id="projects">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
            Portfolio Showcase ({projectList.length} Projects)
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
            Featured Projects & Work
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-lg">
            A curated collection of full-stack web platforms, interactive applications, and scalable architectures.
          </p>
        </div>
      </div>

      {/* Projects Grid: 7 Cards (3 columns on desktop, responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden p-4 group cursor-pointer border border-white/10 flex flex-col justify-between"
          >
            <div>
              {/* Mockup Display Frame */}
              <div className="h-44 rounded-xl bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border border-white/10 p-3.5 flex items-center justify-center relative overflow-hidden group-hover:border-amber-400/40 transition-colors">
                
                {/* 1. Finance Mockup */}
                {project.mockupType === 'finance' && (
                  <div className="w-full h-full bg-[#121824] rounded-lg border border-white/10 p-3 shadow-inner flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-[10px] text-gray-400">Total Portfolio</span>
                      <span className="text-[11px] font-bold text-emerald-400 font-mono">$24,580.00</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-9 rounded bg-white/5 flex items-center justify-center">
                        <span className="w-4 h-1 bg-white/20 rounded"></span>
                      </div>
                      <div className="h-9 rounded bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                        <span className="w-4 h-1.5 bg-amber-400 rounded"></span>
                      </div>
                      <div className="h-9 rounded bg-white/5 flex items-center justify-center">
                        <span className="w-4 h-1 bg-white/20 rounded"></span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-gray-400 font-mono">
                      <span>Live WebSocket</span>
                      <span className="text-amber-400">+14.2%</span>
                    </div>
                  </div>
                )}

                {/* 2. Analytics Mockup */}
                {project.mockupType === 'analytics' && (
                  <div className="w-full h-full bg-[#121824] rounded-lg border border-white/10 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                        <span className="text-[10px] text-gray-300 font-mono">Telemetry Node 01</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400">99.9% Uptime</span>
                    </div>

                    <div className="flex items-end justify-between h-14 px-2">
                      <div className="w-3 h-6 bg-amber-500/30 rounded-t group-hover:h-8 transition-all duration-300"></div>
                      <div className="w-3 h-10 bg-amber-500/50 rounded-t group-hover:h-11 transition-all duration-300"></div>
                      <div className="w-3 h-8 bg-amber-400/60 rounded-t group-hover:h-9 transition-all duration-300"></div>
                      <div className="w-3 h-12 bg-amber-400 rounded-t shadow-glow-amber"></div>
                      <div className="w-3 h-7 bg-yellow-500/40 rounded-t group-hover:h-10 transition-all duration-300"></div>
                      <div className="w-3 h-11 bg-emerald-400/70 rounded-t"></div>
                    </div>

                    <div className="h-1.5 rounded bg-white/5 w-2/3"></div>
                  </div>
                )}

                {/* 3. E-Commerce Mockup */}
                {project.mockupType === 'ecommerce' && (
                  <div className="w-full h-full bg-[#121824] rounded-lg border border-white/10 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[10px] font-semibold text-white">HyperStore Cart</span>
                      <span className="text-[9px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">3 Items</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-amber-500 to-yellow-500 flex items-center justify-center text-xs">🛍️</div>
                      <div className="space-y-1 flex-1">
                        <div className="h-2 w-20 bg-white/20 rounded"></div>
                        <div className="h-1.5 w-12 bg-emerald-400/60 rounded"></div>
                      </div>
                      <span className="text-[10px] font-bold text-white font-mono">$189.00</span>
                    </div>
                    <div className="w-full h-5 rounded bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-[9px] font-bold text-slate-950">
                      Instant Checkout
                    </div>
                  </div>
                )}

                {/* 5. Kanban Mockup */}
                {project.mockupType === 'kanban' && (
                  <div className="w-full h-full bg-[#121824] rounded-lg border border-white/10 p-2.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[9px] text-gray-400">
                      <span className="font-semibold text-white">Sprint #24 Board</span>
                      <span className="text-amber-400 font-mono">12 Done</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 h-16">
                      <div className="bg-white/[0.03] rounded p-1 space-y-1">
                        <span className="text-[8px] text-gray-400 block">To-Do</span>
                        <div className="h-3 rounded bg-white/10"></div>
                      </div>
                      <div className="bg-amber-500/10 border border-amber-400/30 rounded p-1 space-y-1">
                        <span className="text-[8px] text-amber-300 block">In Progress</span>
                        <div className="h-3 rounded bg-amber-400/40"></div>
                      </div>
                      <div className="bg-white/[0.03] rounded p-1 space-y-1">
                        <span className="text-[8px] text-emerald-400 block">Done</span>
                        <div className="h-3 rounded bg-emerald-400/40"></div>
                      </div>
                    </div>
                    <div className="h-1.5 rounded bg-white/5 w-1/2"></div>
                  </div>
                )}

                {/* 6. Stream Mockup */}
                {project.mockupType === 'stream' && (
                  <div className="w-full h-full bg-[#121824] rounded-lg border border-white/10 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-rose-400 uppercase font-mono">LIVE 60FPS</span>
                      </div>
                      <span className="text-[9px] font-mono text-amber-300">1080p WebRTC</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 h-10">
                      {[40, 75, 100, 60, 85, 45, 90, 65, 30].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-amber-500 to-yellow-400 rounded-full"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-400 font-mono">
                      <span>Latency: 142ms</span>
                      <span className="text-emerald-400">Buffer OK</span>
                    </div>
                  </div>
                )}

                {/* 7. SaaS / Design System Mockup */}
                {project.mockupType === 'saas' && (
                  <div className="w-full h-full bg-[#121824] rounded-lg border border-white/10 p-3 flex flex-col justify-between items-center text-center">
                    <div className="w-full flex justify-between items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="text-[9px] font-mono text-amber-300">NovaUI Kit</span>
                    </div>
                    <div className="my-auto space-y-1">
                      <div className="h-3 w-28 bg-white/30 rounded mx-auto"></div>
                      <div className="h-2 w-20 bg-white/10 rounded mx-auto"></div>
                    </div>
                    <div className="h-4 w-20 bg-amber-400/80 rounded-full mx-auto shadow-sm shadow-amber-400/30 flex items-center justify-center text-[8px] font-bold text-slate-950">
                      Components
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Category Badge */}
              <div className="pt-4 pb-2 px-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {project.metrics}
                  </span>
                </div>

                <h4 className="text-sm md:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-gray-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-white/[0.02] text-[10px] text-gray-400 font-mono">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Footer with Quick Links */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-2">
              <span className="text-xs text-amber-300 group-hover:underline flex items-center gap-1 font-medium">
                View Project Details <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all text-xs">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
