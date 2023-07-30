import { team_memberTypes,team_membersTypes } from '../actionTypes/TeamMembersTypes';
import { TeamMembersActions,Team_MembersState } from '../types/team_membersTypes';
import { ITeam_Member } from '../models/ITeam_Member';
import { Reducer } from 'redux';

const initialState: Team_MembersState = {
  pending: true,
  team_members: [],
  team_member: {},
  error: null,
};

export const team_membersReducer: Reducer = (
  state = initialState,
  action: TeamMembersActions
) => {
  switch (action.type) {
    case team_membersTypes.FETCH_TEAM_MEMBERS_REQUEST:
      return { ...state, pending: true };
    case team_membersTypes.FETCH_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        pending: false,
        team_members: action.payload.team_members,
        error: null,
      };
    case team_membersTypes.FETCH_TEAM_MEMBERS_FAILURE:
      return {
        ...state,
        pending: false,
        team_members: [],
        error: action.payload.error,
      };
    case team_memberTypes.FETCH_TEAM_MEMBER_REQUEST:
      return { ...state, pending: true };
    case team_memberTypes.FETCH_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        pending: false,
        team_member: action.payload,
        error: null,
      };
    case team_memberTypes.FETCH_TEAM_MEMBER_FAILURE:
      return {
        ...state,
        pending: false,
        team_member: {},
        error: action.payload.error,
      };
       default:
      return state;
  }
};
