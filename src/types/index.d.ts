declare type ListType = {
  bold_text: string;
  item_text: string;
};

declare type ListContent = {
  li: ListType[];
};

declare type ContentType = {
  id: string;
  text: string;
};

declare type ThemeContentType = {
  mode: "light" | "dark";
  onThemeToggle: () => void;
};

declare type Theme = {
  colors?: {
    [key: string]: string;
  };
  fonts?: {
    [key: string]: string;
  };
  [key: string]: any; // To handle custom properties
};

declare type ThemeContextType = {
  /**
   * The current theme configuration applied to the application.
   * This includes settings for colors, fonts, and effects based on the current mode.
   *
   * @type {typeof `defaultLightTheme` | typeof `defaultDarkTheme`}
   */
  theme: Theme;
  /**
   * Toggles the theme mode between `light` and `dark`.
   *
   * This function switches the application between light and dark modes by updating the `mode` state and merging the appropriate default theme with any user-provided theme overrides. The new mode is also saved to local storage to persist the user's preference across sessions.
   *
   * @example
   * // Toggle between light and dark modes
   * toggleTheme();
   */
  toggleTheme: () => void;
  setCustomTheme: (theme: { light: any; dark: any }) => void;
  /**
   * The current theme mode of the application, either `light` or `dark`.
   *
   * @type {`light` | `dark`}
   */
  mode: "light" | "dark";
};

declare type ContextProviderType = {
  children: React.ReactNode;
};

declare type ModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

declare type ReferenceType = {
  reference: {
    prop: string;
    type: string;
    description: string;
    default: string;
  }[];
};
