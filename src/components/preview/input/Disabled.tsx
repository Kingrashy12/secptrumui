import { Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TextInput from "@/components/test/Input";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const DisabledTextInput = ({ code }: { code: string }) => {
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
        <Stack spacing="lg">
          <TextInput
            Type="email"
            name="email"
            placeholder="Enter your email"
            icon={MdOutlineAlternateEmail}
            disabled
          />
        </Stack>
      ) : (
        <CodeBlock code={code} />
      )}
    </Container>
  );
};

export default DisabledTextInput;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
