import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Description, Photo, ProductWrapper, Title } from "./style-productpage";
import { FirstBlock, SecondBlock, Blocks } from "../../../style";
import { Row } from "../../components/userlist/style-userlist";

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

const ProductPage = id => {
  return (
    <Query query={GET_PRODUCT} variables={{ id: 18 }}>
      {({ loading, error, data }) => {
        let product = data.getProduct;
        if (loading) return null;
        if (error) return `Error! ${error}`;
        return (
          <ProductWrapper>
            <Title>{product.name}</Title>
            <Blocks>
              <FirstBlock>
                <Photo />
              </FirstBlock>
              <SecondBlock>
                {Object.keys(product).forEach(key => (
                  <div>
                    {console.log(key)}
                    {key}: {product[key]}
                  </div>
                ))}
              </SecondBlock>
              <Description />
            </Blocks>
          </ProductWrapper>
        );
      }}
    </Query>
  );
};

export default ProductPage;
