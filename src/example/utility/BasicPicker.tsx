import { Button, Media, Tabs, TabsHandle } from "@/components";
import CodeBlock from "@/components/custom/code/CodeBlock";
import ImagePicker from "@/components/test/ImagePicker";
import TabPanel from "@/components/test/tabs/TabPanel";
import { toast } from "@/components/test/toast/Toast";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";
import styled from "styled-components";

const BasicPicker = ({ code }: { code: string }) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [image, setImage] = useState("");

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
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
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
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Preview>
  );
};

export default BasicPicker;

const SelectedImage = styled(Media)`
  width: 50%;
  border-radius: 12px;
  cursor: pointer;
`;
