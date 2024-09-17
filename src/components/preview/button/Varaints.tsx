import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ButtonVaraints = ({ code }: { code: string }) => {
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
          <Button size="lg" radius="lg">
            Solid Button
          </Button>
          <Button
            size="lg"
            radius="lg"
            variant="outline"
            color={theme.colors?.text}
            onHoverBackgroundOutline={theme.colors?.button_outline_hover}
            outlineBorderColor={theme.colors?.outline_button_border}
          >
            Outline Button
          </Button>
          <Button variant="light" size="lg" radius="lg">
            Light Button
          </Button>
          <Button variant="ghost" size="lg" radius="lg">
            Ghost Button
          </Button>
          <Button variant="danger" size="lg" radius="lg">
            Danger Button
          </Button>
        </Conatiner>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default ButtonVaraints;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
