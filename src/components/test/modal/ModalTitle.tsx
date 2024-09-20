import React from "react";
import { BoxProps } from "../Card";
import styled from "styled-components";
import { Box } from "secptrum-ui";
import { IoClose } from "react-icons/io5";
import { localColors } from "@/styles/global";

/**
 * ModalTitleType interface for defining the props for the ModalTitle component.
 *
 * @extends BoxProps
 *
 * @prop {string} title - The title text displayed in the modal header.
 * @prop {boolean} [showClose] - Whether to show the close icon or not.
 * @prop {string} [iconClass] - Additional class for the close icon.
 * @prop {React.CSSProperties} [iconStyle] - CSS style for the close icon.
 * @prop {number} [iconSize=25] - Size of the close icon.
 * @prop {() => void} [onClose] - Function called when the close icon is clicked.
 * @prop {string} [titleClassName] - Additional class applied to the title (`h2`) element.
 * @prop {React.CSSProperties} [titleStyle] - CSS style applied to the title (`h2`) element.
 */
interface ModalTitleType extends BoxProps {
  title: string;
  showClose?: boolean;
  iconClass?: string;
  iconStyle?: React.CSSProperties;
  iconSize?: number;
  onClose?: () => void;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  preventClose?: boolean;
}

/**
 * ModalTitle component renders a header for a modal, including a title and optional close icon.
 *
 * @param {ModalTitleType} props - The props for the ModalTitle component.
 * @returns {JSX.Element} The rendered ModalTitle component.
 */
const ModalTitle = ({
  iconClass,
  iconSize,
  title,
  iconStyle,
  onClose,
  titleClassName,
  titleStyle,
  showClose,
  preventClose,
  ...props
}: ModalTitleType): JSX.Element => {
  function close() {
    if (!preventClose) {
      if (onClose) {
        onClose();
      }
    }
  }
  return (
    <TitleWrap {...props}>
      <Title className={titleClassName} style={titleStyle}>
        {title}
      </Title>
      {showClose && (
        <CloseIcon>
          <IoClose
            className={iconClass}
            style={iconStyle}
            size={iconSize || 25}
            onClick={close}
          />
        </CloseIcon>
      )}
    </TitleWrap>
  );
};

export default ModalTitle;

/**
 * TitleWrap is a styled-component that wraps the title and close icon in the modal header.
 */
const TitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

/**
 * Title is a styled-component that renders the title (`h2`) element.
 */
const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme?.colors?.text || "black"};
  font-family: inherit;
`;

const CloseIcon = styled(Box)`
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${localColors.gray[100]};
  }
`;
