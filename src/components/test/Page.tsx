"use client";

import {
  HorizontalList,
  TestEnvCard,
  TestEnvCardHeader,
  TestEnvContainer,
  TestEnvLists,
} from "@/styles/test.env/styled";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import TextInput from "./Input";
import { RiSearchLine } from "react-icons/ri";
import { Divider } from "@/styles/global";
import { useTheme } from "@/context/useTheme";
import { Tabs, TabsHandle, TabsList } from "..";
import { testEnvComponenets } from "@/data/test.env/components";

const Page = () => {
  const { theme } = useTheme();
  return (
    <TestEnvContainer>
      <TestEnvCard>
        <TestEnvCardHeader align="horizontal">
          <TextInput
            icon={RiSearchLine}
            Type="text"
            variant="solid"
            fullWidth
            placeholder="Search components"
          />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </TestEnvCardHeader>
        <Divider theme={theme} />
        <Tabs>
          <TabsList variant="solid">
            <TabsHandle value="all">All</TabsHandle>
            <HorizontalList direction="row">
              {testEnvComponenets.map((cat, index) => (
                <TabsHandle value={cat.label} key={index}>
                  {cat.category}
                </TabsHandle>
              ))}
            </HorizontalList>
          </TabsList>
        </Tabs>
        <Divider theme={theme} />
        <TestEnvLists>hello</TestEnvLists>
      </TestEnvCard>
    </TestEnvContainer>
  );
};

export default Page;
