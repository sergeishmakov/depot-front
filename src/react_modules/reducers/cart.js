import {
  TOCART_SUCCESS,
  TOCART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_FAILURE
} from "../../constants";

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOCART_SUCCESS:
      return [...state, action.payload];

    case TOCART_FAILURE:
      return state;

    case GET_CART_SUCCESS:
      return action.payload;

    case GET_CART_FAILURE:
      return state;

    default:
      return state;
  }
};

export default cart;
