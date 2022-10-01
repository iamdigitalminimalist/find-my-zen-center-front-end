import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

type EventImageFormProps = {
  imageFields: EventImageFields;
  setImageFields: (imageFields: EventImageFields) => void;
};

export const EventImageFormSection = ({
  imageFields,
  setImageFields,
}: EventImageFormProps) => {
  const onPhotographerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFields({ ...imageFields, photographerName: e.target.value });
  };

  const onPhotographerCreditUrlChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImageFields({ ...imageFields, photographerCreditUrl: e.target.value });
  };

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
            value={imageFields.photographerName}
            onChange={onPhotographerNameChange}
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
            value={imageFields.photographerCreditUrl}
            onChange={onPhotographerCreditUrlChange}
            spellCheck="true"
          />
        </Grid>
      </Grid>
    </>
  );
};
