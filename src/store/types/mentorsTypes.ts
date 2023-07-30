import { IMentor, IMentors} from '../models/IMentor';
import { mentorsTypes } from '../actionTypes/MentorsTypes';

export interface MentorsState {
  pending: boolean;
  mentors: IMentors[] | [];
  error: any;
}

export interface MentorState {
  pending: boolean;
  mentor: IMentor| {};
  error: any;
}

export interface FetchMentorsSuccessPayload {
  totalCount: number;
  mentors: IMentor[];
}

export interface FetchMentorsFailurePayload {
  error: any;
}

export interface FetchMentorSuccessPayload {
  mentor: IMentor;
}

export interface FetchMentorRequestPayload{
  id: number
}

export interface FetchMentorFailurePayload {
  error: any;
}

export interface FetchMentorsRequest {
  type: typeof mentorsTypes.FETCH_MENTORS_REQUEST;
}

export type FetchMentorsSuccess = {
  type: typeof mentorsTypes.FETCH_MENTORS_SUCCESS;
  payload: FetchMentorsSuccessPayload;
};

export type FetchMentorsFailure = {
  type: typeof mentorsTypes.FETCH_MENTORS_FAILURE;
  payload: FetchMentorsFailurePayload;
};



export type MentorsActions =
  | FetchMentorsRequest
  | FetchMentorsSuccess
  | FetchMentorsFailure