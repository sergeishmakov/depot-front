import React, { Component } from "react";
import { Form } from "react-final-form";
import { Input, Group, Button, Label, Select } from "../../../style.js";
import {
  WrapperContent,
  Photo,
  PhotoWrap,
  Wrapper,
  NoPhoto
} from "./style-product";
import { FormWrapper } from "../add-form/style-add-form";
import { Row } from "../userlist/style-userlist";
import { FileInput } from "../../containers/editprofile/style-editprofile";

class Product extends Component {
  onSubmit = async values => {
    await this.props.updateHandle(values);
    this.props.handleClose();
  };

  render() {
    const { product } = this.props;
    return (
      <Wrapper>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            name: product.name,
            price: product.price,
            model: product.model,
            firm: product.firm,
            instock: product.instock,
            description: product.description,
            date: product.date
          }}
          render={({ handleSubmit, submitting, invalid }) => (
            <WrapperContent>
              <PhotoWrap>
                {product.photo ? (
                  <Photo src={product.photo} alt="Error" />
                ) : (
                  <NoPhoto />
                )}
                <FileInput
                  type="file"
                  onChange={this.props.hundleLoadImage}
                  accept="image/*"
                />
              </PhotoWrap>
              <FormWrapper onSubmit={handleSubmit}>
                <Group>
                  <Label>Enter name of product:</Label>
                  <Input name="name" type="text" placeholder="Name" required />
                </Group>
                <Group>
                  <Label>Select a category:</Label>
                  <Select
                    dafaultValue={product.category}
                    onChange={this.props.handleChangeSelect}
                    name="category"
                    required
                  >
                    <option value="TV">TV</option>
                    <option value="Smartphones"> Smartphones</option>
                    <option value="Audio"> Audio</option>
                    <option value="Computers and Notebooks">
                      {" "}
                      Computers and Notebooks{" "}
                    </option>
                    <option value="Photo and video"> Photo and video</option>
                  </Select>
                </Group>

                <Group>
                  <Label>Price:</Label>
                  <Input
                    name="price"
                    type="number"
                    placeholder="Price"
                    required
                  />
                </Group>

                <Group>
                  <Label>Model:</Label>
                  <Input
                    name="model"
                    type="text"
                    placeholder="Model"
                    required
                  />
                </Group>

                <Group>
                  <Label>Firm:</Label>
                  <Input name="firm" type="text" placeholder="Firm" required />
                </Group>

                <Group>
                  <Label>Quantity of goods in stock:</Label>
                  <Input
                    name="instock"
                    type="number"
                    placeholder="In stock"
                    required
                  />
                </Group>

                <Group>
                  <Label>Year of issue:</Label>
                  <Input name="date" type="text" placeholder="Year" required />
                </Group>

                <Group>
                  <Label>Description:</Label>
                  <Input
                    name="description"
                    component="textarea"
                    placeholder="description"
                    required
                  />
                </Group>

                <Row>
                  <Button type="submit" disabled={submitting || invalid}>
                    Save
                  </Button>
                  <Button type="button" onClick={this.props.handleClose}>
                    Close
                  </Button>
                </Row>
              </FormWrapper>
            </WrapperContent>
          )}
        />
      </Wrapper>
    );
  }
}

export default Product;
