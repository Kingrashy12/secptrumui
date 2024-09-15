import React, { useState } from "react";
import { Box, colors, Icon } from "secptrum-ui";
import styled from "styled-components";
import Typography from "./Typography";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useTheme } from "@/context/useTheme";

type CollapsibleProps = {
  header: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const Collapsible = ({ header, children, isActive }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, mode } = useTheme();
  const light = mode === "light";

  return (
    <StyledCollapsible>
      <CollapsibleAction onClick={() => setIsOpen(!isOpen)} theme={theme}>
        <Icon
          icon={
            isOpen ? MdOutlineKeyboardArrowDown : MdOutlineKeyboardArrowRight
          }
          size={25}
          color={theme.colors?.icon}
        />
        <Typography>{header}</Typography>
      </CollapsibleAction>
      {isOpen || isActive ? (
        <ContentWrap light={light}>{children}</ContentWrap>
      ) : null}
    </StyledCollapsible>
  );
};

export default Collapsible;

const StyledCollapsible = styled(Box)`
  flex-direction: column;
  height: auto;
  padding: 5px;
`;

const CollapsibleAction = styled(Box)`
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: ${(props) => props.theme?.colors?.text};

  p {
    font-size: 15px;
    line-height: 1.5rem;
    font-weight: 600;
  }
`;

const ContentWrap = styled(Box).withConfig({
  shouldForwardProp: (props) => props !== "light",
})<{ light: boolean }>`
  flex-direction: column;
  gap: 5px;
  padding: 6px 26px;
  border-left: 2px solid
    ${(props) => (props.light ? colors.neutral200 : "rgb(38 38 38)")};
`;
