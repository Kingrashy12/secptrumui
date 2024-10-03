"use client";

import React from "react";
import { Container } from "./InstallPage";
import UsageSection from "@/components/sections/docs/start/UsageSection";
import DocBar from "@/components/sections/components/DocBar";

const Usage = () => {
  return (
    <Container>
      <UsageSection />
      <DocBar />
    </Container>
  );
};

export default Usage;
