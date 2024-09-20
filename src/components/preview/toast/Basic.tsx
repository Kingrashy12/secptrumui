import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const BasicToast = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();

  function makeToast() {
    toast.info("Hello world");
  }

  return (
    <Preview
    //   borderColor={theme.colors?.card_border}
    //   backgroundColor={theme.colors?.card}
    >
      <Tabs>
        <TabsList variant="solid">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle
            activeColor={theme.colors?.active_tab_color}
            value="code"
            onClick={() => setMode("code")}
          >
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
        <PrevContainer align="horizontal">
          <Button size="lg" onClick={makeToast}>
            Make a toast
          </Button>
        </PrevContainer>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default BasicToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
