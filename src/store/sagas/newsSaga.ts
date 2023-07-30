import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IAllNews } from '../models/INews';
import {
  fetchNewsFailure,
  fetchNewsSuccess,
} from '../actions/newsActions';
import { newsTypes } from '../actionTypes/NewsTypes';
import { path } from '../../api/ApiRequest';

const getNews = (lang: string = 'RUS') =>
  axios.get<IAllNews>(`${path}/public-api/${lang}/news`);

function* fetchNewsSaga() {
  try {
    const response: AxiosResponse<IAllNews> = yield call(getNews);
    yield put(
      fetchNewsSuccess({
        totalCount: response.data.totalCount,
        news: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchNewsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* newsSaga() {
  yield all([
    takeLatest(newsTypes.FETCH_NEWS_REQUEST, fetchNewsSaga),
  ]);
}

export default newsSaga;
