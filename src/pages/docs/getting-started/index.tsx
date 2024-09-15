import { BackgroundLoader, InstallPage, OverViewPage } from "@/components";
import Head from "next/head";
import React, { Suspense } from "react";

const Overview = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Overview - Secptrum UI</title>
      </Head>
      <OverViewPage />
    </Suspense>
  );
};

export default Overview;
