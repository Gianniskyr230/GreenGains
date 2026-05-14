/*
 * GREEN GAINS — Products Section (Fixed for your Data)
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Recycle, Award, ShieldCheck, Leaf } from "lucide-react";
import { products } from "@/Data/Products"; 

const features = [
  { icon: Recycle, title: "100% Eco-Friendly", desc: "Όλα τα υλικά είναι ανακυκλώσιμα" },
  { icon: Award, title: "Υβριδικό Μοντέλο", desc: "Private label & συνεργάτες" },
  { icon: ShieldCheck, title: "Πιστοποιημένη Ποιότητα", desc: "Αυστηροί έλεγχοι βιωσιμότητας" },
  { icon: Leaf, title: "Μηδενικό Αποτύπωμα", desc: "Συσκευασία χωρίς πλαστικό" },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const featuredProducts = products.slice(0, 6);

  return (
    <section id="products" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Curated Collection</span>
            </motion.div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-foreground leading-tight">
              Fitness που <span className="text-gradient-green">σέβεται τη φύση.</span>
            </h2>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F7F7F7] border border-border mb-6 flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Impact Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md border border-border rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
                    {product.impactBadge}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-lg text-sm font-bold shadow-md">
                    €{product.price}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="px-1">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{product.brand}</span>
                   <span className="text-[10px] font-medium text-muted-foreground">Footprint: {product.carbonFootprint}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors italic">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Stats Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">{product.material.split(' ')[0]}...</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">+{product.greenCredits} Credits</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}