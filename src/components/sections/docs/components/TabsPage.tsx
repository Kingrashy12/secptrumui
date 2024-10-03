import DocsLayout from "@/components/layout/DocsLayout";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { tabsCode } from "@/data/code/tabs";
import BasicTabs from "@/example/layout/BasicTabs";
import DisabledTab from "@/example/layout/DisabledTab";
import FullWidthTabs from "@/example/layout/FullWidthTabs";
import SolidVariantTabs from "@/example/layout/SolidTabs";
import TabsWithIcons from "@/example/layout/TabsWithIcon";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import Link from "next/link";
import React from "react";
import { TabPanelApi, TabsApi, TabsHandleApi } from "../../components/Tabs";

const Tabs_Page = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Tabs
        </LargeTextHeader>
        <BodyText theme={theme}>Switch contents in same area.</BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="basic">
        <Link className="a" href="#basic">
          <MediumTextHeader as="h4" id="basic" isMedium theme={theme}>
            Basic
          </MediumTextHeader>
        </Link>
        <Divider theme={theme} style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <BasicTabs code={tabsCode.basic} />
      <TextContent_Wrap id="solid-variant">
        <Link className="a" href="#solid-variant">
          <MediumTextHeader as="h4" id="solid-variant" isMedium theme={theme}>
            Solid Variant
          </MediumTextHeader>
        </Link>
        <Divider theme={theme} style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <SolidVariantTabs code={tabsCode.solid} />
      <TextContent_Wrap id="disabled-tab">
        <Link className="a" href="#disabled-tab">
          <MediumTextHeader as="h4" id="disabled-tab" isMedium theme={theme}>
            Disabled Tab
          </MediumTextHeader>
        </Link>
        <Divider theme={theme} style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <DisabledTab code={tabsCode.disabled} />
      <TextContent_Wrap id="tabs-with-icon">
        <Link className="a" href="#tabs-with-icon">
          <MediumTextHeader as="h4" id="tabs-with-icon" isMedium theme={theme}>
            Tabs with icons
          </MediumTextHeader>
        </Link>
        <Divider theme={theme} style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <TabsWithIcons code={tabsCode.icons} />
      <TextContent_Wrap id="full-width-tabs">
        <Link className="a" href="#full-width-tabs">
          <MediumTextHeader as="h4" id="full-width-tabs" isMedium theme={theme}>
            Tabs with <TextBadge>fullWidth</TextBadge>
          </MediumTextHeader>
        </Link>
        <Divider theme={theme} style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <FullWidthTabs code={tabsCode.fullWidth} />
      <TextContent_Wrap id="api-reference">
        <Link className="a" href="#api-reference">
          <MediumTextHeader as="h4" id="api-reference" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <Divider theme={theme} style={{ marginBottom: 10 }} />
      </TextContent_Wrap>
      <TabsApi />
      <Divider theme={theme} style={{ marginBottom: 25, marginTop: 10 }} />
      <TabsHandleApi />
      <Divider theme={theme} style={{ marginBottom: 25, marginTop: 10 }} />
      <TabPanelApi />
    </DocsLayout>
  );
};

export default Tabs_Page;
