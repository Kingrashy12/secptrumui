import { BackgroundLoader, SwitchDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Switch = () => {
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
        <title>{isLoading ? "Loading" : "Switch - Secptrum UI"}</title>
      </Head>
      <SwitchDocs />
    </Suspense>
  );
};

export default Switch;
