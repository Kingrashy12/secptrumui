import { BackgroundLoader, UsagePage } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Usage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading..." : "Usage - Secptrum UI"}</title>
      </Head>
      <UsagePage />
    </Suspense>
  );
};

export default Usage;
