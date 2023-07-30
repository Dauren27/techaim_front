import { IForm } from "../models/IForm";
import { formTypes,formsTypes } from "../actionTypes/FormTypes";

export interface FormsState {
  pending: boolean;
  forms: IForm  [] | [];
  form: IForm  | {};
  error: any;
}

export interface FetchFormsSuccessPayload {
  totalCount: number;
  forms: IForm [];
}

export interface FetchFormsFailurePayload {
  error: any;
}
export interface FetchFormSuccessPayload {
  form: IForm;
}

export interface FetchFormFailurePayload {
  error: any;
}

export interface FetchFormsRequest {
  type: typeof formsTypes.FETCH_FORMS_REQUEST;
}

export type FetchFormsSuccess = {
  type: typeof formsTypes.FETCH_FORMS_SUCCESS;
  payload: FetchFormsSuccessPayload;
};

export type FetchFormsFailure = {
  type: typeof formsTypes.FETCH_FORMS_FAILURE;
  payload: FetchFormsFailurePayload;
};

export interface FetchFormRequest {
  type: typeof formTypes.FETCH_FORM_REQUEST;
}

export type FetchFormSuccess = {
  type: typeof formTypes.FETCH_FORM_SUCCESS;
  payload: FetchFormSuccessPayload;
};

export type FetchFormFailure = {
  type: typeof formTypes.FETCH_FORM_FAILURE;
  payload: FetchFormFailurePayload;
};

export type FormsActions =
  | FetchFormsRequest
  | FetchFormsSuccess
  | FetchFormsFailure
  | FetchFormRequest
  | FetchFormSuccess
  | FetchFormFailure