/*
 * GREEN GAINS — Navbar Component
 * Expanded navigation with SHOP (subcategories), RECYCLE & EARN, ECO-PULSE, FIND A HUB
 * Biophilic dark forest theme. Sticky nav with blur backdrop.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Αρχική", href: "/" },
  {
    label: "SHOP",
    href: "/shop",
    submenu: [
      { label: "Hard Gear (Βάρη)", href: "/shop/hard-gear" },
      { label: "Soft Goods (Mats/Bands)", href: "/shop/soft-goods" },
      { label: "Bio-Fuels (Πρωτεΐνες)", href: "/shop/bio-fuels" },
    ],
  },
  { label: "PROTEIN FOR ENERGY", href: "/recycle" },
  { label: "ECO-PULSE", href: "/dashboard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setOpenSubmenu(null);
    navigate(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center glow-green-sm group-hover:bg-primary/30 transition-all duration-300">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-extrabold text-xl text-foreground tracking-tight">
              Green<span className="text-primary">Gains</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-sm font-medium transition-colors duration-200 relative flex items-center gap-1 ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>

                {/* Submenu dropdown */}
                {link.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white border border-primary/10 rounded-lg shadow-2xl shadow-primary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                    {link.submenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        className="block px-4 py-2.5 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/dashboard"
              onClick={(e) => { e.preventDefault(); handleNavClick("/dashboard"); }}
              className="px-5 py-2 text-sm font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-all duration-200"
            >
              Σύνδεση
            </a>
            <a
              href="/shop"
              onClick={(e) => { e.preventDefault(); handleNavClick("/shop"); }}
              className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 glow-green-sm"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-primary/10"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <button
                    onClick={() => {
                      if (link.submenu) {
                        setOpenSubmenu(openSubmenu === link.href ? null : link.href);
                      } else {
                        handleNavClick(link.href);
                      }
                    }}
                    className="w-full text-left text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSubmenu === link.href ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {link.submenu && openSubmenu === link.href && (
                    <div className="pl-4 space-y-2 py-2">
                      {link.submenu.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                          className="block text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="/shop"
                  onClick={(e) => { e.preventDefault(); handleNavClick("/shop"); }}
                  className="w-full py-3 text-center text-sm font-semibold bg-primary text-primary-foreground rounded-full"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
