import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personal } from '../data/resumeData';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="divider" />
      <div className="container" style={styles.inner}>
        {/* Logo + nav */}
        <div style={styles.top}>
          <a href="#hero" style={styles.logo}>
            <span style={styles.logoAccent}>V</span>M
          </a>

          <nav style={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={styles.navLink}>
                {link}
              </a>
            ))}
          </nav>

          <div style={styles.socials}>
            <a href={personal.github} target="_blank" rel="noreferrer" style={styles.socialIcon} title="GitHub">
              <FiGithub size={17} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" style={styles.socialIcon} title="LinkedIn">
              <FiLinkedin size={17} />
            </a>
            <a href={`mailto:${personal.email}`} style={styles.socialIcon} title="Email">
              <FiMail size={17} />
            </a>
          </div>
        </div>

        <div className="divider" style={{ opacity: 0.5 }} />

        {/* Bottom */}
        <div style={styles.bottom}>
          <p style={styles.copy}>
            © {year} Vaibhav More · All rights reserved
          </p>
          <p style={styles.made}>
            Built with <FiHeart size={12} style={{ color: '#f87171', margin: '0 4px', verticalAlign: 'middle' }} /> using React & Custom CSS
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .footer-top { flex-direction: column !important; gap: 20px !important; align-items: flex-start !important; }
          footer nav { display: none !important; }
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'var(--bg-secondary)',
    position: 'relative',
    zIndex: 1,
  },
  inner: {
    paddingTop: '40px',
    paddingBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.3rem',
    color: 'var(--text-primary)',
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
    flexWrap: 'wrap',
  },
  navLink: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    padding: '5px 12px',
    borderRadius: '8px',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
  },
  socials: {
    display: 'flex',
    gap: '8px',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '9px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-muted)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  copy: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-display)',
  },
  made: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
  },
};
