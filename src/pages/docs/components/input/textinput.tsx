import { BackgroundLoader, InputDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Input = () => {
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
        <title>{isLoading ? "Loading" : "Input - Secptrum UI"}</title>
      </Head>
      <InputDocs />
    </Suspense>
  );
};

export default Input;
