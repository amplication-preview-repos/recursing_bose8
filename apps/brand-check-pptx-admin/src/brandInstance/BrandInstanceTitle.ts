import { BrandInstance as TBrandInstance } from "../api/brandInstance/BrandInstance";

export const BRANDINSTANCE_TITLE_FIELD = "name";

export const BrandInstanceTitle = (record: TBrandInstance): string => {
  return record.name?.toString() || String(record.id);
};
