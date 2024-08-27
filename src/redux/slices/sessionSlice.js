import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    createSessionSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    createSessionFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const createSessionRequest = 'session/createSessionRequest';
export const { createSessionSuccess, createSessionFailure } = sessionSlice.actions;

export default sessionSlice.reducer;

