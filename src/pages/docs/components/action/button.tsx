import { BackgroundLoader, ButtonDocs } from "@/components";
import Head from "next/head";
import React, { Suspense } from "react";

const button = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Button - Secptrum UI</title>
      </Head>
      <ButtonDocs />
    </Suspense>
  );
};

export default button;
