/*
 * GREEN GAINS — Find a Hub Page
 * Interactive map showing partner gyms and collection points
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Users, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Hub {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  type: "gym" | "collection-point";
  members: number;
  lat: number;
  lng: number;
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
    lat: 37.9838,
    lng: 23.7275,
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
    lat: 40.6361,
    lng: 22.9375,
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
    lat: 38.0192,
    lng: 23.8067,
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
    lat: 37.8526,
    lng: 23.7758,
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
    lat: 37.9753,
    lng: 23.7329,
  },
];

const cities = ["Όλες", "Αθήνα", "Θεσσαλονίκη", "Γλυφάδα", "Μαρούσι"];

export default function Hubs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCity, setSelectedCity] = useState("Όλες");
  const [selectedHub, setSelectedHub] = useState<Hub | null>(null);

  const filteredHubs =
    selectedCity === "Όλες"
      ? hubs
      : hubs.filter((h) => h.city === selectedCity);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
              Find a
              <br />
              <span className="text-gradient-green">Green Gains Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Βρες το κοντινότερό σου γυμναστήριο ή σημείο συλλογής για την επιστροφή πρωτεΐνης.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hubs Section */}
      <section className="py-16 lg:py-24 border-t border-white/5" ref={ref}>
        <div className="container">
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

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/15" />
            <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
            <div className="relative z-10 p-10 lg:p-16 text-center">
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-foreground mb-4">
                Γίνε Partner Hub
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Είσαι ιδιοκτήτης γυμναστηρίου ή περιβαλλοντικός φορέας; Ενώσου με το κίνημα Green Gains.
              </p>
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 glow-green">
                Επικοινωνία
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
