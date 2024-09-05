import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BrandRuleService } from "./brandRule.service";
import { BrandRuleControllerBase } from "./base/brandRule.controller.base";

@swagger.ApiTags("brandRules")
@common.Controller("brandRules")
export class BrandRuleController extends BrandRuleControllerBase {
  constructor(protected readonly service: BrandRuleService) {
    super(service);
  }
}
