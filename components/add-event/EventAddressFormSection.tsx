import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

type EventAddressFormProps = {
  addressFields: EventAddressFields;
  setAddressFields: (addressFields: EventAddressFields) => void;
};

export const EventAddressFormSection = ({
  addressFields,
  setAddressFields,
}: EventAddressFormProps) => {
  const onAddressOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFields({ ...addressFields, address1: e.target.value });
  };

  const onAddressTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFields({ ...addressFields, address2: e.target.value });
  };

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFields({ ...addressFields, city: e.target.value });
  };

  const onStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFields({ ...addressFields, state: e.target.value });
  };

  const onZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFields({ ...addressFields, zip: e.target.value });
  };

  const onCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFields({ ...addressFields, country: e.target.value });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Event Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            type="text"
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            value={addressFields.address1}
            onChange={onAddressOneChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={addressFields.address2}
            onChange={onAddressTwoChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={addressFields.city}
            onChange={onCityChange}
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
            value={addressFields.state}
            onChange={onStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            value={addressFields.zip}
            onChange={onZipChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            value={addressFields.country}
            onChange={onCountryChange}
          />
        </Grid>
      </Grid>
    </>
  );
};
