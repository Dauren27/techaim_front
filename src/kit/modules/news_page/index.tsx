import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchNewsRequest } from "../../../store/actions/newsActions";
import { RootState } from "../../../store/reducers/rootReducer";
import Breadcrumbs from "../../components/breadcrumbs";
import SectionHeader from "../../components/headers/section-header";
import NewsFeed from "./news_feed";
import NewsPopular from "./news_popular";
import styles from "./index.module.scss";
import StateCheck from "../../components/state_check";

export default function NewsPage() {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("July");
  const years = ["March", "April", "May", "June", "July", "August"];
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pending, news, error } = useSelector(
    (state: RootState) => state.news
  );
  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, []);

  return (
    <section className={styles.sections}>
      <Breadcrumbs page_title={t("news_title")} page_url="/news" />
      <SectionHeader title={t("news_title")} />
      <div className={[styles.search_bar].join(" ")}>
        <div className={[styles.custom_select_wrapper].join(" ")}>
          <div
            className={[styles.custom_select, isOpen ? styles.open : ""].join(
              " "
            )}
          >
            <div
              className={[styles.custom_select_trigger].join(" ")}
              onClick={() => setOpen(!isOpen)}
            >
              <span>{t(selectedValue)}</span>
              <div className={[styles.arrow].join(" ")}></div>
            </div>
            <div className={[styles.custom_options].join(" ")}>
              {years
                .filter((year) => year !== selectedValue)
                .map((year) => (
                  <span
                    key={year}
                    className={[styles.custom_option].join(" ")}
                    data-value={year}
                    onClick={() => {
                      setSelectedValue(year);
                      setOpen(true);
                    }}
                  >
                    {t(year)}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <span className={styles.link}>{t("March")}</span>
        <span className={styles.link}>{t("April")}</span>
        <span className={styles.link}>{t("May")}</span>
        <span className={styles.link}>{t("June")}</span>
        <span className={styles.link}>{t("July")}</span>
        <span className={styles.link}>{t("August")}</span>

        <svg
          width="1513"
          height="4"
          viewBox="0 0 1513 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="2" x2="1513" y2="2" stroke="#FFA726" strokeWidth="5" />
        </svg>
      </div>
      <div className={styles.container}>
        <>
          {news && news.length > 0 && (
            <div>
              <NewsFeed news={news} />
              <NewsPopular news={news} />
            </div>
          )}
          <StateCheck
            error={error && error?.message}
            pending={pending}
            data={news}
          />
        </>
      </div>
    </section>
  );
}
