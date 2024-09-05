import { PresentationWhereUniqueInput } from "../presentation/PresentationWhereUniqueInput";

export type FeedbackCreateInput = {
  feedbackMessage?: string | null;
  presentation?: PresentationWhereUniqueInput | null;
};
