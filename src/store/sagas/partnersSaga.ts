import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IPartners, IPartner } from '../models/IPartner';
import {
  fetchPartnersFailure,
  fetchPartnersSuccess,
  fetchPartnerSuccess,
  fetchPartnerFailure,
} from '../actions/partnersActions';
import { partnersTypes, partnerTypes } from '../actionTypes/PartnersTypes';
import { path } from '../../api/ApiRequest';

const getPartners = (lang: string = 'RUS') =>
  axios.get<IPartners>(`${path}/public-api/${lang}/partners`);

const getPartner = (lang: string = 'RUS', id?: number) =>
  axios.get<IPartner>(`${path}/${lang}/partner/${id}`);

function* fetchPartnersSaga() {
  try {
    const response: AxiosResponse<IPartners> = yield call(getPartners);

    yield put(
      fetchPartnersSuccess({
        totalCount: response.data.totalCount,
        partners: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchPartnersFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* fetchPartnerSaga() {
  try {
    const response: AxiosResponse<IPartner> = yield call(getPartner);

    yield put(
      fetchPartnerSuccess({
        partner: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchPartnerFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* partnersSaga() {
  yield all([
    takeLatest(partnersTypes.FETCH_PARTNERS_REQUEST, fetchPartnersSaga),
    takeLatest(partnerTypes.FETCH_PARTNER_REQUEST, fetchPartnerSaga),
  ]);
}

export default partnersSaga;
