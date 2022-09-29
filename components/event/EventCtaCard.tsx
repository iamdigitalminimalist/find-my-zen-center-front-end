import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { CalendarMonth, CreditCard, Place } from "@mui/icons-material";
import { flexAlignCenter } from "@/utils/globalStyles";

type EventCtaCardProps = {
  event: EventType;
};

export const EventCtaCard = ({ event }: EventCtaCardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: { xs: 400, md: 600 },
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        mx: { xs: "auto", md: 2 },
        ml: { md: 2 },
        mb: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
          Would you like to join?
        </Typography>
        <Divider color="gray" sx={{ my: 2 }} />
        <Grid container>
          {event.date ? (
            <>
              <Grid item xs={1}>
                <CalendarMonth sx={{ height: 20, width: 20 }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="subtitle2" color="white" component="p">
                  {event.date?.startDate} - {event.date?.endDate}
                </Typography>
              </Grid>
            </>
          ) : null}
          {event.location ? (
            <>
              <Grid item xs={1}>
                <Place sx={{ height: 20, width: 20 }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="subtitle2" color="white" component="p">
                  {event.location}
                </Typography>
              </Grid>
            </>
          ) : null}
          {event.pricing ? (
            <>
              <Grid item xs={1}>
                <CreditCard sx={{ height: 20, width: 20 }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="subtitle2" color="white" component="p">
                  {event.pricing?.currency === "NIS" ? "₪" : "$"}{" "}
                  {event.pricing?.amount?.toLocaleString("en-US")}
                </Typography>
              </Grid>
            </>
          ) : null}
        </Grid>
        <Divider color="gray" sx={{ mt: 1 }} />
      </CardContent>
      <CardActions sx={flexAlignCenter}>
        <Button variant="outlined" size="medium" sx={{ color: "white", mb: 1 }}>
          Contact The Host
        </Button>
      </CardActions>
    </Card>
  );
};
