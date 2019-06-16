import React, { Component } from "react";
import { gql } from "apollo-boost";
import { client } from "../../../index";
import {
  Wrapper,
  AddBtn,
  ProductName,
  Cell,
  DeleteButton,
  RowProduct
} from "./style-productslist";
import { Row, Select } from "../userlist/style-userlist";
import AddForm from "../add-form/add-form.jsx";
import Product from "../product/product";
import { uniq } from "lodash";
import Modal from "react-modal";

const input = `
  $name: String!
  $instock: Int!
  $localPhoto: String!
  $localPhotoName: String!
  $category: String!
  $date: String
  $model: String!
  $firm: String!
  $description: String
  $price: Int
`;
const variables = `
name: $name
instock: $instock
localPhoto: $localPhoto
localPhotoName: $localPhotoName
category: $category
date: $date
model: $model
firm: $firm
description: $description
price: $price

`;

export const GET_PRODUCTS = gql`
  {
    getProducts {
      id
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
export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: Int
    $name: String
    $instock: Int
    $localPhoto: String
    $localPhotoName: String
    $category: String
    $date: String
    $model: String
    $firm: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      input: {
        id: $id
        name: $name
        instock: $instock
        category: $category
        date: $date
        model: $model
        firm: $firm
        description: $description
        price: $price
        localPhoto: $localPhoto
        localPhotoName: $localPhotoName
      }
    ) {
      id
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
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export const deleteProduct = id => {
  return client.mutate({
    variables: {
      id: id
    },
    mutation: DELETE_PRODUCT,
    refetchQueries: [
      {
        query: GET_PRODUCTS
      }
    ]
  });
};

export const updateProduct = data => {
  return client.mutate({
    variables: data,
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
  data.price = Number(data.price);
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

class ProductsList extends Component {
  state = {
    products: {},
    loading: {},
    error: {},
    showProduct: false,
    show: false,
    categories: [],
    category: "TV",
    localPhoto: "",
    localPhotoName: "",
    product: {},
    id: {}
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

  handleShowProduct = e => {
    let id = Number(e.currentTarget.id.split("product")[1]);
    let product = this.state.products.find(x => x.id === id);
    this.setState({
      showProduct: true,
      product: product,
      id: id,
      category: product.category
    });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false, showProduct: false });
  };

  addProduct = async values => {
    delete values.photo;
    values.category = await this.state.category;
    values.localPhoto = await this.state.localPhoto;
    values.localPhotoName = await this.state.localPhotoName;
    debugger;
    createProduct(values).then(res => {
      console.log(res.data.createProduct);
      this.state.products.push(res.data.createProduct);
      this.handleClose();
    });
  };
  updateHandle = values => {
    values.category = this.state.category;
    values.localPhoto = this.state.localPhoto;
    values.localPhotoName = this.state.localPhotoName;
    values.id = this.state.id;
    values.instock = Number(values.instock);
    values.price = Number(values.price);
    updateProduct(values).then(res => {
      if (res) {
        window.reload();
      }
    });
  };
  handleDelete = async id => {
    const isDelete = await window.confirm("Are you sure?");
    if (isDelete) {
      this.setState({ products: this.state.products.filter(x => x.id !== id) });
      await deleteProduct(id);

      this.handleClose();
    }
  };
  handleChangeSelect = e => {
    this.setState({ category: e.currentTarget.value });
  };

  handleLoadImage = async e => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = await (() => {
        return e => {
          this.setState({
            product: { ...this.state.product, photo: e.target.result },
            localPhoto: e.target.result,
            localPhotoName: file.name
          });
        };
      })(file);
      reader.readAsDataURL(file);
    }
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
      filterCategory,
      showProduct,
      product
    } = this.state;

    return (
      <Wrapper>
        <Modal
          style={customStyles}
          isOpen={showProduct}
          onRequestClose={this.handleClose}
          ariaHideApp={false}
        >
          <Product
            handleChangeSelect={this.handleChangeSelect}
            hundleLoadImage={this.handleLoadImage}
            product={product}
            updateHandle={this.updateHandle}
            handleClose={this.handleClose}
          />
        </Modal>

        <Modal
          style={customStyles}
          isOpen={show}
          onRequestClose={this.handleClose}
          ariaHideApp={false}
        >
          <AddForm
            handleChangeSelect={this.handleChangeSelect}
            handleLoadImage={this.handleLoadImage}
            onSubmit={this.addProduct}
          />
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
              .map(({ id, name }, i) => (
                <RowProduct n={i} key={id}>
                  <ProductName
                    id={"product" + id}
                    onClick={this.handleShowProduct}
                  >
                    {name}
                  </ProductName>
                  <DeleteButton onClick={() => this.handleDelete(id)}>
                    Delete
                  </DeleteButton>
                </RowProduct>
              ))}
          </div>
        )}
      </Wrapper>
    );
  };
}
export default ProductsList;
