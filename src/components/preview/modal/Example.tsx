import { Button, Card, Tabs, TabsHandle, Typography } from "@/components";
import Modal from "@/components/test/modal/Modal";
import ModalPanel from "@/components/test/modal/ModalPanel";
import {
  ModalContent,
  ModalFooter,
  ModalTitle,
} from "@/styles/test/feedback/styled";
import React, { useState } from "react";
import { PrevContainer } from "../CircleLoader";
import { useTheme } from "@/context/useTheme";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { toast } from "@/components/test/toast/Toast";
import TabPanel from "@/components/test/tabs/TabPanel";

const ModalExample = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);
  const { mode } = useTheme();

  function deleteAccount() {
    toast.success("Your account has been deleted");
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalPanel size="lg">
            <ModalTitle>Confirm Deletion</ModalTitle>
            <ModalContent>
              <Typography style={{ color: "black" }}>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </Typography>
            </ModalContent>
            <ModalFooter space={6} position="left">
              <Button
                color={mode === "dark" ? "black" : ""}
                onClick={() => setOpen(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={deleteAccount}>
                Continue
              </Button>
            </ModalFooter>
          </ModalPanel>
        </Modal>
      ) : (
        <Card>
          <Tabs variant="solid">
            <TabsHandle value="preview">Preview</TabsHandle>
            <TabsHandle value="code">Code</TabsHandle>

            <TabPanel>
              <PrevContainer>
                <Button onClick={() => setOpen(true)} variant="outline">
                  Delete
                </Button>
              </PrevContainer>
            </TabPanel>

            <TabPanel>
              <CodeBlock code={code} />
            </TabPanel>
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default ModalExample;
