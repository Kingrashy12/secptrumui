import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import {
  RiContactsFill,
  RiMessage3Line,
  RiVideoChatFill,
} from "react-icons/ri";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const BasicStack = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");

  return (
    <Preview>
      <Tabs>
        <TabsList variant="solid">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle value="code" onClick={() => setMode("code")}>
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
        <Container>
          <Button size="lg" icon={RiVideoChatFill} variant="outline">
            Video Chat
          </Button>
          <Button size="lg" icon={RiMessage3Line} variant="ghost">
            Chat
          </Button>
          <Button icon={RiContactsFill} size="lg" variant="light">
            Add to contact
          </Button>
        </Container>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default BasicStack;

const Container = styled(Stack)`
  width: auto;
  flex-wrap: wrap;
`;
