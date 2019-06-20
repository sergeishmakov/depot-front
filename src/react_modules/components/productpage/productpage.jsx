import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import {
  Description,
  ProductWrapper,
  Title,
  BuyBlock,
  BuyBtn,
  Cart
} from "./style-productpage";
import { Photo, NoPhoto } from "../adminproduct/style-product";
import { FirstBlock, SecondBlock, Blocks } from "../../../style";
import { Row } from "../../components/userlist/style-userlist";
import { addToCart } from "../../actions/usersActions";
import { client } from "../../../index";

export const GET_PRODUCT = gql`
  query getProduct($id: Int!) {
    getProduct(id: $id) {
      name
      category
      instock
      price
      description
      model
      firm
      date
      photo
    }
  }
`;
export const getProduct = async id => {
  const res = await client.query({
    query: GET_PRODUCT,
    variables: {
      id: id
    }
  });
  return res;
};

const productId = Number(window.location.href.split("/").pop());

class ProductPage extends Component {
  buyHandle = async () => {
    if (this.props.users.id) {
      await this.props.addToCart(productId, this.props.users.id);
      // this.props.history.push("/depot/cart");
    } else {
      alert("To make a purchase register on the website");
      // this.props.history.push("/depot/register");
    }
  };
  toCartHandle = async () => {
    if (this.props.users.id) {
      await addToCart(productId, this.props.users.id);
    } else {
      this.props.history.push("/depot/register");
    }
  };

  componentWillMount = async () => {
    if (isNaN(productId)) {
      this.props.history.push("/");
    } else {
      let prod = await getProduct(productId);
      if (prod.data.getProduct) {
      } else {
        this.props.history.push("/");
      }
    }
  };

  render() {
    return (
      <Query query={GET_PRODUCT} variables={{ id: productId }}>
        {({ loading, error, data }) => {
          let product = data.getProduct;
          if (loading) return null;
          if (error) return `Error! ${error}`;
          if (data.getProduct) {
            return (
              <ProductWrapper>
                <Title>{product.name}</Title>
                <Blocks>
                  <FirstBlock>
                    {product.photo ? (
                      <Photo src={product.photo} alt="Error" />
                    ) : (
                      <NoPhoto />
                    )}
                  </FirstBlock>
                  <SecondBlock>
                    <span className="title">
                      <b>Firm:</b> {product.firm}{" "}
                    </span>
                    <span className="title">
                      <b>Model:</b> {product.model}
                    </span>
                    <span className="title">
                      <b>Year:</b> {product.date}
                    </span>

                    <span className="title">
                      <b>Category:</b> {product.firm}
                    </span>
                    <span className="title">
                      <b>In stock:</b> {product.instock}
                    </span>
                    <span className="title">
                      <b>Description:</b> {product.description}
                    </span>
                    <BuyBlock>
                      <h2>Buy</h2>
                      <h5>
                        <s>
                          {(product.price * 0.1 + product.price)
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                          RUB
                        </s>
                      </h5>
                      <h2>
                        {product.price
                          .toString()
                          .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                        RUB
                      </h2>
                      <br />
                      <Row>
                        <BuyBtn onClick={this.buyHandle}>Buy</BuyBtn>
                        <Cart onClick={this.toCartHandle}>To cart</Cart>
                      </Row>
                    </BuyBlock>
                  </SecondBlock>
                </Blocks>
                <Description />
              </ProductWrapper>
            );
          } else {
            return null;
          }
        }}
      </Query>
    );
  }
}
const mapStateToProps = state => ({ users: state.users, cart: state.cart });

const mapDispatchToProps = {
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
