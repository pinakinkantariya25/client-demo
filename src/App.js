import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetail } from "./actions/authAction";
import Routes from "./routes";
import "./App.css";
import "./styles/index.scss";

class App extends Component {
  render() {
    const childProps = {};
    return (
      <div className="App">
        <Routes userId={this.props.userId} childProps={childProps} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  userId: auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);