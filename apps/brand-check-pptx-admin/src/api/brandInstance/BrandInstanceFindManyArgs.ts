import { BrandInstanceWhereInput } from "./BrandInstanceWhereInput";
import { BrandInstanceOrderByInput } from "./BrandInstanceOrderByInput";

export type BrandInstanceFindManyArgs = {
  where?: BrandInstanceWhereInput;
  orderBy?: Array<BrandInstanceOrderByInput>;
  skip?: number;
  take?: number;
};
