import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { personal } from '../data/resumeData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Highlight active link
      NAV_LINKS.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(href);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActive(href);
  };

  return (
    <header style={styles.header(scrolled)}>
      <div className="container" style={styles.inner}>
        {/* Logo */}
        <a href="#hero" style={styles.logo} onClick={() => setMenuOpen(false)}>
          <span style={styles.logoAccent}>V</span>M
        </a>

        {/* Desktop Links */}
        <nav style={styles.nav}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={styles.link(active === href)}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div style={styles.controls}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={styles.iconBtn}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Download Resume */}
          <a
            href={personal.resumeUrl}
            download
            className="btn btn-primary"
            style={{ padding: '9px 20px', fontSize: '0.82rem' }}
          >
            Resume
          </a>

          {/* Hamburger (mobile) */}
          <button
            style={{ ...styles.iconBtn, display: 'none' }}
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={styles.mobileLink(active === href)}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .hamburger { display: flex !important; }
          a[download] { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: (scrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0',
    background: scrolled
      ? 'var(--bg-secondary)'
      : 'transparent',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    transition: 'all 0.4s ease',
  }),
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '68px',
    gap: '24px',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.35rem',
    color: 'var(--text-primary)',
    letterSpacing: '0.02em',
    textDecoration: 'none',
  },
  logoAccent: {
    background: 'var(--gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  nav: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  link: (isActive) => ({
    fontFamily: 'var(--font-display)',
    fontSize: '0.875rem',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
    padding: '6px 14px',
    borderRadius: '100px',
    background: isActive ? 'var(--accent-glow)' : 'transparent',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  }),
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    flexShrink: 0,
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 24px 20px',
    borderTop: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
    gap: '4px',
  },
  mobileLink: (isActive) => ({
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
    padding: '12px 16px',
    borderRadius: '10px',
    background: isActive ? 'var(--accent-glow)' : 'transparent',
    textDecoration: 'none',
  }),
};
