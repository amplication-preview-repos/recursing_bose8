import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRESENTATION_TITLE_FIELD } from "./PresentationTitle";
import { BRANDINSTANCE_TITLE_FIELD } from "../brandInstance/BrandInstanceTitle";

export const PresentationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="brandInstance"
          source="brandinstance.id"
          reference="BrandInstance"
        >
          <TextField source={BRANDINSTANCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Feedback"
          target="presentationId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
