import { BackgroundLoader, UsagePage } from "@/components";
import Head from "next/head";
import React, { Suspense } from "react";

const Usage = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Usage - Secptrum UI</title>
      </Head>
      <UsagePage />
    </Suspense>
  );
};

export default Usage;
