import DocInfo from "@/components/custom/docs/DocInfo";
import PropOptions from "@/components/custom/docs/PropOptions";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import DisabledTextInput from "@/components/preview/input/Disabled";
import TextInputWithError from "@/components/preview/input/Error";
import InputHero from "@/components/preview/input/Example";
import TextInput_Password from "@/components/preview/input/Password";
import TextInputRadius from "@/components/preview/input/Radius";
import TextInput_Variants from "@/components/preview/input/Variants";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { inputCodes } from "@/data/code/input";
import { inputRef } from "@/data/reference/input";
import { PropBadge } from "@/styles/custom";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
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
      <Divider theme={theme} style={{ marginBottom: 16 }} />
      <InputHero />
      <TextContent_Wrap id="variants">
        <Link href="#variants" className="a">
          <MediumTextHeader as="h4" id="variants" isMedium theme={theme}>
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
      <TextInput_Variants code={inputCodes.variant} />
      <TextContent_Wrap id="radius">
        <Link href="#radius" className="a">
          <MediumTextHeader as="h4" id="radius" isMedium theme={theme}>
            Radius
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The TextInput component has five <PropBadge>radius</PropBadge>{" "}
          options:
        </BodyText>
        <PropOptions hideHeader>
          <li>
            <strong>Small (sm)</strong>
          </li>
          <li>
            <strong>Medium (md)</strong>
          </li>
          <li>
            <strong>Large (lg)</strong>
          </li>
          <li>
            <strong>Extra Large (xl)</strong>
          </li>
          <li>
            <strong>Full (full)</strong>
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <TextInputRadius code={inputCodes.radius} />
      <TextContent_Wrap id="example">
        <Link href="#example" className="a">
          <MediumTextHeader as="h4" id="example" isMedium theme={theme}>
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
      <TextInput_Password code={inputCodes.pass} />
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>With error </li>
      </PropOptions>
      <div style={{ marginTop: 16 }} />
      <TextInputWithError code={inputCodes.error} />
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>With disabled state </li>
      </PropOptions>
      <div style={{ marginTop: 16 }} />
      <DisabledTextInput code={inputCodes.disabled} />
      <div style={{ marginTop: 20 }} />
      <DocInfo type="info">
        <BodyText>
          <b>Note:</b> While using the <TextBadge>icon</TextBadge> prop avoid
          wrapping the icon in a fragment ({"<>...</>"} or {"<FaUser/>"}) as
          this may cause the component to break.
        </BodyText>
      </DocInfo>
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h4" id="api-reference" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          This component builds upon the HTML <TextBadge>input</TextBadge>{" "}
          element, supporting all its native props and attributes, and adds
          custom functionality and styling capabilities.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={inputRef} />
    </DocsLayout>
  );
};

export default Input;
