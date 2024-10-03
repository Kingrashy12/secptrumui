import { Checkbox, Tabs, TabsHandle, Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";
import { CodeCard } from "@/example/layout/BasicTabs";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Box, Stack } from "secptrum-ui";
import styled from "styled-components";

const RoundedCheck = ({ code }: { code: string }) => {
  const [check, setCheck] = useState(false);
  const { theme } = useTheme();

  return (
    <Container>
      <Tabs>
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <CodeCard>
          <Stack align="horizontal" spacing="lg">
            <Trigger onClick={() => setCheck(!check)}>
              <Checkbox
                checked={check}
                rounded
                onCheck={() => setCheck(!check)}
              />
              <Text theme={theme}>I have reviewed and accepted the terms.</Text>
            </Trigger>
          </Stack>
        </CodeCard>

        <CodeCard>
          <CodeBlock code={code} />
        </CodeCard>
      </Tabs>
    </Container>
  );
};

export default RoundedCheck;

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
