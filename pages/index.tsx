import type { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { Box, Typography } from "@mui/material";
import { EventItemCard } from "@/components/event/EventItemCard";

type HomePageProps = {
  events: EventType[];
};

const Home = ({ events }: HomePageProps) => {
  return (
    <Layout
      metaTitle="Wellness Events App - Home Page"
      metaDescription="Discover wellness events near you"
    >
      <Box sx={{ m: 3 }}>
        <Typography variant="h4" component="h2">
          Upcoming Events
        </Typography>
        {events.length !== 0 ? (
          events.map((evt: EventType) => (
            <EventItemCard key={evt.id} event={evt} />
          ))
        ) : (
          <Typography variant="h6" component="h3">
            No Events
          </Typography>
        )}
      </Box>
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

export default Home;
