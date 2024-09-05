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
import { BrandRuleWhereInput } from "./BrandRuleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BrandRuleOrderByInput } from "./BrandRuleOrderByInput";

@ArgsType()
class BrandRuleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BrandRuleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BrandRuleWhereInput, { nullable: true })
  @Type(() => BrandRuleWhereInput)
  where?: BrandRuleWhereInput;

  @ApiProperty({
    required: false,
    type: [BrandRuleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BrandRuleOrderByInput], { nullable: true })
  @Type(() => BrandRuleOrderByInput)
  orderBy?: Array<BrandRuleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BrandRuleFindManyArgs as BrandRuleFindManyArgs };
