import React from "react";
import { Form } from "react-final-form";
import {
  Title,
  Input,
  Group,
  Button,
  Wrapper,
  Label,
  Select
} from "../../../style.js";
import { FormWrapper } from "./style-add-form";
import { FileInput } from "../../containers/editprofile/style-editprofile";

const AddForm = ({ handleChangeSelect, handleLoadImage, onSubmit }) => (
  <Wrapper>
    <Title>Add product</Title>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Group>
            <Label>Enter name of product:</Label>
            <Input name="name" type="text" placeholder="Name" required />
          </Group>
          <Group>
            <Label>Select a category:</Label>
            <Select
              onChange={handleChangeSelect}
              component="select"
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
            <Input name="price" type="number" placeholder="Price" required />
          </Group>

          <Group>
            <Label>Model:</Label>
            <Input name="model" type="text" placeholder="Model" required />
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

          <Group>
            <Label>Photo:</Label>
            <FileInput onChange={handleLoadImage} type="file" required />
          </Group>

          <Button type="submit" disabled={submitting || pristine || invalid}>
            Add
          </Button>
        </FormWrapper>
      )}
    />
  </Wrapper>
);

export default AddForm;
