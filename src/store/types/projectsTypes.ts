import { IProject} from '../models/IProject';
import { projectsTypes } from '../actionTypes/ProjectsTypes';

export interface ProjectsState {
  pending: boolean;
  projects: IProject[] | [];
  error: any;
}

export interface ProjectState {
  pending: boolean;
  project: IProject| {};
  error: any;
}

export interface FetchProjectsSuccessPayload {
  totalCount: number;
  projects: IProject[];
}

export interface FetchProjectsFailurePayload {
  error: any;
}

export interface FetchProjectSuccessPayload {
  project: IProject;
}

export interface FetchProjectRequestPayload{
  id: number
}

export interface FetchProjectFailurePayload {
  error: any;
}

export interface FetchProjectsRequest {
  type: typeof projectsTypes.FETCH_PROJECTS_REQUEST;
}

export type FetchProjectsSuccess = {
  type: typeof projectsTypes.FETCH_PROJECTS_SUCCESS;
  payload: FetchProjectsSuccessPayload;
};

export type FetchProjectsFailure = {
  type: typeof projectsTypes.FETCH_PROJECTS_FAILURE;
  payload: FetchProjectsFailurePayload;
};

export type ProjectsActions =
  | FetchProjectsRequest
  | FetchProjectsSuccess
  | FetchProjectsFailure