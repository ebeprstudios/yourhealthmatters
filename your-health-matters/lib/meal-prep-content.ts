// lib/meal-prep-content.ts
// Stub file - ensures the import resolves correctly
// Full content will be added in a future update

export interface MealPrepWeek {
  theme: string
  emoji: string
  color: string
  tagline: string
  intro: string
  peakMeals: { label: string; meals: { name: string; components: string; whyItWorks: string }[] }
  middayMeals: { label: string; meals: { name: string; components: string; whyItWorks: string }[] }
  eveningMeals: { label: string; meals: { name: string; components: string; whyItWorks: string }[] }
  morningJuice: { name: string; ingredients: string; benefit: string }
  shoppingList: string[]
  sundayPrep: string[]
  proTip: string
}

export const mealPrepWeeks: MealPrepWeek[] = [
  {
    theme: 'Heart Health and Cholesterol',
    emoji: '❤️',
    color: '#7C1F3A',
    tagline: 'Lower LDL, raise HDL, protect your arteries through every meal',
    intro: 'This week every meal is built around three goals: binding LDL before it absorbs, raising HDL through healthy fats, and protecting arterial walls with antioxidants.',
    peakMeals: {
      label: 'Peak Zone 6am - 2pm',
      meals: [
        { name: 'Cholesterol Reset Breakfast', components: 'Rolled oats with ground flaxseed, walnuts, blueberries, and Ceylon cinnamon', whyItWorks: 'Beta-glucan from oats binds bile acids and removes LDL from the gut before absorption.' },
        { name: 'LDL Buster Salad', components: 'Kale massaged with lemon and olive oil, artichoke hearts, chickpeas, avocado, pomegranate seeds', whyItWorks: 'Kale bile acid binding removes cholesterol directly from the gut.' },
      ]
    },
    middayMeals: {
      label: 'Midday 12pm - 3pm',
      meals: [
        { name: 'Fiber Bridge Lunch', components: 'Lentil soup with garlic, turmeric, black pepper, and spinach', whyItWorks: 'Lentils provide soluble fiber that continues LDL-binding work through the afternoon.' },
      ]
    },
    eveningMeals: {
      label: 'Evening 5pm - 7pm',
      meals: [
        { name: 'Mediterranean Plate', components: 'Baked salmon with roasted asparagus, steamed broccoli, and a large side salad', whyItWorks: 'Asparagus is the highest glutathione vegetable - prevents LDL oxidation.' },
      ]
    },
    morningJuice: {
      name: 'Arterial Flush Juice',
      ingredients: 'Beet + Pomegranate + Lemon + Ginger + Cucumber (skin on) + Turmeric + black pepper',
      benefit: 'Drink before 10am. Beet nitrates dilate arteries within 90 minutes.'
    },
    shoppingList: ['Wild salmon', 'Lentils', 'Kale', 'Arugula', 'Artichoke hearts', 'Avocados', 'Walnuts', 'Ground flaxseed', 'Blueberries', 'Lemons', 'Extra virgin olive oil', 'Beets', 'Pomegranate juice'],
    sundayPrep: ['Cook a large pot of lentil soup', 'Massage and store kale', 'Roast a tray of beets', 'Make tahini-lemon dressing'],
    proTip: 'Eat your salad before every meal this week without exception.'
  },
]

export function getMealPrepWeek(weekNumber: number): MealPrepWeek {
  const index = weekNumber % mealPrepWeeks.length
  return mealPrepWeeks[index]
}

export function getCurrentWeekNumber(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1)
  const diff = now.getTime() - start.getTime()
  const oneWeek = 1000 * 60 * 60 * 24 * 7
  return Math.floor(diff / oneWeek)
}
