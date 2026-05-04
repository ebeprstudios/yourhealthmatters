'use client';

import { useState, useEffect, useRef } from 'react';

const SLEEP_STAGES = [
  {
    id: 's1', label: 'Stage 1–2', time: '0–30 min', name: 'Light Sleep',
    color: '#7c6aff', icon: '🌙', depth: 15,
    systems: [
      'Brain shifts to theta waves',
      'Heart rate drops 10–20 BPM',
      'Blood pressure dips 10–20 mmHg',
      'Sympathetic nervous system powers down',
      'Parasympathetic repair mode activates'
    ],
    hormone: 'Melatonin surges'
  },
  {
    id: 's2', label: 'Stage 3', time: '30–90 min', name: 'Deep Sleep',
    color: '#4ecdc4', icon: '💫', depth: 75,
    systems: [
      'Growth hormone releases (80% of daily dose)',
      'Liver detoxification begins peak activity',
      'Immune T-cells + NK cells surge',
      'DNA repair enzymes activate (PARP enzymes)',
      'Glymphatic brain cleaning begins'
    ],
    hormone: 'Growth Hormone peaks'
  },
  {
    id: 's3', label: 'REM 1', time: '90–180 min', name: 'First REM',
    color: '#f4c56a', icon: '⚡', depth: 45,
    systems: [
      'Emotional memories processed + filed',
      'Stress hormones metabolized',
      'Creative brain connections form',
      'Testosterone begins rising toward dawn',
      'Cortisol slow pre-dawn rise starts'
    ],
    hormone: 'Testosterone rising'
  },
  {
    id: 's4', label: 'Deep+REM', time: '3–5 hrs', name: 'Repair Cycles',
    color: '#ff6b9d', icon: '🔬', depth: 85,
    systems: [
      'Cellular DNA repair peaks (PARP enzymes max)',
      'Mitochondria rebuilt in every cell',
      'Autophagy — damaged protein removal',
      'Telomeres partially restored',
      'Glymphatic system fully active — beta-amyloid flushed'
    ],
    hormone: 'Growth Hormone pulses'
  },
  {
    id: 's5', label: 'Pre-Wake', time: '5–7 hrs', name: 'Extended REM',
    color: '#ff8c42', icon: '🌅', depth: 30,
    systems: [
      'Testosterone peaks just before waking',
      'Cortisol surges — dawn phenomenon',
      'Procedural memory consolidation finalizes',
      'Leptin signals tomorrow\'s satiety',
      'Ghrelin rises — morning hunger awakens'
    ],
    hormone: 'Cortisol peaks (dawn)'
  }
];

