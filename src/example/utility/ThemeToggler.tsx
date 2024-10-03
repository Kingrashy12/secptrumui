import { Switch, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const ThemeTogglerExample = ({ code }: { code: string }) => {
  const [isOn, setIsOn] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <Stack align="horizontal">
            <Text theme={theme}>Light</Text>
            <Switch
              checked={isOn}
              onSwitch={() => {
                setIsOn(!isOn);
                toggleTheme();
              }}
            />
            <Text theme={theme}>Dark</Text>
          </Stack>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ThemeTogglerExample;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Text = styled.p`
  font-family: "Poppins-Medium", sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.text};
`;
