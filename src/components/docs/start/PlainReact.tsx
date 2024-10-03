"use client";

import React from "react";
import { Container } from "./InstallPage";
import CreateReactApp from "@/components/sections/docs/start/CreateReactApp";
import DocBar from "@/components/sections/components/DocBar";

const PlainReact = () => {
  return (
    <Container>
      <CreateReactApp />
      <DocBar />
    </Container>
  );
};

export default PlainReact;
