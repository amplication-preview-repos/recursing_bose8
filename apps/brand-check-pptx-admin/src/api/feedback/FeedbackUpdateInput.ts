import { PresentationWhereUniqueInput } from "../presentation/PresentationWhereUniqueInput";

export type FeedbackUpdateInput = {
  feedbackMessage?: string | null;
  presentation?: PresentationWhereUniqueInput | null;
};
