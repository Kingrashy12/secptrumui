import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import CardExample from "@/components/preview/card/Example";
import ProductCard from "@/components/preview/card/ProductCard";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { cardCodes } from "@/data/code/card";
import { cardRef } from "@/data/reference/card";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const Card_Page = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Card
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>Card</TextBadge> component builds on top of the{" "}
          <TextBadge>Box</TextBadge>
          component, inheriting its flexible layout properties while adding
          additional functionality. It provides an easy way to display content
          in a structured, styled container with support for theming and layout
          customization.
        </BodyText>
        <BodyText theme={theme}>
          As it extends the <TextBadge>Box</TextBadge> component, the{" "}
          <TextBadge>Card</TextBadge> has access to all{" "}
          <TextBadge>Box</TextBadge> props, while introducing additional
          features like shadows, borders, and theme integration.
        </BodyText>
      </TextContent_Wrap>
      <CardExample code={cardCodes.ex} />
      <TextContent_Wrap id="product-card">
        <Link href="#product-card" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Product Card
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Below is an example using mock products to showcase how the{" "}
          <TextBadge>Card</TextBadge> component can be used for product
          presentation.
        </BodyText>
      </TextContent_Wrap>
      <ProductCard code={cardCodes.products} />
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          This section provides a concise overview of all the props available
          for the <TextBadge>Card</TextBadge> component, making it easy to
          understand how each prop affects the card's behavior and appearance.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={cardRef} />
    </DocsLayout>
  );
};

export default Card_Page;
