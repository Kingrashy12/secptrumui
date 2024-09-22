import { BackgroundLoader, CheckboxDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const CheckBox = () => {
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
        <title>{isLoading ? "Loading" : "CheckBox - Secptrum UI"}</title>
      </Head>
      <CheckboxDocs />
    </Suspense>
  );
};

export default CheckBox;
