import { mentorsTypes } from '../actionTypes/MentorsTypes';
import { MentorsActions, MentorsState } from '../types/mentorsTypes';
import { Reducer } from 'redux';

const initialState: MentorsState = {
  pending: true,
  mentors: [],
  error: null,
};

export const mentorsReducer: Reducer = (
  state = initialState,
  action: MentorsActions
) => {
  switch (action.type) {
    case mentorsTypes.FETCH_MENTORS_REQUEST:
      return { ...state, pending: true };
    case mentorsTypes.FETCH_MENTORS_SUCCESS:
      return {
        ...state,
        pending: false,
        mentors: action.payload.mentors,
        error: null,
      };
    case mentorsTypes.FETCH_MENTORS_FAILURE:
      return {
        ...state,
        pending: false,
        mentors: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
