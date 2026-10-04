import React from 'react';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';
import { 
  GoogleCloudIcon, 
  MicrosoftIcon, 
  GitHubIcon, 
  DockerIcon,
  LinkedInIcon,
  InstagramIcon,
  TwitterXIcon,
  DiscordIcon 
} from './BrandIcons';
import { socialLinks } from '../data/socialLinks';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  // Transparent cutout image with completely removed background
  const cutoutImgUrl = "/developer_transparent.png";

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GitHubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4 text-sky-400" />;
      case 'instagram':
        return <InstagramIcon className="w-4 h-4 text-pink-400" />;
      case 'twitter':
        return <TwitterXIcon className="w-4 h-4 text-amber-300" />;
      case 'discord':
        return <DiscordIcon className="w-4 h-4 text-indigo-400" />;
      case 'email':
        return <Mail className="w-4 h-4 text-emerald-400" />;
      default:
        return <GitHubIcon className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-4 md:pb-16 px-4 max-w-6xl mx-auto overflow-hidden" id="home">
      {/* Floating 3D Iridescent Glass Sphere (Visual Refraction) */}
      <div 
        className="absolute -right-16 top-4 w-40 h-40 rounded-full sphere-orb-gold opacity-85 hidden lg:block -z-10 animate-pulse pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Grid: Left = Text (M. Rizki Irawan), Right = 3D Pop-Out Glass Profile Visual */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Content Column */}
        <div className="md:col-span-7 space-y-5 lg:space-y-6 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-[11px] font-semibold tracking-wider text-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
            HELLO, I'M
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              M. Rizki Irawan
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Web Developer
            </h2>
          </div>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed font-light">
            I craft modern, performant web applications and intuitive digital experiences built with clean code and cutting-edge technology.
          </p>

          {/* CTA Buttons with Glassmorphic Aesthetics */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 transition-all flex items-center gap-2 active:scale-95 cursor-pointer border-t border-white/40"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </a>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full glass-pill hover:bg-white/10 text-gray-200 hover:text-white text-xs font-semibold transition-all flex items-center gap-2 active:scale-95 cursor-pointer border border-white/15 hover:border-amber-400/50"
            >
              <span>Contact Me</span>
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* Social Media Links Bar (Easily configurable in src/data/socialLinks.ts) */}
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-2 font-mono">
              Connect With Me / Social Media:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill ${item.color} ${item.badgeBg} text-xs font-medium text-gray-300 transition-all duration-200 hover:-translate-y-0.5 border border-white/10`}
                >
                  {getSocialIcon(item.id)}
                  <span className="text-[11px]">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tech Ecosystem / Trusted By */}
          <div className="pt-4 sm:pt-5 border-t border-white/[0.08]">
            <span className="text-[10px] sm:text-[11px] tracking-wide text-gray-400 font-medium block mb-2 sm:mb-3 uppercase">
              Trusted Stack & Partners
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors duration-200">
                <GoogleCloudIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Google Cloud
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors duration-200">
                <MicrosoftIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Microsoft
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors duration-200">
                <GitHubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> GitHub
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors duration-200">
                <DockerIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Docker
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Pop-Out Glass Profile Visual (No Photo Background) */}
        <div className="md:col-span-5 relative flex items-center justify-center pt-2 md:pt-0">
          <div className="relative w-[280px] sm:w-[310px] md:w-[290px] lg:w-[330px] h-[350px] sm:h-[380px] md:h-[365px] lg:h-[405px] flex items-end justify-center">
            
            {/* Ambient Refraction Glows behind the glass */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-yellow-600/20 to-amber-700/30 blur-3xl rounded-full transform -rotate-12 pointer-events-none -z-10" />

            {/* Layer 1: Real Frosted Glass Backplate (Lower Frame) */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] sm:w-[286px] md:w-[270px] lg:w-[310px] h-[280px] sm:h-[305px] md:h-[290px] lg:h-[325px] overflow-hidden glass-panel-deep shadow-2xl z-0"
              style={{ borderRadius: '38px 118px 38px 118px' }}
            >
              {/* Internal Glass Reflection Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/40 pointer-events-none" />
              
              {/* Clipped Body of developer inside the glass frame */}
              <img
                src={cutoutImgUrl}
                alt="M. Rizki Irawan - Web Developer"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[350px] sm:h-[380px] md:h-[365px] lg:h-[405px] object-cover object-bottom scale-105 pointer-events-none drop-shadow-2xl"
                loading="eager"
              />

              {/* Bottom Glass Shadow & Specular Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Layer 2: Neon Golden Curved Glass Outer Border */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[266px] sm:w-[292px] md:w-[276px] lg:w-[316px] h-[286px] sm:h-[311px] md:h-[296px] lg:h-[331px] border-2 border-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.85)] z-10 pointer-events-none transition-transform duration-500 hover:scale-[1.01]"
              style={{ borderRadius: '40px 120px 40px 120px' }}
            />

            {/* Layer 3: 3D Pop-Out Head & Shoulders (Pure transparent cutout extending ABOVE the top border) */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] sm:w-[286px] md:w-[270px] lg:w-[310px] h-[350px] sm:h-[380px] md:h-[365px] lg:h-[405px] z-20 pointer-events-none"
              style={{
                // Mask only clips the lower chest so the head and shoulders stay 100% visible while popping out of the top
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 80%)',
                maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 80%)',
              }}
            >
              <img
                src={cutoutImgUrl}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-bottom scale-105 drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]"
                loading="eager"
              />
            </div>

            {/* Layer 4: Floating Glass Badge (Top Right: 5+ Years) */}
            <div className="absolute top-6 sm:top-8 -right-1 sm:right-0 md:-right-2 z-30 glass-card rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-col items-center hover:scale-105 transition-transform border border-white/20 border-t-white/40">
              <span className="text-lg sm:text-2xl font-extrabold text-white leading-tight">5+</span>
              <span className="text-[9px] sm:text-[10px] text-gray-300 text-center leading-tight">
                Years of<br />Experience
              </span>
            </div>

            {/* Layer 5: Floating Glass Statistics Card (Bottom Right: Impact) */}
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-2 lg:bottom-4 right-1 sm:right-2 md:-right-1 lg:right-0 z-30 glass-card rounded-2xl p-2.5 sm:p-3 shadow-2xl flex flex-col gap-1 w-32 sm:w-36 hover:scale-105 transition-transform border border-white/20 border-t-white/40">
              <span className="text-[9px] sm:text-[10px] text-gray-400">Development Impact</span>
              <span className="text-emerald-400 font-bold text-xs sm:text-sm">+120% Uptime</span>
              <div className="w-full h-1.5 bg-slate-900/80 rounded-full overflow-hidden mt-0.5 sm:mt-1 border border-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
