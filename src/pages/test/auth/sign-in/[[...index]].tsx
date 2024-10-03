import { BackgroundLoader, Login } from "@/components";
import { AuthMain } from "@/styles/global";
import Head from "next/head";
import React, { Suspense, useEffect, useState, useTransition } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Suspense fallback={<BackgroundLoader />}>
      <Head>
        <title>{isLoading ? "Loading..." : "Login - Secptrum UI"}</title>
      </Head>
      <AuthMain>
        <Login />
      </AuthMain>
    </Suspense>
  );
};

export default LoginPage;
