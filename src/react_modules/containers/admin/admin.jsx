import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { Header, Main, Title, Link } from "./admin-style";
import { getUsers } from "../../api/usersApi";

class Admin extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    this.setState({ users: getUsers() });
  }

  render() {
    return (
      <Fragment>
        <Header>
          <Link>Site</Link>
          <Link>Users</Link>
          <Link>Products</Link>
        </Header>
        <Main>
          <Title>Admin page</Title>
          ____________________________________
        </Main>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
