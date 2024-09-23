import { Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TextInput from "@/components/test/Input";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const TextInputWithError = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = emailRegex.test(email);

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            icon={MdOutlineAlternateEmail}
            errorMessage="Please enter a valid email address."
            hasError={email && !isValidEmail}
          />
        </Stack>
      ) : (
        <CodeBlock code={code} />
      )}
    </Container>
  );
};

export default TextInputWithError;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
