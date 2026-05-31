import type { Food } from "@/lib/types";

/**
 * Foods seed data — vegetables, fruits, herbs.
 *
 * This is a STARTER set. The full library expands to match the
 * Complete Vegetable / Fruit / Herb PDF guides.
 *
 * Every food maps to the 18 organ systems and (where relevant) to insulin zones.
 */

export const foods: Food[] = [
  // ---------- VEGETABLES ----------
  {
    id: "f-veg-001",
    slug: "beets",
    name: "Beets",
    type: "vegetable",
    activeCompounds: ["betalains", "dietary nitrates", "folate"],
    mechanism:
      "Beets are rich in dietary nitrates that the body converts to nitric oxide, gently relaxing blood vessel walls and supporting endothelial health. Betalains are powerful liver-supporting antioxidants. The deep red color signals high anthocyanin content.",
    organSystems: ["heart", "artery-health", "liver", "blood-health"],
    insulinZones: ["peak", "declining"],
    preparationNotes:
      "Juice raw for full nitrate availability. Roast for a sweeter, gentler effect.",
    pairings: ["lemon", "ginger", "carrot"],
    cautions: [
      "Can temporarily turn urine and stool pink. This is harmless",
      "If you have kidney stones, consult your physician (oxalate content)",
    ],
    culturalTradition: "Mediterranean and Eastern European folk medicine",
  },
  {
    id: "f-veg-002",
    slug: "cucumber",
    name: "Cucumber",
    type: "vegetable",
    activeCompounds: ["silica", "potassium", "cucurbitacins"],
    mechanism:
      "Cucumber is over 95% structured water, rich in silica for connective tissue and skin, and a gentle diuretic that supports kidney filtration without depleting electrolytes.",
    organSystems: ["kidneys", "skin", "lymphatic"],
    insulinZones: ["peak", "declining", "caution"],
    preparationNotes:
      "Juice with the skin on: most of the silica and minerals sit just under the skin.",
    pairings: ["celery", "lemon", "mint"],
  },
  {
    id: "f-veg-003",
    slug: "celery",
    name: "Celery",
    type: "vegetable",
    activeCompounds: ["apigenin", "luteolin", "phthalides", "natural sodium"],
    mechanism:
      "Celery's apigenin and luteolin gently calm inflammation. Its natural sodium salts support adrenal and kidney function, very different from added table salt.",
    organSystems: ["kidneys", "adrenal", "anti-inflammatory", "lymphatic"],
    insulinZones: ["peak", "declining", "caution"],
    preparationNotes:
      "Juice with leaves and skin on. Consume within 20 minutes of pressing.",
    pairings: ["cucumber", "lemon", "ginger"],
  },
  {
    id: "f-veg-004",
    slug: "leafy-greens",
    name: "Leafy Greens (kale, spinach, chard, dandelion)",
    type: "vegetable",
    activeCompounds: [
      "chlorophyll",
      "folate",
      "magnesium",
      "vitamin K1",
      "lutein",
      "zeaxanthin",
    ],
    mechanism:
      "Dark leafy greens deliver chlorophyll, which supports cellular oxygenation and gentle detoxification, plus the highest food concentrations of vitamin K1 and folate.",
    organSystems: [
      "heart",
      "liver",
      "blood-health",
      "eyes",
      "bones-joints",
      "cellular-health",
    ],
    insulinZones: ["peak", "declining", "caution"],
    preparationNotes:
      "Eat raw in salads with EVOO and lemon. Lightly cooked also works, and is required for thyroid patients eating cruciferous greens.",
    pairings: ["extra-virgin-olive-oil", "lemon", "garlic"],
    cautions: ["Thyroid patients: cook cruciferous greens before eating"],
  },

  // ---------- FRUITS ----------
  {
    id: "f-fr-001",
    slug: "pomegranate",
    name: "Pomegranate",
    type: "fruit",
    activeCompounds: ["punicalagins", "anthocyanins", "ellagic acid"],
    mechanism:
      "Punicalagins are among the most potent antioxidants in any food, supporting endothelial function and helping reduce arterial plaque buildup over time.",
    organSystems: [
      "heart",
      "artery-health",
      "anti-inflammatory",
      "cellular-health",
    ],
    insulinZones: ["peak"],
    pairings: ["extra-virgin-olive-oil", "leafy-greens"],
    culturalTradition: "Mediterranean, Persian, and Ayurvedic medicine",
  },
  {
    id: "f-fr-002",
    slug: "blueberries",
    name: "Blueberries (wild preferred)",
    type: "fruit",
    activeCompounds: ["anthocyanins", "pterostilbene", "resveratrol"],
    mechanism:
      "The deep blue anthocyanins cross the blood-brain barrier and support neuronal membrane integrity. Wild blueberries contain roughly double the antioxidant density of cultivated.",
    organSystems: ["brain", "eyes", "cellular-health", "anti-inflammatory"],
    insulinZones: ["peak", "declining"],
    pairings: ["walnuts", "egg-yolks"],
  },
  {
    id: "f-fr-003",
    slug: "lemon",
    name: "Lemon",
    type: "fruit",
    activeCompounds: ["citric acid", "vitamin C", "limonene", "flavonoids"],
    mechanism:
      "Lemon's acidity supports stomach acid production, helps mineral and iron absorption, and gently activates phase I and II liver detoxification.",
    organSystems: ["liver", "gut", "blood-health"],
    insulinZones: ["peak", "declining", "caution"],
    preparationNotes:
      "Use in every salad dressing alongside EVOO. Add to morning water with a pinch of sea salt.",
    pairings: ["extra-virgin-olive-oil", "leafy-greens", "ginger", "turmeric"],
  },

  // ---------- HERBS ----------
  {
    id: "f-hb-001",
    slug: "turmeric",
    name: "Turmeric",
    type: "herb",
    activeCompounds: ["curcumin", "turmerones"],
    mechanism:
      "Curcumin blocks NF-κB, the master inflammation switch, and supports liver phase II detoxification. Its bioavailability is poor on its own: black pepper raises absorption by ~2,000%, and dietary fat further improves it.",
    organSystems: [
      "anti-inflammatory",
      "liver",
      "brain",
      "bones-joints",
      "gut",
    ],
    insulinZones: ["peak", "declining", "caution"],
    pairings: ["black-pepper", "extra-virgin-olive-oil", "ghee", "coconut-oil"],
    cautions: [
      "ALWAYS pair with black pepper",
      "Pair with fat for full absorption",
      "May potentiate blood thinners: consult physician if on warfarin",
    ],
    drugInteractions: ["warfarin", "aspirin", "anticoagulants"],
    culturalTradition: "Ayurvedic medicine (daily food in India)",
    dosage:
      "Culinary: ½–1 tsp daily in food or juice. Therapeutic: 500–1000mg curcumin extract with piperine, 1–2x daily.",
  },
  {
    id: "f-hb-002",
    slug: "ginger",
    name: "Ginger",
    type: "herb",
    activeCompounds: ["gingerols", "shogaols", "zingerone"],
    mechanism:
      "Ginger stimulates digestion, calms nausea, supports circulation, and reduces inflammatory markers. Shogaols (more concentrated in dried ginger) cross the blood-brain barrier.",
    organSystems: [
      "gut",
      "anti-inflammatory",
      "immune",
      "lymphatic",
      "lungs",
    ],
    insulinZones: ["peak", "declining", "caution"],
    pairings: ["turmeric", "lemon", "honey"],
    cautions: ["High doses may interact with blood thinners"],
    culturalTradition: "TCM, Ayurveda, and Southeast Asian cooking",
    dosage: "Culinary: 1–2 inches fresh root daily. Tea: 1 tsp grated in hot water, 2–3x daily.",
  },
  {
    id: "f-hb-003",
    slug: "hibiscus",
    name: "Hibiscus",
    type: "herb",
    activeCompounds: ["anthocyanins", "polyphenols", "organic acids"],
    mechanism:
      "Hibiscus has documented blood-pressure-lowering effects comparable to some pharmaceutical agents. Its anthocyanins also support vascular elasticity.",
    organSystems: ["heart", "artery-health", "liver"],
    insulinZones: ["peak", "declining", "caution"],
    cautions: ["May potentiate antihypertensive medications"],
    culturalTradition: "West African, Caribbean, and Mediterranean tea traditions",
    dosage: "Tea: 1–2 tsp dried calyces steeped 10 minutes, 1–3 cups daily.",
  },
  {
    id: "f-hb-004",
    slug: "wild-oregano-oil",
    name: "Wild Oregano Oil",
    type: "herb",
    activeCompounds: ["carvacrol", "thymol"],
    mechanism:
      "Carvacrol and thymol provide broad-spectrum antimicrobial action without disrupting beneficial gut flora when used appropriately. Block NF-κB inflammatory signaling.",
    organSystems: ["immune", "lungs", "gut"],
    insulinZones: ["peak", "declining", "caution"],
    pairings: ["honey", "olive-oil"],
    cautions: ["Use food-grade only. Very potent: dilute properly."],
    drugInteractions: [
      "Generally safe with most medications including warfarin and statins",
    ],
    culturalTradition: "Mediterranean folk medicine",
    dosage:
      "2–3 drops sublingually 2x daily during acute immune challenges. Lower for daily prevention.",
  },
  {
    id: "f-hb-005",
    slug: "ashwagandha",
    name: "Ashwagandha",
    type: "herb",
    activeCompounds: ["withanolides"],
    mechanism:
      "An adaptogen that modulates cortisol, supports thyroid hormone conversion, and improves stress resilience. Withanolides act on the HPA axis.",
    organSystems: ["adrenal", "thyroid", "brain"],
    insulinZones: ["peak", "declining", "caution"],
    cautions: [
      "Avoid in hyperthyroid conditions",
      "Avoid in pregnancy",
      "May potentiate thyroid medications",
    ],
    culturalTradition: "Ayurvedic medicine",
    dosage: "300–600mg standardized extract, 1–2x daily.",
  },
];

export const getFoodBySlug = (slug: string): Food | undefined =>
  foods.find((f) => f.slug === slug);

export const getFoodsByOrganSystem = (systemSlug: string): Food[] =>
  foods.filter((f) => f.organSystems.includes(systemSlug as never));

export const getFoodsByType = (type: "vegetable" | "fruit" | "herb"): Food[] =>
  foods.filter((f) => f.type === type);
