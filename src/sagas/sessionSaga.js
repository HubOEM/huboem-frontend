// src/redux/sagas/sessionSagas.js
import { put, takeLatest } from 'redux-saga/effects';
// import { call, put, takeLatest } from 'redux-saga/effects';
import { createSessionRequest, createSessionSuccess, createSessionFailure } from '../redux/slices/sessionSlice';

function* handleCreateSession(action) {
  try {
    const data = yield createSessionRequest(action.payload);
    console.log(' ----- session api calling in saga: ', data);
    yield put(createSessionSuccess(data));
  } catch (error) {
    yield put(createSessionFailure(error.message));
  }
}

export default function* sessionSagas() {
  yield takeLatest(createSessionRequest, handleCreateSession);
}


// import { put, takeLatest, all } from "redux-saga/effects";

// import { sessionActions, types } from "../actions";

// import { createSession } from "../services/sessionService";

// const {
//     createSessionFailure,
//     createSessionSuccess
// } = sessionActions;

// const { SESSION: SESSION_HEADER } = types;


// function* requestCreateSession(action) {
//     try {
//         const data = yield createSession(action.payload);
//         console.log(' ----- session api calling in saga: ', data);
//         yield put(createSessionSuccess(data));
//     } catch (error) {
//         yield put(createSessionFailure(error.message))
//     }
// }

// function* sessionSaga() {
//     console.log("***************");
//     console.log(types);
//     console.log("***************");
//     yield all([
//         yield takeLatest(SESSION_HEADER.CREATE_SESSION_REQUEST, requestCreateSession),
//     ])
// }

// export default sessionSaga;




