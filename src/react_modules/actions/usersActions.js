import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  AUTENTICATE_USER_SUCCESS,
  AUTENTICATE_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../../constants';
import {
  userCreateApi,
  authorizationApi,
  autenticateApi,
  logOutApi,
} from '../api/usersApi';

export const addUser = data => async dispatch => {
  const [user, created] = await userCreateApi (data);
  dispatch ({
    type: created ? CREATE_USER_SUCCESS : CREATE_USER_FAILURE,
    payload: created
      ? user
      : {
          error: true,
          message: 'User alredy exist',
        },
  });
  return created;
};
export const logOut = data => async dispatch => {
  dispatch ({
    type: CREATE_USER_SUCCESS || CREATE_USER_FAILURE,
    payload: {},
  });
};
export const authorizationUser = data => async dispatch => {
  const [err, user, message] = await authorizationApi (data);
  dispatch ({
    type: user ? LOGIN_USER_SUCCESS : LOGIN_USER_FAILURE,
    payload: user
      ? user
      : {
          error: err,
          message: message,
        },
  });
};

export const autenticateUser = () => async dispatch => {
  const user = await autenticateApi ();
  dispatch ({
    type: user ? AUTENTICATE_USER_SUCCESS : AUTENTICATE_USER_FAILURE,
    payload: user ? user : [],
  });
};

export const logoutUser = () => async dispatch => {
  const res = await logOutApi ();
  dispatch ({
    type: res ? LOGOUT_USER_SUCCESS : LOGOUT_USER_FAILURE,
    payload: [],
  });
};
