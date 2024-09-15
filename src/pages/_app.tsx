import { RootLayout } from "@/components";
import { MenuProvider, SideBarProvider } from "@/context";
import { ThemeProvider } from "@/context/useTheme";
import { store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { colors, Toaster } from "secptrum-ui";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = {
    light: {
      colors: {
        icon: "black",
        // body: "#000000",
        body: "rgb(55,65,81)",
        divider: colors.neutral200,
        card: "white",
        card_border: colors.neutral200,
        card_hover: colors.slate500,
        code: "yellow",
        code_opt_line: "#2d2c2c",
        drop: "rgb(255, 255, 255, 0.5)",
      },
    },
    dark: {
      colors: {
        icon: "white",
        body: colors.neutral500,
        divider: "#2d2c2c",
        card: "#000000",
        card_border: colors.slate500,
        card_hover: colors.neutral600,
        code: "white",
        code_opt_line: "#2d2c2c",
        drop: "rgb(0,0,0, 0.5)",
      },
    },
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <MenuProvider>
          <SideBarProvider>
            <RootLayout>
              <Toaster />
              <Component {...pageProps} />
            </RootLayout>
          </SideBarProvider>
        </MenuProvider>
      </ThemeProvider>
    </Provider>
  );
}
