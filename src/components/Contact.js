import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { personal } from '../data/resumeData';
import useFadeIn from '../hooks/useFadeIn';

const CONTACT_ITEMS = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: '#6ee7f7',
  },
  {
    icon: <FiGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/vaibhavmore',
    href: personal.github,
    color: '#a78bfa',
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vaibhavmore',
    href: personal.linkedin,
    color: '#34d399',
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Location',
    value: personal.location,
    href: null,
    color: '#fbbf24',
  },
];

export default function Contact() {
  const [ref, visible] = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} style={{ position: 'relative' }}>
      <div className="orb" style={{ width: 400, height: 400, top: '20%', left: '-80px', background: 'var(--accent2)', opacity: 0.06 }} />

      <div className="container">
        <div style={fade(visible, 0)}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-desc">Have a project or opportunity? I'd love to hear from you.</p>
        </div>

        <div style={styles.grid}>
          {/* Left – contact info */}
          <div style={{ ...styles.leftCol, ...fade(visible, 0.1) }}>
            <div style={styles.contactItems}>
              {CONTACT_ITEMS.map(({ icon, label, value, href, color }) => (
                <div key={label} className="glass-card" style={styles.contactItem}>
                  <span style={{ ...styles.ciIcon, background: `${color}18`, color }}>{icon}</span>
                  <div>
                    <p style={styles.ciLabel}>{label}</p>
                    {href
                      ? <a href={href} target="_blank" rel="noreferrer" style={{ ...styles.ciValue, color }}>{value}</a>
                      : <p style={styles.ciValue}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Open to work card */}
            <div className="glass-card" style={styles.openCard}>
              <div style={styles.openDot} />
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Open to Opportunities
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Actively looking for internships and entry-level full-stack roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right – contact form */}
          <div style={{ ...fade(visible, 0.2) }}>
            <div className="glass-card" style={styles.formCard}>
              <p style={styles.formTitle}>Send a Message</p>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.fieldRow}>
                  <div style={styles.field}>
                    <label style={styles.label}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                    />
                  </div>
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Hi Vaibhav, I'd love to discuss..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ ...styles.input, resize: 'vertical', minHeight: '120px' }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {sent ? <><FiCheck size={16} /> Message Sent!</> : <><FiSend size={16} /> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.3fr',
    gap: '40px',
    marginTop: '48px',
    alignItems: 'start',
  },
  leftCol: {},
  contactItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px',
  },
  contactItem: {
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'all 0.2s ease',
  },
  ciIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    flexShrink: 0,
  },
  ciLabel: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    marginBottom: '2px',
  },
  ciValue: {
    fontSize: '0.88rem',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    fontWeight: 500,
    wordBreak: 'break-all',
  },
  openCard: {
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    marginTop: '4px',
  },
  openDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'var(--accent3)',
    boxShadow: '0 0 10px var(--accent3)',
    flexShrink: 0,
    marginTop: '5px',
    animation: 'pulse 2s infinite',
  },
  formCard: { padding: '32px' },
  formTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '24px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  fieldRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: {
    fontFamily: 'var(--font-display)',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--text-muted)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  input: {
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    width: '100%',
  },
};
