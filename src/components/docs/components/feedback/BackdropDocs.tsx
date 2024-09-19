import React from "react";
import { Container } from "../../start/InstallPage";
import Backdrop from "@/components/sections/docs/components/Backdrop";

// I'm so sorry 😭, But
// Avoid importing Backdrop from secptrum-ui
const BackdropDocs = () => {
  return (
    <Container>
      <Backdrop />
    </Container>
  );
};

export default BackdropDocs;
