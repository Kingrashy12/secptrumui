import { Button, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import { RiDeleteBin5Line, RiMessage3Line } from "react-icons/ri";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const BoxLay = ({ code }: { code: string }) => {
  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Container padding="16px" direction="row" centered>
            <Button
              size="lg"
              variant="outline"
              icon={RiMessage3Line}
              onClick={() =>
                toast.info("Login to chat with user", {
                  transition: "walkIn",
                  position: "top-left",
                })
              }
            >
              Chat
            </Button>
            <Button
              icon={RiDeleteBin5Line}
              size="lg"
              variant="danger"
              onClick={() =>
                toast.warning("You can't perform this action", {
                  transition: "dropIn",
                })
              }
            >
              Delete
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

export default BoxLay;

const Container = styled(Box)`
  gap: 12px;

  /* button {
    margin-top: 9px;
  } */
`;
