import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionHeader from "../../components/headers/section-header";
import Breadcrumbs from "../../components/breadcrumbs";
import { path } from "../../../api/ApiRequest";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchProjectRequest } from "../../../store/actions/projectActions";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import facebook from "../../../shared/icons/facebook_blue.png";
import website from "../../../shared/icons/ic_public.png";
function ProjectPage(props: any) {
  type Params = {
    id: string;
  };
  let { id } = useParams<Params>();
  const dispatch = useDispatch();
  const { project } = useSelector((state: RootState) => state.project);
  useEffect(() => {
    dispatch(fetchProjectRequest({ id: +id }));
  }, []);

  const { beginDate, endDate, photoIds, name, goal, result } = project;
  const { t } = useTranslation();
  return (
    <>
      <section>
        <Breadcrumbs
          page_title={t("Project")}
          page_title2={name}
          page_url={`/projects`}
        />
      </section>
      <SectionHeader title={name} underline description={beginDate} />
      {project && project.id ? (
        <div className={[styles.page_content].join(" ")}>
          <div className={[styles.block, styles.left].join(" ")}>
            <div className={[styles.block_text].join(" ")}>
              <h4>{t("Project_title")}</h4>
              <p>{goal}</p>
            </div>
            <div className={[styles.block_img].join("")}>
              <img
                src={`${path}/public-api/project/${project.id}/${photoIds[1]}`}
                alt=""
              />
            </div>
          </div>
          <div className={[styles.block, styles.right].join(" ")}>
            <div className={[styles.block_img].join("")}>
              <img
                src={`${path}/public-api/project/${project.id}/${photoIds[2]}`}
                alt=""
              />
            </div>
            <div className={[styles.block_text].join(" ")}>
              <h4>{t("Project_title2")}</h4>
              <p>{result}</p>
            </div>
          </div>
          <div className={[styles.block, styles.left].join(" ")}>
            <div
              className={[
                styles.more_about_project_block,
                styles.block_text,
              ].join(" ")}
            >
              <h2>Подробнее</h2>
              <p>
                Если вы хотите узнать больше о данном проекте, вы можете пройти
                по следующим ссылкам:
              </p>
              <div className={styles.facebook_block}>
                <img src={facebook} alt="" />
                <span>Facebook</span> <br />
                <a href="http://facebook.com/techaim.kg">
                  <p>Facebook.com/techaim.kg</p>
                </a>
                <div className={styles.webside_block}>
                  <img src={website} alt="" />
                  <span>Website</span> <br />
                  <a href="https://technovationchallenge.org/">
                    <p>TechnovationChallenge.org</p>
                  </a>
                </div>
              </div>
            </div>
            <div className={[styles.block_img].join("")}>
              <img
                src={`${path}/public-api/project/${project.id}/cover_photo`}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectPage;
