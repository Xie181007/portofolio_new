import React, { useState, useEffect } from 'react';
import PillNav from './PillNav';
import logo from '/logo.svg';

export const Navbar: React.FC = () => {
  const [activeHref, setActiveHref] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const mapping = [
        { id: 'contact', href: '/contact' },
        { id: 'services', href: '/services' },
        { id: 'about', href: '/about' },
        { id: 'home', href: '/' },
      ];

      for (const item of mapping) {
        const el = document.getElementById(item.id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveHref(item.href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' }
      ]}
      activeHref={activeHref}
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      theme="light"
      initialLoadAnimation={false}
    />
  );
};

export default Navbar;
