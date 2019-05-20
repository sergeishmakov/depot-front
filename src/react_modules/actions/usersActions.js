import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../../constants";
import { userCreateApi } from "../api/usersApi";

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
        message: "User already exist"
      }
    });
  }
  return { created };
};
