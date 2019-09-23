import React, { Component } from "react";
import { Title } from "../../../style.js";
import {
  Wrapper,
  ProductsWrapper,
  WrapperProduct,
  Photo,
  Name,
  ReadMore,
  Price,
  SortPanel,
  Label,
  Select
} from "./style-catalog";
import { GET_PRODUCTS } from "../../components/productslist/productslist";
import { Query } from "react-apollo";
import { uniqBy, uniq } from "lodash";

class Catalog extends Component {
  state = {
    category: "all",
    firm: "all",
    price: 1
  };

  categoryChange = e => {
    this.setState({ category: e.currentTarget.value });
  };
  firmChange = e => {
    this.setState({ firm: e.currentTarget.value });
  };

  render() {
    const { category, firm } = this.state;
    return (
      <Wrapper>
        <Title>Catalog</Title>
        <SortPanel>
          <Label>
            Category:
            <Select onChange={this.categoryChange}>
              <option value="all">All</option>
              <Query query={GET_PRODUCTS}>
                {({ loading, error, data }) =>
                  uniqBy(data.getProducts || [], (a, b) => a !== b).map(
                    ({ category }) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    )
                  )
                }
              </Query>
            </Select>
          </Label>
          <Label>
            Firm:
            <Select onChange={this.firmChange}>
              <option value="all">All</option>
              <Query query={GET_PRODUCTS}>
                {({ loading, error, data }) =>
                  uniq(data.getProducts || []).map(({ firm }) => (
                    <option key={firm} value={firm}>
                      {firm}
                    </option>
                  ))
                }
              </Query>
            </Select>
          </Label>
        </SortPanel>
        <ProductsWrapper>
          <Query query={GET_PRODUCTS}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error</p>;
              return data.getProducts
                .filter(product =>
                  category === "all"
                    ? true
                    : product.category === category && firm === "all"
                    ? true
                    : product.firm === firm
                )
                .map(({ id, price, name, photo }) => (
                  <WrapperProduct href={`/depot/product/${id}`} key={id}>
                    <Photo src={photo} />
                    <Name>{name}</Name>
                    <Price>
                      {price
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                      RUB
                    </Price>
                    <ReadMore href={`/depot/product/${id}`}>
                      Read more...
                    </ReadMore>
                  </WrapperProduct>
                ));
            }}
          </Query>
        </ProductsWrapper>
      </Wrapper>
    );
  }
}
export default Catalog;
