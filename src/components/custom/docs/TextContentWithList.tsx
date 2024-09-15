import { useTheme } from "@/context/useTheme";
import { MediumTextHeader, TextContentWrap } from "@/styles/docs/start.styled";
import { fontInter } from "@/styles/global";
import { Ultra } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { colors } from "secptrum-ui";
import styled from "styled-components";

type TextContentType = {
  header: string;
  li: ListContent["li"];
  id: string;
  isMedium?: boolean;
};

const TextContentWithList = ({ id, header, li, isMedium }: TextContentType) => {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <TextContentWrap id={id}>
      <Link href={`${router.pathname}/#${id}`}>
        <MediumTextHeader
          isMedium={isMedium}
          theme={theme}
          as={isMedium ? "h4" : "h2"}
          id={id}
        >
          {header}
        </MediumTextHeader>
      </Link>
      <UL>
        {li?.map((text, index) => (
          <ListItem key={index} theme={theme}>
            <b>{text.bold_text}:</b> {text.item_text}
          </ListItem>
        )) || null}
      </UL>
    </TextContentWrap>
  );
};

export default TextContentWithList;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px 9px;
  /* gap: 8px; */
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.colors?.body};
  ${fontInter.style}

  b {
    color: ${(props) => props.theme.colors?.text};
  }
`;
