import { reportsTypes,reportTypes } from '../actionTypes/ReportsTypes';
import {
    FetchReportsFailure,
    FetchReportsSuccess,
    FetchReportsRequest,
    FetchReportsFailurePayload,
    FetchReportsSuccessPayload,
    FetchReportFailure,
    FetchReportSuccess,
    FetchReportRequest,
    FetchReportFailurePayload,
    FetchReportSuccessPayload,
} from '../types/reportsTypes';

export const fetchReportsRequest = (): FetchReportsRequest => ({
    type: reportsTypes.FETCH_REPORTS_REQUEST,
  });
  
  export const fetchReportsSuccess = (
    payload: FetchReportsSuccessPayload
  ): FetchReportsSuccess => ({
    type: reportsTypes.FETCH_REPORTS_SUCCESS,
    payload,
  });
  
  export const fetchReportsFailure = (
    payload: FetchReportsFailurePayload
  ): FetchReportsFailure => ({
    type: reportsTypes.FETCH_REPORTS_FAILURE,
    payload,
  });
  
  export const fetchReportRequest = (): FetchReportRequest => ({
    type: reportTypes.FETCH_REPORT_REQUEST,
  });
  
  export const fetchReportSuccess = (
    payload: FetchReportSuccessPayload
  ): FetchReportSuccess => ({
    type: reportTypes.FETCH_REPORT_SUCCESS,
    payload,
  });
  
  export const fetchReportFailure = (
    payload: FetchReportFailurePayload
  ): FetchReportFailure => ({
    type: reportTypes.FETCH_REPORT_FAILURE,
    payload,
  });