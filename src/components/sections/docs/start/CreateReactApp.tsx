import React from "react";
import { InstallPageContainer } from "@/styles/docs/start.styled";
import TextContent from "@/components/custom/docs/TextContent";
import ContentWithOptions from "@/components/custom/code/ContentWithOptions";
import CodeBlock from "@/components/custom/code/CodeBlock";

const CreateReactApp = () => {
  return (
    <InstallPageContainer>
      <TextContent
        largeHeader="Create React App"
        id="create-react-app"
        bodyText="If you are using <b>Create React App</b>, you only need to install the dependencies:"
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
