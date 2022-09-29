import { Box, Typography } from "@mui/material";
import { flexAlignCenter } from "../utils/globalStyles";

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Box sx={flexAlignCenter}>
      <Typography variant="h4" component="h2" py={4}>
        {title}
      </Typography>
    </Box>
  );
};
