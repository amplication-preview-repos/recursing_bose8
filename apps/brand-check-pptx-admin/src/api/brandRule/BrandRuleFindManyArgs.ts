import { BrandRuleWhereInput } from "./BrandRuleWhereInput";
import { BrandRuleOrderByInput } from "./BrandRuleOrderByInput";

export type BrandRuleFindManyArgs = {
  where?: BrandRuleWhereInput;
  orderBy?: Array<BrandRuleOrderByInput>;
  skip?: number;
  take?: number;
};
