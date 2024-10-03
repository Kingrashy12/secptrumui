"use client";
import React from "react";
import { Box, colors } from "secptrum-ui";
import styled from "styled-components";
import Collapsible, { CollapsibleAction } from "./Collapsible";
import { sidebarlinks } from "@/data/sidebar";
import Typography from "./Typography";
import { useRouter } from "next/router";
import Link from "next/link";
import { localColors } from "@/styles/global";
import { useTheme } from "@/context/useTheme";
import shouldForwardProp from "@/hooks/styled_prop";
import { RiArrowRightUpLine } from "react-icons/ri";
import { SignedIn } from "@clerk/nextjs";

const StickyBar = () => {
  const router = useRouter();
  const { theme, mode } = useTheme();

  const light = mode === "light";

  return (
    <StyledBar theme={theme.colors} light={light}>
      <BarContent>
        <BarStack>
          <>
            {sidebarlinks.map((link, index) => (
              <Collapsible
                header={link.header}
                key={index}
                isActive={
                  link.links.some((l) => router.pathname === l.uri) ||
                  link.links.some((l) =>
                    router.pathname.includes(l.label.toLowerCase())
                  )
                }
              >
                <>
                  {link.links.map((doc, index) => (
                    <DocsContent key={index} notavailable={doc?.not_available}>
                      <DocsCategory hidden={!doc.category}>
                        {doc?.category}
                      </DocsCategory>
                      <Link href={doc.uri}>
                        <DocLinkWrap
                          isactive={router.pathname === doc.uri.toString()}
                          notavailable={doc?.not_available}
                          light={light}
                        >
                          <DocsLabel
                            notavailable={doc?.not_available}
                            theme={theme}
                          >
                            {doc.label}
                          </DocsLabel>
                          <DocAlert notavailable={doc?.not_available}>
                            Soon
                          </DocAlert>
                        </DocLinkWrap>
                      </Link>
                    </DocsContent>
                  ))}
                </>
              </Collapsible>
            ))}
            <ExtraLinks>
              <SignedIn>
                <CollapsibleAction
                  theme={theme}
                  onClick={() => window.open("/test/components")}
                >
                  <Typography>Test Environment</Typography>
                  <RiArrowRightUpLine />
                </CollapsibleAction>
              </SignedIn>
            </ExtraLinks>
          </>
        </BarStack>
      </BarContent>
    </StyledBar>
  );
};

export default StickyBar;

const StyledBar = styled(Box).withConfig({
  shouldForwardProp: (props) => props !== "light",
})<{ light: boolean }>`
  height: 100vh;
  background: ${(props) => props.theme?.background};
  width: 280px;
  flex-direction: column;
  border-right: 1px solid
    ${(props) => (props.light ? colors.gray[300] : localColors.neutral[800])};
  position: sticky;
  top: 0;
  flex-shrink: 0;
  padding-right: 3px;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const BarContent = styled(Box)`
  flex-direction: column;
  margin-top: 4.5rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const BarStack = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== "fold",
})`
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
  height: 100%;
`;

export const DocsContent = styled(Box).withConfig({
  shouldForwardProp: (props) => props != "notavailable",
})<{ notavailable: boolean | undefined }>`
  flex-direction: column;
  gap: 7px;

  a {
    text-decoration: none;
    pointer-events: ${(props) => props.notavailable && "none"};
  }
`;

export const DocsCategory = styled(Typography)`
  color: blue;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const DocsLabel = styled(Typography).withConfig({
  shouldForwardProp: (props) => props !== "notavailable",
})<{ notavailable: boolean | undefined }>`
  color: ${(props) => props.theme.colors?.text};
  font-size: 14px;
  opacity: ${(props) => (props.notavailable ? 0.4 : 1)};
`;

export const DocAlert = styled(Typography).withConfig({
  shouldForwardProp: (props) => props !== "notavailable",
})<{ notavailable: boolean | undefined }>`
  color: blue;
  background: rgb(191 219 254);
  padding: 4px;
  font-size: 12px;
  border-radius: 5px;
  display: ${(props) => (props.notavailable ? "flex" : "none")};
  opacity: 0.4;
`;

export const DocLinkWrap = styled(Box).withConfig({
  shouldForwardProp,
})<{
  isactive: boolean;
  notavailable: boolean | undefined;
  light: boolean | undefined;
}>`
  align-items: center;
  gap: 5px;
  background: ${(props) =>
    props.isactive
      ? props.light
        ? colors.blue[100]
        : "rgb(30 41 59)"
      : "transparent"};
  padding: 4px 8px;
  border-radius: 6px;
  cursor: ${(props) => (props.notavailable ? "default" : "pointer")};
`;

export const ExtraLinks = styled(Box)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 16px;
`;
