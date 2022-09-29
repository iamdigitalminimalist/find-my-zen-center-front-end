import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { Layout } from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout
      title="Wellness Events App - About"
      description="Discover wellness events near you - About Us"
    >
      <>
        <Typography variant="h4" component="h2" gutterBottom>
          About
        </Typography>
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
