/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BrandRuleCreateNestedManyWithoutBrandInstancesInput } from "./BrandRuleCreateNestedManyWithoutBrandInstancesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PresentationCreateNestedManyWithoutBrandInstancesInput } from "./PresentationCreateNestedManyWithoutBrandInstancesInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class BrandInstanceCreateInput {
  @ApiProperty({
    required: false,
    type: () => BrandRuleCreateNestedManyWithoutBrandInstancesInput,
  })
  @ValidateNested()
  @Type(() => BrandRuleCreateNestedManyWithoutBrandInstancesInput)
  @IsOptional()
  @Field(() => BrandRuleCreateNestedManyWithoutBrandInstancesInput, {
    nullable: true,
  })
  brandRules?: BrandRuleCreateNestedManyWithoutBrandInstancesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PresentationCreateNestedManyWithoutBrandInstancesInput,
  })
  @ValidateNested()
  @Type(() => PresentationCreateNestedManyWithoutBrandInstancesInput)
  @IsOptional()
  @Field(() => PresentationCreateNestedManyWithoutBrandInstancesInput, {
    nullable: true,
  })
  presentations?: PresentationCreateNestedManyWithoutBrandInstancesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  samplePresentation?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  samplePresentations?: InputJsonValue;
}

export { BrandInstanceCreateInput as BrandInstanceCreateInput };
