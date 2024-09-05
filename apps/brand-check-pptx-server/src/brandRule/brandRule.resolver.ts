import * as graphql from "@nestjs/graphql";
import { BrandRuleResolverBase } from "./base/brandRule.resolver.base";
import { BrandRule } from "./base/BrandRule";
import { BrandRuleService } from "./brandRule.service";

@graphql.Resolver(() => BrandRule)
export class BrandRuleResolver extends BrandRuleResolverBase {
  constructor(protected readonly service: BrandRuleService) {
    super(service);
  }
}
