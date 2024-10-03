import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import Backdrop from "@/components/test/Backdrop";
import TabPanel from "@/components/test/tabs/TabPanel";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { CircleLoader, Stack } from "secptrum-ui";
import styled from "styled-components";

const BasicDrop = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal">
            <Backdrop open={open} onClose={() => setOpen(false)}>
              <CircleLoader />
            </Backdrop>
            <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default BasicDrop;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
