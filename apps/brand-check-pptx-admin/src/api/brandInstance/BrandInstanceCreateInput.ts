import { BrandRuleCreateNestedManyWithoutBrandInstancesInput } from "./BrandRuleCreateNestedManyWithoutBrandInstancesInput";
import { PresentationCreateNestedManyWithoutBrandInstancesInput } from "./PresentationCreateNestedManyWithoutBrandInstancesInput";
import { InputJsonValue } from "../../types";

export type BrandInstanceCreateInput = {
  brandRules?: BrandRuleCreateNestedManyWithoutBrandInstancesInput;
  name?: string | null;
  presentations?: PresentationCreateNestedManyWithoutBrandInstancesInput;
  samplePresentation?: InputJsonValue;
  samplePresentations?: InputJsonValue;
};
