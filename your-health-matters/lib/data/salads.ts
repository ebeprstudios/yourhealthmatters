import type { Salad } from "@/lib/types";

/**
 * Healing salads — starter set.
 * The full Healing Salad Guide contains 47 salads.
 *
 * Universal salad rules:
 * - EVOO always
 * - Lemon or ACV in every dressing (iron absorption boost)
 * - Eat before meals
 * - Minimum 1 tbsp fresh herbs
 * - Cruciferous vegetables RAW — except for thyroid patients (must cook)
 */

export const salads: Salad[] = [
  {
    id: "s-001",
    slug: "liver-cleanse-salad",
    name: "Liver Cleanse Salad",
    base: ["dandelion greens", "arugula", "baby spinach"],
    additions: ["raw beet (grated)", "shaved fennel", "walnuts", "pomegranate seeds"],
    dressing: "EVOO, fresh lemon juice, Dijon mustard, sea salt, cracked pepper",
    organSystems: ["liver", "blood-health", "heart"],
    mechanismNotes:
      "Bitter greens (dandelion, arugula) stimulate bile flow. Raw beet brings betalains for liver phase II detox. Pomegranate's punicalagins protect the vasculature. Lemon in the dressing both supports liver enzymes and boosts iron absorption from the greens.",
  },
  {
    id: "s-002",
    slug: "blood-glucose-stabilizer",
    name: "Blood Glucose Stabilizer Salad",
    base: ["mixed leafy greens", "watercress"],
    additions: [
      "avocado",
      "cucumber",
      "raw red onion (thin)",
      "pumpkin seeds",
      "crumbled feta (optional)",
      "fresh cilantro and mint",
    ],
    dressing:
      "EVOO, apple cider vinegar, fresh lime juice, ½ tsp cinnamon (Ceylon only), pinch of sea salt",
    organSystems: ["blood-glucose", "anti-inflammatory", "gut"],
    mechanismNotes:
      "ACV blunts post-meal glucose spikes. Avocado's monounsaturated fat slows carbohydrate absorption. Cinnamon supports insulin sensitivity. Eaten before the main meal, this salad changes the glucose curve of everything that follows.",
  },
  {
    id: "s-003",
    slug: "thyroid-warming-salad",
    name: "Thyroid Warming Salad (Cooked Cruciferous)",
    base: ["lightly steamed kale", "lightly steamed broccoli florets"],
    additions: [
      "brazil nuts (2–3, chopped)",
      "pumpkin seeds",
      "roasted sweet potato cubes",
      "sea vegetables (wakame or dulse, optional)",
      "fresh parsley",
    ],
    dressing:
      "EVOO, lemon juice, raw apple cider vinegar, minced garlic, pinch of sea salt",
    organSystems: ["thyroid", "adrenal", "immune"],
    mechanismNotes:
      "Built for thyroid patients: all cruciferous vegetables are lightly cooked to reduce goitrogenic compounds. Brazil nuts deliver selenium for T4→T3 conversion. Pumpkin seeds add zinc. Sea vegetables provide gentle iodine.",
    thyroidNote:
      "Cruciferous vegetables (kale, broccoli, cabbage, Brussels sprouts) MUST be cooked for thyroid patients. Raw forms can interfere with thyroid hormone synthesis.",
  },
  {
    id: "s-004",
    slug: "gut-rebuild-salad",
    name: "Gut Rebuild Salad",
    base: ["butter lettuce", "baby spinach"],
    additions: [
      "shredded raw carrot",
      "fermented vegetables (sauerkraut or kimchi, 2 tbsp)",
      "avocado",
      "soft-boiled egg",
      "fresh dill and parsley",
    ],
    dressing: "EVOO, fresh lemon juice, raw honey, pinch of sea salt",
    organSystems: ["gut", "immune", "skin"],
    mechanismNotes:
      "Fermented vegetables deliver live cultures directly to the colon. Avocado and EVOO provide the fat-soluble vitamins (A, D, E, K) needed for gut barrier repair. Soft-boiled egg adds choline and easily-digestible protein.",
  },
];

export const getSaladBySlug = (slug: string): Salad | undefined =>
  salads.find((s) => s.slug === slug);

export const getSaladsByOrganSystem = (systemSlug: string): Salad[] =>
  salads.filter((s) => s.organSystems.includes(systemSlug as never));
