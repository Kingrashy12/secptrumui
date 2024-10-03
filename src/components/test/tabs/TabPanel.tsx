import React, { forwardRef } from "react";
import { BoxProps } from "../Card";

const TabPanel = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

export default TabPanel;
