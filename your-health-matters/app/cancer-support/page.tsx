import Nav from '@/components/layout/Nav'
import DrVeraChat from '@/components/chat/DrVeraChat'
import GuideDownloadGate from '@/components/guides/GuideDownloadGate'
import { getGuideBySlug } from '@/lib/data'
import Link from 'next/link'

const cancerGuide = getGuideBySlug('cancer-patient-protocol')

const chatScope = `You are Dr. Vera answering questions specifically about cancer patient nutrition. 
Focus on: Vitamin K-safe foods for warfarin patients, liver support during chemotherapy, 
WBC and immune support through food and herbs, neutropenic diet rules, safe supplements 
for warfarin patients, grapefruit contraindications, the daily healing juice formula for 
cancer patients, and the kitchen-closes-at-7pm overnight liver detox protocol. 
Always emphasize that all recommendations must be reviewed with both the oncologist and cardiologist 
before implementation. Be compassionate - this audience is navigating a difficult health journey.`

const safefoods = [
  { name: 'Beets', why: 'Very low Vitamin K. Betaine drives liver methylation to clear chemo metabolites. Nitrates dilate arteries safely with pacemaker.' },
  { name: 'Cucumber (skin on)', why: 'Near-zero Vitamin K. Silica for cellular repair. 96% water - critical hydration during treatment.' },
  { name: 'Wild Salmon (cooked)', why: 'Very low Vitamin K. Omega-3 EPA+DHA reduce treatment inflammation. Vitamin D3. Always cooked.' },
  { name: 'Lentils', why: 'Very low Vitamin K. Iron and folate for WBC production. 18g protein per cup. Lowest glycemic legume.' },
  { name: 'Bell Peppers (raw)', why: 'Very low Vitamin K. Highest Vitamin C of any vegetable. Vitamin C is consumed rapidly by immune cells during treatment.' },
  { name: 'Blueberries', why: 'Very low Vitamin K. Anthocyanin antioxidant protection for WBCs during oxidative treatment stress.' },
  { name: 'Pumpkin Seeds', why: 'Very low Vitamin K. Highest zinc of any seed - every immune cell requires zinc to function.' },
  { name: 'Egg Whites', why: 'Zero Vitamin K. Zero phosphorus. Highest bioavailability protein (BV=100). Safe every treatment phase.' },
  { name: 'Artichoke Hearts', why: 'Low Vitamin K. Cynarin - most potent plant compound for liver bile stimulation. Clears chemo metabolites.' },
  { name: 'Turkey Tail Mushroom (cooked)', why: 'No Vitamin K concern. PSK/PSP approved as cancer adjunct in Japan. NK cell activation.' },
  { name: 'Quinoa', why: 'Very low Vitamin K. Complete protein. All 9 amino acids for tissue repair. Magnesium for heart rhythm.' },
  { name: 'Garlic (cooked)', why: 'Very low Vitamin K. Allicin activates liver Phase II. Antimicrobial during neutropenic phases.' },
]

const avoidFoods = [
  { name: 'Spinach', reason: 'Very high Vitamin K (483mcg/cup cooked). Directly destabilizes INR on warfarin.' },
  { name: 'Kale', reason: 'Extremely high Vitamin K (1062mcg/cup cooked). One serving can shift INR dangerously.' },
  { name: 'Moringa Leaves', reason: '141mcg Vitamin K per 100g. High iron but unsafe on warfarin.' },
  { name: 'Grapefruit', reason: 'Inhibits CYP3A4 - metabolizes both warfarin AND many chemo drugs. Double contraindication.' },
  { name: 'Parsley (large amounts)', reason: 'Extremely high Vitamin K per gram. Avoid therapeutic doses completely.' },
  { name: 'Raw Sprouts', reason: 'Neutropenic diet rule - bacterial contamination risk when WBCs are suppressed.' },
  { name: 'Raw Fish', reason: 'Contamination risk is life-threatening with suppressed WBC counts.' },
  { name: 'Alcohol', reason: 'Hepatotoxic and potentiates warfarin unpredictably. No safe amount during treatment.' },
]

