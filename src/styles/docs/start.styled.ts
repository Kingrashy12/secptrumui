import { Typography } from "@/components";
import { Box, Card, colors } from "secptrum-ui";
import styled from "styled-components";
import { fontInter, localColors } from "../global";

export const InstallPageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 3rem;
  /* gap: 1rem; */
  padding: 2rem 5rem;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 550px) {
    padding: 0.9rem 1rem;
  }
`;

export const TextContentWrap = styled(Box)`
  flex-direction: column;
  gap: 5px;

  a {
    text-decoration: none;
    align-items: center;
    display: flex;
  }

  a::before {
    content: "#";
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 25px;
    color: ${colors.neutral500};
    top: 46px;
    font-weight: 700;
    height: auto;
  }

  /* Show the # symbol when the header is hovered */
  &:hover a::before {
    opacity: 1;
  }
`;
export const LargeTextHeader = styled(Typography)`
  color: ${(props) => props.theme.colors?.text};
  font-size: 2.25rem;
  line-height: 1.2222222222222223;
  letter-spacing: -0.2px;
  font-weight: 600;
  font-family: "General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
`;
export const MediumTextHeader = styled(Typography).withConfig({
  shouldForwardProp: (prop) => prop !== "isMedium",
})<{ isMedium?: boolean }>`
  color: ${(props) => props.theme.colors?.text};
  font-size: ${(props) => (props.isMedium ? "1.45rem" : "1.625rem")};
  line-height: 1.5;
  letter-spacing: 0.1px;
  font-family: "General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  margin: 40px 0 4px;
`;
export const BodyText = styled(Typography)`
  color: ${(props) => props.theme.colors?.body};
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1.125rem;
  line-height: 1.3333333333333333;
  letter-spacing: 0;
  font-weight: 400;
  margin: 0 0 24px;
`;

export const FrameWorksContainer = styled(Box)`
  gap: 10px;
  flex-wrap: wrap;
`;

export const FrameWorkContent = styled(Card)`
  background: ${(props) => props.theme.colors?.card};
  border: 1px solid ${(props) => props.theme.colors?.card_border};
  cursor: pointer;
  width: 260px;
  max-width: 100%;

  &:hover {
    filter: ${(props) =>
      `drop-shadow(0 2px 2px ${props.theme.colors?.card_hover})`};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.colors?.text};
  }
  p {
    color: ${(props) => props.theme.colors?.body};
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const FrameWorkGuideContainer = styled(Box)`
  flex-direction: column;
  gap: 2rem;

  a {
    text-decoration: none;
  }

  p {
    color: ${(props) => props.theme.colors?.body};
  }

  p a {
    color: ${(props) => props.theme.colors?.text};
    font-weight: 600;
  }
`;
