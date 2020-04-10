import React from "react";

import "./App.scss";

import { HashRouter } from "react-router-dom";
import Routes from "./routes";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
