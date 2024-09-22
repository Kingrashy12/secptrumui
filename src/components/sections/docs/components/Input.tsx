import PropOptions from "@/components/custom/docs/PropOptions";
import DocsLayout from "@/components/layout/DocsLayout";
import InputHero from "@/components/preview/input/Example";
import TextInput_Password from "@/components/preview/input/Password";
import TextInput_Variants from "@/components/preview/input/Variants";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const Input = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          TextInput
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>TextInput</TextBadge> component is a versatile and
          customizable text input field designed to handle various user input
          scenarios. It supports different states, such as disabled, error
          handling, and more, ensuring flexibility for form elements.
        </BodyText>
      </TextContent_Wrap>
      <InputHero />
      <TextContent_Wrap id="variants">
        <Link href="#variants" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Variants
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The TextInput component is available in three variants:
        </BodyText>
        <PropOptions hideHeader>
          <li>
            <strong>Solid</strong>
          </li>
          <li>
            <strong>Outline</strong>
          </li>
          <li>
            <strong>Ghost</strong>
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <TextInput_Variants code="" />
      <TextContent_Wrap id="example">
        <Link href="#example" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Examples
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Below are basic examples of how to use the{" "}
          <TextBadge>TextInput</TextBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <PropOptions hideHeader>
        <li>With Type "password" </li>
      </PropOptions>
      <div style={{ marginTop: 16 }} />
      <TextInput_Password code="" />
    </DocsLayout>
  );
};

export default Input;
