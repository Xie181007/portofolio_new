import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  InstagramIcon, 
  TwitterXIcon, 
  DiscordIcon 
} from './BrandIcons';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const getFooterIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GitHubIcon className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <LinkedInIcon className="w-3.5 h-3.5" />;
      case 'instagram':
        return <InstagramIcon className="w-3.5 h-3.5" />;
      case 'twitter':
        return <TwitterXIcon className="w-3.5 h-3.5" />;
      case 'discord':
        return <DiscordIcon className="w-3.5 h-3.5" />;
      case 'email':
        return <Mail className="w-3.5 h-3.5" />;
      default:
        return <GitHubIcon className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="border-t border-white/[0.06] py-8 px-4 text-center mt-12 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <p>
          Made with passion &amp; clean code by{' '}
          <span className="text-white font-medium">M. Rizki Irawan</span>
        </p>

        {/* Dynamic Social Links */}
        <div className="flex items-center gap-3 text-gray-400">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              title={`${item.name} (${item.username})`}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-cyan-300 hover:scale-110 transition-all border border-white/5"
            >
              {getFooterIcon(item.id)}
            </a>
          ))}
        </div>

        <p className="text-[11px] text-gray-500 font-mono">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
