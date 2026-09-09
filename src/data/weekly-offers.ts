export interface DailyOffer {
  id: string;
  dayShort: string;
  dayFull: string;
  dayColor: "dark" | "terracotta";
  title: string;
  description: string;
  badge: string;
  badgeType: "green" | "terracotta";
  image: string;
  alt: string;
}

export interface WeeklyFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: "leaf" | "chef" | "users" | "heart";
}

export const weeklyOffersData: DailyOffer[] = [
  {
    id: "mon",
    dayShort: "MON",
    dayFull: "Monday",
    dayColor: "dark",
    title: "Pizza Delight",
    description: "More slices, more smiles.",
    badge: "20% OFF",
    badgeType: "green",
    image: "/images/categories/pizza.jpg",
    alt: "Artisan Pizza Delight with melted mozzarella and fresh basil",
  },
  {
    id: "tue",
    dayShort: "TUE",
    dayFull: "Tuesday",
    dayColor: "terracotta",
    title: "Burger Bliss",
    description: "Big flavours, better days.",
    badge: "15% OFF",
    badgeType: "terracotta",
    image: "/images/categories/burger.jpg",
    alt: "Gourmet Burger Bliss with cheddar and fresh lettuce",
  },
  {
    id: "wed",
    dayShort: "WED",
    dayFull: "Wednesday",
    dayColor: "dark",
    title: "Momo Magic",
    description: "Double the happiness.",
    badge: "Buy 1 Get 1",
    badgeType: "green",
    image: "/images/categories/momos.jpg",
    alt: "Steamed Momo Magic basket with spicy dipping sauce",
  },
  {
    id: "thu",
    dayShort: "THU",
    dayFull: "Thursday",
    dayColor: "terracotta",
    title: "Pasta Day",
    description: "Because comfort never gets old.",
    badge: "20% OFF",
    badgeType: "terracotta",
    image: "/images/categories/pasta.jpg",
    alt: "Creamy gourmet Pasta Day penne in white bowl",
  },
  {
    id: "fri",
    dayShort: "FRI",
    dayFull: "Friday",
    dayColor: "dark",
    title: "Fresh & Fit",
    description: "Healthy choices. Happier you.",
    badge: "15% OFF",
    badgeType: "green",
    image: "/images/categories/salad.jpg",
    alt: "Crisp Fresh & Fit Mediterranean salad bowl",
  },
  {
    id: "sat",
    dayShort: "SAT",
    dayFull: "Saturday",
    dayColor: "terracotta",
    title: "Smooth Sips",
    description: "Refresh. Rejuvenate. Repeat.",
    badge: "20% OFF",
    badgeType: "terracotta",
    image: "/images/categories/smoothie.jpg",
    alt: "Antioxidant berry cold-pressed Smooth Sips smoothie",
  },
  {
    id: "sun",
    dayShort: "SUN",
    dayFull: "Sunday",
    dayColor: "dark",
    title: "Chaa Special",
    description: "Traditional taste. Timeless love.",
    badge: "15% OFF",
    badgeType: "green",
    image: "/images/categories/handi_chaa.jpg",
    alt: "Traditional slow-brewed Handi Chaa in earthen kulhad",
  },
];

export const weeklyFeaturesData: WeeklyFeature[] = [
  {
    id: "wf-1",
    title: "Fresh Ingredients",
    subtitle: "Always",
    icon: "leaf",
  },
  {
    id: "wf-2",
    title: "Chef Crafted",
    subtitle: "With Love",
    icon: "chef",
  },
  {
    id: "wf-3",
    title: "Great Food",
    subtitle: "Brings People Together",
    icon: "users",
  },
  {
    id: "wf-4",
    title: "Special Offers",
    subtitle: "Every Week",
    icon: "heart",
  },
];
