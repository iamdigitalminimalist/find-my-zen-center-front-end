/*************************
 * Footer
 *************************/

export const footerLink = {
  cursor: "pointer",
  "&:hover": {
    opacity: "70%",
  },
};

/*************************
 * Utils
 *************************/

export const flexAlignCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const flexColumnGrow = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflowY: "hidden",
};

export const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const inlineText = {
  display: "inline",
  fontSize: 12,
};

export const hideOnMobile = {
  display: { xs: "none", sm: "flex" },
};
