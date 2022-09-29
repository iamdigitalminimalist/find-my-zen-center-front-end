import { Box, Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { PageTitle } from "./PageTitle";

type LayoutProps = {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  title?: string;
  children: React.ReactNode;
};

export const Layout = ({
  metaTitle,
  metaDescription,
  metaKeywords,
  title,
  children,
}: LayoutProps) => {
  return (
    <Box>
      <Head>
        <title>{metaTitle ? metaTitle : "Wellness Events App"}</title>
        <meta
          name="description"
          content={
            metaDescription
              ? metaDescription
              : "Learn about wellness events near you"
          }
        />
        <meta
          name="keywords"
          content={
            metaKeywords ? metaKeywords : "wellness, meditation, retreat"
          }
        />
      </Head>
      <Header />
      <Box component="main">
        {title ? <PageTitle title={title} /> : null}
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
