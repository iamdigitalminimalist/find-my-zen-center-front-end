import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout
      metaTitle="Wellness Events App - About"
      metaDescription="Discover wellness events near you - About Us"
      title="About"
    >
      <>
        <Typography variant="h6" component="p" gutterBottom>
          This is an app to find a local wellness event
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Version 1.0.0
        </Typography>
      </>
    </Layout>
  );
};

export default About;
