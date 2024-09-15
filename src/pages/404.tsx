import { BackgroundLoader, NotFound_404 } from "@/components";
import { Container } from "@/styles/global";
import Head from "next/head";
import React, { Suspense } from "react";

const PageNotFound = () => {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>Page not found - Secptrum UI</title>
      </Head>
      <Container direction="column">
        <NotFound_404 />
      </Container>
    </Suspense>
  );
};

export default PageNotFound;
