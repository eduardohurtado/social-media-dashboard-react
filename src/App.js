import React, { Fragment } from "react";
import "./globals.css";
//import "./App.css";
import Header from "./header.js";
import TopCardList from "./top-card-list.js";
import Overview from "./overView.js";
import Switch from "./switch.js";

function App() {
  return (
    <Fragment>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
