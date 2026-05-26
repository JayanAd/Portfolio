// ─────────────────────────────────────────────────────────────
// CONTACT BACKGROUND — drifting particle constellation
// freeform points + proximity links + mouse-reactive
// ─────────────────────────────────────────────────────────────
import React from "react";

const ContactBG = () => {
  const cvsRef = React.useRef(null);

  React.useEffect(() => {
    const cvs = cvsRef.current; if (!cvs) return;
    const ctx = cvs.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let W, H, points;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      const r = cvs.parentElement.getBoundingClientRect();
      W = r.width; H = r.height;
      cvs.width = W * dpr; cvs.height = H * dpr;
      cvs.style.width = W + 'px'; cvs.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((W * H) / 18000);
      points = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.8 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };
    resize();

    const onMove = e => {
      const r = cvs.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    window.addEventListener('mousemove', onMove);
    cvs.parentElement.addEventListener('mouseleave', onLeave);

    let t = 0, raf;
    const MAX_DIST = 140;
    const loop = () => {
      t += 0.012;
      ctx.clearRect(0, 0, W, H);

      // update
      points.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        // subtle attraction toward mouse
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 180) {
          const f = (1 - d / 180) * 0.06;
          p.x += dx / (d || 1) * f;
          p.y += dy / (d || 1) * f;
        }
        // wrap
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      });

      // connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const o = (1 - d / MAX_DIST) * 0.18;
            ctx.strokeStyle = `rgba(122, 140, 255, ${o})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // points
      points.forEach(p => {
        const pulse = Math.sin(p.phase + t * 1.4) * 0.5 + 0.5;
        const r = p.r + pulse * 0.6;
        const a = 0.35 + pulse * 0.25;
        ctx.fillStyle = `rgba(168, 179, 255, ${a})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      });

      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cvs.parentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={cvsRef} style={{
    position: 'absolute', inset: 0, opacity: 0.55, pointerEvents: 'none',
  }} />;
};

// Object.assign(window, { ContactBG });
export default ContactBG;
