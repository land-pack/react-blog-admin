// in posts.js
import React from "react";
import {
  List,
  Datagrid,
  Edit,
  Show,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import { Redirect } from "react-router";
import { Container, Row, Col, Card, CardHeader } from "shards-react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { CardActions, ShowButton } from "react-admin";

export const PostIcon = BookIcon;

// export const PostList = props => (
//   <List {...props}>
//     <Datagrid>
//       <TextField source="id" />
//       <TextField source="title" />
//       <DateField source="published_at" />
//       <TextField source="average_note" />
//       <TextField source="views" />
//       <EditButton basePath="/posts" />
//     </Datagrid>
//   </List>
// );

export class TabbedDatagrid extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    return <Redirect to="/posts/1" />;
  }
  render() {
    const { ...props } = this.props;
    // return (
    //   <List {...props}>
    //     <Datagrid>
    //       <TextField source="id" />
    //       <TextField source="title" />
    //       <DateField source="published_at" />
    //       <TextField source="average_note" />
    //       <TextField source="views" />
    //       <EditButton basePath="/posts" />
    //     </Datagrid>
    //   </List>
    // );
    return <Redirect to="/posts/1" />;
  }
}

// export const PostEdit = props => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextField source="id" />
//       <TextField source="title" />
//       <DateField source="published_at" />
//       <TextField source="average_note" />
//       <TextField source="views" />
//       <EditButton basePath="/posts" />
//     </SimpleForm>
//   </Edit>
// );

const PostTitle = ({ record }) => {
  return <span>User {record ? `"${record.title}"` : ""}</span>;
};

export const XPostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <DisabledInput source="id" />
          <TextInput source="title" />
          <TextInput source="teaser" />
        </CardHeader>
        <LongTextInput source="body" />
        <DateInput label="Publication date" source="published_at" />

        <TextInput source="average_note" />
        <DisabledInput label="Nb views" source="views" />
      </Card>
    </SimpleForm>
  </Edit>
);

// const UserEditActions = ({ basePath, data, resource }) => (
//   <CardActions>
//     <ListButton basePath={basePath} />
//     <DeleteButtonWithConfirmation
//       basePath={basePath}
//       record={data}
//       resource={resource}
//       undoable={false}
//     />
//     <RefreshButton />
//   </CardActions>
// );

const PostEditActions = ({ basePath, data, resource }) => (
  <CardActions>
    <ShowButton basePath={basePath} record={data} />
    {/* Add your custom actions */}
    <Button color="primary" onClick="#">
      Custom Action
    </Button>
  </CardActions>
);

console.log(Edit);

export const PostEdit = props => (
  <Edit
    title={<PostTitle />}
    action={PostEditActions}
    // undoable={false}
    {...props}
  >
    <SimpleForm>
      <TextInput source="title" />

      <TextInput source="teaser" />
    </SimpleForm>
  </Edit>
);
