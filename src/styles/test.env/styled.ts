import { Card } from "@/components";
import { Box, Stack } from "secptrum-ui";
import styled from "styled-components";

export const TestEnvContainer = styled(Stack)`
  && {
    width: 100%;
    height: 100vh;
    /* flex-direction: column;
    padding: 2rem 2rem;
    justify-content: center;

    a {
      text-decoration: none;
    }

    @media screen and (max-width: 550px) {
      padding: 0.9rem 1rem;
    } */
  }
`;

export const TestEnvCard = styled(Card)`
  && {
    height: 100vh;
    margin-top: 3rem;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const TestEnvCardHeader = styled(Stack)`
  && {
    width: 100%;
    height: auto;
    justify-content: space-between;
  }
`;

export const TestEnvLists = styled(Box)`
  && {
    width: 100%;
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
  }
`;

export const HorizontalList = styled(Box)`
  && {
    width: 100%;
    overflow-x: auto;
    gap: 0;
    white-space: nowrap;
  }
`;
