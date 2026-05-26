// ─────────────────────────────────────────────────────────────
// SKILLS · RESEARCH · AWARDS · WRITING · CONTACT
// ─────────────────────────────────────────────────────────────
import React from "react";
import { SectionHeader } from "./Nav";
import AtomViz from "./AtomViz";
import ContactBG from "./ContactBG";

const SECTION_WRAP_2 = {
  maxWidth: 1320, margin: '0 auto', padding: '120px 80px'
};

const Skills = () => {
  const categories = [
  {
    title: 'Programming & Frameworks', dot: '#7a8cff',
    items: ['Python', 'FastAPI', 'PyTorch', 'TensorFlow']
  },
  {
    title: 'Databases', dot: '#a8b3ff',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'NLP & LLMs', dot: '#7a8cff',
    items: ['Transformers', 'PEFT / LoRA', 'RAG', 'Prompt Engineering']
  },
  {
    title: 'MLOps & Tools', dot: '#a8b3ff',
    items: ['DVC', 'MLflow', 'W&B', 'Optuna', 'Docker', 'Airflow']
  },
  {
    title: 'Computer Vision', dot: '#7a8cff',
    items: ['YOLO', 'Object Detection', 'Segmentation', 'OpenCV']
  },
  {
    title: 'XAI & GenAI', dot: '#a8b3ff',
    items: ['SHAP', 'LIME', 'GradCAM', 'Diffusers', 'LangChain', 'LangGraph']
  }];


  return (
    <section id="skills" className="r-section" style={SECTION_WRAP_2}>
      <SectionHeader num="05" title="Skills & expertise" subtitle="What I reach for. Grouped by where it sits in the stack." />
      <div className="r-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {categories.map((cat, i) =>
        <div key={i} style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 18, padding: 28,
          transition: 'border-color 0.3s',
          display: 'flex', flexDirection: 'column'
        }}
        onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(122, 140, 255, 0.25)';}}
        onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';}}>
          
            {/* category header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
              <h3 style={{ fontFamily: 'Geist, sans-serif', fontSize: 15,
              color: '#e8e8f4', margin: 0, fontWeight: 500, letterSpacing: '-0.005em' }}>
                {cat.title}
              </h3>
              <span style={{ marginLeft: 'auto', fontFamily: '"Geist Mono", monospace',
              fontSize: 10, color: '#5a5a75', letterSpacing: '0.15em' }}>0{i + 1}</span>
            </div>

            {/* items grid — text only */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {cat.items.map((label, k) =>
            <div key={k} className="skill-tile" style={{
              padding: '12px 14px',
              background: 'rgba(10, 13, 24, 0.6)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 10,
              textAlign: 'center',
              transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
              cursor: 'none',
              fontFamily: 'Geist, sans-serif', fontSize: 13,
              color: '#d8d8e8', letterSpacing: '-0.005em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(122, 140, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(122, 140, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.color = '#f4f1ea';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 13, 24, 0.6)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = '';
              e.currentTarget.style.color = '#d8d8e8';
            }}>
              {label}</div>
            )}
            </div>
          </div>
        )}
      </div>
    </section>);

};

const Research = () =>
<section id="research" className="r-section" style={SECTION_WRAP_2}>
    <SectionHeader num="06" title="Research" subtitle="Published work." />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div className="r-research-card" style={{
      display: 'grid', gridTemplateColumns: '200px 1fr 160px', gap: 32,
      padding: '36px 32px',
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 16,
      alignItems: 'start'
    }}>
        <div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a8cff',
          marginBottom: 10 }}>↳ Published</div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
          color: '#8a8aa5' }}>arXiv:2512.00129</div>
          <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
          color: '#5a5a75', marginTop: 4 }}>Dec 2025</div>
        </div>
        <div>
          <h3 style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          fontSize: 30, lineHeight: 1.2, color: '#f4f1ea',
          margin: '0 0 12px', fontWeight: 400 }}>
            Incursive Breast Cancer Detection with YOLO, XAI &amp; Domain Adaptation
          </h3>
          <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 14,
          color: '#9595aa', marginBottom: 16 }}>
            Adhikari, J., et al. (2025).
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['YOLO', 'SHAP', 'GradCAM', 'Domain Adaptation', 'Medical Imaging'].map((t) =>
          <span key={t} style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10,
            padding: '4px 9px', borderRadius: 4,
            background: 'rgba(122, 140, 255, 0.1)', color: '#c8c8d8',
            border: '1px solid rgba(122, 140, 255, 0.15)' }}>{t}</span>
          )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
          <a href="#" style={{
          fontFamily: '"Geist Mono", monospace', fontSize: 12,
          padding: '11px 20px', borderRadius: 999,
          border: '1px solid rgba(122, 140, 255, 0.3)',
          color: '#7a8cff', textDecoration: 'none', letterSpacing: '0.05em',
          cursor: 'none'
        }}>Read PDF ↗</a>
        </div>
      </div>
    </div>
  </section>;


