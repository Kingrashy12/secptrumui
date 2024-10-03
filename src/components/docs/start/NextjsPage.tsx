"use client";

import React from "react";
import { Container } from "./InstallPage";
import Nextjs from "@/components/sections/docs/start/Nextjs";
import DocBar from "@/components/sections/components/DocBar";

const NextjsPage = () => {
  return (
    <Container>
      <Nextjs />
      <DocBar />
    </Container>
  );
};

export default NextjsPage;
