import StyledComponentsRegistry from "@/lib/registry";
import React, { useEffect } from "react";
import { Box } from "secptrum-ui";
import dynamic from "next/dynamic";
import { GlobalStyles, RootWrap } from "@/styles/global";
import { useRouter } from "next/router";
import ScrollTop from "../ScrollTop";
import { useAppDispatch } from "@/hooks/store";
import { getPageContents } from "@/store/contentBar";
import { useTheme } from "@/context/useTheme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <Box direction="column">
        <GlobalStyles theme={theme} />

        <Navbar />
        <RootWrap>
          {router.pathname === "/" ? null : <StickyBar />}
          <StyledComponentsRegistry>
            {children}
            <Analytics />
            <SpeedInsights />
          </StyledComponentsRegistry>
        </RootWrap>
        <ScrollTop />
      </Box>
    </ClerkProvider>
  );
};

export default RootLayout;