export default function CancerSupportPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      {/* Hero */}
      <header className="pt-24 pb-16 relative overflow-hidden" style={{ backgroundColor: '#4A0E0E' }}>
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Cancer Support</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-5xl">🎗️</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full">
                  Specialized Protocol
                </span>
                <span className="text-xs text-white/60">Clinical Nutrition</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Cancer Patient Healing Protocol
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Customized nutrition for cancer patients managing warfarin therapy,
                pacemaker care, and active treatment - simultaneously.
              </p>
            </div>
          </div>

          {/* Key facts */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
            {[
              'All foods verified low Vitamin K - warfarin safe',
              'Liver flush protocol safe during chemotherapy',
              'WBC and immune support through food and herbs',
              'Cardiac-safe with pacemaker - every food reviewed',
            ].map((fact, i) => (
              <div key={i} className="flex items-start gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <span className="text-yellow-400 mt-0.5">✦</span>
                <span className="text-white/90 text-sm">{fact}</span>
              </div>
            ))}
          </div>

          {/* Download — email-gated */}
          <div className="mt-8 flex flex-wrap gap-3">
            {cancerGuide && <GuideDownloadGate guide={cancerGuide} variant="detail" />}
            <Link href="/#guides" className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/25 transition-all text-sm">
              All Guides
            </Link>
          </div>
        </div>
      </header>

      {/* Critical alert */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        <div className="bg-rose-50 border-l-4 border-rose-700 rounded-xl p-5">
          <p className="text-rose-900 font-semibold text-sm mb-2">
            Important - Three Conditions. One Protocol.
          </p>
          <p className="text-rose-800 text-sm leading-relaxed">
            This protocol is built for a patient managing active cancer treatment, a pacemaker
            with warfarin therapy, and liver stress from chemotherapy simultaneously.
            Every food and supplement recommendation has been filtered through all three
            conditions. All changes must be reviewed with both your oncologist and cardiologist
            before implementation.
          </p>
        </div>
      </div>

      {/* Main content + sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

          {/* Main content */}
          <article className="lg:col-span-2 space-y-8">

            {/* Safe Foods */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
              <div className="bg-forest-900 px-6 py-4">
                <h2 className="font-serif text-xl text-white">
                  Safe Foods - Low Vitamin K, Warfarin Approved
                </h2>
                <p className="text-forest-300 text-sm mt-1">
                  Every food here is verified safe for warfarin therapy and active treatment
                </p>
              </div>
              <div className="divide-y divide-stone-100">
                {safefoods.map((food, i) => (
                  <div key={i} className={`px-6 py-3 ${i % 2 === 0 ? 'bg-forest-50/50' : 'bg-white'}`}>
                    <div className="flex items-start gap-3">
                      <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
                      <div>
                        <p className="font-semibold text-forest-900 text-sm">{food.name}</p>
                        <p className="text-stone-500 text-xs leading-relaxed mt-0.5">{food.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avoid */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
              <div className="px-6 py-4" style={{ backgroundColor: '#4A0E0E' }}>
                <h2 className="font-serif text-xl text-white">
                  Foods to Avoid Completely
                </h2>
                <p className="text-red-200 text-sm mt-1">
                  High Vitamin K or treatment contraindicated
                </p>
              </div>
              <div className="divide-y divide-stone-100">
                {avoidFoods.map((food, i) => (
                  <div key={i} className={`px-6 py-3 ${i % 2 === 0 ? 'bg-red-50/40' : 'bg-white'}`}>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5 flex-shrink-0">⛔</span>
                      <div>
                        <p className="font-semibold text-red-900 text-sm">{food.name}</p>
                        <p className="text-stone-500 text-xs leading-relaxed mt-0.5">{food.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily juice */}
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
              <div className="bg-forest-800 px-6 py-4">
                <h2 className="font-serif text-xl text-white">Daily Healing Juice Formula</h2>
                <p className="text-forest-300 text-sm mt-1">Morning Peak Zone only - before 10am</p>
              </div>
              <div className="px-6 py-5">
                <div className="bg-forest-50 rounded-xl p-4 mb-4">
                  <p className="text-forest-900 font-semibold text-sm mb-2">Ingredients:</p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    1 small Beet + 1 large Cucumber (skin on) + 4 stalks Celery (skin on) +
                    1 Lemon peeled + 1 inch fresh Ginger + half inch Turmeric root +
                    pinch of black pepper added after juicing +
                    half teaspoon Spirulina powder stirred in after juicing
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Liver Support', desc: 'Beet betaine + lemon D-limonene activate Phase I and II detox' },
                    { label: 'WBC Support', desc: 'Spirulina iron + turmeric anti-inflammatory protection' },
                    { label: 'Cardiac Safe', desc: 'Very low Vitamin K throughout. Beet nitrates gentle on pacemaker.' },
                  ].map(({ label, desc }) => (
                    <div key={label} className="bg-stone-50 rounded-xl p-3 text-center">
                      <p className="text-forest-900 font-semibold text-xs mb-1">{label}</p>
                      <p className="text-stone-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-stone-400 text-xs mt-4 leading-relaxed">
                  Drink within 20 minutes of pressing. Confirm spirulina with oncologist before beginning.
                  Add black pepper and spirulina AFTER juicing - never through the juicer.
                </p>
              </div>
            </div>

            {/* Protocol sections */}
            {[
              {
                title: 'Liver Support During Chemotherapy',
                color: '#712B13',
                content: [
                  'Chemotherapy agents are hepatotoxic by design - the liver metabolizes and clears every drug administered. The morning protocol activates liver bile flow and methylation pathways before the first meal. Artichoke hearts at lunch stimulate bile production throughout the day.',
                  'Milk thistle silymarin (280mg with every meal) is used in European hospitals for chemotherapy liver protection. It regenerates liver cells and reduces ALT and AST enzyme elevations. Confirm with oncologist - most chemotherapy protocols are compatible.',
                  'The kitchen closes at 7pm without exception. The liver runs its deepest Phase II detox between 1 and 3am. Food after 7pm diverts blood flow from chemotherapy metabolite clearance to digestion at the exact hours when clearance needs to peak.',
                ]
              },
              {
                title: 'White Blood Cell and Immune Support',
                color: '#0C447C',
                content: [
                  'Turkey Tail mushroom (PSK and PSP) is approved as a cancer adjunct therapy in Japan specifically for WBC recovery. Beta-glucans activate NK cells and macrophages - the front line of immune defense. Always cook mushrooms thoroughly during neutropenic phases.',
                  'Astragalus root polysaccharides stimulate bone marrow activity and are used in Chinese hospitals alongside chemotherapy for WBC recovery. 500mg extract daily. Confirm with oncologist before starting.',
                  'Sleep is the most powerful WBC intervention available. Bone marrow produces white blood cells most actively during deep sleep between 10pm and 3am. Reishi mushroom at night supports both immune activation and deep sleep architecture simultaneously.',
                ]
              },
              {
                title: 'Cardiac Safety with Pacemaker and Warfarin',
                color: '#7C1F3A',
                content: [
                  'The rule with warfarin is consistency, not elimination of Vitamin K. The same low amount of Vitamin K daily allows the physician to calibrate warfarin dose accurately. This protocol keeps Vitamin K low because treatment cycles cause variable food intake - low and consistent is safer than high and consistent.',
                  'Every food supplement interaction with warfarin must be disclosed to the cardiologist. Introduce new foods one at a time and monitor INR for 1-2 weeks after each addition. Never add multiple new foods simultaneously.',
                  'Beet juice is beneficial and safe for pacemaker patients - beet nitrates gently dilate arteries and reduce cardiac workload through nitric oxide. Very low Vitamin K. This is one of the most heart-protective foods available for this patient.',
                ]
              },
            ].map(({ title, color, content }) => (
              <div key={title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-100">
                <h2 className="font-serif text-2xl mb-5 pb-3 border-b" style={{ color, borderColor: color + '30' }}>
                  {title}
                </h2>
                <div className="space-y-4">
                  {content.map((para, j) => (
                    <p key={j} className="text-stone-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden mb-6">
                <div className="px-4 py-3" style={{ backgroundColor: '#4A0E0E' }}>
                  <p className="text-white font-semibold text-sm font-serif">
                    Ask Dr. Vera about this protocol
                  </p>
                  <p className="text-red-200 text-xs mt-0.5">
                    Questions scoped to cancer patient nutrition
                  </p>
                </div>
                <DrVeraChat compact pageScope={chatScope} />
              </div>

              {/* Download card — email-gated */}
              <div className="rounded-2xl p-5 text-white text-center" style={{ backgroundColor: '#4A0E0E' }}>
                <span className="text-3xl block mb-2">🎗️</span>
                <p className="font-serif font-bold text-lg mb-1">Full Protocol PDF</p>
                <p className="text-white/70 text-xs mb-4">
                  Free with email. Complete guide including safe foods, avoid list, daily schedule, supplement protocol, and daily juice formula.
                </p>
                {cancerGuide && <GuideDownloadGate guide={cancerGuide} variant="detail" />}
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 rounded-xl p-4 mt-4 border border-amber-200">
                <p className="text-amber-900 font-semibold text-xs mb-1">Medical Disclaimer</p>
                <p className="text-amber-800 text-xs leading-relaxed">
                  This protocol is educational. All recommendations must be reviewed with
                  your oncologist and cardiologist before implementation - especially
                  warfarin management and supplement use during active treatment.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-forest-950 text-forest-400 py-10 px-4 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-1">Copyright {new Date().getFullYear()} Erica Ehiwe - All Rights Reserved</p>
          <p className="text-xs text-forest-700">
            Your Health Guide - Educational purposes only. Not medical advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-forest-700 mt-3">
            <a href="/legal" className="hover:text-forest-400 underline">Legal and Copyright</a>
            <span>-</span>
            <a href="/legal#medical" className="hover:text-forest-400 underline">Medical Disclaimer</a>
          </div>
        </div>
      </footer>

      <DrVeraChat />
    </main>
  )
}
