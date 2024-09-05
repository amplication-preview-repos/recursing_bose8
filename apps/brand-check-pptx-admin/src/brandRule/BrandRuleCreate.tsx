import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BrandInstanceTitle } from "../brandInstance/BrandInstanceTitle";

export const BrandRuleCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="ruleDescription" multiline source="ruleDescription" />
        <SelectInput
          source="severity"
          label="severity"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
