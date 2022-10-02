import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

type EventImageFormProps = {
  generalFields: EventGeneralFields;
  setGeneralFields: (generalFields: EventGeneralFields) => void;
};

export const EventImageFormSection = ({
  generalFields,
  setGeneralFields,
}: EventImageFormProps) => {
  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({
      ...generalFields,
      coverImageCredits: {
        ...generalFields.coverImageCredits,
        [e.target.name]: e.target.value,
      },
    });
  };

  // const onPhotographerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setImageFields({ ...imageFields, photographerName: e.target.value });
  // };
  //
  // const onPhotographerCreditUrlChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setImageFields({ ...imageFields, photographerCreditUrl: e.target.value });
  // };

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
            value={generalFields.coverImageCredits.photographerName}
            onChange={handeChange}
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
            value={generalFields.coverImageCredits.photographerCreditUrl}
            onChange={handeChange}
            spellCheck="true"
          />
        </Grid>
      </Grid>
    </>
  );
};
