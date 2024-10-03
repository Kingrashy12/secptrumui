import NastedList from "@/components/custom/docs/NastedList";
import PropOptions from "@/components/custom/docs/PropOptions";
import TextBadge from "@/components/test/TextBadge";
import { PropBadge } from "@/styles/custom";
import React from "react";

export const BoxFeatures = () => (
  <NastedList id="features">
    <PropOptions header="Features">
      <li>
        <b>
          Extends <PropBadge>div</PropBadge>
        </b>
        : The <TextBadge>Box</TextBadge> component extends the basic
        functionality of a div element, adding Flexbox capabilities.
      </li>
      <li>
        <b>Spacing Control</b>: Supports props for managing padding and margin
        with predefined size variants.
      </li>
      <li>
        <b>Customizable Layout</b>: Flexible direction control with the{" "}
        <PropBadge>direction</PropBadge> prop and centering with the{" "}
        <PropBadge>centered</PropBadge> prop.
      </li>
      <li>
        <b>Responsive Flexbox Design</b>: Easily align and distribute content
        with Flexbox properties.
      </li>
    </PropOptions>
  </NastedList>
);

export const BoxProps = () => (
  <NastedList>
    <p className="bodyHeader">
      Below is a list of the additional props Box accepts, along with a
      description of how each works:
    </p>
    <PropOptions>
      <li>
        <PropBadge>children</PropBadge> (<PropBadge>ReactNode</PropBadge>): The
        content to render inside the <TextBadge>Box</TextBadge>.
      </li>
      <li>
        <PropBadge>padding</PropBadge> (<PropBadge>string</PropBadge>): Custom
        padding to apply to all sides of the <TextBadge>Box</TextBadge>.
      </li>
      <li>
        <PropBadge>margin</PropBadge> (<PropBadge>string</PropBadge>): Custom
        margin to apply to all sides of the <TextBadge>Box</TextBadge>.
      </li>
      <li>
        <PropBadge>paddingTop</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Padding for the top side, using
        predefined size variants.
      </li>
      <li>
        <PropBadge>paddingBottom</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Padding for the bottom side,
        using predefined size variants.
      </li>
      <li>
        <PropBadge>paddingLeft</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Padding for the left side,
        using predefined size variants.
      </li>
      <li>
        <PropBadge>paddingRight</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Padding for the right side,
        using predefined size variants.
      </li>
      <li>
        <PropBadge>marginTop</PropBadge> (<PropBadge>SizeVariantType</PropBadge>
        ): Margin for the top side, using predefined size variants.
      </li>
      <li>
        <PropBadge>marginBottom</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Margin for the bottom side,
        using predefined size variants.
      </li>
      <li>
        <PropBadge>marginLeft</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Margin for the left side, using
        predefined size variants.
      </li>
      <li>
        <PropBadge>marginRight</PropBadge> (
        <PropBadge>SizeVariantType</PropBadge>): Margin for the right side,
        using predefined size variants.
      </li>
      <li>
        <PropBadge>border</PropBadge> (<PropBadge>string</PropBadge>): Adds a
        border around the <TextBadge>Box</TextBadge>. Accepts standard CSS
        border values (e.g., <PropBadge>1px solid black</PropBadge>).
      </li>
      <li>
        <PropBadge>centered</PropBadge> (<PropBadge>boolean</PropBadge>): If{" "}
        <PropBadge>true</PropBadge>, the <TextBadge>Box</TextBadge> content is
        centered both vertically and horizontally.
      </li>
      <li>
        <PropBadge>direction</PropBadge> (<PropBadge>'row'</PropBadge>,{" "}
        <PropBadge>'column'</PropBadge>): Defines the flex direction for the
        content inside the <TextBadge>Box</TextBadge>. (defaults{" "}
        <PropBadge>"row"</PropBadge>).
      </li>
    </PropOptions>
  </NastedList>
);

export const BoxSizeVariant = () => (
  <NastedList id="sizevariants">
    <PropOptions header="SizeVariants">
      <li>
        <PropBadge>"xs"</PropBadge>
      </li>
      <li>
        <PropBadge>"sm"</PropBadge>
      </li>
      <li>
        <PropBadge>"md"</PropBadge>
      </li>
      <li>
        <PropBadge>"lg"</PropBadge>
      </li>
      <li>
        <PropBadge>"xl"</PropBadge>
      </li>
      <li>
        <PropBadge>"2xl"</PropBadge>
      </li>
      <li>
        <PropBadge>"3xl"</PropBadge>
      </li>
      <li>
        <PropBadge>"4xl"</PropBadge>
      </li>
      <li>
        <PropBadge>"5xl"</PropBadge>
      </li>
    </PropOptions>
  </NastedList>
);
