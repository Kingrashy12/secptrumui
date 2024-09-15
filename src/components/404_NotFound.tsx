import React from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";
import Typography from "./custom/Typography";
import Media from "./custom/Media";
import { Page_Not_Found } from "@/assets";
import { useTheme } from "@/context/useTheme";

const NotFound_404 = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <Icon src={Page_Not_Found?.src} alt="Page not found" />
      <Typography>
        The requested page was not found or is not ready yet.
      </Typography>
    </Container>
  );
};

export default NotFound_404;

const Container = styled(Stack)`
  gap: 1.5rem;

  p {
    color: ${(props) => props.theme.colors?.body};
  }
`;

const Icon = styled(Media)`
  width: 180px;
`;
