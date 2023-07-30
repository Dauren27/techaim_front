import { mentorsTypes } from '../actionTypes/MentorsTypes';
import {
  FetchMentorsFailure,
  FetchMentorsSuccess,
  FetchMentorsRequest,
  FetchMentorsFailurePayload,
  FetchMentorsSuccessPayload,
} from '../types/mentorsTypes';

export const fetchMentorsRequest = (): FetchMentorsRequest => ({
  type: mentorsTypes.FETCH_MENTORS_REQUEST,
});

export const fetchMentorsSuccess = (
  payload: FetchMentorsSuccessPayload
): FetchMentorsSuccess => ({
  type: mentorsTypes.FETCH_MENTORS_SUCCESS,
  payload,
});

export const fetchMentorsFailure = (
  payload: FetchMentorsFailurePayload
): FetchMentorsFailure => ({
  type: mentorsTypes.FETCH_MENTORS_FAILURE,
  payload,
});