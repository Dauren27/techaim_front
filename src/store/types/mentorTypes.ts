import { IMentor } from "../models/IMentor";
import { mentorTypes } from "../actionTypes/MentorTypes";

export interface MentorState{
  pending: boolean;
  id: number|null;
  mentor:IMentor | {};
  error: any;
}

export interface FetchMentorRequestPayload{
  id:number;
}

export interface FetchMentorSuccessPayload{
  mentor: IMentor;
}

export interface FetchMentorFailurePayload{
  error: any;
}

export interface FetchMentorRequest{
  type: typeof mentorTypes.FETCH_MENTOR_REQUEST;
  payload?:FetchMentorRequestPayload;
}

export type FetchMentorSuccess = {
  type: typeof mentorTypes.FETCH_MENTOR_SUCCESS;
  payload?: FetchMentorSuccessPayload;
}

export type FetchMentorFailure={
  type: typeof mentorTypes.FETCH_MENTOR_FAILURE;
  payload?: FetchMentorFailurePayload;
};

export type MentorActions=
| FetchMentorRequest
| FetchMentorSuccess
| FetchMentorFailure