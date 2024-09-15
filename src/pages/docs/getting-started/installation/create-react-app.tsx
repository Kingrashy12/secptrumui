import { BackgroundLoader, PlainReact } from "@/components";
import Head from "next/head";
import React, { Suspense } from "react";

const PlainReactInstallation = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Installation | Plain React - Secptrum UI</title>
      </Head>
      <PlainReact />
    </Suspense>
  );
};

export default PlainReactInstallation;
