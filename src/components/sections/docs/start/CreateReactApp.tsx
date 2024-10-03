import React from "react";
import {
  BodyText,
  InstallPageContainer,
  LargeTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import TextContent from "@/components/custom/docs/TextContent";
import ContentWithOptions from "@/components/custom/code/ContentWithOptions";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";
import TextBadge from "@/components/test/TextBadge";

const CreateReactApp = () => {
  const { theme } = useTheme();
  return (
    <InstallPageContainer>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Create React App
        </LargeTextHeader>
        <BodyText theme={theme}>
          If you are using <TextBadge>Create React App</TextBadge>, you only
          need to install the dependencies:
        </BodyText>
      </TextContent_Wrap>
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
      <div style={{ marginTop: 20 }} />
      <TextContent
        bodyText="Once installed, you can start using SecptrumUI components right away:"
        id=""
        style={{ marginTop: "1rem" }}
      />
      <CodeBlock
        code={`
import { Button } from 'secptrum-ui';
import React from 'react';

const App = () => (
  <div>
    <Button>Click me</Button>
  </div>
);

export default App;
      `}
      />
    </InstallPageContainer>
  );
};

export default CreateReactApp;
