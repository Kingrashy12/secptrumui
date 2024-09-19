import { BackgroundLoader, CircleLoaderDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const CircleLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading" : "CircleLoader - Secptrum UI"}</title>
      </Head>
      <CircleLoaderDocs />
    </Suspense>
  );
};

export default CircleLoader;
