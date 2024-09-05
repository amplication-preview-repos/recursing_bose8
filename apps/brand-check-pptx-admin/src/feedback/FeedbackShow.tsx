import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRESENTATION_TITLE_FIELD } from "../presentation/PresentationTitle";

export const FeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="feedbackMessage" source="feedbackMessage" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="presentation"
          source="presentation.id"
          reference="Presentation"
        >
          <TextField source={PRESENTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
