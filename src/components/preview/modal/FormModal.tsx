import { Button, Card, Tabs, TabsHandle, Typography } from "@/components";
import Modal from "@/components/test/modal/Modal";
import ModalPanel from "@/components/test/modal/ModalPanel";
import { ModalContent } from "@/styles/test/feedback/styled";
import React, { useState } from "react";
import { PrevContainer } from "../CircleLoader";
// import { toast } from "secptrum-ui";
import CodeBlock from "@/components/custom/code/CodeBlock";
import Input from "@/components/test/Input";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ModalTitle from "@/components/test/modal/ModalTitle";
import { toast } from "@/components/test/toast/Toast";
import TabPanel from "@/components/test/tabs/TabPanel";

const FormModal = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  function login() {
    if (!email) {
      toast.warning("Tho you didn't enter your email, But it just a test 🤗");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmail("");
        toast.success(`Welcome back ${email}`);
        setOpen(false);
      }, 3000);
    }
  }

  return (
    <>
      {open ? (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          preventClose={isLoading}
        >
          <ModalPanel size="lg" transition="dropIn">
            <ModalTitle
              title="Login"
              showClose
              preventClose={isLoading}
              onClose={() => setOpen(false)}
            />
            <ModalContent>
              <Typography style={{ color: "black" }}>
                Welcome back, login to your account to continue
              </Typography>
              <Input
                Type="email"
                name="email"
                type="email"
                value={email}
                placeholder="your@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                icon={MdOutlineAlternateEmail}
              />
              <Input
                Type="password"
                placeholder="Enter your password"
                icon={RiLockPasswordLine}
              />
              <Button size="lg" onClick={login} isLoading={isLoading}>
                Login
              </Button>
            </ModalContent>
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
                  Login
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

export default FormModal;
