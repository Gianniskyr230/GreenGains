/*
 * GREEN GAINS — Footer
 * Newsletter signup, certifications, partners, and eco commitment
 */

import { useState } from "react";
import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const footerLinks = {
  "Προϊόντα": [
    "Private Label",
    "Συνεργάτες",
    "Νέες Αφίξεις",
    "Προσφορές",
  ],
  "Υπηρεσίες": [
    "Protein for Energy",
    "Eco-Pulse",
    "Smart Lockers",
    "Back Hauling",
  ],
  "Εταιρεία": [
    "Σχετικά με εμάς",
    "Αποστολή & Αξίες",
    "Βιωσιμότητα",
    "Καριέρα",
  ],
  "Υποστήριξη": [
    "FAQ",
    "Επικοινωνία",
    "Πολιτική Επιστροφών",
    "Όροι Χρήσης",
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const certifications = [
  { name: "B-Corp", logo: "🏢" },
  { name: "Global Recycled Standard", logo: "♻️" },
  { name: "ISO 14001", logo: "🌍" },
  { name: "Vegan Certified", logo: "🌱" },
];

const partners = [
  { name: "Gym Partner 1", logo: "💪" },
  { name: "Eco Org 1", logo: "🌿" },
  { name: "Gym Partner 2", logo: "🏋️" },
  { name: "Eco Org 2", logo: "🌳" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-muted border-t border-primary/10">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-white/5">
          <div className="max-w-2xl">
            <h3 className="font-display font-bold text-2xl text-foreground mb-2">
              Γίνε μέρος του κινήματος
            </h3>
            <p className="text-muted-foreground mb-6">
              Εγγράψου στο newsletter και κέρδισε 10% στην πρώτη αγορά σου + exclusive eco-tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                placeholder="Η email σου..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 glow-green-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <div className="mt-3 flex items-center gap-2 text-sm text-primary">
                <CheckCircle className="w-4 h-4" />
                Ευχαριστούμε! Ελέγξε το email σου.
              </div>
            )}
          </div>
        </div>

        {/* Certifications & Partners */}
        <div className="mb-16 pb-16 border-b border-white/5">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-6 tracking-wide uppercase">
                Πιστοποιήσεις
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-lg bg-white/5 border border-white/10 text-center hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="text-2xl mb-2">{cert.logo}</div>
                    <p className="text-xs font-medium text-muted-foreground">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-6 tracking-wide uppercase">
                Συνεργάτες
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="p-4 rounded-lg bg-white/5 border border-white/10 text-center hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="text-2xl mb-2">{partner.logo}</div>
                    <p className="text-xs font-medium text-muted-foreground">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-extrabold text-xl text-foreground">
                Green<span className="text-primary">Gains</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Eco-friendly fitness για ανθρώπους που θέλουν να αλλάξουν τον κόσμο γυμναζόμενοι.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@greengains.gr</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+30 210 000 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Αθήνα, Ελλάδα</span>
            </div>
          </div>
        </div>

        {/* Eco commitment bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                Η Green Gains δεσμεύεται για <span className="text-primary font-medium">carbon-neutral</span> λειτουργία έως το 2026
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Green Gains. Όλα τα δικαιώματα διατηρούνται.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
