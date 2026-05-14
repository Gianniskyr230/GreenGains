/*
 * GREEN GAINS — Community Section
 * Purpose-driven positioning, testimonials, and CTA to join.
 * Emotional & purpose-driven: fitness connected to higher purpose.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Globe, Flame, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Μαρία Κ.",
    role: "Trail Runner & Eco-Pulse Member",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80q=80",
    text: "Μέσα από το Eco-Pulse έχω καθαρίσει 3 παραλίες και κερδίσει αρκετά Green Credits για δωρεάν προϊόντα. Για πρώτη φορά νιώθω ότι η γυμναστική μου έχει νόημα πέρα από τον εαυτό μου.",
    credits: 2840,
    badge: "Nature Guardian",
  },
  {
    name: "Νίκος Π.",
    role: "Fitness Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    text: "Το Protein for Energy άλλαξε τον τρόπο που σκέφτομαι για τα συμπληρώματα. Αντί να πετάω τα ληγμένα, τα επιστρέφω και βλέπω ακριβώς πόση ενέργεια παράχθηκε. Απίστευτο concept.",
    credits: 1560,
    badge: "Green Explorer",
  },
  {
    name: "Ελένη Σ.",
    role: "Yoga Instructor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    text: "Τα προϊόντα Green Gains είναι τα πρώτα eco-friendly που δεν κάνουν συμβιβασμούς στην ποιότητα. Το bamboo yoga mat μου είναι απλά εξαιρετικό.",
    credits: 980,
    badge: "Eco Starter",
  },
];

const values = [
  {
    icon: Heart,
    title: "Purpose-Driven Fitness",
    desc: "Κάθε προπόνηση, κάθε αγορά, κάθε δράση έχει αντίκτυπο που μπορείς να δεις και να μετρήσεις.",
  },
  {
    icon: Globe,
    title: "Περιβαλλοντική Δέσμευση",
    desc: "Δεν είναι απλώς marketing — είναι ο πυρήνας κάθε απόφασης που παίρνουμε ως εταιρεία.",
  },
  {
    icon: Flame,
    title: "Κοινωνική Ευθύνη",
    desc: "Η κοινότητά μας δρα, εθελοντεύει και αλλάζει τον κόσμο γύρω της — ένα quest τη φορά.",
  },
];

export default function CommunitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Decorative blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/8 mb-4"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Κοινότητα</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl lg:text-5xl text-foreground leading-tight"
          >
            Γίνε μέρος κάτι
            <br />
            <span className="text-gradient-green">μεγαλύτερου από σένα</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Η Green Gains συνδέει τη γυμναστική με έναν ανώτερο σκοπό — κοινωνικό ή περιβαλλοντικό — προσφέροντας στους χρήστες την αίσθηση ότι η προσωπική τους προσπάθεια έχει πραγματικό αντίκτυπο.
          </motion.p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="gradient-border rounded-2xl p-6 bg-card text-center card-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <h3 className="font-display font-bold text-2xl text-foreground text-center mb-10">
            Τι λένε τα μέλη μας
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.3 }}
              className="gradient-border rounded-2xl p-6 bg-card card-hover"
              style={{ marginTop: i === 1 ? "1.5rem" : "0" }}
            >
              <Quote className="w-6 h-6 text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-primary/20" />
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono-data text-sm font-bold text-primary">{t.credits.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">credits</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/5">
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/15" />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
          {/* Decorative orbs inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-secondary/10 blur-2xl" />

          <div className="relative z-10 p-10 lg:p-16 text-center">
            <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-foreground mb-4">
              Έτοιμος να αλλάξεις
              <br />
              <span className="text-gradient-green">τον κόσμο γυμναζόμενος;</span>
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Εγγράψου στη Green Gains, κέρδισε Green Credits, παρακολούθησε τον αντίκτυπό σου και γίνε μέρος μιας κοινότητας που γυμνάζεται με σκοπό.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 glow-green text-sm">
                Εγγράψου Τώρα — Δωρεάν
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-foreground font-semibold rounded-full hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-sm">
                Μάθε Περισσότερα
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
