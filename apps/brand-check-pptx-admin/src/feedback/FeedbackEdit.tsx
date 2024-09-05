import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PresentationTitle } from "../presentation/PresentationTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
