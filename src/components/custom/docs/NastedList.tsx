import { useTheme } from "@/context/useTheme";
import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

type NastedListType = {
  children: React.ReactNode;
  id?: string;
};

const NastedList = ({ children, id }: NastedListType) => {
  const { theme } = useTheme();
  return (
    <Container id={id} theme={theme}>
      {children}
    </Container>
  );
};

export default NastedList;

const Container = styled(Box)`
  flex-direction: column;
  gap: 12px;

  p {
    font-family: "Poppins-Medium", sans-serif;
  }
`;

export const ListBody = styled.p`
  font-family: "Poppins-Medium", sans-serif;
  color: ${({ theme }) => theme.colors?.body};
`;
