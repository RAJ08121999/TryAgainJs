
export type CourseItem = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
};

export type ApiResponse = {
  data: {
    Development: CourseItem[];
    Business: CourseItem[];
    Design: CourseItem[];
    Lifestyle: CourseItem[];
  };
};
