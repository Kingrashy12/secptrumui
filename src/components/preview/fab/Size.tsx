import { Fab, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const FabSize = ({ code }: { code: string }) => {
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
      ) : (
        <CodeBlock code={code} />
      )}
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
