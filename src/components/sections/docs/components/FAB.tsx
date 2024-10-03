import PropOptions from "@/components/custom/docs/PropOptions";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import BasicFab from "@/components/preview/fab/Basic";
import FabSize from "@/components/preview/fab/Size";
import FabVariant from "@/components/preview/fab/Variant";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { fabCodes } from "@/data/code/fab";
import { fabRef } from "@/data/reference/fab";
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

const FAB = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Floating Action Button
        </LargeTextHeader>
        <BodyText theme={theme}>
          The Floating Action Button (Fab) represents the primary action on a
          page. It is a circular button that appears to{" "}
          <PropBadge>float</PropBadge> above the UI and encourages users to
          perform an important action. Use it to highlight a key action that is
          central to the app’s purpose.
        </BodyText>
      </TextContent_Wrap>
      <Divider theme={theme} style={{ marginBottom: 15 }} />
      <BasicFab />
      <TextContent_Wrap id="size">
        <Link href="#size" className="a">
          <MediumTextHeader as="h4" id="size" isMedium theme={theme}>
            Size
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The <TextBadge>Fab</TextBadge> component comes in three sizes, By
          default, the size is <TextBadge>md</TextBadge>. Use the{" "}
          <TextBadge>size</TextBadge> prop to make the size fit your need
        </BodyText>
      </TextContent_Wrap>
      <FabSize code={fabCodes.size} />
      <TextContent_Wrap id="variant">
        <Link href="#variant" className="a">
          <MediumTextHeader as="h4" id="variant" isMedium theme={theme}>
            Variant
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The <TextBadge>Fab</TextBadge> component comes in two variants, By
          default, the variant is <TextBadge>solid</TextBadge>. Use the{" "}
          <TextBadge>variant</TextBadge> prop to make it fit your need
        </BodyText>
      </TextContent_Wrap>
      <FabVariant code={fabCodes.variant} />
      <TextContent_Wrap id="color-scheme">
        <Link href="#color-scheme" className="a">
          <MediumTextHeader as="h4" id="color-scheme" isMedium theme={theme}>
            ColorScheme
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The <TextBadge>Fab</TextBadge> component supports three color schemes
          to convey different semantic meanings:
        </BodyText>
      </TextContent_Wrap>
      <PropOptions header="ColorScheme options">
        <li>
          colorScheme: <TextBadge>primary</TextBadge> |{" "}
          <TextBadge>secondary</TextBadge> | <TextBadge>danger</TextBadge>{" "}
          (default: <TextBadge>primary</TextBadge>)
        </li>
      </PropOptions>
      <TextContent_Wrap id="position">
        <Link href="#position" className="a">
          <MediumTextHeader as="h4" id="position" isMedium theme={theme}>
            Position
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The <TextBadge>Fab</TextBadge> component can be positioned in 6
          different locations:
        </BodyText>
      </TextContent_Wrap>
      <PropOptions header="Position options">
        <li>
          position: <TextBadge>top-left</TextBadge> |{" "}
          <TextBadge>top-center</TextBadge> | <TextBadge>top-right</TextBadge> |{" "}
          <TextBadge>bottom-left</TextBadge> |{" "}
          <TextBadge>bottom-center</TextBadge> |{" "}
          <TextBadge>bottom-right</TextBadge>
          (default: <TextBadge>bottom-right</TextBadge>)
        </li>
      </PropOptions>
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h4" id="api-reference" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          This section provides a comprehensive guide to the API of the Floating
          Action Button <TextBadge>Fab</TextBadge> component, outlining all
          available props, their types, and default values. Use this reference
          to customize the behavior and appearance of the component to suit your
          application's needs.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={fabRef} />
    </DocsLayout>
  );
};

export default FAB;
