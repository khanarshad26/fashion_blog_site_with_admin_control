import { Card, CardContent, Chip, Typography } from "@mui/material";

const EventCard = ({event}) => {
    console.log('event', event);
    return(
      <>
      <Card sx={{ maxWidth: 375, minWidth: 250, m: 1 }}>
      <CardContent>
        <Chip label={event.startDate.toDateString()} />
        <Typography variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event.summary}
        </Typography>
        <Typography variant="body2">
          {event.material}
          <br />
        </Typography>
      </CardContent>
      </Card>
      </>
    )
  };

  export default EventCard;