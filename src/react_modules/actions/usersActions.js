import {CREATE_USER_SUCCESS, CREATE_USER_FAILURE} from '../../constants';
import {userCreateApi, autenticateApi} from '../api/usersApi';

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
};

export const autenticateUser = data => async dispatch => {
  console.log ('action');
  const user = await autenticateApi (data);
  dispatch ({
    type: user ? CREATE_USER_SUCCESS : CREATE_USER_FAILURE,
    payload: user ? user : null,
  });
};
