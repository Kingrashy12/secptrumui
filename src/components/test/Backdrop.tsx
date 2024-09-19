import React from "react";
import styled from "styled-components";
import shouldForwardProp from "@/hooks/styled_prop";
import { FixedBox } from "@/styles/test/styled";
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
}

const Backdrop = ({
  open,
  onClose,
  children,
  className,
  style,
  centerContent = true,
}: DropType) => {
  const { theme } = useTheme();

  const handleClose = (event: any) => {
    if (event.target === event.currentTarget) {
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

const Drop = styled(FixedBox).withConfig({ shouldForwardProp })<{
  open: boolean;
  centerContent: boolean;
}>`
  background: ${(props) => props.theme.colors?.drop};
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: ${(props) => props.centerContent && "center"};
  align-items: ${(props) => props.centerContent && "center"};
  backdrop-filter: ${(props) => `blur(${props.theme.effects?.drop_blur}px)`};
`;
