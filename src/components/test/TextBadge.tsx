import React, { ReactNode } from "react";
import styled from "styled-components";
import Typography from "../custom/Typography";
import { localColors } from "@/styles/global";

type BadgeType = {
  children?: ReactNode; // Changed from string to ReactNode for flexibility
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

const TextBadge = ({
  children,
  backgroundColor,
  textColor,
  borderColor,
}: BadgeType) => {
  return (
    <Badge
      backgroundColor={backgroundColor || localColors.gray[200]}
      textColor={textColor || localColors.neutral[800]}
      borderColor={borderColor || localColors.neutral[400]}
    >
      {children}
    </Badge>
  );
};

export default TextBadge;

const Badge = styled(Typography)<{
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}>`
  padding: 2px 4px; /* Adjust padding for a badge-like appearance */
  border-radius: 5px; /* Rounded for a typical badge style */
  font-family: "Poppins-Medium", sans-serif;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;
