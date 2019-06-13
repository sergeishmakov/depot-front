import React, { Component } from "react";
import { gql } from "apollo-boost";
import { client } from "../../../index";
import { Wrapper, AddBtn, ProductName, Cell } from "./style-productslist";
import { Row, Select } from "../userlist/style-userlist";
import { Modal } from "react-bootstrap";
import AddForm from "../add-form/add-form.jsx";
import { uniq } from "lodash";

const input = `
  $name: String!
  $instock: Int!
  $photo: String
  $category: String!
  $date: String
  $model: String!
  $firm: String!
  $description: String
`;
const variables = `
name: $name
instock: $instock
photo: $photo
category: $category
date: $date
model: $model
firm: $firm
description: $description
`;

export const GET_PRODUCTS = gql`
  {
    getProducts {
      id
      name
      category
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: Int!, $data: String!) {
    updateProduct(input: { id: $id, data: $status }) {
      id
      data
    }
  }
`;
export const CREATE_PRODUCT = gql`
  mutation createProduct(${input}) {
    createProduct(input: { ${variables} }) {
      id
      name
      instock
      photo
      category
      date
      model
      firm
      description
    }
  }
`;
export const updateProduct = e => {
  const { id, value } = e.currentTarget;
  return client.mutate({
    variables: {
      id: Number(id),
      status: value
    },
    mutation: UPDATE_PRODUCT,
    refetchQueries: [
      {
        query: GET_PRODUCTS
      }
    ]
  });
};
export const createProduct = data => {
  data.instock = Number(data.instock);
  return client.mutate({
    variables: data,
    mutation: CREATE_PRODUCT,
    refetchQueries: [
      {
        query: GET_PRODUCTS
      }
    ]
  });
};

export const getProducts = async () => {
  const res = await client.query({
    query: GET_PRODUCTS
  });
  return res;
};
const handleClick = e => {
  console.log(e.currentTarget.id.split("product")[1]);
};

class ProductsList extends Component {
  state = {
    products: {},
    loading: {},
    error: {},
    show: false,
    categories: [],
    category: ""
  };

  componentWillMount = () => {
    getProducts().then(res => {
      let products = res.data.getProducts;
      this.setState({
        products: res.data.getProducts,
        loading: res.loading,
        error: res.error,
        categories: uniq(products.map(product => product.category)),
        filterCategory: uniq(products.map(product => product.category))[0]
      });
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  addProduct = values => {
    createProduct(values).then(res => {
      this.state.products.push(res.data.createProduct);
      this.setState({ show: false });
    });
  };

  selectChangeHandle = e => {
    this.setState({ filterCategory: e.currentTarget.value });
  };

  render = () => {
    const {
      products,
      loading,
      error,
      show,
      categories,
      filterCategory
    } = this.state;

    return (
      <Wrapper>
        <Modal show={show} onHide={this.handleClose}>
          <AddForm onSubmit={this.addProduct} />
        </Modal>
        <div className="add">
          <AddBtn onClick={this.handleShow}>Add product</AddBtn>
        </div>
        {loading && <Cell>Loading...</Cell>}
        {error && <Cell>Error :(</Cell>}
        {!products.length ? (
          ""
        ) : (
          <div className="listWrapper">
            <Row>
              <Cell headline>Name</Cell>
              <Cell headline>
                Category:{" "}
                <Select onChange={this.selectChangeHandle}>
                  {categories.map((category, i) => (
                    <option key={i} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </Cell>
            </Row>
            {products
              .filter(x => x.category === filterCategory)
              .map(({ id, name }) => (
                <ProductName id={"product" + id} onClick={handleClick} key={id}>
                  {name}
                </ProductName>
              ))}
          </div>
        )}
      </Wrapper>
    );
  };
}
export default ProductsList;
