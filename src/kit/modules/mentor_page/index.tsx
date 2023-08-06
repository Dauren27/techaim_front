import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Tag from "../../components/tag";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchMentorRequest } from "../../../store/actions/mentorAction";
import { path } from "../../../api/ApiRequest";

import styles from "./index.module.scss";
import InstagramIcon from "../../../shared/icons/instagram_color_icon.png";
import LinkedinIcon from "../../../shared/icons/linkedin_color.svg";
import BGImg from "../../../shared/images/background_arrow.png";

type Params = {
  id: string;
};

export default function MentorPage() {
  let { id } = useParams<Params>();
  const dispatch = useDispatch();
  const { mentor } = useSelector((state: RootState) => state.mentor);
  useEffect(() => {
    dispatch(fetchMentorRequest({ id: +id }));
  }, []);

  const {
    mentorSkillDtos = [],
    mentorTrDto = {},
    socialLink,
    company,
  } = mentor;
  console.log(company);
  const facebookLink =
    socialLink && socialLink.facebook ? (
      <Link
        to={{ pathname: socialLink.facebook }}
        target="_blanck"
        className={[styles.social_media].join(" ")}
      >
        <img src={InstagramIcon} alt="fb_icon" />
        <span>Instagram</span>
      </Link>
    ) : null;

  const linkedinLink =
    socialLink && socialLink.linkedIn ? (
      <Link
        to={{ pathname: socialLink.linkedIn }}
        target="_blank"
        className={[styles.social_media].join(" ")}
      >
        <img src={LinkedinIcon} alt="linkedin_icon" />
        <span>LinkedIn</span>
      </Link>
    ) : null;

  return (
    <>
      <section>
        <Breadcrumbs
          page_title={"Менторы"}
          page_title2={`${mentorTrDto.firstName} ${mentorTrDto.lastName}`}
          page_url={`/mentors/`}
        />
      </section>

      <section
        className={[styles.section].join(" ")}
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <div className={styles.crop}>
          <img src={`${path}/public-api/mentor/${id}/photo`} alt="avatar" />
        </div>
        <div className={styles.mentor_info}>
          <div>
            <div className={[styles.mentor_name].join(" ")}>
              <h2>
                {mentorTrDto.firstName} {mentorTrDto.lastName}
              </h2>
              <h3>
                {mentorTrDto.position} ({company})
              </h3>
            </div>
            <div className={[styles.mentor_bio].join(" ")}>
              <h4>Био</h4>
              <p>{mentorTrDto.bio}</p>
            </div>
          </div>

          {mentorSkillDtos.map((skill: any) => (
            <div key={skill} className={[styles.mentor_tags].join(" ")}>
              <Tag name={skill.name} />
            </div>
          ))}
          <div className={[styles.mentor_social_medias].join(" ")}>
            {facebookLink}
            {linkedinLink}
          </div>
        </div>
      </section>
    </>
  );
}
