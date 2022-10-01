import { Box, Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { PageTitle } from "./PageTitle";
import { useRouter } from "next/router";
import { Hero } from "@/components/Hero";
import { TopAppBar } from "@/components/TopAppBar";

type LayoutProps = {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  title?: string;
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({
  metaTitle,
  metaDescription,
  metaKeywords,
  title,
  children,
}: LayoutProps) => {
  const router = useRouter();
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
      <TopAppBar />
      <Box component="main" sx={{ minHeight: "100vh" }}>
        {title ? <PageTitle title={title} /> : null}
        {router.pathname === "/" ? <Hero /> : null}
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
