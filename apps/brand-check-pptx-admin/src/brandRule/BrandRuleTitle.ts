import { BrandRule as TBrandRule } from "../api/brandRule/BrandRule";

export const BRANDRULE_TITLE_FIELD = "id";

export const BrandRuleTitle = (record: TBrandRule): string => {
  return record.id?.toString() || String(record.id);
};
