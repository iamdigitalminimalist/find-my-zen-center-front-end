import { Box, Grid } from "@mui/material";
import { AccordionItem } from "@/components/event/AccordionItem";
import { EventCtaCard } from "@/components/event/EventCtaCard";
import { EventHeader } from "@/components/event/EventHeader";
import { EventPhoto } from "@/components/event/EventPhoto";

type EventItemPageProps = {
  event: EventType;
};

export const EventItemPage = ({ event }: EventItemPageProps) => {
  return (
    <Grid container spacing={1} direction="row-reverse">
      <Grid item xs={12}>
        <EventHeader title={event.name} />
      </Grid>

      <Grid item xs={12} md={8}>
        <EventPhoto
          imageSrc={event.image.imageUrl}
          imageAlt={event.image.imageAltText}
        />
        <Box m={2}>
          <AccordionItem detailTopic="About" description={event.description} />
          <AccordionItem detailTopic="Schedule" />
          <AccordionItem detailTopic="Pricing" />
          <AccordionItem detailTopic="Accommodation" />
          <AccordionItem detailTopic="Meals" />
          <AccordionItem detailTopic="Teachers" teachers={event.teachers} />
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <EventCtaCard event={event} />
      </Grid>
    </Grid>
  );
};
