import { projectTypes } from '../actionTypes/ProjectTypes';
import { ProjectActions, ProjectState } from '../types/projectTypes';
import { Reducer } from 'redux';

const initialState: ProjectState = {
  pending: true,
  id: null,
  project: {},
  error: null,
};

export const projectReducer: Reducer = (
  state = initialState,
  action: ProjectActions
) => {
  switch (action.type) {
    case projectTypes.FETCH_PROJECT_REQUEST:
      return { ...state, pending: true, id: action.payload?.id, error: null };
    case projectTypes.FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        pending: false,
        project: action.payload?.project,
        error: null,
      };
    case projectTypes.FETCH_PROJECT_FAILURE:
      return {
        ...state,
        pending: false,
        project: {},
        error: action.payload?.error,
      };
    default:
      return state;
  }
};
