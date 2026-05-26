// ─────────────────────────────────────────────────────────────
// NAV + SIDEBARS
// ─────────────────────────────────────────────────────────────
import React from "react";

const Nav = () => {
  const [active, setActive] = React.useState('hero');
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'skills', 'research', 'awards', 'writing', 'contact'];
      const y = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: id === 'hero' ? 0 : el.offsetTop - 80, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const items = [
    ['01', 'about', 'About'],
    ['02', 'experience', 'Experience'],
    ['03', 'education', 'Education'],
    ['04', 'projects', 'Work'],
    ['05', 'skills', 'Stack'],
    ['06', 'research', 'Research'],
    ['07', 'awards', 'Awards'],
    ['08', 'writing', 'Writing'],
    ['09', 'contact', 'Contact'],
  ];

  return (
    <>
    <nav className="r-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 56px' : '22px 56px',
      background: scrolled ? 'rgba(10, 13, 24, 0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: '"Geist Mono", monospace', fontSize: 11,
      letterSpacing: '0.15em', textTransform: 'uppercase',
    }}>
      <div onClick={() => go('hero')} style={{ color: '#e8e8f4', fontWeight: 600, cursor: 'none' }}>
        Jayan Adhikari<span style={{ color: '#7a8cff' }}>.</span>
      </div>
      <div className="r-nav-menu" style={{ display: 'flex', gap: 22 }}>
        {items.map(([n, id, label]) => (
          <div key={id} onClick={() => go(id)} style={{
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'none',
            color: active === id ? '#e8e8f4' : '#7a7a92',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#7a8cff'}
            onMouseLeave={e => e.currentTarget.style.color = active === id ? '#e8e8f4' : '#7a7a92'}
          >
            <span style={{ color: active === id ? '#7a8cff' : '#5a5a75', fontSize: 10 }}>{n}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="r-nav-menu" style={{ width: 180 }} />

      {/* Mobile hamburger */}
      <button className="r-mobile-toggle" onClick={() => setMenuOpen(true)} style={{
        background: 'transparent', border: 'none', padding: 8, cursor: 'pointer',
        display: 'none', alignItems: 'center', justifyContent: 'center', color: '#e8e8f4',
      }} aria-label="Open menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>
    </nav>

    {/* Mobile menu sheet */}
    <div className={'r-mobile-sheet' + (menuOpen ? ' open' : '')}>
      <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{
        position: 'absolute', top: 22, right: 20,
        background: 'transparent', border: 'none', padding: 8, color: '#e8e8f4',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(([n, id, label]) => (
          <div key={id} onClick={() => go(id)} style={{
            display: 'flex', alignItems: 'baseline', gap: 14, padding: '14px 4px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            color: active === id ? '#e8e8f4' : '#c8c8d8',
            cursor: 'pointer',
          }}>
            <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
              letterSpacing: '0.15em', color: active === id ? '#7a8cff' : '#5a5a75' }}>{n}</span>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 28,
              letterSpacing: '-0.015em', lineHeight: 1.1,
              fontStyle: active === id ? 'italic' : 'normal' }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14,
        paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <a href="mailto:jayanadkh@gmail.com" style={{
          fontFamily: '"Geist Mono", monospace', fontSize: 12,
          color: '#7a8cff', textDecoration: 'none', letterSpacing: '0.1em',
        }}>jayanadkh@gmail.com</a>
        <div style={{ display: 'flex', gap: 16,
          fontFamily: '"Geist Mono", monospace', fontSize: 11,
          letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7a92' }}>
          <a href="https://github.com/jayanad" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/jayanad" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn ↗</a>
        </div>
      </div>
    </div>
    </>
  );
};

const SocialSidebar = () => {
  const socials = [
    { href: 'https://github.com/jayanad', label: 'GitHub',
      svg: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /> },
    { href: 'https://www.linkedin.com/in/jayanad', label: 'LinkedIn',
      svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
  ];
  return (
    <div className="r-sidebar" style={{ position: 'fixed', left: 28, bottom: 0, zIndex: 40,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      {socials.map(s => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} style={{
          width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#7a7a92', textDecoration: 'none', transition: 'all 0.2s', cursor: 'none',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#7a8cff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#7a7a92'; e.currentTarget.style.transform = ''; }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">{s.svg}</svg>
        </a>
      ))}
      <div style={{ width: 1, height: 110, background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)' }} />
    </div>
  );
};

const EmailSidebar = () => (
  <div className="r-sidebar" style={{ position: 'fixed', right: 28, bottom: 0, zIndex: 40,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
    <a href="mailto:jayanadkh@gmail.com" style={{
      fontFamily: '"Geist Mono", monospace', fontSize: 12,
      color: '#7a7a92', textDecoration: 'none', letterSpacing: '0.18em',
      writingMode: 'vertical-rl', transition: 'all 0.2s', cursor: 'none',
    }}
      onMouseEnter={e => { e.currentTarget.style.color = '#7a8cff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#7a7a92'; e.currentTarget.style.transform = ''; }}
    >jayanadkh@gmail.com</a>
    <div style={{ width: 1, height: 110, background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)' }} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// SECTION HEADER — used across sections
// ─────────────────────────────────────────────────────────────
const SectionHeader = ({ num, title, subtitle }) => (
  <div className="r-section-header" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40,
    marginBottom: 64, alignItems: 'baseline' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
        letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7a8cff' }}>
        ↳ §{num}
      </div>
      <div style={{ width: 36, height: 1, background: 'rgba(122, 140, 255, 0.3)' }} />
    </div>
    <div>
      <h2 style={{
        fontFamily: '"Instrument Serif", serif', fontWeight: 400,
        fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.98,
        letterSpacing: '-0.02em', color: '#f4f1ea',
        margin: 0, marginBottom: subtitle ? 16 : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 17,
          color: '#9090a5', maxWidth: 620, lineHeight: 1.6, fontWeight: 300 }}>
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

// Object.assign(window, { Nav, SocialSidebar, EmailSidebar, SectionHeader });
export default Nav;
export { SocialSidebar, EmailSidebar, SectionHeader };
