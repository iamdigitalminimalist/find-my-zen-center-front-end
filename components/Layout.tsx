import { Box, Container } from "@mui/material";
import Head from "next/head";
import React from "react";

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
};

export const Layout = ({
  title,
  description,
  keywords,
  children,
}: LayoutProps) => {
  return (
    <Container component="div" maxWidth="lg">
      <Head>
        <title>{title ? title : "Wellness Events App"}</title>
        <meta
          name="description"
          content={
            description ? description : "Learn about wellness events near you"
          }
        />
        <meta
          name="keywords"
          content={keywords ? keywords : "wellness, meditation, retreat"}
        />
      </Head>
      <Box
        component="main"
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
