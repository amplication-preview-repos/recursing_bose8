import { BrandRuleListRelationFilter } from "../brandRule/BrandRuleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PresentationListRelationFilter } from "../presentation/PresentationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BrandInstanceWhereInput = {
  brandRules?: BrandRuleListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  presentations?: PresentationListRelationFilter;
  samplePresentation?: JsonFilter;
  samplePresentations?: JsonFilter;
};
