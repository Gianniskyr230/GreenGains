/*
 * GREEN GAINS — Impact Section
 * Real-time environmental impact data, gamification features,
 * and app mockup showcase. Animated counters, badge system.
 */

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Zap, Users, Star, Award, TrendingUp, Shield } from "lucide-react";

const APP_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663481062100/JhaC7cbQbBwdT678BQYhMg/app-mockup-jDXvXwnBXrJWYhFX8vZZH6.webp";

function AnimatedCounter({ end, suffix = "", prefix = "", decimals = 0, duration = 2.5 }: {
  end: number; suffix?: string; prefix?: string; decimals?: number; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = (now - startTime) / (duration * 1000);
            const progress = Math.min(elapsed, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * end).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
    </span>
  );
}

const impactStats = [
  {
    icon: Leaf,
    value: 42800,
    suffix: " kg",
    label: "CO₂ Εξοικονομήθηκε",
    sublabel: "από όλη την κοινότητα",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Zap,
    value: 12400,
    suffix: " kWh",
    label: "Βιοενέργεια Παρήχθη",
    sublabel: "μέσω Protein for Energy",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: Users,
    value: 8500,
    suffix: "+",
    label: "Ενεργά Μέλη",
    sublabel: "στην κοινότητα Green Gains",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: TrendingUp,
    value: 3240,
    suffix: "",
    label: "Eco-Pulse Δράσεις",
    sublabel: "επιβεβαιωμένες αυτό το μήνα",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
];

const badges = [
  { name: "Eco Starter", level: 1, icon: "🌱", desc: "Πρώτα βήματα στο eco-fitness" },
  { name: "Green Explorer", level: 5, icon: "🌿", desc: "5 Eco-Pulse δράσεις" },
  { name: "Nature Guardian", level: 10, icon: "🌳", desc: "Προστάτης της φύσης" },
  { name: "Carbon Crusher", level: 20, icon: "⚡", desc: "50 kg CO₂ εξοικονομήθηκαν" },
  { name: "Sustainability Star", level: 50, icon: "⭐", desc: "Πρεσβευτής βιωσιμότητας" },
  { name: "Green Legend", level: 100, icon: "🏆", desc: "Θρύλος της κοινότητας" },
];

const gamificationFeatures = [
  { icon: Star, title: "Green Credits", desc: "Κέρδισε πόντους για κάθε eco-δράση και εξαργύρωσέ τους σε εκπτώσεις" },
  { icon: Award, title: "Badges & Επίπεδα", desc: "Ξεκλείδωσε badges και ανέβα επίπεδα μέσα στην κοινότητα" },
  { icon: Shield, title: "Impact Tracking", desc: "Παρακολούθησε σε πραγματικό χρόνο το CO₂ που εξοικονόμησες" },
  { icon: Users, title: "Social Features", desc: "Συνδέσου με άλλα μέλη, μοιράσου δράσεις και εμπνεύσου" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-primary/5" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Decorative orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 translate-x-1/2 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/8 mb-4"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Αντίκτυπος</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl lg:text-5xl text-foreground leading-tight"
          >
            Η προσπάθειά σου
            <br />
            <span className="text-gradient-green">μετράει πραγματικά</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Παρακολούθησε τον πραγματικό σου αντίκτυπο — από kg CO₂ που εξοικονόμησες έως kWh ανανεώσιμης ενέργειας που δημιούργησες.
          </motion.p>
        </div>

        {/* Impact stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {impactStats.map(({ icon: Icon, value, suffix, label, sublabel, color, bgColor, borderColor }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`gradient-border rounded-2xl p-5 bg-card text-center`}
            >
              <div className={`w-10 h-10 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center mx-auto mb-3`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className={`font-mono-data font-bold text-2xl lg:text-3xl ${color} mb-1`}>
                <AnimatedCounter end={value} suffix={suffix} />
              </p>
              <p className="font-display font-semibold text-sm text-foreground mb-0.5">{label}</p>
              <p className="text-xs text-muted-foreground">{sublabel}</p>
            </motion.div>
          ))}
        </div>



        {/* User Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="gradient-border rounded-3xl p-8 lg:p-12 bg-card mb-20"
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-8">
            Τα δικά σου Επιτεύγματα
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Green Credits */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-foreground">Green Credits</p>
                <span className="text-2xl font-mono-data font-bold text-secondary">2,450</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden border border-primary/20">
                <div className="h-full w-3/4 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">750 credits ακόμα για το επόμενο level</p>
            </div>

            {/* Environmental Impact */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-foreground">Αντίκτυπος</p>
                <span className="text-2xl font-mono-data font-bold text-primary">28.5 kg</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">CO₂ εξοικονομημένα</span>
                  <span className="text-primary font-semibold">28.5 kg</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Δέντρα φυτεμένα</span>
                  <span className="text-primary font-semibold">1.2</span>
                </div>
              </div>
            </div>

            {/* Redemption */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Εξαργύρωση</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Μετατρέψε τα credits σε εκπτώσεις ή δωρεάν προϊόντα
                </p>
              </div>
              <button className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 glow-green-sm">
                Εξαργύρωση τώρα
              </button>
            </div>
          </div>
        </motion.div>

        {/* Badge showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="font-display font-bold text-xl text-foreground text-center mb-8">
            Σύστημα Badges & Επιπέδων
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
                className="gradient-border rounded-2xl p-4 bg-card text-center card-hover"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-display font-bold text-xs text-foreground mb-1">{badge.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{badge.desc}</p>
                <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono-data">
                  Lv.{badge.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
