export interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const teamMembersData: TeamMember[] = [
  {
    id: "amit",
    name: "Amit Sharma",
    role: "Head Chef",
    quote: "Crafting flavours that feel like home.",
    image: "/images/team/amit.jpg",
  },
  {
    id: "neha",
    name: "Neha Patel",
    role: "Café Manager",
    quote: "Making every visit a little brighter.",
    image: "/images/team/neha.jpg",
  },
  {
    id: "vikram",
    name: "Vikram Singh",
    role: "Barista",
    quote: "Good coffee. Happier conversations.",
    image: "/images/team/vikram.jpg",
  },
  {
    id: "pooja",
    name: "Pooja Desai",
    role: "Guest Relations",
    quote: "Warm smiles. Always.",
    image: "/images/team/pooja.jpg",
  },
  {
    id: "arjun",
    name: "Arjun Verma",
    role: "Kitchen Team",
    quote: "Fresh ingredients. Better days.",
    image: "/images/team/arjun.jpg",
  },
  {
    id: "simran",
    name: "Simran Kaur",
    role: "Service Team",
    quote: "Here to make you feel at home.",
    image: "/images/team/simran.jpg",
  },
];
