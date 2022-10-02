import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

// Date Picker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

type EventGeneralFormProps = {
  eventName: string;
  setEventName: (eventName: string) => void;
  location: string | null;
  setLocation: (location: string) => void;
  about: string | null;
  setAbout: (about: string) => void;
  accommodation: string | null;
  setAccommodation: (accommodation: string) => void;
  schedule: string | null;
  setSchedule: (schedule: string) => void;
  meals: string | null;
  setMeals: (meals: string) => void;
  startDate: Dayjs | null;
  setStartDate: (startDate: Dayjs | null) => void;
  endDate: Dayjs | null;
  setEndDate: (endDate: Dayjs | null) => void;
};

export const EventGeneralFormSection = (props: EventGeneralFormProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        General Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="text"
            id="name"
            name="name"
            label="Event Title"
            variant="outlined"
            value={props.eventName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setEventName(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="text"
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            value={props.location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setLocation(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            required
            type="text"
            id="about"
            name="about"
            label="About"
            variant="outlined"
            value={props.about}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setAbout(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            required
            type="text"
            id="schedule"
            name="schedule"
            label="Schedule"
            variant="outlined"
            value={props.schedule}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setSchedule(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            required
            type="text"
            id="accommodation"
            name="accommodation"
            label="Accommodation"
            variant="outlined"
            value={props.accommodation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setAccommodation(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            required
            type="text"
            id="meals"
            name="meals"
            label="Meals"
            variant="outlined"
            value={props.meals}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setMeals(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Start Date & Time"
              value={props.startDate}
              onChange={(newValue) => props.setStartDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="End Date & Time"
              value={props.endDate}
              onChange={(newValue) => props.setEndDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
};
