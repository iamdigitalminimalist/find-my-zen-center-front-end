import { NextPage } from "next";
import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import { Layout } from "../../components/Layout";

const Events: NextPage = () => {
  return (
    <Layout title="Events Page">
      <>
        <Typography variant="h6" component="p" gutterBottom>
          List of events
        </Typography>
      </>
    </Layout>
  );
};

export default Events;
