import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IMentors } from '../models/IMentor';
import {
  fetchMentorsFailure,
  fetchMentorsSuccess,
} from '../actions/mentorsAction';
import { mentorsTypes } from '../actionTypes/MentorsTypes';
import { path } from '../../api/ApiRequest';

const getMentors = (lang: string = 'RUS') =>
  axios.get<IMentors>(`${path}/public-api/${lang}/mentors`);


function* fetchMentorsSaga() {
  try {
    const response: AxiosResponse<IMentors> = yield call(getMentors);

    yield put(
      fetchMentorsSuccess({
        totalCount: response.data.totalCount,
        mentors: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchMentorsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* mentorsSaga() {
  yield all([
    takeLatest(mentorsTypes.FETCH_MENTORS_REQUEST, fetchMentorsSaga),
  ]);
}

export default mentorsSaga;
