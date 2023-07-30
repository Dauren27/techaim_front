import { currentNewsTypes } from '../actionTypes/CurrentNewsTypes';
import { CurrentNewsActions, CurrentNewsState } from '../types/currentNewsTypes';
import { Reducer } from 'redux';

const initialState: CurrentNewsState = {
  pending: true,
  id: null,
  currentNews: {},
  error: null,
};

export const currentNewsReducer: Reducer = (
  state = initialState,
  action: CurrentNewsActions
) => {
  switch (action.type) {
    case currentNewsTypes.FETCH_CURRENT_NEWS_REQUEST:
      return { ...state, pending: true, id: action.payload?.id, error: null };
    case currentNewsTypes.FETCH_CURRENT_NEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        currentNews: action.payload?.currentNews,
        error: null,
      };
    case currentNewsTypes.FETCH_CURRENT_NEWS_FAILURE:
      return {
        ...state,
        pending: false,
        currentNews: {},
        error: action.payload?.error,
      };
    default:
      return state;
  }
};
