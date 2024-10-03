import { Button, Card, Tabs, TabsHandle, Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { toast } from "@/components/test/toast/Toast";
import { useTheme } from "@/context/useTheme";
import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const CardExample = ({ code }: { code: string }) => {
  const { theme } = useTheme();

  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <CardWrap theme={theme}>
            <Typography as="h2">Welcome to Secptrum UI</Typography>
            <Typography>
              This card uses the default theme and supports shadowing for a
              raised effect.
            </Typography>
            <Button
              onClick={() =>
                toast.success("Welcome! I hope you'll stick around 🙂")
              }
            >
              Click me
            </Button>
          </CardWrap>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default CardExample;

const Container = styled(Box)`
  flex-direction: column;
  gap: 20px;
`;

const CardWrap = styled(Card)`
  width: 350px;
  align-self: center;

  h2 {
    color: ${(props) => props.theme.colors?.text};
  }

  p {
    color: ${(props) => props.theme.colors?.body};
  }
`;
