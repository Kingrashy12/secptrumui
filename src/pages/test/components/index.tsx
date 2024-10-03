import { BackgroundLoader, TestPage } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Overview = () => {
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
        <title>
          {isLoading ? "Loading..." : "Test Components - Secptrum UI"}
        </title>
      </Head>
      <TestPage />
    </Suspense>
  );
};

export default Overview;
