import { ISupervisor } from '../models/ISupervisors';
import { supervisorsTypes } from '../actionTypes/supervisorsTypes';

export interface SupervisorsState {
  pending: boolean;
  supervisors: ISupervisor[] | [];
  supervisor: ISupervisor | {};
  error: any;
}

export interface FetchSupervisorsSuccessPayload {
  totalCount: number;
  supervisors: ISupervisor[];
}

export interface FetchSupervisorsFailurePayload {
  error: any;
}

export interface FetchSupervisorSuccessPayload {
  supervisors: ISupervisor;
}

export interface FetchSupervisorFailurePayload {
  error: any;
}
export interface FetchSupervisorsRequest {
  type: typeof supervisorsTypes.FETCH_SUPERVISORS_REQUEST;
}

export type FetchSupervisorsSuccess = {
  type: typeof supervisorsTypes.FETCH_SUPERVISORS_SUCCESS;
  payload: FetchSupervisorsSuccessPayload;
};

export type FetchSupervisorsFailure = {
  type: typeof supervisorsTypes.FETCH_SUPERVISORS_FAILURE;
  payload: FetchSupervisorsFailurePayload;
};

export interface FetchSupervisorRequest {
  type: typeof supervisorsTypes.FETCH_SUPERVISOR_REQUEST;
}

export type FetchSupervisorSuccess = {
  type: typeof supervisorsTypes.FETCH_SUPERVISOR_SUCCESS;
  payload: FetchSupervisorSuccessPayload;
};

export type FetchSupervisorFailure = {
  type: typeof supervisorsTypes.FETCH_SUPERVISOR_FAILURE;
  payload: FetchSupervisorFailurePayload;
};

export type SupervisorsActions =
  | FetchSupervisorsRequest
  | FetchSupervisorsSuccess
  | FetchSupervisorsFailure
  | FetchSupervisorRequest
  | FetchSupervisorsSuccess
  | FetchSupervisorFailure