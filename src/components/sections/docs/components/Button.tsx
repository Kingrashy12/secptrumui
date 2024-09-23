import { useTheme } from "@/context/useTheme";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";
import ButtonPreview from "../../components/Button";
import { buttonCodes } from "@/data/code/button";
import ButtonVaraints from "@/components/preview/button/Varaints";
import DescriptionBox from "@/components/custom/docs/DescriptionBox";
import {
  button_radius_desc,
  button_size_desc,
  button_variant_desc,
} from "@/data/texts/button";
import ButtonSize from "@/components/preview/button/Size";
import ButtonRadius from "@/components/preview/button/Radius";
import TextBadge from "@/components/test/TextBadge";
import ButtonLoading from "@/components/preview/button/Loading";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import { buttonRef } from "@/data/reference/button";
import DocsLayout from "@/components/layout/DocsLayout";

const Button = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Button
        </LargeTextHeader>
        <BodyText theme={theme}>
          The Button component is an essential element of any UI. It's used for
          actions such as submitting forms, performing tasks, or triggering
          events. The button component is customizable with different styles,
          sizes, and states to fit various use cases.
        </BodyText>
      </TextContent_Wrap>
      <ButtonPreview code={buttonCodes.basic} />
      <TextContent_Wrap id="variants">
        <Link href="#variants" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Variants
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Button component comes with five distinct variants to cater to
          different design needs.
        </BodyText>
      </TextContent_Wrap>
      <DescriptionBox
        header="Variant Description"
        footer="Variant Showcase"
        li={button_variant_desc}
      />
      <ButtonVaraints code={buttonCodes.variants} />
      <TextContent_Wrap id="sizes">
        <Link href="#sizes" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Sizes
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Button component comes with five distinct variants to cater to
          different design needs.
        </BodyText>
      </TextContent_Wrap>
      <DescriptionBox
        header="Size Options"
        footer="Size Showcase"
        li={button_size_desc}
      />
      <ButtonSize code={buttonCodes.size} />
      <TextContent_Wrap id="radius">
        <Link href="#radius" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Radius
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Button component supports adjustable radius options for customized
          corners.
        </BodyText>
      </TextContent_Wrap>
      <DescriptionBox
        header="Radius Options"
        footer="Radius Showcase"
        li={button_radius_desc}
      />
      <ButtonRadius code={buttonCodes.radius} />
      <TextContent_Wrap id="loading-state">
        <Link href="#loading-state" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Loading State
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Button component supports a loading state to indicate ongoing
          processes, use the{" "}
          <TextBadge
            textColor={theme.colors?.text}
            backgroundColor={theme.colors?.prop}
          >
            isLoading
          </TextBadge>{" "}
          prop .
        </BodyText>
      </TextContent_Wrap>
      <ButtonLoading code={buttonCodes.loading} />
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          This component builds upon the HTML <TextBadge>button</TextBadge>{" "}
          element, supporting all its native props and attributes, and adds
          custom functionality and styling capabilities.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={buttonRef} />
    </DocsLayout>
  );
};

export default Button;
