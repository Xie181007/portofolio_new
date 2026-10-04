import React, { useState } from 'react';
import { X, Download, Check, Briefcase, GraduationCap, Award, ExternalLink, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Simulate generation and download
    const element = document.createElement("a");
    const file = new Blob([
      `M. RIZKI IRAWAN - FULL-STACK WEB DEVELOPER\n` +
      `Email: rizki.irawan@developer.com | Phone: +62 812 3456 7890 | Location: Jakarta, Indonesia\n\n` +
      `SUMMARY:\n` +
      `Experienced Web Developer with 5+ years of expertise in crafting scalable web applications, responsive frontend architecture, and resilient API microservices.\n\n` +
      `CORE SKILLS:\n` +
      `- Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux, Motion\n` +
      `- Backend: Node.js, Express, Python, REST APIs, GraphQL\n` +
      `- Database & Cloud: PostgreSQL, MongoDB, Docker, Google Cloud, AWS\n\n` +
      `EXPERIENCE:\n` +
      `Lead Frontend Engineer — CloudNova (2022 - Present)\n` +
      `Senior Web Developer — Finora Tech (2020 - 2022)\n` +
      `Full-Stack Developer — Omnia Labs (2019 - 2020)\n\n` +
      `PROJECTS:\n` +
      `- Finova Finance App: Scalable decentralized multi-currency wallet with $24k+ test transactions\n` +
      `- Metrics Pulse SaaS Platform: Real-time analytics dashboard with interactive charts\n` +
      `- Modern Design System: 50+ accessible React components\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "M_Rizki_Irawan_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-semibold tracking-wider uppercase mb-2">
              Curriculum Vitae
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">M. Rizki Irawan</h3>
            <p className="text-xs text-gray-400 mt-0.5">Senior Web Developer & Full-Stack Architect • Jakarta, Indonesia</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6 text-xs text-gray-300">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-1.5 mb-2">
              <Code2 className="w-3.5 h-3.5" /> Professional Summary
            </h4>
            <p className="leading-relaxed text-gray-300">
              Experienced Web Developer with 5+ years building performant web applications, modern design systems, and robust backend microservices. Proven track record delivering 30+ production projects with 99.9% uptime and high user retention.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-1.5 mb-3">
              <Briefcase className="w-3.5 h-3.5" /> Work Experience
            </h4>
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Lead Frontend Engineer</span>
                  <span className="text-[11px] text-cyan-400 font-mono">2022 — Present</span>
                </div>
                <div className="text-[11px] text-gray-400 mb-2">CloudNova Digital • Jakarta / Remote</div>
                <p className="text-gray-300 leading-relaxed text-[11px]">
                  Architected modern Next.js 14 applications serving 250k+ monthly active users. Reduced bundle size by 42% and standardized company design system with Tailwind CSS and TypeScript.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Senior Full-Stack Developer</span>
                  <span className="text-[11px] text-cyan-400 font-mono">2020 — 2022</span>
                </div>
                <div className="text-[11px] text-gray-400 mb-2">Finora Tech Innovations</div>
                <p className="text-gray-300 leading-relaxed text-[11px]">
                  Built high-security FinTech dashboards with real-time WebSocket ledger streams and automated Docker CI/CD pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                <GraduationCap className="w-3.5 h-3.5" /> Education
              </h4>
              <p className="font-bold text-white">B.S. in Computer Science</p>
              <p className="text-gray-400 text-[11px]">University of Indonesia • 2015 – 2019</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5 mb-2">
                <Award className="w-3.5 h-3.5" /> Certifications
              </h4>
              <p className="font-bold text-white">Google Cloud Certified</p>
              <p className="text-gray-400 text-[11px]">Professional Cloud Architect & Node.js Specialist</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-[11px] text-gray-400">
            Available for select freelance & full-time roles
          </div>
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" /> Downloaded!
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" /> Download Full CV
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
