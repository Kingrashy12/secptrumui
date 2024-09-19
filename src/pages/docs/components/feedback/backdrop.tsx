import { BackdropDocs, BackgroundLoader } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Backdrop = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
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
