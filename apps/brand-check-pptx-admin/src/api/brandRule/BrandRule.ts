import { BrandInstance } from "../brandInstance/BrandInstance";

export type BrandRule = {
  brandInstance?: BrandInstance | null;
  createdAt: Date;
  id: string;
  ruleDescription: string | null;
  severity?: "Option1" | null;
  updatedAt: Date;
};
