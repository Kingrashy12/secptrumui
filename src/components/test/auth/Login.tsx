import { SignIn } from "@clerk/nextjs";
import React from "react";
import { Stack } from "secptrum-ui";

const Login = () => {
  return (
    <Stack>
      <SignIn />
    </Stack>
  );
};

export default Login;
