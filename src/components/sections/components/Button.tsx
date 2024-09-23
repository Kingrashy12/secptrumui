import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ButtonPreview = ({ code }: { code: string }) => {
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
        <Conatiner>
          <Button size="lg" radius="lg">
            Solid Button
          </Button>
        </Conatiner>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default ButtonPreview;

const Conatiner = styled(Stack)`
  width: auto;

  button {
    width: auto;
  }
`;
