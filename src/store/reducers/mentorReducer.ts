import { mentorTypes } from "../actionTypes/MentorTypes";
import { MentorActions, MentorState } from "../types/mentorTypes";
import { Reducer } from "redux";

const initialState: MentorState = {
  pending: true,
  id: null,
  mentor: {},
  error: null,
}

export const mentorReducer: Reducer = (
  state = initialState,
  action: MentorActions
) => {
  switch (action.type) {
    case mentorTypes.FETCH_MENTOR_REQUEST:
      return { ...state, pending: true, id: action.payload?.id, error: null };
    case mentorTypes.FETCH_MENTOR_SUCCESS:
      return {
        ...state,
        pending: false,
        mentor: action.payload?.mentor,
        error: null,
      };
    case mentorTypes.FETCH_MENTOR_FAILURE:
      return {
        ...state,
        pending: false,
        project: {},
        error: action.payload?.error
      };
    default:
      return state;
  }
}