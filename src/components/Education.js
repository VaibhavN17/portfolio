import React from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import { education } from '../data/resumeData';
import useFadeIn from '../hooks/useFadeIn';

export default function Education() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <div style={fade(visible, 0)}>
          <p className="section-label">My Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div style={styles.stack}>
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="glass-card"
              style={{ ...styles.card, ...fade(visible, 0.15 + i * 0.12) }}
            >
              {/* Color accent left border */}
              <div style={{ ...styles.accentBar, background: edu.color }} />

              <div style={styles.inner}>
                <div style={styles.left}>
                  <div style={{ ...styles.iconBox, background: `${edu.color}1a`, color: edu.color }}>
                    <FiAward size={20} />
                  </div>
                  <div>
                    <h3 style={styles.degree}>{edu.degree}</h3>
                    <p style={styles.institution}>{edu.institution}</p>
                    <p style={styles.board}>{edu.board}</p>
                  </div>
                </div>

                <div style={styles.right}>
                  <div style={{ ...styles.scoreBadge, background: `${edu.color}18`, color: edu.color, borderColor: `${edu.color}44` }}>
                    {edu.score}
                  </div>
                  <div style={styles.year}>
                    <FiCalendar size={13} style={{ color: 'var(--text-muted)' }} />
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="divider" style={{ marginTop: '80px' }} />
    </section>
  );
}

const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
  transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
});

const styles = {
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '48px',
    maxWidth: '750px',
  },
  card: {
    padding: '0',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    transition: 'all 0.3s ease',
  },
  accentBar: {
    width: '4px',
    flexShrink: 0,
    borderRadius: '0',
  },
  inner: {
    padding: '24px 28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    flex: 1,
    flexWrap: 'wrap',
  },
  left: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    flexShrink: 0,
  },
  degree: {
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '4px',
    lineHeight: 1.3,
  },
  institution: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '2px',
  },
  board: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-display)',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
  },
  scoreBadge: {
    padding: '6px 16px',
    borderRadius: '100px',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.88rem',
    border: '1px solid',
  },
  year: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
};
