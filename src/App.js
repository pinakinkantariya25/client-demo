import React, { Component } from "react";
import Routes from "./routes";
import "./App.css";
import "./styles/index.scss";

class App extends Component {
  render() {
    const childProps = {};
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
