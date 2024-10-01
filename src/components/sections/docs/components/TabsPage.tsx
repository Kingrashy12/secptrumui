import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
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

const Tabs_Page = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Tabs
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>Tabs</TextBadge> component is a layout utility designed
          to arrange elements in a row or column with customizable spacing. It
          builds on the flexibility of <TextBadge>Box</TextBadge> and provides
          additional layout control, making it easy to stack elements either
          horizontally or vertically.
        </BodyText>
      </TextContent_Wrap>
    </DocsLayout>
  );
};

export default Tabs_Page;
