import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import { PostEdit, TabbedDatagrid } from "./UserInfo";
import simpleRestProvider from "ra-data-simple-rest";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Example from "./NewPosts";
import ComplexGrid from "./layouts/s";
import Demo from "./ui/ex02";

function App() {
  return (
    <Admin dataProvider={simpleRestProvider("http://localhost:5000")}>
      <Resource
        options={{ label: "Resumes" }}
        name="posts"
        list={TabbedDatagrid}
        edit={PostEdit}
      />
    </Admin>
  );
  // return <Demo />;

  // return <ComplexGrid />;
}

export default App;
