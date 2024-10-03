import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const TransitionsToast = ({ code }: { code: string }) => {
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
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
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
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
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
