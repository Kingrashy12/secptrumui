import TextContent from "@/components/custom/docs/TextContent";
import PageNavigator from "@/components/PageNavigator";
import { useTheme } from "@/context/useTheme";
import { InstallPageContainer } from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import React from "react";
import FrameworkGuide from "./FrameworkGuide";

const Install = () => {
  const { theme } = useTheme();
  return (
    <InstallPageContainer>
      <TextContent
        mediumHeader="Installation"
        id="installation"
        bodyText="Everything you need to set up Secptrum UI"
      />
      <Divider theme={theme} />
      <FrameworkGuide />
      <PageNavigator />
    </InstallPageContainer>
  );
};

export default Install;
