import { INews } from '../models/INews';
import { currentNewsTypes } from '../actionTypes/CurrentNewsTypes';

export interface CurrentNewsState {
  pending: boolean;
  id: number | null;
  currentNews: INews | {};
  error: any;
}

export interface FetchCurrentNewsRequestPayload {
  id: number;
}
export interface FetchCurrentNewsSuccessPayload {
  currentNews: INews;
}
export interface FetchCurrentNewsFailurePayload {
  error: any;
}

export interface FetchCurrentNewsRequest {
  type: typeof currentNewsTypes.FETCH_CURRENT_NEWS_REQUEST;
  payload?: FetchCurrentNewsRequestPayload;
}

export type FetchCurrentNewsSuccess = {
  type: typeof currentNewsTypes.FETCH_CURRENT_NEWS_SUCCESS;
  payload?: FetchCurrentNewsSuccessPayload;
};

export type FetchCurrentNewsFailure = {
  type: typeof currentNewsTypes.FETCH_CURRENT_NEWS_FAILURE;
  payload?: FetchCurrentNewsFailurePayload;
};

export type CurrentNewsActions =
  | FetchCurrentNewsRequest
  | FetchCurrentNewsSuccess
  | FetchCurrentNewsFailure;
