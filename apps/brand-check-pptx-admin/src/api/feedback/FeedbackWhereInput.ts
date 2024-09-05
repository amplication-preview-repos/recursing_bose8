import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PresentationWhereUniqueInput } from "../presentation/PresentationWhereUniqueInput";

export type FeedbackWhereInput = {
  feedbackMessage?: StringNullableFilter;
  id?: StringFilter;
  presentation?: PresentationWhereUniqueInput;
};
