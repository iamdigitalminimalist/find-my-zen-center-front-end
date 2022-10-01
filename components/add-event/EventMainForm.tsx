import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Step,
} from "@mui/material";
import React, { useState } from "react";
import { EventAddressFormSection } from "@/components/add-event/EventAddressFormSection";
import { EventGeneralFormSection } from "@/components/add-event/EventGeneralFormSection";
import { EventImageFormSection } from "@/components/add-event/EventImageFormSection";

const steps = ["Event Details", "Event Address", "Review your order"];

export const EventMainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [generalFields, setGeneralFields] = useState<EventGeneralFields>({
    name: "",
    location: "",
    about: "",
    accommodation: "",
    schedule: "",
    date: {
      startDate: null,
      endDate: null,
    },
  });

  const [addressFields, setAddressFields] = useState<EventAddressFields>({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [imageFields, setImageFields] = useState<EventImageFields>({
    photographerName: "",
    photographerCreditUrl: "",
    sourceName: "",
    sourceUrl: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      generalFields,
      addressFields,
      imageFields,
    });
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <EventGeneralFormSection
            generalFields={generalFields}
            setGeneralFields={setGeneralFields}
          />
        );
      case 1:
        return (
          <EventAddressFormSection
            addressFields={addressFields}
            setAddressFields={setAddressFields}
          />
        );
      case 2:
        return (
          <EventImageFormSection
            imageFields={imageFields}
            setImageFields={setImageFields}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <>
              <Box component="form" onSubmit={handleSubmit}>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {activeStep < steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Submit
                    </Button>
                  )}
                </Box>
              </Box>
            </>
          )}
        </>
      </Paper>
    </Container>
  );
};
