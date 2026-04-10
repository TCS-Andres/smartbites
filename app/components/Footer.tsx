import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white/70 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="SmartBites logo"
              width={140}
              height={35}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              Helping college students eat smarter, save more, and waste less.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-white transition-colors">
                  Join the Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@smartbitesapp.com"
                  className="hover:text-white transition-colors"
                >
                  support@smartbitesapp.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17867153074"
                  className="hover:text-white transition-colors"
                >
                  (786) 715-3074
                </a>
              </li>
              <li>Mon–Fri 9–5, Sat 10–2</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/smartbitesapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmartBites on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@smartbitesapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmartBites on TikTok"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17v-3.44a4.85 4.85 0 01-3.59-1.45V6.69h3.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
            <p>&copy; 2026 SmartBites. All rights reserved.</p>
            <p className="max-w-xl">
              SmartBites provides general meal suggestions and budgeting tools
              for informational purposes only. We do not provide medical,
              nutritional, or dietary advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
