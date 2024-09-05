import { BrandInstanceWhereUniqueInput } from "../brandInstance/BrandInstanceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BrandRuleWhereInput = {
  brandInstance?: BrandInstanceWhereUniqueInput;
  id?: StringFilter;
  ruleDescription?: StringNullableFilter;
  severity?: "Option1";
};
