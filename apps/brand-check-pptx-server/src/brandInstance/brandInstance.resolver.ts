import * as graphql from "@nestjs/graphql";
import { BrandInstanceResolverBase } from "./base/brandInstance.resolver.base";
import { BrandInstance } from "./base/BrandInstance";
import { BrandInstanceService } from "./brandInstance.service";

@graphql.Resolver(() => BrandInstance)
export class BrandInstanceResolver extends BrandInstanceResolverBase {
  constructor(protected readonly service: BrandInstanceService) {
    super(service);
  }
}
