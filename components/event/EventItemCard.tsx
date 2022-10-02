import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
  CardHeader,
} from "@mui/material";
import { CalendarMonth, Place } from "@mui/icons-material";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { useState } from "react";
import { flexAlignCenter } from "@/utils/globalStyles";

type EventItemProps = {
  event: EventType;
};

export const EventItemCard = ({ event }: EventItemProps) => {
  const [readMore, setReadMore] = useState(false);
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, my: 2 }}>
      <CardMedia>
        <Box
          sx={{
            position: "relative",
            height: 200,
          }}
        >
          <Image
            src={
              event.attributes.coverImage.data
                ? event.attributes.coverImage.data.attributes.formats.small.url
                : "/images/move-softly-yoga-vocation-in-sinai-cover-image.jpg"
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </CardMedia>
      <CardHeader
        title={
          <Typography gutterBottom variant="h6" component="h3">
            {event.attributes.name}
          </Typography>
        }
        subheader={
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: 0.5,
              }}
            >
              <CalendarMonth sx={{ height: 22, width: 22 }} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
              >
                {`${format(
                  new Date(event.attributes.date.startDate),
                  "MMM dd"
                )} -
                ${format(new Date(event.attributes.date.endDate), "MMM dd")}`}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place sx={{ height: 22, width: 22 }} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
              >
                {event.attributes.location}
              </Typography>
            </Box>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {readMore
            ? event.attributes.about
            : `${event.attributes.about?.substring(0, 200)}...`}
          <Button size="small" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </Button>
        </Typography>
      </CardContent>
      <CardActions sx={flexAlignCenter}>
        <Button
          variant="contained"
          onClick={() => router.push(`events/${event.attributes.slug}`)}
        >
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};
