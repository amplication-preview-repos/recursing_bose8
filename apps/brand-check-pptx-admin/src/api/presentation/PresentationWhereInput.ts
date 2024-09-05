import { BrandInstanceWhereUniqueInput } from "../brandInstance/BrandInstanceWhereUniqueInput";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PresentationWhereInput = {
  brandInstance?: BrandInstanceWhereUniqueInput;
  feedbacks?: FeedbackListRelationFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
};
