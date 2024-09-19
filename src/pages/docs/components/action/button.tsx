import { BackgroundLoader, ButtonDocs } from "@/components";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";

const button = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
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
