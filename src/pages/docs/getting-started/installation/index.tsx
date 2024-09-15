import { BackgroundLoader, InstallPage } from "@/components";
import Head from "next/head";
import React, { Suspense } from "react";

const Installation = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Installation - Secptrum UI</title>
      </Head>
      <InstallPage />
    </Suspense>
  );
};

export default Installation;
