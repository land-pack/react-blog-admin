import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, TabbedDatagrid } from "./posts";
import simpleRestProvider from "ra-data-simple-rest";

function App() {
  return (
    <Admin dataProvider={simpleRestProvider("http://localhost:5000")}>
      <Resource name="posts" list={TabbedDatagrid} edit={PostEdit} />
    </Admin>
  );
}

export default App;
