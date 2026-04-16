// lib/guides.ts - Complete guide data for all 10 healing documents

export interface GuideSection {
  heading: string
  content: string[]
}

export interface Guide {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  color: string          // tailwind bg class
  accentColor: string    // hex for inline use
  badge: string          // e.g. "18 Systems"
  pdfFile: string        // filename in /public/pdfs/
  category: string
  sections: GuideSection[]
  keyFacts: string[]
  chatScope: string      // injected into Dr. Vera system prompt for this page
}

export const guides: Guide[] = [
  {
    slug: 'holistic-health-cheatsheet',
    title: 'Holistic Health Cheat Sheet',
    subtitle: 'Your complete daily protocol - cholesterol, glucose, and kidney health',
    description: 'The master daily reference for managing LDL/HDL cholesterol, blood glucose stability, and kidney function simultaneously through food, timing, and supplement protocols.',
    icon: '🌿',
    color: 'bg-forest-900',
    accentColor: '#085041',
    badge: 'Daily Protocol',
    pdfFile: 'holistic_health_cheatsheet.pdf',
    category: 'Foundation',
    keyFacts: [
      'Lower LDL + raise HDL through food alone',
      'Stabilize blood glucose without medication',
      'Support kidney filtration naturally',
      'Complete morning-to-night protocol',
    ],
    sections: [
      {
        heading: 'The Three-Goal Framework',
        content: [
          'Most health protocols address one condition at a time. This guide addresses three simultaneously - because the body does not operate in isolation. Cholesterol, blood glucose, and kidney function are deeply interconnected: elevated glucose damages arterial walls that raise cardiovascular risk; the kidneys filter everything the liver processes; and the liver manages cholesterol clearance that depends on the same enzymes that metabolize glucose.',
          'The foods and timing protocols in this guide are selected specifically because they serve all three goals at once rather than helping one while harming another.',
        ]
      },
      {
        heading: 'Raising HDL & Lowering LDL',
        content: [
          'HDL (high-density lipoprotein) acts as a reverse cholesterol transporter - it picks up excess cholesterol from arterial walls and returns it to the liver for clearance. Raising HDL is as important as lowering LDL, and is achieved through specific foods: avocado, extra virgin olive oil, walnuts, flaxseed, edamame, berries, and pomegranate.',
          'Pomegranate is unique - it is the only food shown in clinical research to simultaneously raise HDL AND reverse existing arterial plaque through its punicalagin compounds.',
          'LDL reduction is primarily a fiber story. Soluble fiber (from oats, psyllium, lentils, apples, and flaxseed) binds bile acids in the gut before they can reabsorb, forcing the liver to convert more cholesterol into new bile - directly lowering circulating LDL.',
        ]
      },
      {
        heading: 'Blood Glucose Stabilization',
        content: [
          'Insulin sensitivity follows a predictable daily curve: highest between 6am and 10am, declining through the afternoon, at its lowest after 6pm. The same meal eaten at 8am produces a dramatically lower glucose spike than the identical meal eaten at 6pm.',
          'Fiber-first eating at every meal - consuming vegetables or legumes before any carbohydrates - creates a physical barrier in the gut that slows glucose absorption from everything eaten after.',
          'Ceylon cinnamon (never Cassia) activates GLUT4 glucose transporters independently of insulin. Apple cider vinegar before meals inhibits alpha-glucosidase. Chromium Picolinate (400mcg with meals) supports insulin receptor function as a cofactor.',
        ]
      },
      {
        heading: 'Kidney Support Protocol',
        content: [
          'The cornerstone kidney food is cucumber: 96% water content, virtually zero phosphorus, silica for cellular membrane integrity, and near-zero glycemic impact. Juiced with skin on every morning - the silica content lives in the skin.',
          'Lemon citrate from half a lemon in morning water is the most effective natural kidney stone prevention compound studied. It raises urinary citrate levels which prevent calcium oxalate crystal formation.',
          'Foods to limit: excess sodium (under 2,000mg/day), dark colas (phosphorus), processed cheese, and excess animal protein which creates a high nitrogen waste load for kidneys to filter.',
        ]
      },
      {
        heading: 'The Daily Protocol',
        content: [
          'Rising: 16oz water with sea salt and fresh lemon juice - restores electrolytes depleted overnight and activates liver bile flow before the day begins.',
          'Morning: Cucumber celery juice (skin on both) - kidney flush, hydration, and silent inflammation reduction before breakfast.',
          'Breakfast: Egg whites with leafy greens and avocado - lean complete protein, fat-soluble nutrient absorption, and the fat needed to drive fat-soluble healing compounds.',
          'With every meal: ACV in water before. Chromium Picolinate with. 10–15 minute walk after. These three actions together reduce post-meal glucose spikes by up to 40%.',
          'Kitchen closes at 7pm. The overnight fasting window is when the liver completes its deepest detox work - food after 7pm interrupts that cycle.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about this Holistic Health Cheat Sheet. Focus on cholesterol management (LDL/HDL), blood glucose stabilization, kidney health, the daily protocol (morning lemon water, cucumber celery juice, ACV, 10-min walks, kitchen closing at 7pm), supplement timing (Chromium Picolinate 400mcg), and the three-goal framework. Draw on your 30 years of global clinical experience.',
  },

  {
    slug: 'insulin-activity-guide',
    title: 'Insulin Activity Guide',
    subtitle: 'The 24-hour curve that determines when every food heals or harms',
    description: 'A complete visual and clinical guide to the daily insulin sensitivity curve - showing exactly when to eat fruit, juice, carbohydrates, and healing foods for maximum benefit.',
    icon: '📊',
    color: 'bg-amber-800',
    accentColor: '#633806',
    badge: '4 Time Zones',
    pdfFile: 'insulin_activity.pdf',
    category: 'Timing',
    keyFacts: [
      'Insulin sensitivity peaks 9–10am',
      'Same meal = 2–3x more glucose spike at 6pm vs 8am',
      'Fruit is medicine before 2pm, triglycerides after 9pm',
      'Walk 10 min after meals - free glucose intervention',
    ],
    sections: [
      {
        heading: 'Why Timing Matters More Than You Think',
        content: [
          'The same food produces dramatically different effects in the body depending on when it is eaten. A banana at 8am in the morning Peak Zone enters a metabolic environment where insulin sensitivity is at its daily maximum - glucose moves efficiently into cells with minimal insulin required, and the fruit\'s fructose is used as fuel.',
          'The same banana eaten at 9pm enters an environment where insulin sensitivity is near its daily minimum. The fructose now bypasses glucose metabolism entirely and is routed directly to the liver for triglyceride synthesis - raising LDL and increasing cardiovascular risk overnight.',
          'This is not a small difference. Research consistently shows that late-night carbohydrate consumption produces 2–3x higher glucose spikes and dramatically elevated triglyceride levels compared to the identical food consumed in the morning.',
        ]
      },
      {
        heading: 'The Four Insulin Zones',
        content: [
          'Peak Zone (6am–2pm): Insulin sensitivity is at its highest. All juices, all fruits, high-nutrient dense foods, and healing protocols belong here. This is when the body most efficiently converts nutrients to fuel rather than fat.',
          'Declining Zone (2pm–6pm): Sensitivity is falling. Low-sugar juices only. Vegetable-dominant meals. Small portions of lower-glycemic fruit (berries, kiwi) are acceptable but tropical fruit should be avoided.',
          'Caution Zone (6pm–9pm): Insulin sensitivity is low. No fruit. Pure vegetable and herb juices only. The body is beginning its transition toward overnight repair mode - high-sugar inputs at this stage convert to fat rather than fuel.',
          'Avoid Zone (9pm–sleep): No juice. Water only. Any sugar - including the natural sugar from fruit juice - will be routed to triglyceride synthesis overnight, directly raising LDL and increasing cardiovascular risk.',
        ]
      },
      {
        heading: 'The Morning Juice Window',
        content: [
          'The morning window from 6am to 2pm is when all therapeutic juicing should occur. High-glucose healing juices - those combining beets, carrots, oranges, green apples - belong before 10am when insulin sensitivity is at its absolute peak.',
          'The morning juice formula used in clinical practice: Ginger Root + Turmeric Root + 2 Oranges + 1 Lemon + 2 Green Apples + Carrot + Beet. This combination provides anti-inflammatory compounds, nitric oxide precursors, liver detox support, and glucose metabolism support - all in the window when the body can make full use of the naturally occurring sugars.',
          'Rule: Always drink fresh juice within 20 minutes of pressing. Oxidation begins immediately. The therapeutic compounds - particularly the enzymes and volatile anti-inflammatory compounds - degrade rapidly.',
        ]
      },
      {
        heading: 'The Walk Protocol',
        content: [
          'A 10–15 minute walk after every meal is one of the most evidence-supported free interventions for blood glucose management. Muscle contraction during walking activates GLUT4 glucose transporters independently of insulin - meaning glucose is absorbed into muscle tissue without requiring additional insulin signaling.',
          'Studies consistently show a 20–30% reduction in post-meal glucose peaks with a light walk compared to sitting. This is particularly important for the midday and evening meals when insulin sensitivity is lower.',
          'The walk does not need to be fast or intense. A gentle stroll is sufficient. The key is movement within 30 minutes of finishing the meal - before the glucose peak would otherwise occur.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about insulin sensitivity, the 24-hour insulin activity curve, the four time zones (Peak 6am-2pm, Declining 2-6pm, Caution 6-9pm, Avoid 9pm+), when to eat fruit and juice, the morning juice window, the walk protocol, and how meal timing affects LDL, HDL, triglycerides, and blood glucose. Apply this to specific foods people ask about.',
  },

  {
    slug: 'vegetable-guide',
    title: 'Complete Vegetable Guide',
    subtitle: '180 vegetables mapped across all 18 organ systems',
    description: 'Every major healing vegetable organized by the body system it most powerfully supports - from heart and kidneys to brain, lungs, and cellular repair.',
    icon: '🥦',
    color: 'bg-forest-800',
    accentColor: '#1A4D1A',
    badge: '180 Cards',
    pdfFile: 'complete_vegetable_guide.pdf',
    category: 'Food Library',
    keyFacts: [
      'Spinach spans 13 organ systems',
      'Broccoli sulforaphane activates Nrf2 antioxidant switch',
      'Watercress has highest antioxidant density of any vegetable',
      'Lion\'s Mane - only food that regenerates myelin',
    ],
    sections: [
      {
        heading: 'Why Vegetables Are Medicine',
        content: [
          'The difference between a vegetable and a pharmaceutical is largely a matter of concentration and delivery mechanism. Broccoli sulforaphane activates the Nrf2 pathway - the master antioxidant switch that governs over 200 protective genes. The same pathway is the target of multiple pharmaceutical compounds. The difference is that sulforaphane does it gently, broadly, and without side effects.',
          'Kale\'s bile acid binding activity removes LDL cholesterol from the gut before it absorbs - the same mechanism as cholestyramine, a prescription cholesterol medication. Dandelion greens stimulate bile production through the same bitter receptor pathway as choleretic pharmaceutical agents. Every major drug category has a plant analogue that has been performing that function for far longer.',
        ]
      },
      {
        heading: 'The 18 Organ Systems Framework',
        content: [
          'This guide organizes all vegetables by their primary organ system target. The 18 systems covered: Heart & Cholesterol, Kidneys, Blood Glucose, Liver & Detox, Anti-Inflammatory, Gut & Digestion, Artery Health, Cellular Health, Brain & Cognitive, Skin, Lymphatic, Adrenal & Stress Response, Blood Health, Eyes & Vision, Thyroid & Hormones, Immune System, Bones & Joints, and Lungs & Respiratory.',
          'Many vegetables span multiple systems. Spinach appears in 13 of the 18 systems - making it the most cross-system healing vegetable catalogued. When a food appears across multiple systems, it is a signal that it operates through fundamental cellular pathways rather than organ-specific mechanisms.',
        ]
      },
      {
        heading: 'Top Healing Vegetables by System',
        content: [
          'Heart & Cholesterol: Kale and collard greens lead - bile acid binding removes LDL before absorption. Artichoke heart provides cynarin for bile stimulation, the most potent plant compound for active cholesterol clearance.',
          'Kidneys: Cucumber is the cornerstone. 96% water, zero phosphorus, silica for cellular membrane repair. Celery provides phthalides that reduce uric acid. Arugula provides gentle diuretic action without potassium depletion.',
          'Blood Glucose: Swiss chard contains syringic acid that mimics insulin independently. Bitter melon (karela) - used in Ayurvedic, Chinese, West African, and Caribbean medicine independently - contains three distinct insulin-mimicking compounds.',
          'Brain: Lion\'s Mane mushroom is the only food compound shown to stimulate Nerve Growth Factor (NGF) and regenerate myelin. This is not matched by any other food or supplement. If brain health is a priority, Lion\'s Mane is non-negotiable.',
          'Lungs: Tiger Milk Mushroom (Lignosus rhinocerotis) - used in Southeast Asian medicine for centuries for asthma and bronchitis - is the most studied mushroom for respiratory conditions. No Western equivalent exists with the same respiratory specificity.',
        ]
      },
      {
        heading: 'Raw vs. Cooked - The Critical Distinction',
        content: [
          'Broccoli and all cruciferous vegetables: chop and wait 40 minutes before cooking. Chopping activates the myrosinase enzyme that converts glucoraphanin to sulforaphane - the therapeutic compound. Heat destroys myrosinase. The 40-minute wait allows the conversion to complete before heat neutralizes the enzyme.',
          'Thyroid patients: all cruciferous vegetables must be cooked. Raw glucosinolates from cruciferous vegetables compete with iodine for thyroid uptake. For everyone else, raw is preferable for maximum enzyme activity.',
          'Tomatoes: cooked releases more lycopene. Heat breaks cell walls and increases bioavailability dramatically. The one vegetable where cooking increases therapeutic value.',
          'Garlic: crush or mince and wait 10 minutes before cooking. The same myrosinase principle - alliin and alliinase need time to form allicin before heat denatures the enzyme.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about healing vegetables, the 18 organ systems, which vegetables serve which body systems, raw vs cooked distinctions, specific vegetables for cholesterol/glucose/kidney/liver/inflammation/gut/brain health, and the sulforaphane, myrosinase, bile acid binding, and allicin mechanisms. Draw on traditional plant medicine knowledge from West Africa, Ayurveda, TCM, and Mediterranean traditions.',
  },

  {
    slug: 'fruit-guide',
    title: 'Complete Fruit Guide',
    subtitle: '180 fruits mapped across 18 organ systems with insulin timing',
    description: 'Every major healing fruit organized by organ system - with critical insulin timing guidance showing when each fruit heals and when it harms.',
    icon: '🍊',
    color: 'bg-orange-800',
    accentColor: '#7C2D12',
    badge: '180 Cards',
    pdfFile: 'complete_fruit_guide.pdf',
    category: 'Food Library',
    keyFacts: [
      'Kiwi spans 13 organ systems',
      'Pomegranate reverses arterial plaque - unique in the plant kingdom',
      'Elderberry blocks viral cell entry - only fruit with this mechanism',
      'All high-sugar fruit: morning window only',
    ],
    sections: [
      {
        heading: 'Fruit Is Medicine - In the Right Window',
        content: [
          'Fruit has been unfairly demonized in low-carbohydrate frameworks that fail to account for timing. The fructose in a mango is not the same as the fructose in a soda - the fiber, polyphenols, enzymes, and micronutrients in whole fruit fundamentally alter how the sugar is metabolized. But timing still matters.',
          'In the morning Peak Zone (6am–2pm), when insulin sensitivity is at its daily maximum, fruit fructose is efficiently converted to glucose and glycogen - fuel for the body and brain. After 9pm, the same fructose bypasses the glycolytic pathway and routes to hepatic lipogenesis - the liver converts it directly to triglycerides, raising LDL overnight.',
          'The fruit guide designates every recipe with an insulin zone badge: which fruits are safe in the morning, which are safe only before 2pm, and which should be avoided entirely in the evening.',
        ]
      },
      {
        heading: 'The Most Powerful Healing Fruits',
        content: [
          'Pomegranate (punicalagins): the only food shown to simultaneously raise HDL, lower LDL, AND reverse existing arterial plaque. Urolithin A - produced when gut bacteria process pomegranate - triggers mitophagy, the cellular process of clearing damaged mitochondria. Daily pomegranate juice is the single highest-impact fruit intervention for cardiovascular health.',
          'Kiwi: spans 13 organ systems - the highest multi-system coverage of any fruit. Actinidin (digestive enzyme unique to kiwi) - most studied natural compound for gastric emptying. Inositol for insulin signaling. Vitamin C + K combination supports both immune and arterial health simultaneously.',
          'Elderberry: the only fruit compound proven to physically block viral entry into cells. Sambucus nigra anthocyanins bind to viral surface proteins, preventing cellular attachment. Used in European herbal medicine for respiratory infections for centuries; confirmed in multiple clinical trials for flu duration reduction.',
          'Blueberries: pterostilbene (more bioavailable than resveratrol) activates sirtuins - longevity proteins that govern cellular aging. Anthocyanins cross the blood-brain barrier and stimulate BDNF within 12 weeks of daily consumption. The best-studied fruit for cognitive protection.',
        ]
      },
      {
        heading: 'Global Fruit Traditions',
        content: [
          'Baobab (West Africa): 6x more vitamin C than orange. Highest prebiotic fiber score of any food tested - feeds Bifidobacterium for 24+ hours. The "Tree of Life" across sub-Saharan Africa. The powder dissolves in water and has been used as a daily supplement food for millennia.',
          'Amla/Indian Gooseberry (Ayurveda): highest natural vitamin C - one fruit contains the equivalent of 20 oranges, AND the vitamin C is heat-stable unlike in other foods. Emblicanin polyphenols lower LDL and raise HDL simultaneously. Cornerstone of Chyawanprash - the most researched Ayurvedic formula in history.',
          'Bitter Melon (SE Asia, West Africa, Caribbean, India): every traditional medicine system in the tropics independently discovered its hypoglycemic properties. Three distinct insulin-mimicking compounds: charantin, polypeptide-p, and vicine. Confirmed in multiple randomized controlled trials for blood glucose reduction.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about healing fruits, which fruits serve which organ systems, when to eat fruit based on insulin timing (morning window vs evening), pomegranate for artery health, kiwi for digestion, blueberries for brain, elderberry for immune defense, global healing fruits like baobab and amla, and how to incorporate fruit into a healing protocol for cholesterol, glucose, or kidney health.',
  },

  {
    slug: 'herb-guide',
    title: 'Complete Herb Guide',
    subtitle: '180 herbs with dosages, preparations, and organ system targets',
    description: 'A clinical reference for 180 medicinal herbs organized by organ system - including exact dosages, preparation methods, safety profiles, and herb-drug interactions.',
    icon: '🌱',
    color: 'bg-emerald-900',
    accentColor: '#064E3B',
    badge: '180 Herbs + Safety',
    pdfFile: 'complete_herb_guide.pdf',
    category: 'Herbal Medicine',
    keyFacts: [
      'Berberine clinically comparable to low-dose statins',
      'Ashwagandha reduces cortisol 28% - RCT confirmed',
      'Turmeric + black pepper = 2000% absorption increase',
      'Milk thistle silymarin: gold standard liver protection',
    ],
    sections: [
      {
        heading: 'Herbs Are Not Supplements - They Are Medicine',
        content: [
          'The distinction between a "supplement" and a "medicine" is largely regulatory, not biochemical. Berberine activates AMPK - the same cellular pathway as metformin, the most prescribed diabetes medication in the world. Multiple clinical trials show berberine produces comparable reductions in fasting glucose and HbA1c. The difference is that berberine also inhibits lipid synthesis, producing simultaneous cholesterol benefits that metformin does not.',
          'Milk thistle silymarin is used in European hospitals as a treatment for Amanita mushroom poisoning - one of the most hepatotoxic exposures known. It is also used in German hospitals alongside chemotherapy. The evidence base for silymarin is not "complementary" - it is clinical.',
          'The challenge with herbal medicine is not efficacy - it is precision. Dosage, preparation method, bioavailability, and herb-drug interactions matter enormously. This guide includes exact dosages and preparation methods for every herb based on the clinical evidence that supports them.',
        ]
      },
      {
        heading: 'Key Herbs for the Three Core Goals',
        content: [
          'Cholesterol: Berberine (500mg 2–3x/day with meals) - inhibits PCSK9 and activates AMPK simultaneously. Artichoke leaf extract (cynarin content) - stimulates bile acid production for active LDL clearance. Bergamot citrus polyphenols - lowers LDL and triglycerides through a mechanism distinct from statins.',
          'Blood Glucose: Ceylon cinnamon (1g/day - always Ceylon, never Cassia) - cinnamaldehyde activates GLUT4 glucose transporters. Gymnema sylvestre (400mg before meals) - blocks sugar absorption at the intestinal level and reduces sweet cravings. Mulberry leaf (DNJ compound) - blocks alpha-glucosidase, the enzyme that converts starch to glucose.',
          'Kidneys: Dandelion root - potassium-sparing diuretic that increases kidney filtration without depleting electrolytes. Chanca piedra ("stone breaker") - phyllanthin inhibits calcium oxalate crystal formation; clinical evidence supports kidney stone dissolution. Marshmallow root (cold infusion) - mucilage soothes inflamed urinary tissue.',
        ]
      },
      {
        heading: 'Global Herbal Traditions',
        content: [
          'Ayurvedic: Ashwagandha (KSM-66 extract, 300mg at night) - reduces serum cortisol up to 28%, raises T3/T4 thyroid hormones, withanolides for testosterone support. Guduchi (Tinospora) - the same berberine alkaloid mechanism plus unique immunomodulating compounds. Amla/Indian Gooseberry - the cornerstone of all Ayurvedic cardiovascular formulas.',
          'TCM: Reishi mushroom (deep immune modulation, calming adaptogen, supports sleep quality and adrenal recovery). Schisandra berry (lignan compounds directly protect liver cells - used in Chinese hospitals). Astragalus (TA-65 compound - the only herb shown to activate telomerase, the enzyme that maintains telomere length).',
          'West African & Amazon: Moringa (anti-inflammatory glucosinolates, iron, complete amino acids). Cat\'s claw (NF-kB inhibition for autoimmune inflammation). Sea buckthorn (omega-7 fatty acid repairs mucosal membranes - gut, lungs, skin simultaneously).',
        ]
      },
      {
        heading: 'Critical Safety Information',
        content: [
          'Herb-drug interactions that must be respected: Blood thinners (warfarin) + garlic, ginger, fish oil, vitamin E = increased bleeding risk. Diabetes medication + berberine, cinnamon, bitter melon = enhanced hypoglycemic effect - monitor glucose carefully. Blood pressure medication + whole licorice root = raises blood pressure.',
          'SSRIs + St. John\'s Wort = serotonin syndrome risk - this is a serious interaction, not a minor caution. Statins + red yeast rice = redundant active compound (monacolin K) - potential for overdose effect.',
          'For anyone on multiple medications, run every herb through an herb-drug interaction checker before beginning. The clinical benefit of herbs is real. So are the interactions.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about medicinal herbs, their dosages and preparations, which herbs serve which organ systems, Ayurvedic herbs (ashwagandha, guduchi, amla, tulsi), TCM herbs (reishi, schisandra, astragalus), West African and Amazon herbs (moringa, cat\'s claw, chanca piedra), berberine vs metformin, milk thistle for liver, herb-drug interactions, and how to build a complete herbal protocol for specific conditions.',
  },

  {
    slug: 'juice-recipe-guide',
    title: 'Healing Juice Recipe Guide',
    subtitle: '64 therapeutic juice recipes mapped to insulin time zones',
    description: 'Sixty-four healing juice recipes organized by organ system and insulin zone - with preparation rules, mechanisms, and exact timing for maximum therapeutic benefit.',
    icon: '🥤',
    color: 'bg-teal-800',
    accentColor: '#0F4C6E',
    badge: '64 Recipes',
    pdfFile: 'juice_recipe_guide.pdf',
    category: 'Juice Protocols',
    keyFacts: [
      'Every recipe has an insulin zone badge',
      'Turmeric + black pepper = 2000% absorption',
      'Drink within 20 minutes of pressing',
      'Cucumber + celery always juiced with skin on',
    ],
    sections: [
      {
        heading: 'Juicing as Concentrated Medicine',
        content: [
          'Fresh juice delivers the therapeutic compounds of 10–15 servings of vegetables in a single glass - without the digestive work of breaking down fiber. This is not a replacement for whole vegetables (fiber matters deeply for gut health). It is an amplification tool: a way to flood the body with concentrated anti-inflammatory, hepatoprotective, and glucose-stabilizing compounds that would take hours of eating to achieve.',
          'The key distinction between therapeutic juicing and "wellness juicing" is precision: exact ingredients, exact quantities, exact timing, and exact preparation rules that preserve the active compounds. The difference between adding black pepper to turmeric juice and not adding it is a 2000% difference in curcumin absorption. That is a clinical distinction, not a preference.',
        ]
      },
      {
        heading: 'The 8 Preparation Rules',
        content: [
          'Rule 1: Drink within 20 minutes. Oxidation begins immediately after pressing. Therapeutic enzymes, volatile compounds, and vitamin C degrade rapidly on exposure to air.',
          'Rule 2: Turmeric always with black pepper. Piperine in black pepper increases curcumin absorption by 2000% by inhibiting its rapid hepatic metabolism.',
          'Rule 3: Ceylon cinnamon only - never Cassia. Cassia contains high coumarin levels that can cause liver damage with daily use. Steep a Ceylon stick overnight and use the liquid.',
          'Rule 4: Cucumber and celery always with skin on. The silica - which supports kidney function and skin repair - lives primarily in the skin.',
          'Rule 5: Add powdered herbs (ashwagandha, reishi, moringa) after juicing - never through the juicer. Heat and mechanical stress from the blade degrades sensitive compounds.',
          'Rule 6: Fat-soluble compounds (curcumin, vitamin E, carotenoids) require dietary fat. Blend turmeric juice with a teaspoon of coconut oil or consume alongside avocado.',
          'Rule 7: Cilantro must be fresh and raw - always. Its chelating compounds (for heavy metal removal) are heat-volatile and destroyed by any cooking.',
          'Rule 8: When using cilantro for chelation, always pair with chlorella. Cilantro mobilizes heavy metals from tissues; chlorella binds them for safe elimination.',
        ]
      },
      {
        heading: 'Morning Juice Formula (The Foundation)',
        content: [
          'Ginger Root + Turmeric Root + 2 Oranges + 1 Lemon + 2 Green Apples + Carrot + Beet.',
          'This formula is built to serve all three core goals simultaneously: the ginger and turmeric inhibit NF-kB inflammation; the beet provides nitrates that convert to nitric oxide for arterial dilation; the orange and lemon provide vitamin C for adrenal recovery and iron absorption; the green apple provides quercetin; the carrot provides beta-carotene for cellular protection.',
          'Drink only in the Peak Zone (before 10am). The beet and fruit content makes this glucose-significant - it belongs in the window when the body is most equipped to process it as fuel.',
        ]
      },
      {
        heading: 'Evening and Safe-Any-Time Juices',
        content: [
          'After 6pm, only pure vegetable and herb juices. The Kidney Flush (cucumber + celery + lemon + parsley) can be consumed any time before 7pm. The Gentle Evening Detox (cucumber + ginger + dandelion + lemon) supports liver preparation for the overnight repair cycle.',
          'Cucumber celery juice is the foundational safe-any-time juice: near-zero glycemic, silica for cellular membranes, phthalides for uric acid reduction, and 96% water for hydration. A glass in the morning before food and again in the evening after the kitchen closes forms the backbone of the daily hydration and kidney support protocol.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about therapeutic juicing, the 64 juice recipes, the insulin time zones for juice consumption, the 8 preparation rules (especially turmeric + black pepper, skin on cucumber/celery, 20-minute window), specific juice recipes for cholesterol/glucose/kidney/liver/brain/immune health, the morning juice formula, safe-any-time juices, and the difference between high-sugar and vegetable-only juices.',
  },

  {
    slug: 'healing-salad-guide',
    title: 'Healing Salad Guide',
    subtitle: '47 therapeutic salads organized by organ system',
    description: 'Forty-seven healing salads - each a precise combination of vegetables, herbs, fruits, and dressings engineered to target specific organ systems with maximum bioavailability.',
    icon: '🥗',
    color: 'bg-green-800',
    accentColor: '#166534',
    badge: '47 Salads',
    pdfFile: 'healing_salad_guide2.pdf',
    category: 'Meal Protocols',
    keyFacts: [
      'Eat salad first - fiber buffers everything after',
      'EVOO + lemon in every dressing - iron absorption +300%',
      'Turmeric in dressing always with black pepper',
      'Each salad targets a specific organ system',
    ],
    sections: [
      {
        heading: 'The Salad as a Delivery System',
        content: [
          'A healing salad is an engineered nutrient delivery system. Every component is chosen for bioavailability interaction: fat-soluble vitamins (A, D, E, K, carotenoids, curcumin) are paired with olive oil for absorption. Vitamin C from lemon is paired with iron-rich greens for 300% absorption enhancement. Anti-inflammatory turmeric is paired with black pepper for 2000% curcumin absorption.',
          'Eating salad first at every meal creates a fiber matrix in the gut that buffers the glucose response of every food consumed afterward. This is the single most accessible and evidence-supported blood glucose intervention that requires no medication and no special equipment.',
        ]
      },
      {
        heading: 'The Salad Formula',
        content: [
          'Every salad is built on the same framework: Greens Base + Vegetables + Herbs + Fruit (morning meals only) + Dressing.',
          'Greens Base: kale, spinach, arugula, watercress, romaine, dandelion, beet greens. The greens base determines the primary organ target.',
          'Vegetables: broccoli, beets, celery, cucumber, bell peppers, avocado, radishes. Each selected for the secondary organ support it provides.',
          'Fresh Herbs: parsley, cilantro, thyme, rosemary, basil, mint, turmeric root, ginger. One tablespoon of fresh herbs is a therapeutic dose - not a garnish.',
          'Dressing: always olive oil. Always lemon or ACV. Always black pepper if turmeric is present. Never bottled dressings - the oxidized seed oils in commercial dressings undo the therapeutic value of the greens.',
        ]
      },
      {
        heading: 'Salad Timing',
        content: [
          'Morning and Peak Zone (6am–2pm): all salad types safe, including those with fruit.',
          'Midday (10am–2pm): still excellent for all salads. Moderate fruit portions.',
          'Evening (5–7pm): vegetable-dominant salads. No tropical or high-sugar fruit. Cucumber, avocado, olive oil, and herb-heavy dressings.',
          'After 7pm: kitchen is closed. No salads after the kitchen closes.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about healing salads, the salad formula (greens + vegetables + herbs + fruit + dressing), the 47 salad recipes by organ system, why to eat salad first at every meal, dressing rules (EVOO always, lemon/ACV always, turmeric with black pepper), fresh herb therapeutic doses, salad timing by insulin zone, and how to build a salad for specific conditions like cholesterol, inflammation, kidney health, or blood glucose.',
  },

  {
    slug: 'overnight-body-visual',
    title: 'What Your Body Does While You Sleep',
    subtitle: 'The 7pm–6am overnight repair window - why the fast is non-negotiable',
    description: 'A complete visual and clinical guide to the overnight repair cycle - GH pulses, liver Phase II detox, autophagy, glymphatic brain flush, and exactly what to eat (or not eat) in each phase.',
    icon: '🌙',
    color: 'bg-indigo-900',
    accentColor: '#1B2A5C',
    badge: '4 Phases · 11 Hours',
    pdfFile: 'overnight_body_visual.pdf',
    category: 'Body Clock',
    keyFacts: [
      'GH pulses at 70-80% of daily total during first sleep cycle',
      'Autophagy peaks at 12–3am - halted immediately by food',
      'Glymphatic brain flush only activates during sleep',
      '7pm → 6am = 11 hours = full overnight repair activation',
    ],
    sections: [
      {
        heading: 'The Overnight Repair Principle',
        content: [
          'The body cannot repair and digest simultaneously. It always chooses digestion first. When food is present, every repair process - growth hormone secretion, autophagy, liver Phase II detox, glymphatic flushing - is deprioritized or halted entirely. This is not a minor inconvenience. It is the fundamental reason why the 7pm kitchen close is the highest-impact single habit change available.',
          'The 11-hour window from 7pm to 6am, properly protected from food, activates a cascade of repair processes that no supplement, medication, or intervention can replicate. The body already knows how to do all of this. It just needs the window.',
        ]
      },
      {
        heading: 'Wind-Down Phase (7–9pm)',
        content: [
          'Insulin drops sharply after the last meal. The pancreas begins its overnight rest. Fructose that arrives in this window - from any source - is routed directly to hepatic triglyceride synthesis rather than fuel. This is when fruit juice consumed in the evening directly raises LDL.',
          'The pineal gland begins melatonin secretion as blue light from screens fades. Core body temperature starts its gentle decline - the signal that initiates deep sleep preparation.',
          'What to consume: cucumber celery juice, chamomile tea, reishi tea, water with lemon. Nothing else.',
        ]
      },
      {
        heading: 'Deep Night Phase (9pm–12am)',
        content: [
          'Growth hormone pulses at its highest - 70–80% of the entire daily growth hormone output occurs in the first deep sleep cycle. This is not a minor secretion. It is the primary driver of cellular protein synthesis, fat mobilization, and tissue repair across every organ.',
          'Cortisol hits its absolute daily floor. The adrenal glands are in their only genuine recovery window. Ashwagandha (300mg) and reishi tea taken at 9–10pm deepen sleep quality and support this adrenal recovery.',
          'With insulin near zero, the body shifts from glucose-burning to fat-burning. Free fatty acids mobilize from adipose tissue as overnight fuel. Blood pressure drops 10–20% - the heart\'s rest period.',
        ]
      },
      {
        heading: 'Peak Repair Phase (12–3am)',
        content: [
          'Liver Phase II detox reaches its daily peak. Methylation, glucuronidation, and sulfation - the three Phase II pathways - run at full capacity between 1–3am. Traditional Chinese Medicine identified this as "liver time" millennia before modern chronobiology confirmed the circadian rhythm of hepatic detox enzymes.',
          'Autophagy reaches its maximum. Cells consume and recycle their own damaged proteins, misfolded enzymes, and dysfunctional organelles - the cellular housekeeping process that, when impaired, is associated with neurodegeneration, cancer, and accelerated aging.',
          'The glymphatic system activates exclusively during sleep. Cerebrospinal fluid is pumped through brain tissue, flushing amyloid-beta proteins, tau proteins, and metabolic waste products that accumulate during waking hours. Sleep is the brain\'s only detox window.',
          'Any food consumed during this window halts autophagy immediately. The body detects calories and redirects all metabolic resources to digestion. The repair cycle is interrupted.',
        ]
      },
      {
        heading: 'Pre-Dawn Phase (3–6am)',
        content: [
          'Cortisol begins its natural rise at 3–4am, reaching its daily peak at 8am. This is the body\'s built-in alarm clock - a natural sympathetic activation designed to prepare the organism for the demands of the day.',
          'Rising protocol: 16oz water with sea salt and fresh lemon juice. This restores the electrolytes (sodium, potassium, trace minerals) that have been slowly lost through overnight respiration, and the D-limonene in lemon activates liver bile flow to begin the day\'s detox cycle.',
          'Cucumber celery juice follows - the morning kidney flush that starts filtration before the first meal arrives.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about the overnight repair cycle (7pm-6am), growth hormone secretion, autophagy and when it activates, glymphatic brain flushing, liver Phase II detox (1-3am peak), the wind-down/deep night/peak repair/pre-dawn phases, what to eat in each phase, why the kitchen closes at 7pm, the fasting hour benefits (8hrs/12hrs/14hrs/16hrs), ashwagandha and reishi for sleep quality, and the morning rising protocol.',
  },

  {
    slug: 'daytime-body-visual',
    title: 'What Your Body Does While You\'re Awake',
    subtitle: 'The 6am–7pm active window - when to eat, move, and heal',
    description: 'A complete visual guide to daytime hormone activity - cortisol peaks, insulin sensitivity windows, muscle performance timing, and exact protocols for each phase of the active day.',
    icon: '☀️',
    color: 'bg-amber-700',
    accentColor: '#B45309',
    badge: '4 Phases · 13 Hours',
    pdfFile: 'daytime_body_visual.pdf',
    category: 'Body Clock',
    keyFacts: [
      'Cortisol peaks at 8am - the body\'s natural ignition',
      'Insulin sensitivity peaks 9–10am - best nutrient window',
      'Muscle performance peaks 2–3pm - best exercise window',
      'Melatonin precursors begin rising after 4pm',
    ],
    sections: [
      {
        heading: 'The Active Day Curve',
        content: [
          'Every hormone in the body follows a predictable daily rhythm. Cortisol peaks at 8am, providing natural energy and mental clarity. Insulin sensitivity peaks between 9–10am, making this the window of maximum nutrient absorption. Muscle performance and coordination peak around 2–3pm. Melatonin precursors begin rising after 4pm as the body prepares for its overnight repair cycle.',
          'Eating with this curve - not against it - is the single most impactful change available without any medication or supplement. The same food produces measurably different effects depending on where in this curve it lands.',
        ]
      },
      {
        heading: 'Morning Activation (6–9am)',
        content: [
          'Cortisol peaks at 8am - the natural alarm clock. Adrenaline activates the brain and muscles. This is designed morning energy, not stress. The sympathetic activation is appropriate, time-limited, and necessary.',
          'Insulin sensitivity is at its daily maximum. Glucose moves into cells with minimal insulin required. This is the best window for fruit, high-nutrient dense foods, and all therapeutic juices.',
          'The rising protocol: 16oz water + sea salt + lemon (electrolyte restoration) → cucumber celery juice (kidney flush) → Insulin Primer juice 15 minutes before breakfast → full healing breakfast.',
        ]
      },
      {
        heading: 'Peak Metabolic Window (9am–12pm)',
        content: [
          'Acetylcholine and dopamine are at their daily peak. Working memory, problem-solving, and learning operate at maximum capacity.',
          'Phase I and Phase II liver detox run simultaneously at full capacity. This is when sulforaphane from broccoli, betaine from beets, and cynarin from artichoke are all most bioavailable and most effectively processed.',
          'Thermogenesis peaks - the body burns more calories per unit of food than at any other time of day. The same meal eaten at 10am produces measurably more heat energy and less fat storage than the same meal at 6pm.',
          'The largest healing load - biggest salads, most complex juices, largest meals - belongs in this window.',
        ]
      },
      {
        heading: 'Midday Maintenance (12–3pm)',
        content: [
          'Insulin sensitivity is declining from its morning peak. Post-lunch glucose spikes are higher than morning equivalent meals. Fiber-first eating and a 10-minute walk after lunch are critical for glucose management.',
          'Physical performance peaks at 2–3pm. Muscular strength, coordination, and reaction time are all at their daily maximum. This is the optimal window for exercise, physical labor, and demanding physical activity - injury risk is statistically lowest here.',
          'Switch to low-sugar juices after 2pm. The fruit window is closing.',
        ]
      },
      {
        heading: 'Afternoon Wind-Down (3–7pm)',
        content: [
          'The 3pm energy dip is cortisol-related, not food-related. A brief walk activates GLUT4 without insulin and produces the same mental lift as caffeine without the subsequent crash.',
          'Insulin sensitivity is at its daily low. The same carbohydrate load at 6pm produces a 2–3x higher glucose spike than at 8am. Carbohydrates must be minimal and always paired with protein and fat in this window.',
          'Ashwagandha and holy basil at 5–6pm begin cortisol reduction preparation - supporting the overnight adrenal recovery window.',
          'Kitchen closes at 7pm. The overnight repair cycle begins.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about daytime hormone activity (cortisol, insulin sensitivity, adrenaline, growth hormone, melatonin precursors), the morning activation phase, peak metabolic window, midday maintenance, afternoon wind-down, best times to exercise, eat, juice, and supplement, the 3pm energy dip, why thermogenesis peaks in the morning, and how to structure a healing day from 6am to 7pm.',
  },

  {
    slug: 'healing-foods-guide',
    title: 'Healing Foods Reference Guide',
    subtitle: 'Lean proteins, leafy greens, complex carbs, healthy fats - plus global healing foods',
    description: 'A comprehensive reference for 75+ healing foods across four categories - including global foods from West African, Ayurvedic, TCM, Caribbean, and Amazon traditions not found in standard Western nutrition.',
    icon: '🌍',
    color: 'bg-stone-800',
    accentColor: '#44403C',
    badge: '75+ Foods · 9 Traditions',
    pdfFile: 'healing_foods_guide.pdf',
    category: 'Food Library',
    keyFacts: [
      'Forbidden (Black) Rice has more anthocyanins than blueberries',
      'Moringa has 25x more iron than spinach per gram',
      'Black seed oil studied in 400+ peer-reviewed papers',
      'Ghee increases fat-soluble herb bioavailability 5-10x',
    ],
    sections: [
      {
        heading: 'Beyond Western Nutrition',
        content: [
          'Western nutrition science has catalogued approximately 8% of the healing properties that traditional medicine systems have documented across millennia. The other 92% sits in Ayurvedic texts, TCM pharmacopoeias, West African food-medicine traditions, Caribbean bush medicine, and Amazon ethnobotany - confirmed increasingly by peer-reviewed research but not yet integrated into mainstream nutritional guidance.',
          'This guide intentionally crosses those boundaries. Every food from a non-Western tradition is marked with its origin - not as an exotic curiosity but as a clinical acknowledgment that these traditions discovered real mechanisms through observation long before the tools to explain them existed.',
        ]
      },
      {
        heading: 'Lean Proteins',
        content: [
          'Egg whites: the gold standard protein - bioavailability value of 100, the highest of any food. Zero saturated fat. Low phosphorus - safe for kidney patients.',
          'Wild salmon: EPA + DHA resolve inflammatory cascades at the cellular level. Best food source of vitamin D3. Raises HDL directly.',
          'Mung beans (Ayurvedic): tri-doshic protein - the only legume that balances all three Ayurvedic constitutions. Lowest flatulence-producing lectin content of all legumes. Mung sprouts have the highest enzyme activity of any sprouted food.',
          'Teff (West African/Ethiopian): 10g protein per cup cooked, highest calcium of any grain, resistant starch, 5,000 years of Ethiopian cultivation. Feeds Lactobacillus specifically.',
        ]
      },
      {
        heading: 'Forbidden Rice - The Emperor\'s Grain',
        content: [
          'Black rice (forbidden rice) was reserved for Chinese Emperors and forbidden to commoners who grew it under penalty. The reason was understood intuitively before it was scientifically confirmed: the black pigment contains more anthocyanin per gram than blueberries.',
          'Those anthocyanins cross the blood-brain barrier (the same BDNF-stimulating mechanism that makes blueberries the most studied fruit for brain health). They also lower LDL oxidation, inhibit NF-kB inflammation, and feed the gut microbiome selectively for beneficial bacteria.',
          'Glycemic index of 42–45 - meaningfully lower than brown rice at 68. When cooled overnight, resistant starch increases further. Vitamin E tocotrienols protect arterial walls. Lutein and zeaxanthin for macular protection.',
        ]
      },
      {
        heading: 'Global Healing Fats',
        content: [
          'Ghee (Ayurvedic): clarified butter used for 3,000 years as a fat carrier for fat-soluble herbs. Butyric acid - the primary fuel for colon cells and a gut lining repair compound. Removes casein and lactose - tolerated by dairy-sensitive patients. As a carrier for turmeric, ashwagandha, and other fat-soluble herbs, it increases bioavailability 5–10x versus water-based preparations.',
          'Black seed oil / Nigella sativa (Middle Eastern / Ayurvedic): thymoquinone activates PPAR-gamma - the same pathway as thiazolidinedione diabetes medications. Lowers fasting glucose and HbA1c in multiple RCTs. "A remedy for everything except death" - recorded in Islamic medicine. 400+ peer-reviewed papers. 0.5–1 tsp daily, never heated.',
          'Unrefined red palm oil (West African): completely different from refined palm oil - refining destroys all therapeutic value. Contains the highest tocotrienol vitamin E of any fat, the most bioavailable carotene source of any food, lycopene, and CoQ10. Used as both food and medicine across West and Central Africa for millennia.',
        ]
      },
    ],
    chatScope: 'You are Dr. Vera answering questions about healing foods across four categories (lean proteins, leafy greens, complex carbs with fiber, healthy fats), global healing foods from West African, Ayurvedic, TCM, Caribbean, Amazon, and Mediterranean traditions, black (forbidden) rice and its anthocyanin mechanisms, moringa and its 25x iron content, ghee as an Ayurvedic herb carrier, black seed oil (thymoquinone), bitter melon, baobab, chanca piedra, and how to incorporate global healing foods into a daily protocol.',
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug)
}

export const categories = [...new Set(guides.map(g => g.category))]
