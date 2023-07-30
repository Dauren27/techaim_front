import { all } from 'redux-saga/effects';
import partnersSaga from './partnersSaga';
import newsSaga from './newsSaga';
import mentorsSaga from './mentorsSaga';
import team_membersSaga from './team_memberSaga';
import supervisorsSaga from './supervisorsSaga';
import projectsSaga from './projectsSaga';
import projectSaga from './projectSaga';
import formsSaga from './formSaga';
import reportsSaga from './reportsSage';
import mentorSaga from './mentorSaga';
import currentNewsSaga from './currentNewsSaga';

export function* rootSaga() {
  yield all([
    partnersSaga(),
    newsSaga(),
    currentNewsSaga(),
    mentorsSaga(),
    mentorSaga(),
    team_membersSaga(),
    supervisorsSaga(),
    projectsSaga(),
    projectSaga(),
    formsSaga(),
    reportsSaga(),
  ]);
}
