import { Layout } from "@/components/Layout";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Box } from "@mui/material";
import { ParsedUrlQuery } from "querystring";
import { EventItemPage } from "@/components/event/EventItemPage";

type EventPageProps = {
  event: EventType;
};

interface Params extends ParsedUrlQuery {
  slug: string | "";
}

const EventPage = ({ event }: EventPageProps) => {
  // console.log(event);
  return (
    <Layout>
      <EventItemPage event={event} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/events/`);
  const data = await res.json();
  const events = data.events;

  const paths = events.map((evt: EventType) => ({
    params: { slug: evt.slug },
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
  const res = await fetch(`${process.env.API_URL}/api/events/${slug}`);
  const data = await res.json();
  const event = data.event;

  return {
    props: {
      event: event[0],
    },
    revalidate: 1,
  };
};

export default EventPage;