// ─────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────
const Education = () => {
  const edu = [
  { period: '2019 — 2024', loc: 'Pokhara, NP',
    school: 'Pokhara University · Gandaki College of Engineering and Science',
    degree: 'Bachelor of Engineering, Computer Engineering',
    note: "Class first in every semester throughout the four-year program.",
    stats: [
      { v: '3.91', sub: '/ 4.0', k: 'CGPA' },
      { v: "Dean's", sub: 'List', k: "Recognition" },
    ],
  }];

  return (
    <section id="education" className="r-section" style={SECTION_WRAP_2}>
      <SectionHeader num="03" title="Education" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {edu.map((e, i) =>
        <div key={i} className="r-edu-row" style={{
          display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40,
          padding: '36px 0', borderTop: '1px solid rgba(255,255,255,0.07)',
          alignItems: 'start'
        }}>
            <div>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
              letterSpacing: '0.12em', color: '#8a8aa5',
              textTransform: 'uppercase', marginBottom: 6 }}>{e.period}</div>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
              color: '#5a5a75' }}>{e.loc}</div>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: 32,
              color: '#f4f1ea', fontWeight: 400, letterSpacing: '-0.015em',
              margin: '0 0 8px', lineHeight: 1.15 }}>
                {e.degree}
              </h3>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
              fontSize: 20, color: '#7a8cff', marginBottom: 16 }}>
                @ {e.school}
              </div>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 15,
              color: '#9595aa', lineHeight: 1.6, margin: '0 0 24px', fontWeight: 300, whiteSpace: 'pre-line' }}>
                {e.note}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="r-edu-stats">
                {e.stats.map((s, k) => (
                  <div key={k} className="r-edu-stat" style={{
                    padding: '16px 22px',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    minWidth: 140,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontFamily: '"Instrument Serif", serif',
                        fontSize: 30, color: '#f4f1ea', lineHeight: 1, fontWeight: 400 }}>
                        {s.v}
                      </span>
                      <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
                        fontSize: 18, color: '#7a8cff', lineHeight: 1 }}>
                        {s.sub}
                      </span>
                    </div>
                    <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 9,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: '#6a6a85', marginTop: 8 }}>
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

};

const Awards = () => {
  const awards = [
  { y: '2025', t: "Dean's List · Pokhara University",
    d: 'Recognized for sustained academic standing through final years of B.E.' },
  { y: '2024', t: 'Academic Excellence Award · Gandaki College of Engineering and Science',
    d: 'Awarded for ranking first in class across every semester of the Bachelor\'s program.' },
  { y: '2023', t: '1st Runner-Up · 10th GCES IT Expo',
    d: 'Among student projects exhibited at the annual IT Expo.' }];

  return (
    <section id="awards" className="r-section" style={SECTION_WRAP_2}>
      <SectionHeader num="07" title="Awards & honors" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {awards.map((a, i) =>
        <div key={i} className="r-awards-row" style={{
          display: 'grid', gridTemplateColumns: '140px 1fr', gap: 32,
          padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.07)',
          alignItems: 'baseline'
        }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 36,
            color: '#7a8cff', fontStyle: 'italic', letterSpacing: '-0.02em' }}>{a.y}</div>
            <div>
              <h4 style={{ fontFamily: 'Geist, sans-serif', fontSize: 18,
              color: '#f4f1ea', margin: '0 0 6px', fontWeight: 500 }}>{a.t}</h4>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 14,
              color: '#8a8aa5', margin: 0, lineHeight: 1.55, fontWeight: 300 }}>{a.d}</p>
            </div>
          </div>
        )}
      </div>
    </section>);

};

// const Writing = () => {
//   const posts = [
//   { date: 'May 2026', title: 'What I learned fine-tuning small LLMs on consumer GPUs',
//     excerpt: 'A practical walkthrough of LoRA, QLoRA, and the trade-offs that matter when VRAM is the bottleneck.',
//     tag: 'LLM · Tutorial', read: '8 min' },
//   { date: 'Mar 2026', title: 'Why explainability matters more than accuracy in medical imaging',
//     excerpt: 'Notes from publishing a paper on YOLO + SHAP + GradCAM, and what radiologists actually want from XAI.',
//     tag: 'Research · XAI', read: '12 min' },
//   { date: 'Jan 2026', title: 'Building MLOps on a budget — DVC, MLflow, and one EC2 box',
//     excerpt: "A minimal-but-real stack you can run for under $50/mo that gives you reproducibility without the complexity tax.",
//     tag: 'MLOps · Notes', read: '6 min' }];

