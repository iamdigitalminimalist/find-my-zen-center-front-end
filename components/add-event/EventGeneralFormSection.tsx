import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

// Date Picker
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

type EventGeneralFormProps = {
  generalFields: EventGeneralFields;
  setGeneralFields: (generalFields: EventGeneralFields) => void;
};

export const EventGeneralFormSection = ({
  generalFields,
  setGeneralFields,
}: EventGeneralFormProps) => {
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({ ...generalFields, name: e.target.value });
  };

  const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({ ...generalFields, location: e.target.value });
  };

  const onAboutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({ ...generalFields, about: e.target.value });
  };

  const onScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({ ...generalFields, schedule: e.target.value });
  };

  const onAccommodationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({ ...generalFields, accommodation: e.target.value });
  };

  // TODO: figure out how to update a nested object state
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({
      ...generalFields,
      date: {
        ...generalFields.date,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        General Details
      </Typography>
      <Grid container component="form" spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="text"
            id="name"
            name="name"
            label="Event Name"
            variant="outlined"
            value={generalFields.name}
            onChange={onNameChange}
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="location"
            label="Event Location"
            variant="outlined"
            value={generalFields.location}
            onChange={onLocationChange}
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            id="about"
            name="about"
            label="About"
            multiline
            value={generalFields.about}
            onChange={onAboutChange}
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            id="schedule"
            name="schedule"
            label="Schedule"
            multiline
            value={generalFields.schedule}
            onChange={onScheduleChange}
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            id="accommodation"
            name="accommodation"
            label="Accommodation"
            multiline
            value={generalFields.accommodation}
            onChange={onAccommodationChange}
            spellCheck="true"
          />
        </Grid>
        {/*<Grid item xs={12} sm={6}>*/}
        {/*  <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
        {/*    <DateTimePicker*/}
        {/*      type="date"*/}
        {/*      label="Start Date & Time"*/}
        {/*      id="startDate"*/}
        {/*      name="startDate"*/}
        {/*      value={generalFields.date.startDate}*/}
        {/*      onChange={onDateChange}*/}
        {/*      renderInput={(params) => <TextField {...params} fullWidth />}*/}
        {/*    />*/}
        {/*  </LocalizationProvider>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6}>*/}
        {/*  <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
        {/*    <DateTimePicker*/}
        {/*      type="date"*/}
        {/*      label="End Date & Time"*/}
        {/*      id="endDate"*/}
        {/*      name="endDate"*/}
        {/*      value={generalFields.date.endDate}*/}
        {/*      onChange={onDateChange}*/}
        {/*      renderInput={(params) => <TextField {...params} fullWidth />}*/}
        {/*    />*/}
        {/*  </LocalizationProvider>*/}
        {/*</Grid>*/}
      </Grid>
    </>
  );
};
