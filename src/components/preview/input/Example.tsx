import TextInput from "@/components/test/Input";
import { Preview } from "@/styles/docs/start.styled";
import React from "react";
import styled from "styled-components";

const InputHero = () => {
  return (
    <Container>
      <TextInput Type="text" name="group" variant="outline" />
    </Container>
  );
};

export default InputHero;

const Container = styled(Preview)`
  position: relative;
  justify-content: center;
  align-items: center;
`;
