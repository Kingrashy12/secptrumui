import ContentWithOptions from "@/components/custom/code/ContentWithOptions";
import SingleCodeContent from "@/components/custom/code/SingleCodeContent";
import TextContent from "@/components/custom/docs/TextContent";
import TextContentWithList from "@/components/custom/docs/TextContentWithList";
import { next_setup } from "@/data/texts/install";
import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const NextInstallation = () => {
  return (
    <NextInstallContainer>
      <TextContent
        mediumHeader="Installtion"
        id="installation"
        bodyText="Secptrum UI is built for React, Run one of the following commands to add Secptrum UI to your project:"
      />
      <ContentWithOptions
        hasOptions
        firstOpt="npm"
        secondOpt="pnpm"
        thirdOpt="yarn"
        firstCmd="npm install"
        secondCmd="pnpm add"
        thirdCmd="yarn add"
        code="secptrum-ui styled-components react-icons"
      />
      <TextContent
        mediumHeader="Run CLI Tool"
        id="run-cli-tool"
        bodyText="SecptrumUI includes a CLI tool to help set up your Next.js project for use with styled-components. This tool automatically configures your project with the necessary files and settings. Navigate to your project directory and run the setup script:"
      />
      <ContentWithOptions
        hasOptions
        firstOpt="npm"
        secondOpt="pnpm"
        thirdOpt="yarn"
        firstCmd="npx"
        secondCmd="pnpm exec"
        thirdCmd="yarn exec"
        code="secptrum-setup setup"
      />
      <TextContentWithList
        header="What the CLI tool accomplish"
        id="what-the-cli-tool-accomplish"
        isMedium
        li={next_setup}
      />
      <TextContent
        mediumHeader="Enable styled-components in next.config.js."
        id="enable-styled-components-in-next.config.js"
        bodyText=""
        isMedium
      />
      <SingleCodeContent
        code={`module.exports = {
    reactStrictMode: true,
        compiler: {
            styledComponents: true,
        },
    }`}
      />
    </NextInstallContainer>
  );
};

export default NextInstallation;

export const NextInstallContainer = styled(Box)`
  flex-direction: column;
  width: 100%;
`;
