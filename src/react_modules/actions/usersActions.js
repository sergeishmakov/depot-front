import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  AUTENTICATE_USER_SUCCESS,
  AUTENTICATE_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  TOCART_SUCCESS,
  TOCART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_FAILURE
} from "../../constants";
import {
  userCreateApi,
  authorizationApi,
  autenticateApi,
  logOutApi,
  saveChangesApi,
  addToCartApi,
  getCartApi
} from "../api/usersApi";

export const addUser = data => async dispatch => {
  const [user, created] = await userCreateApi(data);
  if (created) {
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: user
    });
  } else {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: {
        error: true,
        message: "User alredy exist"
      }
    });
  }
  return created;
};
export const authorizationUser = data => async dispatch => {
  const [err, user, message] = await authorizationApi(data);
  if (user) {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  } else {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: {
        error: err,
        message: message
      }
    });
  }

  return { error: err, user: user, message: message };
};

export const autenticateUser = () => async dispatch => {
  const user = await autenticateApi();
  if (user) {
    dispatch({
      type: AUTENTICATE_USER_SUCCESS,
      payload: user
    });
  } else {
    dispatch({
      type: AUTENTICATE_USER_FAILURE,
      payload: []
    });
  }
};

export const logoutUser = () => async dispatch => {
  const res = await logOutApi();
  if (res) {
    dispatch({
      type: LOGOUT_USER_SUCCESS,
      payload: []
    });
  } else {
    dispatch({
      type: LOGOUT_USER_FAILURE,
      payload: []
    });
  }
};

export const saveChanges = data => async dispatch => {
  const status = await saveChangesApi(data);
  if (status) {
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data
    });
  } else {
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: null
    });
  }
  return status;
};

export const addToCart = (productId, userId) => async dispatch => {
  const status = await addToCartApi(productId, userId);
  if (status) {
    dispatch({
      type: TOCART_SUCCESS,
      payload: productId
    });
  } else {
    dispatch({
      type: TOCART_FAILURE,
      payload: null
    });
  }
  return status;
};

export const getCart = () => async dispatch => {
  const cart = await getCartApi();
  if (cart) {
    dispatch({
      type: GET_CART_SUCCESS,
      payload: cart.data
    });
  } else {
    dispatch({
      type: GET_CART_FAILURE,
      payload: null
    });
  }
  return cart;
};
