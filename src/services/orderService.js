import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/orders';

const orderService = {
  fetchOrders: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  createOrder: async orderData => {
    try {
      const response = await axios.post(BASE_URL, orderData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  updateOrder: async (orderId, orderData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${orderId}`, orderData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },

  deleteOrder: async orderId => {
    try {
      await axios.delete(`${BASE_URL}/${orderId}`);
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
};

export default orderService;
