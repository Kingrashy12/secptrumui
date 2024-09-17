import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ButtonLoading = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();
  return (
    <Preview
      borderColor={theme.colors?.card_border}
      backgroundColor={theme.colors?.card}
    >
      <Tabs>
        <TabsList variant="solid" backgroundColor={theme.colors?.tab_list}>
          <TabsHandle
            activeColor={theme.colors?.active_tab_color}
            activeSolidColor={theme.colors?.active_tab_color_solid}
            value="preview"
            onClick={() => setMode("preview")}
          >
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
