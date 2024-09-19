import PropOptions from "@/components/custom/docs/PropOptions";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import PageNavigator from "@/components/PageNavigator";
import BasicDrop from "@/components/preview/backdrop/Basic";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { dropCode } from "@/data/code/backdrop";
import { backdropRef } from "@/data/reference/backdrop";
import {
  BodyText,
  InstallPageContainer,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const Backdrop = () => {
  const { theme } = useTheme();
  return (
    <InstallPageContainer>
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
      <TextContent_Wrap id="example">
        <Link href="#example" className="a">
          <MediumTextHeader as="h2" theme={theme}>
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
          <MediumTextHeader as="h2" theme={theme}>
            Theming
          </MediumTextHeader>
        </Link>
        <PropOptions>
          <li>
            The Backdrop component respects the theme provided by your
            ThemeProvider, allowing you to seamlessly integrate it with your
            application's design system.
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          See the comprehensive guide below for a complete reference to all of
          the props available to the <TextBadge>Backdrop</TextBadge> components.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={backdropRef} />
      <PageNavigator />
    </InstallPageContainer>
  );
};

export default Backdrop;
