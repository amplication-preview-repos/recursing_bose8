import { Module } from "@nestjs/common";
import { BrandRuleModuleBase } from "./base/brandRule.module.base";
import { BrandRuleService } from "./brandRule.service";
import { BrandRuleController } from "./brandRule.controller";
import { BrandRuleResolver } from "./brandRule.resolver";

@Module({
  imports: [BrandRuleModuleBase],
  controllers: [BrandRuleController],
  providers: [BrandRuleService, BrandRuleResolver],
  exports: [BrandRuleService],
})
export class BrandRuleModule {}
