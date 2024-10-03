import { Fab, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const FabSize = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Conatiner align="horizontal">
            <Fab moveOnScroll position="top-left">
              <IoAdd />
            </Fab>
            <Fab size="lg" moveOnScroll position="top-center">
              <IoAdd />
            </Fab>
            <Fab size="xl" moveOnScroll position="top-right">
              <IoAdd />
            </Fab>
          </Conatiner>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default FabSize;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;
  height: 150px;
  position: relative;

  button {
    width: auto;
  }
`;
