import React from "react";
import { Container } from "../../start/InstallPage";
import Toast from "@/components/sections/docs/components/Toast";

// I guest you're safe here 😁
// secptrum-ui don't have an UpperCase Toast
// But don't import the toast function

const ToastDocs = () => {
  return (
    <Container>
      <Toast />
    </Container>
  );
};

export default ToastDocs;
