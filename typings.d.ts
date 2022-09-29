interface EventType {
  id: string;
  name: string;
  slug: string;
  location: string;
  address?: string;
  locationCode?: string;
  date: {
    startDate: string;
    endDate: string;
    startTime?: string;
  };
  description: string;
  schedule?: string;
  accommodation?: string;
  pricing?: {
    amount?: number;
    currency?: string;
  };
  meals?: string;
  teachers: TeacherType[];
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