const SCENARIOS = [
  {
    id: 'ideal', label: 'Ideal Sleep', icon: '✨', color: '#4ecdc4',
    bedtime: '10:00 PM', wakeTime: '6:00 AM', lastMeal: '6:30 PM', fastHours: '11.5 hrs', quality: 98,
    subtitle: 'Kitchen closed 7pm · Empty stomach · Dark room · No screens',
    outcomes: [
      { label: 'Liver Detox', status: '✅ Full capacity', detail: 'Cytochrome P450 enzymes run unobstructed from 11pm–3am' },
      { label: 'Growth Hormone', status: '✅ Maximum release', detail: '80% daily dose released in first 90 min of deep sleep' },
      { label: 'Brain Cleaning', status: '✅ Complete', detail: 'Glymphatic system flushes beta-amyloid + tau proteins fully' },
      { label: 'Fasting Glucose', status: '✅ 80–90 mg/dL', detail: 'Wakes stable. No liver gluconeogenesis overdrive overnight.' },
      { label: 'Immune Repair', status: '✅ Peak production', detail: 'NK cell activity at full capacity. T-cells fully produced.' },
      { label: 'Morning State', status: '✅ Clean + clear', detail: 'No inflammation, stable hormones, sharp cognition' }
    ],
    warning: null,
    advice: 'This is the gold standard. Your body runs its full pharmaceutical factory — detox, repair, consolidate, restore. Every system gets its full window.'
  },
  {
    id: 'late', label: 'Late Eating', icon: '🍽️', color: '#ff6b6b',
    bedtime: '11:00 PM', wakeTime: '7:00 AM', lastMeal: '9:30 PM', fastHours: '1.5 hrs', quality: 38,
    subtitle: 'Heavy carbs + fats at 9pm · Glucose spike before sleep',
    outcomes: [
      { label: 'Liver Detox', status: '❌ Blocked 3–4 hrs', detail: 'Liver busy digesting — detoxification delayed completely' },
      { label: 'Growth Hormone', status: '❌ Reduced 60%', detail: 'Insulin spike directly suppresses GH release at sleep onset' },
      { label: 'Brain Cleaning', status: '⚠️ Partial only', detail: 'Metabolic competition delays glymphatic system startup' },
      { label: 'Fasting Glucose', status: '❌ 115–130 mg/dL', detail: 'Liver runs gluconeogenesis all night. Wakes elevated.' },
      { label: 'Sleep Depth', status: '❌ Disrupted cycles', detail: '3–4am glucose crash → adrenaline surge → waking' },
      { label: 'Morning State', status: '❌ Foggy + craving', detail: 'Inflammation high. Broken appetite. Carb cravings by 8am.' }
    ],
    warning: '3–4 AM CRASH: Glucose crashes to 65–75 mg/dL. Adrenaline floods the system. You wake up unable to fall back asleep.',
    advice: 'Every hour earlier you stop eating gives your liver more time to detox instead of digest. The kitchen closes at 7pm for a biological reason — not a rule.'
  },
  {
    id: 'stress', label: 'High Stress', icon: '⚡', color: '#f4c56a',
    bedtime: '1:00 AM', wakeTime: '7:00 AM', lastMeal: '7:00 PM', fastHours: '12 hrs', quality: 52,
    subtitle: 'High cortisol · Racing thoughts · Late bedtime',
    outcomes: [
      { label: 'Liver Detox', status: '⚠️ Partially blocked', detail: 'High cortisol elevates liver glucose output, competing with detox' },
      { label: 'Growth Hormone', status: '❌ Suppressed', detail: 'Cortisol directly blocks GH secretion — no repair signal sent' },
      { label: 'Brain Cleaning', status: '⚠️ Reduced 40%', detail: 'Sympathetic activation delays deep sleep entry significantly' },
      { label: 'Fasting Glucose', status: '⚠️ 100–115 mg/dL', detail: 'Cortisol-driven gluconeogenesis elevates overnight glucose' },
      { label: 'Immune System', status: '❌ Suppressed', detail: 'Cortisol is anti-inflammatory — blocks NK cell activation' },
      { label: 'Morning State', status: '⚠️ Wired-tired', detail: 'High cortisol + poor sleep = exhausted but cannot rest' }
    ],
    warning: 'CORTISOL FLOOD: Stress keeps your sympathetic nervous system active. Your body thinks it is still daytime. Deep repair cannot begin.',
    advice: 'Magnesium glycinate 400mg + chamomile + ashwagandha before bed. No news, no work, no phone 30 min before sleep. The nervous system must shift before the body can heal.'
  },
  {
    id: 'deprived', label: 'Sleep Deprived', icon: '💀', color: '#ff4757',
    bedtime: '2:00 AM', wakeTime: '5:30 AM', lastMeal: '10:00 PM', fastHours: '7.5 hrs', quality: 15,
    subtitle: '3.5 hours sleep · Late eating · Chronically exhausted',
    outcomes: [
      { label: 'Liver Detox', status: '❌ None', detail: 'No time for full detox cycle. Toxin accumulation accelerates.' },
      { label: 'Growth Hormone', status: '❌ Minimal', detail: 'GH requires deep sleep. 3.5 hrs = one partial cycle at most.' },
      { label: 'Brain Cleaning', status: '❌ Critical failure', detail: 'Beta-amyloid accumulates. ONE bad night = measurable plaque increase.' },
      { label: 'Immune System', status: '❌ 70% drop', detail: 'NK cell activity drops 70% after just ONE night of poor sleep.' },
      { label: 'Insulin Resistance', status: '❌ Spikes to pre-diabetic', detail: 'One night sleep-deprived = insulin resistance of pre-diabetic state.' },
      { label: 'Appetite Hormones', status: '❌ Completely broken', detail: 'Ghrelin +15%, Leptin -15%. Hungry all day. Cravings all day.' }
    ],
    warning: 'CRITICAL: After ONE night of 3.5 hrs sleep — immune drops 70%, insulin resistance spikes, beta-amyloid accumulates in the brain. This is not tiredness. This is organ damage.',
    advice: 'Sleep deprivation is not a badge of honor. It is measurable metabolic and neurological damage. Prioritize sleep as medicine — it is the single most powerful intervention available.'
  },
  {
    id: 'protocol', label: 'Dr. Vera Protocol', icon: '🌿', color: '#69db7c',
    bedtime: '10:30 PM', wakeTime: '6:00 AM', lastMeal: '6:30 PM', fastHours: '11.5 hrs', quality: 100,
    subtitle: 'Complete overnight protocol · Optimal hormone alignment · Full repair',
    outcomes: [
      { label: '6:30 PM', status: '🍽️ Last meal', detail: 'Fiber first, then protein, fat, and carbs in the correct eating order.' },
      { label: '7:00 PM', status: '🔒 Kitchen closes', detail: 'Water, herbal tea, and lemon only from here until morning.' },
      { label: '9:00 PM', status: '📵 Screens off', detail: 'Blue light suppresses melatonin. Dark room activates pineal gland.' },
      { label: '9:30 PM', status: '🫖 Sleep prep', detail: 'Magnesium glycinate 400mg + chamomile tea. Nervous system shifts.' },
      { label: '10:30 PM', status: '😴 Sleep onset', detail: 'Perfectly timed for 11pm liver clock activation — detox begins.' },
      { label: '6:00 AM', status: '🌅 Wake clean', detail: '16oz water + sea salt + lemon. Fasting glucose 80–90 mg/dL.' }
    ],
    warning: null,
    advice: 'The protocol turns sleep into a prescription. Every hour is intentional. Every system gets its window. This is food-as-medicine applied to time itself.'
  }
];

