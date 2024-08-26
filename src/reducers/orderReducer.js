import * as types from '../actionTypes';

const initialState = {
  orders: [],
  loading: false,
  error: null
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORDERS_REQUEST:
    case types.CREATE_ORDER_REQUEST:
    case types.UPDATE_ORDER_REQUEST:
    case types.DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null
      };
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: false,
        error: null
      };
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.id ? action.payload : order
        ),
        loading: false,
        error: null
      };
    case types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
        loading: false,
        error: null
      };
    case types.FETCH_ORDERS_FAILURE:
    case types.CREATE_ORDER_FAILURE:
    case types.UPDATE_ORDER_FAILURE:
    case types.DELETE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default orderReducer;
