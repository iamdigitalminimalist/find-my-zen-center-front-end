import { Box, Paper, Typography } from "@mui/material";
import {
  flexAlignCenter,
  heroBackground,
  heroTitle,
} from "@/utils/globalStyles";

export const Hero = () => {
  return (
    <Paper sx={heroBackground}>
      <Box sx={flexAlignCenter}>
        <Typography variant="h2" component="h1" color="white" sx={heroTitle}>
          Welcome to Wellness Events
        </Typography>
      </Box>
    </Paper>
  );
};
