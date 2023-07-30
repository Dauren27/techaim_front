import { newsTypes } from '../actionTypes/NewsTypes';
import {
  FetchNewsFailure,
  FetchNewsSuccess,
  FetchNewsRequest,
  FetchNewsFailurePayload,
  FetchNewsSuccessPayload,
} from '../types/newsTypes';

export const fetchNewsRequest = (): FetchNewsRequest => ({
  type: newsTypes.FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (
  payload: FetchNewsSuccessPayload
): FetchNewsSuccess => ({
  type: newsTypes.FETCH_NEWS_SUCCESS,
  payload,
});

export const fetchNewsFailure = (
  payload: FetchNewsFailurePayload
): FetchNewsFailure => ({
  type: newsTypes.FETCH_NEWS_FAILURE,
  payload,
});