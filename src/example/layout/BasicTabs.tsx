import { Card, Tabs, TabsHandle, Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { useTheme } from "@/context/useTheme";
import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const BasicTabs = ({ code }: { code: string }) => {
  const { theme } = useTheme();
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>
        <TabPanel>
          <Account>
            <Text theme={theme} as="h4">
              Account
            </Text>
            <Tabs>
              <TabsHandle value="overview">Overview</TabsHandle>
              <TabsHandle value="settings">Settings</TabsHandle>
              <TabsHandle value="profile">Profile</TabsHandle>

              <TabPanel>
                <Text theme={theme}>Overview Content</Text>
              </TabPanel>
              <TabPanel>
                <Text theme={theme}>Settings Content</Text>
              </TabPanel>
              <TabPanel>
                <Text theme={theme}>Profile Content</Text>
              </TabPanel>
            </Tabs>
          </Account>
        </TabPanel>
        <CodeCard>
          <CodeBlock code={code} />
        </CodeCard>
      </Tabs>
    </Container>
  );
};

export default BasicTabs;

const Container = styled(Box)`
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    padding: 5px;
  }
`;

const Text = styled(Typography)`
  color: ${(props) => props.theme.colors?.text};
`;

const Account = styled(Card)``;

export const CodeCard = TabPanel;
