import React, { Component } from "react";
import { connect } from "react-redux";
import { Title, Wrapper } from "../../../style.js";
import { uniq, uniqBy } from "lodash";
import { getCartProducts } from "../../api/usersApi";
import {} from "./style-cart";

class Cart extends Component {
  handleDelete = () => {};

  render() {
    const { users, cart } = this.props;

    return (
      <Wrapper>
        <Title>Cart</Title>
        <table border="1">
          <thead>
            <tr>
              <th align="center" width="100">
                Photo
              </th>
              <th align="center" width="300">
                Name
              </th>
              <th align="center" width="100">
                Price
              </th>
              <th align="center" width="100">
                Count
              </th>
            </tr>
          </thead>
          {cart.map(({ id, photo, name, price, count }) => (
            <tr>
              <td>
                <img width="100px" src={photo} />
              </td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{count}</td>
              <td>
                <button onClick={() => this.handleDelete(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({ users: state.users, cart: state.cart });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
