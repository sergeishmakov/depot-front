import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  AUTENTICATE_USER_SUCCESS,
  AUTENTICATE_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "../../constants";
import {
  userCreateApi,
  authorizationApi,
  autenticateApi,
  logOutApi
} from "../api/usersApi";

export const addUser = data => async dispatch => {
  const [user, created] = await userCreateApi(data);
  dispatch({
    type: created ? CREATE_USER_SUCCESS : CREATE_USER_FAILURE,
    payload: created
      ? user
      : {
          error: true,
          message: "User alredy exist"
        }
  });
  return created;
};
export const logOut = data => async dispatch => {
  dispatch({
    type: CREATE_USER_SUCCESS || CREATE_USER_FAILURE,
    payload: {}
  });
};
export const authorizationUser = data => async dispatch => {
  const response = await authorizationApi(data);
  dispatch({
    type: response.user ? LOGIN_USER_SUCCESS : LOGIN_USER_FAILURE,
    payload: response.user
      ? response.user
      : {
          error: response.err,
          message: response.message
        }
  });
  return response;
};

export const autenticateUser = () => async dispatch => {
  const user = await autenticateApi();
  dispatch({
    type: user ? AUTENTICATE_USER_SUCCESS : AUTENTICATE_USER_FAILURE,
    payload: user ? user : []
  });
};

export const logoutUser = () => async dispatch => {
  const res = await logOutApi();
  dispatch({
    type: res ? LOGOUT_USER_SUCCESS : LOGOUT_USER_FAILURE,
    payload: []
  });
};
