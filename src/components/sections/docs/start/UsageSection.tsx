import CodeBlock from "@/components/custom/code/CodeBlock";
import DocInfo from "@/components/custom/docs/DocInfo";
import PreviewCard from "@/components/custom/docs/PreviewCard";
import TextContent from "@/components/custom/docs/TextContent";
import PageNavigator from "@/components/PageNavigator";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";
import { usageCode } from "@/data/code/usage";
import {
  BodyText,
  InstallPageContainer,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Customizing from "../components/Customizing";

const UsageSection = () => {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <InstallPageContainer>
      <TextContent
        largeHeader="Usage"
        id="usage"
        bodyText="Learn the basics of working with Secptrum UI components."
      />
      <TextContent_Wrap id="quickstart">
        <Link href={`${router.pathname}/#quickstart`} className="a">
          <MediumTextHeader theme={theme} font="inter" as="h2">
            Quickstart
          </MediumTextHeader>
        </Link>

        <BodyText theme={theme}>
          Below is an example of how to use the{" "}
          <Link href="/docs/components/action/button">Button</Link> and{" "}
          <Link href="/docs/components/feedback/toast">Toast</Link> components
          in your project:
        </BodyText>
      </TextContent_Wrap>
      <PreviewCard code={usageCode.quickStart} />
      <TextContent_Wrap id="customizing">
        <Link href={`${router.pathname}/#customizing`} className="a">
          <MediumTextHeader theme={theme} font="inter" as="h2">
            Customizing
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          When customizing with styled-components, you might encounter issues
          where your custom styles don't apply due to the component's default
          styles having higher specificity. In such cases, you can use{" "}
          <TextBadge>&&</TextBadge> to increase the specificity of your styles.
        </BodyText>
      </TextContent_Wrap>
      <Customizing />
      <TextContent_Wrap id="themeprovider">
        <Link href={`${router.pathname}/#themeprovider`} className="a">
          <MediumTextHeader theme={theme} font="inter" as="h2">
            ThemeProvider
          </MediumTextHeader>
        </Link>

        <BodyText theme={theme}>
          For the best experience and to ensure style consistency across all
          components, it is highly recommended to wrap your app's root component
          with the{" "}
          <Link href="/docs/components/utility/theme#theme-provider">
            ThemeProvider
          </Link>{" "}
          from Secptrum UI. This will apply the default theme and allow you to
          easily customize the theme if needed.
        </BodyText>
      </TextContent_Wrap>
      <DocInfo type="info">
        <BodyText>
          If your app doesn't use a theme toggle, you can use the{" "}
          <TextBadge>mode</TextBadge> prop to specify the app's mode (light or
          dark), ensuring the components match your desired theme style.
        </BodyText>
      </DocInfo>

      <BodyText style={{ color: theme.colors?.text }}>
        <b>Example:</b>
      </BodyText>
      <CodeBlock code={usageCode.theme} />
      <TextContent id="" bodyText="<b></b>" />
      <BodyText theme={theme}>
        By wrapping your root component with the{" "}
        <TextBadge>ThemeProvider</TextBadge>, you'll have access to default
        styles and can customize the theme as needed for your project.
      </BodyText>
      <TextContent_Wrap>
        <MediumTextHeader theme={theme} isMedium as="h4">
          References
        </MediumTextHeader>
        <BodyText theme={theme}>
          For more detailed usage and customization options, check out{" "}
          <Link href="/docs/components/utility/theme#customizing">
            Theme Customization{" "}
          </Link>{" "}
          Learn how to customize colors, fonts, and more
        </BodyText>
      </TextContent_Wrap>
      <PageNavigator />
    </InstallPageContainer>
  );
};

export default UsageSection;
