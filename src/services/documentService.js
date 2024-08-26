import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/documents';

const documentService = {
  fetchDocuments: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  uploadDocument: async (documentData) => {
    try {
      const response = await axios.post(`${BASE_URL}/upload`, documentData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  attachDocument: async (documentId) => {
    try {
      const response = await axios.post(`${BASE_URL}/attach`, { documentId });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  removeDocument: async (documentId) => {
    try {
      const response = await axios.post(`${BASE_URL}/remove`, { documentId });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  deleteTempDocument: async (documentId) => {
    try {
      const response = await axios.post(`${BASE_URL}/delete_temp`, { documentId });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
};

export default documentService;
