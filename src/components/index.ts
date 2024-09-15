import { lazy } from "react";

export const HeroSection = lazy(() => import("./home/About"));
export const InstallPage = lazy(() => import("./docs/start/InstallPage"));
export const OverViewPage = lazy(() => import("./docs/start/OverviewPage"));
export const NextjsPage = lazy(() => import("./docs/start/NextjsPage"));
export const PlainReact = lazy(() => import("./docs/start/PlainReact"));
export const UsagePage = lazy(() => import("./docs/start/Usage"));
export const NotFound_404 = lazy(() => import("./404_NotFound"));

export { default as RootLayout } from "./layout/RootLayout";
export { default as Media } from "./custom/Media";
export { default as Typography } from "./custom/Typography";
// export { default as NotFound_404 } from "./404_NotFound";
export { default as BackgroundLoader } from "./custom/BackgroundLoader";
