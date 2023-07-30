import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { INews } from '../models/INews';
import {
  fetchCurrentNewsSuccess,
  fetchCurrentNewsFailure,
} from '../actions/currentNewsAction';
import { currentNewsTypes } from '../actionTypes/CurrentNewsTypes';
import { getCurrentNews } from '../selectors';
import { path } from '../../api/ApiRequest';

const fetchCurrentNews = (lang: string = 'RUS', id?: any) =>
  axios.get<INews>(`${path}/public-api/${lang}/news/${id.id}`);

function* fetchCurrentNewsSaga() {
  const id: INews = yield select(getCurrentNews);

  try {
    const response: AxiosResponse<INews> = yield call(
      fetchCurrentNews,
      'RUS',
      id
    );
    yield put(
      fetchCurrentNewsSuccess({
        currentNews: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchCurrentNewsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* currentNewsSaga() {
  yield all([takeLatest(currentNewsTypes.FETCH_CURRENT_NEWS_REQUEST, fetchCurrentNewsSaga)]);
}

export default currentNewsSaga;
