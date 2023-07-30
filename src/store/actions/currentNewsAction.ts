import {
    FetchCurrentNewsFailure,
    FetchCurrentNewsSuccess,
    FetchCurrentNewsRequest,
    FetchCurrentNewsRequestPayload,
    FetchCurrentNewsFailurePayload,
    FetchCurrentNewsSuccessPayload,
  } from '../types/currentNewsTypes';
  
  import { currentNewsTypes } from '../actionTypes/CurrentNewsTypes';
  
  export const fetchCurrentNewsRequest = (
    payload: FetchCurrentNewsRequestPayload
  ): FetchCurrentNewsRequest => ({
    type: currentNewsTypes.FETCH_CURRENT_NEWS_REQUEST,
    payload,
  });
  
  export const fetchCurrentNewsSuccess = (
    payload: FetchCurrentNewsSuccessPayload
  ): FetchCurrentNewsSuccess => ({
    type: currentNewsTypes.FETCH_CURRENT_NEWS_SUCCESS,
    payload,
  });
  
  export const fetchCurrentNewsFailure = (
    payload: FetchCurrentNewsFailurePayload
  ): FetchCurrentNewsFailure => ({
    type: currentNewsTypes.FETCH_CURRENT_NEWS_FAILURE,
    payload,
  });
  