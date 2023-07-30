import {
  FetchMentorFailure,
  FetchMentorSuccess,
  FetchMentorRequest,
  FetchMentorRequestPayload,
  FetchMentorFailurePayload,
  FetchMentorSuccessPayload,
} from "../types/mentorTypes"

import { mentorTypes } from "../actionTypes/MentorTypes"

export const fetchMentorRequest =(
  payload:FetchMentorRequestPayload
): FetchMentorRequest =>({
  type: mentorTypes.FETCH_MENTOR_REQUEST,
  payload,
});

export const fetchMentorSuccess =(
  payload: FetchMentorSuccessPayload
): FetchMentorSuccess=>({
  type:mentorTypes.FETCH_MENTOR_SUCCESS,
  payload,
})

export const fetchMentorFailure = (
  payload: FetchMentorFailurePayload
): FetchMentorFailure=>({
  type : mentorTypes.FETCH_MENTOR_FAILURE,
  payload,
})