import { INews} from '../models/INews';
import { newsTypes } from '../actionTypes/NewsTypes';

export interface NewsState {
  pending: boolean;
  news: INews[] | [];
  error: any;
}

export interface CurrentNewsState {
  pending: boolean;
  currentNews: INews| {};
  error: any;
}

export interface FetchNewsSuccessPayload {
  totalCount: number;
  news: INews[];
}

export interface FetchNewsFailurePayload {
  error: any;
}

export interface FetchCurrentNewsSuccessPayload {
  currentNews: INews;
}

export interface FetchCurrentNewsRequestPayload{
  id: number
}

export interface FetchCurrentNewsFailurePayload {
  error: any;
}

export interface FetchNewsRequest {
  type: typeof newsTypes.FETCH_NEWS_REQUEST;
}

export type FetchNewsSuccess = {
  type: typeof newsTypes.FETCH_NEWS_SUCCESS;
  payload: FetchNewsSuccessPayload;
};

export type FetchNewsFailure = {
  type: typeof newsTypes.FETCH_NEWS_FAILURE;
  payload: FetchNewsFailurePayload;
};


export type NewsActions =
  | FetchNewsRequest
  | FetchNewsSuccess
  | FetchNewsFailure