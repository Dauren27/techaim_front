import { reportsTypes,reportTypes } from '../actionTypes/ReportsTypes';
import { ReportsActions,ReportsState } from '../types/reportsTypes';
import { IReports } from '../models/IReports';
import { Reducer } from 'redux';

const initialState: ReportsState = {
  pending: true,
  reports: [],
  report: {},
  error: null,
};

export const reportsReducer: Reducer = (
  state = initialState,
  action: ReportsActions
) => {
  switch (action.type) {
    case reportsTypes.FETCH_REPORTS_REQUEST:
      return { ...state, pending: true };
    case reportsTypes.FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        pending: false,
        reports: action.payload.reports,
        error: null,
      };
    case reportsTypes.FETCH_REPORTS_FAILURE:
      return {
        ...state,
        pending: false,
        reports: [],
        error: action.payload.error,
      };
    case reportTypes.FETCH_REPORT_REQUEST:
      return { ...state, pending: true };
    case reportTypes.FETCH_REPORT_SUCCESS:
      return {
        ...state,
        pending: false,
        report: action.payload,
        error: null,
      };
    case reportTypes.FETCH_REPORT_FAILURE:
      return {
        ...state,
        pending: false,
        report: {},
        error: action.payload.error,
      };
       default:
      return state;
  }
};
