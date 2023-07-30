import { IReports } from '../models/IReports';
import { reportsTypes,reportTypes } from '../actionTypes/ReportsTypes';
export interface ReportsState {
  pending: boolean;
  reports: IReports[] | [];
  report: IReports | {};
  error: any;
}

export interface FetchReportsSuccessPayload {
  totalCount: number;
  reports: IReports[];
}

export interface FetchReportsFailurePayload {
  error: any;
}
export interface FetchReportSuccessPayload {
  report: IReports;
}

export interface FetchReportFailurePayload {
  error: any;
}

export interface FetchReportsRequest {
  type: typeof reportsTypes.FETCH_REPORTS_REQUEST;
}

export type FetchReportsSuccess = {
  type: typeof reportsTypes.FETCH_REPORTS_SUCCESS;
  payload: FetchReportsSuccessPayload;
};

export type FetchReportsFailure = {
  type: typeof reportsTypes.FETCH_REPORTS_FAILURE;
  payload: FetchReportsFailurePayload;
};

export interface FetchReportRequest {
  type: typeof reportTypes.FETCH_REPORT_REQUEST;
}

export type FetchReportSuccess = {
  type: typeof reportTypes.FETCH_REPORT_SUCCESS;
  payload: FetchReportSuccessPayload;
};

export type FetchReportFailure = {
  type: typeof reportTypes.FETCH_REPORT_FAILURE;
  payload: FetchReportFailurePayload;
};

export type ReportsActions =
  | FetchReportsRequest
  | FetchReportsSuccess
  | FetchReportsFailure
  | FetchReportRequest
  | FetchReportSuccess
  | FetchReportFailure