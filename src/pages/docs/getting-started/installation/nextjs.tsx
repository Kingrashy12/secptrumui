import { BackgroundLoader, NextjsPage } from "@/components";
import { Container } from "@/styles/global";
import Head from "next/head";
import React, { Suspense } from "react";

const NextInstallation = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Installation | Nextjs - Secptrum UI</title>
      </Head>
      <Container>
        <NextjsPage />
      </Container>
    </Suspense>
  );
};

export default NextInstallation;
