import { Layout } from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { EventType } from "../../typings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { EventHeader } from "@/components/event/EventHeader";
import { EventPhoto } from "@/components/event/EventPhoto";
import { AccordionItem } from "@/components/event/AccordionItem";
import { EventCtaCard } from "@/components/event/EventCtaCard";
import React from "react";

type EventPageProps = {
  event: EventType;
};

interface Params extends ParsedUrlQuery {
  slug: string | "";
}

const EventPage = ({ event }: EventPageProps) => {
  const router = useRouter();
  const handleDeleteEvent = async (e: React.SyntheticEvent) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${event.id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        await router.push("/events");
      }
    }
  };
  return (
    <Layout>
      <Grid container spacing={1} direction="row-reverse">
        <ToastContainer />
        <Grid item xs={12}>
          <EventHeader
            title={event.attributes.name}
            onDelete={handleDeleteEvent}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <EventPhoto
            imageSrc={
              event.attributes.coverImage.data
                ? event.attributes.coverImage.data.attributes.formats.large.url
                : "/images/move-softly-yoga-vocation-in-sinai-cover-image.jpg"
            }
            imageAlt=""
          />
          <Box m={2}>
            <AccordionItem
              detailTopic="About"
              description={event.attributes.about}
            />
            <AccordionItem
              detailTopic="Schedule"
              description={event.attributes.schedule}
            />
            <AccordionItem detailTopic="Pricing" />
            <AccordionItem
              detailTopic="Accommodation"
              description={event.attributes.accommodation}
            />
            <AccordionItem
              detailTopic="Meals"
              description={event.attributes.meals}
            />
            <AccordionItem
              detailTopic="Teachers"
              teachers={event.attributes.teachers.data}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <EventCtaCard event={event} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events/?populate=*`
  );
  const data = await res.json();
  const events = data.data;

  const paths = events.map((evt: EventType) => ({
    params: { slug: evt.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<EventPageProps | Params> = async (
  context
) => {
  const params = context.params!;
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events?filters[slug]slug=${slug}&populate=*`
  );
  const data = await res.json();
  const event = data.data;

  return {
    props: {
      event: event[0],
    },
    revalidate: 1,
  };
};

export default EventPage;
