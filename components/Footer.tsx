import { Box, Container, Grid } from "@mui/material";
import theme from "../utils/theme";
import Link from "next/link";
import { footerLink } from "../utils/globalStyles";

const navItems = [
  {
    id: "1",
    title: "Contact",
    href: "/contact",
    section: "help",
  },
  {
    id: "2",
    title: "Privacy Policy",
    href: "/privacy",
    section: "help",
  },
  {
    id: "3",
    title: "Login",
    href: "/login",
    section: "account",
  },
  {
    id: "4",
    title: "Register",
    href: "/register",
    section: "account",
  },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor={theme.palette.primary.light}
      color={theme.palette.primary.contrastText}
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 8 }}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={{ xs: 5, sm: 10 }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box borderBottom={1} sx={{ fontWeight: 600 }}>
              Help
            </Box>
            {navItems
              .filter((nav) => nav.section === "help")
              .map((nav) => (
                <Link key={nav.id} href={nav.href}>
                  <Box component="a" sx={footerLink}>
                    {nav.title}
                  </Box>
                </Link>
              ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box borderBottom={1} sx={{ fontWeight: 600 }}>
              Account
            </Box>
            {navItems
              .filter((nav) => nav.section === "account")
              .map((nav) => (
                <Link key={nav.id} href={nav.href}>
                  <Box component="a" sx={footerLink}>
                    {nav.title}
                  </Box>
                </Link>
              ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
