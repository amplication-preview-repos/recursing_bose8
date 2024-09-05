import { BrandInstanceWhereUniqueInput } from "../brandInstance/BrandInstanceWhereUniqueInput";
import { FeedbackUpdateManyWithoutPresentationsInput } from "./FeedbackUpdateManyWithoutPresentationsInput";

export type PresentationUpdateInput = {
  brandInstance?: BrandInstanceWhereUniqueInput | null;
  feedbacks?: FeedbackUpdateManyWithoutPresentationsInput;
  filePath?: string | null;
};
