import { Switch, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { Preview } from "@/styles/docs/start.styled";
import { localColors } from "@/styles/global";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const SwitchColors = ({ code }: { code: string }) => {
  const [isOn, setIsOn] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [onSwitch, setOnSwitch] = useState(false);

  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack spacing="lg" align="horizontal">
            <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
            <Switch
              checked={switched}
              color={localColors.red[500]}
              checkedColor={localColors.green[500]}
              onSwitch={() => setSwitched(!switched)}
            />
            <Switch
              checked={onSwitch}
              color={localColors.neutral[600]}
              checkedColor={localColors.yellow[500]}
              onSwitch={() => setOnSwitch(!onSwitch)}
            />
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default SwitchColors;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;
