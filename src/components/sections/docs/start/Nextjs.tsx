import TextContent from "@/components/custom/docs/TextContent";
import { useTheme } from "@/context/useTheme";
import { InstallPageContainer } from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import React from "react";
import NextInstallation from "./NextInstallation";
import NextCliConfig from "./NextCliConfig";

const Nextjs = () => {
  const { theme } = useTheme();
  return (
    <InstallPageContainer>
      <TextContent
        largeHeader="Next.js"
        id="next.js"
        bodyText="Everything you need to set up Secptrum UI with Next.js."
      />
      <Divider theme={theme} />
      <NextInstallation />
      <NextCliConfig />
    </InstallPageContainer>
  );
};

export default Nextjs;
