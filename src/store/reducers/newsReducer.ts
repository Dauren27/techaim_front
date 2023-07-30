import { newsTypes } from '../actionTypes/NewsTypes';
import { NewsActions, NewsState } from '../types/newsTypes';
import { Reducer } from 'redux';

const initialState: NewsState = {
  pending: true,
  news: [],
  error: null,
};

export const newsReducer: Reducer = (
  state = initialState,
  action: NewsActions
) => {
  switch (action.type) {
    case newsTypes.FETCH_NEWS_REQUEST:
      return { ...state, pending: true };
    case newsTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        news: action.payload.news,
        error: null,
      };
    case newsTypes.FETCH_NEWS_FAILURE:
      return {
        ...state,
        pending: false,
        news: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
