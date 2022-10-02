import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

type EventImageFormProps = {
  photographerName: string;
  setPhotographerName: (photographerName: string) => void;
  photographerCreditUrl: string;
  setPhotographerCreditUrl: (photographerCreditUrl: string) => void;
  photoSourceName: string;
  setPhotoSourceName: (photoSourceName: string) => void;
  photoSourceUrl: string;
  setPhotoSourceUrl: (photoSourceUrl: string) => void;
};

export const EventImageFormSection = (props: EventImageFormProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Photo Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerName"
            name="photographerName"
            label="Photographer Name"
            variant="outlined"
            value={props.photographerName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotographerName(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerCreditUrl"
            name="photographerCreditUrl"
            label="Photographer Credit URL"
            variant="outlined"
            value={props.photographerCreditUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotographerCreditUrl(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerCreditUrl"
            name="photographerCreditUrl"
            label="Photo Source Credit"
            variant="outlined"
            value={props.photoSourceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotoSourceName(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerCreditUrl"
            name="photographerCreditUrl"
            label="Photo Source Credit URL"
            variant="outlined"
            value={props.photoSourceUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotoSourceUrl(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
      </Grid>
    </>
  );
};
