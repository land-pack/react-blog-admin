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
  DateInput,
  SelectInput,
  CheckboxGroupInput,
  TabbedShowLayout,
  Tab
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import { Redirect } from "react-router";
import { Container, Row, Col, Card, CardHeader } from "shards-react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { CardActions, ShowButton } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import BigDog from "./assets/images/bigdog.jpg";
import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";

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

// export const XPostEdit = props => (
//   <Edit title={<PostTitle />} {...props}>
//     <SimpleForm>
//       <Card small className="mb-4 pt-3">
//         <CardHeader className="border-bottom text-center">
//           <DisabledInput source="id" />
//           <TextInput source="title" />
//           <TextInput source="teaser" />
//         </CardHeader>
//         <LongTextInput source="body" />
//         <DateInput label="Publication date" source="published_at" />

//         <TextInput source="average_note" />
//         <DisabledInput label="Nb views" source="views" />
//       </Card>
//     </SimpleForm>
//   </Edit>
// );

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

// export const PostEdit = props => (
// export default function PostEdit() {
export class PostEdit extends React.Component {
  state = {
    useStyles2: {},
    useStyles: {
      root: {
        flexGrow: 1
      },
      paper: {
        // padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500
      },
      image: {
        width: 128,
        height: 128
      },
      img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
      },
      avatar: {
        margin: 10
      },
      bigAvatar: {
        margin: 1,
        width: 120,
        height: 120
      }
    }
  };
  componentWillMount() {
    this.state.useStyles2 = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500
      },
      image: {
        width: 128,
        height: 128
      },
      img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
      }
    }));
    // this.state.useStyles = this.state.useStyles2();
    console.log("componentWillMount");
  }

  componentDidMount() {
    // console.log(this.state.useStyles2.root);
    console.log("componentDidMount");
  }
  render() {
    // const { props } = { ...useStyles };
    return (
      <Edit
        title={<PostTitle />}
        action={PostEditActions}
        // undoable={false}
        {...this.props}
      >
        <TabbedShowLayout>
          <Tab label="summary">
            <SimpleForm>
              <Grid container justify="left" alignItems="left">
                <Avatar
                  sizes="128"
                  alt="Remy Sharp"
                  src={BigDog}
                  className={this.state.useStyles.avatar}
                />
              </Grid>

              <SelectInput
                source="What do you do?"
                choices={[
                  { id: "programming", name: "Programming" },
                  { id: "UX", name: "UX" },
                  { id: "photography", name: "Photography" }
                ]}
              />

              <CheckboxGroupInput
                label="What should your homepage include?"
                source="wsmhi"
                choices={[
                  { id: "skill", name: "skills" },
                  { id: "edu", name: "education" },
                  { id: "exp", name: "Experience" },
                  { id: "ser", name: "Services" },
                  { id: "por", name: "Portfolio" }
                ]}
              />
              <TextInput source="title" label="How do peope call you?" />

              <TextInput source="teaser" />
            </SimpleForm>
          </Tab>
          <Tab label="Miscellaneous" path="miscellaneous">
            <SimpleForm>
              <h1>Hello </h1>
            </SimpleForm>
          </Tab>
        </TabbedShowLayout>
      </Edit>
    );
  }
}
