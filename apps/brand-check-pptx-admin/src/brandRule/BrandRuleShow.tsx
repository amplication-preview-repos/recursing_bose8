import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BRANDINSTANCE_TITLE_FIELD } from "../brandInstance/BrandInstanceTitle";

export const BrandRuleShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="ID" source="id" />
        <TextField label="ruleDescription" source="ruleDescription" />
        <TextField label="severity" source="severity" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
