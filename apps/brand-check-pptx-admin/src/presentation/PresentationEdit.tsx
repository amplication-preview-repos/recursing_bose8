import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BrandInstanceTitle } from "../brandInstance/BrandInstanceTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";

export const PresentationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
