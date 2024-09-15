import { useTheme } from "@/context/useTheme";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContentWrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type TextContentType = {
  largeHeader?: string;
  mediumHeader?: string;
  bodyText: string;
  id: string;
  isMedium?: boolean;
  style?: React.CSSProperties;
};

const TextContent = ({
  largeHeader,
  style,
  mediumHeader,
  bodyText,
  id,
  isMedium,
}: TextContentType) => {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <TextContentWrap id={id}>
      {largeHeader && (
        <LargeTextHeader theme={theme} font="nunito" as="h1">
          {largeHeader}
        </LargeTextHeader>
      )}
      {mediumHeader && (
        <Link href={`${router.pathname}/#${id}`}>
          <MediumTextHeader
            isMedium={isMedium}
            theme={theme}
            font="inter"
            id={id}
            as={isMedium ? "h4" : "h2"}
          >
            {mediumHeader}
          </MediumTextHeader>
        </Link>
      )}
      <BodyText
        style={style}
        dangerouslySetInnerHTML={{ __html: bodyText }}
        theme={theme}
      />
    </TextContentWrap>
  );
};

export default TextContent;
