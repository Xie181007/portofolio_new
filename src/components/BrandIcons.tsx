import React from 'react';

// Official Google Cloud Logo
export const GoogleCloudIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      fill="#4285F4"
    />
    <path
      d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"
      fill="#FFFFFF"
      fillOpacity="0.2"
    />
  </svg>
);

// Official Microsoft 4-Color Logo
export const MicrosoftIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="10" height="10" fill="#F25022" />
    <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
    <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
    <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
  </svg>
);

// Official React Logo
export const ReactIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>React</title>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// Official Next.js Logo (Vercel)
export const NextJsIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" r="90" fill="#000000" stroke="#ffffff" strokeWidth="6" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#next-grad)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#next-grad2)" />
    </g>
    <defs>
      <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next-grad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Official TypeScript Logo
export const TypeScriptIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="16" fill="#3178C6" />
    <path
      d="M71.49 84.86c3.78 6.45 9.77 10.13 18.06 10.13 7.82 0 12.89-3.91 12.89-9.89 0-6.21-4.83-8.51-13.34-12.2l-4.6-2c-13.34-5.75-19.55-12.89-19.55-24.16 0-14.26 11.27-24.84 28.52-24.84 12.42 0 21.16 4.6 27.14 14.49l-10.81 6.9c-3.68-5.75-8.28-8.28-15.87-8.28-6.67 0-11.27 3.68-11.27 8.74 0 5.29 3.68 7.59 12.19 11.27l4.6 2.07c15.18 6.44 21.16 13.8 21.16 25.07 0 16.56-12.88 26.22-30.82 26.22-15.64 0-26.45-6.67-31.51-17.71l13.22-7.8zm-51.52-50.6h51.06v12.42H51.06v57.96H35.42V46.68H19.97V34.26z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official Node.js Logo
export const NodeJsIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M128 0L9.4 68.4v152.2L128 289l118.6-68.4V68.4L128 0z"
      fill="#5FA04E"
    />
    <path
      d="M128 17.5L24.5 77.2v134.6L128 271.5l103.5-59.7V77.2L128 17.5z"
      fill="#333333"
    />
    <path
      d="M128.1 63.8c-2.4 0-4.6.6-6.4 1.7L67.4 97c-3.6 2.1-4.8 6.3-4.8 9.9v69.6c0 3.7 1.2 7.8 4.8 9.9l54.2 31.4c1.8 1.1 4.1 1.7 6.4 1.7 2.4 0 4.6-.6 6.4-1.7l54.2-31.4c3.6-2.1 4.8-6.3 4.8-9.9v-69.6c0-3.7-1.2-7.8-4.8-9.9l-54.2-31.4c-1.8-1.2-4-1.8-6.3-1.8z"
      fill="#5FA04E"
    />
  </svg>
);

// Official Tailwind CSS Logo
export const TailwindIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 9.6c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 4.2-3.3 7.2-2.7 1.714.343 2.94 1.589 4.296 2.97C28.706 19.262 31.436 22 37.2 22c4.8 0 7.8-2.4 9-7.2-1.8 2.4-4.2 3.3-7.2 2.7-1.714-.343-2.94-1.589-4.296-2.97C32.494 12.338 29.764 9.6 24 9.6zM12 22c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 4.2-3.3 7.2-2.7 1.714.343 2.94 1.589 4.296 2.97C16.706 31.662 19.436 34.4 25.2 34.4c4.8 0 7.8-2.4 9-7.2-1.8 2.4-4.2 3.3-7.2 2.7-1.714-.343-2.94-1.589-4.296-2.97C20.494 24.738 17.764 22 12 22z"
      fill="#38BDF8"
    />
  </svg>
);

// Official Python Logo
export const PythonIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M54.24 5.04c-24.87 0-23.33 10.78-23.33 10.78l.03 11.16h23.75v3.37H20.73S6 28.52 6 53.44c0 24.91 13.62 24.06 13.62 24.06h8.14V66.07s-.44-13.62 13.37-13.62h23.01v-3.44H39.29s-13.2.66-13.2-12.76c0-13.42 11.73-12.98 11.73-12.98h33.91s12.04.52 12.04 17.08v.86H62.62v3.74h28.18c14.22 0 14.22 12.31 14.22 12.31v19.69c0 8.98-7.71 12.29-13.68 12.29H77.16v-11.43s.59-13.63-13.38-13.63H40.77v3.45h24.85s13.21-.66 13.21 12.76c0 13.41-11.74 12.98-11.74 12.98H34.93s-12.04-.52-12.04-17.08v-.86h21.15v-3.74H15.86s-14.22 0-14.22-12.31V37.77c0-8.98 7.71-12.29 13.68-12.29h14.18v11.43s-.59 13.63 13.38 13.63h23.01v-3.45H35.04s-13.2.66-13.2-12.76c0-13.42 11.73-12.98 11.73-12.98h33.91s12.04.52 12.04 17.08v.86z"
      fill="url(#py-grad-blue)"
    />
    <path
      d="M55.76 104.96c24.87 0 23.33-10.78 23.33-10.78l-.03-11.16H55.31v-3.37h33.96s14.73 1.83 14.73-23.09c0-24.91-13.62-24.06-13.62-24.06h-8.14v11.43s.44 13.62-13.37 13.62H45.86v3.44h24.85s13.2-.66 13.2 12.76c0 13.42-11.73 12.98-11.73 12.98H38.27s-12.04-.52-12.04-17.08v-.86h21.15v-3.74H19.2c-14.22 0-14.22-12.31-14.22-12.31V37.77c0-8.98 7.71-12.29 13.68-12.29h14.18v11.43s-.59 13.63 13.38 13.63h23.01v-3.45H44.38s-13.2.66-13.2-12.76c0-13.42 11.73-12.98 11.73-12.98h33.91s12.04.52 12.04 17.08v.86z"
      fill="url(#py-grad-yellow)"
    />
    <circle cx="39.8" cy="20.7" r="3.8" fill="#FFFFFF" />
    <circle cx="70.2" cy="89.3" r="3.8" fill="#FFFFFF" />
    <defs>
      <linearGradient id="py-grad-blue" x1="16.5" y1="13.5" x2="72" y2="69" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="py-grad-yellow" x1="93.5" y1="96.5" x2="38" y2="41" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
  </svg>
);

