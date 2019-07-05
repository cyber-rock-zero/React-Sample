// import { put, call, take, fork } from 'redux-saga/effects';
// import { API } from './api';
// import { searchSkill, successSearchSkill, failureSearchSkill  } from './actionCreator';

// function* handleRequestGetSkill() {
//     while (true) {
//         const action = yield take(searchSkill);
//         const { payload, error } = yield call(API.getSkillList(), action.payload.location);
//         if (payload && !error) {
//             yield put(successSearchSkill(payload));
//         } else {
//             yield put(failureSearchSkill(error));
//         }
//     }
// }
  
// export default function* rootSaga() {
//     yield fork(handleRequestGetSkill);
// }