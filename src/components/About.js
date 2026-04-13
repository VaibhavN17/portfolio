import React from 'react';
import {
  FiMapPin, FiCalendar, FiMail, FiGithub, FiLinkedin,
} from 'react-icons/fi';
import { personal, about, certifications } from '../data/resumeData';
import useFadeIn from '../hooks/useFadeIn';

const QUICK_INFO = [
  { icon: <FiMapPin size={15} />, label: 'Location', value: 'Vaijapur, Maharashtra' },
  { icon: <FiCalendar size={15} />, label: 'DOB', value: personal.dob },
  { icon: <FiMail size={15} />, label: 'Email', value: personal.email },
];

const STATS = [
  { value: '3+', label: 'Projects Built' },
  { value: '81%', label: 'Diploma Score' },
  { value: '92%', label: 'SSC Score' },
  { value: '1', label: 'Internship' },
];

export default function About() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="about" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, top: '10%', left: '-100px', background: 'var(--accent2)', opacity: 0.06 }} />

      <div className="container">
        {/* Heading */}
        <div style={fade(visible, 0)}>
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div style={{ ...styles.grid, ...fade(visible, 0.1) }}>
          {/* Left — text */}
          <div style={styles.left}>
            <p style={styles.aboutText}>{about}</p>

            {/* Quick info */}
            <div style={styles.infoList}>
              {QUICK_INFO.map(({ icon, label, value }) => (
                <div key={label} style={styles.infoRow}>
                  <span style={styles.infoIcon}>{icon}</span>
                  <span style={styles.infoLabel}>{label}</span>
                  <span style={styles.infoValue}>{value}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div style={styles.socialRow}>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.82rem' }}>
                <FiGithub size={15} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.82rem' }}>
                <FiLinkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right — stats + certs */}
          <div style={styles.right}>
            {/* Stats */}
            <div style={styles.statsGrid}>
              {STATS.map(({ value, label }) => (
                <div key={label} className="glass-card" style={styles.statCard}>
                  <span style={styles.statValue}>{value}</span>
                  <span style={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass-card" style={styles.certCard}>
              <p style={styles.certTitle}>🏆 Certifications</p>
              {certifications.map((c) => (
                <div key={c.title} style={styles.certItem}>
                  <span style={styles.certName}>{c.title}</span>
                  <span style={styles.certDesc}>{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider" style={{ marginTop: '80px' }} />
    </section>
  );
}

// Helper fade style
const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(30px)',
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    marginTop: '48px',
    alignItems: 'start',
    '@media(maxWidth:768px)': { gridTemplateColumns: '1fr' },
  },
  left: {},
  aboutText: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'var(--text-secondary)',
    marginBottom: '32px',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '28px',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '0.9rem',
  },
  infoIcon: { color: 'var(--accent)', flexShrink: 0 },
  infoLabel: {
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.78rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    minWidth: '70px',
  },
  infoValue: { color: 'var(--text-primary)', fontSize: '0.9rem' },
  socialRow: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  right: { display: 'flex', flexDirection: 'column', gap: '20px' },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  statCard: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    textAlign: 'center',
  },
  statValue: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.8rem',
    fontWeight: 800,
    background: 'var(--gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  certCard: { padding: '24px' },
  certTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.85rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '16px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  certItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    marginBottom: '14px',
    paddingBottom: '14px',
    borderBottom: '1px solid var(--border)',
  },
  certName: {
    fontSize: '0.88rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-display)',
  },
  certDesc: { fontSize: '0.78rem', color: 'var(--text-muted)' },
};
