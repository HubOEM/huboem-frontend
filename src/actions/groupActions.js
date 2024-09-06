import * as types from '../actionTypes.js';
import * as groupService from '../services/groupService.js';

export const fetchGroups = () => async dispatch => {
  dispatch({ type: types.FETCH_GROUPS_REQUEST });
  try {
    const groups = await groupService.fetchGroups();
    dispatch({ type: types.FETCH_GROUPS_SUCCESS, payload: groups });
  } catch (error) {
    dispatch({ type: types.FETCH_GROUPS_FAILURE, payload: error.message });
  }
};

export const createGroup = (groupData) => async dispatch => {
  dispatch({ type: types.CREATE_GROUP_REQUEST });
  try {
    const response = await groupService.createGroup(groupData);
    dispatch({ type: types.CREATE_GROUP_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: types.CREATE_GROUP_FAILURE, payload: error.message });
  }
};

export const updateGroup = (groupId, groupData) => async dispatch => {
  dispatch({ type: types.UPDATE_GROUP_REQUEST });
  try {
    const response = await groupService.updateGroup(groupId, groupData);
    dispatch({ type: types.UPDATE_GROUP_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: types.UPDATE_GROUP_FAILURE, payload: error.message });
  }
};

export const deleteGroup = (groupId) => async dispatch => {
  dispatch({ type: types.DELETE_GROUP_REQUEST });
  try {
    await groupService.deleteGroup(groupId);
    dispatch({ type: types.DELETE_GROUP_SUCCESS, payload: groupId });
  } catch (error) {
    dispatch({ type: types.DELETE_GROUP_FAILURE, payload: error.message });
  }
};
