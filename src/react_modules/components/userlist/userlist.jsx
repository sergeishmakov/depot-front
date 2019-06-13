import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { client } from "../../../index";
import { Select, Button, Option, Row, Cell, Wrapper } from "./style-userlist";

export const GET_USERS = gql`
  {
    getUsers {
      id
      email
      status
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser($id: Int!) {
    deleteUser(id: $id)
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($id: Int!, $status: String!) {
    updateUser(input: { id: $id, status: $status }) {
      id
      status
    }
  }
`;
export const updateUser = e => {
  const { id, value } = e.currentTarget;
  return client.mutate({
    variables: {
      id: Number(id),
      status: value
    },
    mutation: UPDATE_USER,
    refetchQueries: [
      {
        query: GET_USERS
      }
    ]
  });
};

export const deleteUser = id => {
  return client.mutate({
    variables: {
      id: id
    },
    mutation: DELETE_USER,
    refetchQueries: [
      {
        query: GET_USERS
      }
    ]
  });
};
const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <Row>
            <Cell>Loading...</Cell>
          </Row>
        );
      if (error)
        return (
          <Row>
            <Cell>Error :(</Cell>
          </Row>
        );

      return (
        <Wrapper>
          <Row>
            <Cell uid headline>
              ID
            </Cell>
            <Cell email headline>
              Email
            </Cell>
            <Cell headline>Status</Cell>
            <Cell headline>Deletion</Cell>
          </Row>
          {data.getUsers.map(({ id, email, status }) => (
            <Row key={id}>
              <Cell uid>{id}</Cell>
              <Cell email>{email}</Cell>
              <Cell>
                <Select id={id} defaultValue={status} onChange={updateUser}>
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                  <Option value="moderator">Moderator</Option>
                </Select>
              </Cell>
              <Cell className="def">
                <Button onClick={() => deleteUser(id)}>Delete</Button>
              </Cell>
            </Row>
          ))}
        </Wrapper>
      );
    }}
  </Query>
);
export default UsersList;
