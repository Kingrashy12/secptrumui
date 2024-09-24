import { HeroSection } from "@/components";
import { Container } from "@/styles/global";
import Head from "next/head";
// import { Suspense } from "react";

export default function Home() {
  return (
    // <Suspense fallback={<BackgroundLoader />}>
    <>
      <Head>
        <title>
          Secptrum UI - Customizable and modern UI component library for react
        </title>
      </Head>
      <Container direction="column">
        <HeroSection />
      </Container>
    </>
    // {/* </Suspense> */}
  );
}
