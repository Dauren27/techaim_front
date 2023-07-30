import { ITeam_Member } from '../models/ITeam_Member';
import { team_memberTypes,team_membersTypes } from '../actionTypes/TeamMembersTypes';

export interface Team_MembersState {
  pending: boolean;
  team_members: ITeam_Member[] | [];
  team_member: ITeam_Member | {};
  error: any;
}

export interface FetchTeamMembersSuccessPayload {
  totalCount: number;
  team_members: ITeam_Member[];
}

export interface FetchTeamMembersFailurePayload {
  error: any;
}
export interface FetchTeamMemberSuccessPayload {
  team_member: ITeam_Member;
}

export interface FetchTeamMemberFailurePayload {
  error: any;
}

export interface FetchTeamMembersRequest {
  type: typeof team_membersTypes.FETCH_TEAM_MEMBERS_REQUEST;
}

export type FetchTeamMembersSuccess = {
  type: typeof team_membersTypes.FETCH_TEAM_MEMBERS_SUCCESS;
  payload: FetchTeamMembersSuccessPayload;
};

export type FetchTeamMembersFailure = {
  type: typeof team_membersTypes.FETCH_TEAM_MEMBERS_FAILURE;
  payload: FetchTeamMembersFailurePayload;
};

export interface FetchTeamMemberRequest {
  type: typeof team_memberTypes.FETCH_TEAM_MEMBER_REQUEST;
}

export type FetchTeamMemberSuccess = {
  type: typeof team_memberTypes.FETCH_TEAM_MEMBER_SUCCESS;
  payload: FetchTeamMemberSuccessPayload;
};

export type FetchTeamMemberFailure = {
  type: typeof team_memberTypes.FETCH_TEAM_MEMBER_FAILURE;
  payload: FetchTeamMemberFailurePayload;
};

export type TeamMembersActions =
  | FetchTeamMembersRequest
  | FetchTeamMembersSuccess
  | FetchTeamMembersFailure
  | FetchTeamMemberRequest
  | FetchTeamMemberSuccess
  | FetchTeamMemberFailure