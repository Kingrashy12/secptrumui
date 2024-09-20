import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const TransitionsToast = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();

  function walkin() {
    toast.success("Profile saved successfully!", {
      position: "bottom-left",
      transition: "walkIn",
    });
  }
  function slidein() {
    toast.info("New message received!", {
      position: "bottom-right",
      transition: "slideIn",
    });
  }
  function dropin() {
    toast.error("Error processing request!", {
      position: "top-left",
      transition: "dropIn",
    });
  }
  function popIn() {
    toast.success("Action completed!", {
      position: "top-right",
      transition: "popIn",
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
          <Button size="lg" onClick={walkin}>
            Walk in
          </Button>
          <Button size="lg" variant="outline" onClick={slidein}>
            Slide in
          </Button>
          <Button size="lg" variant="light" onClick={dropin}>
            Drop in
          </Button>
          <Button size="lg" variant="ghost" onClick={popIn}>
            Pop in
          </Button>
        </PrevContainer>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default TransitionsToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
