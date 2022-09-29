import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { TeachersDetails } from "./TeachersDetails";

type AccordionItemProps = {
  detailTopic: string;
  description?: string;
  teachers?: TeacherType[];
};

export const AccordionItem = ({
  detailTopic,
  description,
  teachers,
}: AccordionItemProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" component="h3">
          {detailTopic}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" component="p">
          {description ? description : teachers ? null : "Not Available Yet"}
        </Typography>
        {teachers ? <TeachersDetails teachers={teachers} /> : null}
      </AccordionDetails>
    </Accordion>
  );
};
