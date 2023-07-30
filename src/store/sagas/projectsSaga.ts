import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IProjects } from '../models/IProject';

import {
  fetchProjectsFailure,
  fetchProjectsSuccess,
} from '../actions/projectsActions';

import { projectsTypes } from '../actionTypes/ProjectsTypes';

import { path } from '../../api/ApiRequest';

const getProjects = (lang: string = 'RUS') =>
  axios.get<IProjects>(`${path}/public-api/${lang}/projects`);

function* fetchProjectsSaga() {
  try {
    const response: AxiosResponse<IProjects> = yield call(getProjects);

    yield put(
      fetchProjectsSuccess({
        totalCount: response.data.totalCount,
        projects: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchProjectsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* projectsSaga() {
  yield all([
    takeLatest(projectsTypes.FETCH_PROJECTS_REQUEST, fetchProjectsSaga),
  ]);
}

export default projectsSaga;
