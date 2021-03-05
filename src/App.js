import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetail } from "./actions/authAction";
import Routes from "./routes";
import "./App.css";
import "./styles/index.scss";

class App extends Component {
  componentDidMount() {
    // this.props.getDetail();
  }
  render() {
    const childProps = {};
    return (
      <div className="App">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  details: auth.data,
});

const mapDispatchToProps = (dispatch) => ({
  // getDetail: () => dispatch(getDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);