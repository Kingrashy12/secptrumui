import React from "react";
import { NextInstallContainer } from "./NextInstallation";
import Typography from "@/components/custom/Typography";
import styled from "styled-components";
import { Box } from "secptrum-ui";
import { fontInter, fontPoppins } from "@/styles/global";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { useTheme } from "@/context/useTheme";

const NextCliConfig = () => {
  const { theme } = useTheme();
  return (
    <NextInstallContainer>
      <Content theme={theme}>
        <Typography as="h4" font="inter">
          Wrap the children of the root layout with the style registry
          component:
        </Typography>
        <li>Typescript</li>
        <CodeBlock
          code={`
import StyledComponentsRegistry from './lib/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
              `}
        />
        <li>Javascript</li>
        <CodeBlock
          code={`
import StyledComponentsRegistry from './lib/registry'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
              `}
        />
        <Typography className="last">
          These steps ensure that your project is properly configured for
          styled-components with Next.js, following the latest guidelines.
        </Typography>
      </Content>
    </NextInstallContainer>
  );
};

export default NextCliConfig;

const Content = styled(Box)`
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  h4 {
    color: ${(props) => props.theme.colors?.text};
  }
  li {
    ${fontInter.style}
    font-weight: 700;
    color: ${(props) => props.theme.colors?.text};
  }
  .last {
    font-weight: 400;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors?.body};
  }
`;
