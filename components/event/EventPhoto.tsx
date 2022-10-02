import Image from "next/image";
import { Paper } from "@mui/material";

type EventPhotoProps = {
  imageSrc: string;
  imageAlt?: string;
  height: number;
};

export const EventPhoto = ({ imageSrc, imageAlt, height }: EventPhotoProps) => {
  return (
    <Paper
      elevation={0}
      sx={{ position: "relative", mx: 2, height: { height } }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt ? imageAlt : " "}
        layout="fill"
        objectFit="cover"
      />
    </Paper>
  );
};
