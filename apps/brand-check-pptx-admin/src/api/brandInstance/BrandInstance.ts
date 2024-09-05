import { BrandRule } from "../brandRule/BrandRule";
import { Presentation } from "../presentation/Presentation";
import { JsonValue } from "type-fest";

export type BrandInstance = {
  brandRules?: Array<BrandRule>;
  createdAt: Date;
  id: string;
  name: string | null;
  presentations?: Array<Presentation>;
  samplePresentation: JsonValue;
  samplePresentations: JsonValue;
  updatedAt: Date;
};
