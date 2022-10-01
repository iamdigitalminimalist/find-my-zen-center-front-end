import type { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import { EventItemCard } from "@/components/event/EventItemCard";

type HomePageProps = {
  events: EventType[];
};

const EventsPage = ({ events }: HomePageProps) => {
  return (
    <Layout
      metaTitle="Wellness Events App - Home Page"
      metaDescription="Discover wellness events near you"
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h4" component="h2">
            Upcoming Events
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {events.length !== 0 ? (
            events.map((evt: EventType) => (
              <EventItemCard key={evt.id} event={evt} />
            ))
          ) : (
            <Typography variant="h6" component="h3">
              No Events
            </Typography>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events/?populate=*`
  );
  const data = await res.json();
  const events = data.data;
  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
