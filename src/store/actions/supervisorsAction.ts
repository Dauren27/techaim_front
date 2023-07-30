import { supervisorsTypes } from '../actionTypes/supervisorsTypes';
import {
  FetchSupervisorsRequest,
  FetchSupervisorsSuccessPayload,
  FetchSupervisorsSuccess,
  FetchSupervisorsFailurePayload,
  FetchSupervisorsFailure,
  FetchSupervisorRequest,
  FetchSupervisorSuccessPayload,
  FetchSupervisorSuccess,
  FetchSupervisorFailurePayload,
  FetchSupervisorFailure,
} from '../types/supervisorsTypes';

export const fetchSupervisorsRequest = (): FetchSupervisorsRequest => ({
  type: supervisorsTypes.FETCH_SUPERVISORS_REQUEST,

});
export const fetchSupervisorsSuccess = (
  payload: FetchSupervisorsSuccessPayload
): FetchSupervisorsSuccess => ({
  type: supervisorsTypes.FETCH_SUPERVISORS_SUCCESS,
  payload,
});

export const fetchSupervisorsFailure = (
  payload: FetchSupervisorsFailurePayload
): FetchSupervisorsFailure => ({
  type: supervisorsTypes.FETCH_SUPERVISORS_FAILURE,
  payload,
});

export const fetchSupervisorRequest = (): FetchSupervisorRequest => ({
  type: supervisorsTypes.FETCH_SUPERVISOR_REQUEST,
});

export const fetchSupervisorSuccess = (
  payload: FetchSupervisorSuccessPayload
): FetchSupervisorSuccess => ({
  type: supervisorsTypes.FETCH_SUPERVISOR_SUCCESS,
  payload,
});

export const fetchSupervisorFailure = (
  payload: FetchSupervisorFailurePayload
): FetchSupervisorFailure => ({
  type: supervisorsTypes.FETCH_SUPERVISOR_FAILURE,
  payload,
});