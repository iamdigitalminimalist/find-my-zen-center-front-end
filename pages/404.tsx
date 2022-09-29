import { Layout } from "../components/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Error } from "@mui/icons-material";
import { flexAlignCenter, flexColumnCenter } from "../utils/globalStyles";

const NotFoundPage = () => {
  return (
    <Layout metaTitle="Page Not Found">
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={3}
      >
        <Grid item xs={12}>
          <Box sx={flexAlignCenter}>
            <Error sx={{ height: 50, width: 50 }} />
            <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
              404
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="p">
            Sorry, there is nothing here
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link href="/">
            <Button variant="contained">Got Back Home</Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
