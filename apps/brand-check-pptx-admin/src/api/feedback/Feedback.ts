import { Presentation } from "../presentation/Presentation";

export type Feedback = {
  createdAt: Date;
  feedbackMessage: string | null;
  id: string;
  presentation?: Presentation | null;
  updatedAt: Date;
};
