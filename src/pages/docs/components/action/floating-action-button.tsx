import { BackgroundLoader, FabDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const FAB = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading" : "Fab - Secptrum UI"}</title>
      </Head>
      <FabDocs />
    </Suspense>
  );
};

export default FAB;
