import NastedList from "@/components/custom/docs/NastedList";
import PropOptions from "@/components/custom/docs/PropOptions";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import CheckboxExample from "@/components/preview/checkbox/Example";
import RoundedCheck from "@/components/preview/checkbox/Rounded";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { checkboxCode } from "@/data/code/checkbox";
import { checkboxRef } from "@/data/reference/checkbox";
import { PropBadge } from "@/styles/custom";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const CheckboxPage = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Checkbox
        </LargeTextHeader>
        <BodyText theme={theme}>
          Checkboxes allow the user to select one or more items from a set.
        </BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="example">
        <Link href="#example" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Examples
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Below are basic examples of how to use the{" "}
          <TextBadge>Checkbox</TextBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>Basic Usage</li>
      </PropOptions>
      <CheckboxExample code={checkboxCode.basic} />

      <div style={{ marginTop: 16 }} />
      <NastedList>
        <PropOptions hideHeader>
          <li>
            With <PropBadge>rounded</PropBadge> prop
          </li>
        </PropOptions>
      </NastedList>
      <RoundedCheck code={checkboxCode.rounded} />
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          See the documentation below for a complete reference to all of the
          props available to the <TextBadge>Checkbox</TextBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={checkboxRef} />
    </DocsLayout>
  );
};

export default CheckboxPage;
