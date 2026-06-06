import type { Juice } from "@/lib/types";

/**
 * Healing juice recipes.
 * The full Healing Juice Recipe Guide contains 64 recipes — this file seeds
 * the structure with the patient morning juice plus a few representative examples
 * across each insulin zone.
 *
 * Universal rule: every juice must be consumed within 20 minutes of pressing.
 */

export const juices: Juice[] = [
  {
    id: "j-001",
    slug: "morning-cellular-reset",
    name: "Morning Cellular Reset",
    ingredients: [
      { food: "ginger", amount: "1-inch fresh root" },
      { food: "turmeric", amount: "1-inch fresh root" },
      { food: "orange", amount: "2 whole" },
      { food: "lemon", amount: "1 whole" },
      { food: "green-apple", amount: "2 whole" },
      { food: "carrot", amount: "1 large" },
      { food: "beet", amount: "1 medium" },
    ],
    insulinZone: "peak",
    organSystems: [
      "liver",
      "anti-inflammatory",
      "artery-health",
      "blood-health",
      "cellular-health",
    ],
    mechanismNotes:
      "The morning protocol juice. Beet nitrates relax the vasculature, turmeric quiets inflammation (always with a pinch of black pepper if added), ginger stimulates digestion, and citrus drives phase I/II liver detoxification. Drink within 20 minutes of pressing.",
    preparationRules: [
      "Press fresh, do not store",
      "Add a pinch of fresh-cracked black pepper if including turmeric powder afterward",
      "Drink within 20 minutes",
      "Peak Zone only (6am–2pm)",
    ],
    consumeWithinMinutes: 20,
  },
  {
    id: "j-002",
    slug: "cucumber-celery-kidney-press",
    name: "Cucumber-Celery Kidney Press",
    ingredients: [
      { food: "cucumber", amount: "1 large, skin on" },
      { food: "celery", amount: "4 stalks, leaves on" },
      { food: "lemon", amount: "½ whole" },
      { food: "parsley", amount: "small handful" },
    ],
    insulinZone: "peak",
    organSystems: ["kidneys", "adrenal", "lymphatic"],
    mechanismNotes:
      "A mineral-rich morning press that gently supports kidney filtration. Cucumber and celery juiced with skins on. Parsley adds chlorophyll and a mild diuretic effect.",
    preparationRules: [
      "Skins on for cucumber and celery",
      "Press fresh",
      "Drink within 20 minutes",
      "Excellent first juice of the day before food",
    ],
    consumeWithinMinutes: 20,
  },
  {
    id: "j-003",
    slug: "afternoon-green-quiet",
    name: "Afternoon Green Quiet",
    ingredients: [
      { food: "cucumber", amount: "1 large, skin on" },
      { food: "green-apple", amount: "1 whole" },
      { food: "celery", amount: "3 stalks" },
      { food: "ginger", amount: "½-inch root" },
      { food: "lemon", amount: "½ whole" },
      { food: "leafy-greens", amount: "1 small handful kale or spinach" },
    ],
    insulinZone: "declining",
    organSystems: ["gut", "liver", "anti-inflammatory"],
    mechanismNotes:
      "A low-sugar afternoon option for the Declining Zone (2–6pm). Only one fruit, a green apple, to keep glucose response gentle. Chlorophyll from greens supports oxygenation and gentle detox into evening.",
    preparationRules: [
      "Press fresh",
      "Drink within 20 minutes",
      "Avoid after 6pm",
    ],
    consumeWithinMinutes: 20,
  },
  {
    id: "j-004",
    slug: "evening-herbal-vegetable-press",
    name: "Evening Herbal Vegetable Press",
    ingredients: [
      { food: "cucumber", amount: "1 large" },
      { food: "celery", amount: "4 stalks" },
      { food: "leafy-greens", amount: "1 handful kale" },
      { food: "parsley", amount: "small handful" },
      { food: "lemon", amount: "½ whole" },
    ],
    insulinZone: "caution",
    organSystems: ["kidneys", "lymphatic", "liver"],
    mechanismNotes:
      "A safe Caution Zone (6–9pm) option: no fruit, no starchy roots, no sweetness. A gentle mineral and chlorophyll press for those who want something between dinner and the closed kitchen.",
    preparationRules: [
      "No fruit at this hour",
      "Press fresh",
      "Drink within 20 minutes",
      "Must be consumed by 9pm: after that, only water",
    ],
    consumeWithinMinutes: 20,
  },
];

export const getJuicesByZone = (zone: string): Juice[] =>
  juices.filter((j) => j.insulinZone === zone);

export const getJuiceBySlug = (slug: string): Juice | undefined =>
  juices.find((j) => j.slug === slug);
