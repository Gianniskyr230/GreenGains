/*
 * GREEN GAINS — Recycle & Earn Page
 * Protein for Energy service: subscription, digital return label, energy calculator
 */
 
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Zap, QrCode, Leaf, ArrowRight, Download, 
  RotateCcw, MapPin, Phone, Clock, Users,
  Lightbulb, Battery, Coffee
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
 
const PROTEIN_IMAGE = "/images/protein-recycled.png";
 
interface Hub {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  type: "gym" | "collection-point";
  members: number;
}
 
const hubs: Hub[] = [
  {
    id: "1",
    name: "Green Fitness Athens",
    city: "Αθήνα",
    address: "Λεωφ. Αλεξάνδρας 150, Αθήνα",
    phone: "+30 210 123 4567",
    hours: "06:00 - 22:00",
    type: "gym",
    members: 450,
  },
  {
    id: "2",
    name: "Eco-Pulse Gym Thessaloniki",
    city: "Θεσσαλονίκη",
    address: "Οδός Τσιμισκή 45, Θεσσαλονίκη",
    phone: "+30 231 098 7654",
    hours: "06:30 - 21:00",
    type: "gym",
    members: 320,
  },
  {
    id: "3",
    name: "Smart Locker - Maroussi",
    city: "Μαρούσι",
    address: "Λεωφ. Κηφισίας 200, Μαρούσι",
    phone: "N/A",
    hours: "24/7",
    type: "collection-point",
    members: 0,
  },
  {
    id: "4",
    name: "Coastal Fitness Glyfada",
    city: "Γλυφάδα",
    address: "Λεωφ. Ποσειδώνος 80, Γλυφάδα",
    phone: "+30 210 894 5678",
    hours: "07:00 - 23:00",
    type: "gym",
    members: 280,
  },
  {
    id: "5",
    name: "Smart Locker - Syntagma",
    city: "Σύνταγμα",
    address: "Πλατεία Συντάγματος, Αθήνα",
    phone: "N/A",
    hours: "24/7",
    type: "collection-point",
    members: 0,
  },
];
 
const cities = ["Όλες", "Αθήνα", "Θεσσαλονίκη", "Γλυφάδα", "Μαρούσι"];
 
