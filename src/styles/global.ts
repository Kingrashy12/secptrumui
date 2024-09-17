"use-client";
import { Typography } from "@/components";
import {
  Inter,
  Lexend,
  Manrope,
  Nunito_Sans,
  Offside,
  Poppins,
} from "next/font/google";
import { Box, colors } from "secptrum-ui";
import styled, { createGlobalStyle } from "styled-components";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const fontNunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontOff = Offside({ subsets: ["latin"], weight: ["400"] });
export { fontPoppins, fontNunito, fontInter, fontOff };

export const Container = styled(Box)`
  margin-top: 0;
  width: 100%;
`;

export const RootWrap = styled(Box)`
  width: 100%;
`;

export const localColors = {
  neutral: {
    50: "rgb(250,250,250)",
    100: "rgb(245,245,245)",
    200: "rgb(229,229,229)",
    300: "rgb(212,212,212),",
    400: "rgb(163 163 163)",
    500: "rgb(115 115 115)",
    600: "rgb(82 82 82)",
    700: "rgb(64 64 64)",
    800: "rgb(38 38 38)",
    900: "rgb(23 23 23)",
    950: "rgb(10 10 10)",
  },
  gray: {
    50: "rgb(249 250 251)",
    100: "rgb(243 244 246)",
    200: "rgb(229 231 235)",
    300: "rgb(209 213 219)",
    400: "rgb(156 163 175)",
    500: "rgb(107 114 128)",
    600: "rgb(75 85 99)",
    700: "rgb(55 65 81)",
    800: "rgb(31 41 55)",
    900: "rgb(17 24 39)",
    950: "rgb(3 7 18)",
  },
  slate: {
    50: "rgb(248 250 252)",
    100: "rgb(241 245 249)",
    200: "rgb(226 232 240)",
    300: "rgb(203 213 225)",
    400: "rgb(148 163 184)",
    500: "rgb(100 116 139)",
    600: "rgb(71 85 105)",
    700: "rgb(51 65 85)",
    800: "rgb(30 41 59)",
    900: "rgb(15 23 42)",
    950: "rgb(2 6 23)",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
};

export const GlobalStyles = createGlobalStyle`
body{
  background: ${(props) => props.theme.colors?.background};
}
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors?.divider};
`;

export const CodeContainer = styled(Box)`
  background: #000;
  border-radius: 16px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 3px;

  pre {
    position: relative;
    display: flex;
    height: auto;
    margin: 0;
    padding: 26px;
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  }
  code {
    color: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
  }
`;

export const CodeOptions = styled(Box)`
  align-items: center;
  gap: 10px;
  padding-left: 1rem;
  height: auto;
  margin: 0;
  padding: 12px;
  padding-left: 1.3rem;
  width: 100%;

  svg {
    cursor: pointer;
    position: absolute;
    right: 1rem;
  }
`;

export const OptionSelector = styled.p.withConfig({
  shouldForwardProp: (props) => props !== "isactive",
})<{ isactive: boolean }>`
  color: ${(props) => (props.isactive ? "white" : colors.neutral400)};
  font-size: 12px;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;

  &:hover {
    background: ${localColors.neutral[800]};
  }
`;

export const OptionsLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors?.code_opt_line};
  width: 100%;
`;
