import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import SectionHeader from "../../components/headers/section-header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchCurrentNewsRequest } from "../../../store/actions/currentNewsAction";
import { path } from "../../../api/ApiRequest";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import news_img from "../../../shared/images/news_details/news_img.png";
import fb from "../../../shared/icons/FB.svg";
import instagram from "../../../shared/icons/Instagram.svg";
import twitter from "../../../shared/icons/twitter.svg";
import linkedin from "../../../shared/icons/linkedin.svg";
import youtube from "../../../shared/icons/youtube.svg";
import tiktok from "../../../shared/icons/tiktok_color.svg";

export default function NewsDetail() {
  const { t } = useTranslation();
  type id = any;
  const { id } = useParams<id>();
  const dispatch = useDispatch();
  const { currentNews } = useSelector((state: RootState) => state.currentNews);
  useEffect(() => {
    dispatch(fetchCurrentNewsRequest({ id: +id }));
  }, []);

  const {
    readTime,
    lang,
    title,
    shortDescription,
    fullDescription,
    teamMemberNameDto = {},
  } = currentNews;
  console.log();
  return (
    <>
      <section className={styles.container}>
        <Breadcrumbs
          page_title={t("news_Details_title")}
          page_title2={title}
          page_url={`/news`}
        />
      </section>
      <section className={styles.newsDetail}>
        <div className={styles.newsDetail__header}>
          <h2>{title} </h2>
        </div>
        <div className={styles.row}>
          <div className={styles.col4}>
            <p>
              {teamMemberNameDto.firstName} {teamMemberNameDto.lastName}
              <br />
              <span>techaim@techaim.org</span> <br />
            </p>
          </div>
          <div className={styles.col4}>
            <a
              href="https://www.youtube.com/channel/UC71cWWx_H3dDEBJ_Zy1T6Sg/videos"
              target="blank"
            >
              <div className={styles.start}>
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 15V2.5V0L7.5 7.5L0 15Z" fill="white" />
                </svg>
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UC71cWWx_H3dDEBJ_Zy1T6Sg/videos"
              target="blank"
            >
              <p>{t("news_player")}</p>
            </a>
          </div>
          <div className={styles.col4}>
            <p>
              {t("imageby")} <br />
              {t("image1")}
              <br />
            </p>
          </div>
        </div>
        <div
          className={styles.newsDetail__card_img}
          style={{
            backgroundImage: `url(${path}/public-api/news/${currentNews.id}/photo)`,
          }}
        ></div>
        <div className={styles.row}>
          <div className={styles.col3}>
            <h5> {t("timeNEWs")}</h5>
            <h2> {t("subTitleNews")}</h2>
            <p>
              ОФ Techaim <br />
              10:37 pm KYR
            </p>
          </div>
          <div className={styles.col9}>
            <div className={styles.newsDetail__socials}>
              <span>
                <a href="https://www.instagram.com/techaim.kg/" target="blank">
                  <img src={instagram} alt="" />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/techaimkg" target="blank">
                  <img src={twitter} alt="" />
                </a>
              </span>
              <span>
                <a href="http://facebook.com/techaim.kg" target="blank">
                  <img src={fb} alt="" />
                </a>
              </span>
              <span>
                <a href="https://vt.tiktok.com/ZSRYpRCNY/" target="blank">
                  <img src={tiktok} alt="" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/company/techaim/"
                  target="blank"
                >
                  <img src={linkedin} alt="" />
                </a>
              </span>
              <span className={styles.youtube}>
                <a
                  href="https://www.youtube.com/channel/UC71cWWx_H3dDEBJ_Zy1T6Sg/videos"
                  target="blank"
                >
                  <img src={youtube} alt="" />
                </a>
              </span>
            </div>
            <div className={styles.grid__container}>
              <div className={styles.grid__item}>{shortDescription}</div>
              <div className={styles.grid__item}>{fullDescription}</div>
            </div>
            <div className={styles.colu4}>
              <p>
                {teamMemberNameDto.firstName} {teamMemberNameDto.lastName}
                <br />
                <span>techaim@techaim.org</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
