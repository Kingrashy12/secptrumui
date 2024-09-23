import React, { useEffect, useState } from "react";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";
import { Box, colors, Icon } from "secptrum-ui";
import styled from "styled-components";
import Collapsible from "./Collapsible";
import { sidebarlinks } from "@/data/sidebar";
import Typography from "./Typography";
import { useRouter } from "next/router";
import Link from "next/link";
import { localColors } from "@/styles/global";
import { useTheme } from "@/context/useTheme";
import shouldForwardProp from "@/hooks/styled_prop";

const getContent = (fold: boolean) => {
  return fold ? { display: "flex" } : { display: "none" };
};

const StickyBar = () => {
  const [fold, setFold] = useState(false);
  const [width, setWidth] = useState(280);
  const router = useRouter();
  const { theme, mode } = useTheme();

  const light = mode === "light";

  // Retrieve fold state from localStorage on initial load
  useEffect(() => {
    const savedFoldState = localStorage.getItem("sidebarFold");
    const parsed = savedFoldState ? JSON.parse(savedFoldState) : false;
    if (savedFoldState !== null) {
      const isFolded = parsed;
      setFold(isFolded);
    }
  }, []);

  // Listen for route change to maintain the fold state
  useEffect(() => {
    const handleRouteChange = () => {
      // Ensure fold state is maintained across page navigation
      const savedFoldState = localStorage.getItem("sidebarFold");
      const parsed = savedFoldState ? JSON.parse(savedFoldState) : false;
      if (savedFoldState !== null) {
        const isFolded = parsed;
        setFold(isFolded);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Toggle fold state and persist it in localStorage
  function foldBar() {
    const newFoldState = !fold;
    setFold(newFoldState);
    localStorage.setItem("sidebarFold", JSON.stringify(newFoldState));

    if (fold) {
      setWidth(80);
    } else {
      setWidth(280);
    }
  }

  return (
    <StyledBar width={width} theme={theme.colors} light={light}>
      <BarContent>
        <FoldIcon onClick={foldBar} light={light}>
          <Icon
            icon={fold ? RiMenuUnfold2Line : RiMenuFold2Line}
            color={theme.colors?.icon}
            size={25}
          />
        </FoldIcon>
        <BarStack fold={fold}>
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
          </>
        </BarStack>
      </BarContent>
    </StyledBar>
  );
};

export default StickyBar;

const StyledBar = styled(Box).withConfig({
  shouldForwardProp: (props) => props !== "light",
})<{ width: number; light: boolean }>`
  height: 100vh;
  background: ${(props) => props.theme?.background};
  width: ${(props) => props.width}px;
  flex-direction: column;
  border-right: 1px solid
    ${(props) => (props.light ? colors.neutral300 : localColors.neutral[800])};
  position: sticky;
  top: 0;
  flex-shrink: 0;

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
`;

const FoldIcon = styled(Box).withConfig({
  shouldForwardProp: (props) => props !== "light",
})<{ light: boolean }>`
  cursor: pointer;
  align-self: flex-end;
  margin-right: 16px;
  margin-bottom: 5px;
  padding: 4px;
  border-radius: 8px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    background: ${(props) =>
      props.light ? colors.neutral100 : "rgb(38 38 38)"};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
`;

const BarStack = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== "fold",
})<{ fold: boolean }>`
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  ${(props) => getContent(props.fold)}
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
        ? colors.blue100
        : "rgb(30 41 59)"
      : "transparent"};
  padding: 4px 8px;
  border-radius: 6px;
  cursor: ${(props) => (props.notavailable ? "default" : "pointer")};
`;
