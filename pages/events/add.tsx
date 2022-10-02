import { Layout } from "@/components/Layout";
import { EventMainForm } from "@/components/add-event/EventMainForm";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useRouter } from "next/router";

export const AddEventPage = () => {
  const router = useRouter();

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
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    coverImageCredits: {
      photographerName: "",
      photographerCreditUrl: "",
      sourceName: "",
      sourceUrl: "",
    },
  });

  const [imageFields, setImageFields] = useState<EventImageFields>({
    photographerName: "",
    photographerCreditUrl: "",
    sourceName: "",
    sourceUrl: "",
  });

  // Validation
  const hasEmptyFields = (values: any) =>
    Object.values(values).some((element) => element === "");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (hasEmptyFields(generalFields)) {
    //   console.log("please fill in all empty fields");
    // }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: generalFields }),
    });

    if (!res.ok) {
      console.error("something went wrong");
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
    }
  };

  return (
    <Layout title="Add Event">
      <Box component="form" onSubmit={handleSubmit}>
        <EventMainForm
          handleSubmit={handleSubmit}
          generalFields={generalFields}
          setGeneralFields={setGeneralFields}
        />
      </Box>
    </Layout>
  );
};

export default AddEventPage;
