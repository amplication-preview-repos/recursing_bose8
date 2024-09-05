import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRANDINSTANCE_TITLE_FIELD } from "./BrandInstanceTitle";

export const BrandInstanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="samplePresentation" source="samplePresentation" />
        <TextField label="samplePresentations" source="samplePresentations" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BrandRule"
          target="brandInstanceId"
          label="BrandRules"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="brandInstance"
              source="brandinstance.id"
              reference="BrandInstance"
            >
              <TextField source={BRANDINSTANCE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="ruleDescription" source="ruleDescription" />
            <TextField label="severity" source="severity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Presentation"
          target="brandInstanceId"
          label="Presentations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
