import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Wizard from "./components/Wizard/Wizard";

import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Wizard />
      <Dashboard />
    </div>
  );
}

export default App;
