import { Button, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { RiDeleteBin5Line, RiMessage3Line } from "react-icons/ri";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const BoxLay = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const { theme } = useTheme();

  return (
    <Preview>
      <Tabs>
        <TabsList variant="solid">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle
            activeColor={theme.colors?.active_TabColor}
            value="code"
            onClick={() => setMode("code")}
          >
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
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
      ) : (
        <CodeBlock code={code} />
      )}
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
