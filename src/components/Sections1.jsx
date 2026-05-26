// ─────────────────────────────────────────────────────────────
// ABOUT + EXPERIENCE + PROJECTS
// ─────────────────────────────────────────────────────────────
import React from "react";
import { SectionHeader } from "./Nav";
import AtomViz from "./AtomViz";

const SECTION_WRAP = {
  maxWidth: 1320, margin: '0 auto', padding: '120px 80px',
};

const About = () => (
  <section id="about" className="r-section" style={SECTION_WRAP}>
    <SectionHeader num="01" title="About" />
    <div className="r-about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 440px', gap: 80, alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5a5a75',
          marginBottom: 24 }}>
          ↳ Currently
        </div>
        <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 18,
          lineHeight: 1.7, color: '#c8c8d8', fontWeight: 300, maxWidth: 620 }}>
          <p style={{ marginBottom: 22 }}>
            I'm an <span style={{ color: '#f4f1ea' }}>AI engineer and researcher</span> based in Pokhara, Nepal,
            working at the intersection of deep learning, MLOps, and explainability. My focus is on
            building models that don't just predict, they let you see <em style={{ color: '#7a8cff', fontFamily: '"Instrument Serif", serif', fontSize: 20 }}>why</em>.
          </p>
  <p style={{ marginBottom: 22 }}>
    As a <span style={{ color: '#f4f1ea' }}>Data Scientist </span>, I work across applied AI systems,
    including LLM fine-tuning with LoRA/QLoRA, MLOps pipelines with DVC, MLflow, and W&amp;B, and explainability
    workflows for medical imaging models. I enjoy turning research ideas into working systems that can be tested,
    improved, and deployed.
  </p>
          <p style={{ marginBottom: 0 }}>
My recent paper explores
<em style={{ color: '#7a8cff', fontFamily: '"Instrument Serif", serif', fontSize: 19 }}> invasive breast cancer detection </em>
using YOLO, explainable AI, and domain adaptation
(<span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 14, color: '#8a8aa5' }}>arXiv:2512.00129</span>).
            My current research orbits around three interests, shown on the right.
          </p>
        </div>
      </div>
      <div>
        <AtomViz />
      </div>
    </div>
  </section>
);

