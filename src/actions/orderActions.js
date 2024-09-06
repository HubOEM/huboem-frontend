import * as types from '../actionTypes.js';
import * as orderService from '../services/orderService.js';

export const fetchOrders = () => async dispatch => {
  dispatch({ type: types.FETCH_ORDERS_REQUEST });
  try {
    const orders = await orderService.fetchOrders();
    dispatch({ type: types.FETCH_ORDERS_SUCCESS, payload: orders });
  } catch (error) {
    dispatch({ type: types.FETCH_ORDERS_FAILURE, payload: error.message });
  }
};

export const createOrder = orderData => async dispatch => {
  dispatch({ type: types.CREATE_ORDER_REQUEST });
  try {
    const createdOrder = await orderService.createOrder(orderData);
    dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: createdOrder });
  } catch (error) {
    dispatch({ type: types.CREATE_ORDER_FAILURE, payload: error.message });
  }
};

export const updateOrder = (orderId, orderData) => async dispatch => {
  dispatch({ type: types.UPDATE_ORDER_REQUEST });
  try {
    const updatedOrder = await orderService.updateOrder(orderId, orderData);
    dispatch({ type: types.UPDATE_ORDER_SUCCESS, payload: updatedOrder });
  } catch (error) {
    dispatch({ type: types.UPDATE_ORDER_FAILURE, payload: error.message });
  }
};

export const deleteOrder = orderId => async dispatch => {
  dispatch({ type: types.DELETE_ORDER_REQUEST });
  try {
    await orderService.deleteOrder(orderId);
    dispatch({ type: types.DELETE_ORDER_SUCCESS, payload: orderId });
  } catch (error) {
    dispatch({ type: types.DELETE_ORDER_FAILURE, payload: error.message });
  }
};
