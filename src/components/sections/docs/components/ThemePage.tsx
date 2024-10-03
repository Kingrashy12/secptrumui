import CodeBlock from "@/components/custom/code/CodeBlock";
import DocInfo from "@/components/custom/docs/DocInfo";
import PropOptions from "@/components/custom/docs/PropOptions";
import DocsLayout from "@/components/layout/DocsLayout";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { themeCodes } from "@/data/code/theme";
import SingleModeExample from "@/example/utility/SingleModeExample";
import ThemeTogglerExample from "@/example/utility/ThemeToggler";
import UseThemeExample from "@/example/utility/UseThemeExample";
import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import { Divider } from "@/styles/global";
import Link from "next/link";
import React from "react";

const ThemePage = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Theme
        </LargeTextHeader>
        <BodyText theme={theme}>
          The theme system allows you to maintain consistent styles across your
          application by centralizing design tokens such as colors, typography,
          spacing, and breakpoints. This approach helps ensure a unified look
          and feel across all UI components and simplifies the customization
          process for different projects.
        </BodyText>
      </TextContent_Wrap>
      <Divider theme={theme} />
      <TextContent_Wrap id="theme-object-structure">
        <Link href="#theme-object-structure" className="a">
          <MediumTextHeader
            as="h4"
            id="theme-object-structure"
            isMedium
            theme={theme}
          >
            Theme Object Structure
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The theme object contains various design tokens such as color
          palettes, typography settings, spacing units, and responsive
          breakpoints. You can modify these tokens to match your brand’s design
          system.
        </BodyText>
      </TextContent_Wrap>
      <CodeBlock code={themeCodes.default} />
      <TextContent_Wrap id="customizing">
        <Link href="#customizing" className="a">
          <MediumTextHeader as="h4" id="customizing" isMedium theme={theme}>
            Customizing the Theme
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          You can easily customize the default theme to align with your brand’s
          design language. By wrapping your application in a{" "}
          <TextBadge>ThemeProvider</TextBadge>, you can provide custom values
          for the theme, such as colors, fonts, and spacing, while keeping all
          components consistent.
        </BodyText>
      </TextContent_Wrap>
      <CodeBlock code={themeCodes.customize} />
      <TextContent_Wrap id="toggletheme">
        <Link href="#toggletheme" className="a">
          <MediumTextHeader as="h4" id="toggletheme" isMedium theme={theme}>
            toggleTheme
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The toggleTheme function provides an easy way to switch between light
          and dark modes within your application. It updates the current theme
          by toggling between a light and dark color scheme, while also saving
          the user's preference to local storage, ensuring the preferred mode is
          maintained across sessions.
        </BodyText>
      </TextContent_Wrap>
      <ThemeTogglerExample code={themeCodes.toggler} />
      <TextContent_Wrap id="use-theme">
        <Link href="#use-theme" className="a">
          <MediumTextHeader as="h4" id="use-theme" isMedium theme={theme}>
            useTheme
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The useTheme hook provides access to the theme system in your
          application. It allows you to retrieve the current theme mode (
          <TextBadge>light</TextBadge> or <TextBadge>dark</TextBadge>), the
          theme configuration, and functions to toggle between modes or set
          custom themes.
        </BodyText>
        <PropOptions header="Properties:">
          <li>
            <b>theme</b>: The current theme configuration (colors, fonts,
            effects, etc.).
          </li>
          <li>
            <b>mode</b>: Current theme mode (<TextBadge>light</TextBadge> or{" "}
            <TextBadge>dark</TextBadge>).
          </li>
          <li>
            <b>toggleTheme</b>: A function to toggle between light and dark
            modes.
          </li>
          <li>
            <b>setCustomTheme</b>: A function to toggle between light and dark
            modes.
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <BodyText theme={theme} as="h4">
        Example:
      </BodyText>
      <UseThemeExample code={themeCodes.usetheme} />
      <TextContent_Wrap id="theme-provider">
        <Link href="#theme-provider" className="a">
          <MediumTextHeader as="h4" id="theme-provider" isMedium theme={theme}>
            ThemeProvider
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The ThemeProvider component is a higher-order component that supplies
          the theme context to your application. It manages the current theme
          state and ensures that the correct theme (light or dark) is applied
          based on user preferences.
        </BodyText>
        <PropOptions>
          <li>
            <b>theme</b>: Defines the custom theme configuration to be used for
            both light and dark modes.
          </li>
        </PropOptions>
      </TextContent_Wrap>
      <BodyText theme={theme} as="h4">
        Example:
      </BodyText>
      <CodeBlock code={themeCodes.provider} />
      <TextContent_Wrap>
        <div style={{ marginTop: 20 }} />
        <Divider theme={theme} />
        <div style={{ marginTop: 20 }} />
        <BodyText theme={theme} as="h4">
          These sections explain how to implement and use the{" "}
          <TextBadge>toggleTheme</TextBadge>, <TextBadge>useTheme</TextBadge>,
          and <TextBadge>ThemeProvider</TextBadge> to manage theme states and
          provide a consistent user experience across light and dark modes in
          your app.
        </BodyText>
      </TextContent_Wrap>
      <TextContent_Wrap id="single-mode">
        <div style={{ marginTop: 20 }} />
        <Divider theme={theme} />
        <Link href="#single-mode" className="a">
          <MediumTextHeader as="h4" id="single-mode" isMedium theme={theme}>
            Using Single Mode: Light or Dark
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme} as="h4">
          If your app is designed to function solely in one mode—either light or
          dark—you can manually set the <TextBadge>mode</TextBadge> prop on the
          components you use to ensure they match your desired theme. This is
          particularly useful when you don't need to toggle between modes and
          want to enforce a consistent look.
        </BodyText>
        <BodyText theme={theme} as="h4">
          Instead of relying on the dynamic <TextBadge>toggleTheme</TextBadge>{" "}
          functionality, you can explicitly specify{" "}
          <TextBadge>mode: "light"</TextBadge> or{" "}
          <TextBadge>mode: "dark"</TextBadge> across your components.
        </BodyText>
      </TextContent_Wrap>
      <BodyText theme={theme} as="h4">
        Example:
      </BodyText>
      <SingleModeExample code={themeCodes.singleMode} />
      <div style={{ marginTop: 20 }} />
      <DocInfo type="info">
        <BodyText theme={theme}>
          If your application is based on a single <TextBadge>mode</TextBadge>,
          using the mode prop ensures the components will align with your design
          intention, without relying on toggling mechanisms.
        </BodyText>
      </DocInfo>
    </DocsLayout>
  );
};

export default ThemePage;
