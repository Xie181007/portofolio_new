export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  username: string;
  color: string;
  badgeBg: string;
}

// ============================================================================
// DAFTAR LINK MEDIA SOSIAL (Bisa Anda sesuaikan langsung URL & username di sini)
// ============================================================================
export const socialLinks: SocialLinkItem[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/rizkiboiz02',
    username: '@rizkiboiz02',
    color: 'hover:text-white hover:border-white/40',
    badgeBg: 'hover:bg-white/10',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rizkiboiz',
    username: 'in/rizkiboiz',
    color: 'hover:text-sky-400 hover:border-sky-400/40',
    badgeBg: 'hover:bg-sky-500/10',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/rizkiboiz',
    username: '@rizkiboiz',
    color: 'hover:text-pink-400 hover:border-pink-400/40',
    badgeBg: 'hover:bg-pink-500/10',
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    url: 'https://x.com/rizkiboiz',
    username: '@rizkiboiz',
    color: 'hover:text-amber-300 hover:border-amber-400/40',
    badgeBg: 'hover:bg-amber-500/10',
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.com/users/rizkiboiz',
    username: 'rizkiboiz#0001',
    color: 'hover:text-indigo-400 hover:border-indigo-400/40',
    badgeBg: 'hover:bg-indigo-500/10',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:rizkiboiz02@gmail.com',
    username: 'rizkiboiz02@gmail.com',
    color: 'hover:text-emerald-400 hover:border-emerald-400/40',
    badgeBg: 'hover:bg-emerald-500/10',
  },
];
