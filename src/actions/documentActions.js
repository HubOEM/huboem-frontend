import * as types from '../actionTypes.js'; // Import action types
import documentService from '../services/documentService.js'; // Import document service

// Action creators for fetching documents
export const fetchDocuments = () => async dispatch => {
  dispatch({ type: types.FETCH_DOCUMENTS_REQUEST }); // Dispatch action for request start
  try {
    const documents = await documentService.fetchDocuments(); // Fetch documents from API
    dispatch({ type: types.FETCH_DOCUMENTS_SUCCESS, payload: documents }); // Dispatch action for success
  } catch (error) {
    dispatch({ type: types.FETCH_DOCUMENTS_FAILURE, payload: error.message }); // Dispatch action for failure
  }
};

// Action creators for updating documents
export const updateDocument = (documentId, documentData) => async dispatch => {
  dispatch({ type: types.UPDATE_DOCUMENT_REQUEST }); // Dispatch action for request start
  try {
    const updatedDocument = await documentService.updateDocument(documentId, documentData); // Update document via API
    dispatch({ type: types.UPDATE_DOCUMENT_SUCCESS, payload: updatedDocument }); // Dispatch action for success
  } catch (error) {
    dispatch({ type: types.UPDATE_DOCUMENT_FAILURE, payload: error.message }); // Dispatch action for failure
  }
};

// Action creators for deleting documents
export const deleteDocument = documentId => async dispatch => {
  dispatch({ type: types.DELETE_DOCUMENT_REQUEST }); // Dispatch action for request start
  try {
    await documentService.deleteDocument(documentId); // Delete document via API
    dispatch({ type: types.DELETE_DOCUMENT_SUCCESS, payload: documentId }); // Dispatch action for success
  } catch (error) {
    dispatch({ type: types.DELETE_DOCUMENT_FAILURE, payload: error.message }); // Dispatch action for failure
  }
};
