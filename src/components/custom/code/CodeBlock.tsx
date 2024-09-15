import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCopy } from "react-icons/fa";
import { Icon, toast, Tooltip } from "secptrum-ui";
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import styled from "styled-components";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <CodeContainer>
      {/* Copy button */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        <Icon icon={copied ? TbCopyCheckFilled : TbCopy} color="white" />
      </button>

      {/* Code block */}
      <SyntaxHighlighter
        language={language}
        // wrapLines
        // wrapLongLines
        style={{
          ...dracula, // Base theme from dracula
          hljs: {
            background: "#000", // Black background
            color: "#f8f8f2", // Main text color (you can replace it with your theme's main color)
          },
          "hljs-keyword": {
            color: "#ff79c6", // Keywords (customize for your theme)
          },
          "hljs-string": {
            color: "#50fa7b", // Strings (customize for your theme)
          },
          "hljs-variable": {
            color: "#8be9fd", // Variables (customize for your theme)
          },
          "hljs-comment": {
            color: "#6272a4", // Comments (customize for your theme)
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </CodeContainer>
  );
};

export default CodeBlock;

const CodeContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 15px;
  padding: 1rem;
  overflow-x: auto;
  background: #000;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
`;
