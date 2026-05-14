import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // ΠΡΟΣΘΕΣΕ ΑΥΤΗ ΤΗ ΓΡΑΜΜΗ:
  base: "/", 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Βεβαιώσου ότι το outDir είναι σωστό
    outDir: "dist",
  }
});
