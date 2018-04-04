import React from "react";
import { connect } from "react-redux";

import { Menu, Dropdown, Icon, Card } from "antd";

const LandingPageComponent = ({ user, roles }) => {
  const menu = (
    <Menu>
      {roles.map((role, index) => <Menu.Item key={index}>{role}</Menu.Item>)}
    </Menu>
  );
  return (
    <Card title="Welcome">
      <h1>{user.profile.name}</h1>
      <Dropdown overlay={menu}>
        <span>
          Roles <Icon type="down" />
        </span>
      </Dropdown>
    </Card>
  );
};

const mapStateToProps = state => ({
  user: state.oidc.user,
  roles: state.oidc.roles
});

export const LandingPage = connect(mapStateToProps)(LandingPageComponent);
