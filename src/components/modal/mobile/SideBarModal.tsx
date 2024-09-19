import Collapsible from "@/components/custom/Collapsible";
import {
  DocAlert,
  DocLinkWrap,
  DocsCategory,
  DocsContent,
  DocsLabel,
} from "@/components/custom/StickyBar";
import Backdrop from "@/components/test/Backdrop";
import { useSideBar } from "@/context/useSideBar";
import { useTheme } from "@/context/useTheme";
import { sidebarlinks } from "@/data/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

const SideBarModal = () => {
  const { isOpen, onClose } = useSideBar();
  const { theme, mode } = useTheme();
  const router = useRouter();
  const light = mode === "light";

  return (
    <Backdrop open={isOpen} onClose={onClose}>
      <SideBarContainer theme={theme}>
        <BarContent>
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
        </BarContent>
      </SideBarContainer>
    </Backdrop>
  );
};

export default SideBarModal;

const SideBarContainer = styled(Box)`
  position: fixed;
  height: 100%;
  background: ${(props) => props.theme.colors?.background};
  width: 300px;
  padding: 10px;
  left: 0;
  flex-direction: column;
  gap: 12px;
`;

const BarContent = styled(Box)`
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }
`;
