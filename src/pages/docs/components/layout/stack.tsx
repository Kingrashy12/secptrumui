import { BackgroundLoader, StackDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Stack = () => {
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
        <title>{isLoading ? "Loading" : "Stack - Secptrum UI"}</title>
      </Head>
      <StackDocs />
    </Suspense>
  );
};

export default Stack;
