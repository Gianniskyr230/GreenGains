import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Always use defaultTheme unless switchable is true
    if (!switchable) {
      return defaultTheme;
    }
    const stored = localStorage.getItem("theme");
    return (stored as Theme) || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    // Remove both classes first
    root.classList.remove("dark", "light");
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  // Force reset theme on mount if not switchable
  useEffect(() => {
    if (!switchable) {
      setTheme(defaultTheme);
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      if (defaultTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = switchable
    ? () => {
        setTheme(prev => {
          const newTheme = prev === "light" ? "dark" : "light";
          const root = document.documentElement;
          root.classList.remove("dark", "light");
          if (newTheme === "dark") {
            root.classList.add("dark");
          } else {
            root.classList.add("light");
          }
          localStorage.setItem("theme", newTheme);
          return newTheme;
        });
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
