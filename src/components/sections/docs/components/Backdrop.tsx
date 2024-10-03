import PropOptions from "@/components/custom/docs/PropOptions";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import BasicDrop from "@/components/preview/backdrop/Basic";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { dropCode } from "@/data/code/backdrop";
import { backdropRef } from "@/data/reference/backdrop";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import Link from "next/link";
import React from "react";

const Backdrop = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Backdrop
        </LargeTextHeader>
        <BodyText theme={theme}>
          The Backdrop component is used to provide a dimmed background to focus
          attention on a particular task or content, typically paired with
          modals, side drawers, or loading indicators.
        </BodyText>
      </TextContent_Wrap>
      <Divider theme={theme} />
      <TextContent_Wrap id="example">
        <Link href="#example" className="a">
          <MediumTextHeader as="h4" id="example" isMedium theme={theme}>
            Example
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The demo below shows a basic Backdrop with a CircleLoader component in
          the foreground to indicate a loading state.
        </BodyText>
      </TextContent_Wrap>
      <BasicDrop code={dropCode.basic} />
      <TextContent_Wrap id="theming">
        <Link href="#theming" className="a">
          <MediumTextHeader as="h4" id="theming" isMedium theme={theme}>
            Theming
          </MediumTextHeader>
        </Link>
        <PropOptions italic hideHeader>
          <li>
            The <TextBadge>Backdrop</TextBadge> component respects the theme
            provided, allowing you to seamlessly integrate it with your
            application's design system.
          </li>
        </PropOptions>
        <PropOptions
          italic
          hideHeader
          hasBodyText
          bodyText="You can modify these values globally by adjusting the theme or override them per instance using props, allowing for flexible styling that aligns with your design system."
        >
          <li>
            <TextBadge>drop</TextBadge>:{" "}
            <TextBadge>rgba(0, 0, 0, 0.5)</TextBadge>,{" "}
            <TextBadge>rgba(255, 255, 255, 0.5)</TextBadge> – The default
            semi-transparent background of the backdrop.
          </li>
          <li>
            <TextBadge>drop_blur</TextBadge>: <TextBadge>5px</TextBadge> – The
            default blur effect applied to the backdrop for a frosted glass
            appearance.
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h4" id="api-reference" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          See the comprehensive guide below for a complete reference to all of
          the props available to the <TextBadge>Backdrop</TextBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={backdropRef} />
    </DocsLayout>
  );
};

export default Backdrop;
