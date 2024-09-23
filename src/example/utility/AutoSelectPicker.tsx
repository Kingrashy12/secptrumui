import { Button, Media, Tabs, TabsHandle, TabsList } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import Backdrop from "@/components/test/Backdrop";
import ImagePicker from "@/components/test/ImagePicker";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const AutoSelectPicker = ({ code }: { code: string }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [mode, setMode] = useState("preview");

  function handleImageSelect(Images: string[]) {
    setImages(Images);
    if (Images.length >= 1) {
      toast.success("Great, now click on the image to remove");
    } else {
      toast.info("😢 You didn't pick any image");
    }
  }

  function removeImage(index: number) {
    setImages((prev) => {
      const updatedImages = prev.filter((image, _i) => _i !== index);
      return updatedImages;
    });
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
            onMultipleImageSelect={handleImageSelect}
            isPickerOpen={openPicker}
            closePicker={() => setOpenPicker(false)}
            multiple
            autoSelectImage
          />

          {images.length >= 1 ? (
            <>
              {images.map((image, index) => (
                <SelectedImage
                  src={image}
                  key={index}
                  onClick={() => removeImage(index)}
                />
              ))}
            </>
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

export default AutoSelectPicker;

const SelectedImage = styled(Media)`
  width: 100px;
  border-radius: 12px;
  cursor: pointer;
  flex-wrap: wrap;
`;