// Official PostgreSQL Logo (Slonik Elephant)
export const PostgresIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M64 4C30.86 4 4 30.86 4 64s26.86 60 60 60 60-26.86 60-60S97.14 4 64 4z"
      fill="#336791"
    />
    <path
      d="M87.6 42.4c-2.8-5.3-7.5-9.6-13.4-12.1-7.8-3.4-16.7-3.3-24.6.3-8 3.7-14.2 10.5-17.2 18.9-3 8.4-2.4 17.7 1.8 25.6 3.2 6.1 8.5 10.7 15 13.1v15.2c0 2.2 1.8 4 4 4h7.5c2.2 0 4-1.8 4-4V88.2c6.4-1.9 12-5.7 16-10.9 4.3-5.6 6.5-12.5 6.2-19.6-.3-5.3-2.1-10.4-5.3-14.7z"
      fill="#FFFFFF"
    />
    <path
      d="M62.5 69.3c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm14.7-6.2c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3z"
      fill="#336791"
    />
  </svg>
);

// Official Docker Logo (Whale)
export const DockerIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.79 11.23c-.4-.44-1.22-.64-2.19-.51-.18-.84-.71-1.57-1.52-1.97l-.6-.28-.39.54c-.58.82-.7 1.87-.31 2.82-.36.21-.78.37-1.24.47l-.54.12v.55c0 2.2-1.2 4.1-3.13 4.95-1.29.57-2.73.74-4.14.49-1.92-.34-3.66-1.57-4.75-3.37l-.37-.62-.67.24c-1.34.48-2.61.34-3.52-.39-.19-.15-.36-.33-.51-.54-.15.34-.23.72-.23 1.13 0 1.25.54 2.45 1.51 3.32C6.18 20.45 9.04 21 12 21c4.97 0 9.29-2.8 11.08-7.16.51-1.24.8-2.02.71-2.61z" />
  </svg>
);

// Official GraphQL Logo
export const GraphQlIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 8.5L85.9 29.2v41.6L50 91.5 14.1 70.8V29.2L50 8.5zm0 9.4L19.4 34.6v30.8L50 82.1l30.6-16.7V34.6L50 17.9z"
      fill="#E10098"
    />
    <circle cx="50" cy="8.5" r="8" fill="#E10098" />
    <circle cx="85.9" cy="29.2" r="8" fill="#E10098" />
    <circle cx="85.9" cy="70.8" r="8" fill="#E10098" />
    <circle cx="50" cy="91.5" r="8" fill="#E10098" />
    <circle cx="14.1" cy="70.8" r="8" fill="#E10098" />
    <circle cx="14.1" cy="29.2" r="8" fill="#E10098" />
    <path d="M50 8.5v83M14.1 29.2l71.8 41.6M14.1 70.8L85.9 29.2" stroke="#E10098" strokeWidth="5" />
  </svg>
);

// Official Redis Logo
export const RedisIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#DC382D" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.93 11.23L12.5.34a1 1 0 00-1 0L2.07 11.23a1 1 0 000 1.54l9.43 10.89a1 1 0 001 0l9.43-10.89a1 1 0 000-1.54zM12 2.76l7.7 8.9L12 14.4l-7.7-2.74zm0 18.48l-7.3-8.43 7.3 2.6 7.3-2.6z" />
  </svg>
);

// Official AWS Logo
export const AwsIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 14.8c-2.3 1.7-5.5 2.6-8.8 2.6-4.6 0-8.8-1.7-12-4.6-.3-.2-.3-.6 0-.8.3-.3.8-.3 1 0 3 2.6 6.9 4.2 11 4.2 3 0 6-1 8.2-2.5.4-.3.9-.1 1 .3.2.4 0 .9-.4 1.1l-.8-.3zM19.9 14c-.3-.4-1.9-.2-2.8-.1-.3 0-.4-.2-.2-.5 1.1-1.8 3.5-1.4 3.7-1.1.2.2.3 2.7-.9 4.3-.2.3-.4.2-.3-.1.4-.9.5-2.2.5-2.5z" />
  </svg>
);

// Official GitHub Logo
export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Official LinkedIn Logo
export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Official Instagram Logo
export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Official Twitter / X Logo
export const TwitterXIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Official Discord Logo
export const DiscordIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

