import { BrandInstanceWhereUniqueInput } from "../brandInstance/BrandInstanceWhereUniqueInput";
import { FeedbackCreateNestedManyWithoutPresentationsInput } from "./FeedbackCreateNestedManyWithoutPresentationsInput";

export type PresentationCreateInput = {
  brandInstance?: BrandInstanceWhereUniqueInput | null;
  feedbacks?: FeedbackCreateNestedManyWithoutPresentationsInput;
  filePath?: string | null;
};
