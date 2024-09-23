import React from "react";
import styled from "styled-components";
import { Button, Card } from "..";
import Link from "next/link";
import TextInput from "../test/Input";

const components = [
  {
    name: "Button",
    description: "A customizable button component.",
    path: "/docs/components/action/button",
    component: <Button>Click me</Button>,
  },
  {
    name: "Input",
    description: "A flexible input field for user input.",
    path: "/docs/input",
    component: <TextInput Type="text" placeholder="Enter text" />,
  },
  {
    name: "Card",
    description: "A card component for displaying content.",
    path: "/docs/card",
    component: <Card>Card Content</Card>,
  },
  // Add more components as needed
];

const ComponentsPage = () => {
  return (
    <Container>
      <Title>Components Library</Title>
      <Intro>
        Explore our collection of UI components. Click on a component to see its
        documentation.
      </Intro>
      <ComponentList>
        {components.map((component, index) => (
          <ComponentItem key={index}>
            <Link href={component.path}>
              <ComponentName>{component.name}</ComponentName>
              <ComponentDescription>
                {component.description}
              </ComponentDescription>
              <ComponentPreview>{component.component}</ComponentPreview>
            </Link>
          </ComponentItem>
        ))}
      </ComponentList>
    </Container>
  );
};

export default ComponentsPage;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Intro = styled.p`
  margin-bottom: 20px;
`;

const ComponentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ComponentItem = styled.li`
  margin-bottom: 25px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

const ComponentName = styled.h2`
  font-size: 20px;
  color: #007bff;
`;

const ComponentDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const ComponentPreview = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px dashed #ccc;
  border-radius: 4px;
`;
