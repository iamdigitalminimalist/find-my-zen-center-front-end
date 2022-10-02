import { Button, Grid, Paper, Typography, Box, useTheme } from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";

type EventHeaderProps = {
  title: string;
  onDelete: (e: React.SyntheticEvent) => void;
};

export const EventHeader = ({ title, onDelete }: EventHeaderProps) => {
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
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ mx: 2 }}>
          <Button
            onClick={onDelete}
            size="small"
            variant="contained"
            startIcon={<Delete />}
            color="error"
            sx={{ m: 1 }}
          >
            Delete
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={<Delete />}
            sx={{ m: 1 }}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
