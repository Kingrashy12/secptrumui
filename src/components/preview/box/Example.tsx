import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { RiDeleteBin5Line, RiMessage3Line } from "react-icons/ri";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const BoxExample = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");

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
        <Container
          padding="16px"
          margin="24px"
          border="1px solid #ccc"
          paddingTop="lg"
          paddingBottom="lg"
          direction="column"
          centered
        >
          <Button
            size="lg"
            icon={RiMessage3Line}
            onClick={() =>
              toast.info("Login to chat with user", {
                position: "top-left",
              })
            }
            variant="outline"
          >
            Chat
          </Button>
          <Button
            icon={RiDeleteBin5Line}
            onClick={() =>
              toast.warning("You can't perform this action", {
                transition: "dropIn",
              })
            }
            size="lg"
            variant="danger"
          >
            Delete
          </Button>
        </Container>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default BoxExample;

const Container = styled(Box)`
  gap: 12px;

  button {
    margin-top: 9px;
  }
`;
