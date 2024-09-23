import NastedList, { ListBody } from "@/components/custom/docs/NastedList";
import PropOptions from "@/components/custom/docs/PropOptions";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { PropBadge } from "@/styles/custom";
import Link from "next/link";
import React from "react";

const ModalProps = () => {
  const { theme } = useTheme();
  return (
    <NastedList>
      <p>
        <TextBadge>Modal</TextBadge>
      </p>
      <ListBody theme={theme}>
        The outermost container for the modal, responsible for handling
        visibility and overlay.
      </ListBody>
      <PropOptions italic>
        <li>
          <PropBadge>open*</PropBadge>: Boolean indicating whether the modal is
          open.
        </li>
        <li>
          <PropBadge>onClose*</PropBadge>: A function that is triggered when the
          modal needs to be closed.
        </li>
        <li>
          <PropBadge>preventClose</PropBadge>: Prevents the modal from closing
          if an action is in progress.
        </li>
        <li>
          <PropBadge>className</PropBadge>: Optional string to add custom CSS
          classes.
        </li>
        <li>
          <PropBadge>mode</PropBadge>: Sets the theme mode for the backdrop
          component.
        </li>
        <li>
          <PropBadge>style</PropBadge>: Optional object to add custom inline
          styles.
        </li>
        <li>
          <PropBadge>glassEffect</PropBadge>: Controls the intensity of the
          backdrop glass effect (blur).
        </li>
      </PropOptions>
      {/* Panel */}
      <p>
        <TextBadge>ModalPanel</TextBadge>
      </p>
      <ListBody theme={theme}>
        The main content area of the modal, defining its size and shape.
      </ListBody>
      <PropOptions italic>
        <li>
          <PropBadge>size</PropBadge>: Determines the width of the modal. It can
          be <PropBadge>sm</PropBadge>, <PropBadge>md</PropBadge>,{" "}
          <PropBadge>lg</PropBadge>, <PropBadge>xl</PropBadge> or{" "}
          <PropBadge>full</PropBadge>. (default: <PropBadge>lg</PropBadge>).
        </li>
        <li>
          <PropBadge>transition</PropBadge>: Optional transition animation,
          Options: (<PropBadge>walkIn</PropBadge>, <PropBadge>dropIn</PropBadge>
          , <PropBadge>slideIn</PropBadge>) (default:{" "}
          <PropBadge>walkIn</PropBadge>).
        </li>
        <li>
          <PropBadge>className</PropBadge>:Optional string to add custom CSS
          classes.
        </li>
        <li>
          <PropBadge>style</PropBadge>: Optional object to add custom inline
          styles.
        </li>
      </PropOptions>
      {/* Title */}
      <p>
        <TextBadge>ModalTitle</TextBadge>
      </p>
      <ListBody theme={theme}>
        Displays the modal title and optionally includes close icon.
      </ListBody>
      <PropOptions italic>
        <li>
          <PropBadge>title*</PropBadge>: String representing the modal title.
        </li>
        <li>
          <PropBadge>onClose</PropBadge>: Optional function to call when the
          close button is clicked.
        </li>
        <li>
          <PropBadge>showClose</PropBadge>: Optional boolean to show/hide the
          close icon (default: <PropBadge>false</PropBadge>).
        </li>
        <li>
          <PropBadge>preventClose</PropBadge>: Prevents the modal from closing
          if an action is in progress.
        </li>
        <li>
          <PropBadge>iconStyle</PropBadge>: Optional CSS properties for the
          close icon.
        </li>
        <li>
          <PropBadge>iconClass</PropBadge>: Optional string for custom class
          names for the close icon.
        </li>
        <li>
          <PropBadge>iconSize</PropBadge>: Optional number for the size of the
          close icon (default: 25).
        </li>
        <li>
          <PropBadge>titleClassName</PropBadge>: Optional string for custom
          class names for the title.
        </li>
        <li>
          <PropBadge>titleStyle</PropBadge>: Optional style object for custom
          styles for the title.
        </li>
      </PropOptions>
      {/* Content */}
      <p>
        <TextBadge>ModalContent</TextBadge>
      </p>
      <ListBody theme={theme}>Holds the main content of the modal.</ListBody>
      <PropOptions italic>
        <li>
          <PropBadge>children</PropBadge>: Content to display within the modal.
        </li>
        <li>
          Inherits all props from{" "}
          <Link href="/docs/components/layout/box">
            <PropBadge>Box</PropBadge>
          </Link>{" "}
          components.
        </li>
        <li>
          <PropBadge>space</PropBadge>: Optional gap size between content
          (default: <PropBadge>16</PropBadge>).
        </li>
      </PropOptions>
      {/* Footer */}
      <p>
        <TextBadge>ModalFooter</TextBadge>
      </p>
      <ListBody theme={theme}>
        The footer section of the modal, typically containing action buttons
        like "Close", "Save", or "Cancel".
      </ListBody>
      <PropOptions italic>
        <li>
          <PropBadge>position</PropBadge>: Optional positioning for the buttons
          (default: <PropBadge>right</PropBadge>).
        </li>
        <li>
          <PropBadge>space</PropBadge>: Optional gap size between buttons
          (default: <PropBadge>10</PropBadge>).
        </li>
      </PropOptions>
    </NastedList>
  );
};

export default ModalProps;
