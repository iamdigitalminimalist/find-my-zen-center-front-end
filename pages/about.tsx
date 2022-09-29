import { NextPage } from "next";
import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wellness Events App - About</title>
        <meta
          name="description"
          content="Discover wellness events near you - About Us"
        />
      </Head>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            About
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            This is an app to find a local wellness event
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Version 1.0.0
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
