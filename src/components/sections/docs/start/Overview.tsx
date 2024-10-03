// import TextContent from "@/components/custom/docs/TextContent";
import TextContentWithList from "@/components/custom/docs/TextContentWithList";
import PageNavigator from "@/components/PageNavigator";
import { keyFeature, why_use_list_texts } from "@/data/texts/overflow";
import { InstallPageContainer } from "@/styles/docs/start.styled";
import dynamic from "next/dynamic";
import React from "react";

const TextContent = dynamic(
  () => import("@/components/custom/docs/TextContent")
);

const Overview = () => {
  return (
    <InstallPageContainer>
      <TextContent
        // largeHeader="Secptrum UI - Overview"
        mediumHeader="Introduction"
        id="introduction"
        isMedium
        bodyText="SecptrumUI is a customizable and modern UI component library for react, built with styled-components. Designed to help developers quickly build beautiful and responsive web applications, SecptrumUI offers a range of components that are easy to use and adapt to any project."
      />
      <TextContent
        id=""
        bodyText="Whether you're starting a new project or enhancing an existing one, SecptrumUI gives you the tools to create consistent, high-quality interfaces with minimal effort."
      />
      <TextContentWithList
        header="Why Use SecptrumUI?"
        id="why-use-secptrum-ui?"
        li={why_use_list_texts}
        isMedium
      />
      <TextContentWithList
        header="Key Features"
        id="key-features"
        li={keyFeature}
        isMedium
      />
      <PageNavigator />
    </InstallPageContainer>
  );
};

export default Overview;
