import React from 'react';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheck } from 'react-icons/fi';
import { experience, workshops } from '../data/resumeData';
import useFadeIn from '../hooks/useFadeIn';

export default function Experience() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div style={fade(visible, 0)}>
          <p className="section-label">Where I've Worked</p>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Timeline */}
        <div style={styles.timeline}>
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              style={{ ...styles.timelineItem, ...fade(visible, 0.15 + i * 0.1) }}
            >
              {/* Left – timeline dot + line */}
              <div style={styles.timelineMeta}>
                <div style={{ ...styles.dot, borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}` }}>
                  <FiBriefcase size={14} color={exp.color} />
                </div>
                <div style={styles.line} />
              </div>

              {/* Right – content */}
              <div className="glass-card" style={styles.card}>
                {/* Header */}
                <div style={styles.cardHeader}>
                  <div>
                    <h3 style={styles.role}>{exp.role}</h3>
                    <div style={styles.company}>
                      <span style={{ color: exp.color, fontWeight: 600 }}>{exp.company}</span>
                      <span style={styles.divDot}>·</span>
                      <span style={{ ...styles.badge, background: `${exp.color}18`, color: exp.color, borderColor: `${exp.color}44` }}>{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div style={styles.metaRow}>
                  <span style={styles.metaItem}><FiMapPin size={13} /> {exp.location}</span>
                  <span style={styles.metaItem}><FiCalendar size={13} /> {exp.duration}</span>
                </div>

                {/* Bullets */}
                <ul style={styles.bullets}>
                  {exp.bullets.map((b) => (
                    <li key={b} style={styles.bullet}>
                      <FiCheck size={13} color={exp.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Workshops subsection */}
        <div style={{ ...styles.workshopsWrap, ...fade(visible, 0.4) }}>
          <p style={styles.workshopLabel}>Workshops & Seminars</p>
          <div style={styles.workshopGrid}>
            {workshops.map((w) => (
              <div key={w.title} className="glass-card" style={styles.workshopCard}>
                <span style={styles.workshopTitle}>{w.title}</span>
                <span style={styles.workshopDesc}>{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" style={{ marginTop: '80px' }} />
    </section>
  );
}

const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const styles = {
  timeline: {
    marginTop: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  timelineItem: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
    gap: '20px',
  },
  timelineMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '8px',
  },
  dot: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    border: '2px solid',
    background: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  line: {
    flex: 1,
    width: '2px',
    background: 'var(--border)',
    marginTop: '8px',
    minHeight: '20px',
  },
  card: { padding: '28px', marginBottom: '24px' },
  cardHeader: { marginBottom: '12px' },
  role: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '6px',
  },
  company: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.88rem',
  },
  divDot: { color: 'var(--text-muted)' },
  badge: {
    padding: '2px 10px',
    borderRadius: '100px',
    fontSize: '0.7rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    border: '1px solid',
  },
  metaRow: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-display)',
  },
  bullets: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  bullet: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  workshopsWrap: { marginTop: '48px' },
  workshopLabel: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '16px',
  },
  workshopGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '14px',
  },
  workshopCard: {
    padding: '18px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  workshopTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.88rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  workshopDesc: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    lineHeight: 1.5,
  },
};
