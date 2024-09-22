const shouldForwardProp = (prop: string) => {
  const invalidProps = [
    "padding",
    "margin",
    "centered",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "border",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "direction",
    "align",
    "isactive",
    "centerContent",
    "isCurrent",
    "activeColor",
    "variant",
    "inActiveColor",
    "disabled",
    //Extend lib props
    "backgroundColor",
    "backgroundcolor",
    "solidBorder",
    "onHoverBackgroundSolid",
    "onHoverBackgroundOutline",
    "onHoverBackgroundLight",
    "onHoverBackgroundGhost",
    "borderColor",
    "outlineBorderColor",
    "isCurrent",
    "activeColor",
    "moveOnScroll",
    "colorScheme",
    "containerColor",
    "size",
    "color",
    "transition",
    "outLineBorderColor",
    "focusBorderColor",
    "focusColor",
    "transition",
    "cardShadow",
    "space",
    "gap",
    "notavailable",
    "light",
    "outlinebordercolor",
    "checked",
    "rounded",
    "textColor",
  ];

  return !invalidProps.includes(prop); // Only forward valid props
};

export default shouldForwardProp;
