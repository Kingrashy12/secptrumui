import { Switch, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const UseThemeExample = ({ code }: { code: string }) => {
  const [mode, setMode] = useState("preview");
  const [isOn, setIsOn] = useState(false);
  const { theme, mode: themeMode, toggleTheme } = useTheme();

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
        <Stack>
          <Text theme={theme}>Current Mode: {themeMode}</Text>
          <Switch
            checked={isOn}
            onSwitch={() => {
              setIsOn(!isOn);
              toggleTheme();
            }}
          />
        </Stack>
      ) : (
        <CodeBlock code={code} />
      )}
    </Container>
  );
};

export default UseThemeExample;

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
