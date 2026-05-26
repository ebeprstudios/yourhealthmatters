import type { Guide } from "@/lib/types";

/**
 * The full Your Health Guide guide library.
 *
 * Tiers:
 *   foundational — Level 1. The educational backbone. Every reader starts here.
 *   specialty    — condition-specific guides for readers with a specific focus.
 *   advanced     — Level 3 multi-system protocols. Visible to all in 2A,
 *                  gated behind membership in Phase 2C.
 *   devotional   — surfaced at /devotional, linked from footer only.
 *
 * Content authority: long-form `sections`, `keyFacts`, and `chatScope` are
 * preserved from the legacy lib/guides.ts so dynamic guide pages keep their
 * existing teaching bodies. Metadata-only entries are marked `comingSoon`
 * until the PDF lands at the referenced pdfPath.
 */

export const guides: Guide[] = [
  // ────────────────────────────────────────────────────────────────────
  // FOUNDATIONAL — Level 1, all readers
  // ────────────────────────────────────────────────────────────────────
  {
    id: "g-01",
    slug: "holistic-health-cheatsheet",
    title: "Holistic Health Cheat Sheet",
    subtitle:
      "Your complete daily protocol — cholesterol, glucose, and kidney health",
    description:
      "The master daily reference for managing LDL/HDL cholesterol, blood glucose stability, and kidney function simultaneously through food, timing, and supplement protocols.",
    pdfPath: "/pdfs/holistic_health_cheatsheet.pdf",
    organSystems: [
      "heart",
      "kidneys",
      "blood-glucose",
      "liver",
      "gut",
      "anti-inflammatory",
    ],
    level: "all",
    tier: "foundational",
    badge: "Daily Protocol",
    icon: "🌿",
    accentColor: "#085041",
    keyFacts: [
      "Lower LDL + raise HDL through food alone",
      "Stabilize blood glucose without medication",
      "Support kidney filtration naturally",
      "Complete morning-to-night protocol",
    ],
    sections: [
      {
        heading: "The Three-Goal Framework",
        content: [
          "Most health protocols address one condition at a time. This guide addresses three simultaneously — because the body does not operate in isolation. Cholesterol, blood glucose, and kidney function are deeply interconnected.",
          "The foods and timing protocols in this guide are selected specifically because they serve all three goals at once rather than helping one while harming another.",
        ],
      },
      {
        heading: "Raising HDL and Lowering LDL",
        content: [
          "HDL acts as a reverse cholesterol transporter — it picks up excess cholesterol from arterial walls and returns it to the liver for clearance. Raising HDL is as important as lowering LDL, and is achieved through specific foods: avocado, extra virgin olive oil, walnuts, flaxseed, edamame, berries, and pomegranate.",
          "Pomegranate is unique — it is the only food shown to simultaneously raise HDL AND reverse existing arterial plaque through its punicalagin compounds.",
          "LDL reduction is primarily a fiber story. Soluble fiber from oats, psyllium, lentils, apples, and flaxseed binds bile acids in the gut before they can reabsorb, forcing the liver to convert more cholesterol into new bile — directly lowering circulating LDL.",
        ],
      },
      {
        heading: "Blood Glucose Stabilization",
        content: [
          "Insulin sensitivity follows a predictable daily curve: highest between 6am and 10am, declining through the afternoon, at its lowest after 6pm.",
          "Fiber-first eating at every meal creates a physical barrier in the gut that slows glucose absorption from everything eaten after.",
          "Ceylon cinnamon activates GLUT4 glucose transporters independently of insulin. Apple cider vinegar before meals inhibits alpha-glucosidase. Chromium Picolinate (400mcg with meals) supports insulin receptor function.",
        ],
      },
      {
        heading: "Kidney Support Protocol",
        content: [
          "The cornerstone kidney food is cucumber: 96% water content, virtually zero phosphorus, silica for cellular membrane integrity. Juiced with skin on every morning.",
          "Lemon citrate from half a lemon in morning water is the most effective natural kidney stone prevention compound studied.",
        ],
      },
      {
        heading: "The Daily Protocol",
        content: [
          "Rising: 16oz water with sea salt and fresh lemon juice.",
          "Morning: Cucumber celery juice (skin on both) — kidney flush and hydration.",
          "Breakfast: Egg whites with leafy greens and avocado.",
          "With every meal: ACV in water before. Chromium Picolinate with. 10–15 minute walk after.",
          "Kitchen closes at 7pm. The overnight fasting window is when the liver completes its deepest detox work.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about this Holistic Health Cheat Sheet. Focus on cholesterol management (LDL/HDL), blood glucose stabilization, kidney health, the daily protocol, supplement timing (Chromium Picolinate 400mcg), and the three-goal framework.",
  },

  {
    id: "g-02",
    slug: "insulin-activity-guide",
    title: "Insulin Activity Guide",
    subtitle: "The 24-hour curve that determines when every food heals or harms",
    description:
      "A complete visual and clinical guide to the daily insulin sensitivity curve — showing exactly when to eat fruit, juice, carbohydrates, and healing foods for maximum benefit.",
    pdfPath: "/pdfs/insulin_activity.pdf",
    organSystems: ["blood-glucose", "liver", "adrenal"],
    level: "all",
    tier: "foundational",
    badge: "4 Time Zones",
    icon: "📊",
    accentColor: "#633806",
    keyFacts: [
      "Insulin sensitivity peaks 9–10am",
      "Same meal = 2–3x more glucose spike at 6pm vs 8am",
      "Fruit is medicine before 2pm, triglycerides after 9pm",
      "Walk 10 min after meals — free glucose intervention",
    ],
    sections: [
      {
        heading: "Why Timing Matters More Than You Think",
        content: [
          "The same food produces dramatically different effects in the body depending on when it is eaten. A banana at 8am enters a metabolic environment where insulin sensitivity is at its daily maximum.",
          "The same banana eaten at 9pm enters an environment where insulin sensitivity is near its daily minimum. The fructose now bypasses glucose metabolism and routes directly to the liver for triglyceride synthesis — raising LDL and increasing cardiovascular risk overnight.",
        ],
      },
      {
        heading: "The Four Insulin Zones",
        content: [
          "Peak Zone (6am–2pm): All juices, all fruits, high-nutrient dense foods, and healing protocols belong here.",
          "Declining Zone (2pm–6pm): Low-sugar juices only. Vegetable-dominant meals.",
          "Caution Zone (6pm–9pm): No fruit. Pure vegetable and herb juices only.",
          "Closed Zone (9pm–sleep): No juice. Water only.",
        ],
      },
      {
        heading: "The Morning Juice Window",
        content: [
          "The morning window from 6am to 2pm is when all therapeutic juicing should occur.",
          "Rule: Always drink fresh juice within 20 minutes of pressing. Oxidation begins immediately.",
        ],
      },
      {
        heading: "The Walk Protocol",
        content: [
          "A 10–15 minute walk after every meal is one of the most evidence-supported free interventions for blood glucose management.",
          "Studies consistently show a 20–30% reduction in post-meal glucose peaks with a light walk compared to sitting.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about insulin sensitivity, the 24-hour insulin activity curve, the four time zones (Peak 6am–2pm, Declining 2–6pm, Caution 6–9pm, Closed 9pm+), when to eat fruit and juice, and how meal timing affects LDL, HDL, triglycerides, and blood glucose.",
  },

  {
    id: "g-03",
    slug: "complete-vegetable-guide",
    title: "Complete Vegetable Guide",
    subtitle: "180 vegetables mapped across all 18 organ systems",
    description:
      "Every major healing vegetable organized by the body system it most powerfully supports — from heart and kidneys to brain, lungs, and cellular repair.",
    pdfPath: "/pdfs/complete_vegetable_guide.pdf",
    companionPdfPath: "/pdfs/vegetable_cheatsheet.pdf",
    organSystems: [
      "heart",
      "kidneys",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "artery-health",
      "cellular-health",
      "brain",
      "skin",
      "lymphatic",
      "adrenal",
      "blood-health",
      "eyes",
      "thyroid",
      "immune",
      "bones-joints",
      "lungs",
    ],
    level: "all",
    tier: "foundational",
    badge: "180 Cards",
    icon: "🥦",
    accentColor: "#1A4D1A",
    keyFacts: [
      "Spinach spans 13 organ systems",
      "Broccoli sulforaphane activates Nrf2 antioxidant switch",
      "Watercress has highest antioxidant density of any vegetable",
      "Lion's Mane — only food that regenerates myelin",
    ],
    sections: [
      {
        heading: "Why Vegetables Are Medicine",
        content: [
          "The difference between a vegetable and a pharmaceutical is largely a matter of concentration and delivery mechanism. Broccoli sulforaphane activates the Nrf2 pathway — the master antioxidant switch that governs over 200 protective genes.",
          "Kale's bile acid binding activity removes LDL cholesterol from the gut before it absorbs — the same mechanism as cholestyramine, a prescription cholesterol medication.",
        ],
      },
      {
        heading: "The 18 Organ Systems Framework",
        content: [
          "This guide organizes all vegetables by their primary organ system target. Many vegetables span multiple systems. Spinach appears in 13 of the 18 systems — making it the most cross-system healing vegetable catalogued.",
        ],
      },
      {
        heading: "Raw vs Cooked — The Critical Distinction",
        content: [
          "Broccoli and all cruciferous vegetables: chop and wait 40 minutes before cooking. This allows the myrosinase enzyme to convert glucoraphanin to sulforaphane before heat neutralizes the enzyme.",
          "Thyroid patients: all cruciferous vegetables must be cooked. Raw glucosinolates compete with iodine for thyroid uptake.",
          "Garlic: crush or mince and wait 10 minutes before cooking. Alliin and alliinase need time to form allicin before heat denatures the enzyme.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about healing vegetables, the 18 organ systems, which vegetables serve which body systems, raw vs cooked distinctions, and specific vegetables for cholesterol, glucose, kidney, liver, inflammation, gut, and brain health.",
  },

  {
    id: "g-04",
    slug: "complete-fruit-guide",
    title: "Complete Fruit Guide",
    subtitle: "180 fruits mapped across 18 organ systems with insulin timing",
    description:
      "Every major healing fruit organized by organ system — with critical insulin timing guidance showing when each fruit heals and when it harms.",
    pdfPath: "/pdfs/complete_fruit_guide.pdf",
    organSystems: [
      "heart",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "cellular-health",
      "brain",
      "skin",
      "blood-health",
      "eyes",
      "immune",
    ],
    level: "all",
    tier: "foundational",
    badge: "180 Cards",
    icon: "🍊",
    accentColor: "#7C2D12",
    keyFacts: [
      "Kiwi spans 13 organ systems",
      "Pomegranate reverses arterial plaque — unique in the plant kingdom",
      "Elderberry blocks viral cell entry — only fruit with this mechanism",
      "All high-sugar fruit: morning window only",
    ],
    sections: [
      {
        heading: "Fruit Is Medicine — In the Right Window",
        content: [
          "Fruit has been unfairly demonized in low-carbohydrate frameworks that fail to account for timing. The fiber, polyphenols, enzymes, and micronutrients in whole fruit fundamentally alter how the sugar is metabolized. But timing still matters.",
          "In the morning Peak Zone, fruit fructose is efficiently converted to glucose and glycogen — fuel for the body and brain. After 9pm, the same fructose routes to hepatic lipogenesis — the liver converts it directly to triglycerides, raising LDL overnight.",
        ],
      },
      {
        heading: "The Most Powerful Healing Fruits",
        content: [
          "Pomegranate: the only food shown to simultaneously raise HDL, lower LDL, AND reverse existing arterial plaque. Urolithin A triggers mitophagy — the cellular process of clearing damaged mitochondria.",
          "Kiwi: spans 13 organ systems. Actinidin — most studied natural compound for gastric emptying.",
          "Elderberry: the only fruit compound proven to physically block viral entry into cells.",
          "Blueberries: pterostilbene activates sirtuins — longevity proteins. Anthocyanins cross the blood-brain barrier and stimulate BDNF within 12 weeks of daily consumption.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about healing fruits, which fruits serve which organ systems, when to eat fruit based on insulin timing, pomegranate for artery health, kiwi for digestion, blueberries for brain, elderberry for immune defense, and global healing fruits like baobab and amla.",
  },

  {
    id: "g-05",
    slug: "complete-herb-guide",
    title: "Complete Herb Guide",
    subtitle: "180 herbs with dosages, preparations, and organ system targets",
    description:
      "A clinical reference for 180 medicinal herbs organized by organ system — including exact dosages, preparation methods, safety profiles, and herb-drug interactions.",
    pdfPath: "/pdfs/complete_herb_guide.pdf",
    organSystems: [
      "heart",
      "kidneys",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "artery-health",
      "cellular-health",
      "brain",
      "skin",
      "lymphatic",
      "adrenal",
      "blood-health",
      "eyes",
      "thyroid",
      "immune",
      "bones-joints",
      "lungs",
    ],
    level: 2,
    tier: "foundational",
    badge: "180 Herbs + Safety",
    icon: "🌱",
    accentColor: "#064E3B",
    keyFacts: [
      "Berberine clinically comparable to low-dose statins",
      "Ashwagandha reduces cortisol 28% — RCT confirmed",
      "Turmeric + black pepper = 2000% absorption increase",
      "Milk thistle silymarin: gold standard liver protection",
    ],
    sections: [
      {
        heading: "Herbs Are Not Supplements — They Are Medicine",
        content: [
          "The distinction between a supplement and a medicine is largely regulatory, not biochemical. Berberine activates AMPK — the same cellular pathway as metformin, the most prescribed diabetes medication in the world.",
          "Milk thistle silymarin is used in European hospitals as a treatment for Amanita mushroom poisoning. The evidence base for silymarin is not complementary — it is clinical.",
        ],
      },
      {
        heading: "Key Herbs for the Three Core Goals",
        content: [
          "Cholesterol: Berberine (500mg 2–3x/day with meals) — inhibits PCSK9 and activates AMPK simultaneously.",
          "Blood Glucose: Ceylon cinnamon (1g/day — always Ceylon, never Cassia) — cinnamaldehyde activates GLUT4 glucose transporters. Gymnema sylvestre (400mg before meals) — blocks sugar absorption at the intestinal level.",
          "Kidneys: Dandelion root — potassium-sparing diuretic. Chanca piedra — phyllanthin inhibits calcium oxalate crystal formation.",
        ],
      },
      {
        heading: "Critical Safety Information",
        content: [
          "Blood thinners + garlic/ginger/fish oil/vitamin E = increased bleeding risk.",
          "Diabetes medication + berberine/cinnamon/bitter melon = enhanced hypoglycemic effect — monitor glucose carefully.",
          "SSRIs + St. John's Wort = serotonin syndrome risk.",
          "For anyone on multiple medications, run every herb through an herb-drug interaction checker before beginning.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about medicinal herbs, their dosages and preparations, which herbs serve which organ systems, Ayurvedic herbs, TCM herbs, West African and Amazon herbs, berberine vs metformin, milk thistle for liver, herb-drug interactions, and how to build a complete herbal protocol.",
  },

  {
    id: "g-06",
    slug: "healing-juice-recipe-guide",
    title: "Healing Juice Recipe Guide",
    subtitle: "64 therapeutic juice recipes mapped to insulin time zones",
    description:
      "Sixty-four healing juice recipes organized by organ system and insulin zone — with preparation rules, mechanisms, and exact timing for maximum therapeutic benefit.",
    pdfPath: "/pdfs/juice_recipe_guide.pdf",
    organSystems: [
      "heart",
      "kidneys",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "artery-health",
      "blood-health",
      "immune",
    ],
    level: "all",
    tier: "foundational",
    badge: "64 Recipes",
    icon: "🥤",
    accentColor: "#0F4C6E",
    keyFacts: [
      "Every recipe has an insulin zone badge",
      "Turmeric + black pepper = 2000% absorption",
      "Drink within 20 minutes of pressing",
      "Cucumber + celery always juiced with skin on",
    ],
    sections: [
      {
        heading: "Juicing as Concentrated Medicine",
        content: [
          "Fresh juice delivers the therapeutic compounds of 10–15 servings of vegetables in a single glass — without the digestive work of breaking down fiber.",
          "The key distinction between therapeutic juicing and wellness juicing is precision: exact ingredients, exact quantities, exact timing, and exact preparation rules that preserve the active compounds.",
        ],
      },
      {
        heading: "The 8 Preparation Rules",
        content: [
          "Rule 1: Drink within 20 minutes. Oxidation begins immediately after pressing.",
          "Rule 2: Turmeric always with black pepper. Piperine increases curcumin absorption by 2000%.",
          "Rule 3: Ceylon cinnamon only — never Cassia. Cassia contains high coumarin levels that can cause liver damage with daily use.",
          "Rule 4: Cucumber and celery always with skin on. The silica lives primarily in the skin.",
          "Rule 5: Add powdered herbs after juicing — never through the juicer.",
          "Rule 6: Fat-soluble compounds require dietary fat. Blend turmeric juice with coconut oil or consume alongside avocado.",
          "Rule 7: Cilantro must be fresh and raw — always. Its chelating compounds are heat-volatile.",
          "Rule 8: When using cilantro for chelation, always pair with chlorella.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about therapeutic juicing, the 64 juice recipes, the insulin time zones for juice consumption, the 8 preparation rules, specific juice recipes for cholesterol, glucose, kidney, liver, brain, and immune health.",
  },

  {
    id: "g-07",
    slug: "healing-salad-guide",
    title: "Healing Salad Guide",
    subtitle: "47 therapeutic salads organized by organ system",
    description:
      "Forty-seven healing salads — each a precise combination of vegetables, herbs, fruits, and dressings engineered to target specific organ systems with maximum bioavailability.",
    pdfPath: "/pdfs/healing_salad_guide-2.pdf",
    organSystems: [
      "heart",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "cellular-health",
      "skin",
      "blood-health",
      "thyroid",
      "bones-joints",
    ],
    level: "all",
    tier: "foundational",
    badge: "47 Salads",
    icon: "🥗",
    accentColor: "#166534",
    keyFacts: [
      "Eat salad first — fiber buffers everything after",
      "EVOO + lemon in every dressing — iron absorption +300%",
      "Turmeric in dressing always with black pepper",
      "Each salad targets a specific organ system",
    ],
    sections: [
      {
        heading: "The Salad as a Delivery System",
        content: [
          "A healing salad is an engineered nutrient delivery system. Every component is chosen for bioavailability interaction: fat-soluble vitamins are paired with olive oil. Vitamin C from lemon is paired with iron-rich greens for 300% absorption enhancement.",
          "Eating salad first at every meal creates a fiber matrix in the gut that buffers the glucose response of every food consumed afterward.",
        ],
      },
      {
        heading: "The Salad Formula",
        content: [
          "Every salad is built on the same framework: Greens Base + Vegetables + Herbs + Fruit (morning meals only) + Dressing.",
          "Greens Base: kale, spinach, arugula, watercress, romaine, dandelion, beet greens.",
          "Fresh Herbs: one tablespoon of fresh herbs is a therapeutic dose — not a garnish.",
          "Dressing: always olive oil. Always lemon or ACV. Always black pepper if turmeric is present. Never bottled dressings.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about healing salads, the salad formula, the 47 salad recipes by organ system, why to eat salad first at every meal, dressing rules (EVOO always, lemon/ACV always, turmeric with black pepper), and how to build a salad for specific conditions.",
  },

  {
    id: "g-08",
    slug: "healing-foods-guide",
    title: "Healing Foods Reference Guide",
    subtitle:
      "Lean proteins, leafy greens, complex carbs, healthy fats — plus global healing foods",
    description:
      "A comprehensive reference for 75+ healing foods across four categories — including global foods from West African, Ayurvedic, TCM, Caribbean, and Amazon traditions not found in standard Western nutrition.",
    pdfPath: "/pdfs/healing_foods_guide.pdf",
    organSystems: [
      "heart",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "cellular-health",
      "brain",
      "skin",
      "blood-health",
      "immune",
    ],
    level: "all",
    tier: "foundational",
    badge: "75+ Foods · 9 Traditions",
    icon: "🌍",
    accentColor: "#44403C",
    keyFacts: [
      "Forbidden (Black) Rice has more anthocyanins than blueberries",
      "Moringa has 25x more iron than spinach per gram",
      "Black seed oil studied in 400+ peer-reviewed papers",
      "Ghee increases fat-soluble herb bioavailability 5–10x",
    ],
    sections: [
      {
        heading: "Beyond Western Nutrition",
        content: [
          "Western nutrition science has catalogued approximately 8% of the healing properties that traditional medicine systems have documented across millennia.",
          "This guide intentionally crosses those boundaries. Every food from a non-Western tradition is marked with its origin — not as an exotic curiosity but as a clinical acknowledgment that these traditions discovered real mechanisms through observation long before the tools to explain them existed.",
        ],
      },
      {
        heading: "Forbidden Rice — The Emperor's Grain",
        content: [
          "Black rice was reserved for Chinese Emperors and forbidden to commoners who grew it under penalty. The black pigment contains more anthocyanin per gram than blueberries.",
          "Glycemic index of 42–45 — meaningfully lower than brown rice at 68. When cooled overnight, resistant starch increases further.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about healing foods across four categories (lean proteins, leafy greens, complex carbs with fiber, healthy fats), global healing foods from West African, Ayurvedic, TCM, Caribbean, Amazon, and Mediterranean traditions, black (forbidden) rice, moringa, ghee, black seed oil, and how to incorporate global healing foods into a daily protocol.",
  },

  {
    id: "g-09",
    slug: "overnight-body-repair",
    title: "What Your Body Does While You Sleep",
    subtitle:
      "The 7pm–6am overnight repair window — why the fast is non-negotiable",
    description:
      "A complete visual and clinical guide to the overnight repair cycle — GH pulses, liver Phase II detox, autophagy, glymphatic brain flush, and exactly what to eat (or not eat) in each phase.",
    pdfPath: "/pdfs/overnight_body_visual.pdf",
    organSystems: ["liver", "lymphatic", "brain", "immune", "adrenal"],
    level: "all",
    tier: "foundational",
    badge: "4 Phases · 11 Hours",
    icon: "🌙",
    accentColor: "#1B2A5C",
    keyFacts: [
      "GH pulses at 70–80% of daily total during first sleep cycle",
      "Autophagy peaks at 12–3am — halted immediately by food",
      "Glymphatic brain flush only activates during sleep",
      "7pm to 6am = 11 hours = full overnight repair activation",
    ],
    sections: [
      {
        heading: "The Overnight Repair Principle",
        content: [
          "The body cannot repair and digest simultaneously. It always chooses digestion first. When food is present, every repair process — growth hormone secretion, autophagy, liver Phase II detox, glymphatic flushing — is deprioritized or halted entirely.",
          "The 11-hour window from 7pm to 6am, properly protected from food, activates a cascade of repair processes that no supplement, medication, or intervention can replicate.",
        ],
      },
      {
        heading: "Peak Repair Phase (12–3am)",
        content: [
          "Liver Phase II detox reaches its daily peak. Methylation, glucuronidation, and sulfation run at full capacity between 1–3am.",
          "Autophagy reaches its maximum. Cells consume and recycle their own damaged proteins and dysfunctional organelles.",
          "The glymphatic system activates exclusively during sleep — flushing amyloid-beta proteins, tau proteins, and metabolic waste that accumulate during waking hours.",
          "Any food consumed during this window halts autophagy immediately.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about the overnight repair cycle (7pm–6am), growth hormone secretion, autophagy and when it activates, glymphatic brain flushing, liver Phase II detox (1–3am peak), what to eat in each phase, why the kitchen closes at 7pm, and the morning rising protocol.",
  },

  {
    id: "g-10",
    slug: "daytime-body-active",
    title: "What Your Body Does While You're Awake",
    subtitle: "The 6am–7pm active window — when to eat, move, and heal",
    description:
      "A complete visual guide to daytime hormone activity — cortisol peaks, insulin sensitivity windows, muscle performance timing, and exact protocols for each phase of the active day.",
    pdfPath: "/pdfs/daytime_body_visual.pdf",
    organSystems: [
      "heart",
      "blood-glucose",
      "liver",
      "gut",
      "adrenal",
      "brain",
      "lungs",
    ],
    level: "all",
    tier: "foundational",
    badge: "4 Phases · 13 Hours",
    icon: "☀️",
    accentColor: "#B45309",
    keyFacts: [
      "Cortisol peaks at 8am — the body's natural ignition",
      "Insulin sensitivity peaks 9–10am — best nutrient window",
      "Muscle performance peaks 2–3pm — best exercise window",
      "Melatonin precursors begin rising after 4pm",
    ],
    sections: [
      {
        heading: "The Active Day Curve",
        content: [
          "Every hormone in the body follows a predictable daily rhythm. Cortisol peaks at 8am, providing natural energy and mental clarity. Insulin sensitivity peaks between 9–10am. Muscle performance peaks around 2–3pm.",
          "Eating with this curve — not against it — is the single most impactful change available without any medication or supplement.",
        ],
      },
      {
        heading: "Morning Activation (6–9am)",
        content: [
          "Cortisol peaks at 8am — the natural alarm clock. This is designed morning energy, not stress.",
          "Insulin sensitivity is at its daily maximum. This is the best window for fruit, high-nutrient dense foods, and all therapeutic juices.",
          "The rising protocol: 16oz water + sea salt + lemon — then cucumber celery juice — then Insulin Primer juice 15 minutes before breakfast.",
        ],
      },
      {
        heading: "Afternoon Wind-Down (3–7pm)",
        content: [
          "The 3pm energy dip is cortisol-related, not food-related. A brief walk activates GLUT4 and produces the same mental lift as caffeine without the subsequent crash.",
          "Insulin sensitivity is at its daily low. The same carbohydrate load at 6pm produces a 2–3x higher glucose spike than at 8am.",
          "Kitchen closes at 7pm. The overnight repair cycle begins.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about daytime hormone activity, the morning activation phase, peak metabolic window, midday maintenance, afternoon wind-down, best times to exercise, eat, juice, and supplement, the 3pm energy dip, and how to structure a healing day from 6am to 7pm.",
  },

  // ────────────────────────────────────────────────────────────────────
  // SPECIALTY — condition-specific (Level 2)
  // ────────────────────────────────────────────────────────────────────
  {
    id: "g-11",
    slug: "heart-rate-recovery-guide",
    title: "Heart Rate Recovery Guide",
    subtitle:
      "Food, breath, and movement protocols that improve heart rate recovery week over week",
    description:
      "A focused protocol for improving heart rate recovery — the single most predictive marker of cardiovascular longevity — through nutrient timing, vagal-tone breath work, and graded movement.",
    pdfPath: "/pdfs/heart_rate_recovery_guide.pdf",
    organSystems: ["heart", "artery-health", "adrenal", "lungs"],
    level: 2,
    tier: "specialty",
    badge: "Cardiac Recovery",
    icon: "❤️",
    accentColor: "#B5273E",
    comingSoon: true,
  },

  {
    id: "g-12",
    slug: "quinoa-diabetic-guide",
    title: "Quinoa Diabetic Guide",
    subtitle:
      "Why quinoa earns the rare green-light for blood glucose patients — and how to prepare it",
    description:
      "A focused guide for type 2 diabetics and insulin-resistance patients on the only grain consistently safe across the insulin curve — covering preparation, pairing, and portion rules.",
    pdfPath: "/pdfs/quinoa_diabetic_guide.pdf",
    organSystems: ["blood-glucose", "gut", "heart"],
    level: 2,
    tier: "specialty",
    badge: "Diabetes Support",
    icon: "🌾",
    accentColor: "#D4A017",
    comingSoon: true,
  },

  {
    id: "g-13",
    slug: "the-7-day-reset",
    title: "The 7-Day Reset",
    subtitle:
      "A one-week protocol to interrupt inflammation and reset the insulin curve",
    description:
      "Seven days of structured eating, juicing, walking, and sleep to reset the insulin curve, calm systemic inflammation, and re-anchor the kitchen-closes-at-7pm habit.",
    pdfPath: "/pdfs/the_7_day_reset.pdf",
    organSystems: [
      "blood-glucose",
      "liver",
      "gut",
      "anti-inflammatory",
      "adrenal",
    ],
    level: 2,
    tier: "specialty",
    badge: "7-Day Protocol",
    icon: "🔄",
    accentColor: "#7BA382",
    comingSoon: true,
  },

  {
    id: "g-14",
    slug: "mind-body-anxiety-guide",
    title: "Mind-Body Anxiety Guide",
    subtitle:
      "Nutrient and nervous-system pathways for chronic anxiety, without sedation",
    description:
      "An integrative protocol for anxiety that addresses GABA pathways, adrenal load, gut-brain axis, and vagal tone — through food, herb, and breath, never sedation.",
    pdfPath: "/pdfs/mind_body_anxiety_guide.pdf",
    organSystems: ["brain", "adrenal", "gut", "anti-inflammatory"],
    level: 2,
    tier: "specialty",
    badge: "Nervous System",
    icon: "🧠",
    accentColor: "#6B3D7A",
    comingSoon: true,
  },

  {
    id: "g-14b",
    slug: "breakfast-combinations",
    title: "Breakfast Combinations",
    subtitle:
      "Morning food pairings that stabilize the insulin curve for the rest of the day",
    description:
      "A short reference of breakfast combinations engineered to lock in steady glucose, protein, and fiber from the very first meal — the most leveraged eating decision of the day.",
    pdfPath: "/pdfs/breakfast_combinations.pdf",
    organSystems: ["blood-glucose", "gut", "adrenal", "heart"],
    level: 2,
    tier: "specialty",
    badge: "Morning Protocol",
    icon: "🍳",
    accentColor: "#D89B2A",
    comingSoon: true,
  },

  // ────────────────────────────────────────────────────────────────────
  // ADVANCED — Level 3, multi-system protocols (gated in Phase 2C)
  // ────────────────────────────────────────────────────────────────────
  {
    id: "g-15",
    slug: "dr-vera-daily-protocol",
    title: "Dr. Vera Daily Protocol",
    subtitle:
      "The full advanced daily protocol — version 4, multi-system, clinical-grade",
    description:
      "The complete advanced daily protocol used in clinical work — covering rising, morning juicing, midday meals, afternoon wind-down, kitchen-close, and overnight recovery. For readers ready to run all systems together.",
    pdfPath: "/pdfs/Dr_Vera_Daily_Protocol_v4.pdf",
    organSystems: [
      "heart",
      "kidneys",
      "blood-glucose",
      "liver",
      "anti-inflammatory",
      "gut",
      "adrenal",
      "immune",
      "lymphatic",
    ],
    level: 3,
    tier: "advanced",
    badge: "Advanced · v4",
    icon: "🗓️",
    accentColor: "#1F5E3A",
  },

  {
    id: "g-16",
    slug: "cancer-patient-protocol",
    title: "Cancer Patient Healing Protocol",
    subtitle:
      "Customized nutrition for cancer patients with pacemaker and warfarin therapy",
    description:
      "A comprehensive healing protocol for cancer patients managing three simultaneous conditions: active treatment, pacemaker with warfarin therapy, and liver support needs. Every recommendation filtered through all three conditions.",
    pdfPath: "/pdfs/cancer_patient_protocol.pdf",
    organSystems: ["liver", "immune", "heart", "lymphatic", "blood-health"],
    level: 3,
    tier: "advanced",
    badge: "Advanced · Clinical",
    icon: "🎗️",
    accentColor: "#4A0E0E",
    keyFacts: [
      "Every food verified low Vitamin K — warfarin safe",
      "Liver flush protocol safe during chemotherapy",
      "WBC and immune support through food and herbs",
      "Cardiac-safe with pacemaker — all foods reviewed",
    ],
    sections: [
      {
        heading: "Three Conditions. One Protocol.",
        content: [
          "Most nutrition guides address one condition at a time. This protocol was built for a patient managing three simultaneously: active cancer treatment, a pacemaker with warfarin anticoagulation therapy, and a liver under significant stress from chemotherapy metabolites.",
          "Each condition imposes its own dietary rules. Cancer treatment creates WBC suppression, oxidative stress, and liver burden. Warfarin requires consistent low Vitamin K intake. The pacemaker requires foods that support arterial health without interfering with anticoagulation.",
          "Every single food in this protocol has been filtered through all three lenses simultaneously. Nothing here serves one condition while harming another.",
        ],
      },
      {
        heading: "The Vitamin K Rule on Warfarin",
        content: [
          "Vitamin K is not a banned nutrient on warfarin — it is a managed nutrient. The rule is consistency, not elimination. The same amount of the same Vitamin K foods daily allows the physician to calibrate the warfarin dose accurately.",
          "This protocol keeps Vitamin K LOW rather than just consistent — because during active cancer treatment, food intake and absorption are variable.",
          "Foods completely avoided: spinach, kale, moringa leaves, parsley in large amounts, broccoli raw, collard greens, Swiss chard, Brussels sprouts, grapefruit.",
        ],
      },
      {
        heading: "Liver Support During Chemotherapy",
        content: [
          "Chemotherapy agents are hepatotoxic by design — the liver metabolizes and clears every drug administered.",
          "The morning protocol activates liver bile flow and methylation pathways before the first meal. Artichoke hearts at lunch stimulate bile production. Milk thistle with every meal provides the most evidence-supported liver protection available.",
          "The kitchen closes at 7pm without exception. The liver runs its deepest Phase II detox between 1 and 3am.",
        ],
      },
      {
        heading: "White Blood Cell Support",
        content: [
          "Turkey Tail mushroom PSK and PSP is approved as a cancer adjunct therapy in Japan specifically for WBC recovery.",
          "Astragalus root polysaccharides stimulate bone marrow activity and are used in Chinese hospitals alongside chemotherapy for WBC recovery.",
          "Sleep is the most powerful WBC intervention available. Bone marrow produces white blood cells most actively during deep sleep between 10pm and 3am.",
        ],
      },
      {
        heading: "The Daily Healing Juice Formula",
        content: [
          "Every morning: small beet + large cucumber (skin on) + 4 stalks celery (skin on) + 1 lemon peeled + fresh ginger + fresh turmeric + pinch of black pepper added after juicing + half teaspoon spirulina stirred in after juicing.",
          "This formula is specifically safe for warfarin therapy — very low Vitamin K across all ingredients. Drink within 20 minutes of pressing. Peak Zone only — before 10am.",
        ],
      },
    ],
    chatScope:
      "You are Dr. Vera answering questions about cancer patient nutrition, specifically for patients managing warfarin therapy with a pacemaker alongside active cancer treatment. Focus on: Vitamin K-safe foods, liver support during chemotherapy, WBC and immune support through food and herbs, the neutropenic diet, safe supplement recommendations for warfarin patients, grapefruit contraindications, the daily juice formula, and the kitchen-closes-at-7pm overnight liver detox protocol. Always emphasize that all recommendations must be reviewed with both the oncologist and cardiologist.",
  },

  // ────────────────────────────────────────────────────────────────────
  // DEVOTIONAL — surfaced at /devotional, linked from footer only
  // ────────────────────────────────────────────────────────────────────
  {
    id: "g-17",
    slug: "mind-renewal-scripture",
    title: "Mind Renewal Scripture",
    subtitle: "A devotional companion for the renewal of the mind",
    description:
      "A devotional reflection paired with daily renewal practices, for readers whose healing journey is anchored in scripture.",
    pdfPath: "/pdfs/mind_renewal_scripture.pdf",
    organSystems: ["brain"],
    level: "all",
    tier: "devotional",
    badge: "Devotional",
    icon: "📖",
    accentColor: "#2E2A6B",
  },

  {
    id: "g-18",
    slug: "the-language-of-becoming",
    title: "The Language of Becoming",
    subtitle: "A devotional reflection on identity, healing, and renewal",
    description:
      "A long-form devotional piece on the language of becoming — written for readers walking through transformation and seeking spiritual companionship in the healing process.",
    pdfPath: "/pdfs/the_language_of_becoming.pdf",
    organSystems: ["brain"],
    level: "all",
    tier: "devotional",
    badge: "Devotional",
    icon: "✍️",
    accentColor: "#2E2A6B",
  },

  {
    id: "g-19",
    slug: "renewing-the-mind-guide",
    title: "Renewing the Mind Guide",
    subtitle: "A reflection on renewal — placed in Devotional pending review",
    description:
      "Placed in the devotional section pending content review. If the file reads as cross-tradition mind-body rather than explicitly scriptural, move to Specialty under Mind-Body.",
    pdfPath: "/pdfs/renewing_the_mind_guide.pdf",
    organSystems: ["brain", "adrenal"],
    level: "all",
    tier: "devotional",
    badge: "Devotional",
    icon: "🕊️",
    accentColor: "#2E2A6B",
    comingSoon: true,
  },
];

// ───────── helpers ─────────

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const getGuidesByOrganSystem = (systemSlug: string): Guide[] =>
  guides.filter((g) => g.organSystems.includes(systemSlug as never));

export const getGuidesByTier = (tier: Guide["tier"]): Guide[] =>
  guides.filter((g) => g.tier === tier);

export const tieredGuides = {
  foundational: guides.filter((g) => g.tier === "foundational"),
  specialty: guides.filter((g) => g.tier === "specialty"),
  advanced: guides.filter((g) => g.tier === "advanced"),
  devotional: guides.filter((g) => g.tier === "devotional"),
};

// Public-library guides exclude devotional (devotional is surfaced at /devotional only)
export const libraryGuides = guides.filter((g) => g.tier !== "devotional");
