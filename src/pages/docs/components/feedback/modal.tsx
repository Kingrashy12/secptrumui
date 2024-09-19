import { BackgroundLoader, ModalDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";

const Modal = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading" : "Modal - Secptrum UI"}</title>
      </Head>
      <ModalDocs />
    </Suspense>
  );
};

export default Modal;
