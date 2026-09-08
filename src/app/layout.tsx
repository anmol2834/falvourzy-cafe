import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#153424",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flavourzycafe.com"),
  title: "Flavourzy Café — Good Food, Good Mood | Charni Road, Mumbai",
  description:
    "Great food, refreshing drinks and a space that feels like home. Welcome to Flavourzy – where every bite makes your day better. Located in Charni Road, Mumbai.",
  keywords: [
    "Flavourzy Cafe",
    "Mumbai Cafe",
    "Charni Road Cafe",
    "Good Food Good Mood",
    "21 Day Challenge",
    "Healthy Food Mumbai",
    "Dr Amit Kitchen",
    "Handi Chaa",
  ],
  authors: [{ name: "Flavourzy Café" }],
  openGraph: {
    title: "Flavourzy Café — Good Food, Good Mood",
    description:
      "Great food, refreshing drinks and a space that feels like home. Charni Road, Mumbai.",
    url: "https://flavourzycafe.com",
    siteName: "Flavourzy Café",
    images: [
      {
        url: "/images/hero/hero_pasta_drink.jpg",
        width: 1200,
        height: 630,
        alt: "Flavourzy Café — Good Food Brighter Days",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavourzy Café — Good Food, Good Mood",
    description: "Charni Road, Mumbai. Good Food, Brighter Days.",
    images: ["/images/hero/hero_pasta_drink.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased bg-[#FBF8F3] text-[#181D19] min-h-screen flex flex-col selection:bg-[#255E3D] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
