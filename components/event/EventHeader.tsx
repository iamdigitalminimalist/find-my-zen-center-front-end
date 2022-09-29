import { Paper, Typography, useTheme } from "@mui/material";

type EventHeaderProps = {
  title: string;
};

export const EventHeader = ({ title }: EventHeaderProps) => {
  const theme = useTheme();
  return (
    <Paper
      component="header"
      elevation={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        borderRadius: 0,
      }}
    >
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
    </Paper>
  );
};