export default function RecyclePage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [proteinGrams, setProteinGrams] = useState(100);
  const [energyGenerated, setEnergyGenerated] = useState(100 * 0.045);
  const [selectedCity, setSelectedCity] = useState("Όλες");
  const [selectedHub, setSelectedHub] = useState<Hub | null>(null);
 
  const filteredHubs =
    selectedCity === "Όλες"
      ? hubs
      : hubs.filter((h) => h.city === selectedCity);
 
  // Energy calculator: ~1 gram protein = ~0.045 kWh
  const calculateEnergy = (grams: number) => {
    const kWh = (grams * 0.045).toFixed(2);
    setEnergyGenerated(parseFloat(kWh));
  };
 
  useEffect(() => {
    calculateEnergy(proteinGrams);
  }, []);
 
  const handleProteinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setProteinGrams(value);
    calculateEnergy(value);
  };
 
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
 
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
              Recycle & Earn
              <br />
              <span className="text-gradient-gold">Protein for Energy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Επέστρεψε τα περισσεύματα ή τη ληγμένη πρωτεΐνη σου και δες πόση ενέργεια παράχθηκε.
            </p>
          </motion.div>
        </div>
      </section>
 
      {/* How it works */}
      <section className="py-16 lg:py-24 border-t border-white/5" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden glow-green">
                <img src={PROTEIN_IMAGE} alt="Smart Locker" className="w-full h-96 object-cover" />
              </div>
            </motion.div>
 
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                Η διαδικασία είναι απλή
              </h2>
 
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Συγκέντρωσε",
                    desc: "Συγκέντρωσε τα άδεια ή ληγμένα δοχεία πρωτεΐνης σου.",
                  },
                  {
                    step: "02",
                    title: "Επέστρεψε",
                    desc: "Χρησιμοποίησε το digital return label ή παράδωσε σε ένα Smart Locker.",
                  },
                  {
                    step: "03",
                    title: "Δες τον Αντίκτυπο",
                    desc: "Παρακολούθησε πόση ενέργεια παράχθηκε από τα δικά σου υλικά.",
                  },
                  {
                    step: "04",
                    title: "Κέρδισε",
                    desc: "Λάβε Green Credits, εκπτώσεις και κουπόνια για νέα αγορά.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
                      <span className="font-mono-data font-bold text-secondary">{step}</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
 
          {/* Energy Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="gradient-border rounded-3xl p-8 lg:p-12 bg-card"
          >
            <h3 className="font-display font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-secondary" />
              Energy Conversion Calculator
            </h3>
 
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Πόσα γραμμάρια πρωτεΐνης επιστρέφεις;
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={proteinGrams}
                    onChange={handleProteinChange}
                    min="0"
                    max="10000"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-foreground font-mono-data text-lg focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/70 font-medium">
                    g
                  </span>
                </div>
              </div>
 
              {/* Output */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Ενέργεια που παράχθηκε
                </label>
                <div className="w-full px-6 py-4 bg-secondary/10 border border-secondary/30 rounded-xl font-mono-data text-lg font-bold text-secondary">
                  {energyGenerated.toFixed(2)} kWh
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  ≈ {(energyGenerated * 1000).toFixed(0)} Wh ανανεώσιμης ενέργειας
                </p>
              </div>
            </div>
 
            {/* Impact visualization */}
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-sm text-foreground/70 mb-3">Αυτό ισοδυναμεί με:</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-mono-data font-bold text-lg text-primary">
                    {(energyGenerated * 0.5).toFixed(1)}
                  </p>
                  <p className="text-xs text-muted-foreground">kg CO₂ εξοικονομημένα</p>
                </div>
                <div className="text-center">
                  <p className="font-mono-data font-bold text-lg text-secondary">
                    {Math.floor(energyGenerated * 10)}
                  </p>
                  <p className="text-xs text-muted-foreground">Green Credits</p>
                </div>
                <div className="text-center">
                  <p className="font-mono-data font-bold text-lg text-primary">
                    {(energyGenerated * 0.2).toFixed(1)}
                  </p>
                  <p className="text-xs text-muted-foreground">€ Voucher Value</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* Hubs Section */}
      <section className="py-16 lg:py-24 border-t border-white/5" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
              Βρες το κοντινότερό σου
              <br />
              <span className="text-gradient-green">Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Επέστρεψε τα δοχεία σου σε ένα από τα συνεργαζόμενα hubs μας και κέρδισε Green Credits αμέσως.
            </p>
          </motion.div>
 
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCity === city
                    ? "bg-primary text-primary-foreground"
                    : "border border-white/10 text-muted-foreground hover:border-primary/30"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
 
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 gradient-border rounded-2xl overflow-hidden bg-card h-96 lg:h-full min-h-[500px] flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Διαδραστικός χάρτης με όλα τα Hubs
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Google Maps integration coming soon)
                </p>
              </div>
            </motion.div>
 
            {/* Hub list */}
            <div className="space-y-4">
              {filteredHubs.map((hub, i) => (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  onClick={() => setSelectedHub(hub)}
                  className={`gradient-border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    selectedHub?.id === hub.id
                      ? "bg-primary/10 border-primary"
                      : "bg-card hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-sm text-foreground">
                        {hub.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{hub.city}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        hub.type === "gym"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {hub.type === "gym" ? "Γυμναστήριο" : "Σημείο Συλλογής"}
                    </span>
                  </div>
 
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                      <span>{hub.address}</span>
                    </div>
                    {hub.phone !== "N/A" && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                        <span>{hub.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                      <span>{hub.hours}</span>
                    </div>
                    {hub.members > 0 && (
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                        <span>{hub.members} μέλη</span>
                      </div>
                    )}
                  </div>
 
                  <button className="w-full mt-4 px-3 py-2 text-xs font-semibold bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-all duration-200">
                    Δες λεπτομέρειες
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  );
}