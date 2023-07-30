import { formTypes, formsTypes } from '../actionTypes/FormTypes';
import {
  FetchFormsRequest,
  FetchFormsSuccessPayload,
  FetchFormsSuccess,
  FetchFormsFailurePayload,
  FetchFormsFailure,
  FetchFormRequest,
  FetchFormSuccessPayload,
  FetchFormSuccess,
  FetchFormFailurePayload,
  FetchFormFailure,
} from '../types/formTypes';

export const fetchFormsRequest = (): FetchFormsRequest => ({
  type: formsTypes.FETCH_FORMS_REQUEST,
});

export const fetchFormsSuccess = (
  payload: FetchFormsSuccessPayload
): FetchFormsSuccess => ({
  type: formsTypes.FETCH_FORMS_SUCCESS,
  payload,
});

export const fetchFormsFailure = (
  payload: FetchFormsFailurePayload
): FetchFormsFailure => ({
  type: formsTypes.FETCH_FORMS_FAILURE,
  payload,
});

export const fetchFormRequest = (): FetchFormRequest => ({
  type: formTypes.FETCH_FORM_REQUEST,
});

export const fetchFormSuccess = (
  payload: FetchFormSuccessPayload
): FetchFormSuccess => ({
  type: formTypes.FETCH_FORM_SUCCESS,
  payload,
});

export const fetchFormFailure = (
  payload: FetchFormFailurePayload
): FetchFormFailure => ({
  type: formTypes.FETCH_FORM_FAILURE,
  payload,
});
