"use client";

import React from "react";
import { Container } from "./InstallPage";
import Overview from "@/components/sections/docs/start/Overview";
import DocBar from "@/components/sections/components/DocBar";

const OverViewPage = () => {
  return (
    <Container>
      <Overview />
      <DocBar />
    </Container>
  );
};

export default OverViewPage;
