import { BackgroundLoader, CircleLoaderDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const CircleLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });
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
