import { Dayjs } from "dayjs";

interface StrapiDefaultAttributes {
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface EventType extends StrapiDefaultAttributes {
  id: number;
  attributes: {
    name: string;
    slug: string;
    location: string;
    about: string | null;
    schedule?: string | null;
    accommodation?: string | null;
    meals?: string | null;
    address?: {
      id: number;
      street?: string;
      city?: string;
      state?: string;
      postalCode?: string;
      country: string;
    };
    date: {
      id: number;
      startDate: string;
      endDate: string;
    };
    teachers: {
      data: TeacherType[];
    };
    pricing: Pricing[];
    coverImageCredits: {
      id: number;
      photographerName: string;
      photographerCreditUrl: string;
      sourceName: string;
      sourceUrl: string;
    };
    coverImage: {
      data: CloudinaryImageType;
    };
  };
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

interface TeacherType extends StrapiDefaultAttributes {
  id: number;
  attributes: {
    name: string;
    slug: string;
    about?: string;
  };
}

interface CloudinaryImageSizeVariant {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: 500;
  height: 333;
  size: 25.69;
  url: string;
  provider_metadata: {
    public_id: string;
    resource_type: "image";
  };
}

interface CloudinaryImageType {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: CloudinaryImageSizeVariant;
      small: CloudinaryImageSizeVariant;
      large: CloudinaryImageSizeVariant;
      medium: CloudinaryImageSizeVariant;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: "image";
    };
    createdAt: string;
    updatedAt: string;
  };
}

// interface Pricing {
//   id: number;
//   amount: number;
//   currency: string;
// }

// interface ImageType {
//   imageUrl: string;
//   imageAltText: string;
//   imagePhotographerSource: string;
//   imagePhotographerCredit: string;
//   imageWebsiteSource: string;
//   imageWebsiteCredit: string;
//   event: EventType[];
// }

// Add Event Form Fields

interface EventGeneralFields {
  name: string;
  location: string;
  about: string;
  accommodation: string;
  schedule: string;
  meals: string;
  date: {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
  };
  address: {
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  coverImageCredits: {
    photographerName: string;
    photographerCreditUrl: string;
    sourceName: string;
    sourceUrl: string;
  };
}

interface EventAddressFields {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface EventImageFields {
  photographerName: string;
  photographerCreditUrl: string;
  sourceName: string;
  sourceUrl: string;
}
