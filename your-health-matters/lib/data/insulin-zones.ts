import type { InsulinZone } from "@/lib/types";

/**
 * Insulin Time Zones — Dr. Vera's governing framework for all food/juice timing.
 * These four zones determine what is safe to consume at what hour of the day.
 *
 * Color palette is FIXED across the entire guide library.
 */

export const insulinZones: InsulinZone[] = [
  {
    id: "iz-01",
    slug: "peak",
    name: "Peak Zone",
    timeRange: "6am–2pm",
    startHour: 6,
    endHour: 14,
    colorHex: "#1F5E3A", // deep forest green
    whatToConsume: [
      "Fresh fruit (any kind)",
      "Fruit-based juices",
      "Vegetable juices",
      "Whole-food meals with protein, fat, and fiber",
      "Smoothies with fruit",
    ],
    whatToAvoid: [
      "Refined sugar",
      "Sweetened drinks",
      "Highly processed carbohydrates eaten alone",
    ],
    whyItMatters:
      "Insulin sensitivity is highest in the morning. Your body handles natural sugars from fruit and starches most efficiently between waking and early afternoon. This is when fruit juices belong.",
  },
  {
    id: "iz-02",
    slug: "declining",
    name: "Declining Zone",
    timeRange: "2pm–6pm",
    startHour: 14,
    endHour: 18,
    colorHex: "#D89B2A", // amber
    whatToConsume: [
      "Low-sugar fruits (berries, green apple)",
      "Vegetable juices",
      "Protein and fat-forward meals",
      "Herbal teas",
    ],
    whatToAvoid: [
      "Sweet fruit juices (orange, mango, pineapple)",
      "Dried fruit",
      "Smoothies with bananas or tropical fruit",
      "Desserts",
    ],
    whyItMatters:
      "Insulin sensitivity begins to drop in the afternoon. The same juice that nourished you at 9am now spikes glucose more sharply by 4pm. Shift to low-sugar options.",
  },
  {
    id: "iz-03",
    slug: "caution",
    name: "Caution Zone",
    timeRange: "6pm–9pm",
    startHour: 18,
    endHour: 21,
    colorHex: "#C76B4A", // terracotta
    whatToConsume: [
      "Vegetable juices",
      "Herbal infusions (chamomile, lemon balm, tulsi)",
      "Bone broth",
      "Light protein with non-starchy vegetables",
    ],
    whatToAvoid: [
      "Any fruit juice",
      "Whole fruit (except a small berry portion before 7pm)",
      "Starchy carbohydrates",
      "Coffee and stimulants",
    ],
    whyItMatters:
      "Kitchen closes at 7pm. Insulin response is sluggish, melatonin is rising, and digestion needs to wind down to make room for repair work overnight.",
  },
  {
    id: "iz-04",
    slug: "closed",
    name: "Closed Zone",
    timeRange: "9pm onward",
    startHour: 21,
    endHour: 30, // wraps past midnight
    colorHex: "#2E2A6B", // indigo
    whatToConsume: ["Water", "Caffeine-free herbal tea (if needed)"],
    whatToAvoid: [
      "All food",
      "All juices",
      "Sweetened beverages",
      "Alcohol",
    ],
    whyItMatters:
      "Overnight is when your body repairs itself. From the liver's detox window (1–3am in TCM) to growth hormone release during deep sleep, eating disrupts every system that should be cleaning house.",
  },
];

export const getZoneBySlug = (slug: string): InsulinZone | undefined =>
  insulinZones.find((z) => z.slug === slug);

export const getZoneByHour = (hour: number): InsulinZone | undefined => {
  if (hour >= 6 && hour < 14) return insulinZones[0];
  if (hour >= 14 && hour < 18) return insulinZones[1];
  if (hour >= 18 && hour < 21) return insulinZones[2];
  return insulinZones[3];
};
