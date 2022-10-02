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
import { EventGeneralFields, EventType } from "../../../typings";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: number | string | undefined;
}

type EditEventPageProps = {
  event: EventType;
};

const steps = ["Event Details", "Event Address", "Event Photo"];

const EditEventPage = ({ event }: EditEventPageProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [eventName, setEventName] = useState<string>(event.attributes.name);
  const [location, setLocation] = useState<string>(event.attributes.location);
  const [about, setAbout] = useState<string>(event.attributes.about);
  const [accommodation, setAccommodation] = useState<string>(
    event.attributes.accommodation
  );
  const [schedule, setSchedule] = useState<string>(event.attributes.schedule);
  const [meals, setMeals] = useState<string>(event.attributes.meals);
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(event.attributes.date.startDate)
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs(event.attributes.date.endDate)
  );

  const [streetOne, setStreetOne] = useState<string | null>(
    event.attributes.address.street1
  );
  const [streetTwo, setStreetTwo] = useState<string | null>(
    event.attributes.address.street2
  );
  const [city, setCity] = useState<string | null>(
    event.attributes.address?.city
  );
  const [province, setProvince] = useState<string | null>(
    event.attributes.address?.state
  );
  const [zipCode, setZipCode] = useState<string | null>(
    event.attributes.address?.zip
  );
  const [country, setCountry] = useState<string | null>(
    event.attributes.address?.country
  );

  const [photographerName, setPhotographerName] = useState<string | null>(
    event.attributes.coverImageCredits.photographerName
  );
  const [photographerCreditUrl, setPhotographerCreditUrl] = useState<
    string | null
  >(event.attributes.coverImageCredits.photographerCreditUrl);
  const [photoSourceName, setPhotoSourceName] = useState<string | null>(
    event.attributes.coverImageCredits.sourceName
  );
  const [photoSourceUrl, setPhotoSourceUrl] = useState<string | null>(
    event.attributes.coverImageCredits.sourceUrl
  );
  const [imagePreview, setImagePreview] = useState<string | null>(
    event.attributes.coverImage
      ? event.attributes.coverImage.data.attributes.formats.small.url
      : null
  );

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
            imagePreview={imagePreview}
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

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: generalFields }),
      }
    );

    if (!res.ok) {
      console.error("something went wrong");
      setLoading(false);
    } else {
      const event = await res.json();
      await router.push(`/events/${event.data.attributes.slug}`);
    }
    setLoading(false);
  };

  return (
    <Layout title="Edit Event">
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
                      {loading ? (
                        <CircularProgress size={20} sx={{ color: "white" }} />
                      ) : (
                        "Update"
                      )}
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

export const getServerSideProps: GetServerSideProps<
  EditEventPageProps | Params
> = async (context) => {
  const params = context.params!;
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}?populate=*`
  );
  const data = await res.json();
  const event = data.data;
  return {
    props: {
      event,
    },
  };
};

export default EditEventPage;
