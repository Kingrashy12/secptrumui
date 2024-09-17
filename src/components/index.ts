import { lazy } from "react";

export const HeroSection = lazy(() => import("./home/About"));
export const InstallPage = lazy(() => import("./docs/start/InstallPage"));
export const OverViewPage = lazy(() => import("./docs/start/OverviewPage"));
export const NextjsPage = lazy(() => import("./docs/start/NextjsPage"));
export const PlainReact = lazy(() => import("./docs/start/PlainReact"));
export const UsagePage = lazy(() => import("./docs/start/Usage"));
export const NotFound_404 = lazy(() => import("./404_NotFound"));
export const ButtonDocs = lazy(
  () => import("./docs/components/action/ButtonDocs")
);

export { default as RootLayout } from "./layout/RootLayout";
export { default as Media } from "./custom/Media";
export { default as Typography } from "./custom/Typography";
export { default as BackgroundLoader } from "./custom/BackgroundLoader";

// Test
export { default as Checkbox } from "./test/CheckBox";
export { default as Switch } from "./test/Switch";
export { default as Tabs } from "./test/tabs/Tabs";
export { default as TabsList } from "./test/tabs/TabsList";
export { default as TabsHandle } from "./test/tabs/TabsHandle";
export { default as Button } from "./test/Button";
export { default as Card } from "./test/Card";
