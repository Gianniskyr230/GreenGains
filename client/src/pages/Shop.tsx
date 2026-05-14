/*
 * GREEN GAINS — Shop Page
 * Product categories: Hard Gear, Soft Goods, Bio-Fuels
 * Mix of Green Gains private label + third-party eco brands
 * Each product shows impact badge, sustainability specs, and Green Credits earned.
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Recycle, Zap, Filter, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  brand: "Green Gains" | "Patagonia" | "Lululemon" | "BioTech USA" | "Nike" | "Decathlon" | "Myprotein" | "Isolate" | "OnEnergy" | "Adidas";
  category: "hard-gear" | "soft-goods" | "bio-fuels" ;
  price: number;
  image: string;
  impactBadge: string;
  material: string;
  carbonFootprint: string;
  greenCredits: number;
  description: string;
}

const products: Product[] = [
  // GREEN GAINS PRIVATE LABEL
  {
    id: "1",
    name: "Recycled Kettlebell 16kg",
    brand: "Green Gains",
    category: "hard-gear",
    price: 89.99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663481062100/JhaC7cbQbBwdT678BQYhMg/green-gains-kettlebell-iJsTMf2gz6sLxQ9SVdybJ6.webp",
    impactBadge: "100% Recycled Steel",
    material: "Ανακυκλωμένο ατσάλι από ναυπηγεία",
    carbonFootprint: "2.3 kg CO₂ (παραγωγή)",
    greenCredits: 45,
    description: "Βαρύ εργαλείο για functional training με μηδενικό αποτύπωμα.",
  },
  {
    id: "2",
    name: "Cork Yoga Mat",
    brand: "Green Gains",
    category: "soft-goods",
    price: 79.99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663481062100/JhaC7cbQbBwdT678BQYhMg/green-gains-yoga-mat-EHM779BdSnZP2X9PsnVJba.webp",
    impactBadge: "Biodegradable",
    material: "Φελλός + φυσικό latex",
    carbonFootprint: "0.8 kg CO₂ (παραγωγή)",
    greenCredits: 35,
    description: "Ανανεώσιμο στρώμα γιόγκα με αντιμικροβιακές ιδιότητες.",
  },
  {
    id: "3",
    name: "Plant-Based Protein Pro 1kg",
    brand: "Green Gains",
    category: "bio-fuels",
    price: 49.99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663481062100/JhaC7cbQbBwdT678BQYhMg/green-gains-protein-HSgkB9W7n8XzPgcttCmTgj.webp",
    impactBadge: "Vegan & Recyclable",
    material: "100% φυτική πρωτεΐνη (ρύζι + μπιζέλι)",
    carbonFootprint: "1.2 kg CO₂ (παραγωγή)",
    greenCredits: 60,
    description: "Πρωτεΐνη που επιστρέφεται για μετατροπή σε βιοενέργεια.",
  },
  {
    id: "4",
    name: "Recycled Resistance Bands Set",
    brand: "Green Gains",
    category: "soft-goods",
    price: 34.99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663481062100/JhaC7cbQbBwdT678BQYhMg/green-gains-resistance-bands-epYq46aJwQ93k4EMAjEVpL.webp",
    impactBadge: "100% Recycled Rubber",
    material: "Ανακυκλωμένο φυσικό καουτσούκ",
    carbonFootprint: "0.4 kg CO₂ (παραγωγή)",
    greenCredits: 25,
    description: "Σετ αντιστάσεων για ευέλικτη προπόνηση με 4 επίπεδα δυσκολίας.",
  },
  {
    id: "5",
    name: "Vegan Protein Isolate 1000g banana flavor",
    brand: "Isolate",
    category: "bio-fuels",
    price: 35.99,
    image: "https://www.xtr.gr/images/detailed/837/01-182-039-02-vegan-protein-isolate-1000g-Banana-NLS.jpg",
    impactBadge: "Vegan & Recyclable",
    material: "100% φυτική πρωτεΐνη από ρύζι και μπιζέλι",
    carbonFootprint: "1.0 kg CO₂ (παραγωγή)",
    greenCredits: 12,
    description: "Φυτική πρωτεΐνη με γεύση μπανάνα.",
  },

  // THIRD-PARTY ECO BRANDS
  {
    id: "6",
    name: "Patagonia Capilene Cool Shirt",
    brand: "Patagonia",
    category: "soft-goods",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    impactBadge: "Fair Trade Certified",
    material: "Ανακυκλωμένο πολυεστέρ",
    carbonFootprint: "3.2 kg CO₂ (παραγωγή)",
    greenCredits: 40,
    description: "Αναπνεύσιμο μπλουζάκι για ενεργό άθλημα με υψηλή απόδοση.",
  },
  {
    id: "7",
    name: "Ανδρικά Παπούτσια για Τρέξιμο Γκρι - adidas Performance Galaxy 7",
    brand: "Adidas",
    category: "soft-goods",
    price: 59.99,
    image: "https://www.zakcret.gr/image/cache/catalog/products/11/03/39/02/andrika-papoutsia-gia-treximo-gkri-adidas-performance-galaxy-7-223890-940x940.webp?v=1",
    impactBadge: "Sustainable Nylon",
    material: "Nylon από ανακυκλωμένα πλαστικά μπουκάλια",
    carbonFootprint: "2.8 kg CO₂ (παραγωγή)",
    greenCredits: 50,
    description: "Premium fit και υψηλή ευελιξία.",
  },
  {
    id: "8",
    name: "BioTech Usa Vegan Protein (2000 gr)",
    brand: "BioTech USA",
    category: "bio-fuels",
    price: 75.99,
    image: "https://www.protein-shop.gr/thumb/900/900/images/products/2023/05/BiotechUSA_Vega_Protein_2000_gr_Hazelnut.jpg?products_id=1715",
    impactBadge: "Grass-Fed Whey",
    material: "Πρωτεΐνη από ζώα που τρέφονται με χόρτο",
    carbonFootprint: "1.8 kg CO₂ (παραγωγή)",
    greenCredits: 45,
    description: "Υψηλής ποιότητας πρωτεΐνη με 21g πρωτεΐνης ανά δόση.",
  },
  {
    id: "9",
    name: "Nike Air Max 270 Ανδρικά Παπούτσια",
    brand: "Nike",
    category: "soft-goods",
    price: 90.00,
    image: "https://www.cosmossport.gr/2195968-product_large/nike-air-max-270.jpg",
    impactBadge: "Carbon Neutral",
    material: "Ίνες δέντρου + ανακυκλωμένο πολυεστέρ",
    carbonFootprint: "1.5 kg CO₂ (παραγωγή)",
    greenCredits: 55,
    description: "Άνετα και βιώσιμα αθλητικά παπούτσια με carbon-neutral παραγωγή.",
  },
  {
    id: "10",
    name: "Decathlon Eco-Design Yoga Mat",
    brand: "Decathlon",
    category: "soft-goods",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80",
    impactBadge: "TPE Material",
    material: "Θερμοπλαστικό ελαστομερές (TPE)",
    carbonFootprint: "0.6 kg CO₂ (παραγωγή)",
    greenCredits: 20,
    description: "Αποδοτικό και οικονομικό στρώμα γιόγκα με eco-friendly υλικά.",
  },
  {
    id: "11",
    name: "Decathlon Coated Dumbbells 2-Pack (5kg each)",
    brand: "Decathlon",
    category: "hard-gear",
    price: 40.00,
    image: "https://contents.mediadecathlon.com/p2720129/k$47423c440776298373204a99089eeffb/nyamba-11-to-11-lb-coated-fitness-dumbbells-2-pack.jpg",
    impactBadge: "Recycled Polyester",
    material: "Ανακυκλωμένο ατσάλις με επίστρωση πολυεστέρα από ανακυκλωμένα πλαστικά",
    carbonFootprint: "4.5 kg CO₂ (παραγωγή)",
    greenCredits: 70,
    description: "Μαύροι αλτήρες από ανακυκλωμένο ατσάλι με επίστρωση πολυεστέρα από ανακυκλωμένα πλαστικά.",
  },
  {
    id: "12",
    name: "OnEnergy Omega-3 Vegan",
    brand: "OnEnergy",
    category: "bio-fuels",
    price: 14.99,
    image: "https://www.futunatura.gr/image/cache/data/OnEnergy/ON200/Vegan-Omega-3-ON200-1-1000x1000.webp",
    impactBadge: "Algae-Based",
    material: "Omega-3 από θαλάσσια φύκια",
    carbonFootprint: "0.3 kg CO₂ (παραγωγή)",
    greenCredits: 25,
    description: "Vegan Omega-3 χωρίς ψάρια με 500mg EPA + DHA ανά δόση.",
  },
];

const categories = [
  { id: "all", label: "Όλα τα Προϊόντα", icon: Leaf },
  { id: "hard-gear", label: "Hard Gear (Βάρη)", icon: Zap },
  { id: "soft-goods", label: "Soft Goods (Ένδυση/Mats)", icon: Recycle },
  { id: "bio-fuels", label: "Bio-Fuels (Πρωτεΐνες)", icon: Leaf },
];

export default function Shop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
              Eco-Friendly Fitness
              <br />
              <span className="text-gradient-green">Shop</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Κάθε αγορά δημιουργεί αντίκτυπο. Επίλεξε προϊόντα που σέβονται τον πλανήτη και κέρδισε Green Credits.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium">
                🏷️ Green Gains Private Label
              </span>
              <span className="text-sm px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-medium">
                🌍 Trusted Eco Brands
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-t border-white/5">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold text-foreground">Κατηγορίες</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${
                  selectedCategory === id
                    ? "bg-primary/20 border-primary text-primary"
                    : "border-white/10 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
     {/* Products Grid */}
      <section className="py-16 lg:py-24" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                // Αλλαγή: Καθαρό border χωρίς pseudo-elements που μπαίνουν μπροστά
                className="group relative rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Αλλαγή: Πιο διακριτικό overlay μόνο στη βάση για να διαβάζονται τα badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-sm">
                      {product.impactBadge}
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-secondary text-white shadow-lg">
                    +{product.greenCredits} Credits
                  </span>
                </div>

                  {/* Content: Solid background */}
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      {product.brand}
                    </span>
                    <span className="font-mono text-sm font-bold text-primary">
                      €{product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* FIXED: Προσθήκη h-14 και line-clamp-2 για σταθερό ύψος τίτλου */}
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors h-14 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* FIXED: Προσθήκη h-10 και line-clamp-2 για σταθερό ύψος περιγραφής */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed h-10">
                    {product.description}
                  </p>

                  {/* Sustainability Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-border/50">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Υλικό</p>
                      <p className="text-xs font-medium text-foreground truncate">{product.material}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">CO₂ Αποτύπωμα</p>
                      <p className="text-xs font-medium text-foreground">{product.carbonFootprint}</p>
                    </div>
                  </div>

                  {/* FIXED: Προσθήκη mt-auto για να ευθυγραμμιστούν τα κουμπιά στη βάση */}
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-semibold shadow-md shadow-primary/10">
                      <ShoppingCart className="w-4 h-4" />
                      Προσθήκη στο καλάθι
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
