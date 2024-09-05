/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BrandInstanceWhereUniqueInput } from "./BrandInstanceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BrandInstanceUpdateInput } from "./BrandInstanceUpdateInput";

@ArgsType()
class UpdateBrandInstanceArgs {
  @ApiProperty({
    required: true,
    type: () => BrandInstanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandInstanceWhereUniqueInput)
  @Field(() => BrandInstanceWhereUniqueInput, { nullable: false })
  where!: BrandInstanceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BrandInstanceUpdateInput,
  })
  @ValidateNested()
  @Type(() => BrandInstanceUpdateInput)
  @Field(() => BrandInstanceUpdateInput, { nullable: false })
  data!: BrandInstanceUpdateInput;
}

export { UpdateBrandInstanceArgs as UpdateBrandInstanceArgs };
