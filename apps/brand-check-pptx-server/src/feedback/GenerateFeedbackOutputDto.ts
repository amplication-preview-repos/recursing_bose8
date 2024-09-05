import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GenerateFeedbackOutputDtoObject")
class GenerateFeedbackOutputDto {
    @Field(() => Boolean)
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    success!: boolean;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    feedbackMessages!: string;
}

export { GenerateFeedbackOutputDto as GenerateFeedbackOutputDto };