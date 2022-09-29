interface EventType {
  id: string;
  name: string;
  slug: string;
  location: string;
  address?: string;
  locationCode?: string;
  teachers: TeacherType[];
  startDate: string;
  endDate: string;
  time?: string;
  description: string;
  image: ImageType;
}

interface TeacherType {
  id: string;
  name: string;
}

interface ImageType {
  imageUrl: string;
  imageAltText: string;
  imagePhotographerSource: string;
  imagePhotographerCredit: string;
  imageWebsiteSource: string;
  imageWebsiteCredit: string;
}
