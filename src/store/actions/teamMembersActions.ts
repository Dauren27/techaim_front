import { team_membersTypes,team_memberTypes } from '../actionTypes/TeamMembersTypes';
import {
    FetchTeamMembersFailure,
    FetchTeamMembersSuccess,
    FetchTeamMembersRequest,
    FetchTeamMembersFailurePayload,
    FetchTeamMembersSuccessPayload,
    FetchTeamMemberFailure,
    FetchTeamMemberSuccess,
    FetchTeamMemberRequest,
    FetchTeamMemberFailurePayload,
    FetchTeamMemberSuccessPayload,
} from '../types/team_membersTypes';

export const fetchTeamMembersRequest = (): FetchTeamMembersRequest => ({
    type: team_membersTypes.FETCH_TEAM_MEMBERS_REQUEST,
  });
  
  export const fetchTeamMembersSuccess = (
    payload: FetchTeamMembersSuccessPayload
  ): FetchTeamMembersSuccess => ({
    type: team_membersTypes.FETCH_TEAM_MEMBERS_SUCCESS,
    payload,
  });
  
  export const fetchTeamMembersFailure = (
    payload: FetchTeamMembersFailurePayload
  ): FetchTeamMembersFailure => ({
    type: team_membersTypes.FETCH_TEAM_MEMBERS_FAILURE,
    payload,
  });
  
  export const fetchTeamMemberRequest = (): FetchTeamMemberRequest => ({
    type: team_memberTypes.FETCH_TEAM_MEMBER_REQUEST,
  });
  
  export const fetchTeamMemberSuccess = (
    payload: FetchTeamMemberSuccessPayload
  ): FetchTeamMemberSuccess => ({
    type: team_memberTypes.FETCH_TEAM_MEMBER_SUCCESS,
    payload,
  });
  
  export const fetchTeamMemberFailure = (
    payload: FetchTeamMemberFailurePayload
  ): FetchTeamMemberFailure => ({
    type: team_memberTypes.FETCH_TEAM_MEMBER_FAILURE,
    payload,
  });