import { all, fork } from "redux-saga/effects";
import sessionSaga from "./sessionSaga";
export default function* rootSaga() {
    yield all([
        fork(sessionSaga)
    ])
}