const Experience = () => {
  const jobs = [
    { co: 'Dvorak Innovation', role: 'Data Scientist', period: '2024 — Present', loc: 'Pokhara, NP',
      bullets: [
        'Build ML models and data pipelines that power internal products and client analytics engagements',
        'Build hybrid retrieval pipelines (BM25 + dense embeddings with cross-encoder rerankers), structured-output extraction with constrained decoding, and lightweight agent loops powering shipped product features',
        'Translate recent research into shipped capabilities and document trade-offs for engineering + product',
        'Author exploratory data analyses that inform roadmap decisions and KPI tracking',
      ] },
    { co: 'Independent Research', role: 'AI Researcher', period: '2023 — Present', loc: 'Remote',
      bullets: [
        'Co-authored paper on YOLO + XAI for breast cancer detection (arXiv:2512.00129)',
        'Exploring offline reinforcement learning for healthcare decision support',
        'Domain adaptation experiments across mammogram datasets',
      ] },
  ];
  return (
    <section id="experience" className="r-section" style={SECTION_WRAP}>
      <SectionHeader num="02" title="Experience" subtitle="A short, factual timeline." />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {jobs.map((j, i) => (
          <div key={i} className="r-exp-row" style={{
            display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40,
            padding: '36px 0', borderTop: '1px solid rgba(255,255,255,0.07)',
            alignItems: 'start',
          }}>
            <div>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
                letterSpacing: '0.12em', color: '#8a8aa5', textTransform: 'uppercase', marginBottom: 6 }}>
                {j.period}
              </div>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: '#5a5a75' }}>
                {j.loc}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14,
                marginBottom: 18, flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: 32,
                  color: '#f4f1ea', fontWeight: 400, letterSpacing: '-0.015em', margin: 0 }}>
                  {j.role}
                </h3>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
                  fontSize: 22, color: '#7a8cff' }}>@ {j.co}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: 8 }}>
                {j.bullets.map((b, k) => (
                  <li key={k} style={{ display: 'flex', gap: 14,
                    fontFamily: 'Geist, sans-serif', fontSize: 15,
                    color: '#9595aa', lineHeight: 1.6 }}>
                    <span style={{ color: '#7a8cff', marginTop: 9,
                      width: 14, height: 1, background: '#7a8cff', flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const  Projects = () => {
  const projects = [
    { n: '01', title: 'YouTube Sentiment Pipeline', tag: 'NLP · MLOps',
      desc: 'Production-grade Chrome extension powered by an end-to-end NLP pipeline, from raw comment ingestion through preprocessing, model training with Optuna-tuned hyperparameters, to real-time inference via a Flask API on AWS.',
      stack: ["NLP", "Deep Learning", "MLflow", "DVC", "AWS", "Flask", "CI/CD"], year: '2025', status: 'shipped',
      github: 'https://github.com/JayanAd/yt-comment-sentiment-analyzer' },
    { n: '02', title: 'Hybrid Spotify Song Recommender', tag: 'Recommender System',
      desc: 'Hybrid recommendation system for Spotify tracks combining content-based similarity (TF-IDF + feature engineering) with collaborative filtering from user listening behavior, wrapped in an interactive Streamlit app with a diversity control.',
      stack: ["Recommender Systems",
    "Hybrid Filtering",
    "TF-IDF",
    "Scikit-learn",
    "Dask",
    "SciPy Sparse",
    "Streamlit",
    "DVC",
    "GitHub Actions",], year: '2025', status: 'published',
      github: 'https://github.com/JayanAd/Hybrid-Recommender-System' },
    { n: '03', title: 'Self-Driving CNN', tag: 'CV',
      desc: 'Implemented NVIDIA\'s end-to-end CNN architecture for autonomous lane keeping, extended with YOLO-based object detection for real-time obstacle avoidance at 30 FPS.',
      stack: ["Computer Vision", "CNN", "YOLO", "TensorFlow", "PyTorch"], year: '2024', status: 'archived',
      github: 'https://github.com/JayanAd/self_driving_car' },
    { n: '04', title: 'GPT From Scratch', tag: 'LLM',
      desc: "Implemented a decoder-only Transformer language model from scratch in PyTorch, including tokenization, masked self-attention, positional encoding, and autoregressive text generation.",
      stack: [ "Transformers",
    "LLM",
    "PyTorch",
    "Self-Attention",
    "Deep Learning",], year: '2024', status: 'archived',
      github: 'https://github.com/JayanAd/CustomLLM' },
    { n: '05', title: 'Vision Transformer (ViT) From Scratch', tag: 'ViT',
      desc: 'Recreated the Vision Transformer architecture in PyTorch, implementing patch embeddings, positional encodings, and Transformer encoder blocks for image classification.',
      stack: [ "Vision Transformer",
    "Computer Vision",
    "PyTorch",
    "Attention",
    "Deep Learning",], year: '2026', status: 'in-progress',
      github: 'https://github.com/JayanAd/ViT-from-scratch' },
    
  ];

  const [VISIBLE, setVisible] = React.useState(3);
  React.useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setVisible(w < 700 ? 1 : w < 1080 ? 2 : 3);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const [start, setStart] = React.useState(0);
  const maxStart = Math.max(0, projects.length - VISIBLE);

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(maxStart, s + 1));
  const goTo = i => setStart(Math.min(maxStart, i));

  const statusColors = {
    'shipped':     { dot: '#7a8cff', label: 'Shipped' },
    'published':   { dot: '#a8b3ff', label: 'Published' },
    'in-progress': { dot: '#ffb878', label: 'In progress' },
    'archived':    { dot: '#6a6a85', label: 'Archived' },
  };

  return (
    <section id="projects" className="r-section" style={SECTION_WRAP}>
      <SectionHeader num="04" title="Selected work" subtitle="Things I've shipped, published, or am quietly building. Use the arrows to browse." />

      {/* Controls row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 28, paddingBottom: 22, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
          letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7a92' }}>
          ↳ {String(start + 1).padStart(2, '0')}–{String(Math.min(start + VISIBLE, projects.length)).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={prev} disabled={start === 0} style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'transparent', cursor: 'none',
            border: `1px solid ${start === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(122, 140, 255, 0.35)'}`,
            color: start === 0 ? '#3a3a55' : '#e8e8f4',
            fontSize: 16, transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onMouseEnter={e => { if (start !== 0) e.currentTarget.style.borderColor = '#7a8cff'; }}
            onMouseLeave={e => { if (start !== 0) e.currentTarget.style.borderColor = 'rgba(122, 140, 255, 0.35)'; }}
          >←</button>
          <button onClick={next} disabled={start === maxStart} style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'transparent', cursor: 'none',
            border: `1px solid ${start === maxStart ? 'rgba(255,255,255,0.06)' : 'rgba(122, 140, 255, 0.35)'}`,
            color: start === maxStart ? '#3a3a55' : '#e8e8f4',
            fontSize: 16, transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onMouseEnter={e => { if (start !== maxStart) e.currentTarget.style.borderColor = '#7a8cff'; }}
            onMouseLeave={e => { if (start !== maxStart) e.currentTarget.style.borderColor = 'rgba(122, 140, 255, 0.35)'; }}
          >→</button>
        </div>
      </div>

      {/* Carousel viewport */}
      <div style={{ overflow: 'hidden', margin: '0 -10px' }}>
        <div style={{
          display: 'flex',
          transform: `translateX(calc(${-start} * (100% / ${VISIBLE})))`,
          transition: 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          {projects.map((p, i) => {
            const s = statusColors[p.status] || statusColors.shipped;
            return (
              <div key={i} style={{
                flex: `0 0 calc(100% / ${VISIBLE})`,
                padding: '0 10px',
              }}>
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-card r-projects-card" style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 16, padding: 28,
                  minHeight: 420,
                  display: 'flex', flexDirection: 'column',
                  cursor: 'none', textDecoration: 'none',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(122, 140, 255, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(122,140,255,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: 22 }}>
                    <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 12,
                      color: '#7a8cff', letterSpacing: '0.15em' }}>{p.n} /</span>
                    <span style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10,
                      letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a7a92' }}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: '"Instrument Serif", serif', fontWeight: 400,
                    fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.018em',
                    color: '#f4f1ea', margin: '0 0 16px',
                  }}>{p.title}</h3>

                  <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 14,
                    color: '#9090a5', lineHeight: 1.65, margin: '0 0 22px',
                    fontWeight: 300, flex: 1 }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
                    {p.stack.map(t => (
                      <span key={t} style={{
                        fontFamily: '"Geist Mono", monospace', fontSize: 10,
                        padding: '4px 9px', borderRadius: 4,
                        background: 'rgba(255,255,255,0.04)',
                        color: '#8a8aa5', letterSpacing: '0.04em',
                      }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', paddingTop: 16,
                    borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontFamily: '"Geist Mono", monospace',
                      fontSize: 11, color: '#6a6a85' }}>{p.year}</span>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: '"Geist Mono", monospace', fontSize: 10,
                      letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a8cff' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span style={{ fontSize: 11 }}>↗</span>
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === start ? 32 : 8, height: 8,
            borderRadius: 4, border: 'none', cursor: 'none',
            background: i === start ? '#7a8cff' : 'rgba(255,255,255,0.12)',
            transition: 'width 0.35s, background 0.2s',
          }} />
        ))}
      </div>
    </section>
  );
};

// Object.assign(window, { About, Experience, Projects });
export {About, Experience, Projects}
