import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";

import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const PositionToast = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");

  function makeToast() {
    toast.success("You changed the position", {
      position: "top-left",
      transition: "dropIn",
    });
  }

  return (
    <Preview>
      <Tabs>
        <TabsList variant="solid">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle value="code" onClick={() => setMode("code")}>
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
        <PrevContainer align="horizontal">
          <Button size="lg" variant="outline" onClick={makeToast}>
            Change position
          </Button>
        </PrevContainer>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default PositionToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
