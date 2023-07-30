import { partnersTypes, partnerTypes } from '../actionTypes/PartnersTypes';
import { PartnersActions, PartnersState } from '../types/partnersTypes';
import { IPartner } from '../models/IPartner';
import { Reducer } from 'redux';

const initialState: PartnersState = {
  pending: false,
  partners: [],
  partner: {},
  error: null,
};

export const partnersReducer: Reducer = (
  state = initialState,
  action: PartnersActions
) => {
  switch (action.type) {
    case partnersTypes.FETCH_PARTNERS_REQUEST:
      return { ...state, pending: true };
    case partnersTypes.FETCH_PARTNERS_SUCCESS:
      return {
        ...state,
        pending: false,
        partners: action.payload.partners,
        error: null,
      };
    case partnersTypes.FETCH_PARTNERS_FAILURE:
      return {
        ...state,
        pending: false,
        partners: [],
        error: action.payload.error,
      };
    case partnerTypes.FETCH_PARTNER_REQUEST:
      return { ...state, pending: true };
    case partnerTypes.FETCH_PARTNER_SUCCESS:
      return {
        ...state,
        pending: false,
        partner: action.payload,
        error: null,
      };
    case partnerTypes.FETCH_PARTNER_FAILURE:
      return {
        ...state,
        pending: false,
        partner: {},
        error: action.payload.error,
      };
       default:
      return state;
  }
};
