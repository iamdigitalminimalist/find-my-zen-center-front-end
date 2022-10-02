import React from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { EventPhoto } from "@/components/event/EventPhoto";
import { Upload } from "@mui/icons-material";
import { flexAlignCenter } from "@/utils/globalStyles";

type EventImageFormProps = {
  photographerName: string | null;
  setPhotographerName: (photographerName: string) => void;
  photographerCreditUrl: string | null;
  setPhotographerCreditUrl: (photographerCreditUrl: string) => void;
  photoSourceName: string | null;
  setPhotoSourceName: (photoSourceName: string) => void;
  photoSourceUrl: string | null;
  setPhotoSourceUrl: (photoSourceUrl: string) => void;
  imagePreview: string | null;
};

export const EventImageFormSection = (props: EventImageFormProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Photo Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerName"
            name="photographerName"
            label="Photographer Name"
            variant="outlined"
            value={props.photographerName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotographerName(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerCreditUrl"
            name="photographerCreditUrl"
            label="Photographer Credit URL"
            variant="outlined"
            value={props.photographerCreditUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotographerCreditUrl(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerCreditUrl"
            name="photographerCreditUrl"
            label="Photo Source Credit"
            variant="outlined"
            value={props.photoSourceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotoSourceName(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="text"
            id="photographerCreditUrl"
            name="photographerCreditUrl"
            label="Photo Source Credit URL"
            variant="outlined"
            value={props.photoSourceUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setPhotoSourceUrl(e.target.value)
            }
            spellCheck="true"
          />
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            mx: "auto",
          }}
        >
          <Container maxWidth="lg">
            {props.imagePreview ? (
              <EventPhoto imageSrc={props.imagePreview} height={200} />
            ) : (
              <Typography>No Image Uploaded</Typography>
            )}
            <Button
              onClick={() => console.log("upload image")}
              size="small"
              variant="contained"
              startIcon={<Upload />}
              color="success"
              sx={{ m: 2 }}
            >
              Upload Image
            </Button>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
