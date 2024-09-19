import { BackgroundLoader, ToastDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Toast = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading" : "Toast - Secptrum UI"}</title>
      </Head>
      <ToastDocs />
    </Suspense>
  );
};

export default Toast;
