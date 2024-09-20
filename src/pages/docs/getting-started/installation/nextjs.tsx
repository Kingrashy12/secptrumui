import { BackgroundLoader, NextjsPage } from "@/components";
import { Container } from "@/styles/global";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const NextInstallation = () => {
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
        <title>
          {isLoading ? "Loading..." : "Installation | Nextjs - Secptrum UI"}
        </title>
      </Head>
      <Container>
        <NextjsPage />
      </Container>
    </Suspense>
  );
};

export default NextInstallation;
