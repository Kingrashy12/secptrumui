import { BackgroundLoader, TabsDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Tabs = () => {
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
        <title>{isLoading ? "Loading" : "Tabs - Secptrum UI"}</title>
      </Head>
      <TabsDocs />
    </Suspense>
  );
};

export default Tabs;
