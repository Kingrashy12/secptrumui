import { BackgroundLoader, UsagePage } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Usage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });
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
