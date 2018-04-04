import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const NavHeaderComponent = ({ location }) => (
  <Header style={{ background: "#fff", padding: 0 }}>
    <div className="logo" />
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["/"]}
      selectedKeys={[location.pathname]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="/">
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="/login">
        <NavLink to="/login">Login</NavLink>
      </Menu.Item>
      <Menu.Item key="/counter">
        <NavLink to="/counter">Counter</NavLink>
      </Menu.Item>
    </Menu>
  </Header>
);

const mapStateToProps = state => ({
  location: state.router.location
});

export default connect(mapStateToProps)(NavHeaderComponent);
