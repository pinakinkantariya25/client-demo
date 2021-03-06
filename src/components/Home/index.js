import React, { Component } from "react";

import Logo from "../../images/logo.svg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authAction";
import "./index.scss";

class Home extends Component {
  state = {
    open: true,
  };
  render() {
    return (
      <section className="site-wapper">
        <nav className={`site-nav ${this.state.open === true ? "open" : ""}`}>
          <div className="inner-nav">
            <div className="company-logo">
              <div className="pic">
                <img src={Logo} alt="logo" />
              </div>
            </div>
            <div className="profile">
              <span className="pic">
                <i className="icon-user-management"></i>
              </span>
              <span className="name">Mark Zuckerberg</span>
            </div>

            <ul className="menu-list">
              <li>
                <NavLink to="/user-management" exact>
                  <button>
                    <span className="icn-img">
                      <i className="icon-user"></i>
                    </span>
                    <span className="text">User Management</span>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/lender-management" exact>
                  <button>
                    <span className="icn-img">
                      <i className="icon-lander-management"></i>
                    </span>
                    <span className="text">Lender Management</span>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/call-configuration" exact>
                  <button>
                    <span className="icn-img">
                      <i className="icon-call-configuration"></i>
                    </span>
                    <span className="text">Call Configuration</span>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" activeClassName="active">
                  <button>
                    <span className="icn-img">
                      <i className="icon-profile-settings"></i>
                    </span>
                    <span className="text">Profile</span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sign-out">
            <button>
              <i className="icon-signout"></i>
              <div
                onClick={() => this.props.signOut()}
                className="sign-out-text"
              >
                Sign Out
              </div>
            </button>
          </div>
        </nav>
        <main className="site-content">
          <header className="top-header">
            <div className="toggle-icon">
              <button onClick={() => this.setState({ open: !this.state.open })}>
                <i className="icon-hamburger-menu"></i>
              </button>
            </div>
          </header>
          {this.props.children}
        </main>
      </section>
    );
  }
}

export default connect(null, { signOut })(Home);
