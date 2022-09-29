import theme from "@/utils/theme";

export const heroBackground = {
  backgroundImage: `url(/erol-ahmed-aIYFR0vbADk-unsplash.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 300,
};

export const heroTitle = {
  my: { xs: 6, sm: 12 },
  color: "white",
  textAlign: "center",
  fontWeight: 600,
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
};

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
  alignItems: "center",
};

export const inlineText = {
  display: "inline",
  fontSize: 12,
};

export const hideOnMobile = {
  display: { xs: "none", sm: "flex" },
};
