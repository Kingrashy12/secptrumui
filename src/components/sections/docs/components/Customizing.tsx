import CodeBlock from "@/components/custom/code/CodeBlock";
import Typography from "@/components/custom/Typography";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { usageCode } from "@/data/code/usage";
import { BodyText } from "@/styles/docs/start.styled";
import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const Customizing = () => {
  const { theme } = useTheme();
  return (
    <BoxSui>
      <Example as="h4" id="example-usage" theme={theme}>
        Example Usage
      </Example>
      <BodyText theme={theme}>
        Here’s an example of how you can customize a component:
      </BodyText>
      <CodeBlock code={usageCode.example} />
      <>
        <Example as="h4" id="why-use-&&" theme={theme}>
          Why Use <TextBadge>&&</TextBadge>?
        </Example>
        <BodyText theme={theme}>
          The <TextBadge>&&</TextBadge> selector increases specificity, making
          it easier to override default styles provided by the component. This
          is particularly helpful when the original component’s styles use
          selectors with higher specificity that would otherwise prevent your
          custom styles from being applied.
        </BodyText>
      </>
    </BoxSui>
  );
};

export default Customizing;

const BoxSui = styled(Box)`
  && {
    flex-direction: column;
  }
`;

const Example = styled(Typography)`
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors?.text};
  font-family: "General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
`;
