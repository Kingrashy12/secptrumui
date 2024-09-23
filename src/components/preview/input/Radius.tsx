import { Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TextInput from "@/components/test/Input";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const TextInputRadius = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");

  return (
    <Container>
      <Tabs>
        <TabsList variant="line">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle value="code" onClick={() => setMode("code")}>
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
        <Wrap align="horizontal" spacing="lg">
          <TextInput
            Type="text"
            name="email"
            placeholder="Small Radius TextInput"
            variant="solid"
            radius="sm"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Medium Radius TextInput"
            variant="solid"
            radius="md"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Large Radius TextInput"
            variant="outline"
            radius="lg"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Extra Large Radius TextInput"
            variant="outline"
            radius="xl"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Full Radius TextInput"
            variant="solid"
            radius="full"
          />
        </Wrap>
      ) : (
        <CodeBlock code={code} />
      )}
    </Container>
  );
};

export default TextInputRadius;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Wrap = styled(Stack)`
  flex-wrap: wrap;
`;
