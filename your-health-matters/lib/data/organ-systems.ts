import type { OrganSystem } from "@/lib/types";

/**
 * The 18 Organ Systems — Dr. Vera's master framework.
 *
 * ⚠️ COLOR HEX VALUES BELOW ARE PROPOSED.
 * Confirm against the existing PDF library palette before shipping.
 * These colors are fixed across all of Dr. Vera's guides and must match exactly.
 * Update each `colorHex` to the value used in the printed PDFs.
 */

export const organSystems: OrganSystem[] = [
  {
    id: "os-01",
    slug: "heart",
    name: "Heart",
    colorHex: "#B5273E",
    oneLineSummary: "The tireless pump that runs your entire circulatory life.",
    whatItDoes:
      "Your heart moves roughly 2,000 gallons of blood through your body every day. It carries oxygen, nutrients, hormones, and immune cells to every cell — and carries waste away.",
    signsOfDistress: [
      "High blood pressure",
      "Chest tightness or pressure",
      "Shortness of breath on light exertion",
      "Swelling in the ankles",
      "Irregular heartbeat",
    ],
    topFoods: ["pomegranate", "hibiscus", "garlic", "leafy-greens", "walnuts"],
    topHerbs: ["hawthorn", "hibiscus", "garlic"],
    practicalFirstStep:
      "Start your morning with 8oz of hibiscus tea — its anthocyanins gently support healthy blood pressure.",
  },
  {
    id: "os-02",
    slug: "kidneys",
    name: "Kidneys",
    colorHex: "#7A1F2B",
    oneLineSummary: "Twin filters that purify 50 gallons of blood every day.",
    whatItDoes:
      "Your kidneys filter waste, balance electrolytes, regulate blood pressure, and produce hormones that make red blood cells and activate vitamin D.",
    signsOfDistress: [
      "Foamy urine",
      "Swelling in the feet or hands",
      "Fatigue",
      "Lower back ache",
      "Changes in urination frequency",
    ],
    topFoods: ["cucumber", "celery", "watermelon", "parsley", "cilantro"],
    topHerbs: ["chanca-piedra", "nettle", "dandelion-root"],
    practicalFirstStep:
      "Drink a fresh cucumber-celery juice within 20 minutes of pressing. Skin on. Both vegetables are mineral-rich diuretics that gently support kidney filtration.",
  },
  {
    id: "os-03",
    slug: "blood-glucose",
    name: "Blood Glucose",
    colorHex: "#D4A017",
    oneLineSummary: "The fuel-balance system that decides your daily energy.",
    whatItDoes:
      "Your pancreas, liver, and muscle cells coordinate insulin and glucagon to keep blood sugar steady — too high damages vessels and nerves, too low starves the brain.",
    signsOfDistress: [
      "Energy crashes 1–2 hours after meals",
      "Strong sugar or carb cravings",
      "Waking at 2–3am",
      "Belly weight that won't shift",
      "Foggy thinking after carbs",
    ],
    topFoods: ["bitter-melon", "cinnamon", "fenugreek", "avocado", "okra"],
    topHerbs: ["bitter-melon", "cinnamon", "fenugreek", "berberine"],
    practicalFirstStep:
      "Take 1 tablespoon of apple cider vinegar in 8oz water 15 minutes before each meal. The acetic acid blunts the glucose spike that follows.",
  },
  {
    id: "os-04",
    slug: "liver",
    name: "Liver",
    colorHex: "#8B4513",
    oneLineSummary: "The body's chemical processing plant — running 500+ functions at once.",
    whatItDoes:
      "Your liver detoxifies, makes bile to digest fat, builds cholesterol and proteins, stores vitamins and minerals, and regulates blood sugar. In TCM, the liver clock runs from 1–3am.",
    signsOfDistress: [
      "Waking between 1–3am",
      "Anger or irritability without clear cause",
      "Greasy stool or trouble digesting fat",
      "Bitter taste in the mouth",
      "Yellowing of skin or eyes",
    ],
    topFoods: ["beets", "dandelion-greens", "artichoke", "lemon", "milk-thistle"],
    topHerbs: ["milk-thistle", "dandelion-root", "burdock", "schisandra"],
    practicalFirstStep:
      "Begin tomorrow with 16oz of warm water with the juice of one lemon and a pinch of sea salt — gentle hepatic activation before breakfast.",
  },
  {
    id: "os-05",
    slug: "anti-inflammatory",
    name: "Anti-Inflammatory",
    colorHex: "#7BA382",
    oneLineSummary: "The cooling system that quiets the fire beneath chronic disease.",
    whatItDoes:
      "Inflammation is your body's healing response. When it becomes chronic — driven by diet, stress, and toxins — it underlies heart disease, diabetes, autoimmunity, and cognitive decline.",
    signsOfDistress: [
      "Joint stiffness in the morning",
      "Skin redness or flares",
      "Digestive discomfort after meals",
      "Persistent low-grade fatigue",
      "Slow healing of cuts or bruises",
    ],
    topFoods: ["turmeric", "ginger", "tart-cherries", "wild-salmon", "extra-virgin-olive-oil"],
    topHerbs: ["turmeric", "ginger", "boswellia", "wild-oregano-oil"],
    practicalFirstStep:
      "Add ½ teaspoon of turmeric to your morning juice — and always pair it with a pinch of black pepper. The piperine in pepper raises curcumin absorption by roughly 2,000%.",
  },
  {
    id: "os-06",
    slug: "gut",
    name: "Gut",
    colorHex: "#C76B4A",
    oneLineSummary: "The second brain — where 70% of immunity and most of your serotonin live.",
    whatItDoes:
      "Your gut microbiome digests food, trains your immune system, manufactures B vitamins and short-chain fatty acids, and communicates directly with the brain via the vagus nerve.",
    signsOfDistress: [
      "Bloating after meals",
      "Irregular bowel movements",
      "Skin conditions",
      "Brain fog",
      "Food sensitivities that multiply over time",
    ],
    topFoods: ["fermented-vegetables", "bone-broth", "okra", "psyllium", "ginger"],
    topHerbs: ["slippery-elm", "marshmallow-root", "licorice-root", "ginger"],
    practicalFirstStep:
      "Begin or end one meal per day with a fermented food — a tablespoon of sauerkraut, kimchi, or coconut yogurt — to deliver live cultures to the colon.",
  },
  {
    id: "os-07",
    slug: "artery-health",
    name: "Artery Health",
    colorHex: "#E07856",
    oneLineSummary: "The flexible highways carrying life to every cell.",
    whatItDoes:
      "Healthy arteries are smooth, flexible, and clear. The endothelial lining produces nitric oxide to keep vessels open. Damage and calcification stiffen these highways and raise pressure.",
    signsOfDistress: [
      "Cold hands or feet",
      "Leg cramps when walking",
      "High blood pressure",
      "Rising LDL or low HDL",
      "Erectile dysfunction (an early arterial signal)",
    ],
    topFoods: ["beets", "leafy-greens", "pomegranate", "natto", "garlic"],
    topHerbs: ["nattokinase", "vitamin-k2-mk7", "garlic", "hawthorn"],
    practicalFirstStep:
      "Press one beet into your morning juice. The dietary nitrates convert to nitric oxide, gently relaxing the vessel walls.",
  },
  {
    id: "os-08",
    slug: "cellular-health",
    name: "Cellular Health",
    colorHex: "#2E8B8B",
    oneLineSummary: "Every system in this guide begins here — at the level of the cell.",
    whatItDoes:
      "Your 37 trillion cells each contain mitochondria that produce energy, membranes that protect, and DNA that codes everything you are. Cellular damage is upstream of every disease.",
    signsOfDistress: [
      "Persistent fatigue not relieved by sleep",
      "Slow recovery from exercise",
      "Premature aging signs",
      "Cognitive slowdown",
      "Reduced exercise tolerance",
    ],
    topFoods: ["blueberries", "wild-salmon", "leafy-greens", "broccoli-sprouts", "extra-virgin-olive-oil"],
    topHerbs: ["coq10", "alpha-lipoic-acid", "resveratrol", "pqq"],
    practicalFirstStep:
      "Eat a small handful of wild blueberries with breakfast — their anthocyanins protect mitochondrial membranes from oxidative damage.",
  },
  {
    id: "os-09",
    slug: "brain",
    name: "Brain",
    colorHex: "#6B3D7A",
    oneLineSummary: "Three pounds of tissue using 20% of your body's energy.",
    whatItDoes:
      "Your brain runs on glucose, ketones, oxygen, and signaling molecules. It rewires itself daily based on what you eat, how you sleep, and what you think.",
    signsOfDistress: [
      "Word-finding difficulty",
      "Afternoon mental fog",
      "Mood swings tied to meals",
      "Poor short-term memory",
      "Difficulty focusing for more than 20 minutes",
    ],
    topFoods: ["wild-salmon", "walnuts", "blueberries", "egg-yolks", "extra-virgin-olive-oil"],
    topHerbs: ["lions-mane", "bacopa", "ginkgo", "rosemary"],
    practicalFirstStep:
      "Add one tablespoon of extra-virgin olive oil to your salad each day. Oleocanthal supports the brain's clearance of misfolded proteins.",
  },
  {
    id: "os-10",
    slug: "skin",
    name: "Skin",
    colorHex: "#E8A580",
    oneLineSummary: "Your largest organ — and a mirror of what's happening inside.",
    whatItDoes:
      "Skin protects you, regulates temperature, synthesizes vitamin D, and is in constant dialogue with your gut, liver, and hormones.",
    signsOfDistress: [
      "Acne in adulthood",
      "Eczema or psoriasis flares",
      "Dark circles under the eyes",
      "Slow wound healing",
      "Dryness despite hydration",
    ],
    topFoods: ["avocado", "wild-salmon", "bone-broth", "sweet-potato", "berries"],
    topHerbs: ["burdock", "calendula", "gotu-kola", "horsetail"],
    practicalFirstStep:
      "Add half an avocado to one meal a day. The monounsaturated fats and vitamin E nourish the skin barrier from the inside.",
  },
  {
    id: "os-11",
    slug: "lymphatic",
    name: "Lymphatic",
    colorHex: "#9EB7B5",
    oneLineSummary: "The silent drainage system that clears cellular waste.",
    whatItDoes:
      "Your lymphatic system carries immune cells, removes waste from tissues, and absorbs dietary fats. Unlike blood, it has no pump — movement is the pump.",
    signsOfDistress: [
      "Puffiness in the face on waking",
      "Sluggish digestion",
      "Frequent low-grade illness",
      "Skin congestion",
      "Tender lymph nodes",
    ],
    topFoods: ["citrus", "leafy-greens", "ginger", "cranberries", "turmeric"],
    topHerbs: ["cleavers", "red-clover", "calendula", "echinacea"],
    practicalFirstStep:
      "Walk for 10 minutes after every meal. Movement is the lymph's pump — there is no substitute.",
  },
  {
    id: "os-12",
    slug: "adrenal",
    name: "Adrenal",
    colorHex: "#CC6633",
    oneLineSummary: "Twin glands shaping your response to every demand on the body.",
    whatItDoes:
      "Sitting atop your kidneys, the adrenals produce cortisol, adrenaline, aldosterone, and DHEA. They orchestrate your stress response, blood pressure, and inflammation.",
    signsOfDistress: [
      "Wired-but-tired energy",
      "Salt cravings",
      "Difficulty falling asleep",
      "Light-headedness when standing",
      "Crashing in mid-afternoon",
    ],
    topFoods: ["sea-salt", "avocado", "wild-salmon", "egg-yolks", "coconut"],
    topHerbs: ["ashwagandha", "holy-basil", "rhodiola", "licorice-root"],
    practicalFirstStep:
      "On waking, sip 16oz of water with a pinch of sea salt and a squeeze of lemon. This gently signals the adrenals that morning has begun.",
  },
  {
    id: "os-13",
    slug: "blood-health",
    name: "Blood Health",
    colorHex: "#8B1A1A",
    oneLineSummary: "The fluid that carries oxygen, nutrients, hormones, and your immune army.",
    whatItDoes:
      "Your red blood cells carry oxygen, white cells fight infection, platelets clot wounds, and plasma carries hormones and proteins. Blood health depends on iron, B12, folate, and copper.",
    signsOfDistress: [
      "Cold extremities",
      "Pale inner eyelids",
      "Brittle nails",
      "Shortness of breath on stairs",
      "Fatigue out of proportion to activity",
    ],
    topFoods: ["beets", "dark-leafy-greens", "grass-fed-liver", "lentils", "pumpkin-seeds"],
    topHerbs: ["nettle", "yellow-dock", "moringa", "spirulina"],
    practicalFirstStep:
      "Pair every iron-rich plant food with lemon or apple cider vinegar — the acid increases iron absorption by 2–3 times.",
  },
  {
    id: "os-14",
    slug: "eyes",
    name: "Eyes",
    colorHex: "#4A6B8A",
    oneLineSummary: "Two highly metabolic organs that depend on the same nutrients as your brain.",
    whatItDoes:
      "Your retina contains some of the body's highest concentrations of polyunsaturated fats. The macula is built from lutein and zeaxanthin — pigments your body cannot make.",
    signsOfDistress: [
      "Trouble adjusting to dim light",
      "Eye strain from screens",
      "Dry eyes",
      "Floaters",
      "Difficulty with fine print",
    ],
    topFoods: ["leafy-greens", "egg-yolks", "wild-salmon", "carrots", "blueberries"],
    topHerbs: ["bilberry", "ginkgo", "saffron", "marigold"],
    practicalFirstStep:
      "Eat a small portion of egg yolks or leafy greens daily. Lutein and zeaxanthin concentrate in the macula and protect against blue-light damage.",
  },
  {
    id: "os-15",
    slug: "thyroid",
    name: "Thyroid",
    colorHex: "#3FA0A5",
    oneLineSummary: "The butterfly-shaped gland that sets every cell's metabolic tempo.",
    whatItDoes:
      "Your thyroid produces T4 and T3, hormones that regulate metabolism, body temperature, heart rate, and energy. It needs iodine, selenium, zinc, and tyrosine to do its work.",
    signsOfDistress: [
      "Cold intolerance",
      "Hair thinning, especially the outer eyebrow",
      "Constipation",
      "Weight gain or loss without cause",
      "Hoarseness",
    ],
    topFoods: ["brazil-nuts", "seaweed", "wild-fish", "pumpkin-seeds", "eggs"],
    topHerbs: ["ashwagandha", "bladderwrack", "guggul"],
    practicalFirstStep:
      "If you have a thyroid condition, cook your cruciferous vegetables (broccoli, kale, cabbage) before eating — heat reduces compounds that can interfere with thyroid hormone production.",
  },
  {
    id: "os-16",
    slug: "immune",
    name: "Immune",
    colorHex: "#1F7A4D",
    oneLineSummary: "A standing army of cells, signals, and barriers — most of it lives in your gut.",
    whatItDoes:
      "Your immune system distinguishes self from non-self, neutralizes pathogens, clears damaged cells, and remembers past invaders. 70% of immune tissue surrounds the gut.",
    signsOfDistress: [
      "Frequent colds",
      "Slow recovery from illness",
      "Recurring cold sores or shingles",
      "Allergies that worsen each year",
      "Lingering fatigue after infection",
    ],
    topFoods: ["garlic", "ginger", "citrus", "mushrooms", "honey"],
    topHerbs: ["elderberry", "echinacea", "astragalus", "turkey-tail", "wild-oregano-oil"],
    practicalFirstStep:
      "Take 2–3 drops of wild oregano oil sublingually twice daily during cold and flu season. Carvacrol and thymol provide broad-spectrum antimicrobial support.",
  },
  {
    id: "os-17",
    slug: "bones-joints",
    name: "Bones & Joints",
    colorHex: "#D4C5A0",
    oneLineSummary: "Living tissue that rebuilds itself completely every 10 years.",
    whatItDoes:
      "Bones store minerals, produce blood cells, and provide structure. Joints connect them with cartilage, synovial fluid, and ligaments. All of it needs calcium, magnesium, K2, D3, and movement.",
    signsOfDistress: [
      "Joint stiffness on rising",
      "Cracking joints",
      "Loss of height over years",
      "Tooth or jaw issues",
      "Slow-healing fractures",
    ],
    topFoods: ["bone-broth", "leafy-greens", "natto", "sardines", "sesame-seeds"],
    topHerbs: ["turmeric", "boswellia", "horsetail", "comfrey"],
    practicalFirstStep:
      "Sip a cup of bone broth three times a week. Collagen, glycine, and proline directly nourish joint cartilage and connective tissue.",
  },
  {
    id: "os-18",
    slug: "lungs",
    name: "Lungs",
    colorHex: "#5C9EAD",
    oneLineSummary: "The exchange surface where the outer world meets the inner world.",
    whatItDoes:
      "Your lungs move 11,000 liters of air a day across a surface roughly the size of a tennis court. They extract oxygen and release carbon dioxide — the body's most constant act of trade.",
    signsOfDistress: [
      "Shortness of breath on light exertion",
      "Frequent throat clearing",
      "Tight chest in cold air",
      "Persistent cough",
      "Reduced exercise tolerance",
    ],
    topFoods: ["onions", "garlic", "ginger", "apples", "leafy-greens"],
    topHerbs: ["mullein", "thyme", "elecampane", "tiger-milk-mushroom"],
    practicalFirstStep:
      "Practice five minutes of slow nasal breathing each morning — four counts in, six counts out. The longer exhale activates the parasympathetic nervous system.",
  },
];

export const getOrganSystemBySlug = (slug: string): OrganSystem | undefined =>
  organSystems.find((s) => s.slug === slug);
