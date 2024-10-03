import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ButtonRadius = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal">
            <Button size="md" radius="md">
              Medium Radius Button
            </Button>
            <Button size="md" radius="lg">
              Large Radius Button
            </Button>
            <Button size="md" radius="xl">
              Extra Large Radius Button
            </Button>
            <Button size="lg" radius="full">
              Full Radius Button
            </Button>
          </Conatiner>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default ButtonRadius;

const Conatiner = styled(Stack)`
  width: auto;
  flex-wrap: wrap;

  button {
    width: auto;
  }
`;
