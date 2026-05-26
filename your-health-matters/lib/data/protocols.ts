import type { Protocol } from "@/lib/types";

/**
 * Patient protocols — three reference cases.
 * Patient 1 is the active protocol with the full morning sequence.
 * Patients 2 and 3 are structural references with their key non-negotiables.
 */

export const protocols: Protocol[] = [
  {
    id: "p-001",
    patientLabel: "Patient 1",
    primaryConcerns: [
      "Raise HDL / lower LDL",
      "Improve kidney function",
      "Stabilize blood glucose",
    ],
    level: 2,
    morningSequence: [
      {
        order: 1,
        time: "On waking",
        action: "16oz water with sea salt and lemon",
        rationale:
          "Rehydrates after the overnight fast, replenishes electrolytes, and gently signals the adrenals that morning has begun.",
      },
      {
        order: 2,
        time: "+ 15 minutes",
        action: "Cucumber-celery juice (skins on, fresh, within 20 minutes)",
        rationale:
          "Mineral-rich, gentle diuretic action for kidney support. Consumed before any food to deliver electrolytes and chlorophyll on an empty stomach.",
      },
      {
        order: 3,
        time: "+ 30 minutes",
        action:
          "Breakfast: egg whites, leafy greens, avocado (substitute seed crackers for bread if doing avocado toast)",
        rationale:
          "Protein and fat-forward meal with no glucose spike. Avocado delivers monounsaturated fat for HDL support. Greens provide folate and magnesium.",
      },
      {
        order: 4,
        time: "With meals",
        action: "Chromium Picolinate 400mcg",
        rationale:
          "Supports insulin receptor sensitivity and glucose uptake at the cellular level.",
      },
      {
        order: 5,
        time: "15 minutes before each meal",
        action: "1 tbsp apple cider vinegar in 8oz water",
        rationale:
          "Acetic acid blunts post-meal glucose response and supports stomach acid for mineral absorption.",
      },
      {
        order: 6,
        time: "After every meal",
        action: "10-minute walk",
        rationale:
          "Muscle contraction clears glucose from the bloodstream independent of insulin. The single most effective post-meal habit for glucose stability.",
      },
      {
        order: 7,
        time: "7:00pm",
        action: "Kitchen closes — no more food",
        rationale:
          "Begins the 12–16 hour overnight fast required for autophagy, liver detox, and lymphatic clearance.",
      },
    ],
    keyRules: [
      "Morning juice is the Peak Zone Cellular Reset: ginger, turmeric, 2 oranges, lemon, 2 green apples, carrot, beet",
      "All juices consumed within 20 minutes of pressing",
      "Seed crackers permanently replace bread for avocado toast",
      "ACV before every meal",
      "Walk after every meal",
    ],
    kitchenClosesAt: "7:00pm",
    overnightFastHours: { min: 12, max: 16 },
  },
  {
    id: "p-002",
    patientLabel: "Patient 2",
    primaryConcerns: ["Cancer support", "Arthritis", "On warfarin"],
    level: 3,
    morningSequence: [
      {
        order: 1,
        time: "On waking",
        action: "16oz water with lemon (no grapefruit — warfarin interaction)",
        rationale:
          "Standard morning rehydration. Grapefruit must be avoided entirely with warfarin.",
      },
      {
        order: 2,
        time: "Breakfast",
        action: "Cooked vegetables only (no raw)",
        rationale:
          "Raw vegetables can be hard on compromised digestion and the immune profile of cancer patients. Cooked vegetables are gentler and still therapeutic.",
      },
    ],
    keyRules: [
      "NO grapefruit — interferes with warfarin",
      "Cooked vegetables only — no raw",
      "Turkey tail mushroom (immune support, well-studied in oncology)",
      "Turmeric ALWAYS with black pepper",
      "Vitamin K1/K2 intake stable (no large day-to-day shifts) while on warfarin",
    ],
    kitchenClosesAt: "7:00pm",
    overnightFastHours: { min: 12, max: 14 },
    contraindications: [
      "No grapefruit",
      "No nattokinase",
      "No high-dose fish oil without physician approval",
      "Stable vitamin K intake required",
    ],
  },
  {
    id: "p-003",
    patientLabel: "Patient 3",
    primaryConcerns: ["Diabetes", "Cholecystectomy (gallbladder removed)"],
    level: 2,
    morningSequence: [
      {
        order: 1,
        time: "On waking",
        action: "16oz water with lemon and sea salt",
        rationale: "Standard morning rehydration.",
      },
      {
        order: 2,
        time: "+ 15 minutes",
        action: "Fish oil WITH food (not on empty stomach)",
        rationale:
          "Without a gallbladder, bile release is reduced. Fish oil must be taken with dietary fat to ensure absorption.",
      },
      {
        order: 3,
        time: "+ 5–10 minutes after fish oil and food",
        action: "Beet juice (small amount, Peak Zone)",
        rationale:
          "Betalain absorption rises significantly when paired with fish oil. The timing window matters.",
      },
    ],
    keyRules: [
      "ALL fat-soluble compounds must pair with dietary fat (turmeric, carotenoids, vitamins A/D/E/K, betalains)",
      "Fish oil with food only — never empty stomach",
      "Beet juice 5–10 minutes after fish oil for absorption synergy",
      "Smaller, more frequent meals due to reduced bile reserve",
    ],
    kitchenClosesAt: "7:00pm",
    overnightFastHours: { min: 12, max: 14 },
  },
];

export const getProtocolById = (id: string): Protocol | undefined =>
  protocols.find((p) => p.id === id);
