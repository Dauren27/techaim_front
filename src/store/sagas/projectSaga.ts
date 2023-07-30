import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { IProject } from '../models/IProject';
import {
  fetchProjectSuccess,
  fetchProjectFailure,
} from '../actions/projectActions';
import { projectTypes } from '../actionTypes/ProjectTypes';
import { getProject } from '../selectors';
import { path } from '../../api/ApiRequest';

const fetchProject = (lang: string = 'RUS', id?: any) =>
  axios.get<IProject>(`${path}/public-api/${lang}/project/${id.id}`);

function* fetchProjectSaga() {
  const id: IProject = yield select(getProject);

  try {
    const response: AxiosResponse<IProject> = yield call(
      fetchProject,
      'RUS',
      id
    );
    yield put(
      fetchProjectSuccess({
        project: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchProjectFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* projectSaga() {
  yield all([takeLatest(projectTypes.FETCH_PROJECT_REQUEST, fetchProjectSaga)]);
}

export default projectSaga;
