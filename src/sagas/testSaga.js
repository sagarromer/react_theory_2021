import {
    take,
    put,
    delay,
    call,
    fork,
    takeEvery,
    cancelled,
    cancel,
    takeLatest,
} from 'redux-saga/effects';

async function double(number) {
    return number * 2;
}

export function* testSaga() {
    while (true) {
        console.log('Staring saga');
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b);
        console.log('Finish saga function', state);
    }
}
