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
