/*
 * GREEN GAINS — Ultra-Minimalist Hero Section
 * Design: No images, pure typography, geometric accents, 
 * and sophisticated motion.
 */

import { motion } from "framer-motion";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
      
      {/* Abstract Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Green Glow */}
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        {/* Subtle Grid Pattern - low contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Minimalist Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-white shadow-sm mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.25em]">
              The Future of Fitness
            </span>
            <span className="w-1 h-1 rounded-full bg-primary" />
          </motion.div>

          {/* Large Architectural Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.85] tracking-tighter mb-10">
              Pure Power. <br />
              <span className="text-gradient-green">Less Trace.</span>
            </h1>
          </motion.div>

          {/* Sophisticated Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Εξοπλισμός κορυφαίων επιδόσεων που επαναπροσδιορίζει τη σχέση 
            μεταξύ ανθρώπινης δύναμης και περιβάλλοντος. 
            **100% Circular. 100% High-Performance.**
          </motion.p>

          {/* Centered Minimal CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
              className="group h-14 px-10 bg-primary text-white rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="h-14 px-10 border border-border rounded-full font-bold text-sm text-foreground hover:bg-muted transition-all flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              Impact Report 2026
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modern Floating Metric (Bottom Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-12 hidden lg:flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Live Impact</p>
          <p className="font-mono text-sm font-bold">42.8 tons CO2 saved</p>
        </div>
      </motion.div>

      {/* Animated Gradient Line (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}