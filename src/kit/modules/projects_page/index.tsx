import React, { useEffect } from "react";
import SectionHeader from "../../components/headers/section-header";
import Breadcrumbs from "../../components/breadcrumbs";
import ProjectCard from "./project_card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchProjectsRequest } from "../../../store/actions/projectsActions";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import StateCheck from "../../components/state_check";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const { error, projects, pending } = useSelector(
    (state: RootState) => state.projects
  );
  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <section>
        <Breadcrumbs page_title={t("projects_title")} page_url="/projects" />
      </section>
      <SectionHeader title={t("projects_title")} underline />
      <section className={styles.projects_section}>
        {projects &&
          projects.map((p: any) => (
            <div key={p.id} className={styles.project}>
              <ProjectCard
                key={p.id}
                id={p.id}
                name={p.name}
                goal={p.goal}
                result={p.result}
                beginDate={p.beginDate}
                endDate={p.endDate}
                lang={p.lang}
                photoIds={p.photoIds}
              />
            </div>
          ))}
        <StateCheck
          error={error && error?.message}
          pending={pending}
          data={projects}
        />
      </section>
    </>
  );
}
