/**
 * The six stations of the mind-body loop.
 *
 * Each Mind as Medicine guide teaches one truth at one station along the
 * same circuit: thought arrives → mind sorts it → language wraps it →
 * body answers it → answer is stored → storage becomes the default
 * lens between thoughts → next cycle begins from that default.
 *
 * New guides slot into existing stations. New stations get added here.
 * The architecture is alive.
 */

export interface Station {
  number: 1 | 2 | 3 | 4 | 5 | 6;
  name: string; // short title, e.g. "Perception"
  fullName: string; // longer, e.g. "Perception Fires — the Gap"
  oneLineMechanism: string; // what happens here, in Vera's voice
  colorHex: string; // visual accent for the station card
}

export const STATIONS: Station[] = [
  {
    number: 1,
    name: "Perception",
    fullName: "Perception Fires — the Gap",
    oneLineMechanism:
      "The milliseconds-wide window between thought arriving and the brain scanning it for threat. The trainable lens before any verdict is rendered.",
    colorHex: "#6b5b95",
  },
  {
    number: 2,
    name: "Binary Collapse",
    fullName: "Binary Collapse — the Sort",
    oneLineMechanism:
      "What perception does to the thought in milliseconds. It sorts it into good/bad, safe/dangerous, and erases half the truth in the process.",
    colorHex: "#7a3f4c",
  },
  {
    number: 3,
    name: "Language",
    fullName: "Language — the Sentence Wrapped Around It",
    oneLineMechanism:
      "The words you wrap around the now-collapsed thought decide what your nervous system hears next — accusation or growth, deficit or development.",
    colorHex: "#a88a3d",
  },
  {
    number: 4,
    name: "The Body Answers",
    fullName: "The Body Answers — the 6-Second Cascade",
    oneLineMechanism:
      "HPA axis fires. Adrenaline floods. Heart rate climbs. Breath shallows. Digestion stops. The body cannot tell the difference between a thought and a tiger.",
    colorHex: "#c44a2e",
  },
  {
    number: 5,
    name: "Stored Charge",
    fullName: "Stored Charge — What the Body Holds When the Wave Does Not Clear",
    oneLineMechanism:
      "Cascades that do not complete get stored — as resentment in the fascia, as anxiety in the chest, as inflammation in the bloodstream. The body keeps the score.",
    colorHex: "#3f5e44",
  },
  {
    number: 6,
    name: "Set-Point",
    fullName: "Set-Point — the Default Lens Between Thoughts",
    oneLineMechanism:
      "The resting disposition the mind returns to between waves. Train the set-point and the next cycle begins from peace rather than alarm. This is where the renewal lives.",
    colorHex: "#3d2a5a",
  },
];

export const getStation = (n: number): Station | undefined =>
  STATIONS.find((s) => s.number === n);
