import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import {
  RiContactsFill,
  RiMessage3Line,
  RiVideoChatFill,
} from "react-icons/ri";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const AlignStack = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Container align="horizontal">
            <Button size="lg" icon={RiVideoChatFill} variant="outline">
              Video Chat
            </Button>
            <Button size="lg" icon={RiMessage3Line} variant="ghost">
              Chat
            </Button>
            <Button icon={RiContactsFill} size="lg" variant="light">
              Add to contact
            </Button>
          </Container>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default AlignStack;

const Container = styled(Stack)`
  width: auto;
  flex-wrap: wrap;
`;
