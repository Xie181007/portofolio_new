import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web Application',
        message: '',
      });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText('rizki.irawan@developer.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto relative mb-12" id="contact">
      {/* Floating 3D Spherical Orb on Bottom Right */}
      <div 
        className="absolute -right-12 bottom-0 w-36 h-36 rounded-full sphere-orb hidden lg:block pointer-events-none opacity-80 -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Info */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
              Let's Contact
            </span>
            <h3 className="text-3xl font-extrabold text-white mt-1 leading-tight">
              Have a project in mind?<br />
              Let's create something amazing together.
            </h3>
          </div>

          <div className="space-y-4 pt-2">
            <div 
              onClick={copyEmail}
              className="flex items-center gap-3 text-xs text-gray-300 group cursor-pointer"
            >
              <span className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cyan-400 border border-white/10 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <span className="group-hover:text-white transition-colors block">rizki.irawan@developer.com</span>
                <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                  {copiedEmail ? <span className="text-emerald-400">Copied!</span> : <>Click to copy email</>}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cyan-400 border border-white/10">
                <Phone className="w-4 h-4" />
              </span>
              <span>+62 812 3456 7890</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-cyan-400 border border-white/10">
                <MapPin className="w-4 h-4" />
              </span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Social Media Channels */}
          <div className="pt-4 border-t border-white/10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-3">
              Direct Social Channels:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="https://github.com/rizkiboiz02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl glass-pill hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rizkiboiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl glass-pill hover:bg-sky-500/10 text-gray-300 hover:text-sky-300 transition-all border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/rizkiboiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl glass-pill hover:bg-pink-500/10 text-gray-300 hover:text-pink-300 transition-all border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com/rizkiboiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl glass-pill hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-300 transition-all border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                <span>Twitter / X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 rounded-3xl space-y-4 border border-white/10 relative"
          >
            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-3 animate-fadeIn">
                <Check className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-bold">Thank you for your message, {formData.name}!</p>
                  <p className="text-[11px] text-emerald-300/80">I will review your inquiry and reply to {formData.email} within 24 hours.</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-gray-300 block mb-1 font-medium">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full glass-pill rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/80 focus:bg-white/[0.08] transition shadow-inner"
                />
              </div>

              <div>
                <label className="text-[11px] text-gray-300 block mb-1 font-medium">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full glass-pill rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/80 focus:bg-white/[0.08] transition shadow-inner"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-gray-300 block mb-1 font-medium">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[#0c1220]/90 backdrop-blur-xl border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-gray-200 focus:outline-none focus:border-cyan-400/80 transition"
              >
                <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="Backend API & Architecture">Backend API & Architecture</option>
                <option value="UI/UX Implementation">UI/UX Implementation</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-gray-300 block mb-1 font-medium">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project goals and timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full glass-pill rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/80 focus:bg-white/[0.08] transition resize-none shadow-inner"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 border-t border-white/30 transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
