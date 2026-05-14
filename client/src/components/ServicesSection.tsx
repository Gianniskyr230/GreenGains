/*
 * GREEN GAINS — Services Section (Refined Minimal Version)
 * Clean white aesthetic, high-contrast typography, and aligned grids.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, MapPin, Camera, QrCode, Trophy, Recycle, ArrowRight, CheckCircle2 } from "lucide-react";

const PROTEIN_IMAGE = "/images/protein-recycled.png";
const ECOPULSE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663481062100/JhaC7cbQbBwdT678BQYhMg/eco-pulse-cvWGDBZ8VorYMfeFb2QyMX.webp";

const proteinSteps = [
  { icon: Recycle, step: "01", title: "Επιστρέφεις", desc: "Παράδωσε περισσεύματα ή ληγμένη πρωτεΐνη μέσω Smart Lockers." },
  { icon: Zap, step: "02", title: "Μετατρέπεται", desc: "Τα υλικά προωθούνται για παραγωγή καθαρής βιοενέργειας." },
  { icon: Trophy, step: "03", title: "Ανταμείβεσαι", desc: "Λαμβάνεις Green Credits και εκπτώσεις για τις επόμενες αγορές σου." },
];

const ecoPulseSteps = [
  { icon: MapPin, title: "GPS Check", desc: "Πιστοποίηση παρουσίας στο σημείο." },
  { icon: Camera, title: "Visual AI", desc: "Photo verification της δράσης." },
  { icon: QrCode, title: "QR Scan", desc: "Επιβεβαίωση από τον φορέα." },
  { icon: Trophy, title: "Credits", desc: "Ξεκλείδωμα ανταμοιβών." },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-px bg-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Innovation & Circularity
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl lg:text-6xl text-foreground leading-[1.1] tracking-tight"
          >
            Υπηρεσίες με <br />
            <span className="text-gradient-green">θετικό πρόσημο.</span>
          </motion.h2>
        </div>

        {/* 1. Protein for Energy (Image Left) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img src={PROTEIN_IMAGE} alt="Protein Energy" className="w-full aspect-video lg:aspect-square object-cover" />
            </div>
            {/* Minimal Stat Tag */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-border p-5 rounded-xl shadow-xl">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Total Offset</p>
              <p className="font-mono text-2xl font-bold text-primary leading-none">-28.5kg CO₂</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[11px] font-black text-secondary uppercase tracking-widest block mb-4">Service 01 / Protein for Energy</span>
            <h3 className="font-display font-bold text-3xl lg:text-4xl mb-6">Η πρωτεΐνη σου γίνεται <span className="text-primary">καθαρή ενέργεια.</span></h3>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Μην πετάς τα περισσεύματα. Μέσω του δικτύου μας, η ληγμένη ή περιττή πρωτεΐνη μετατρέπεται σε βιοκαύσιμο, κλείνοντας τον κύκλο της κατανάλωσης.
            </p>
            <div className="space-y-6">
              {proteinSteps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex gap-5 items-start group">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-1">{title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. Eco-Pulse (Image Right) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <span className="text-[11px] font-black text-primary uppercase tracking-widest block mb-4">Service 02 / Eco-Pulse</span>
            <h3 className="font-display font-bold text-3xl lg:text-4xl mb-6">Προπόνηση με <span className="text-primary">κοινωνικό παλμό.</span></h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Σύνδεσε τις δράσεις σου με την κοινότητα. Επιβεβαίωσε την προσφορά σου και ξεκλείδωσε προνόμια.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {ecoPulseSteps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 border border-border rounded-xl bg-[#FBFBFB]">
                  <Icon className="w-4 h-4 text-primary mb-3" />
                  <p className="font-bold text-[13px] mb-1">{title}</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img src={ECOPULSE_IMAGE} alt="Eco Pulse" className="w-full aspect-video lg:aspect-square object-cover" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-white border border-border p-5 rounded-xl shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-3.5 h-3.5 text-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Community Reward</span>
              </div>
              <p className="font-mono text-2xl font-bold text-foreground">+1,240 <span className="text-xs text-primary font-sans">Credits</span></p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}