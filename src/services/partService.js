import axios from 'axios';
import { getToken } from './sessionService.js';

export const fetchParts = async () => {
  try {
    const token = getToken();
    const response = await axios.get('https://huboem.dev/api/v2/parts', {
      headers: {
        'Authorization': token
      }
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
