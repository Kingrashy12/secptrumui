import NastedList from "@/components/custom/docs/NastedList";
import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { switchCode } from "@/data/code/switch";
import { switchRef } from "@/data/reference/switch";
import BasicSwitch from "@/example/input/BasicSwitch";
import DisabledSwitch from "@/example/input/DisabledSwitch";
import SwitchColors from "@/example/input/SwitchColors";
import SwitchSizes from "@/example/input/SwitchSizes";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const SwitchPage = () => {
  const { theme } = useTheme();

  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Switch
        </LargeTextHeader>
        <BodyText theme={theme}>
          The Switch component is a UI element that allows users to toggle
          between two states, commonly used for enabling or disabling
          functionality. It can be customized with different colors and sizes
        </BodyText>
      </TextContent_Wrap>
      <BasicSwitch />
      <TextContent_Wrap id="sizes">
        <Link href="#sizes" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Sizes
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Switch component comes in two size variants{" "}
          <TextBadge>md</TextBadge> and <TextBadge>lg</TextBadge>.
        </BodyText>
      </TextContent_Wrap>
      <SwitchSizes code={switchCode.sizes} />
      <TextContent_Wrap id="color">
        <Link href="#color" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Color
          </MediumTextHeader>
        </Link>
      </TextContent_Wrap>
      <div style={{ marginTop: 20 }} />
      <SwitchColors code={switchCode.colors} />
      <TextContent_Wrap id="disabled">
        <Link href="#disabled" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Disabled
          </MediumTextHeader>
        </Link>
      </TextContent_Wrap>
      <DisabledSwitch code={switchCode.disabled} />
      <TextContent_Wrap id="customizing-the-switch">
        <Link href="#customizing-the-switch" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Customizing the Switch
          </MediumTextHeader>
        </Link>
        <NastedList>
          <li>
            <b>Size</b>: You can change the size of the switch to{" "}
            <TextBadge>md</TextBadge> or <TextBadge>lg</TextBadge> to fit
            different UI layouts.
          </li>
          <li>
            <b>Colors</b>: Use the <TextBadge>color</TextBadge> and{" "}
            <TextBadge>checkedColor</TextBadge> props to set custom colors for
            the switch's on and off states.
          </li>
          <li>
            <b>Disabled State</b>: The switch can be disabled to prevent
            interaction when a particular action is not available.
          </li>
        </NastedList>
      </TextContent_Wrap>
      <TextContent_Wrap id="api-refrence">
        <Link className="a" href="#api-reference">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Below is a table detailing the available props for the{" "}
          <TextBadge>Switch</TextBadge> component.
        </BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={switchRef} />
    </DocsLayout>
  );
};

export default SwitchPage;
