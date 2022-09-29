import { Box, Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

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
    <Box>
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
      <Header />
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
      <Footer />
    </Box>
  );
};
