import { projectsTypes } from '../actionTypes/ProjectsTypes';
import {
  FetchProjectsFailure,
  FetchProjectsSuccess,
  FetchProjectsRequest,
  FetchProjectsFailurePayload,
  FetchProjectsSuccessPayload,
} from '../types/projectsTypes';

export const fetchProjectsRequest = (): FetchProjectsRequest => ({
  type: projectsTypes.FETCH_PROJECTS_REQUEST,
});

export const fetchProjectsSuccess = (
  payload: FetchProjectsSuccessPayload
): FetchProjectsSuccess => ({
  type: projectsTypes.FETCH_PROJECTS_SUCCESS,
  payload,
});

export const fetchProjectsFailure = (
  payload: FetchProjectsFailurePayload
): FetchProjectsFailure => ({
  type: projectsTypes.FETCH_PROJECTS_FAILURE,
  payload,
});