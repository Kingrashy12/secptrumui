import PropOptions from "@/components/custom/docs/PropOptions";
import DocsLayout from "@/components/layout/DocsLayout";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import React from "react";
import { BoxFeatures, BoxProps, BoxSizeVariant } from "../../components/Box";
import Link from "next/link";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import BoxExample from "@/components/preview/box/Example";
import { boxCode } from "@/data/code/box";
import BoxLay from "@/components/preview/box/LayoutFlex";
import { PropBadge } from "@/styles/custom";

const Box_Page = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Box
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>Box</TextBadge> component is a flexible, extensible
          container built using Flexbox and designed to extend the HTML{" "}
          <TextBadge>div</TextBadge>
          element. It provides additional props for managing spacing, layout,
          and alignment, allowing for easy customization and responsive design.
        </BodyText>
      </TextContent_Wrap>
      <BoxFeatures />
      <div style={{ marginTop: 16 }} />
      <BoxProps />
      <div style={{ marginTop: 16 }} />
      <BoxSizeVariant />
      <TextContent_Wrap id="example">
        <Link href="#example" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Example
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Here is an example of how to use the <TextBadge>Box</TextBadge>{" "}
          component with various spacing and layout props:
        </BodyText>
      </TextContent_Wrap>
      <BoxExample code={boxCode.ex} />
      <TextContent_Wrap id="layout-flexibility">
        <Link href="#layout-flexibility" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Layout Flexibility Example
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          In the example below, The<PropBadge>direction='row'</PropBadge> sets a
          horizontal layout. with the <PropBadge>centered</PropBadge> allowing
          contents to be horizontally and vertically centered.
        </BodyText>
      </TextContent_Wrap>
      <BoxLay code={boxCode.lay} />
    </DocsLayout>
  );
};

export default Box_Page;
