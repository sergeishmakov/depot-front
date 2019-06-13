import React, { Component } from "react";
import { Header, Main, Title, Link } from "./admin-style";
import UsersList from "../../components/userlist/userlist";
import ProductsList from "../../components/productslist/productslist";

class Admin extends Component {
  state = {
    usersVisible: true,
    productsVisible: false
  };
  handleClick = e => {
    let list = e.currentTarget.name;
    if (list === "users") {
      this.setState({ usersVisible: true, productsVisible: false });
    }
    if (list === "products") {
      this.setState({ usersVisible: false, productsVisible: true });
    }
    if (list === "home") {
      window.location = "/";
    }
  };
  render() {
    const { usersVisible, productsVisible } = this.state;
    return (
      <Main>
        <Title>Admin page</Title>
        <Header>
          <Link name="home" onClick={this.handleClick}>
            Site
          </Link>
          <Link
            activeLink={usersVisible}
            name="users"
            onClick={this.handleClick}
          >
            Users
          </Link>
          <Link
            activeLink={productsVisible}
            name="products"
            onClick={this.handleClick}
          >
            Products
          </Link>
        </Header>
        <hr />
        {usersVisible && <UsersList />}
        {productsVisible && <ProductsList />}
      </Main>
    );
  }
}

export default Admin;
