import StyledComponentsRegistry from "@/lib/registry";
import React, { useEffect } from "react";
import { Box } from "secptrum-ui";
import dynamic from "next/dynamic";
// import StickyBar from "../custom/StickyBar";
import { GlobalStyles, RootWrap } from "@/styles/global";
import { useRouter } from "next/router";
import ScrollTop from "../ScrollTop";
import { useAppDispatch } from "@/hooks/store";
import { getPageContents } from "@/store/contentBar";
import { useTheme } from "@/context/useTheme";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const StickyBar = dynamic(() => import("../custom/StickyBar"), { ssr: false });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(getPageContents());
  }, [router.pathname]);
  return (
    <Box direction="column">
      <GlobalStyles theme={theme} />

      <Navbar />
      <RootWrap>
        {router.pathname === "/" ? null : <StickyBar />}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </RootWrap>
      <ScrollTop />
    </Box>
  );
};

export default RootLayout;
