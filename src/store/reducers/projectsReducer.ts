import { projectsTypes } from '../actionTypes/ProjectsTypes';
import { ProjectsActions, ProjectsState } from '../types/projectsTypes';
import { IProject } from '../models/IProject';
import { Reducer } from 'redux';

const initialState: ProjectsState = {
  pending: true,
  projects: [],
  error: null,
};

export const projectsReducer: Reducer = (
  state = initialState,
  action: ProjectsActions
) => {
  switch (action.type) {
    case projectsTypes.FETCH_PROJECTS_REQUEST:
      return { ...state, pending: true };
    case projectsTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        pending: false,
        projects: action.payload.projects,
        error: null,
      };
    case projectsTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        pending: false,
        projects: [],
        error: action.payload.error,
      };
      default:
      return state;
  }
};
