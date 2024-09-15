"use-client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import deepmerge from "deepmerge";

const defaultLightTheme = {
  colors: {
    background: "#ffffff",
    text: "#000000",
    primary: "#0070f3",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
};

const defaultDarkTheme = {
  colors: {
    background: "#121212",
    text: "#ffffff",
    primary: "#bb86fc",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
};

// Create ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Add link to docs for ref
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({
  children,
  theme: userTheme = { light: {}, dark: {} },
}: {
  children: ReactNode;
  theme?: { light: any; dark: any };
}) => {
  const savedMode = global?.localStorage?.getItem("secptrum-ui-theme") as
    | "light"
    | "dark"
    | null;
  const initialMode = savedMode ? savedMode : "light";
  // Set initial theme state
  const [theme, setTheme] = useState(
    deepmerge(
      initialMode === "light" ? defaultLightTheme : defaultDarkTheme,
      initialMode === "light" ? userTheme.light : userTheme.dark
    )
  );
  const [mode, setMode] = useState<"light" | "dark">(initialMode);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
      global?.localStorage?.setItem("secptrum-ui-theme", newMode);

      // Merge the user-provided themes for light/dark mode
      return deepmerge(
        newMode === "light" ? defaultLightTheme : defaultDarkTheme,
        newMode === "light" ? userTheme.light : userTheme.dark
      );
    });
  };

  // Allow setting both light and dark custom themes dynamically
  const setCustomTheme = (newTheme: { light: any; dark: any }) => {
    setTheme((prevTheme) => {
      return deepmerge(
        mode === "light" ? defaultLightTheme : defaultDarkTheme,
        mode === "light" ? newTheme.light : newTheme.dark
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
