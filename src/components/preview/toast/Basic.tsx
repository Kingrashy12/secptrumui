import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const BasicToast = ({ code }: { code: string }) => {
  function makeToast() {
    toast.info("Hello world");
  }

  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <PrevContainer align="horizontal">
            <Button size="lg" onClick={makeToast}>
              Make a toast
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

export default BasicToast;

export const PrevContainer = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
