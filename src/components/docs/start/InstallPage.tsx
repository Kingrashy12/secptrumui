"use client";

import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";
import Install from "@/components/sections/docs/start/Install";
import DocBar from "@/components/sections/components/DocBar";

const InstallPage = () => {
  return (
    <Container>
      <Install />
      <DocBar />
    </Container>
  );
};

export default InstallPage;

export const Container = styled(Box)`
  gap: 8px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* flex-shrink: 1; */
  /* flex-direction: column; */
`;
