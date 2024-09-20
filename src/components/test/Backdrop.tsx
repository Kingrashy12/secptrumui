import React from "react";
import styled from "styled-components";
import shouldForwardProp from "@/hooks/styled_prop";
import { Drop, FixedBox } from "@/styles/test/styled";
import { useTheme } from "@/context/useTheme";

interface DropType {
  /**
   * The content to be rendered inside the drop component.
   */
  children?: React.ReactNode;

  /**
   * Additional CSS class names to apply to the drop component.
   */
  className?: string;

  /**
   * Inline styles to apply to the drop component.
   */
  style?: React.CSSProperties;

  /**
   * Indicates whether the drop component is currently open (visible) or not.
   */
  open: boolean;

  /**
   * Callback function triggered to close the drop component.
   */
  onClose: () => void;

  /**
   * Determines whether to center the content within the drop component.
   * @default true
   */
  centerContent?: boolean;
  /**
   * Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.
   */
  zIndex?: number;
  /**
   * Prevents the modal from closing if an action is in progress.
   * When set to `true`, the modal will remain open and cannot be closed
   * until the ongoing action completes.
   * Useful for preventing accidental closure during important tasks or loading states.
   */
  preventClose?: boolean;
}

const Backdrop = ({
  open,
  onClose,
  children,
  className,
  style,
  centerContent = true,
  preventClose,
}: DropType) => {
  const { theme } = useTheme();

  const handleClose = (event: any) => {
    if (!preventClose && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Drop
      open={open}
      centerContent={centerContent}
      className={className}
      style={style}
      onClick={handleClose}
      theme={theme}
    >
      <> {children}</>
    </Drop>
  );
};

export default Backdrop;
