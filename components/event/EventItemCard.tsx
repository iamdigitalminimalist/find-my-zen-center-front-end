import Image from "next/image";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  Button,
  CardActions,
  CardHeader,
  Grid,
} from "@mui/material";
import { CalendarMonth, Place } from "@mui/icons-material";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { flexAlignCenter } from "@/utils/globalStyles";
import { EventType } from "../../typings";

type EventItemProps = {
  event: EventType;
};

export const EventItemCard = ({ event }: EventItemProps) => {
  const router = useRouter();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ width: 345, height: 450, my: 2 }}>
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
                  ? event.attributes.coverImage.data.attributes.formats.small
                      .url
                  : "/images/move-softly-yoga-vocation-in-sinai-cover-image.jpg"
              }
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </CardMedia>
        <CardHeader
          sx={{ height: 175, display: "flex", alignItems: "flex-start" }}
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
                  variant="subtitle2"
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
                  variant="subtitle2"
                  color="text.secondary"
                  component="p"
                >
                  {event.attributes.location}
                </Typography>
              </Box>
            </>
          }
        />
        <CardActions sx={flexAlignCenter}>
          <Button
            variant="contained"
            onClick={() => router.push(`events/${event.attributes.slug}`)}
          >
            More Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
