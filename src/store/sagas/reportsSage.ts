import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IAllReports } from '../models/IReports';
import {
  fetchReportsFailure,
  fetchReportsSuccess,
} from '../actions/reportsAction';
import { reportsTypes } from '../actionTypes/ReportsTypes';
import { path } from '../../api/ApiRequest';

const getReports = (lang: string = 'RUS') =>
  axios.get<IAllReports>(`${path}/public-api/${lang}/reports`);

function* fetchReportsSaga() {
  try {
    const response: AxiosResponse<IAllReports> = yield call(getReports);

    yield put(
      fetchReportsSuccess({
        totalCount: response.data.totalCount,
        reports: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchReportsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* reportsSaga() {
  yield all([
    takeLatest(reportsTypes.FETCH_REPORTS_REQUEST, fetchReportsSaga),
  ]);
}

export default reportsSaga;
