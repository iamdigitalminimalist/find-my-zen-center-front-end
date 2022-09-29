import { Box, Typography } from "@mui/material";

type TeacherDetailsProps = {
  teachers: TeacherType[];
};

export const TeachersDetails = ({ teachers }: TeacherDetailsProps) => {
  return (
    <Box>
      {teachers.map((teacher: TeacherType) => (
        <Typography key={teacher.id}>{teacher.name}</Typography>
      ))}
    </Box>
  );
};
