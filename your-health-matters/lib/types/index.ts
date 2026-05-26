/**
 * Your Health Guide — Type definitions
 * All data models live here. Import from `@/lib/types`.
 */

// ---------- ORGAN SYSTEMS ----------
export type OrganSystemSlug =
  | "heart"
  | "kidneys"
  | "blood-glucose"
  | "liver"
  | "anti-inflammatory"
  | "gut"
  | "artery-health"
  | "cellular-health"
  | "brain"
  | "skin"
  | "lymphatic"
  | "adrenal"
  | "blood-health"
  | "eyes"
  | "thyroid"
  | "immune"
  | "bones-joints"
  | "lungs";

export interface OrganSystem {
  id: string;
  slug: OrganSystemSlug;
  name: string;
  colorHex: string;
  oneLineSummary: string;
  whatItDoes: string;
  signsOfDistress: string[];
  topFoods: string[]; // food slugs
  topHerbs: string[]; // food slugs (type=herb)
  practicalFirstStep: string;
}

// ---------- INSULIN ZONES ----------
export type InsulinZoneSlug = "peak" | "declining" | "caution" | "closed";

export interface InsulinZone {
  id: string;
  slug: InsulinZoneSlug;
  name: string;
  timeRange: string; // "6am–2pm"
  startHour: number; // 24h
  endHour: number; // 24h
  colorHex: string;
  whatToConsume: string[];
  whatToAvoid: string[];
  whyItMatters: string;
}

// ---------- FOODS (vegetables, fruits, herbs) ----------
export type FoodType = "vegetable" | "fruit" | "herb";

export interface Food {
  id: string;
  slug: string;
  name: string;
  type: FoodType;
  activeCompounds: string[];
  mechanism: string; // why it works, in Dr. Vera voice
  organSystems: OrganSystemSlug[];
  insulinZones: InsulinZoneSlug[];
  preparationNotes?: string;
  pairings?: string[]; // e.g., turmeric pairs with black pepper
  cautions?: string[];
  drugInteractions?: string[];
  culturalTradition?: string; // West African, Ayurvedic, TCM, etc.
  dosage?: string; // for herbs
}

// ---------- JUICES ----------
export interface Juice {
  id: string;
  slug: string;
  name: string;
  ingredients: { food: string; amount: string }[];
  insulinZone: InsulinZoneSlug;
  organSystems: OrganSystemSlug[];
  mechanismNotes: string;
  preparationRules: string[];
  consumeWithinMinutes: number; // default 20
}

// ---------- SALADS ----------
export interface Salad {
  id: string;
  slug: string;
  name: string;
  base: string[];
  additions: string[];
  dressing: string;
  organSystems: OrganSystemSlug[];
  mechanismNotes: string;
  thyroidNote?: string; // cooked vs raw cruciferous
}

// ---------- PROTOCOLS ----------
export type ProtocolLevel = 1 | 2 | 3;

export interface ProtocolStep {
  order: number;
  time?: string; // "6:00am" or null
  action: string;
  rationale: string;
}

export interface Protocol {
  id: string;
  patientLabel: string; // "Patient 1"
  primaryConcerns: string[];
  level: ProtocolLevel;
  morningSequence: ProtocolStep[];
  keyRules: string[];
  kitchenClosesAt: string; // "7:00pm"
  overnightFastHours: { min: number; max: number };
  contraindications?: string[];
}

// ---------- GUIDES ----------
export type GuideTier = "foundational" | "specialty" | "advanced" | "devotional";

export interface GuideSection {
  heading: string;
  content: string[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  pdfPath: string; // relative to /public, e.g. /pdfs/holistic_health_cheatsheet.pdf
  coverImagePath?: string;
  organSystems: OrganSystemSlug[];
  pageCount?: number;
  level: ProtocolLevel | "all";
  tier: GuideTier;
  badge?: string;
  icon?: string;
  accentColor?: string; // hex; legacy decorative hint, not the authoritative color
  sections?: GuideSection[];
  keyFacts?: string[];
  chatScope?: string;
  companionPdfPath?: string; // e.g. quick-reference cheatsheet attached to a parent guide
  comingSoon?: boolean; // true when PDF not yet placed in /public/pdfs
  /**
   * Email-gated guide. When true, the GuideDownloadGate component shows
   * the lead-magnet form modal instead of a direct download link.
   * Foundational + Devotional guides are ungated; Specialty + Advanced are gated.
   * If unset, treat as false (ungated) — see lib/data/guides.ts for the
   * authoritative tier→gated mapping.
   */
  gated?: boolean;
}

// ---------- CLINICAL RULES ----------
export interface ClinicalRule {
  id: string;
  category: "juice" | "salad" | "drug-interaction" | "post-surgery" | "fasting";
  rule: string;
  mechanism: string;
  appliesTo?: string[]; // food slugs, condition names
}

// ---------- TESTIMONIALS ----------
export interface Testimonial {
  id: string;
  patientLabel: string;
  primaryConcern: string;
  whatChanged: string;
  protocolId?: string;
  durationOnProtocol: string;
  consentToShare: boolean;
}
