import { BackgroundLoader, PlainReact } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const PlainReactInstallation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
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
