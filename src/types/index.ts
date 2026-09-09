export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface BrandItem {
  id: string;
  name: string;
  slug: string;
  descriptor: string;
  badge?: string;
  accentColor?: string;
  logoType: "flavourzy" | "challenge" | "dr-amit" | "dr-amit-vegan" | "handi-chaa" | "soup-salad";
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: "coffee" | "leaf" | "users" | "smile";
}

export interface ChallengeBenefit {
  id: string;
  title: string;
  icon: "leaf" | "activity" | "heart";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  city: string;
  avatar: string;
  quote: string;
  rating: number;
  featured?: boolean;
  foodImage?: string;
  brandTag?: string;
}

export interface TestimonialStat {
  id: string;
  value: string;
  label: string;
  icon: "coffee" | "leaf" | "users";
}
