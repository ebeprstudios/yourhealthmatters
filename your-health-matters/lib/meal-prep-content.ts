// lib/meal-prep-content.ts
// 10 rotating Saturday meal prep themes — one per week, cycling annually
// Each theme serves a different health goal but uses universal insulin time zone framework

export interface Meal {
  name: string
  components: string
  whyItWorks: string
}

export interface MealPrepWeek {
  theme: string
  emoji: string
  color: string
  tagline: string
  intro: string
  peakMeals: {
    label: string
    meals: Meal[]
  }
  middayMeals: {
    label: string
    meals: Meal[]
  }
  eveningMeals: {
    label: string
    meals: Meal[]
  }
  morningJuice: {
    name: string
    ingredients: string
    benefit: string
  }
  shoppingList: string[]
  sundayPrep: string[]
  proTip: string
}

export const mealPrepWeeks: MealPrepWeek[] = [

  // ── WEEK 1 — Heart Health and Cholesterol ────────────────────────
  {
    theme: 'Heart Health and Cholesterol',
    emoji: '❤️',
    color: '#7C1F3A',
    tagline: 'Lower LDL, raise HDL, protect your arteries through every meal',
    intro: 'This week every meal is built around three goals: binding LDL before it absorbs, raising HDL through healthy fats, and protecting arterial walls with antioxidants. The insulin time zones matter here because the same meal eaten at 8am produces a completely different cholesterol response than the same meal at 8pm.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Cholesterol Reset Breakfast', components: 'Rolled oats with ground flaxseed, walnuts, blueberries, and Ceylon cinnamon - topped with a drizzle of extra virgin olive oil', whyItWorks: 'Beta-glucan from oats binds bile acids and removes LDL from the gut before absorption. Flaxseed SDG lignans lower LDL an additional 10%. Walnuts raise HDL. Blueberries protect against LDL oxidation.' },
        { name: 'LDL Buster Salad', components: 'Kale massaged with lemon and olive oil, topped with artichoke hearts, chickpeas, avocado, pomegranate seeds, and a tahini-lemon dressing', whyItWorks: 'Kale bile acid binding removes cholesterol directly from the gut. Artichoke cynarin stimulates bile production. Pomegranate is the only food shown to reverse existing arterial plaque.' },
        { name: 'Salmon and Arugula Bowl', components: 'Wild salmon over arugula, roasted beets, cucumber, walnuts, and olive oil - lemon squeezed over everything', whyItWorks: 'EPA and DHA from salmon raise HDL and lower triglycerides. Arugula erucin generates nitric oxide for arterial dilation. Beet nitrates improve blood flow within 90 minutes.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Fiber Bridge Lunch', components: 'Lentil soup with garlic, turmeric, black pepper, and spinach - served with a side of cucumber slices', whyItWorks: 'Lentils provide soluble fiber that continues LDL-binding work through the afternoon. Garlic allicin inhibits cholesterol synthesis. Spinach provides folate for homocysteine clearance.' },
        { name: 'Avocado and Egg White Wrap', components: 'Egg whites scrambled with sauteed kale and garlic, wrapped in a whole grain tortilla with sliced avocado and salsa', whyItWorks: 'Egg whites are pure lean protein with no cholesterol burden. Avocado phytosterols compete with dietary cholesterol for absorption, reducing how much enters the bloodstream.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Mediterranean Plate', components: 'Baked salmon or sardines with roasted asparagus, steamed broccoli, and a large side salad with olive oil and lemon - no carbohydrates after 5pm', whyItWorks: 'Asparagus is the highest glutathione vegetable - the master antioxidant that prevents LDL oxidation. Broccoli sulforaphane activates protective genes. Evening is the worst time for carbohydrates - protein and vegetables only.' },
        { name: 'Garlic Herb Chicken with Greens', components: 'Baked chicken breast with roasted collard greens, steamed bok choy, and a bowl of bone broth with ginger', whyItWorks: 'Collard greens are second only to kale for bile acid binding and LDL removal. Bone broth glycine supports liver function overnight. Keep it light and vegetable-heavy after 5pm.' },
      ]
    },
    morningJuice: {
      name: 'Arterial Flush Juice',
      ingredients: 'Beet + Pomegranate + Lemon + Ginger + Cucumber (skin on) + small piece of turmeric + pinch of black pepper',
      benefit: 'Drink before 10am. Beet nitrates dilate arteries within 90 minutes. Pomegranate punicalagins protect arterial walls. Ginger reduces platelet stickiness. Always in the Peak Zone only.'
    },
    shoppingList: [
      'Wild salmon (3-4 portions)', 'Sardines (2 cans)', 'Chicken breast (2 portions)',
      'Rolled oats', 'Lentils (dry)', 'Chickpeas (can)', 'Whole grain tortillas',
      'Kale (2 bunches)', 'Arugula (1 bag)', 'Spinach (1 bag)', 'Collard greens (1 bunch)',
      'Artichoke hearts (jar)', 'Asparagus (1 bunch)', 'Broccoli (1 head)', 'Bok choy (1 head)',
      'Avocados (3)', 'Beets (3 medium)', 'Cucumber (4)', 'Pomegranate or juice (100% only)',
      'Walnuts', 'Ground flaxseed', 'Blueberries', 'Lemons (6)',
      'Extra virgin olive oil', 'Tahini', 'Garlic (1 bulb)', 'Fresh ginger', 'Turmeric root',
      'Ceylon cinnamon', 'Black pepper', 'Sea salt'
    ],
    sundayPrep: [
      'Cook a large pot of lentil soup - stores 5 days in fridge',
      'Massage and store kale in an airtight container - stays fresh 4 days',
      'Roast a tray of beets - use all week in salads and bowls',
      'Cook a batch of chickpeas if using dry (or rinse canned)',
      'Make a large tahini-lemon dressing - stores 1 week',
      'Pre-portion walnuts and flaxseed for daily oats',
      'Wash and dry all greens for quick assembly throughout the week'
    ],
    proTip: 'Eat your salad before every meal this week without exception. The bile acid binding from kale and collard greens works best on an empty stomach before other food arrives.'
  },

  // ── WEEK 2 — Energy and Performance ─────────────────────────────
  {
    theme: 'Energy and Performance',
    emoji: '⚡',
    color: '#B8690A',
    tagline: 'Fuel your body at the right time to maximize energy, focus, and physical output',
    intro: 'This week is about strategic fueling - putting the right nutrients in the right windows so your energy curve works with your biology instead of against it. The biggest energy mistake most people make is eating their largest carbohydrate load at dinner when the body has nowhere to put it. This week we flip that completely.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Power Breakfast Bowl', components: 'Quinoa with egg whites, sauteed spinach, avocado, cherry tomatoes, and a drizzle of olive oil - topped with hemp seeds and a squeeze of lemon', whyItWorks: 'Quinoa is a complete protein and complex carb in one food. Peak Zone is when carbohydrates fuel cells most efficiently. Hemp seeds provide GLA for sustained energy without the crash. This is your largest carbohydrate meal of the day.' },
        { name: 'Pre-Workout Beet and Berry Smoothie', components: 'Frozen blueberries, banana, beet (small, raw), spinach, hemp seeds, almond milk, Ceylon cinnamon - consume 60-90 minutes before exercise', whyItWorks: 'Beet nitrates peak in the bloodstream at 90 minutes and increase oxygen efficiency in muscles by up to 16%. Blueberry BDNF improves neuromuscular coordination. Banana potassium prevents cramping during exercise.' },
        { name: 'Performance Salad', components: 'Mixed greens with grilled chicken, quinoa, roasted sweet potato cubes, pumpkin seeds, avocado, and a lemon-olive oil dressing', whyItWorks: 'Sweet potato before 2pm provides sustained complex carbohydrate energy without the afternoon crash. Pumpkin seeds are the highest zinc source - critical for testosterone and recovery. Chicken provides complete amino acids for muscle maintenance.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Recovery Bridge Lunch', components: 'Brown rice or black (forbidden) rice with grilled salmon, roasted broccoli, and a miso-ginger dressing', whyItWorks: 'Post-workout or mid-day, black rice anthocyanins reduce exercise-induced inflammation. Salmon EPA and DHA speed muscle recovery. Broccoli sulforaphane clears exercise metabolic waste. This is your last grain-heavy meal of the day.' },
        { name: 'Energy Sustain Wrap', components: 'Whole grain wrap with turkey, avocado, watercress, cucumber, and mustard - no added sugar', whyItWorks: 'Turkey tryptophan supports serotonin and prevents afternoon mood dips. Watercress PEITC activates Nrf2 antioxidant protection. Avocado provides steady fuel without blood sugar fluctuation.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Recovery and Repair Dinner', components: 'Baked chicken or fish with a large salad of mixed greens, cucumber, celery, and olive oil - steamed asparagus on the side', whyItWorks: 'Evening is the repair window - not the fuel window. High protein, low carbohydrate allows growth hormone to work uninterrupted overnight. Asparagus glutathione supports cellular repair. Keep dinner light so overnight fasting begins with an empty digestive tract.' },
        { name: 'Herb-Roasted Salmon with Greens', components: 'Salmon with dill and lemon, roasted on a bed of wilted spinach, with a side of steamed bok choy and bone broth', whyItWorks: 'Salmon EPA and DHA do their deepest anti-inflammatory work overnight. Bone broth glycine aids sleep quality and supports joint recovery. Spinach magnesium relaxes muscles for overnight repair.' },
      ]
    },
    morningJuice: {
      name: 'Nitric Oxide Performance Juice',
      ingredients: 'Beet + Watermelon + Ginger + Lemon + Cucumber (skin on) + Celery (skin on) + small Carrot',
      benefit: 'Drink 60-90 minutes before your most demanding activity of the day. Beet nitrates plus watermelon citrulline create a powerful nitric oxide surge that increases oxygen delivery to muscles and brain.'
    },
    shoppingList: [
      'Chicken breast (4 portions)', 'Wild salmon (4 portions)', 'Turkey breast (sliced)',
      'Egg whites (carton)', 'Hemp seeds', 'Pumpkin seeds',
      'Quinoa (dry)', 'Brown rice or black rice', 'Whole grain wraps', 'Sweet potatoes (3)',
      'Spinach (2 bags)', 'Mixed greens (1 bag)', 'Watercress (1 bunch)', 'Arugula (1 bag)',
      'Broccoli (2 heads)', 'Asparagus (1 bunch)', 'Bok choy (1 head)', 'Cucumber (4)', 'Celery (1 bunch)',
      'Avocados (4)', 'Beet (2)', 'Watermelon (small)', 'Blueberries (2 cups)', 'Banana (3)',
      'Lemons (6)', 'Fresh ginger', 'Dill', 'Miso paste (white)', 'Almond milk',
      'Extra virgin olive oil', 'Bone broth (cartons)', 'Ceylon cinnamon', 'Black pepper'
    ],
    sundayPrep: [
      'Cook a large batch of quinoa - stores 5 days',
      'Cook black rice - cool overnight to increase resistant starch',
      'Roast a tray of sweet potato cubes for the week',
      'Pre-portion hemp seeds and pumpkin seeds into daily servings',
      'Marinate chicken breast portions in olive oil, garlic, and lemon',
      'Prep beet and watermelon chunks for daily juicing',
      'Wash and dry all greens - store in containers with paper towel to absorb moisture'
    ],
    proTip: 'Move your largest carbohydrate meal to breakfast or mid-morning this week. If you currently eat the most carbohydrates at dinner, this single shift will change your energy levels within 3 days.'
  },

  // ── WEEK 3 — Blood Sugar Balance ─────────────────────────────────
  {
    theme: 'Blood Sugar Balance',
    emoji: '🩸',
    color: '#633806',
    tagline: 'Stabilize glucose, reduce cravings, and protect insulin sensitivity all day long',
    intro: 'Blood sugar balance is not just for people with diabetes. Every single person experiences glucose spikes and crashes throughout the day - they just call it energy dips, brain fog, afternoon cravings, and difficulty sleeping. This week every meal is architected to keep glucose steady from morning to kitchen close at 7pm.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Glucose Primer Breakfast', components: 'Egg whites with sauteed Swiss chard, mushrooms, and garlic - served alongside half an avocado and a tablespoon of ground flaxseed', whyItWorks: 'Swiss chard syringic acid mimics insulin independently - activating glucose uptake without requiring insulin signaling. Egg whites are pure protein with zero glycemic impact. Flaxseed mucilage slows gastric emptying of everything else you eat after.' },
        { name: 'Cinnamon Oat Bowl', components: 'Rolled oats cooked with Ceylon cinnamon stick, topped with walnuts, ground flaxseed, and a small handful of blueberries - no honey or syrup', whyItWorks: 'Ceylon cinnamon cinnamaldehyde activates GLUT4 glucose transporters independently of insulin - this is the only food compound with this mechanism. Beta-glucan from oats creates a gel that slows glucose absorption. Always Ceylon - never Cassia.' },
        { name: 'Fiber-First Lunch Bowl', components: 'Start with a full bowl of cucumber and celery sticks with hummus. Then: lentils over spinach with roasted garlic, olive oil, lemon, and fresh herbs', whyItWorks: 'Eating fiber-first before any carbohydrates creates a physical barrier in the gut that blunts glucose absorption from everything consumed after. Lentils have a glycemic index of 29 - the lowest of all legumes. Chickpeas in hummus provide chromium for insulin receptor support.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Glucose Guard Salad', components: 'Large salad of bitter greens, cucumber, celery, avocado, pumpkin seeds, and sardines or tuna with ACV-olive oil dressing', whyItWorks: 'ACV in the dressing inhibits alpha-glucosidase - the enzyme that converts starch to glucose - for everything consumed with this meal. Bitter greens stimulate digestive enzymes. No carbohydrates after 2pm this week.' },
        { name: 'ACV Pre-Meal Ritual', components: '1 tbsp raw apple cider vinegar in 8oz water with a pinch of cinnamon - drink 15 minutes before your midday meal', whyItWorks: 'This is not a meal - it is a preparation. Acetic acid in ACV reduces the glycemic response of the next meal by 20-35%. This is one of the most evidence-supported simple interventions for blood sugar management.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Evening Glucose Guard Plate', components: 'Baked fish or chicken with a large plate of non-starchy roasted vegetables - broccoli, zucchini, asparagus, bell peppers - with olive oil and lemon. No grains, no starchy vegetables after 5pm.', whyItWorks: 'Insulin sensitivity is at its lowest in the evening. The same carbohydrate load at 6pm produces 2-3x the glucose spike as at 8am. Evening meals must be protein and non-starchy vegetables only. This is not deprivation - it is biology.' },
        { name: 'Bitter Melon and Egg Stir-Fry', components: 'Sliced bitter melon stir-fried with egg whites, garlic, ginger, and a small amount of tamari - served over a bed of steamed bok choy', whyItWorks: 'Bitter melon contains three distinct insulin-mimicking compounds: charantin, polypeptide-p, and vicine. Every traditional medicine system in the tropics independently discovered this vegetable for glucose management. This is the most potent single food for post-meal glucose control.' },
      ]
    },
    morningJuice: {
      name: 'Insulin Primer Juice',
      ingredients: 'Cucumber (skin on) + Celery (skin on) + Bitter melon (small piece) + Lemon + Ginger + Swiss chard leaves + pinch of Ceylon cinnamon powder added after juicing',
      benefit: 'Drink 15 minutes before breakfast. This primes insulin receptors before the first glucose load of the day arrives. The bitter compounds from bitter melon and chard begin glucose sensitizing work immediately.'
    },
    shoppingList: [
      'Egg whites (carton)', 'Chicken breast (3 portions)', 'White fish (3 portions)', 'Sardines or tuna (3 cans)',
      'Lentils (dry)', 'Chickpeas (2 cans)', 'Rolled oats',
      'Swiss chard (1 bunch)', 'Spinach (1 bag)', 'Bitter melon (2 - find at Asian or Caribbean grocery)', 'Bok choy (1 head)',
      'Broccoli (1 head)', 'Asparagus (1 bunch)', 'Zucchini (2)', 'Bell peppers (3)', 'Mushrooms (1 pack)',
      'Cucumber (6)', 'Celery (2 bunches)', 'Avocados (3)', 'Garlic (2 bulbs)', 'Lemons (8)',
      'Walnuts', 'Pumpkin seeds', 'Ground flaxseed', 'Blueberries',
      'Ceylon cinnamon sticks (not powder - not Cassia)', 'Fresh ginger', 'Raw apple cider vinegar',
      'Extra virgin olive oil', 'Tamari (low sodium)', 'Hummus'
    ],
    sundayPrep: [
      'Cook a large pot of lentils - season simply with garlic and bay leaf',
      'Roast two trays of non-starchy vegetables (broccoli, asparagus, zucchini, peppers)',
      'Pre-make ACV water portions in small bottles for daily pre-meal ritual',
      'Prep bitter melon - slice, salt, rinse, and store for stir-fry nights',
      'Make a large batch of ACV-olive oil dressing for the week',
      'Steep Ceylon cinnamon sticks in water overnight for daily oat cooking liquid',
      'Hard prep cucumber and celery sticks for the fridge - grab-and-go fiber first'
    ],
    proTip: 'This week, never eat a carbohydrate alone. Every grain, fruit, or starchy vegetable must be accompanied by protein, fat, AND fiber at the same meal. This rule alone eliminates most glucose spikes.'
  },

  // ── WEEK 4 — Gut Health and Digestion ────────────────────────────
  {
    theme: 'Gut Health and Digestion',
    emoji: '🌿',
    color: '#412402',
    tagline: 'Feed your microbiome, heal your gut lining, and restore digestive power',
    intro: 'Seventy percent of your immune system lives in your gut. Your gut produces 90% of your serotonin. Your gut microbiome communicates directly with your brain, your hormone system, and your immune response. This week every meal is built to feed beneficial bacteria, heal the gut lining, and restore digestive enzyme activity.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Probiotic Power Breakfast', components: 'Plain unsweetened Greek yogurt or kefir with ground flaxseed, blueberries, sliced banana, and a drizzle of raw honey - topped with raw pumpkin seeds', whyItWorks: 'Greek yogurt and kefir provide live Lactobacillus and Bifidobacterium strains. Flaxseed and banana provide prebiotic fiber that feeds those bacteria after arrival. Raw honey contains oligosaccharides that selectively feed beneficial bacteria.' },
        { name: 'Enzyme-Rich Tropical Bowl', components: 'Fresh papaya or pineapple (both - not canned) with fresh ginger, lime, hemp seeds, and a handful of fresh mint', whyItWorks: 'Papain in fresh papaya breaks down proteins on an empty or near-empty stomach. Bromelain in fresh pineapple reduces gut inflammation and improves protein absorption. Both enzymes are destroyed by canning or heat. Fresh only, Peak Zone only.' },
        { name: 'Prebiotic Lunch Salad', components: 'Dandelion greens, chicory, artichoke hearts, roasted garlic, leeks, and chickpeas with olive oil and lemon - topped with fresh parsley', whyItWorks: 'Artichoke inulin is the highest prebiotic fiber concentration of any vegetable. Dandelion and chicory are the most potent bitter tonics for stimulating digestive enzyme production. Garlic and leeks feed Bifidobacterium specifically.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Fermented Foods Plate', components: 'A portion of wild salmon or chicken alongside kimchi or sauerkraut (unpasteurized), sliced avocado, cucumber, and a bowl of miso soup', whyItWorks: 'Unpasteurized fermented vegetables contain live bacteria plus prebiotic fiber - a probiotic and prebiotic delivery in one food. Miso provides digestive enzymes and beneficial bacteria. Salmon omega-3 reduces gut wall inflammation.' },
        { name: 'Gut-Lining Soup', components: 'Bone broth with slippery elm powder stirred in, diced zucchini, ginger, turmeric, black pepper, garlic, and fresh cilantro added after cooking', whyItWorks: 'Slippery elm mucilage coats the gut lining and supports healing of intestinal permeability. Bone broth glycine and proline are the building blocks of gut lining collagen. Ginger reduces gut inflammation and improves motility.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Digestive Rest Plate', components: 'Steamed fish or poached chicken with steamed carrots, zucchini, and baked sweet potato (small) - everything soft and easy to digest', whyItWorks: 'Evening meals should be the easiest to digest of the day. Steamed and poached foods require minimal digestive enzyme work, preserving resources for overnight gut repair. Sweet potato provides prebiotic fiber without gut-irritating lectins.' },
        { name: 'Warming Kitchari', components: 'Mung beans and basmati rice cooked together with ghee, turmeric, cumin, coriander, ginger, and a small amount of leafy greens stirred in at the end', whyItWorks: 'Kitchari is the foundational Ayurvedic healing food - used for gut rest, microbiome reset, and digestive repair for 3000 years. Mung beans are the most easily digested legume. Ghee provides butyric acid - the primary fuel for colon cells. This meal requires almost no digestive work.' },
      ]
    },
    morningJuice: {
      name: 'Gut Reset Juice',
      ingredients: 'Cucumber (skin on) + Celery (skin on) + Fresh ginger + Lemon + Aloe vera inner fillet (2 tbsp) + Fennel fronds + Fresh mint',
      benefit: 'Aloe vera inner fillet coats the gut lining from the first sip of the day. Fennel reduces bloating and calms gut spasms. Drink slowly and first thing - before any food.'
    },
    shoppingList: [
      'Wild salmon (2 portions)', 'Chicken breast (2 portions)', 'White fish (2 portions)',
      'Plain Greek yogurt (unsweetened)', 'Kefir (plain)', 'Miso paste (white)',
      'Mung beans (dry)', 'Basmati rice', 'Chickpeas (1 can)', 'Bone broth (3 cartons)',
      'Dandelion greens', 'Chicory or endive', 'Spinach (1 bag)', 'Fresh parsley (1 bunch)', 'Fresh cilantro (1 bunch)', 'Fresh mint (1 bunch)',
      'Artichoke hearts (jar)', 'Leeks (2)', 'Fennel bulb (1)', 'Zucchini (3)', 'Carrots (1 bag)', 'Sweet potatoes (2)',
      'Fresh papaya or pineapple (fresh only)', 'Banana (3)', 'Blueberries', 'Limes (4)', 'Lemons (6)',
      'Avocados (3)', 'Cucumber (5)', 'Celery (1 bunch)', 'Fresh ginger (large piece)',
      'Kimchi or sauerkraut (unpasteurized - from refrigerator section)', 'Aloe vera inner fillet (fresh or bottled pure)',
      'Slippery elm powder (health store)', 'Ghee', 'Ground flaxseed', 'Hemp seeds', 'Pumpkin seeds', 'Raw honey',
      'Turmeric', 'Cumin', 'Coriander', 'Extra virgin olive oil'
    ],
    sundayPrep: [
      'Make a large pot of bone broth or buy high quality cartons - use all week',
      'Cook a batch of mung beans - they cook fast and store 4 days',
      'Prepare kitchari base (dry-roasted spices + ghee) ready to cook in 20 minutes any evening',
      'Ferment your own vegetables OR buy unpasteurized kimchi or sauerkraut from the refrigerator section only',
      'Pre-slice fennel and store in water to stay crisp',
      'Pre-portion slippery elm powder for daily bone broth',
      'Wash and dry dandelion and chicory - these are the hardest greens to find so use them early in the week'
    ],
    proTip: 'Eat fermented foods daily this week - even a small amount. Two tablespoons of kimchi or sauerkraut with lunch provides billions of live bacteria. More is not better - consistency is what rebuilds the microbiome.'
  },

  // ── WEEK 5 — Brain and Focus ──────────────────────────────────────
  {
    theme: 'Brain and Focus',
    emoji: '🧠',
    color: '#2D1B69',
    tagline: 'Feed your brain the compounds it was designed to run on',
    intro: 'The brain is the most metabolically demanding organ in the body - it consumes 20% of your total energy while comprising just 2% of your body weight. But it is also the most sensitive to what you feed it. This week every meal prioritizes the nutrients that grow new neural connections, protect existing ones, and keep cognition sharp throughout the day.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'BDNF Breakfast', components: 'Wild blueberries over oats with Lion\'s Mane mushroom powder stirred in, topped with walnuts, ground flaxseed, and a sprinkle of cacao nibs', whyItWorks: 'Lion\'s Mane is the only food compound shown to stimulate Nerve Growth Factor and regenerate myelin - the protective coating on neurons. Blueberry anthocyanins cross the blood-brain barrier and measurably increase BDNF within 12 weeks of daily use. Walnuts are the original brain food - their ALA, polyphenols, and melatonin support every aspect of cognitive function.' },
        { name: 'Cerebral Blood Flow Salad', components: 'Arugula and spinach base with roasted beets, walnuts, dark chocolate shavings (85%+), avocado, and a pomegranate vinaigrette', whyItWorks: 'Beet nitrates increase frontal lobe blood flow by 16% in clinical studies - measurable improvement in executive function and working memory. Arugula erucin provides additional nitric oxide. Dark chocolate flavanols increase cerebral blood flow and reduce mental fatigue.' },
        { name: 'Omega Brain Bowl', components: 'Wild salmon over mixed greens with cucumber, avocado, edamame, sesame seeds, and a ginger-tamari dressing', whyItWorks: 'DHA from wild salmon is the primary structural fat of the brain - 60% of the brain\'s fat content is DHA. Low DHA is directly associated with cognitive decline, depression, and poor concentration. This is the most important single meal for long-term brain health.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Focus Bridge Lunch', components: 'Lentil and mushroom soup with thyme and rosemary, served with a side salad of watercress and walnuts', whyItWorks: 'Lion\'s Mane mushrooms (add to any soup) are the only food that regenerates neural tissue. Watercress PEITC activates Nrf2 - protecting brain cells from oxidative damage. Rosemary rosemarinic acid crosses the blood-brain barrier and inhibits neuroinflammation.' },
        { name: 'Saffron Chicken Plate', components: 'Saffron-marinated chicken breast over sauteed spinach with roasted sweet potato and a side of walnuts', whyItWorks: 'Saffron at 30mg daily is clinically comparable to fluoxetine for mild-moderate depression. Spinach folate supports methylation - the chemical process underlying neurotransmitter synthesis. Sweet potato provides steady glucose for brain fuel without spiking.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Myelin Support Dinner', components: 'Baked sardines or salmon with sauteed broccoli, kale, and garlic in olive oil - a side of roasted asparagus', whyItWorks: 'The highest concentration of DHA and EPA comes from small oily fish. B12 from sardines is critical for myelin synthesis - the insulation around every nerve cell. Asparagus provides the highest vegetable glutathione for brain antioxidant protection.' },
        { name: 'Evening Wind-Down Plate', components: 'Turkey breast with roasted root vegetables (parsnip, carrot, sweet potato) and steamed spinach - a cup of chamomile or lion\'s mane tea after', whyItWorks: 'Turkey tryptophan converts to serotonin then melatonin - supporting the brain\'s overnight cleaning cycle (glymphatic flushing). The glymphatic system only activates during deep sleep. What you eat at dinner directly affects how thoroughly your brain detoxes overnight.' },
      ]
    },
    morningJuice: {
      name: 'Cerebral Blood Flow Juice',
      ingredients: 'Beet + Dark grape juice (small amount) + Pomegranate + Lemon + Fresh ginger + Cucumber (skin on) + Fresh rosemary sprig (steep, do not juice)',
      benefit: 'Drink before 10am. Beet and pomegranate together produce the most potent combination of nitric oxide and antioxidant protection for cerebrovascular health. Rosemary rosemarinic acid enhances memory consolidation.'
    },
    shoppingList: [
      'Wild salmon (3 portions)', 'Sardines (3 cans)', 'Turkey breast (2 portions)', 'Chicken breast (2 portions)',
      'Eggs (for whites)', 'Edamame (frozen)',
      'Rolled oats', 'Lentils (dry)', 'Mushrooms - any variety (2 packs)', 'Lion\'s Mane mushroom powder (health store)',
      'Blueberries (fresh or frozen - wild blueberries preferred)', 'Dark cherries', 'Pomegranate', 'Beets (3)',
      'Arugula (1 bag)', 'Spinach (2 bags)', 'Watercress (1 bunch)', 'Kale (1 bunch)',
      'Broccoli (1 head)', 'Asparagus (1 bunch)', 'Sweet potatoes (3)', 'Avocados (3)',
      'Walnuts (large bag)', 'Ground flaxseed', 'Sesame seeds', 'Cacao nibs (85%+ dark chocolate)',
      'Saffron threads (small amount goes a long way)', 'Fresh rosemary', 'Fresh thyme',
      'Ginger', 'Garlic (1 bulb)', 'Lemons (6)', 'Tamari (low sodium)',
      'Extra virgin olive oil', 'Chamomile tea'
    ],
    sundayPrep: [
      'Make a large Lion\'s Mane mushroom broth to use as a soup base all week',
      'Roast a tray of beets for salads and juice',
      'Soak walnuts overnight - soaking reduces phytic acid and improves omega-3 absorption',
      'Pre-portion Lion\'s Mane powder into daily servings (1 tsp) for oats and soups',
      'Marinate chicken in saffron, olive oil, and lemon - store covered 24 hours before cooking',
      'Cook a large pot of lentils',
      'Prepare cacao nib and walnut mix for daily oat topping'
    ],
    proTip: 'Lion\'s Mane mushroom must be taken consistently for 8-12 weeks before neurological benefits are measurable. Start this week and do not stop. It works - but only with commitment to the timeline.'
  },

  // ── WEEK 6 — Kidney and Liver Support ────────────────────────────
  {
    theme: 'Kidney and Liver Support',
    emoji: '🫘',
    color: '#0C447C',
    tagline: 'Support your body\'s two master filtration organs through every meal',
    intro: 'The kidneys filter 200 liters of blood every day. The liver performs over 500 distinct biochemical functions - including producing bile for fat digestion, metabolizing hormones, filtering toxins, and synthesizing proteins. This week every meal is selected to support these two organs without adding burden to either.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Kidney-Safe Breakfast', components: 'Egg whites with sauteed arugula, bell peppers, and zucchini - served with cucumber slices and a small portion of strawberries', whyItWorks: 'Egg whites provide pure protein without the phosphorus burden of egg yolks. Arugula is a gentle kidney diuretic. Cucumber silica supports kidney membrane integrity. Strawberries and bell peppers are kidney-safe vitamin C sources - low potassium, low phosphorus.' },
        { name: 'Liver Activation Salad', components: 'Dandelion greens and arugula with beet, artichoke hearts, avocado, and a lemon-olive oil dressing with fresh dill', whyItWorks: 'Dandelion stimulates bile production - the liver\'s primary cholesterol clearance mechanism. Artichoke cynarin is the most potent plant bile stimulant known. Beet betaine drives liver methylation - the pathway that clears homocysteine, estrogens, and chemical toxins.' },
        { name: 'Liver Phase I and II Support Bowl', components: 'Broccoli (chopped 40 min before cooking) over quinoa with garlic, lemon, and olive oil - topped with fresh parsley and cilantro', whyItWorks: 'Broccoli sulforaphane activates both Phase I and Phase II liver detox pathways simultaneously. The 40-minute chop-wait rule is essential - it completes the myrosinase enzyme conversion before heat denatures it. Parsley and cilantro provide additional liver Phase II support.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Kidney Flush Plate', components: 'Cucumber and celery salad with lemon dressing, alongside grilled white fish and steamed cauliflower - drink 16oz of water with lemon before this meal', whyItWorks: 'Cauliflower is the ideal kidney-safe complex carbohydrate - very low potassium, very low phosphorus, high vitamin C. Celery phthalides reduce uric acid directly. White fish is the lightest protein for kidney filtration - no purines from dark meat.' },
        { name: 'Chanca Piedra Detox Soup', components: 'Light broth soup with zucchini, celery, fresh parsley, garlic, ginger, and a squeeze of lemon - chanca piedra tea on the side', whyItWorks: 'This combination specifically supports kidney stone prevention and dissolution. Parsley increases urinary output. Chanca piedra inhibits calcium oxalate crystal formation. Celery lowers uric acid. Light soups reduce the filtration burden on kidneys compared to dense protein meals.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Liver Night Prep Dinner', components: 'Baked salmon with roasted asparagus, steamed bok choy, and a side of sauerkraut (2 tbsp) - milk thistle tea after dinner', whyItWorks: 'The liver runs its deepest detox between 1-3am. Evening is when you prepare it - not when you burden it. Asparagus glutathione is the liver\'s primary antioxidant. Sauerkraut beneficial bacteria support the gut-liver axis. Milk thistle silymarin protects liver cells overnight.' },
        { name: 'Kidney Rest Plate', components: 'Steamed white fish with roasted zucchini, steamed green beans, and a side of cooling cucumber soup (cold blended cucumber, mint, lemon, and a little yogurt)', whyItWorks: 'The kidney\'s filtration rate slows in the evening - this is appropriate rest. Light, easy-to-process foods in the evening honor this natural slowdown. Cucumber cooling soup hydrates from the inside and supports overnight kidney filtration preparation.' },
      ]
    },
    morningJuice: {
      name: 'Kidney Flush Juice',
      ingredients: 'Cucumber (skin on, large) + Celery (skin on, 4 stalks) + Lemon (whole, peeled) + Fresh parsley (large handful) + Ginger + small piece of turmeric + pinch of black pepper',
      benefit: 'This is the cornerstone kidney protocol juice. Drink every morning before food all week. Parsley increases urinary output. Celery reduces uric acid. Cucumber silica supports kidney membranes. Lemon citrate prevents stone formation.'
    },
    shoppingList: [
      'Egg whites (carton)', 'White fish - tilapia, cod, or halibut (4 portions)', 'Salmon (2 portions)',
      'Plain Greek yogurt (small)',
      'Quinoa (dry)', 'Cauliflower (1 large head)', 'Green beans (1 bag)',
      'Dandelion greens (1 bunch)', 'Arugula (1 bag)', 'Fresh parsley (2 large bunches)', 'Fresh cilantro (1 bunch)', 'Fresh dill (1 bunch)', 'Fresh mint (1 bunch)',
      'Artichoke hearts (jar)', 'Asparagus (2 bunches)', 'Bok choy (2 heads)', 'Zucchini (4)', 'Bell peppers (3)',
      'Broccoli (2 heads)', 'Cucumber (8)', 'Celery (2 bunches)', 'Beets (3)',
      'Avocados (3)', 'Strawberries (1 pint)', 'Lemons (10)',
      'Garlic (2 bulbs)', 'Fresh ginger (large piece)', 'Turmeric root',
      'Sauerkraut (unpasteurized - refrigerator section)', 'Milk thistle tea or capsules',
      'Chanca piedra tea (health store or Amazon)', 'Olive oil', 'Black pepper'
    ],
    sundayPrep: [
      'Make a large pot of light vegetable broth for the week',
      'Chop broccoli and wait 40 minutes before storing - this ensures sulforaphane is pre-formed',
      'Pre-juice a large batch of kidney flush juice (drink same day - do not store more than 24 hours)',
      'Prepare cold cucumber mint soup and refrigerate',
      'Roast a tray of asparagus - stores well for 4 days',
      'Brew a large batch of chanca piedra tea and refrigerate for the week',
      'Pre-portion parsley for daily juicing'
    ],
    proTip: 'Drink 8-10 glasses of water daily this week - more than you think you need. The kidneys filter through water. Dehydration is the single most common cause of reduced kidney function in otherwise healthy people.'
  },

  // ── WEEK 7 — Anti-Inflammatory ────────────────────────────────────
  {
    theme: 'Anti-Inflammatory Reset',
    emoji: '🌊',
    color: '#3C3489',
    tagline: 'Calm systemic inflammation through every meal, every day',
    intro: 'Inflammation is the body\'s repair mechanism - acute inflammation is essential and life-saving. But chronic, low-grade inflammation that never fully resolves is the underlying driver of most modern chronic disease. This week every meal is selected for its specific anti-inflammatory mechanisms - and we avoid every common food that keeps inflammation elevated.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Golden Anti-Inflammatory Breakfast', components: 'Oats cooked with fresh turmeric and ginger, topped with tart cherries, blueberries, walnuts, and a drizzle of EVOO - add black pepper over everything', whyItWorks: 'Tart cherry anthocyanins are clinically equivalent to ibuprofen at 2 tablespoons of concentrate daily - inhibiting the same COX-2 enzyme. Turmeric curcumin simultaneously blocks NF-kB, COX-2, and 5-LOX. Walnuts ALA is the only plant omega-3 that directly resolves inflammatory cascades.' },
        { name: 'Omega-3 Power Salad', components: 'Spinach and watercress base with wild salmon, avocado, cucumber, fresh ginger dressing, walnuts, and a sprinkle of hemp seeds', whyItWorks: 'Wild salmon EPA and DHA are the only dietary compounds that actively resolve inflammation rather than just blocking it - through resolvins and protectins. Watercress PEITC activates Nrf2 - the master cellular defense against oxidative stress.' },
        { name: 'Turmeric Golden Bowl', components: 'Black rice with roasted vegetables (broccoli, cauliflower, bell peppers) tossed in turmeric, black pepper, and olive oil - topped with soft boiled egg and tahini drizzle', whyItWorks: 'Black rice anthocyanins inhibit NF-kB through a different pathway than turmeric - using both creates additive anti-inflammatory effect. Cauliflower sulforaphane activates Nrf2. Bell pepper vitamin C prevents curcumin oxidation.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Boswellia and Ginger Soup', components: 'Lentil soup spiced with fresh ginger, turmeric, black pepper, cumin, coriander - boswellia supplement taken with this meal alongside food', whyItWorks: 'Boswellic acids (AKBA) inhibit 5-LOX - the inflammatory pathway that neither NSAIDs nor turmeric fully address. Taking boswellia with a fat-containing meal increases absorption significantly. Ginger COX-2 inhibition is additive with turmeric for triple-pathway blockade.' },
        { name: 'Tart Cherry and Salmon Plate', components: 'Baked salmon with roasted beets, arugula, tart cherries (fresh or frozen, unsweetened), and a rosemary-olive oil dressing', whyItWorks: 'The combination of salmon omega-3 resolvins and tart cherry anthocyanins creates the most comprehensive anti-inflammatory meal combination studied in clinical research. Rosemary rosmarinic acid adds COX-2 inhibition. Arugula nitrates reduce vascular inflammation.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Golden Turmeric Broth Dinner', components: 'Bone broth with fresh turmeric, ginger, garlic, black pepper, and coconut milk - served with steamed bok choy and a small portion of baked fish', whyItWorks: 'Coconut milk fat dramatically increases curcumin absorption from turmeric. Bone broth glycine is directly anti-inflammatory in the gut lining. Bok choy glucosinolates continue Phase II activation that supports the body\'s own anti-inflammatory enzyme production.' },
        { name: 'Mediterranean Evening Plate', components: 'Baked white fish with roasted cherry tomatoes, olives, capers, and fresh basil - served over a bed of wilted spinach with lemon and olive oil', whyItWorks: 'EVOO oleocanthal inhibits COX-1 and COX-2 simultaneously - the same mechanism as ibuprofen but through daily dietary use rather than acute dosing. Cherry tomatoes lycopene (more bioavailable when cooked) reduces vascular inflammation. Capers contain the highest concentration of quercetin of any common food.' },
      ]
    },
    morningJuice: {
      name: 'Triple Pathway Anti-Inflammatory Juice',
      ingredients: 'Pineapple (fresh, small amount) + Tart cherry juice (unsweetened) + Turmeric root + Ginger root + Lemon + Cucumber (skin on) + Celery (skin on) + Black pepper pinch added after',
      benefit: 'Pineapple bromelain, tart cherry anthocyanins, and turmeric curcumin address three different inflammatory pathways simultaneously. Drink in the Peak Zone only - pineapple is high sugar. This is the most potent single juice for systemic inflammation reduction.'
    },
    shoppingList: [
      'Wild salmon (3 portions)', 'White fish (2 portions)', 'Eggs (for soft boiling)',
      'Rolled oats', 'Black (forbidden) rice', 'Lentils (dry)', 'Bone broth (3 cartons)',
      'Tart cherries (fresh, frozen, or 100% unsweetened concentrate)', 'Blueberries', 'Fresh pineapple', 'Cherry tomatoes',
      'Spinach (2 bags)', 'Watercress (1 bunch)', 'Arugula (1 bag)', 'Bok choy (2 heads)',
      'Broccoli (1 head)', 'Cauliflower (1 head)', 'Bell peppers (3)', 'Beets (2)', 'Cucumber (4)', 'Celery (1 bunch)',
      'Avocados (3)', 'Walnuts', 'Hemp seeds', 'Tahini', 'Olives', 'Capers',
      'Fresh turmeric root (large piece)', 'Fresh ginger (large piece)', 'Fresh rosemary', 'Fresh basil', 'Garlic (2 bulbs)',
      'Tart cherry juice (100% unsweetened)', 'Coconut milk (can)', 'Extra virgin olive oil', 'Black pepper', 'Lemons (8)',
      'Boswellia supplement (health store)'
    ],
    sundayPrep: [
      'Make a large golden turmeric broth concentrate - freeze half for next week',
      'Roast a full tray of mixed vegetables with turmeric and black pepper',
      'Cook black rice - cool overnight to maximize resistant starch and anthocyanin stability',
      'Prepare tart cherry concentrate portions for daily oats and juice',
      'Make a large rosemary-olive oil dressing',
      'Pre-portion boswellia supplement with the meal it goes with (always with fat)',
      'Soak and cook lentils with anti-inflammatory spice blend'
    ],
    proTip: 'The most anti-inflammatory thing you can do this week has nothing to do with food - close the kitchen at 7pm every single night without exception. Overnight fasting reduces the key inflammatory marker CRP by a measurable amount within just one week.'
  },

  // ── WEEK 8 — Hormonal Balance ──────────────────────────────────────
  {
    theme: 'Hormonal Balance',
    emoji: '🌸',
    color: '#4A1942',
    tagline: 'Support estrogen clearance, adrenal recovery, thyroid function, and cortisol regulation through food',
    intro: 'Hormones are chemical messengers - and what you eat is one of the most powerful ways to communicate with them. This week is for anyone managing stress, fatigue, thyroid symptoms, menstrual irregularity, perimenopause, low testosterone, adrenal depletion, or simply feeling hormonally out of sync. The food here speaks directly to your endocrine system.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Adrenal Recovery Breakfast', components: 'Guava or kiwi with Greek yogurt, pumpkin seeds, ground flaxseed, and a sprinkle of ashwagandha powder (quarter teaspoon) - topped with a drizzle of raw honey', whyItWorks: 'Guava has the highest vitamin C of any food (4x orange) - and the adrenal glands are the only organs that store vitamin C, depleting it with every single stress response. Kiwi spans 13 organ systems and provides inositol for insulin-hormone signaling. Pumpkin seeds provide zinc for testosterone and progesterone production.' },
        { name: 'Cruciferous Estrogen Clearance Bowl', components: 'Broccoli and cauliflower (both raw, chopped 40 minutes before eating) with avocado, hemp seeds, lemon-tahini dressing, and a side of flaxseed-topped smoothie', whyItWorks: 'Indole-3-carbinol and DIM from raw cruciferous vegetables are the most effective food compounds for estrogen detoxification - they shift estrogen metabolism toward protective pathways and away from proliferative ones. Raw is essential. Cooking reduces DIM content by 50%.' },
        { name: 'Thyroid Support Salad', components: 'Cooked (not raw) kale and broccoli over quinoa with wild salmon, Brazil nuts (2-3 only), pumpkin seeds, and a lemon-olive oil dressing', whyItWorks: 'For thyroid health, cruciferous vegetables must be COOKED - raw goitrogens compete with iodine for thyroid uptake. Brazil nuts provide selenium - the critical cofactor for converting inactive T4 to active T3. Wild salmon provides iodine directly. Never more than 3 Brazil nuts daily.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Liver Hormone Clearance Lunch', components: 'Beet and spinach salad with artichoke hearts, fresh parsley, avocado, and lemon-olive oil dressing - beet kvass or beet juice on the side', whyItWorks: 'The liver is responsible for clearing used hormones - particularly estrogen and cortisol. Beet betaine and artichoke cynarin both support liver methylation, the pathway through which hormones are deactivated. Parsley apigenin is a natural estrogen modulator.' },
        { name: 'Shatavari and Tempeh Plate', components: 'Tempeh stir-fried with bok choy, ginger, garlic, and tamari - over black rice, with shatavari herbal tea on the side', whyItWorks: 'Tempeh fermented isoflavones are estrogen-modulating - they bind to estrogen receptors adaptively, helping when estrogen is low and competing when estrogen is high. Shatavari from Ayurvedic medicine is the most studied plant for female hormonal balance at any life stage.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Cortisol Wind-Down Dinner', components: 'Turkey breast with roasted sweet potato, steamed spinach with garlic, and a cup of ashwagandha-cinnamon tea (ashwagandha taken at night for maximum cortisol reduction)', whyItWorks: 'Turkey tryptophan converts to serotonin which converts to melatonin - directly supporting the cortisol-melatonin balance. Ashwagandha at night reduces serum cortisol by up to 28% over 8 weeks. The cortisol floor window between 9pm and midnight is when adrenal recovery happens - what you consume before then matters.' },
        { name: 'Magnesium Rest Plate', components: 'Baked salmon with roasted pumpkin, steamed Swiss chard and spinach, topped with pumpkin seeds and a squeeze of lemon', whyItWorks: 'Magnesium deficiency is the most common nutritional driver of hormonal imbalance - it is required for over 300 enzyme reactions including progesterone synthesis. Swiss chard has the highest magnesium of any leafy green. Pumpkin seeds are the highest magnesium seed. Salmon supports melatonin production.' },
      ]
    },
    morningJuice: {
      name: 'Adrenal and Hormone Support Juice',
      ingredients: 'Cucumber (skin on) + Celery (skin on) + Beet + Lemon + Fresh ginger + Parsley (large handful) + Guava or kiwi (for vitamin C load)',
      benefit: 'The adrenal glands deplete vitamin C with every stress response. This juice is designed to refill adrenal vitamin C reserves first thing every morning. Beet betaine primes liver hormone clearance pathways for the day.'
    },
    shoppingList: [
      'Wild salmon (3 portions)', 'Turkey breast (2 portions)', 'Tempeh (2 packages)',
      'Greek yogurt (plain)', 'Eggs',
      'Quinoa', 'Black rice', 'Sweet potato (2)',
      'Kale (1 bunch - cooked this week)', 'Spinach (2 bags)', 'Swiss chard (1 bunch)', 'Arugula (1 bag)', 'Fresh parsley (2 bunches)',
      'Broccoli (1 head)', 'Cauliflower (1 head)', 'Bok choy (1 head)', 'Asparagus (1 bunch)', 'Pumpkin (small)',
      'Artichoke hearts (jar)', 'Beets (3)', 'Cucumber (4)', 'Celery (1 bunch)',
      'Avocados (3)', 'Guava (fresh if available) or kiwi (4)', 'Brazil nuts (small bag - use only 2-3 daily)',
      'Pumpkin seeds', 'Hemp seeds', 'Ground flaxseed', 'Tahini',
      'Fresh ginger', 'Garlic (2 bulbs)', 'Turmeric', 'Tamari',
      'Ashwagandha powder (KSM-66 form preferred)', 'Shatavari tea or powder (Ayurvedic herb - health store or Amazon)',
      'Raw honey', 'Ceylon cinnamon', 'Extra virgin olive oil', 'Lemons (6)'
    ],
    sundayPrep: [
      'Chop all cruciferous vegetables and wait 40 minutes before storing (for DIM content)',
      'Cook black rice - cool overnight',
      'Pre-marinate tempeh in tamari, ginger, and garlic',
      'Make ashwagandha-cinnamon tea blend for evening use all week',
      'Pre-portion Brazil nuts (2-3 per day maximum - mark them clearly)',
      'Prepare adrenal hormone support juice prep bags (pre-cut ingredients)',
      'Make a large batch of lemon-tahini dressing'
    ],
    proTip: 'Take your ashwagandha at night - not morning. The mechanism is cortisol reduction, and cortisol needs to drop in the evening for proper sleep and adrenal recovery. Morning ashwagandha works against the natural cortisol morning peak your body needs to function.'
  },

  // ── WEEK 9 — Immune and Cellular Defense ─────────────────────────
  {
    theme: 'Immune and Cellular Defense',
    emoji: '🛡️',
    color: '#4A0E0E',
    tagline: 'Activate your immune system and protect every cell against damage',
    intro: 'Your immune system is not a single thing - it is a layered defense network that requires a specific set of micronutrients to function. Zinc, selenium, vitamin C, vitamin D, beta-glucans, and polyphenols all play distinct roles in different immune pathways. This week every meal contributes a piece of that network.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Immune Activation Breakfast', components: 'Oats with Lion\'s Mane and Reishi mushroom powder stirred in, topped with elderberry jam (or fresh elderberries), walnuts, and a sprinkle of zinc-rich pumpkin seeds', whyItWorks: 'Beta-glucans from mushrooms (Lion\'s Mane and Reishi) are the most studied polysaccharides for NK cell activation - the front line of antiviral defense. Elderberry sambucus compounds physically block viral proteins from attaching to cell surfaces. Pumpkin seeds provide zinc - the mineral that every immune cell requires to function.' },
        { name: 'NK Cell Activating Salad', components: 'Spinach and watercress base with garlic-roasted broccoli, red bell pepper, pumpkin seeds, avocado, and a vitamin C-rich lemon dressing', whyItWorks: 'NK (Natural Killer) cell activity peaks in the late morning - this is when immune-supporting nutrients are most bioavailable and most useful. Bell pepper provides 3x more vitamin C than orange. Broccoli sulforaphane activates Nrf2 cellular defense. Garlic allicin is directly antimicrobial.' },
        { name: 'Selenium and Zinc Power Bowl', components: 'Wild salmon over quinoa with sauteed mushrooms, roasted garlic, steamed broccoli, Brazil nuts (2-3), and pumpkin seeds', whyItWorks: 'Selenium (Brazil nuts) is the cofactor for glutathione peroxidase - the enzyme that neutralizes viral free radicals inside cells. Zinc (pumpkin seeds, salmon) is required for T-cell development. These two minerals together address both innate and adaptive immunity.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Antimicrobial Immunity Soup', components: 'Bone broth base with garlic, ginger, turmeric, mushrooms (shiitake preferred), astragalus root (simmer and remove before eating), and wilted spinach', whyItWorks: 'Astragalus polysaccharides are used in Chinese hospitals to support immune recovery after chemotherapy. Shiitake beta-glucans activate macrophages - the immune cells that identify and destroy pathogens. Garlic allicin is directly antimicrobial across bacteria, viruses, and fungi.' },
        { name: 'Vitamin C and Bioflavonoid Plate', components: 'Kiwi and guava salad with mixed greens, red and yellow bell peppers, fresh parsley, avocado, and a citrus dressing - alongside a portion of sardines', whyItWorks: 'Kiwi vitamin C plus bioflavonoids significantly increases white blood cell motility - how fast immune cells move to sites of infection. Guava has the highest vitamin C of any common food. Parsley apigenin modulates immune response without over-activating it.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Immune Rest and Repair Dinner', components: 'Baked salmon or sardines with roasted garlic broccoli, steamed bok choy, and a side of miso soup with mushrooms and scallions', whyItWorks: 'The immune system does its most active repair work overnight - but only if the digestive system is resting. Light, nutrient-dense evening meals support overnight immune activity. Miso provides beneficial bacteria that support the gut-immune axis. Mushroom beta-glucans support overnight NK cell and macrophage activity.' },
        { name: 'Reishi Wind-Down Plate', components: 'Turkey or chicken with roasted sweet potato and steamed spinach - a cup of Reishi mushroom tea 30 minutes before bed', whyItWorks: 'Reishi is simultaneously an immune modulator and a sleep quality enhancer. It activates immune cells during the day and supports deep sleep architecture at night - when immune memory consolidation occurs. This dual mechanism makes it uniquely valuable taken in the evening.' },
      ]
    },
    morningJuice: {
      name: 'Immune Fortification Juice',
      ingredients: 'Orange + Lemon + Ginger (large piece) + Turmeric root + Cucumber (skin on) + Kiwi (1) + Small piece of fresh elderberry if available (or 1 tsp elderberry syrup added after)',
      benefit: 'Drink in Peak Zone only. The combination of vitamin C (orange, lemon, kiwi), beta-carotene, ginger antimicrobial compounds, and turmeric creates a comprehensive immune activation and protection protocol in one glass.'
    },
    shoppingList: [
      'Wild salmon (3 portions)', 'Sardines (2 cans)', 'Turkey or chicken (2 portions)',
      'Rolled oats', 'Quinoa', 'Sweet potato (2)',
      'Shiitake mushrooms (fresh or dried)', 'Any mushroom variety (2 packs)',
      'Lion\'s Mane mushroom powder', 'Reishi mushroom powder or tea',
      'Spinach (2 bags)', 'Watercress (1 bunch)', 'Kale (1 bunch)', 'Bok choy (1 head)', 'Fresh parsley (1 bunch)',
      'Broccoli (2 heads)', 'Bell peppers - red and yellow (4)', 'Garlic (3 bulbs)',
      'Kiwi (6)', 'Guava (4 if available) or extra kiwi', 'Oranges (4)', 'Lemons (8)',
      'Avocados (3)', 'Brazil nuts (small bag - 2-3 daily max)', 'Pumpkin seeds', 'Walnuts',
      'Fresh ginger (very large piece)', 'Fresh turmeric root',
      'Elderberry jam (no added sugar) or elderberry syrup',
      'Bone broth (3 cartons)', 'Miso paste (white)', 'Astragalus root (dried - health store)',
      'Miso soup packets', 'Black pepper', 'Olive oil'
    ],
    sundayPrep: [
      'Make a large astragalus-mushroom immune broth - simmer astragalus root 2 hours, remove before using',
      'Prepare elderberry syrup if making from scratch (simmer dried berries, strain, add honey)',
      'Portion Lion\'s Mane and Reishi powder for daily oats and soups',
      'Roast 2 full heads of garlic for use throughout the week',
      'Dry-roast pumpkin seeds and Brazil nuts separately - store in airtight containers',
      'Prep immune juice ingredient bags for the week',
      'Make a large pot of miso broth for evening soups'
    ],
    proTip: 'Sleep is the most powerful immune intervention that exists. Every hour of sleep deprivation reduces NK cell activity by a measurable percentage. No supplement, food, or protocol compensates for consistently poor sleep. Close the kitchen at 7pm and protect 7-8 hours minimum this week.'
  },

  // ── WEEK 10 — Bones, Joints, and Longevity ────────────────────────
  {
    theme: 'Bones, Joints, and Longevity',
    emoji: '💪',
    color: '#3D3D00',
    tagline: 'Build bones that last, protect cartilage, and slow the pace of cellular aging',
    intro: 'Bone density peaks in your late twenties - and then the direction of change depends entirely on what you eat, how you move, and how much inflammation you carry. This week is for anyone thinking about long-term structural health - whether you are 25 building the foundation or 65 protecting what you have built.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Bone Building Breakfast', components: 'Chia seeds soaked overnight in almond milk with blackstrap molasses (1 tsp), topped with almonds, teff porridge alongside, and a portion of sardines', whyItWorks: 'Teff is the highest calcium grain known - more calcium per gram than dairy. Sardines with bones provide highly bioavailable calcium plus vitamin D for absorption. Blackstrap molasses is the highest non-dairy calcium source. Chia seeds provide strontium - the mineral that deposits into bone matrix.' },
        { name: 'Collagen Support Salad', components: 'Mixed greens with red bell pepper, strawberries, kiwi, cucumber, avocado, and pumpkin seeds - alongside a cup of bone broth with a squeeze of lemon', whyItWorks: 'Vitamin C from bell pepper and kiwi is the essential cofactor for collagen synthesis - the structural protein of bone, cartilage, and connective tissue. Without sufficient vitamin C, collagen cannot form regardless of calcium intake. Bone broth provides collagen precursors (glycine, proline, hydroxyproline) directly.' },
        { name: 'Silicon and Mineral Bowl', components: 'Oats with cucumbers stirred in after cooking (for silica), topped with blackberries, almonds, hemp seeds, and a drizzle of olive oil', whyItWorks: 'Silicon (silica from cucumber) is the overlooked bone mineral - it is required for calcium to deposit correctly into bone matrix. Without it, calcium supplementation is less effective. Almonds provide the highest bone-building mineral density of any nut - calcium, magnesium, and phosphorus in ideal ratio.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Joint Protection Lunch', components: 'Salmon and avocado bowl over black rice with roasted broccoli, fresh ginger, turmeric, black pepper, and a bone broth reduction sauce', whyItWorks: 'Omega-3 from salmon directly reduces the synovial inflammation that damages joint cartilage over time. Broccoli sulforaphane has been shown in clinical trials to slow cartilage degradation. Ginger COX-2 inhibition reduces joint inflammation through the same pathway as NSAIDs.' },
        { name: 'Magnesium and K2 Plate', components: 'Tempeh and kale stir-fry with garlic, sesame, and tamari - alongside roasted sweet potato and pumpkin seeds', whyItWorks: 'Vitamin K2 (from fermented foods like tempeh) is the traffic director of calcium - it ensures calcium goes to bones instead of arteries. Without K2, calcium supplementation can calcify arteries. Kale provides K1 which converts to K2. Pumpkin seeds provide magnesium - which activates vitamin D for calcium absorption.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Bone Broth Evening Ritual', components: 'A cup of bone broth with dissolved collagen peptides, alongside baked white fish with steamed broccoli and sauteed spinach with garlic', whyItWorks: 'Bone broth taken in the evening provides glycine and proline - the raw materials for overnight bone and cartilage repair. Collagen synthesis peaks during deep sleep. Spinach magnesium activates the vitamin D that directs calcium into bone overnight.' },
        { name: 'Sardine and Greens Plate', components: 'Sardines (with bones) served over wilted collard greens and bok choy with olive oil and lemon - alongside roasted asparagus', whyItWorks: 'Sardines with bones are the most bioavailable calcium source in the food supply. Collard greens provide calcium without the oxalate load of spinach (spinach oxalates bind calcium, reducing absorption). Bok choy is the highest calcium leafy green with no oxalate interference.' },
      ]
    },
    morningJuice: {
      name: 'Silica and Bone Mineral Juice',
      ingredients: 'Cucumber (skin on, large - the silica lives here) + Celery (skin on) + Kale (2 leaves, cooked first for thyroid patients) + Lemon + Ginger + Small piece of fresh turmeric + Parsley (handful)',
      benefit: 'Silica from cucumber skin is the most bioavailable form of this bone-essential mineral. Drink daily this week. Parsley is the highest vitamin K green per gram - critical for calcium routing to bones. Lemon citrate prevents calcium from depositing in arteries.'
    },
    shoppingList: [
      'Sardines with bones (4 cans)', 'Wild salmon (3 portions)', 'White fish (2 portions)', 'Tempeh (2 packages)',
      'Chia seeds', 'Teff flour or teff grain', 'Rolled oats', 'Black rice',
      'Kale (2 bunches)', 'Collard greens (1 bunch)', 'Spinach (2 bags)', 'Bok choy (2 heads)', 'Fresh parsley (1 bunch)', 'Arugula (1 bag)',
      'Broccoli (2 heads)', 'Asparagus (2 bunches)', 'Sweet potato (2)', 'Cucumber (6 - the silica is in the skin)',
      'Red bell peppers (3)', 'Strawberries (1 pint)', 'Kiwi (4)', 'Blackberries (1 pint)',
      'Avocados (2)', 'Almonds', 'Pumpkin seeds', 'Hemp seeds',
      'Blackstrap molasses (health store - highest non-dairy calcium)',
      'Bone broth (4 cartons)', 'Collagen peptides powder (unflavored)',
      'Almond milk (unsweetened)', 'Tamari', 'Sesame seeds', 'Sesame oil',
      'Fresh ginger', 'Fresh turmeric root', 'Garlic (2 bulbs)', 'Lemons (8)',
      'Extra virgin olive oil', 'Black pepper'
    ],
    sundayPrep: [
      'Make overnight chia pudding with almond milk and blackstrap molasses for Monday breakfast',
      'Cook teff porridge batch - stores 4 days in fridge, reheat with a little almond milk',
      'Make a large pot of bone broth with extra collagen peptides stirred in',
      'Roast broccoli and asparagus trays for the week',
      'Pre-portion sardine portions alongside their bone broth servings',
      'Marinate tempeh in tamari, garlic, and sesame oil overnight',
      'Pre-cut cucumber into sticks - keep skin on - for daily juicing and snacking'
    ],
    proTip: 'Vitamin D without K2 can actually increase cardiovascular risk by directing calcium to arteries instead of bones. This week eat tempeh or natto (fermented soy - the highest K2 food) at least 4 times to ensure the calcium from all these bone-building foods goes where it belongs.'
  },
]

export function getMealPrepWeek(weekNumber: number): MealPrepWeek {
  const index = weekNumber % mealPrepWeeks.length
  return mealPrepWeeks[index]
}

// Get current ISO week number (shared utility)
export function getCurrentWeekNumber(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1)
  const diff = now.getTime() - start.getTime()
  const oneWeek = 1000 * 60 * 60 * 24 * 7
  return Math.floor(diff / oneWeek)
}
