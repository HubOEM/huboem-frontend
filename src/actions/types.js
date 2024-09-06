import { createActionTypes } from "../utils/index.js";

export const CREATE_SESSION = createActionTypes('SESSION', [
    'CREATE_SESSION_REQUEST',
    'CREATE_SESSION_SUCCESS',
    'CREATE_SESSION_FAILURE'
]);

// Session action types
export const DELETE_SESSION = createActionTypes('SESSION', [
    'DELETE_SESSION_REQUEST',
    'DELETE_SESSION_SUCCESS',
    'DELETE_SESSION_FAILURE'
]);

// User action types
export const FETCH_USER = createActionTypes('USER', [
    'FETCH_USER_REQUEST',
    'FETCH_USER_SUCCESS',
    'FETCH_USER_FAILURE'
]);

export const UPDATE_USER = createActionTypes('USER', [
    'UPDATE_USER_REQUEST',
    'UPDATE_USER_SUCCESS',
    'UPDATE_USER_FAILURE'
]);

export const DELETE_USER = createActionTypes('USER', [
    'DELETE_USER_REQUEST',
    'DELETE_USER_SUCCESS',
    'DELETE_USER_FAILURE'
]);

export const FETCH_PARTS = createActionTypes('PART', [
    'FETCH_PARTS_REQUEST',
    'FETCH_PARTS_SUCCESS',
    'FETCH_PARTS_FAILURE'
])
export const DELETE_PARTS = createActionTypes('PART', [
    'DELETE_PARTS_REQUEST',
    'DELETE_PARTS_SUCCESS',
    'DELETE_PARTS_FAILURE'
])

// Document action types
export const FETCH_DOCUMENTS = createActionTypes('DOCUMENT', [
    'REQUEST',
    'SUCCESS',
    'FAILURE'
]);

export const UPDATE_DOCUMENT = createActionTypes('DOCUMENT', [
    'REQUEST',
    'SUCCESS',
    'FAILURE'
]);

export const ATTACH_DOCUMENT = createActionTypes('DOCUMENT', [
    'REQUEST',
    'SUCCESS',
    'FAILURE'
]);

export const REMOVE_DOCUMENT = createActionTypes('DOCUMENT', [
    'REQUEST',
    'SUCCESS',
    'FAILURE'
]);

export const DELETE_DOCUMENT = createActionTypes('DOCUMENT', [
    'REQUEST',
    'SUCCESS',
    'FAILURE'
]);
