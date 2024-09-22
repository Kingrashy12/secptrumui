declare type ContentState = {
  contents: ContentType[];
};

declare type SystemTheme = {
  colors?: {
    background?: string;
    text?: string;
    outline_ButtonBorderColor?: string;
    active_TabColor?: string;
    active_TabColor_Solid?: string;
    inActiveTabColor?: string;
    tabListBackground?: string;
    button_OutlineHoverColor?: string;
    checkBoxBorderColor?: string;
    card?: string;
    drop?: string;
    cardShadow?: string;
    card_BorderColor?: string;
    [key: string]: string | undefined; // Allows additional custom color properties
  };
  fonts?: {
    body?: string;
    heading?: string;
    [key: string]: string | undefined; // Allows additional custom font properties
  };
  effects?: {
    drop_blur?: number;
    [key: string]: any; // Allows additional custom effect properties
  };
  [key: string]: any; // General catch-all for any additional custom properties
};
