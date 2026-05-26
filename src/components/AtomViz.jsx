// ─────────────────────────────────────────────────────────────
// ATOM VIZ — research interests as electrons orbiting a nucleus
// 3 elliptical orbits, 3 electrons, label callouts around it
// ─────────────────────────────────────────────────────────────
import React from "react";

const AtomViz = () => {
  const e0 = React.useRef(null);
  const e1 = React.useRef(null);
  const e2 = React.useRef(null);
  const t0 = React.useRef(null);
  const t1 = React.useRef(null);
  const t2 = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;
    const orbits = [
      { rx: 158, ry: 54, tilt:   0, speed: 0.32, phase: 0.0, eRef: e0, tRef: t0 },
      { rx: 154, ry: 50, tilt:  62, speed: 0.44, phase: 1.4, eRef: e1, tRef: t1 },
      { rx: 156, ry: 48, tilt: -58, speed: 0.26, phase: 2.6, eRef: e2, tRef: t2 },
    ];

    let t = 0;
    const tick = () => {
      if (cancelled) return;
      t += 0.012;
      for (const o of orbits) {
        const el = o.eRef.current;
        const tr = o.tRef.current;
        if (!el) continue;
        const a = t * o.speed + o.phase;
        const x = Math.cos(a) * o.rx;
        const y = Math.sin(a) * o.ry;
        const rad = o.tilt * Math.PI / 180;
        const tx = x * Math.cos(rad) - y * Math.sin(rad);
        const ty = x * Math.sin(rad) + y * Math.cos(rad);
        el.setAttribute('cx', String(tx));
        el.setAttribute('cy', String(ty));
        if (tr) {
          tr.setAttribute('cx', String(tx));
          tr.setAttribute('cy', String(ty));
        }
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => { cancelled = true; };
  }, []);

  // labels around the atom — positions pulled in to avoid edge clipping
  const labels = [
    { text: 'Explainable AI',     sub: '(XAI)',              x: '50%', y: '6%',   align: 'center' },
    { text: 'RL for Healthcare',  sub: 'offline · clinical', x: '6%',  y: '84%',  align: 'left' },
    { text: 'AI for Healthcare',  sub: 'medical imaging',    x: '94%', y: '84%',  align: 'right' },
  ];

  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: 400,
      aspectRatio: '1', margin: '0 auto',
    }}>
      <svg viewBox="-200 -200 400 400" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
          <radialGradient id="atom-nucleus-grad" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#e8eaff" />
            <stop offset="40%" stopColor="#a8b3ff" />
            <stop offset="100%" stopColor="#5a6dff" />
          </radialGradient>
          <radialGradient id="atom-halo-grad">
            <stop offset="0%" stopColor="rgba(122, 140, 255, 0.22)" />
            <stop offset="100%" stopColor="rgba(122, 140, 255, 0)" />
          </radialGradient>
          <filter id="atom-soft-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="3.6" />
          </filter>
          <filter id="atom-electron-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Atom-wide halo */}
        <circle cx="0" cy="0" r="200" fill="url(#atom-halo-grad)" opacity="0.65" />

        {/* Orbits */}
        <ellipse rx="158" ry="54" transform="rotate(0)"   fill="none" stroke="rgba(122, 140, 255, 0.22)" strokeWidth="0.7" />
        <ellipse rx="154" ry="50" transform="rotate(62)"  fill="none" stroke="rgba(122, 140, 255, 0.22)" strokeWidth="0.7" />
        <ellipse rx="156" ry="48" transform="rotate(-58)" fill="none" stroke="rgba(122, 140, 255, 0.22)" strokeWidth="0.7" />

        {/* Electron trails (soft blur blobs) */}
        <circle ref={t0} cx="0" cy="0" r="20" fill="rgba(122, 140, 255, 0.22)" filter="url(#atom-soft-glow)" />
        <circle ref={t1} cx="0" cy="0" r="20" fill="rgba(122, 140, 255, 0.22)" filter="url(#atom-soft-glow)" />
        <circle ref={t2} cx="0" cy="0" r="20" fill="rgba(122, 140, 255, 0.22)" filter="url(#atom-soft-glow)" />

        {/* Nucleus stack */}
        <circle cx="0" cy="0" r="38" fill="rgba(122, 140, 255, 0.05)" />
        <circle cx="0" cy="0" r="24" fill="rgba(122, 140, 255, 0.10)" />
        <circle cx="0" cy="0" r="12" fill="url(#atom-nucleus-grad)" filter="url(#atom-electron-glow)" />

        {/* Electrons */}
        <circle ref={e0} cx="0" cy="0" r="5.5" fill="#e8eaff" filter="url(#atom-electron-glow)" />
        <circle ref={e1} cx="0" cy="0" r="5.5" fill="#e8eaff" filter="url(#atom-electron-glow)" />
        <circle ref={e2} cx="0" cy="0" r="5.5" fill="#e8eaff" filter="url(#atom-electron-glow)" />
      </svg>

      {/* Labels */}
      {labels.map((l, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: l.x, top: l.y,
          transform:
            l.align === 'center' ? 'translate(-50%, -50%)' :
            l.align === 'right'  ? 'translate(-100%, -50%)' : 'translate(0, -50%)',
          fontFamily: '"Geist Mono", monospace', fontSize: 11,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#c8c8d8', lineHeight: 1.4,
          textAlign: l.align,
          maxWidth: 150,
          pointerEvents: 'none',
        }}>
          <div style={{ color: '#f4f1ea', whiteSpace: 'nowrap' }}>{l.text}</div>
          <div style={{ color: '#7a7a92', fontSize: 9, letterSpacing: '0.15em', marginTop: 4 }}>
            {l.sub}
          </div>
        </div>
      ))}
    </div>
  );
};

// Object.assign(window, { AtomViz });
export default AtomViz;
