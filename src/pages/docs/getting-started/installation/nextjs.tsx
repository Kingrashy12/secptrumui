import { BackgroundLoader, NextjsPage } from "@/components";
import { Container } from "@/styles/global";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const NextInstallation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
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
