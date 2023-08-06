import React, { useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs";
import Button from "../../components/buttons/button";
import SectionHeader from "../../components/headers/section-header";
import SupervisorCard from "./supervisor_card";
import Card from "../../components/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchTeamMembersRequest } from "../../../store/actions/teamMembersActions";
import { fetchSupervisorsRequest } from "../../../store/actions/supervisorsAction";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export default function TeamPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { supervisors } = useSelector((state: RootState) => state.supervisors);
  const { pending, team_members, error } = useSelector(
    (state: RootState) => state.team_members
  );
  useEffect(() => {
    dispatch(fetchTeamMembersRequest());
  }, []);
  useEffect(() => {
    dispatch(fetchSupervisorsRequest());
  }, []);

  // let body: JSX.Element;

  // if (!team_members || team_members.length === 0) {
  //   return (body = (
  //     <div className={styles.news_content}>
  //       <div>No news found</div>
  //     </div>
  //   ));
  // } else if (error) {
  //   return (body = (
  //     <div className={styles.news_content}>
  //       <div>Some error occured</div>
  //     </div>
  //   ));
  // } else if (pending) {
  //   return <div>Pending</div>;
  // } else {
  //   body = (
  //     <div className={styles.news_content}>
  //       <div className={styles.right_column}>{}</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <section>
        <Breadcrumbs page_title={t("team")} page_url="/team" />
      </section>
      <SectionHeader title={t("team")} underline />
      <section className={[styles.cards_section].join("")}>
        <div className={[styles.cards_wrapper].join("")}>
          {team_members &&
            team_members.map((el: any) => (
              <Card
                id={el.id}
                type="team"
                key={el.id}
                firstName={el.firstName}
                lastName={el.lastName}
                socialLinks={el.socialLinks}
                bio={el.bio}
                profession={el.profession}
                email={el.email}
              />
            ))}
          {error && <h2>Пройзошла ошибка при загрузке</h2>}
        </div>
      </section>
      <section className={[styles.info_section].join("")}>
        <h2 className={[styles.info_section_title].join("")}>
          {t("team_title")}
        </h2>
        <ul className={[styles.info_section_list].join("")}>
          <li className={[styles.info_section_list_item].join("")}>
            {t("team_description")}
          </li>
          <li className={[styles.info_section_list_item].join("")}>
            {t("team_description1")}
          </li>
          <li className={[styles.info_section_list_item].join("")}>
            {t("team_description2")}
          </li>
          <li className={[styles.info_section_list_item].join("")}>
            {t("team_description3")}
          </li>
          <li className={[styles.info_section_list_item].join("")}>
            {t("team_description4")}
          </li>
          <li className={[styles.info_section_list_item].join("")}>
            {t("team_description5")}
          </li>
        </ul>
        <Link to="/join/team">
          <Button
            color="yellow"
            onClick={() => {}}
            className={[styles.info_section_button].join("")}
          >
            {t("team_button")}
          </Button>
        </Link>
      </section>
      <section className={[styles.supervisors_section].join("")}>
        <SectionHeader title={t("team_title1")} />
        <div className={[styles.supervisors_cards].join("")}>
          {supervisors.map((el: any) => (
            <SupervisorCard
              id={el.id}
              key={el.id}
              firstName={el.firstName}
              lastName={el.lastName}
              company={el.company}
              bio={el.bio}
            />
          ))}
        </div>
      </section>
    </>
  );
}
