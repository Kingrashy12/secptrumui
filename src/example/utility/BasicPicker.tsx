import { Button, Media, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import ImagePicker from "@/components/test/ImagePicker";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const BasicPicker = ({ code }: { code: string }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [image, setImage] = useState("");
  const [mode, setMode] = useState("preview");

  function handleImageSelect(image: string) {
    setImage(image);
    if (image) {
      toast.success("Great, now click on the image to remove");
    } else {
      toast.info("😢 You didn't pick any image");
    }
  }

  return (
    <Preview>
      <Tabs>
        <TabsList variant="solid">
          <TabsHandle value="preview" onClick={() => setMode("preview")}>
            Preview
          </TabsHandle>
          <TabsHandle value="code" onClick={() => setMode("code")}>
            Code
          </TabsHandle>
        </TabsList>
      </Tabs>
      {mode === "preview" ? (
        <Stack spacing="lg" align="horizontal">
          <ImagePicker
            onImageSelect={handleImageSelect}
            isPickerOpen={openPicker}
            closePicker={() => setOpenPicker(false)}
          />

          {image ? (
            <SelectedImage src={image} onClick={() => setImage("")} />
          ) : (
            <Button variant="outline" onClick={() => setOpenPicker(true)}>
              Upload image
            </Button>
          )}
        </Stack>
      ) : (
        <CodeBlock code={code} />
      )}
    </Preview>
  );
};

export default BasicPicker;

const SelectedImage = styled(Media)`
  width: 50%;
  border-radius: 12px;
  cursor: pointer;
`;
