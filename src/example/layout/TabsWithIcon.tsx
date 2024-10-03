import { Card, Tabs, TabsHandle, Typography } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import TabPanel from "@/components/test/tabs/TabPanel";
import { useTheme } from "@/context/useTheme";
import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const TabsWithIcons = ({ code }: { code: string }) => {
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
            <Tabs variant="solid">
              <TabsHandle value="email" icon={MdAlternateEmail}>
                Email
              </TabsHandle>
              <TabsHandle value="phone" icon={RiPhoneFill}>
                Phone
              </TabsHandle>

              <TabPanel>
                <Text theme={theme}>Login with email</Text>
              </TabPanel>
              <TabPanel>
                <Text theme={theme}>Login with Phonenumber</Text>
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

export default TabsWithIcons;

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
