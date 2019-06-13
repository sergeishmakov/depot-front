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
import { Error } from "../../components/errorfield/errorfield.js";

const AddForm = ({ onSubmit }) => (
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
            <Select name="category">
              <option />
              <option value="tv">TV</option>
              <option value="smartphones"> Smartphones</option>
              <option value="audio"> Audio</option>
              <option value="computers">Computers and Notebooks </option>
              <option value="photo-video">Photo and video </option>
            </Select>
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
            <Input name="date" type="text" placeholder="Year" />
          </Group>

          <Group>
            <Label>Description:</Label>
            <Input
              name="description"
              type="textarea"
              placeholder="description"
            />
          </Group>

          <Group>
            <Label>Photo:</Label>
            <Input name="photo" type="file" />
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
