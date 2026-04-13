import React from 'react';
import {
  FaCode, FaServer, FaDatabase, FaTerminal, FaTools, FaBrain,
} from 'react-icons/fa';
import { skillCategories } from '../data/resumeData';
import useFadeIn from '../hooks/useFadeIn';

const ICON_MAP = { FaCode, FaServer, FaDatabase, FaTerminal, FaTools, FaBrain };

export default function Skills() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div style={fade(visible, 0)}>
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-desc">A snapshot of the technologies I work with, organized by domain.</p>
        </div>

        <div style={styles.grid}>
          {skillCategories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon];
            return (
              <div
                key={cat.label}
                className="glass-card"
                style={{
                  ...styles.card,
                  ...fade(visible, 0.1 + i * 0.08),
                  '--cat-color': cat.color,
                }}
              >
                {/* Card header */}
                <div style={styles.cardHeader}>
                  <span style={{ ...styles.iconBox, background: `${cat.color}1a`, color: cat.color }}>
                    {Icon && <Icon size={18} />}
                  </span>
                  <span style={{ ...styles.catLabel, color: cat.color }}>{cat.label}</span>
                </div>

                {/* Skills list */}
                <div style={styles.skillsList}>
                  {cat.skills.map((skill) => (
                    <SkillChip key={skill} label={skill} color={cat.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="divider" style={{ marginTop: '80px' }} />
    </section>
  );
}

function SkillChip({ label, color }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '5px 13px',
        borderRadius: '100px',
        fontSize: '0.78rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        background: hovered ? `${color}22` : 'var(--bg-card)',
        color: hovered ? color : 'var(--text-secondary)',
        border: `1px solid ${hovered ? color + '66' : 'var(--border)'}`,
        cursor: 'default',
        transition: 'all 0.2s ease',
        userSelect: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
});

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '48px',
  },
  card: {
    padding: '28px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    flexShrink: 0,
  },
  catLabel: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.95rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
};
