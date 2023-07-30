import axios, { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ITeam_Member, ITeam_Members } from '../models/ITeam_Member';
import {
  fetchTeamMembersFailure,
  fetchTeamMembersSuccess,
  fetchTeamMemberSuccess,
  fetchTeamMemberFailure,
} from '../actions/teamMembersActions';
import { team_membersTypes, team_memberTypes } from '../actionTypes/TeamMembersTypes';
import { path } from '../../api/ApiRequest';

const getTeamMembers = (lang: string = 'RUS') =>
  axios.get<ITeam_Members>(`${path}/public-api/${lang}/team_members`);

const getTeamMember = (lang: string = 'RUS', id?: number) =>
  axios.get<ITeam_Member>(`${path}/${lang}/team_member/${id}`);

function* fetchTeamMembersSaga() {
  try {
    const response: AxiosResponse<ITeam_Members> = yield call(getTeamMembers);

    yield put(
      fetchTeamMembersSuccess({
        totalCount: response.data.totalCount,
        team_members: response.data.list,
      })
    );
  } catch (e) {
    yield put(
      fetchTeamMembersFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* fetchTeamMemberSaga() {
  try {
    const response: AxiosResponse<ITeam_Member> = yield call(getTeamMember);

    yield put(
      fetchTeamMemberSuccess({
        team_member: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchTeamMemberFailure({
        error: e as AxiosError,
      })
    );
  }
}

function* team_membersSaga() {
  yield all([
    takeLatest(team_membersTypes.FETCH_TEAM_MEMBERS_REQUEST, fetchTeamMembersSaga),
    takeLatest(team_memberTypes.FETCH_TEAM_MEMBER_REQUEST, fetchTeamMemberSaga),
  ]);
}

export default team_membersSaga;
