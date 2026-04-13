import React, { useEffect, useState } from 'react';
import {
  FiDownload, FiMail, FiArrowDown,
  FiGithub, FiLinkedin,
} from 'react-icons/fi';
import { personal } from '../data/resumeData';

/* Animated typing text */
const ROLES = ['Full Stack Developer', 'Java & Spring Boot', 'React & Angular', 'Problem Solver'];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span style={styles.typingText}>
      {displayed}
      <span style={styles.cursor}>|</span>
    </span>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="hero" style={styles.section}>
      {/* Background orbs */}
      <div className="orb" style={styles.orb1} />
      <div className="orb" style={styles.orb2} />

      {/* Grid lines */}
      <div style={styles.grid} />

      <div className="container" style={styles.container}>
        {/* Availability badge */}
        <div style={{ ...styles.badge, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
          <span style={styles.dot} />
          Available for Opportunities
        </div>

        {/* Main heading */}
        <h1 style={{ ...styles.heading, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.25s' }}>
          Hi, I'm{' '}
          <span style={styles.nameGradient}>{personal.name}</span>
        </h1>

        {/* Typing subtitle */}
        <div style={{ ...styles.subtitle, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.4s' }}>
          <TypingText />
        </div>

        {/* Tagline */}
        <p style={{ ...styles.tagline, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.55s' }}>
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div style={{ ...styles.ctaRow, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.7s' }}>
          <a href="#contact" className="btn btn-primary">
            <FiMail size={16} />
            Hire Me
          </a>
          <a href={personal.resumeUrl} download className="btn btn-outline">
            <FiDownload size={16} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div style={{ ...styles.socials, opacity: loaded ? 1 : 0, transition: 'all 0.7s ease 0.85s' }}>
          <a href={personal.github} target="_blank" rel="noreferrer" style={styles.socialLink} title="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" style={styles.socialLink} title="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personal.email}`} style={styles.socialLink} title="Email">
            <FiMail size={20} />
          </a>
        </div>

        {/* Scroll cue */}
        <div style={{ ...styles.scrollCue, opacity: loaded ? 1 : 0, transition: 'all 0.7s ease 1s' }}>
          <a href="#about" style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
            <FiArrowDown size={16} style={{ animation: 'bounce 1.8s infinite' }} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          #hero h1 { font-size: clamp(2.2rem, 9vw, 3rem) !important; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '90px',
  },
  orb1: {
    width: '600px',
    height: '600px',
    top: '-200px',
    right: '-150px',
    background: 'var(--accent)',
    opacity: 0.08,
  },
  orb2: {
    width: '500px',
    height: '500px',
    bottom: '-150px',
    left: '-100px',
    background: 'var(--accent2)',
    opacity: 0.08,
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
    opacity: 0.4,
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0',
    paddingTop: '20px',
    paddingBottom: '80px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '100px',
    background: 'var(--accent-glow)',
    border: '1px solid var(--border-hover)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.78rem',
    color: 'var(--accent)',
    letterSpacing: '0.06em',
    marginBottom: '28px',
  },
  dot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: 'var(--accent3)',
    boxShadow: '0 0 8px var(--accent3)',
    animation: 'pulse 2s infinite',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
    fontWeight: 800,
    lineHeight: 1.05,
    color: 'var(--text-primary)',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  nameGradient: {
    background: 'var(--gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline',
  },
  subtitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    minHeight: '2em',
  },
  typingText: {
    color: 'var(--accent2)',
  },
  cursor: {
    color: 'var(--accent)',
    animation: 'cursorBlink 1s infinite',
    marginLeft: '2px',
  },
  tagline: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    maxWidth: '500px',
    lineHeight: 1.7,
    marginBottom: '36px',
  },
  ctaRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '36px',
  },
  socials: {
    display: 'flex',
    gap: '12px',
    marginBottom: '60px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  scrollCue: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};
