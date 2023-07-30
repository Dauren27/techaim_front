import { partnersTypes, partnerTypes } from '../actionTypes/PartnersTypes';
import {
  FetchPartnersFailure,
  FetchPartnersSuccess,
  FetchPartnersRequest,
  FetchPartnersFailurePayload,
  FetchPartnersSuccessPayload,
  FetchPartnerFailure,
  FetchPartnerSuccess,
  FetchPartnerRequest,
  FetchPartnerFailurePayload,
  FetchPartnerSuccessPayload,
} from '../types/partnersTypes';

export const fetchPartnersRequest = (): FetchPartnersRequest => ({
  type: partnersTypes.FETCH_PARTNERS_REQUEST,
});

export const fetchPartnersSuccess = (
  payload: FetchPartnersSuccessPayload
): FetchPartnersSuccess => ({
  type: partnersTypes.FETCH_PARTNERS_SUCCESS,
  payload,
});

export const fetchPartnersFailure = (
  payload: FetchPartnersFailurePayload
): FetchPartnersFailure => ({
  type: partnersTypes.FETCH_PARTNERS_FAILURE,
  payload,
});

export const fetchPartnerRequest = (): FetchPartnerRequest => ({
  type: partnerTypes.FETCH_PARTNER_REQUEST,
});

export const fetchPartnerSuccess = (
  payload: FetchPartnerSuccessPayload
): FetchPartnerSuccess => ({
  type: partnerTypes.FETCH_PARTNER_SUCCESS,
  payload,
});

export const fetchPartnerFailure = (
  payload: FetchPartnerFailurePayload
): FetchPartnerFailure => ({
  type: partnerTypes.FETCH_PARTNER_FAILURE,
  payload,
});