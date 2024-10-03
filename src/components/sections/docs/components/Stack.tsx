import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import AlignStack from "@/components/preview/stack/Align";
import BasicStack from "@/components/preview/stack/Basic";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { stackCodes } from "@/data/code/stack";
import { stackRef } from "@/data/reference/stack";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import Link from "next/link";
import React from "react";

const Stack_Page = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Stack
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>Stack</TextBadge> component is a layout utility
          designed to arrange elements in a row or column with customizable
          spacing. It builds on the flexibility of <TextBadge>Box</TextBadge>{" "}
          and provides additional layout control, making it easy to stack
          elements either horizontally or vertically.
        </BodyText>
      </TextContent_Wrap>
      <Divider theme={theme} />
      <TextContent_Wrap id="basic">
        <Link className="a" href="#basic">
          <MediumTextHeader as="h4" id="basic" isMedium theme={theme}>
            Basic
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Stack component acts as a generic container, wrapping around the
          elements to be arranged. Below is an example of a basic{" "}
          <TextBadge>Stack</TextBadge>
        </BodyText>
      </TextContent_Wrap>

      <BasicStack code={stackCodes.basic} />
      <TextContent_Wrap id="align">
        <Link className="a" href="#align">
          <MediumTextHeader as="h4" id="align" isMedium theme={theme}>
            Align
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          This example shows how to align contents horizontally (side-by-side).
        </BodyText>
      </TextContent_Wrap>
      <AlignStack code={stackCodes.align} />
      <TextContent_Wrap id="api-refrence">
        <Link className="a" href="#api-reference">
          <MediumTextHeader as="h4" id="api-reference" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Below is a table detailing the available props for the{" "}
          <TextBadge>Stack</TextBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={stackRef} />
    </DocsLayout>
  );
};

export default Stack_Page;
