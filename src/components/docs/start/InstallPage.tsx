"use client";

import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";
import Install from "@/components/sections/docs/start/Install";

const InstallPage = () => {
  return (
    <Container>
      <Install />
    </Container>
  );
};

export default InstallPage;

export const Container = styled(Box)`
  gap: 8px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
`;
