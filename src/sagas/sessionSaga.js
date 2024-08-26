import { put, takeLatest, all } from "redux-saga/effects";

import { sessionActions, types } from "../actions";

import { createSession } from "../services/sessionService";

const { 
    createSessionFailure, 
    createSessionSuccess
} = sessionActions;

const { SESSION: SESSION_HEADER } = types;


function* requestCreateSession(action) {
    try {
        const data = yield createSession(action.payload);
        console.log(' ----- session api calling in saga: ', data);
        yield put(createSessionSuccess(data));
    } catch (error) {
        yield put(createSessionFailure(error.message))
    }
}

function* sessionSaga() {
    yield all([
        yield takeLatest(SESSION_HEADER.CREATE_SESSION_REQUEST, requestCreateSession),
    ])
}

export default sessionSaga;




