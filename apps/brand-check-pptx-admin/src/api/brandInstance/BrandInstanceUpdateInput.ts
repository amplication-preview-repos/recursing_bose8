import { BrandRuleUpdateManyWithoutBrandInstancesInput } from "./BrandRuleUpdateManyWithoutBrandInstancesInput";
import { PresentationUpdateManyWithoutBrandInstancesInput } from "./PresentationUpdateManyWithoutBrandInstancesInput";
import { InputJsonValue } from "../../types";

export type BrandInstanceUpdateInput = {
  brandRules?: BrandRuleUpdateManyWithoutBrandInstancesInput;
  name?: string | null;
  presentations?: PresentationUpdateManyWithoutBrandInstancesInput;
  samplePresentation?: InputJsonValue;
  samplePresentations?: InputJsonValue;
};
