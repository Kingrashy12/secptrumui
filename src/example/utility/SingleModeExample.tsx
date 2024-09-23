import { Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TextInput from "@/components/test/Input";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const SingleModeExample = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();
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
        <Conatiner align="horizontal" spacing="lg">
          <TextInput
            Type="text"
            mode="light"
            variant="solid"
            placeholder="Light Mode TextInput"
          />
          <TextInput
            Type="text"
            mode="dark"
            variant="solid"
            placeholder="Dark Mode TextInput"
          />
        </Conatiner>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default SingleModeExample;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
