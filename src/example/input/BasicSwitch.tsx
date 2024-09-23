import { Switch } from "@/components";
import { Preview } from "@/styles/docs/start.styled";
import React, { useState } from "react";
import { Stack } from "secptrum-ui";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Preview>
      <Stack>
        <Switch checked={isOn} onSwitch={() => setIsOn(!isOn)} />
      </Stack>
    </Preview>
  );
};

export default BasicSwitch;
