import React from "react";

import "./App.scss";

import { HashRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/Header";
function App() {
  return (
    <HashRouter>
      <Header />
      <div className="App">
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
