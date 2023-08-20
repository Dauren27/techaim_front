import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./queryReducers/authApi";
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
import { newsApi } from "./queryReducers/newsApi";
import { mentorsApi } from "./queryReducers/mentorsApi";
import { projectsApi } from "./queryReducers/projectsApi";
import { supervisorsApi } from "./queryReducers/supervisorsApi";
import { reportsApi } from "./queryReducers/reportsApi";
import { teamsApi } from "./queryReducers/teamsApi";
import { partnersApi } from "./queryReducers/partnersApi";

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
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [mentorsApi.reducerPath]: mentorsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
    [supervisorsApi.reducerPath]: supervisorsApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
    [partnersApi.reducerPath]: partnersApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware()
      .concat(sagaMiddleware)
      .concat(
        authApi.middleware,
        newsApi.middleware,
        mentorsApi.middleware,
        projectsApi.middleware,
        teamsApi.middleware,
        supervisorsApi.middleware,
        reportsApi.middleware,
        partnersApi.middleware
      ),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;
