import {
  FetchProjectFailure,
  FetchProjectSuccess,
  FetchProjectRequest,
  FetchProjectRequestPayload,
  FetchProjectFailurePayload,
  FetchProjectSuccessPayload,
} from '../types/projectTypes';

import { projectTypes } from '../actionTypes/ProjectTypes';

export const fetchProjectRequest = (
  payload: FetchProjectRequestPayload
): FetchProjectRequest => ({
  type: projectTypes.FETCH_PROJECT_REQUEST,
  payload,
});

export const fetchProjectSuccess = (
  payload: FetchProjectSuccessPayload
): FetchProjectSuccess => ({
  type: projectTypes.FETCH_PROJECT_SUCCESS,
  payload,
});

export const fetchProjectFailure = (
  payload: FetchProjectFailurePayload
): FetchProjectFailure => ({
  type: projectTypes.FETCH_PROJECT_FAILURE,
  payload,
});
