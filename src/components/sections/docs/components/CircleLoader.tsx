import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import CircleLoaderExample from "@/components/preview/CircleLoader";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { loadersCode } from "@/data/code/loader";
import { circleloaderRef } from "@/data/reference/loaders";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const CircleLoader = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          CircleLoader
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>CircleLoader</TextBadge> component provides a simple,
          customizable loading spinner. It's designed to visually indicate
          loading states, with options to adjust its size, color, and
          background.
        </BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="usage">
        <Link href="#usage" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Usage
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          You can import and use the <TextBadge>CircleLoader</TextBadge>{" "}
          component as follows:
        </BodyText>
      </TextContent_Wrap>
      <CircleLoaderExample code={loadersCode.circelLoader} />
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Below you'll find a reference to the props available for the{" "}
          <TextBadge>CircleLoader</TextBadge> component, which allows you to
          customize its appearance and behavior.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={circleloaderRef} />
    </DocsLayout>
  );
};

export default CircleLoader;