const ORGANS = [
  { organ: 'Brain', color: '#7c6aff', icon: '🧠', action: 'Glymphatic cleaning flushes beta-amyloid + tau proteins. The brain\'s ONLY cleaning mechanism — only works during sleep.', timing: 'All night, peaks hrs 3–6' },
  { organ: 'Liver', color: '#4ecdc4', icon: '🟢', action: 'Cytochrome P450 detox peak. Filters blood, processes hormones, metabolizes toxins and waste products.', timing: '11pm–3am (liver clock)' },
  { organ: 'Immune System', color: '#ff6b9d', icon: '🛡️', action: 'T-cell + NK cell production peaks. Cytokine signaling. Repair of damaged and infected tissue.', timing: 'Stage 3 deep sleep' },
  { organ: 'Skin', color: '#f4c56a', icon: '✨', action: 'Collagen synthesis peaks. Cellular turnover at highest rate. Growth hormone drives dermal repair.', timing: 'First 90 minutes' },
  { organ: 'Gut', color: '#69db7c', icon: '🌿', action: 'Microbiome rebalancing. Intestinal lining (epithelium) regenerates. Enzyme systems reset for tomorrow.', timing: 'Hours 2–5' },
  { organ: 'Heart', color: '#ff4757', icon: '❤️', action: 'Blood pressure dips 10–20 mmHg (nocturnal dipping). Endothelium repairs. Vessel wall regeneration.', timing: 'Immediate — Stage 1' },
  { organ: 'Muscles', color: '#ff8c42', icon: '💪', action: 'Growth hormone drives micro-tear repair. Protein synthesis. Glycogen replenishment for next day.', timing: 'Deep sleep cycles' },
  { organ: 'Bones', color: '#a8dadc', icon: '🦴', action: 'Calcium deposition. Osteoblast activity peaks. Bone remodeling and density restoration.', timing: 'Hours 3–7' }
];

const DISRUPTORS = [
  { t: 'Late Night Eating', m: 'Liver switches from detox to digestion', e: 'Toxin buildup + elevated morning glucose', i: '🍔' },
  { t: 'Carbs Before Bed', m: 'Glucose spike suppresses melatonin + growth hormone', e: 'No deep sleep entry + 3am crash', i: '🍞' },
  { t: 'Alcohol', m: 'Directly suppresses REM sleep', e: 'No memory consolidation or emotional repair', i: '🍷' },
  { t: 'Blue Light / Screens', m: 'Suppresses melatonin production', e: 'Delayed sleep onset, shallow cycles', i: '📱' },
  { t: 'Chronic Stress', m: 'Cortisol keeps sympathetic system ON', e: 'Blocks parasympathetic repair entirely', i: '😰' },
  { t: 'Caffeine After 2pm', m: 'Blocks adenosine (sleep pressure accumulation)', e: 'Delays onset, reduces deep sleep 20%', i: '☕' }
];

