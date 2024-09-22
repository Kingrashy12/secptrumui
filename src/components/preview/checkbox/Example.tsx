import { Checkbox, Tabs, TabsHandle, TabsList, Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Box, Stack } from "secptrum-ui";
import styled from "styled-components";

const CheckboxExample = ({ code }: { code: string }) => {
  const [check, setCheck] = useState(false);
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();

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
        <Stack align="horizontal" spacing="lg">
          <Trigger onClick={() => setCheck(!check)}>
            <Checkbox checked={check} onCheck={() => setCheck(!check)} />
            <Text theme={theme}>I have reviewed and accepted the terms.</Text>
          </Trigger>
        </Stack>
      ) : (
        <CodeBlock code={code} />
      )}
    </Container>
  );
};

export default CheckboxExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Trigger = styled(Box)`
  align-items: center;
  gap: 8px;
  cursor: default;
`;

const Text = styled(Typography)`
  font-size: 13px;
  font-family: "Poppins-Normal";
  color: ${(props) => props.theme.colors?.text};
`;
