import { BrandInstanceWhereUniqueInput } from "../brandInstance/BrandInstanceWhereUniqueInput";

export type BrandRuleCreateInput = {
  brandInstance?: BrandInstanceWhereUniqueInput | null;
  ruleDescription?: string | null;
  severity?: "Option1" | null;
};