const NONNEG = [
  { rule: 'Kitchen Closes 7pm', why: 'Gives your liver 3+ hours before sleep to detox, not digest', icon: '🔒' },
  { rule: 'Sleep by 10–11pm', why: 'Aligns with the liver clock peak (11pm–3am) and growth hormone window', icon: '🌙' },
  { rule: 'No Screens 30 Min Before Bed', why: 'Blue light suppresses melatonin — the master repair trigger', icon: '📵' },
  { rule: '12–16 Hour Overnight Fast', why: 'Empty gut = liver detoxes, autophagy runs, brain cleans itself', icon: '⏳' }
];

export default function SleepVisual() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeScenario, setActiveScenario] = useState('ideal');
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Array<{x:number;y:number;s:number;d:number}>>([]);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
    setStars(Array.from({ length: 70 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 0.5,
      d: Math.random() * 4
    })));
  }, []);

  useEffect(() => {
    autoRef.current = setInterval(() => setActiveStage(p => (p + 1) % SLEEP_STAGES.length), 3200);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const switchScenario = (id: string) => {
    setFading(true);
    setTimeout(() => { setActiveScenario(id); setFading(false); }, 280);
  };

  const scenario = SCENARIOS.find(s => s.id === activeScenario)!;
  const stage = SLEEP_STAGES[activeStage];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #04060f 0%, #09102b 40%, #0e1840 70%, #050810 100%)',
      fontFamily: 'Georgia, Times New Roman, serif',
      color: '#e8e4f0',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <style>{`
        @keyframes yhm-twinkle { 0%,100%{opacity:.15} 50%{opacity:.85} }
        @keyframes yhm-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes yhm-glow { 0%,100%{filter:drop-shadow(0 0 14px #f4c56a66)} 50%{filter:drop-shadow(0 0 34px #f4c56acc)} }
        @keyframes yhm-fadein { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .yhm-snav:hover { opacity:1 !important; transform:translateY(-2px) !important; }
        .yhm-ocard { transition:transform .3s ease; }
        .yhm-ocard:hover { transform:translateY(-4px) scale(1.02); }
        .yhm-stab { cursor:pointer; transition:all .3s ease; font-family:Georgia,serif; }
      `}</style>

      {/* Starfield — client only */}
      {mounted && (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          {stars.map((s, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${s.x}%`, top: `${s.y}%`,
              width: `${s.s}px`, height: `${s.s}px`,
              borderRadius: '50%', background: '#ffffff',
              animation: `yhm-twinkle ${2 + s.d}s ease-in-out ${s.d}s infinite`
            }} />
          ))}
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px', margin: '0 auto', padding: '56px 20px 80px' }}>

        {/* HEADER */}
        <header style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '64px', display: 'inline-block', marginBottom: '20px', animation: 'yhm-glow 3s ease-in-out infinite, yhm-float 4s ease-in-out infinite' }}>🌙</div>
          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 50px)', fontWeight: 700, lineHeight: 1.15,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(120deg, #e8e4f0 0%, #a78bfa 45%, #f4c56a 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '14px'
          }}>
            What Your Body Does<br />While You Sleep
          </h1>
          <p style={{ fontSize: '13px', color: '#6b7280', fontStyle: 'italic', letterSpacing: '0.08em' }}>
            A Clinical Teaching · Dr. Vera Holloway, CNS + CHN · Your Health Matters
          </p>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #a78bfa, transparent)', margin: '18px auto 0' }} />
        </header>

        {/* ── SLEEP STAGE EXPLORER ── */}
        <section style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '22px', padding: '32px 28px', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#6b7280', textTransform: 'uppercase', textAlign: 'center', marginBottom: '22px' }}>
            The 5 Sleep Stages — Tap to Explore
          </p>

          {/* Stage tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '28px' }}>
            {SLEEP_STAGES.map((s, i) => (
              <button key={i} className="yhm-stab" onClick={() => { setActiveStage(i); if (autoRef.current) clearInterval(autoRef.current); }} style={{
                padding: '8px 16px', borderRadius: '20px',
                border: `1px solid ${activeStage === i ? s.color : 'rgba(255,255,255,0.08)'}`,
                background: activeStage === i ? `${s.color}1a` : 'transparent',
                color: activeStage === i ? s.color : '#6b7280',
                fontSize: '11px', fontWeight: activeStage === i ? 700 : 400,
                letterSpacing: '0.04em'
              }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          {/* Depth bars */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px', marginBottom: '6px', justifyContent: 'center' }}>
              {SLEEP_STAGES.map((s, i) => (
                <div key={i} onClick={() => setActiveStage(i)} style={{
                  flex: 1, maxWidth: '80px', height: `${s.depth}%`, minHeight: '6px',
                  background: i === activeStage ? s.color : `${s.color}33`,
                  borderRadius: '4px 4px 0 0', transition: 'all .4s ease', cursor: 'pointer',
                  boxShadow: i === activeStage ? `0 0 20px ${s.color}66` : 'none'
                }} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
              {['LIGHT', 'DEEP', 'REM', 'REPAIR', 'WAKE'].map((label, i) => (
                <div key={i} style={{ flex: 1, maxWidth: '80px', textAlign: 'center', fontSize: '9px', color: '#4b5563', letterSpacing: '0.06em' }}>{label}</div>
              ))}
            </div>
          </div>

          {/* Active stage detail */}
          <div key={activeStage} style={{
            background: `${stage.color}0e`, border: `1px solid ${stage.color}33`,
            borderRadius: '16px', padding: '22px 24px', animation: 'yhm-fadein .4s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '32px' }}>{stage.icon}</span>
              <div>
                <div style={{ fontSize: '19px', fontWeight: 700, color: stage.color }}>{stage.name}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', fontStyle: 'italic' }}>
                  {stage.time} · Dominant hormone: {stage.hormone}
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
              {stage.systems.map((sys, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '12px', color: '#d1d5db', padding: '4px 0' }}>
                  <span style={{ color: stage.color, flexShrink: 0, marginTop: '3px' }}>◆</span>{sys}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCENARIO EXPLORER ── */}
        <section style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#6b7280', textTransform: 'uppercase', textAlign: 'center', marginBottom: '18px' }}>
            5 Sleep Scenarios — What Actually Changes
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            {SCENARIOS.map(s => (
              <button key={s.id} className="yhm-snav" onClick={() => switchScenario(s.id)} style={{
                padding: '10px 18px', borderRadius: '14px', cursor: 'pointer', fontFamily: 'Georgia, serif',
                border: `1px solid ${activeScenario === s.id ? s.color : 'rgba(255,255,255,0.07)'}`,
                background: activeScenario === s.id ? `${s.color}18` : 'rgba(255,255,255,0.025)',
                color: activeScenario === s.id ? s.color : '#6b7280',
                fontSize: '12px', fontWeight: activeScenario === s.id ? 700 : 400,
                opacity: activeScenario === s.id ? 1 : 0.7, transition: 'all .3s ease'
              }}>
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.025)', border: `1px solid ${scenario.color}2a`,
            borderRadius: '22px', padding: '32px',
            opacity: fading ? 0 : 1, transition: 'opacity .28s ease',
            animation: fading ? 'none' : 'yhm-fadein .4s ease'
          }}>
            {/* Header row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <div style={{ fontSize: '30px', marginBottom: '6px' }}>{scenario.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: scenario.color, marginBottom: '4px' }}>{scenario.label}</h3>
                <p style={{ fontSize: '12px', color: '#6b7280', fontStyle: 'italic' }}>{scenario.subtitle}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {([['Bedtime', scenario.bedtime], ['Wake', scenario.wakeTime], ['Last Meal', scenario.lastMeal], ['Fasting', scenario.fastHours]] as [string, string][]).map(([label, val]) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px 14px', textAlign: 'center', minWidth: '68px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: scenario.color }}>{val}</div>
                    <div style={{ fontSize: '9px', color: '#4b5563', letterSpacing: '0.1em', marginTop: '2px' }}>{label.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality bar */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '0.12em' }}>OVERNIGHT REPAIR QUALITY</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: scenario.color }}>{scenario.quality}%</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${scenario.quality}%`, background: `linear-gradient(90deg, ${scenario.color}77, ${scenario.color})`, borderRadius: '3px', transition: 'width .8s ease' }} />
              </div>
            </div>

            {/* Warning */}
            {scenario.warning && (
              <div style={{ background: 'rgba(255,71,87,0.08)', border: '1px solid rgba(255,71,87,0.22)', borderRadius: '12px', padding: '14px 18px', marginBottom: '22px', fontSize: '12px', color: '#ff6b6b', lineHeight: 1.7 }}>
                ⚠️ {scenario.warning}
              </div>
            )}

            {/* Outcomes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '10px', marginBottom: '22px' }}>
              {scenario.outcomes.map((o, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#e8e4f0' }}>{o.label}</span>
                    <span style={{ fontSize: '11px', color: scenario.color }}>{o.status}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.6 }}>{o.detail}</div>
                </div>
              ))}
            </div>

            {/* Dr Vera insight */}
            <div style={{ background: `${scenario.color}0e`, border: `1px solid ${scenario.color}2a`, borderRadius: '12px', padding: '16px 20px', fontSize: '13px', color: '#d1d5db', lineHeight: 1.75, fontStyle: 'italic' }}>
              <span style={{ color: scenario.color, fontStyle: 'normal', fontWeight: 700 }}>Dr. Vera: </span>{scenario.advice}
            </div>
          </div>
        </section>

        {/* ── ORGAN REPAIR GRID ── */}
        <section style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#6b7280', textTransform: 'uppercase', textAlign: 'center', marginBottom: '20px' }}>
            8 Systems Repairing Simultaneously Every Night
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '12px' }}>
            {ORGANS.map((o, i) => (
              <div key={i} className="yhm-ocard" style={{ background: `${o.color}0d`, border: `1px solid ${o.color}2a`, borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{o.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: o.color, marginBottom: '6px' }}>{o.organ}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af', lineHeight: 1.65, marginBottom: '10px' }}>{o.action}</div>
                <div style={{ fontSize: '10px', color: o.color, opacity: 0.75, letterSpacing: '0.04em' }}>⏱ {o.timing}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DISRUPTORS ── */}
        <section style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '22px', padding: '32px 28px', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#6b7280', textTransform: 'uppercase', textAlign: 'center', marginBottom: '22px' }}>
            What Breaks the Repair Sequence
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
            {DISRUPTORS.map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,71,87,0.05)', border: '1px solid rgba(255,71,87,0.14)', borderRadius: '12px', padding: '14px 16px' }}>
                <div style={{ fontSize: '18px', marginBottom: '6px' }}>{d.i}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#ff6b6b', marginBottom: '4px' }}>{d.t}</div>
                <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px', lineHeight: 1.5 }}>{d.m}</div>
                <div style={{ fontSize: '11px', color: '#f4c56a', lineHeight: 1.5 }}>→ {d.e}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROTOCOL NON-NEGOTIABLES ── */}
        <section style={{ background: 'linear-gradient(135deg, rgba(105,219,124,0.06) 0%, rgba(78,205,196,0.06) 100%)', border: '1px solid rgba(105,219,124,0.2)', borderRadius: '22px', padding: '36px 32px', textAlign: 'center' }}>
          <div style={{ fontSize: '36px', marginBottom: '14px', animation: 'yhm-float 3s ease-in-out infinite', display: 'inline-block' }}>🌿</div>
          <h3 style={{ fontSize: '21px', fontWeight: 700, color: '#69db7c', marginBottom: '8px' }}>The 4 Non-Negotiables</h3>
          <p style={{ fontSize: '13px', color: '#6b7280', fontStyle: 'italic', marginBottom: '28px' }}>
            These rules protect your overnight repair sequence. Every night.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '12px', textAlign: 'left', marginBottom: '28px' }}>
            {NONNEG.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '14px 16px' }}>
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{item.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#69db7c', marginBottom: '5px' }}>{item.rule}</div>
                <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.65 }}>{item.why}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: '#4b5563', fontStyle: 'italic', lineHeight: 1.8 }}>
            Your body is a 24-hour pharmaceutical factory.<br />
            <span style={{ color: '#4ecdc4' }}>Sleep is when it manufactures everything. Protect the window.</span>
          </p>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '48px', fontSize: '11px', color: '#374151', lineHeight: 1.9 }}>
          ⚕️ Educational information only · Not medical advice<br />
          Dr. Vera Holloway, CNS + CHN · Your Health Matters
        </footer>
      </div>
    </div>
  );
}
