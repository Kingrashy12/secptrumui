import { getTabVariantStyle } from "@/utils/test/variant";
import { Box, colors, shouldForwardProps } from "secptrum-ui";
import styled from "styled-components";

const shouldForwardProp = shouldForwardProps;

//*************Card Component************//
export const CardWrap = styled(Box).withConfig({
  shouldForwardProp,
})<{
  centerContent?: boolean;
  backgroundcolor: string | any;
  borderColor: string | any;
  space: number | any;
  cardShadow: string | any;
}>`
  flex-direction: column;
  background: ${(props) => props.backgroundcolor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 11px;
  padding: ${(props) => props.padding || "16px"};
  gap: ${(props) => props.space || 16}px;
  width: auto;
  max-width: 100%;
  justify-content: center;
  align-items: ${(props) => props.centerContent && "center"};
  height: auto;
  box-shadow: 0 4px 8px ${(props) => props.cardShadow};

  @media screen and (max-width: 550px) {
    padding: 10px;
  }
`;

//*************Tabs Components************//
export const TabHandle = styled.button.withConfig({ shouldForwardProp })<{
  iscurrent: boolean;
  activeColor: string | any;
  variant: "line" | "solid";
  inactivecolor: string;
  disabled: boolean;
  "full-width": boolean | any;
}>`
  font-family: "Poppins-Medium", sans-serif;
  font-size: 0.87rem;
  line-height: 1.2rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  width: ${(props) => (props["full-width"] ? `100%` : "auto")};
  height: 30px;
  border: none;
  padding: 9px;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  gap: 7px;

  ${(props) =>
    getTabVariantStyle(
      props.variant,
      props.iscurrent,
      props.activeColor,
      props.inactivecolor,
      props.disabled
    )}

  &:hover {
    border-bottom-color: ${(props) => !props.iscurrent && colors.gray[300]};
  }
`;

// export const TabHandleWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `;
