import * as React from "react";
import ButtonComponent from "../../../components/buttons/button";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NewsCard } from "../../../components/news_card";
import { RootState } from "../../../../store/reducers/rootReducer";
import { fetchNewsRequest } from "../../../../store/actions/newsActions";
import { INews } from "../../../../store/models/INews";
import { LittleNewsCard } from "../../../components/news_card/little_news_card";
import NewsFeed from "../../news_page/news_feed";
import styles from "./index.module.scss";
import StateCheck from "../../../components/state_check";

export default function MainPageNewsFeed() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pending, news, error } = useSelector(
    (state: RootState) => state.news
  );
  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, []);

  const history = useHistory();
  const redirect = () => {
    history.push("/news");
  };

  return (
    <section className={styles.news_feed}>
      <h4 className={styles.title}>{t("News")}</h4>
      {news.length > 0 && <NewsFeed news={news} />}
      <StateCheck
        error={error && error?.message}
        pending={pending}
        data={news}
      />
      <div className={styles.all_news_button}>
        <ButtonComponent color={"yellow"} onClick={redirect}>
          {t("All news")}
        </ButtonComponent>
      </div>
    </section>
  );
}
