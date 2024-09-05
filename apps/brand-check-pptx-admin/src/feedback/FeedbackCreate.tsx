import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PresentationTitle } from "../presentation/PresentationTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feedbackMessage" multiline source="feedbackMessage" />
        <ReferenceInput
          source="presentation.id"
          reference="Presentation"
          label="presentation"
        >
          <SelectInput optionText={PresentationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
