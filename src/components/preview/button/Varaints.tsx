import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ButtonVaraints = ({ code }: { code: string }) => {
  const { theme } = useTheme();
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Conatiner align="horizontal">
            <Button size="lg" radius="lg">
              Solid Button
            </Button>
            <Button
              size="lg"
              radius="lg"
              variant="outline"
              color={theme.colors?.text}
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
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
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
