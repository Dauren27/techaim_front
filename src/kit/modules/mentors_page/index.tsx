import React, { useEffect } from "react";
import SectionHeader from "../../components/headers/section-header";
import Breadcrumbs from "../../components/breadcrumbs";
import MentorCard from "../../components/mentors__card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchMentorsRequest } from "../../../store/actions/mentorsAction";

import styles from "./index.module.scss";

export default function MentorsPage() {
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
        <Breadcrumbs page_title={"Менторы"} page_url="/mentors" />
      </section>
      <SectionHeader title={"Менторы"} underline />
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
          {}
          {error ? (
            <div className={styles.news_content}>
              <div>Some error occured</div>
            </div>
          ) : (
            !mentors ||
            (mentors.length === 0 && (
              <div className={styles.news_content}>
                <h3>No mentors found</h3>
              </div>
            ))
          )}
          {pending && (
            <div className={styles.news_content}>
              <div>Loading...</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
