import { localColors } from "@/styles/global";
import React from "react";
import styled from "styled-components";

type DocNoteType = "info" | "warning" | "note";

interface DocNoteProps {
  type?: DocNoteType; // Type of message: info, warning, or note
  children: React.ReactNode; // Message content
}

// Define the colors for each type of note
const noteStyles: Record<DocNoteType, { background: string; border: string }> =
  {
    info: {
      background: "#e7f4ff",
      border: "#007bff",
    },
    warning: {
      background: "#fff3cd",
      border: "#ffc107",
    },
    note: {
      background: "#f5f5f5",
      border: "#999",
    },
  };

// Styled component for the Note container
const StyledDocNote = styled.div<{ noteType: DocNoteType }>`
  background-color: ${(props) => noteStyles[props.noteType].background};
  border-left: 4px solid ${(props) => noteStyles[props.noteType].border};
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
`;

// The DocNote component itself
const DocInfo: React.FC<DocNoteProps> = ({ type = "note", children }) => {
  return <StyledDocNote noteType={type}>{children}</StyledDocNote>;
};

export default DocInfo;
