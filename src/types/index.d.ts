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
  theme: Theme;
  toggleTheme: () => void;
  setCustomTheme: (theme: { light: any; dark: any }) => void;
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
