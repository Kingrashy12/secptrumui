import { FloatProps } from "@/components/test/Fab";

export const getFloatPosition = (position: FloatProps["position"]) => {
  switch (position) {
    case "top-right":
      return { top: `25px`, right: `35px` };
    case "top-left":
      return { top: `25px`, left: `35px` };
    case "bottom-right":
      return { bottom: `25px`, right: `35px` };
    case "bottom-left":
      return { bottom: `25px`, left: `35px` };
    case "bottom-center":
      return { bottom: `25px`, "align-self": "center" };
    case "top-center":
      return { top: `25px`, "align-self": "center" };
  }
};
