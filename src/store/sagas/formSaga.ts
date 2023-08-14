import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IForm, IForms } from '../models/IForm';
import {
  fetchFormsFailure,
  fetchFormsSuccess,
  fetchFormSuccess,
  fetchFormFailure,
} from '../actions/formAction';
import { formsTypes, formTypes } from '../actionTypes/FormTypes';
import { path } from '../../api/ApiRequest';

const getForms = (lang: string = 'RUS') =>
  axios.get<IForms>(`${path}/public-api/${lang}/mentors`);

const getForm = (lang: string = 'RUS', id?: number) =>  
  axios.get<IForm>(`${path}/api/admin/form/${id}`);

function* fetchFormsSaga() {
  try {
    const response: AxiosResponse<IForms> = yield call(getForms);

    yield put(
      fetchFormsSuccess({
        totalCount: response.data.totalCount,
        forms: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchFormsFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* fetchFormSaga() {
  try {
    const response: AxiosResponse<IForm> = yield call(getForm);

    yield put(
      fetchFormSuccess({
        form: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchFormFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* formsSaga() {
  yield all([
    takeLatest(formsTypes.FETCH_FORMS_REQUEST, fetchFormsSaga),
    takeLatest(formTypes.FETCH_FORM_REQUEST, fetchFormSaga),
  ]);
}

export default formsSaga;
