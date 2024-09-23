import { BackgroundLoader, PlainReact } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const PlainReactInstallation = () => {
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
          {isLoading
            ? "Loading..."
            : "Installation | Plain React - Secptrum UI"}
        </title>
      </Head>
      <PlainReact />
    </Suspense>
  );
};

export default PlainReactInstallation;
