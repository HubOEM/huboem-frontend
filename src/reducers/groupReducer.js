import * as types from '../actionTypes';

const initialState = {
  groups: [],
  loading: false,
  error: null
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GROUPS_REQUEST:
    case types.CREATE_GROUP_REQUEST:
    case types.UPDATE_GROUP_REQUEST:
    case types.DELETE_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload,
        loading: false,
        error: null
      };
    case types.CREATE_GROUP_SUCCESS:
    case types.UPDATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        // Handle success accordingly, update state as needed
      };
    case types.DELETE_GROUP_SUCCESS:
      return {
        ...state,
        groups: state.groups.filter(group => group.id !== action.payload),
        loading: false,
        error: null
      };
    case types.FETCH_GROUPS_FAILURE:
    case types.CREATE_GROUP_FAILURE:
    case types.UPDATE_GROUP_FAILURE:
    case types.DELETE_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default groupReducer;
