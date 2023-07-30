import { IProject } from '../models/IProject';
import { projectTypes } from '../actionTypes/ProjectTypes';

export interface ProjectState {
  pending: boolean;
  id: number | null;
  project: IProject | {};
  error: any;
}

export interface FetchProjectRequestPayload {
  id: number;
}
export interface FetchProjectSuccessPayload {
  project: IProject;
}
export interface FetchProjectFailurePayload {
  error: any;
}

export interface FetchProjectRequest {
  type: typeof projectTypes.FETCH_PROJECT_REQUEST;
  payload?: FetchProjectRequestPayload;
}

export type FetchProjectSuccess = {
  type: typeof projectTypes.FETCH_PROJECT_SUCCESS;
  payload?: FetchProjectSuccessPayload;
};

export type FetchProjectFailure = {
  type: typeof projectTypes.FETCH_PROJECT_FAILURE;
  payload?: FetchProjectFailurePayload;
};

export type ProjectActions =
  | FetchProjectRequest
  | FetchProjectSuccess
  | FetchProjectFailure;
