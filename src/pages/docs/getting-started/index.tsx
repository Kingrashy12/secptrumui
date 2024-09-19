import { BackgroundLoader, InstallPage, OverViewPage } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Overview = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading..." : "Overview - Secptrum UI"}</title>
      </Head>
      <OverViewPage />
    </Suspense>
  );
};

export default Overview;
