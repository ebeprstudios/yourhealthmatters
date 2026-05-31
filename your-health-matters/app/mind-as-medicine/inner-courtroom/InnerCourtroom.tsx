"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  The Inner Courtroom — Station 2 Deep-Dive (Binary Collapse)        */
/*  Your Health Guide · Mind as Medicine                             */
/*                                                                     */
/*  Self-contained interactive page. No external UI deps.              */
/*  Fonts (Playfair Display + DM Sans) are loaded in this file's       */
/*  <style jsx global> via @import so the page renders identically     */
/*  to the approved design even if the parent layout doesn't load them.*/
/* ------------------------------------------------------------------ */

type ChamberKey = "judge" | "prosecutor" | "jury";
type VerdictKey = "replaced" | "unlovable" | "failed" | "gone" | "fraud";

const CHAMBERS: Record<
  ChamberKey,
  { icon: string; title: string; tag: string; accent: string; body: string; quote: string }
> = {
  judge: {
    icon: "⚖️",
    title: "The Judge",
    tag: "Renders the verdict",
    accent: "#9F8FEF",
    body:
      "The judge is the part of the mind that decides what an event means about you. It operates automatically, below consciousness. You did not appoint it. You cannot easily fire it. What makes it dangerous is not that it renders verdicts: it's that its verdicts feel like facts. \u201cShe pulled away\u201d becomes \u201cI have been replaced.\u201d The transition from observation to verdict happens in under a second.",
    quote: "Nothing has been proven. No verdict has been reached. A fear has entered the story.",
  },
  prosecutor: {
    icon: "\uD83D\uDDC2",
    title: "The Prosecutor",
    tag: "Collects the evidence",
    accent: "#E05858",
    body:
      "The prosecutor collects every piece of evidence that confirms the verdict already rendered. It is selective by design. The daughter created a Mother\u2019s Day card \u2014 that evidence was discounted. The arguments increased \u2014 that was recorded. The prosecutor does not lie, but it cherry-picks. It will not rest until the case is closed, and the case is always closed in favor of the fear.",
    quote: "The evidence against the fear was there. The prosecution decided not to use it.",
  },
  jury: {
    icon: "\uD83E\uDDE0",
    title: "The Jury",
    tag: "Votes on what it believes",
    accent: "#3B8BD4",
    body:
      "The jury does not evaluate evidence fairly. It votes based on what it already believes \u2014 formed in childhood, reinforced across decades, and loaded with inherited verdicts from your mother, her mother, and the culture you grew up in. A jury that already believes \u201ca good daughter stays close\u201d will read distance as abandonment. It is not corrupt \u2014 it is shaped. That shaping is what Root Work addresses.",
    quote: "Some of what you have been carrying did not belong to you in the first place.",
  },
};

const VERDICTS: Record<
  VerdictKey,
  { dot: string; label: string; body: string; quote: string }
