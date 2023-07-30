import { formTypes,formsTypes } from '../actionTypes/FormTypes';
import { FormsActions,FormsState } from '../types/formTypes';
import { IForm } from '../models/IForm';
import { Reducer } from 'redux';

const initialState: FormsState = {
  pending: false,
  forms: [],
  form: {},
  error: null,
};

export const formsReducer: Reducer = (
  state = initialState,
  action: FormsActions
) => {
  switch (action.type) {
    case formsTypes.FETCH_FORMS_REQUEST:
      return { ...state, pending: true };
    case formsTypes.FETCH_FORMS_SUCCESS:
      return {
        ...state,
        pending: false,
        forms: action.payload.forms,
        error: null,
      };
    case formsTypes.FETCH_FORMS_FAILURE:
      return {
        ...state,
        pending: false,
        forms: [],
        error: action.payload.error,
      };
    case formTypes.FETCH_FORM_REQUEST:
      return { ...state, pending: true };
    case formTypes.FETCH_FORM_SUCCESS:
      return {
        ...state,
        pending: false,
        form: action.payload,
        error: null,
      };
    case formTypes.FETCH_FORM_FAILURE:
      return {
        ...state,
        pending: false,
        form: {},
        error: action.payload.error,
      };
   default:
      return state;
  }
};
