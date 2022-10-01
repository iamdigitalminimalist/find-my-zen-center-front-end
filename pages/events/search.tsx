import { Layout } from "@/components/Layout";
import { Button, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { EventItemCard } from "@/components/event/EventItemCard";
import qs from "qs";
import { useRouter } from "next/router";

type SearchPageProps = {
  events: EventType[];
};

export const SearchPage = ({ events }: SearchPageProps) => {
  const router = useRouter();
  return (
    <Layout>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h4" component="h2">
            {`Search Results for ${router.query.term}`}
          </Typography>
          <Button onClick={() => router.back()}>Go back</Button>
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

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({
  query: { term },
}) => {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $contains: term,
            },
          },
          {
            location: {
              $contains: term,
            },
          },
          {
            about: {
              $contains: term,
            },
          },
        ],
      },
    },
    {
      encode: false,
    }
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events?${query}&populate=*`
  );
  const data = await res.json();
  const events = data.data;

  return {
    props: {
      events,
    },
  };
};

export default SearchPage;
