import { getThemeMode } from "@/context/useTheme";
import { localColors } from "@/styles/global";
import { colors } from "secptrum-ui";

const getModeStyle = (mode: "dark" | "light") => {
  switch (mode) {
    case "dark":
      return getThemeMode("dark")?.colors;
    case "light":
      return getThemeMode("light")?.colors;
  }
};

const modeColors = {
  light: {
    background: "#ffffff",
    text: "#000000",
    outline_ButtonBorderColor: colors.neutral[200],
    //********Tabs theme*********//
    active_TabColor: colors.blue[600], //TabHandle active color
    active_TabColor_Solid: "black", //TabHandle active color for solid varaint
    inActiveTabColor: colors.neutral[400], //TabHandle inactive color
    lineBorder: colors.neutral[200],
    tabListBackground: colors.gray[100], //TabList BackgroundColor
    button_OutlineHoverColor: localColors.gray[50],
    card: "white",
    card_BorderColor: localColors.neutral[200],
    cardShadow: "rgba(0, 0, 0, 0.1)",
    icon: "white",
    drop: "rgb(255, 255, 255, 0.5)",
    checkBoxBorderColor: localColors.neutral[200],
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    outline_ButtonBorderColor: localColors.neutral[800],
    //********Tabs theme*********//
    active_TabColor: "white", //TabHandle active color
    active_TabColor_Solid: "black", //TabHandle active color for solid variant
    inActiveTabColor: localColors.neutral[800], //TabHandle inactive color
    lineBorder: colors.neutral[700],
    tabListBackground: localColors.neutral[800], //TabList BackgroundColor
    button_OutlineHoverColor: "rgb(59,130,246,.1)",
    card: "#000000",
    card_BorderColor: localColors.neutral[800],
    cardShadow: "rgba(255, 255, 255, 0.1)",
    icon: "black",
    drop: "rgb(0,0,0, 0.6)",
    checkBoxBorderColor: localColors.neutral[700],
  },
};

export { getModeStyle, modeColors };
