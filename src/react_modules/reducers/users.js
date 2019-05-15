import {CREATE_USER_SUCCESS, CREATE_USER_FAILURE} from '../../constants';

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.payload;

    case CREATE_USER_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default users;
