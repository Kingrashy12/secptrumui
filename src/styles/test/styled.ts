import { Box, colors, shouldForwardProps } from "secptrum-ui";
import styled from "styled-components";

const shouldForwardProp = shouldForwardProps;

export const FixedBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 500;
`;
