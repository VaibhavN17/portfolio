import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { projects } from '../data/resumeData';
import useFadeIn from '../hooks/useFadeIn';

const PROJECT_COLORS = ['#6ee7f7', '#a78bfa', '#34d399'];

export default function Projects() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="projects" ref={ref} style={{ position: 'relative' }}>
      <div className="orb" style={{ width: 400, height: 400, bottom: 0, right: '-100px', background: 'var(--accent)', opacity: 0.06 }} />
      <div className="container">
        <div style={fade(visible, 0)}>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">A selection of projects I've designed, developed, and deployed.</p>
        </div>

        <div style={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              color={PROJECT_COLORS[i % PROJECT_COLORS.length]}
              style={fade(visible, 0.15 + i * 0.12)}
            />
          ))}
        </div>
      </div>
      <div className="divider" style={{ marginTop: '80px' }} />
    </section>
  );
}

function ProjectCard({ project, color, style }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      style={{
        ...styles.card,
        ...style,
        borderColor: hovered ? `${color}55` : 'var(--border)',
        boxShadow: hovered ? `0 16px 48px ${color}15` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top bar */}
      <div style={styles.cardTop}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ ...styles.colorDot, background: color, boxShadow: `0 0 10px ${color}` }} />
          <span style={{ ...styles.type, color }}>{project.type}</span>
        </div>
        {project.featured && (
          <span style={styles.featuredBadge}>
            <FiStar size={11} style={{ marginRight: '3px' }} /> Featured
          </span>
        )}
      </div>

      {/* Accent line */}
      <div style={{ height: '2px', background: `linear-gradient(90deg, ${color}, transparent)`, marginBottom: '20px', borderRadius: '2px' }} />

      {/* Title */}
      <h3 style={styles.title}>{project.title}</h3>
      <p style={styles.desc}>{project.description}</p>

      {/* Roles */}
      <div style={{ marginBottom: '16px' }}>
        {project.role.map((r) => (
          <span key={r} style={{ ...styles.roleTag, background: `${color}18`, color, borderColor: `${color}44` }}>{r}</span>
        ))}
      </div>

      {/* Tech stack */}
      <div style={styles.techRow}>
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div style={styles.links}>
        <a href={project.github} target="_blank" rel="noreferrer" style={styles.linkBtn}>
          <FiGithub size={15} /> Code
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" style={{ ...styles.linkBtn, color }}>
          <FiExternalLink size={15} /> Live
        </a>
      </div>
    </div>
  );
}

const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(32px)',
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
    marginTop: '48px',
  },
  card: {
    padding: '28px',
    transition: 'all 0.3s ease',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  colorDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  type: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  featuredBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '3px 10px',
    borderRadius: '100px',
    fontSize: '0.68rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    background: 'rgba(251,191,36,0.12)',
    color: '#fbbf24',
    border: '1px solid rgba(251,191,36,0.3)',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '10px',
    lineHeight: 1.3,
  },
  desc: {
    fontSize: '0.88rem',
    lineHeight: 1.7,
    color: 'var(--text-secondary)',
    marginBottom: '16px',
  },
  roleTag: {
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: '100px',
    fontSize: '0.7rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    border: '1px solid',
    marginRight: '6px',
  },
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '20px',
  },
  links: {
    display: 'flex',
    gap: '12px',
    paddingTop: '16px',
    borderTop: '1px solid var(--border)',
  },
  linkBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.82rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease',
  },
};
