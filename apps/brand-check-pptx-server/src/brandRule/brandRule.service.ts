import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BrandRuleServiceBase } from "./base/brandRule.service.base";

@Injectable()
export class BrandRuleService extends BrandRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
