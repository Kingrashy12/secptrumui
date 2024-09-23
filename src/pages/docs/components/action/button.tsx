import { BackgroundLoader, ButtonDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const button = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });
  }, []);

  const title = isLoading ? "Loading..." : "Button";

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{title} - Secptrum UI</title>
      </Head>
      <ButtonDocs />
    </Suspense>
  );
};

export default button;
