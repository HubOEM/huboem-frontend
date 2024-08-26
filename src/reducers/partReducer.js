import { FETCH_PARTS_REQUEST, FETCH_PARTS_SUCCESS, FETCH_PARTS_FAILURE } from '../actionTypes';

const initialState = {
  partsData: [],
  loading: false,
  error: null
};

const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PARTS_SUCCESS:
      return {
        ...state,
        loading: false,
        partsData: action.payload,
        error: null
      };
    case FETCH_PARTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default partReducer;
