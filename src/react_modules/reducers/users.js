import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  AUTENTICATE_USER_SUCCESS,
  AUTENTICATE_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS
} from "../../constants";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.payload;

    case CREATE_USER_FAILURE:
      return action.payload;

    case LOGIN_USER_SUCCESS:
      return action.payload;

    case LOGIN_USER_FAILURE:
      return action.payload;

    case AUTENTICATE_USER_SUCCESS:
      return action.payload;

    case AUTENTICATE_USER_FAILURE:
      return action.payload;

    case LOGOUT_USER_SUCCESS:
      return action.payload;

    case LOGOUT_USER_FAILURE:
      return state;

    case UPDATE_USER_SUCCESS:
      return action.payload;

    case UPDATE_USER_FAILURE:
      return state;

    default:
      return state;
  }
};

export default users;
