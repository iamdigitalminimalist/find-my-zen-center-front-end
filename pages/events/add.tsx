import { Layout } from "@/components/Layout";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { EventGeneralFormSection } from "@/components/add-event/EventGeneralFormSection";
import { EventAddressFormSection } from "@/components/add-event/EventAddressFormSection";
import { EventImageFormSection } from "@/components/add-event/EventImageFormSection";
import dayjs, { Dayjs } from "dayjs";
import {
  Button,
  CircularProgress,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { EventGeneralFields } from "../../typings";

const steps = ["Event Details", "Event Address", "Event Photo"];

export const AddEventPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [schedule, setSchedule] = useState("");
  const [meals, setMeals] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(new Date()));

  const [streetOne, setStreetOne] = useState("");
  const [streetTwo, setStreetTwo] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const [photographerName, setPhotographerName] = useState("");
  const [photographerCreditUrl, setPhotographerCreditUrl] = useState("");
  const [photoSourceName, setPhotoSourceName] = useState("");
  const [photoSourceUrl, setPhotoSourceUrl] = useState("");

  const generalFields: EventGeneralFields = {
    name: eventName,
    location: location,
    about: about,
    accommodation: accommodation,
    schedule: schedule,
    meals: meals,
    date: {
      startDate: startDate,
      endDate: endDate,
    },
    address: {
      street1: streetOne,
      street2: streetTwo,
      city: city,
      state: province,
      zip: zipCode,
      country: country,
    },
    coverImageCredits: {
      photographerName: photographerName,
      photographerCreditUrl: photographerCreditUrl,
      sourceName: photoSourceName,
      sourceUrl: photoSourceUrl,
    },
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <EventGeneralFormSection
            eventName={eventName}
            setEventName={setEventName}
            location={location}
            setLocation={setLocation}
            about={about}
            setAbout={setAbout}
            accommodation={accommodation}
            setAccommodation={setAccommodation}
            schedule={schedule}
            setSchedule={setSchedule}
            meals={meals}
            setMeals={setMeals}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        );
      case 1:
        return (
          <EventAddressFormSection
            streetOne={streetOne}
            setStreetOne={setStreetOne}
            streetTwo={streetTwo}
            setStreetTwo={setStreetTwo}
            city={city}
            setCity={setCity}
            province={province}
            setProvince={setProvince}
            zipCode={zipCode}
            setZipCode={setZipCode}
            country={country}
            setCountry={setCountry}
          />
        );
      case 2:
        return (
          <EventImageFormSection
            photographerName={photographerName}
            setPhotographerName={setPhotographerName}
            photographerCreditUrl={photographerCreditUrl}
            setPhotographerCreditUrl={setPhotographerCreditUrl}
            photoSourceName={photoSourceName}
            setPhotoSourceName={setPhotoSourceName}
            photoSourceUrl={photoSourceUrl}
            setPhotoSourceUrl={setPhotoSourceUrl}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  // Validation
  const hasEmptyFields = (values: any) =>
    Object.values(values).some((element) => element === "");

  const handleSubmit = async () => {
    // e.preventDefault();
    // if (hasEmptyFields(generalFields)) {
    //   console.log("please fill in all empty fields");
    // }
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: generalFields }),
    });

    setLoading(false);

    if (!res.ok) {
      console.error("something went wrong");
      console.log(res);
    } else {
      const event = await res.json();
      console.log(event);
      await router.push(`/events/${event.data.attributes.slug}`);
    }
  };

  return (
    <Layout title="Add Event">
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
                      onClick={handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {loading ? <CircularProgress /> : "Submit"}
                    </Button>
                  )}
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </Layout>
  );
};

export default AddEventPage;
