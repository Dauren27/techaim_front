import { combineReducers, Reducer } from 'redux';
import { partnersReducer } from './partnersReducer';
import { newsReducer } from './newsReducer';
import { mentorsReducer } from './mentorsReducer';
import { team_membersReducer } from './team_memberReducer';
import { supervisorsReducer } from './supervisorsReducer';
import { projectsReducer } from './projectsReducer';
import { projectReducer } from './projectReducer';
import { formsReducer } from './formReducer'
import { reportsReducer } from './reportsReducer';
import { mentorReducer } from './mentorReducer';
import { currentNewsReducer } from './currentNewsReducer';

export const rootReducer: Reducer = combineReducers({
  partners: partnersReducer,
  news: newsReducer,
  currentNews: currentNewsReducer,
  mentors: mentorsReducer,
  mentor: mentorReducer,
  team_members: team_membersReducer,
  supervisors: supervisorsReducer,
  projects: projectsReducer,
  project: projectReducer,
  forms: formsReducer,
  reports: reportsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
