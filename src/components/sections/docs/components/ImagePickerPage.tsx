import ReferenceTable from "@/components/custom/docs/ReferenceTable";
import DocsLayout from "@/components/layout/DocsLayout";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { pickerCodes } from "@/data/code/picker";
import { pickerRef } from "@/data/reference/picker";
import AutoSelectPicker from "@/example/utility/AutoSelectPicker";
import BasicPicker from "@/example/utility/BasicPicker";
import MultiplePicker from "@/example/utility/MultiplePicker";
import { PropBadge } from "@/styles/custom";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";

const ImagePickerPage = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          ImagePicker
        </LargeTextHeader>
        <BodyText theme={theme}>
          The <TextBadge>ImagePicker</TextBadge> component provides a flexible
          and customizable interface for selecting one or more images. It offers
          various configuration options such as single or multiple image
          selection, auto selection, and custom styling for the picker, image
          container, and remover elements.
        </BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="basic">
        <Link href="#basic" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Basic Picker
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The example below demonstrates the basic usage of the{" "}
          <TextBadge>ImagePicker</TextBadge> component. Users can select a
          single image, and once selected, it will be displayed in the picker
          area. The <PropBadge>onImageSelect</PropBadge> callback is triggered
          upon image selection.
        </BodyText>
      </TextContent_Wrap>
      <BasicPicker code={pickerCodes.basic} />
      <TextContent_Wrap id="multiple">
        <Link href="#multiple" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            Multiple Picker
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The example below allows users to select multiple images. By enabling
          the <TextBadge>multiple</TextBadge> prop, users can pick several
          images at once. The <TextBadge>onMultipleImageSelect</TextBadge>{" "}
          callback will return an array of selected images.
        </BodyText>
      </TextContent_Wrap>
      <MultiplePicker code={pickerCodes.multiple} />
      <TextContent_Wrap id="autoselect">
        <Link href="#autoselect" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            AutoSelect Picker
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The example below shows how the <TextBadge>autoSelectImage</TextBadge>{" "}
          prop works. When enabled, the <TextBadge>ImagePicker</TextBadge> will
          automatically select an available image when the picker is opened.
          Users can also manually choose another image.
        </BodyText>
      </TextContent_Wrap>
      <AutoSelectPicker code={pickerCodes.autoSelect} />
      <TextContent_Wrap id="api-reference">
        <Link href="#api-reference" className="a">
          <MediumTextHeader as="h4" isMedium theme={theme}>
            API Reference
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}></BodyText>
      </TextContent_Wrap>
      <ReferenceTable reference={pickerRef} />
    </DocsLayout>
  );
};

export default ImagePickerPage;
