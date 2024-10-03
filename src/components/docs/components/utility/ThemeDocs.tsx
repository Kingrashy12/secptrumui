import React from "react";
import { Container } from "../../start/InstallPage";
import ThemePage from "@/components/sections/docs/components/ThemePage";
import DocBar from "@/components/sections/components/DocBar";

const ThemeDocs = () => {
  return (
    <Container>
      <ThemePage />
      <DocBar />
    </Container>
  );
};

export default ThemeDocs;