//   return (
//     <section id="writing" className="r-section" style={SECTION_WRAP_2}>
//       <SectionHeader num="08" title="Writing" subtitle="Notes on what I'm building and reading." />
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         {posts.map((p, i) =>
//         <a key={i} href="#" className="r-writing-row" style={{
//           display: 'grid', gridTemplateColumns: '180px 1fr 120px', gap: 40,
//           padding: '32px 8px', borderTop: '1px solid rgba(255,255,255,0.07)',
//           alignItems: 'baseline', textDecoration: 'none', cursor: 'none',
//           transition: 'background 0.25s, padding 0.25s'
//         }}
//         onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(122, 140, 255, 0.025)';e.currentTarget.style.paddingLeft = '24px';}}
//         onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.paddingLeft = '8px';}}>
          
//             <div>
//               <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11,
//               letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a8cff', marginBottom: 6 }}>
//                 {p.date}
//               </div>
//               <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10,
//               color: '#5a5a75' }}>{p.tag}</div>
//             </div>
//             <div>
//               <h3 style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400,
//               fontSize: 28, lineHeight: 1.2, letterSpacing: '-0.015em',
//               color: '#f4f1ea', margin: '0 0 10px' }}>{p.title}</h3>
//               <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 15,
//               color: '#9090a5', lineHeight: 1.6, margin: 0, maxWidth: 620, fontWeight: 300 }}>
//                 {p.excerpt}
//               </p>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'flex-end',
//             fontFamily: '"Geist Mono", monospace', fontSize: 11, color: '#6a6a85',
//             alignItems: 'center', gap: 8 }}>
//               <span>{p.read}</span>
//               <span style={{ color: '#7a8cff' }}>↗</span>
//             </div>
//           </a>
//         )}
//       </div>
//       <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
//         <a href="#" style={{
//           fontFamily: '"Geist Mono", monospace', fontSize: 12,
//           padding: '12px 22px', borderRadius: 999,
//           border: '1px solid rgba(255,255,255,0.12)',
//           color: '#c8c8d8', textDecoration: 'none', letterSpacing: '0.05em',
//           cursor: 'none'
//         }}>View all writing →</a>
//       </div>
//     </section>);

// };

const Contact = () =>
<section id="contact" className="r-section r-contact-section" style={{ ...SECTION_WRAP_2, paddingTop: 140, paddingBottom: 80, position: 'relative' }}>
    {/* AI-themed drifting constellation backdrop */}
    <ContactBG />

    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center',
    maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{
      fontFamily: '"Instrument Serif", serif', fontWeight: 400,
      fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 0.95,
      letterSpacing: '-0.025em', color: '#f4f1ea', margin: '0 0 32px'
    }}>
        Let's <em style={{ fontStyle: 'italic', color: '#7a8cff' }}>build</em><br />something.
      </h2>
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 18, color: '#9090a5',
      lineHeight: 1.6, margin: '0 auto 44px', maxWidth: 520, fontWeight: 300 }}>
        I'm open to research collaborations and freelance ML engineering.
        The fastest way to reach me is email.
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:jayanadkh@gmail.com" className="btn-magnet" style={{
        fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 500,
        padding: '15px 28px', borderRadius: 999,
        background: '#7a8cff', color: '#0a0d18', textDecoration: 'none',
        cursor: 'none', letterSpacing: '0.01em', transition: 'all 0.25s'
      }}>jayanadkh@gmail.com →</a>
        <a href="https://www.linkedin.com/in/jayanad" target="_blank" rel="noreferrer" className="btn-magnet" style={{
        fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 500,
        padding: '15px 28px', borderRadius: 999,
        background: 'transparent', color: '#e8e8f4',
        border: '1px solid rgba(255,255,255,0.18)', textDecoration: 'none',
        cursor: 'none', letterSpacing: '0.01em', transition: 'all 0.25s',
        display: 'inline-flex', alignItems: 'center', gap: 10
      }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Connect on LinkedIn
        </a>
      </div>
      <div style={{ marginTop: 96, paddingTop: 28,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', justifyContent: 'space-between',
      fontFamily: '"Geist Mono", monospace', fontSize: 11,
      color: '#5a5a75', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        <span>© 2026 Jayan Adhikari</span>
        <span>POKHARA</span>
      </div>
    </div>
  </section>;


// Object.assign(window, { Skills, Research, Education, Awards, Writing, Contact });
export {Skills, Research, Education, Awards, Contact}