import { TestimonialItem, TestimonialStat } from "@/types";

export const testimonialStats: TestimonialStat[] = [
  {
    id: "stat-customers",
    value: "10K+",
    label: "Happy Customers",
    icon: "coffee",
  },
  {
    id: "stat-rating",
    value: "4.8/5",
    label: "Average Rating",
    icon: "leaf",
  },
  {
    id: "stat-recommend",
    value: "95%",
    label: "Would Recommend",
    icon: "users",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-rohan",
    name: "Rohan Mehta",
    city: "Mumbai",
    avatar: "/images/testimonials/rohan.jpg",
    quote:
      "Healthy, tasty and so fresh! The 21 Day Challenge menu has completely changed the way I look at food. Highly recommend it!",
    rating: 5,
    featured: true,
    foodImage: "/images/testimonials/featured_bowl.jpg",
    brandTag: "21 DAY CHALLENGE",
  },
  {
    id: "test-priya",
    name: "Priya Sharma",
    city: "Mumbai",
    avatar: "/images/testimonials/priya.jpg",
    quote:
      "Amazing food and such a cozy ambience! Flavourzy feels like home. The pasta and coffee are just perfect!",
    rating: 5,
    featured: false,
    brandTag: "Flavourzy Café",
  },
  {
    id: "test-ananya",
    name: "Ananya Singh",
    city: "Mumbai",
    avatar: "/images/testimonials/ananya.jpg",
    quote:
      "Handi Chaa is love! The perfect blend of tradition and modern vibes. It instantly lifts my mood.",
    rating: 5,
    featured: false,
    brandTag: "Handi Chaa",
  },
  {
    id: "test-kabir",
    name: "Kabir Verma",
    city: "Mumbai",
    avatar: "/images/avatars/user1.jpg",
    quote:
      "Doctor-approved balanced meals that actually taste incredible. Dr. Amit Kitchen has made clean eating effortless!",
    rating: 5,
    featured: false,
    brandTag: "Dr. Amit Kitchen",
  },
  {
    id: "test-meera",
    name: "Meera Patel",
    city: "Mumbai",
    avatar: "/images/avatars/user2.jpg",
    quote:
      "Finding 100% plant-based food that is rich, hearty and energizing is rare. The Vegan Kitchen exceeded all expectations!",
    rating: 5,
    featured: false,
    brandTag: "Dr. Amit Vegan",
  },
  {
    id: "test-arjun",
    name: "Arjun Nair",
    city: "Mumbai",
    avatar: "/images/avatars/user4.jpg",
    quote:
      "The cold-pressed smoothies and crisp organic salads are my post-workout staple. Pure vitality in every sip!",
    rating: 5,
    featured: false,
    brandTag: "Soup • Salad • Smoothies",
  },
];
