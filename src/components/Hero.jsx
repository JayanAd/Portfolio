// ─────────────────────────────────────────────────────────────
// HERO — Phosphor Lab (refined)
// Editorial Instrument Serif name · streaming LLM thought · visible NN
// ─────────────────────────────────────────────────────────────
import React from "react";
import NeuralNet from "./NeuralNet";

const Hero = () => {
  const [streamed, setStreamed] = React.useState('');
  const fullStream = `<system> Hello.\n<thought> Data scientist by day. Learning reinforcement learning and researching AI for healthcare on the side. Quietly building, slowly publishing.\n<status> open_to_collaborate = true`;

  React.useEffect(() => {
    let i = 0,raf;
    const tick = () => {
      if (i <= fullStream.length) {
        setStreamed(fullStream.slice(0, i));
        i += Math.random() > 0.7 ? 2 : 1;
        raf = setTimeout(tick, 26 + Math.random() * 50);
      } else {
        raf = setTimeout(() => {i = 0;setStreamed('');tick();}, 7000);
      }
    };
    tick();
    return () => clearTimeout(raf);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const renderStream = () => {
    const lines = streamed.split('\n');
    return lines.map((line, i) => {
      const tagMatch = line.match(/^<(\w+)>\s*(.*)/);
      if (tagMatch) {
        return (
          <div key={i} style={{ marginBottom: 6 }}>
            <span style={{ color: '#7a8cff' }}>&lt;{tagMatch[1]}&gt;</span>{' '}
            <span style={{ color: '#d8d8e8' }}>{tagMatch[2]}</span>
          </div>);

      }
      return <div key={i} style={{ color: '#d8d8e8', marginBottom: 6 }}>{line}</div>;
    });
  };

  return (
    <section id="hero" className="r-hero" style={{
      position: 'relative', width: '100%', minHeight: '100vh',
      background: '#0a0d18', color: '#e8e8f4', overflow: 'hidden',
      display: 'flex', alignItems: 'center'
    }}>
      <NeuralNet />

      {/* Soft center vignette — keep nodes visible at edges */}
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at center, rgba(10,13,24,0.72) 0%, rgba(10,13,24,0.35) 55%, transparent 85%)',
        pointerEvents: 'none' }} />

      {/* Faint grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(122,140,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(122,140,255,0.025) 1px,transparent 1px)`,
        backgroundSize: '88px 88px' }} />

      {/* Main */}
      <div className="r-hero-grid" style={{ position: 'relative', zIndex: 5, maxWidth: 1320, margin: '0 auto',
        padding: '140px 80px 100px', width: '100%',
        display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Left — name + lede */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 36,
            fontFamily: '"Geist Mono", monospace', fontSize: 11, letterSpacing: '0.24em',
            textTransform: 'uppercase', color: '#9090a5',
            animation: 'fadeUp 0.7s ease 0.05s both' }}>
            <span style={{ width: 36, height: 1, background: 'linear-gradient(to right, transparent, rgba(232, 234, 240, 0.5))' }} />
            <span>Data Scientist <span style={{ color: '#6a6a85' }}>·</span> AI Researcher <span style={{ color: '#6a6a85' }}></span> </span>
          </div>

          <h1 style={{
            fontFamily: '"Instrument Serif", serif', fontWeight: 400,
            fontSize: 'clamp(72px, 9.5vw, 138px)', lineHeight: 0.9, letterSpacing: '-0.022em',
            color: '#f4f1ea', margin: '0 0 36px',
            animation: 'fadeUp 0.8s ease 0.15s both'
          }}>
            Jayan<br />
            <span style={{ fontStyle: 'italic', color: '#7a8cff' }}>Adhikari.</span>
          </h1>

          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(16px, 1.35vw, 19px)',
            lineHeight: 1.6, color: '#9595aa', maxWidth: 480, fontWeight: 300, marginBottom: 42,
            animation: 'fadeUp 0.8s ease 0.25s both' }}>
            I build deep learning systems that surface their own reasoning.
            Currently researching explainable AI, reinforcement learning,
            and AI for healthcare.
          </p>

          <div style={{ display: 'flex', gap: 14, animation: 'fadeUp 0.8s ease 0.35s both' }}>
            <button onClick={() => scrollTo('projects')} className="btn-magnet" style={{
              fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 500,
              padding: '14px 26px', borderRadius: 999, border: 'none',
              background: '#7a8cff', color: '#0a0d18',
              cursor: 'none', letterSpacing: '0.01em',
              transition: 'transform 0.25s, box-shadow 0.25s'
            }}>See selected work →</button>
            <button onClick={() => scrollTo('contact')} className="btn-magnet" style={{
              fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 500,
              padding: '14px 26px', borderRadius: 999,
              background: 'transparent', color: '#e8e8f4',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'none', letterSpacing: '0.01em',
              transition: 'all 0.25s'
            }}>Get in touch</button>
          </div>
        </div>

        {/* Right — streaming console */}
        <div style={{ animation: 'fadeUp 0.8s ease 0.5s both' }}>
          <div style={{
            background: 'rgba(10, 12, 14, 0.65)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(122, 140, 255, 0.18)',
            borderRadius: 14, overflow: 'hidden',
            fontFamily: '"JetBrains Mono", "Geist Mono", monospace',
            fontSize: 13,
            minHeight: 360,
            boxShadow: '0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(122,140,255,0.04)'
          }} className="r-hero-stream">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)',
              fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a7a92' }}>
              <span>↳ JYNAD.V3 · STREAM</span>
              <span style={{ color: '#7a8cff' }}>● 312 tok/s</span>
            </div>
            <div className="r-hero-stream-body" style={{ padding: '22px 22px 28px', lineHeight: 1.75, minHeight: 280, whiteSpace: 'pre-wrap' }}>
              {renderStream()}
              <span style={{ display: 'inline-block', width: 8, height: '1.1em', verticalAlign: '-0.2em',
                background: '#7a8cff', animation: 'blink 1s steps(1) infinite' }} />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        fontFamily: '"Geist Mono", monospace', color: '#6a6a85', fontSize: 10,
        letterSpacing: '0.28em', textTransform: 'uppercase',
        animation: 'fadeUp 1s ease 1.1s both', zIndex: 5
      }}>
        <span>Hey, down here. </span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #7a8cff, transparent)',
          animation: 'scrollPulse 2s ease infinite' }} />
      </div>
    </section>);

};

// Object.assign(window, { Hero });
export default Hero;