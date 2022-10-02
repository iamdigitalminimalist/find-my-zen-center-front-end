import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

type EventAddressFormProps = {
  streetOne: string | null;
  setStreetOne: (streetOne: string) => void;
  streetTwo: string | null;
  setStreetTwo: (streetTwo: string) => void;
  city: string | null;
  setCity: (city: string) => void;
  province: string | null;
  setProvince: (province: string) => void;
  zipCode: string | null;
  setZipCode: (zipCode: string) => void;
  country: string | null;
  setCountry: (country: string) => void;
};

export const EventAddressFormSection = (props: EventAddressFormProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Event Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            type="text"
            id="street1"
            name="street1"
            label="Address line 1"
            fullWidth
            variant="outlined"
            value={props.streetOne}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setStreetOne(e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            id="street2"
            name="street2"
            label="Address line 2"
            fullWidth
            variant="outlined"
            value={props.streetTwo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setStreetTwo(e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="outlined"
            value={props.city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setCity(e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            value={props.province}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setProvince(e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            variant="outlined"
            value={props.zipCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setZipCode(e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="outlined"
            value={props.country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setCountry(e.target.value)
            }
          />
        </Grid>
      </Grid>
    </>
  );
};
