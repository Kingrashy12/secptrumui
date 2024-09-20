import {
  Button,
  Card,
  Tabs,
  TabsHandle,
  TabsList,
  Typography,
} from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";
import { useTheme } from "@/context/useTheme";
import React, { useState } from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const CardExample = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();

  return (
    <Container>
      <Tabs>
        <TabsList variant="solid">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle
            activeColor={theme.colors?.active_TabColor}
            value="code"
            onClick={() => setMode("code")}
          >
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
        <CardWrap theme={theme}>
          <Typography as="h2">Welcome to Spectrum UI</Typography>
          <Typography>
            This card uses the default theme and supports shadowing for a raised
            effect.
          </Typography>
          <Button
            onClick={() =>
              toast.success("Welcome! I hope you'll stick around 🙂")
            }
          >
            Click me
          </Button>
        </CardWrap>
      ) : (
        <CodeBlock code={code} />
      )}
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
