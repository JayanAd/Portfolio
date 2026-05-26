// ─────────────────────────────────────────────────────────────
// NEURAL NET — visible + data packets traveling along edges
// 4 layers · pulsing nodes · 60+ packets in flight
// ─────────────────────────────────────────────────────────────
import React from "react";

const NeuralNet = () => {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: 0, y: 0, active: false });

  React.useEffect(() => {
    const cvs = canvasRef.current; if (!cvs) return;
    const ctx = cvs.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let W, H;
    const resize = () => {
      const r = cvs.parentElement.getBoundingClientRect();
      W = r.width; H = r.height;
      cvs.width = W * dpr; cvs.height = H * dpr;
      cvs.style.width = W + 'px'; cvs.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // build layered network
    const layers = [5, 8, 8, 5];
    const nodes = [];
    const buildNodes = () => {
      nodes.length = 0;
      const margin = 100;
      layers.forEach((n, li) => {
        const x = margin + (li / (layers.length - 1)) * (W - margin * 2);
        for (let i = 0; i < n; i++) {
          const y = (i + 0.5) / n * (H * 0.85) + H * 0.075;
          nodes.push({ x, y, ox: x, oy: y, l: li, idx: i, pulse: Math.random() * Math.PI * 2, fire: 0 });
        }
      });
    };
    buildNodes();

    let edges = [];
    const buildEdges = () => {
      edges = [];
      for (let li = 0; li < layers.length - 1; li++) {
        const a = nodes.filter(n => n.l === li);
        const b = nodes.filter(n => n.l === li + 1);
        a.forEach(na => b.forEach(nb => edges.push({
          a: na, b: nb,
          base: 0.05 + Math.random() * 0.08,
          weight: Math.random(),
        })));
      }
    };
    buildEdges();

    // data packets traveling along edges
    const packets = [];
    const spawnPacket = () => {
      if (packets.length > 55) return;
      const e = edges[Math.floor(Math.random() * edges.length)];
      packets.push({
        edge: e,
        t: 0,
        speed: 0.0022 + Math.random() * 0.0048,
        size: 1.5 + Math.random() * 0.9,
        life: 1,
      });
    };
    // pre-fill some
    for (let i = 0; i < 22; i++) spawnPacket();

    const onResize = () => { resize(); buildNodes(); buildEdges(); };

    const onMove = (e) => {
      const r = cvs.getBoundingClientRect();
      mouseRef.current.x = e.clientX - r.left;
      mouseRef.current.y = e.clientY - r.top;
      mouseRef.current.active = mouseRef.current.x > 0 && mouseRef.current.x < W && mouseRef.current.y > 0 && mouseRef.current.y < H;
    };
    const onLeave = () => { mouseRef.current.active = false; };
    window.addEventListener('mousemove', onMove);
    cvs.parentElement.addEventListener('mouseleave', onLeave);

    let t = 0, raf, lastSpawn = 0;
    const loop = (now) => {
      t += 0.012;
      ctx.clearRect(0, 0, W, H);

      // subtle parallax pull toward mouse
      const m = mouseRef.current;
      nodes.forEach(n => {
        let tx = n.ox, ty = n.oy;
        if (m.active) {
          const dx = m.x - n.ox, dy = m.y - n.oy;
          const d = Math.hypot(dx, dy);
          const pull = Math.max(0, 1 - d / 400) * 12;
          tx += (dx / (d || 1)) * pull;
          ty += (dy / (d || 1)) * pull;
        }
        n.x += (tx - n.x) * 0.08;
        n.y += (ty - n.y) * 0.08;
        n.fire *= 0.94;
      });

      // edges — quieter base
      edges.forEach(e => {
        const pulse = 0.3 + 0.7 * (Math.sin(t * 1.2 + e.weight * 8) * 0.5 + 0.5);
        const a = (e.base * 0.7) + (e.base * 0.7) * pulse;
        ctx.strokeStyle = `rgba(122, 140, 255, ${a})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(e.a.x, e.a.y); ctx.lineTo(e.b.x, e.b.y); ctx.stroke();
      });

      // spawn packets — slower cadence
      if (now - lastSpawn > 180) { spawnPacket(); lastSpawn = now; }

      // packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) {
          // arrived — fire the receiving node
          p.edge.b.fire = 1;
          packets.splice(i, 1);
          continue;
        }
        const x = p.edge.a.x + (p.edge.b.x - p.edge.a.x) * p.t;
        const y = p.edge.a.y + (p.edge.b.y - p.edge.a.y) * p.t;

        // bright dot with halo
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
        g.addColorStop(0, 'rgba(184, 196, 255, 0.85)');
        g.addColorStop(0.4, 'rgba(122, 140, 255, 0.5)');
        g.addColorStop(1, 'rgba(122, 140, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = 'rgba(220, 255, 240, 0.95)';
        ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill();
      }

      // nodes
      nodes.forEach(n => {
        const breath = Math.sin(n.pulse + t * 2) * 0.5 + 0.5;
        const fire = n.fire;
        const r = 2.4 + breath * 1.2 + fire * 3;
        // glow
        const glowR = 14 + fire * 18;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        g.addColorStop(0, `rgba(122, 140, 255, ${0.25 + fire * 0.45})`);
        g.addColorStop(1, 'rgba(122, 140, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2); ctx.fill();
        // core
        ctx.fillStyle = `rgba(220, 255, 240, ${0.7 + fire * 0.3})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
      });

      raf = requestAnimationFrame(loop);
    };
    loop(0);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      cvs.parentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />;
};

// Object.assign(window, { NeuralNet });
export default NeuralNet;