> = {
  replaced: {
    dot: "#9F8FEF",
    label: "\u201cI have been replaced.\u201d",
    body:
      "This verdict fires when a child grows, a partner changes, a friend makes new connections. The courtroom interprets growth as displacement. The evidence presented: she has new relationships, new interests, new distance. The counter-evidence not admitted: she still calls, still cares, still showed up with a handmade card.",
    quote:
      "Can a woman forget her sucking child? Yea, they may forget, yet will I not forget thee. \u2014 Isaiah 49:15",
  },
  unlovable: {
    dot: "#E05858",
    label: "\u201cI am unlovable once fully known.\u201d",
    body:
      "One of the most deeply rooted verdicts in the system. It forms early \u2014 often when love was conditional, inconsistent, or unpredictable. The mind concludes: the people who love me do not yet fully know me. When they do, the love will stop. This verdict keeps people performing, hiding, and exhausting themselves trying to be lovable enough.",
    quote:
      "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us. \u2014 Romans 5:8",
  },
  failed: {
    dot: "#3B8BD4",
    label: "\u201cI have disappointed the people I love.\u201d",
    body:
      "The mother feared this verdict. She held information she believed would hurt her daughter. Her timing was disrupted. The fear that followed \u2014 did I damage her? \u2014 became the lens through which she read every argument, every tension, every shift in tone. The verdict became the filter. Nothing could fully disprove it because the prosecutor kept returning to the disrupted plan.",
    quote:
      "I dwell with him also that is of a contrite and humble spirit, to revive the heart of the contrite ones. \u2014 Isaiah 57:15",
  },
  gone: {
    dot: "#1D9E75",
    label: "\u201cThe life I hoped for is gone.\u201d",
    body:
      "This verdict appears at transition points \u2014 a relationship changing, a plan falling apart, a season ending. The courtroom conflates the loss of a future image with the loss of the relationship itself. \u201cI can grieve the future I imagined while embracing the life I have\u201d is the sentence that challenges it. The image of the future was never the relationship \u2014 it was the frame around it.",
    quote: "And I will restore to you the years that the locust hath eaten. \u2014 Joel 2:25",
  },
  fraud: {
    dot: "#BA7517",
    label: "\u201cI am not who people think I am.\u201d",
    body:
      "The imposter verdict. It runs underneath achievement and love both. The mother withheld information to protect her daughter \u2014 a loving act. The courtroom reframed it as deception. The fear underneath: if she truly knew me, the choices I made, the secrets I kept, she would see someone different from who she loves. The verdict forgets that human imperfection is not fraudulence.",
    quote:
      "Thou knowest my downsitting and mine uprising, thou understandest my thought afar off. \u2014 Psalm 139:1",
  },
};

const STEPS = [
  ["Step 1", "The Event"],
  ["Step 2", "The Thought"],
  ["Step 3", "The Emotion"],
  ["Step 4", "The Verdict"],
  ["Step 5", "The Root"],
  ["Step 6", "Integration"],
];

const SEPARATIONS = [
  {
    num: "01",
    label: "Event \u2260 Meaning",
    body:
      "The event happened. The meaning was assigned. They are two separate things \u2014 and only the meaning can be changed.",
  },
  {
    num: "02",
    label: "Fear \u2260 Fact",
    body:
      "Naming a fear is not agreeing with it. \u201cI am unlovable\u201d is a verdict the fear rendered \u2014 not a truth about you.",
  },
  {
    num: "03",
    label: "Their choices \u2260 your worth",
    body:
      "Her growing world is not evidence that you lost your place in it. A verdict made in your mind was never a verdict they gave you.",
  },
];

