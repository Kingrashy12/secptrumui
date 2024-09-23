import { BackgroundLoader, ImagePickerDocs } from "@/components";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const ImagePicker = () => {
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
        <title>{isLoading ? "Loading" : "ImagePicker - Secptrum UI"}</title>
      </Head>
      <ImagePickerDocs />
    </Suspense>
  );
};

export default ImagePicker;
