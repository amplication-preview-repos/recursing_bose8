import { BrandInstance } from "../brandInstance/BrandInstance";
import { Feedback } from "../feedback/Feedback";

export type Presentation = {
  brandInstance?: BrandInstance | null;
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  filePath: string | null;
  id: string;
  updatedAt: Date;
};
