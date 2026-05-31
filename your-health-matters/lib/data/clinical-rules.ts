import type { ClinicalRule } from "@/lib/types";

/**
 * Clinical non-negotiables.
 * Surface these as inline callouts wherever related content appears.
 */

export const clinicalRules: ClinicalRule[] = [
  // ---------- JUICE RULES ----------
  {
    id: "cr-j-01",
    category: "juice",
    rule: "Consume every juice within 20 minutes of pressing",
    mechanism:
      "Enzymes and water-soluble vitamins begin oxidizing the moment cells are ruptured. After 20 minutes, much of the therapeutic value is lost.",
  },
  {
    id: "cr-j-02",
    category: "juice",
    rule: "Always pair turmeric with black pepper",
    mechanism:
      "Piperine in black pepper raises curcumin absorption by approximately 2,000%. Without it, most curcumin passes through unabsorbed.",
    appliesTo: ["turmeric"],
  },
  {
    id: "cr-j-03",
    category: "juice",
    rule: "Ceylon cinnamon only, never cassia",
    mechanism:
      "Cassia cinnamon contains coumarin, which can be hepatotoxic in regular doses. Ceylon cinnamon is the safe daily choice.",
    appliesTo: ["cinnamon"],
  },
  {
    id: "cr-j-04",
    category: "juice",
    rule: "Juice cucumber and celery with the skin on",
    mechanism:
      "Most of the silica, minerals, and chlorophyll concentrate in and just under the skin. Peeling discards the most therapeutic part.",
    appliesTo: ["cucumber", "celery"],
  },
  {
    id: "cr-j-05",
    category: "juice",
    rule: "Add powdered herbs AFTER juicing",
    mechanism:
      "Powders clog juicer mechanisms and oxidize from heat during pressing. Stir in after the juice is in the glass.",
  },
  {
    id: "cr-j-06",
    category: "juice",
    rule: "Cilantro must be fresh, raw, and paired with chlorella",
    mechanism:
      "Cilantro mobilizes heavy metals from tissues, and chlorella binds them for safe elimination. Without the binder, metals can recirculate.",
    appliesTo: ["cilantro"],
  },

  // ---------- SALAD RULES ----------
  {
    id: "cr-s-01",
    category: "salad",
    rule: "EVOO in every salad",
    mechanism:
      "Extra-virgin olive oil delivers oleocanthal (a natural anti-inflammatory) and the fat needed to absorb fat-soluble vitamins A, D, E, and K from the vegetables.",
  },
  {
    id: "cr-s-02",
    category: "salad",
    rule: "Lemon or ACV in every dressing",
    mechanism:
      "Acidity increases non-heme iron absorption from plant foods by 2–3 times and supports stomach acid for mineral absorption.",
  },
  {
    id: "cr-s-03",
    category: "salad",
    rule: "Eat salad BEFORE the main meal, not after",
    mechanism:
      "Fiber and EVOO consumed first slow the glucose response to whatever follows. Eating salad last loses most of the metabolic benefit.",
  },
  {
    id: "cr-s-04",
    category: "salad",
    rule: "Minimum 1 tablespoon of fresh herbs",
    mechanism:
      "Fresh herbs (parsley, cilantro, dill, basil, mint) deliver concentrated polyphenols and chlorophyll. They are not garnish. They are medicine.",
  },
  {
    id: "cr-s-05",
    category: "salad",
    rule: "Cruciferous vegetables raw, except for thyroid patients",
    mechanism:
      "Raw cruciferous vegetables (kale, broccoli, cabbage, Brussels sprouts) contain goitrogenic compounds that can interfere with thyroid hormone synthesis. Cooking deactivates them.",
    appliesTo: ["kale", "broccoli", "cabbage", "brussels-sprouts"],
  },

  // ---------- POST-CHOLECYSTECTOMY ----------
  {
    id: "cr-pc-01",
    category: "post-surgery",
    rule: "All fat-soluble compounds must pair with dietary fat",
    mechanism:
      "Without a gallbladder, bile release is reduced and intermittent. Fat-soluble compounds (betalains, turmeric, carotenoids, vitamins A/D/E/K, fish oil) need accompanying dietary fat to be absorbed.",
    appliesTo: ["betalains", "turmeric", "carotenoids", "vitamin-a", "vitamin-d", "vitamin-e", "vitamin-k"],
  },
  {
    id: "cr-pc-02",
    category: "post-surgery",
    rule: "Fish oil with food only, never on an empty stomach",
    mechanism:
      "Bile reserves are limited post-cholecystectomy. Fish oil taken without food bypasses what little bile is available and passes through unabsorbed.",
  },
  {
    id: "cr-pc-03",
    category: "post-surgery",
    rule: "Beet juice 5–10 minutes AFTER fish oil + food",
    mechanism:
      "Betalain absorption rises significantly when bile is actively flowing. This precise window pairs the nutrient with peak bile activity.",
  },

  // ---------- DRUG INTERACTIONS ----------
  {
    id: "cr-di-01",
    category: "drug-interaction",
    rule: "Warfarin: avoid grapefruit, nattokinase, high-dose fish oil, and large vitamin K shifts",
    mechanism:
      "Grapefruit inhibits CYP3A4, raising warfarin levels. Nattokinase and fish oil compound anticoagulation. Sudden vitamin K changes unbalance INR.",
    appliesTo: ["warfarin"],
  },
  {
    id: "cr-di-02",
    category: "drug-interaction",
    rule: "Statins: avoid grapefruit and large doses of red yeast rice",
    mechanism:
      "Grapefruit inhibits the enzyme metabolizing statins, raising blood levels and risk of muscle damage. Red yeast rice contains a natural statin and compounds the effect.",
    appliesTo: ["statins"],
  },
  {
    id: "cr-di-03",
    category: "drug-interaction",
    rule: "Thyroid medications: take 4 hours apart from calcium, iron, and high-fiber meals",
    mechanism:
      "Calcium, iron, and fiber bind levothyroxine in the gut and reduce absorption. Spacing protects the effective dose.",
    appliesTo: ["levothyroxine", "thyroid-medications"],
  },
  {
    id: "cr-di-04",
    category: "drug-interaction",
    rule: "Blood pressure medications: hibiscus and large garlic doses may add to lowering effect",
    mechanism:
      "Hibiscus has documented antihypertensive action. Large garlic doses also lower blood pressure. Combined with medication, can cause hypotension.",
    appliesTo: ["antihypertensives"],
  },
];

export const getRulesByCategory = (category: ClinicalRule["category"]): ClinicalRule[] =>
  clinicalRules.filter((r) => r.category === category);

export const getRulesForFood = (foodSlug: string): ClinicalRule[] =>
  clinicalRules.filter((r) => r.appliesTo?.includes(foodSlug));
