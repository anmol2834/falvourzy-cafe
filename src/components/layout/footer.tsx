import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#F4F0E6] border-t border-neutral-200/70 pt-14 pb-12 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-neutral-300/50">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo size="md" />
            <p className="mt-4 text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed">
              Great food, refreshing drinks and a space that feels like home.
              Welcome to Flavourzy – where every bite makes your day better.
            </p>

            <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#255E3D]">
              <MapPin className="w-4 h-4 text-[#C85A32]" />
              <span>Charni Road, Mumbai, Maharashtra 400004</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {mainNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-4">
                Hours & Contact
              </h3>
              <p className="text-xs text-neutral-600 mb-2">
                Open Daily: 8:00 AM – 11:30 PM
              </p>
              <p className="text-xs text-neutral-600 mb-4">
                Dine-in &bull; Takeaway &bull; Delivery
              </p>

              <div className="flex items-center gap-3 text-neutral-700">
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:text-emerald-800 hover:border-emerald-800 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:text-emerald-800 hover:border-emerald-800 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-3">
          <p>&copy; {new Date().getFullYear()} Flavourzy Café. All rights reserved.</p>
          <p className="flex items-center gap-1 font-script text-base text-neutral-600">
            Good Food &bull; Good Mood ♡
          </p>
        </div>
      </div>
    </footer>
  );
}
