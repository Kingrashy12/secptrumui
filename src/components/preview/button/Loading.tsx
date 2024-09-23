import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ButtonLoading = ({ code }: { code: string }) => {
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
        <Conatiner align="horizontal">
          <Button isLoading>Login</Button>
        </Conatiner>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default ButtonLoading;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
