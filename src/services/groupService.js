import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/groups';

const groupService = {
  fetchGroups: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  createGroup: async (groupData) => {
    try {
      const response = await axios.post(BASE_URL, groupData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  updateGroup: async (groupId, groupData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${groupId}`, groupData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  deleteGroup: async (groupId) => {
    try {
      await axios.delete(`${BASE_URL}/${groupId}`);
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
};

export default groupService;
