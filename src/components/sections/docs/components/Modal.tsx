import DocsLayout from "@/components/layout/DocsLayout";
import ModalExample from "@/components/preview/modal/Example";
import FormModal from "@/components/preview/modal/FormModal";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { modalCodes } from "@/data/code/modal";
import { PropBadge } from "@/styles/custom";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";
import ModalProps from "../../components/Modal";

const Modal = () => {
  const { theme } = useTheme();

  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Modal
        </LargeTextHeader>
        <BodyText theme={theme}>
          The Modal component is used to display content in a dialog overlay. It
          can be used for notifications, forms, or any content that requires
          user interaction in a focused manner.
        </BodyText>
      </TextContent_Wrap>
      <ModalExample code={modalCodes.ex} />
      <TextContent_Wrap id="form-modal">
        <Link href="form-modal" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Form Modal
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          Form modal allow users to fill out form fields within a modal.
        </BodyText>
      </TextContent_Wrap>
      <FormModal code={modalCodes.form} />
      <TextContent_Wrap id="modal-components">
        <Link href="#modal-components" className="a">
          <MediumTextHeader as="h2" theme={theme}>
            Modal Components
          </MediumTextHeader>
        </Link>
        <ModalProps />
      </TextContent_Wrap>
    </DocsLayout>
  );
};

export default Modal;
