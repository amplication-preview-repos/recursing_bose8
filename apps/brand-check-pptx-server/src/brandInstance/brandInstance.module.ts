import { Module } from "@nestjs/common";
import { BrandInstanceModuleBase } from "./base/brandInstance.module.base";
import { BrandInstanceService } from "./brandInstance.service";
import { BrandInstanceController } from "./brandInstance.controller";
import { BrandInstanceResolver } from "./brandInstance.resolver";

@Module({
  imports: [BrandInstanceModuleBase],
  controllers: [BrandInstanceController],
  providers: [BrandInstanceService, BrandInstanceResolver],
  exports: [BrandInstanceService],
})
export class BrandInstanceModule {}
