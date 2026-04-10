import { StaticImageData } from "next/image";

export interface ICourse {
  id: string;
  name: string;
  description?: string;
  ageRange?: string;
  image: StaticImageData;
}