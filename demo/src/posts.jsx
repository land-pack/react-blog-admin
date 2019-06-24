// in posts.js
import React from "react";
import {
  List,
  Datagrid,
  Edit,
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

export const PostIcon = BookIcon;

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="published_at" />
      <TextField source="average_note" />
      <TextField source="views" />
      <EditButton basePath="/posts" />
    </Datagrid>
  </List>
);

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

export const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="published_at" />
      <TextField source="average_note" />
      <TextField source="views" />
      <EditButton basePath="/posts" />
    </SimpleForm>
  </Edit>
);
