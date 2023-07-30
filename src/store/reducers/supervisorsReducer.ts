import { supervisorsTypes } from '../actionTypes/supervisorsTypes';
import { SupervisorsState,SupervisorsActions } from '../types/supervisorsTypes';
import { ISupervisor, ISupervisors } from '../models/ISupervisors';
import { Reducer } from 'redux';
import { truncateSync } from 'fs';

const initialState: SupervisorsState = {
  pending: false,
  supervisors: [],
  supervisor: {},
  error: null,
};

export const supervisorsReducer: Reducer = (
  state = initialState,
  action: SupervisorsActions
) => {
  switch (action.type) {
    case supervisorsTypes.FETCH_SUPERVISORS_REQUEST:
      return { ...state, pending: false };
    case supervisorsTypes.FETCH_SUPERVISORS_SUCCESS:
      return {
        ...state,
        pending: false,
        supervisors: action.payload.supervisors,
        error: null,
      };
    case supervisorsTypes.FETCH_SUPERVISORS_FAILURE:
      return {
        ...state,
        pending: false,
        supervisors: [],
        error: action.payload.error,
      };
    case supervisorsTypes.FETCH_SUPERVISOR_REQUEST:
      return { ...state, pending: true };
    case supervisorsTypes.FETCH_SUPERVISORS_SUCCESS:
      return {
        ...state,
        pending: false,
        supervisor: action.payload,
        error: null,
      };
    case supervisorsTypes.FETCH_SUPERVISOR_FAILURE:
      return {
        ...state,
        pending: false,
        supervisor: {},
        error: action.payload.error,
      };
       default:
      return state;
  }
};
