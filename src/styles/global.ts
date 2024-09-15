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
  neutral800: "rgb(38 38 38)",
  slate700: "rgb(51 65 85)",
  slate800: "rgb(30 41 59)",
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
    background: ${localColors.neutral800};
  }
`;

export const OptionsLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors?.code_opt_line};
  width: 100%;
`;
