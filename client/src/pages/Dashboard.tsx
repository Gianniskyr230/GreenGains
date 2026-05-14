/*
 * GREEN GAINS — Dashboard (My Eco-Pulse)
 * User profile: impact stats, wallet, active quests, badge collection
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Zap, Trophy, Wallet, Target, Award, TrendingUp, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface UserStats {
  coSaved: number;
  treesPlanted: number;
  greenCredits: number;
  level: number;
  badge: string;
}

interface Quest {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed";
  reward: number;
  progress: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  level: number;
  unlocked: boolean;
}

const userStats: UserStats = {
  coSaved: 42.8,
  treesPlanted: 12,
  greenCredits: 1240,
  level: 8,
  badge: "Nature Guardian",
};

const quests: Quest[] = [
  {
    id: "1",
    title: "Plogging in Parnitha",
    description: "Συμμετοχή σε plogging δράση στο Πάρνηθα",
    status: "active",
    reward: 150,
    progress: 65,
  },
  {
    id: "2",
    title: "Protein Return Challenge",
    description: "Επέστρεψε 500g πρωτεΐνης αυτό το μήνα",
    status: "active",
    reward: 200,
    progress: 40,
  },
  {
    id: "3",
    title: "Beach Cleanup",
    description: "Συμμετοχή στον καθαρισμό ακτής",
    status: "completed",
    reward: 100,
    progress: 100,
  },
];

const badges: Badge[] = [
  { id: "1", name: "Eco Starter", icon: "🌱", level: 1, unlocked: true },
  { id: "2", name: "Green Explorer", icon: "🌿", level: 5, unlocked: true },
  { id: "3", name: "Nature Guardian", icon: "🌳", level: 10, unlocked: true },
  { id: "4", name: "Carbon Crusher", icon: "⚡", level: 20, unlocked: false },
  { id: "5", name: "Sustainability Star", icon: "⭐", level: 50, unlocked: false },
  { id: "6", name: "Green Legend", icon: "🏆", level: 100, unlocked: false },
];

export default function Dashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header with user info */}
      <section className="pt-24 pb-8 border-b border-white/5">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display font-extrabold text-4xl text-foreground mb-2">
                My Eco-Pulse
              </h1>
              <p className="text-muted-foreground">Καλώς ήρθες πίσω, Athlete!</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" />
              Αποσύνδεση
            </button>
          </div>

          {/* Level badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-lg text-primary">
              Level {userStats.level} — {userStats.badge}
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24" ref={ref}>
        <div className="container">
          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                icon: Leaf,
                value: userStats.coSaved,
                suffix: " kg",
                label: "CO₂ Εξοικονομήθηκε",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: TrendingUp,
                value: userStats.treesPlanted,
                suffix: "",
                label: "Δέντρα Φυτεύθηκαν",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Wallet,
                value: userStats.greenCredits,
                suffix: "",
                label: "Green Credits",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Award,
                value: userStats.level,
                suffix: "",
                label: "Τρέχον Επίπεδο",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
            ].map(({ icon: Icon, value, suffix, label, color, bgColor }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className={`gradient-border rounded-xl p-4 bg-card`}
              >
                <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <p className={`font-mono-data font-bold text-2xl ${color} mb-1`}>
                  {value}
                  {suffix}
                </p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Quests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Active Quests
              </h2>
              <div className="space-y-4">
                {quests.map((quest) => (
                  <div
                    key={quest.id}
                    className="gradient-border rounded-xl p-5 bg-card"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-foreground">
                          {quest.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {quest.description}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          quest.status === "completed"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary/20 text-secondary"
                        }`}
                      >
                        {quest.status === "completed" ? "✓ Completed" : "In Progress"}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                          style={{ width: `${quest.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {quest.progress}% Complete
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Reward: <span className="font-mono-data font-bold text-secondary">+{quest.reward}</span> Credits
                      </span>
                      {quest.status === "active" && (
                        <button className="text-xs px-3 py-1.5 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all duration-200">
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Wallet & Rewards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Wallet className="w-6 h-6 text-secondary" />
                Wallet
              </h2>

              {/* Credits balance */}
              <div className="gradient-border rounded-xl p-6 bg-card mb-6">
                <p className="text-sm text-muted-foreground mb-2">Διαθέσιμα Credits</p>
                <p className="font-mono-data font-extrabold text-4xl text-secondary mb-4">
                  {userStats.greenCredits}
                </p>
                <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-200 text-sm">
                  Εξαργύρωση
                </button>
              </div>

              {/* Available vouchers */}
              <h3 className="font-display font-semibold text-foreground mb-3">
                Διαθέσιμα Vouchers
              </h3>
              <div className="space-y-3">
                {[
                  { code: "SAVE15", value: "€15", expires: "30 days" },
                  { code: "RECYCLE10", value: "€10", expires: "7 days" },
                ].map((voucher) => (
                  <div
                    key={voucher.code}
                    /* ΑΛΛΑΓΗ: bg-white αντί για το σκούρο oklch */
                    className="p-4 rounded-lg bg-white border border-border flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <p className="font-mono font-bold text-sm text-primary">
                        {voucher.code}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Expires in {voucher.expires}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-foreground">{voucher.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Badge Collection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Badge Collection
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {badges.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 * parseInt(badge.id) }}
                  /* ΑΛΛΑΓΗ: bg-white για τα κλειδωμένα και τα ξεκλείδωτα */
                  className={`rounded-xl p-4 text-center border transition-all duration-200 ${
                    badge.unlocked
                      ? "bg-white border-primary/20 shadow-sm"
                      : "bg-gray-50 border-gray-100 opacity-60 grayscale"
                  }`}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="font-display font-bold text-xs text-foreground mb-1">
                    {badge.name}
                  </p>
                  <p className="text-xs text-muted-foreground">Lv.{badge.level}</p>
                  {!badge.unlocked && (
                    <p className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-tight">
                      🔒 Locked
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
