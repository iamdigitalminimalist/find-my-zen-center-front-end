import { Layout } from "@/components/Layout";
import { EventMainForm } from "@/components/add-event/EventMainForm";

export const AddEventPage = () => {
  return (
    <Layout title="Add Event">
      <EventMainForm />
    </Layout>
  );
};

export default AddEventPage;
