import { IPartner } from '../models/IPartner';
import { partnersTypes, partnerTypes } from '../actionTypes/PartnersTypes';

export interface PartnersState {
  pending: boolean;
  partners: IPartner[] | [];
  partner: IPartner | {};
  error: any;
}

export interface FetchPartnersSuccessPayload {
  totalCount: number;
  partners: IPartner[];
}

export interface FetchPartnersFailurePayload {
  error: any;
}

export interface FetchPartnerSuccessPayload {
  partner: IPartner;
}

export interface FetchPartnerFailurePayload {
  error: any;
}

export interface FetchPartnersRequest {
  type: typeof partnersTypes.FETCH_PARTNERS_REQUEST;
}

export type FetchPartnersSuccess = {
  type: typeof partnersTypes.FETCH_PARTNERS_SUCCESS;
  payload: FetchPartnersSuccessPayload;
};

export type FetchPartnersFailure = {
  type: typeof partnersTypes.FETCH_PARTNERS_FAILURE;
  payload: FetchPartnersFailurePayload;
};

export interface FetchPartnerRequest {
  type: typeof partnerTypes.FETCH_PARTNER_REQUEST;
}

export type FetchPartnerSuccess = {
  type: typeof partnerTypes.FETCH_PARTNER_SUCCESS;
  payload: FetchPartnerSuccessPayload;
};

export type FetchPartnerFailure = {
  type: typeof partnerTypes.FETCH_PARTNER_FAILURE;
  payload: FetchPartnerFailurePayload;
};

export type PartnersActions =
  | FetchPartnersRequest
  | FetchPartnersSuccess
  | FetchPartnersFailure
  | FetchPartnerRequest
  | FetchPartnerSuccess
  | FetchPartnerFailure