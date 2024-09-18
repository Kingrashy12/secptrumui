import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import CodeBlock from "../code/CodeBlock";
import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import { useTheme } from "@/context/useTheme";
import { Stack, toast } from "secptrum-ui";
import styled from "styled-components";
import { localColors } from "@/styles/global";

type PreviewCardType = {
  code: string;
};

const PreviewCard = ({ code }: PreviewCardType) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();
  return (
    <Preview
      borderColor={theme.colors?.card_border}
      backgroundColor={theme.colors?.card}
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
        <Conatiner>
          <Button
            size="lg"
            radius="lg"
            variant="outline"
            color={theme.colors?.text}
            onClick={() => toast.success("This is a success message!")}
          >
            Make a toast
          </Button>
        </Conatiner>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default PreviewCard;

const Conatiner = styled(Stack)`
  width: auto;

  button {
    width: auto;
  }
`;
