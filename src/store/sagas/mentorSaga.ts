import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { IMentor } from '../models/IMentor';
import { fetchMentorSuccess, fetchMentorFailure}from '../actions/mentorAction'
import { mentorTypes } from '../actionTypes/MentorTypes';
import { getMentor } from '../selectors';
import { path } from '../../api/ApiRequest';

const fetchMentor = (lang: string = 'RUS', id?: any) =>
  axios.get<IMentor>(`${path}/public-api/${lang}/mentor/${id.id}`);

function* fetchMentorSaga() {
  const id: IMentor = yield select(getMentor);

  try {
    const response: AxiosResponse<IMentor> = yield call(
      fetchMentor,
      'RUS',
      id
    );
    yield put(
      fetchMentorSuccess({
        mentor: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchMentorFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* mentorSaga() {
  yield all([takeLatest(mentorTypes.FETCH_MENTOR_REQUEST, fetchMentorSaga)]);
}

export default mentorSaga;
