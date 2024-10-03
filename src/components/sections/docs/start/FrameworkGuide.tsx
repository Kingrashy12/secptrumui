import TextContent from "@/components/custom/docs/TextContent";
import Typography from "@/components/custom/Typography";
import { useTheme } from "@/context/useTheme";
import { frameworks } from "@/data/frameworks";
import {
  FrameWorkContent,
  FrameWorkGuideContainer,
  FrameWorksContainer,
} from "@/styles/docs/start.styled";
import Link from "next/link";
import React from "react";
import { Icon } from "secptrum-ui";

const FrameworkGuide = () => {
  const { theme } = useTheme();
  return (
    <FrameWorkGuideContainer theme={theme}>
      <TextContent
        mediumHeader="Framework Guides"
        id="framework-guides"
        isMedium
        bodyText="Framework-specific guides covering our recommended approach to installing SecptrumUI in a variety of popular environments."
      />
      <FrameWorksContainer>
        {frameworks.map((framework, index) => (
          <Link key={index} href={framework.uri}>
            <FrameWorkContent theme={theme}>
              <div>
                <Icon icon={framework.img} />
                <Typography as="h3" font="inter">
                  {framework.name}
                </Typography>
              </div>
              <Typography font="inter">{framework.description}</Typography>
            </FrameWorkContent>
          </Link>
        ))}
      </FrameWorksContainer>
      <Typography>
        Don't see your framework of choice?{" "}
        <Link href="mailto:raphealchizitere@gmail.com">Let me know</Link>, and
        I'll work to add support or provide guidance on installation!
      </Typography>
    </FrameWorkGuideContainer>
  );
};

export default FrameworkGuide;
