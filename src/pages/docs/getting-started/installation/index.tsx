import { BackgroundLoader, InstallPage } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Installation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading..." : "Installation - Secptrum UI"}</title>
      </Head>
      <InstallPage />
    </Suspense>
  );
};

export default Installation;
