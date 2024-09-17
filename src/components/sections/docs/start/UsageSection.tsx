import CodeBlock from "@/components/custom/code/CodeBlock";
import PreviewCard from "@/components/custom/docs/PreviewCard";
import TextContent from "@/components/custom/docs/TextContent";
import PageNavigator from "@/components/PageNavigator";
import { useTheme } from "@/context/useTheme";
import {
  BodyText,
  InstallPageContainer,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
      <PreviewCard
        code={`
import { Button, toast, useTheme } from 'secptrum-ui'

export default function Home() {

 const { theme } = useTheme();

  retrun(
    <Button
    size="lg"
    radius="lg"
    variant="outline"
    color={theme.colors?.text}
    onHoverBackgroundOutline={theme.colors?.button_outline_hover}
    solidBorder={theme.colors?.solid_button_border}
    onClick={() => toast.success("This is a success message!")}
  >
    Make a toast
  </Button>
  )
}
      `}
      />
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
      <BodyText theme={theme}>
        <b id="note">Note:</b> While using the{" "}
        <Link href="/docs/components/utility/theme#theme-provider">
          ThemeProvider
        </Link>{" "}
        is optional, it is strongly encouraged to maintain visual consistency
        throughout your application.
      </BodyText>
      <BodyText>
        <b>Example:</b>
      </BodyText>
      <CodeBlock
        code={`
import { ThemeProvider } from "secptrum-ui";

export default function App(){
    <ThemeProvider>
       ...
    </ThemeProvider>,
  }
);
      `}
      />
      <TextContent id="" bodyText="<b></b>" />
      <BodyText theme={theme}>
        By wrapping your root component with the{" "}
        <Link href="/docs/components/theme#theme-provider">ThemeProvider</Link>,
        you'll have access to default styles and can customize the theme as
        needed for your project.
      </BodyText>
      <TextContent_Wrap>
        <MediumTextHeader theme={theme} isMedium as="h4">
          References
        </MediumTextHeader>
        <BodyText theme={theme}>
          For more detailed usage and customization options, check out{" "}
          <Link href="/docs/components/theme#theme-customization">
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
