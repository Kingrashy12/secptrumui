import { RootLayout } from "@/components";
import Toaster from "@/components/test/toast/Toaster";
import { MenuProvider, SideBarProvider } from "@/context";
import { ThemeProvider } from "@/context/useTheme";
import { store } from "@/store/store";
import { localColors } from "@/styles/global";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { colors } from "secptrum-ui";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = {
    light: {
      colors: {
        icon: "black",
        body: "rgb(55,65,81)",
        divider: colors.neutral[200],
        code: "yellow",
        code_opt_line: "#2d2c2c",
        prop: localColors.gray[200],
      },
    },
    dark: {
      colors: {
        icon: "white",
        body: colors.neutral[500],
        divider: "#2d2c2c",
        code: "white",
        code_opt_line: "#2d2c2c",
        prop: localColors.neutral[800],
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
