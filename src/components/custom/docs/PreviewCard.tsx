import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import CodeBlock from "../code/CodeBlock";
import { Button, Tabs, TabsHandle } from "@/components";
import { useTheme } from "@/context/useTheme";
import { Stack } from "secptrum-ui";
import styled from "styled-components";
import { toast } from "@/components/test/toast/Toast";
import TabPanel from "@/components/test/tabs/TabPanel";

type PreviewCardType = {
  code: string;
};

const PreviewCard = ({ code }: PreviewCardType) => {
  const { theme } = useTheme();
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
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
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
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
