import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_REQUESTED, API_ERRORED, DATA_LOADED } from "../constants/action-types"

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

async function getData() {;
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
}