import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/machines';

const machineService = {
  fetchMachines: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  updateMachine: async (machineId, machineData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${machineId}`, machineData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  deleteMachine: async machineId => {
    try {
      await axios.delete(`${BASE_URL}/${machineId}`);
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
};

export default machineService;
