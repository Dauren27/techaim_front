import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { partnersReducer } from "./reducers/partnersReducer";
import { newsReducer } from "./reducers/newsReducer";
import { mentorsReducer } from "./reducers/mentorsReducer";
import { team_membersReducer } from "./reducers/team_memberReducer";
import { supervisorsReducer } from "./reducers/supervisorsReducer";
import { projectsReducer } from "./reducers/projectsReducer";
import { projectReducer } from "./reducers/projectReducer";
import { formsReducer } from "./reducers/formReducer";
import { reportsReducer } from "./reducers/reportsReducer";
import { mentorReducer } from "./reducers/mentorReducer";
import { currentNewsReducer } from "./reducers/currentNewsReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
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
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;
