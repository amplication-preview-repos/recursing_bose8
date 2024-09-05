import { BrandInstanceWhereUniqueInput } from "../brandInstance/BrandInstanceWhereUniqueInput";

export type BrandRuleUpdateInput = {
  brandInstance?: BrandInstanceWhereUniqueInput | null;
  ruleDescription?: string | null;
  severity?: "Option1" | null;
};
