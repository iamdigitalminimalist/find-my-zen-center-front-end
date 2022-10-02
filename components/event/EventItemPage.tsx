import { Box, Grid } from "@mui/material";
import { AccordionItem } from "@/components/event/AccordionItem";
import { EventCtaCard } from "@/components/event/EventCtaCard";
import { EventHeader } from "@/components/event/EventHeader";
import { EventPhoto } from "@/components/event/EventPhoto";
import { EventType } from "../../typings";

type EventItemPageProps = {
  event: EventType;
};

export const EventItemPage = ({ event }: EventItemPageProps) => {
  return (
    <Grid container spacing={1} direction="row-reverse">
      <Grid item xs={12}>
        <EventHeader title={event.attributes.name} />
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
  );
};
