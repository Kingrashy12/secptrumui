"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import deepmerge from "deepmerge";
import { colors } from "secptrum-ui";
import { localColors } from "@/styles/global";

const defaultLightTheme = {
  colors: {
    background: "#ffffff",
    text: "#000000",
    outline_ButtonBorderColor: colors.neutral200,
    active_TabColor: "black", //TabHandle active color
    active_TabColor_Solid: "black", //TabHandle active color for solid varaint
    inActiveTabColor: colors.neutral400, //TabHandle inactive color
    tabListBackground: colors.gray100, //TabList BackgroundColor
    button_OutlineHoverColor: localColors.gray[50],
    card: "white",
    card_BorderColor: localColors.neutral[200],
    card_BoxShadowColor: "rgba(0, 0, 0, 0.1)",
    prop: localColors.gray[200],
    icon: "white",
    drop: "rgb(255, 255, 255, 0.5)",
  },
  fonts: {
    body: "'Poppins-Medium', sans-serif",
    heading: "'Poppins-Semibold', sans-serif",
  },
  effects: {
    drop_blur: 6,
  },
};

const defaultDarkTheme = {
  colors: {
    background: "#121212",
    text: "#ffffff",
    outline_ButtonBorderColor: localColors.neutral[800],
    active_TabColor: "white", //TabHandle active color
    active_TabColor_Solid: "black", //TabHandle active color for solid variant
    inActiveTabColor: localColors.neutral[800], //TabHandle inactive color
    tabListBackground: localColors.neutral[800], //TabList BackgroundColor
    button_OutlineHoverColor: "rgb(59,130,246,.1)",
    card: "#000000",
    card_BorderColor: localColors.neutral[800],
    card_BoxShadowColor: "rgba(255, 255, 255, 0.1)",
    prop: localColors.neutral[800],
    icon: "black",
    drop: "rgb(0,0,0, 0.6)",
  },
  fonts: {
    body: "'Poppins-Medium', sans-serif",
    heading: "'Poppins-Semibold', sans-serif",
  },
  effects: {
    drop_blur: 6,
  },
};

// Create ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: defaultLightTheme,
      mode: "light",
      toggleTheme: () => {},
      setCustomTheme: () => {},
      overrideTheme: () => {},
    };
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

  useEffect(() => {
    setTheme(
      deepmerge(
        mode === "light" ? defaultLightTheme : defaultDarkTheme,
        mode === "light" ? userTheme.light : userTheme.dark
      )
    );
  }, [mode, userTheme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      if (typeof window !== undefined) {
        localStorage.setItem("secptrum-ui-theme", newMode);
      }
      return newMode;
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

  // Allow overriding specific properties of the current theme
  // function overrideTheme(themeOverride: { light?: any; dark?: any }) {
  //   setTheme((prevTheme) =>
  //     deepmerge(
  //       prevTheme,
  //       mode === "light"
  //         ? { ...defaultLightTheme, ...themeOverride.light }
  //         : { ...defaultDarkTheme, ...themeOverride.dark }
  //     )
  //   );
  // }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
