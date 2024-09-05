import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BrandInstanceService } from "./brandInstance.service";
import { BrandInstanceControllerBase } from "./base/brandInstance.controller.base";

@swagger.ApiTags("brandInstances")
@common.Controller("brandInstances")
export class BrandInstanceController extends BrandInstanceControllerBase {
  constructor(protected readonly service: BrandInstanceService) {
    super(service);
  }
}
