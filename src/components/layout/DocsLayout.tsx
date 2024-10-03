"use client";

import { InstallPageContainer } from "@/styles/docs/start.styled";
import React from "react";
import PageNavigator from "../PageNavigator";
import ReportIssue from "../custom/docs/ReportIssue";
import { Divider } from "@/styles/global";
import { useTheme } from "@/context/useTheme";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <InstallPageContainer>
      <>{children}</>
      <Divider theme={theme} style={{ marginTop: 25 }} />
      <PageNavigator />
      <ReportIssue />
    </InstallPageContainer>
  );
};

export default DocsLayout;
