import { BackdropDocs, BackgroundLoader } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const Backdrop = () => {
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
        <title>{isLoading ? "Loading" : "Backdrop - Secptrum UI"}</title>
      </Head>
      <BackdropDocs />
    </Suspense>
  );
};

export default Backdrop;
