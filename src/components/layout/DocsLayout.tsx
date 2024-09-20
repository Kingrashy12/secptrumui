"use client";

import { InstallPageContainer } from "@/styles/docs/start.styled";
import React from "react";
import PageNavigator from "../PageNavigator";
import ReportIssue from "../custom/docs/ReportIssue";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InstallPageContainer>
      <>{children}</>
      <PageNavigator />
      <ReportIssue />
    </InstallPageContainer>
  );
};

export default DocsLayout;
