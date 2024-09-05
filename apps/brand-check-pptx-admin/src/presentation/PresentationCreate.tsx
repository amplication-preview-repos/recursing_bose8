import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BrandInstanceTitle } from "../brandInstance/BrandInstanceTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";

export const PresentationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="brandInstance.id"
          reference="BrandInstance"
          label="brandInstance"
        >
          <SelectInput optionText={BrandInstanceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="feedbacks"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <TextInput label="filePath" source="filePath" />
      </SimpleForm>
    </Create>
  );
};
