import React from "react";
import { CircleLoader } from "secptrum-ui";
import styled from "styled-components";
import ProgressLoader from "./ProgressLoader";
import { useTheme } from "@/context/useTheme";

const BackgroundLoader = () => {
  const { theme } = useTheme();
  return (
    <Loader theme={theme}>
      <BarLoad>
        <ProgressLoader width={`100%`} />
      </BarLoad>
      <CircleLoader size={40} />
    </Loader>
  );
};

export default BackgroundLoader;

const BarLoad = styled.div`
  position: fixed;
  width: 100%;
  top: 1px;
  z-index: 200;
`;

const Loader = styled.div`
  background: ${(props) => props.theme.colors?.drop};
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(15px);
  top: 0;
  inset: 0;
  z-index: 300;
`;
