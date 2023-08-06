import axios, { AxiosError, AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ISupervisor, ISupervisors } from "../models/ISupervisors";
import {
  fetchSupervisorsFailure,
  fetchSupervisorsSuccess,
  fetchSupervisorSuccess,
  fetchSupervisorFailure,
} from "../actions/supervisorsAction";
import { supervisorsTypes } from "../actionTypes/supervisorsTypes";
import { path } from "../../api/ApiRequest";

const getSupervisors = (lang: string = "RUS") =>
  axios.get<ISupervisors>(`${path}/public-api/${lang}/supervisors`);

const getSupervisor = (lang: string = "RUS", id?: number) =>
  axios.get<ISupervisor>(`${path}/${lang}/supervisor/${id}`);

function* fetchSupervisorsSaga() {
  try {
    const response: AxiosResponse<ISupervisors> = yield call(getSupervisors);

    yield put(
      fetchSupervisorsSuccess({
        totalCount: response.data.totalCount,
        supervisors: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchSupervisorsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* fetchSupervisorSaga() {
  try {
    const response: AxiosResponse<ISupervisor> = yield call(getSupervisor);

    yield put(
      fetchSupervisorSuccess({
        supervisors: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchSupervisorFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* supervisorsSaga() {
  yield all([
    //takeLatest(supervisorsTypes.FETCH_SUPERVISORS_FAILURE, fetchSupervisorsSaga),
    takeLatest(supervisorsTypes.FETCH_SUPERVISORS_REQUEST, fetchSupervisorsSaga),
    takeLatest(supervisorsTypes.FETCH_SUPERVISOR_REQUEST, fetchSupervisorSaga),
  ]);
}

export default supervisorsSaga;
