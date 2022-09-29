import Image from "next/image";
import { Paper } from "@mui/material";

type EventPhotoProps = {
  imageSrc: string;
  imageAlt: string;
};

export const EventPhoto = ({ imageSrc, imageAlt }: EventPhotoProps) => {
  return (
    <Paper elevation={0} sx={{ position: "relative", height: 600, mx: 2 }}>
      <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
    </Paper>
  );
};
