import type { NextPage } from "next";
import { Container, Box, Typography } from "@mui/material";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wellness Events App</title>
        <meta name="description" content="Discover wellness events near you" />
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
          <Typography variant="h4" component="h1" gutterBottom>
            Wellness Events App
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
