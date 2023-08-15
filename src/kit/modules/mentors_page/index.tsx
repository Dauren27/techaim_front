import React, { useEffect } from "react";
import SectionHeader from "../../components/headers/section-header";
import Breadcrumbs from "../../components/breadcrumbs";
import MentorCard from "../../components/mentors__card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchMentorsRequest } from "../../../store/actions/mentorsAction";

import styles from "./index.module.scss";
import StateCheck from "../../components/state_check";
import { useTranslation } from "react-i18next";

export default function MentorsPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { error, mentors, pending } = useSelector(
    (state: RootState) => state.mentors
  );
  useEffect(() => {
    dispatch(fetchMentorsRequest());
  }, []);

  return (
    <>
      <section>
        <Breadcrumbs page_title={t("mentors")} page_url="/mentors" />
      </section>
      <SectionHeader title={t("mentors")} underline />
      <section className={[styles.cards_section].join("")}>
        <div className={[styles.cards_wrapper].join("")}>
          {mentors &&
            mentors.map((el: any) => (
              <MentorCard
                mentorTrDto={el.mentorTrDto}
                socialLink={el.socialLink}
                mentorSkillDtos={el.mentorSkillDtos}
                company={el.company}
                id={el.id}
                key={el.id}
                type="mentor"
                size="normal"
              />
            ))}
          <StateCheck
            error={error && error?.message}
            pending={pending}
            data={mentors}
          />
        </div>
      </section>
    </>
  );
}
