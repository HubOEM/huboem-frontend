import { FETCH_USER, UPDATE_USER, DELETE_USER as USER_HEADER } from "./types.js";
import userService from '../services/userService.js'

export const fetchUsersRequest = (data) => ({
  type: USER_HEADER.FETCH_USER_REQUEST,
  payload: data
});
export const updateUserRequest = (data) => ({
  type: USER_HEADER.UPDATE_USER_REQUEST,
  payload: data
});
export const deleteUserRequest = (data) => ({
  type: USER_HEADER.DELETE_USER_REQUEST,
    payload: data
});


export const fetchUsersSuccess = (users) => ({
  type: USER_HEADER.FETCH_USER_SUCCESS,
  payload: users
});
export const updateUserSuccess = (updatedUser) => ({
  type: USER_HEADER.UPDATE_USER_SUCCESS,
  payload: updatedUser
});
export const deleteUserSuccess = (userId) => ({
  type: USER_HEADER.DELETE_USER_SUCCESS,
  payload: userId
});


export const fetchUsersFailure = (error) => ({
  type: USER_HEADER.FETCH_USER_FAILURE,
  payload: error.message
});
export const updateUserFailure = (error) => ({
  type: USER_HEADER.UPDATE_USER_FAILURE,
  payload: error.message
});
export const deleteUserFailure = (error) => ({
  type: USER_HEADER.DELETE_USER_FAILURE,
  payload: error.message
});

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersRequest());
  try {
    const users = await userService.fetchUsers();
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};
