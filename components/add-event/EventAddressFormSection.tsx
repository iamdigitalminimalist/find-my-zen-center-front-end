import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

type EventAddressFormProps = {
  generalFields: EventGeneralFields;
  setGeneralFields: (generalFiedls: EventGeneralFields) => void;
};

export const EventAddressFormSection = ({
  generalFields,
  setGeneralFields,
}: EventAddressFormProps) => {
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralFields({
      ...generalFields,
      address: { ...generalFields.address, [e.target.name]: e.target.value },
    });
  };

  // const onAddressTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setGeneralFields({
  //     ...generalFields,
  //     address: { ...generalFields.address, [e.target.name]: e.target.value },
  //   });
  // };
  //
  // const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddressFields({ ...addressFields, city: e.target.value });
  // };
  //
  // const onStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddressFields({ ...addressFields, state: e.target.value });
  // };
  //
  // const onZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddressFields({ ...addressFields, zip: e.target.value });
  // };
  //
  // const onCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddressFields({ ...addressFields, country: e.target.value });
  // };

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
            value={generalFields.address.address1}
            onChange={onAddressChange}
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
            value={generalFields.address.address2}
            onChange={onAddressChange}
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
            value={generalFields.address.city}
            onChange={onAddressChange}
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
            value={generalFields.address.state}
            onChange={onAddressChange}
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
            value={generalFields.address.zip}
            onChange={onAddressChange}
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
            value={generalFields.address.country}
            onChange={onAddressChange}
          />
        </Grid>
      </Grid>
    </>
  );
};
