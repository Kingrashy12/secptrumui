import { Button, Media, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";

import ImagePicker from "@/components/test/ImagePicker";
import TabPanel from "@/components/test/tabs/TabPanel";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const AutoSelectPicker = ({ code }: { code: string }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [images, setImages] = useState<string[]>([]);

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
      const updatedImages = prev.filter((_, _i) => _i !== index);
      return updatedImages;
    });
  }

  return (
    <Preview>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
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
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
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
