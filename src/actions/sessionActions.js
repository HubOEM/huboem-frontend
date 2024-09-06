import { CREATE_SESSION as SESSION_HEADER } from "./types.js";

export const createSessionRequest = (data) => ({
    type: SESSION_HEADER.CREATE_SESSION_REQUEST,
    payload: data
})


export const createSessionSuccess = (data) => ({
    type: SESSION_HEADER.CREATE_SESSION_SUCCESS,
    payload: data
})

export const createSessionFailure = (data) => ({
    type: SESSION_HEADER.CREATE_SESSION_FAILURE,
    payload: data
})

