import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import { PostEdit, TabbedDatagrid } from "./UserInfo";
import simpleRestProvider from "ra-data-simple-rest";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Example from "./NewPosts";
import ComplexGrid from "./layouts/s";
import Demo from "./demo/ex01";

import styles from "react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();
  // return (
  //   <Admin dataProvider={simpleRestProvider("http://localhost:5000")}>
  //     <Resource
  //       options={{ label: "Resumes" }}
  //       name="posts"
  //       list={TabbedDatagrid}
  //       edit={PostEdit}
  //     />
  //   </Admin>
  // );
  return <SpacingGrid className={classes.root} />;

  // return <ComplexGrid />;
}

export default App;
