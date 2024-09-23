import { Switch, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const SwitchSizes = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const [isOn, setIsOn] = useState(false);
  const [switched, setSwitched] = useState(false);

  return (
    <Container>
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
        <Stack spacing="lg" align="horizontal">
          <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
          <Switch
            checked={switched}
            size="lg"
            onSwitch={() => setSwitched(!switched)}
          />
        </Stack>
      ) : (
        <CodeBlock code={code} />
      )}
    </Container>
  );
};

export default SwitchSizes;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
