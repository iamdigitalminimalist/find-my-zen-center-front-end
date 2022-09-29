import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { CalendarMonth, Place } from "@mui/icons-material";
import { flexAlignCenter } from "@/utils/globalStyles";

type EventItemProps = {
  event: EventType;
};

export const EventItem = ({ event }: EventItemProps) => {
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          my: 3,
        }}
      >
        <CardMedia>
          <Box
            sx={{
              position: "relative",
              width: { xs: 110, sm: 200, md: 300, lg: 400 },
              height: "100%",
            }}
          >
            <Image
              src={event.image.imageUrl}
              alt={event.image.imageAltText}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </CardMedia>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="h3" variant="h5">
              {event.name}
            </Typography>
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
                {event.startDate} - {event.endDate}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place sx={{ height: 22, width: 22 }} />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
              >
                {event.location}
              </Typography>
            </Box>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 3, pb: 2 }}>
            <Link href={`/events/${event.slug}`}>
              <Button variant="contained" size="small">
                More Details
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
