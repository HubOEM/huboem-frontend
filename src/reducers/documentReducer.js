import * as types from '../actionTypes';

const initialState = {
  documents: [],
  loading: false,
  error: null
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DOCUMENTS_REQUEST:
    case types.UPDATE_DOCUMENT_REQUEST:
    case types.ATTACH_DOCUMENT_REQUEST:
    case types.REMOVE_DOCUMENT_REQUEST:
    case types.DELETE_DOCUMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_DOCUMENTS_SUCCESS:
      return {
        ...state,
        documents: action.payload,
        loading: false,
        error: null
      };
    case types.UPDATE_DOCUMENT_SUCCESS:
      // Handle success case for UPDATEing document
    case types.ATTACH_DOCUMENT_SUCCESS:
      // Handle success case for attaching document
    case types.REMOVE_DOCUMENT_SUCCESS:
      // Handle success case for removing document
    case types.DELETE_DOCUMENT_SUCCESS:
      // Handle success case for deleting temporary document
    case types.FETCH_DOCUMENTS_FAILURE:
    case types.UPDATE_DOCUMENT_FAILURE:
    case types.ATTACH_DOCUMENT_FAILURE:
    case types.REMOVE_DOCUMENT_FAILURE:
    case types.DELETE_DOCUMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default documentReducer;
