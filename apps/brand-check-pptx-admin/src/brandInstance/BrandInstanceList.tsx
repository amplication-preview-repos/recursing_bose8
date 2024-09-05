import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BrandInstanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BrandInstances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="samplePresentation" source="samplePresentation" />
        <TextField label="samplePresentations" source="samplePresentations" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
