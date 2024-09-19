import React from "react";
import { Container } from "../../start/InstallPage";
import Modal from "@/components/sections/docs/components/Modal";

// I'm so sorry 😭, But
// Avoid importing modal from secptrum-ui
const ModalDocs = () => {
  return (
    <Container>
      <Modal />
    </Container>
  );
};

export default ModalDocs;