export default function InnerCourtroom() {
  const [chamber, setChamber] = useState<ChamberKey | null>(null);
  const [verdict, setVerdict] = useState<VerdictKey | null>(null);

  const ch = chamber ? CHAMBERS[chamber] : null;
  const vd = verdict ? VERDICTS[verdict] : null;

  return (
    <main className="court-root">
      {/* ---------------- Hero ---------------- */}
      <header className="court-header">
        <p className="court-eyebrow">Root Work · Mind as Medicine</p>
        <h1 className="court-title">The Inner Courtroom</h1>
        <p className="court-subtitle">
          Inside the mind, a trial is always running. No one scheduled it. No one announced it.
          And the verdict was rendered before the evidence came in.
        </p>
      </header>

      <div className="court-building">
        {/* ---------------- How it forms ---------------- */}
        <p className="section-label">How it forms</p>

        <div className="pediment">
          <p className="pediment-name">The Wound Is Not the Event</p>
          <p className="pediment-note">
            The wound is the meaning we attached to the event. The courtroom is where that meaning gets decided.
          </p>
        </div>

        <div className="chambers-row">
          {(Object.keys(CHAMBERS) as ChamberKey[]).map((k) => {
            const c = CHAMBERS[k];
            return (
              <button
                key={k}
                type="button"
                className={`chamber${chamber === k ? " active" : ""}`}
                onClick={() => setChamber(chamber === k ? null : k)}
                aria-pressed={chamber === k}
              >
                <span className="ch-accent" style={{ background: c.accent }} />
                <span className="ch-icon" aria-hidden="true">
                  {c.icon}
                </span>
                <span className="ch-title">{c.title}</span>
                <span className="ch-tag">{c.tag}</span>
              </button>
            );
          })}
        </div>

        {ch && (
          <div className="detail-panel" style={{ borderTopColor: ch.accent }}>
            <p className="detail-head">
              <span aria-hidden="true">{ch.icon}</span> {ch.title}
            </p>
            <p className="detail-body">{ch.body}</p>
            <p className="detail-quote">{ch.quote}</p>
          </div>
        )}

        {/* ---------------- How it sustains itself ---------------- */}
        <p className="section-label mt">How it sustains itself: the verdicts it renders</p>

        <div className="verdict-hall">
          <p className="verdict-hall-title">Common verdicts: select one to examine it</p>
          <div className="verdict-list">
            {(Object.keys(VERDICTS) as VerdictKey[]).map((k) => {
              const v = VERDICTS[k];
              return (
                <button
                  key={k}
                  type="button"
                  className={`verdict-chip${verdict === k ? " selected" : ""}`}
                  onClick={() => setVerdict(verdict === k ? null : k)}
                  aria-pressed={verdict === k}
                >
                  <span className="verdict-dot" style={{ background: v.dot }} />
                  <span className="verdict-text">{v.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {vd && (
          <div className="detail-panel" style={{ borderTopColor: vd.dot }}>
            <p className="detail-head">{vd.label}</p>
            <p className="detail-body">{vd.body}</p>
            <p className="detail-quote">{vd.quote}</p>
          </div>
        )}

        {/* ---------------- Before you begin ---------------- */}
        <p className="section-label mt">Before you begin: the six-step excavation</p>

        <ol className="flow-grid">
          {STEPS.map(([num, name], i) => (
            <li key={num} className="flow-step">
              <span className="flow-num">{num}</span>
              <span className="flow-name">{name}</span>
              {i < STEPS.length - 1 && (
                <span className="flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* ---------------- Root Work ---------------- */}
        <p className="section-label mt">Root Work: what actually breaks the cycle</p>

        <div className="rw-strip">
          <p className="rw-title">The three separations that free you</p>
          <ul className="rw-steps">
            {SEPARATIONS.map((s) => (
              <li key={s.num} className="rw-step">
                <span className="rw-num">{s.num}</span>
                <span className="rw-label">{s.label}</span>
                <span className="rw-body">{s.body}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Byline + disclaimer ---------------- */}
        <footer className="court-footer">
          <p className="byline">Dr. Vera Holloway</p>
          <p className="byline-sub">Researched by Erica Ehiwe · Your Health Guide · Mind as Medicine</p>
          <p className="disclaimer">
            Educational only, not a substitute for therapy, counsel, or pastoral care. If you are
            working with traumatic material, please work alongside a trauma-informed therapist.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap");
      `}</style>

      <style jsx>{`
        .court-root {
          --ink: #2a2520;
          --ink-soft: #5c554c;
          --ink-faint: #8a8278;
          --paper: #faf7f1;
          --surface: #fffdf9;
          --line: rgba(60, 50, 40, 0.12);
          --line-strong: rgba(60, 50, 40, 0.22);
          font-family: "DM Sans", -apple-system, sans-serif;
          color: var(--ink);
          background: var(--paper);
          max-width: 720px;
          margin: 0 auto;
          padding: 0 20px 64px;
        }
        .court-header {
          text-align: center;
          padding: 56px 8px 40px;
        }
        .court-eyebrow {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin: 0 0 12px;
        }
        .court-title {
          font-family: "Playfair Display", serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .court-subtitle {
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 520px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin: 0 0 12px 2px;
        }
        .section-label.mt {
          margin-top: 44px;
        }
        .pediment {
          background: var(--surface);
          border: 0.5px solid var(--line-strong);
          border-radius: 14px;
          padding: 22px 28px;
          text-align: center;
        }
        .pediment-name {
          font-family: "Playfair Display", serif;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin: 0 0 6px;
        }
        .pediment-note {
          font-size: 13px;
          color: var(--ink-faint);
          line-height: 1.6;
          margin: 0;
        }
        .chambers-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 12px;
        }
        .chamber {
          position: relative;
          overflow: hidden;
          text-align: left;
          background: var(--surface);
          border: 0.5px solid var(--line);
          border-radius: 12px;
          padding: 18px 16px 16px;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
          display: flex;
          flex-direction: column;
          font-family: inherit;
        }
        .chamber:hover {
          border-color: var(--line-strong);
          transform: translateY(-2px);
        }
        .chamber.active {
          border-color: var(--line-strong);
        }
        .ch-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }
        .ch-icon {
          font-size: 22px;
          margin-bottom: 8px;
        }
        .ch-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 3px;
        }
        .ch-tag {
          font-size: 12px;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        .detail-panel {
          background: var(--surface);
          border: 0.5px solid var(--line);
          border-top: 3px solid var(--line-strong);
          border-radius: 12px;
          padding: 22px 24px;
          margin-top: 12px;
          animation: rise 0.25s ease;
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .detail-head {
          font-size: 15px;
          font-weight: 500;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .detail-body {
          font-size: 14px;
          line-height: 1.7;
          color: var(--ink-soft);
          margin: 0;
        }
        .detail-quote {
          font-family: "Playfair Display", serif;
          font-style: italic;
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft);
          border-left: 2px solid var(--line-strong);
          padding-left: 14px;
          margin: 14px 0 0;
        }
        .verdict-hall {
          background: var(--surface);
          border: 0.5px solid var(--line);
          border-radius: 12px;
          padding: 18px 20px;
        }
        .verdict-hall-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          margin: 0 0 12px;
        }
        .verdict-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .verdict-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: 8px;
          border: 0.5px solid var(--line);
          background: var(--paper);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
          font-family: inherit;
        }
        .verdict-chip:hover {
          border-color: var(--line-strong);
          transform: translateX(2px);
        }
        .verdict-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .verdict-text {
          font-family: "Playfair Display", serif;
          font-style: italic;
          font-size: 14px;
          line-height: 1.4;
          color: var(--ink-soft);
        }
        .verdict-chip.selected .verdict-text {
          color: var(--ink);
        }
        .flow-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .flow-step {
          position: relative;
          background: var(--surface);
          border: 0.5px solid var(--line);
          border-radius: 10px;
          padding: 14px 16px;
        }
        .flow-num {
          display: block;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 3px;
        }
        .flow-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
        }
        .flow-arrow {
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: var(--ink-faint);
          z-index: 1;
        }
        .rw-strip {
          background: var(--surface);
          border: 0.5px solid var(--line-strong);
          border-radius: 12px;
          padding: 20px 24px;
        }
        .rw-title {
          font-size: 13px;
          font-weight: 500;
          margin: 0 0 12px;
        }
        .rw-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .rw-step {
          display: grid;
          grid-template-columns: 28px 130px 1fr;
          gap: 10px;
          align-items: start;
          padding: 12px 0;
          border-bottom: 0.5px solid var(--line);
        }
        .rw-step:last-child {
          border-bottom: none;
        }
        .rw-num {
          font-size: 11px;
          font-weight: 500;
          color: var(--ink-faint);
        }
        .rw-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
        }
        .rw-body {
          font-size: 13px;
          line-height: 1.6;
          color: var(--ink-soft);
        }
        .court-footer {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 0.5px solid var(--line);
          text-align: center;
        }
        .byline {
          font-family: "Playfair Display", serif;
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 4px;
        }
        .byline-sub {
          font-size: 12px;
          color: var(--ink-faint);
          margin: 0 0 16px;
        }
        .disclaimer {
          font-size: 12px;
          line-height: 1.6;
          color: var(--ink-faint);
          max-width: 480px;
          margin: 0 auto;
        }
        @media (max-width: 560px) {
          .court-title {
            font-size: 32px;
          }
          .chambers-row {
            grid-template-columns: 1fr;
          }
          .flow-grid {
            grid-template-columns: 1fr;
          }
          .flow-arrow {
            display: none;
          }
          .rw-step {
            grid-template-columns: 24px 1fr;
          }
          .rw-body {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </main>
  );
}
