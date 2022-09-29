import type { NextPage } from "next";
import { Container, Box, Typography } from "@mui/material";
import Head from "next/head";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      title="Wellness Events App - Home Page"
      description="Discover wellness events near you"
    >
      <>
        <Typography variant="h4" component="h1" gutterBottom>
          Wellness Events App
        </Typography>
      </>
    </Layout>
  );
};

export default Home;
