import PropOptions from "@/components/custom/docs/PropOptions";
import DocsLayout from "@/components/layout/DocsLayout";
import TextBadge from "@/components/test/TextBadge";
import { useTheme } from "@/context/useTheme";

import {
  BodyText,
  LargeTextHeader,
  MediumTextHeader,
  TextContent_Wrap,
} from "@/styles/docs/start.styled";
import React from "react";
import ToastProps, {
  ToastPositions,
  ToastTransition,
  ToastTypes,
} from "../../components/Toast";
import DocInfo from "@/components/custom/docs/DocInfo";
import Link from "next/link";
import BasicToast from "@/components/preview/toast/Basic";
import PositionToast from "@/components/preview/toast/Position";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toastCodes } from "@/data/code/toast";
import TransitionsToast from "@/components/preview/toast/Transitions";
import { Divider } from "@/styles/global";

const Toast = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout>
      <TextContent_Wrap>
        <LargeTextHeader as="h1" theme={theme}>
          Toast
        </LargeTextHeader>
        <BodyText theme={theme}>
          A <TextBadge>Toast</TextBadge> is a lightweight notification designed
          to give users feedback or information without interrupting their
          workflow. Typically used for success messages, warnings, errors, or
          simple notifications, toasts appear briefly and automatically
          disappear after a short duration.
        </BodyText>
      </TextContent_Wrap>
      <Divider theme={theme} style={{ marginBottom: 16 }} />
      <ToastProps />
      <TextContent_Wrap id="basic-toast">
        <Link href="#basic-toast" className="a">
          <MediumTextHeader as="h4" id="basic-toast" isMedium theme={theme}>
            Basic Toast
          </MediumTextHeader>
        </Link>
      </TextContent_Wrap>
      <BasicToast code={toastCodes.basic} />
      <TextContent_Wrap id="position-toast">
        <Link href="#position-toast" className="a">
          <MediumTextHeader as="h4" id="position-toast" isMedium theme={theme}>
            Position Toast
          </MediumTextHeader>
        </Link>
      </TextContent_Wrap>
      <PositionToast code={toastCodes.position} />
      <TextContent_Wrap id="transition-effect">
        <Link href="#transition-effect" className="a">
          <MediumTextHeader
            as="h4"
            id="transition-effect"
            isMedium
            theme={theme}
          >
            Toast Transition Effects
          </MediumTextHeader>
        </Link>
        <BodyText theme={theme}>
          The Toast component comes with four built-in transition effects to
          enhance the way notifications appear on the screen. You can choose
          between <TextBadge>walkIn</TextBadge>, <TextBadge>slideIn</TextBadge>,{" "}
          <TextBadge>dropIn</TextBadge>, and <TextBadge>popIn</TextBadge>{" "}
          transitions depending on the type of animation you want for your toast
          notifications.
        </BodyText>
      </TextContent_Wrap>

      <ToastTransition />
      <TransitionsToast code={toastCodes.transition} />
      <div style={{ marginTop: 16 }} />
      <ToastPositions />
      <div style={{ marginTop: 16 }} />
      <ToastTypes />
      <DocInfo type="info" mt={10}>
        <BodyText>
          To use the <TextBadge>toast</TextBadge> functionality, you must import
          and render the <TextBadge>Toaster</TextBadge> component in your root
          layout or root file.
        </BodyText>
      </DocInfo>
      <PropOptions hideHeader>
        <li>Next.Js</li>
      </PropOptions>
      <CodeBlock code={toastCodes.next} />
      <div style={{ marginTop: 16 }} />
      <PropOptions hideHeader>
        <li>Plain React (CRA)</li>
      </PropOptions>
      <CodeBlock code={toastCodes.cra} />
    </DocsLayout>
  );
};

export default Toast;
