import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Main />
        </HashRouter>
      </div>
    );
  }
}

export default App;
