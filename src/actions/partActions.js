import axios from 'axios';
import { FETCH_PARTS, DELETE_PARTS as PART_HEADER } from './types.js';
import { getToken } from '../services/sessionService.js';

export const fetchPartsRequest = () => ({
  type: PART_HEADER.FETCH_PARTS_REQUEST
});

export const fetchPartsSuccess = (parts) => ({
  type: PART_HEADER.FETCH_PARTS_SUCCESS,
  payload: parts
});

export const fetchPartsFailure = (error) => ({
  type: PART_HEADER.FETCH_PARTS_FAILURE,
  payload: error
});

export const deletePartsRequest = () => ({
  type: PART_HEADER.DELETE_PARTS_REQUEST
});

export const deletePartsSuccess = (parts) => ({
  type: PART_HEADER.DELETE_PARTS_SUCCESS,
  payload: parts
});

export const deletePartsFailure = (error) => ({
  type: PART_HEADER.DELETE_PARTS_FAILURE,
  payload: error
});



export const fetchParts = () => {
  return async (dispatch) => {
    dispatch(fetchPartsRequest());
    try {
      const token = getToken();
      const response = await axios.get('https://huboem.dev/api/v2/parts', {
        headers: {
          'Authorization': token
        }
      });
      dispatch(fetchPartsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPartsFailure('Failed to fetch parts data.'));
    }
  };
};
