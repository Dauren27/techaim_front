import React, { useState } from 'react';
import { NewsCard } from '../../../components/news_card';
import { INews } from '../../../../store/models/INews';
import { LittleNewsCard } from '../../../components/news_card/little_news_card';
import { path } from '../../../../api/ApiRequest';
import { Link } from 'react-router-dom';



import styles from './index.module.scss';

interface IProps {
  news: Array<INews>;
  horizontal?: boolean;
  popular?: boolean;
}

export default function NewsFeed(props: IProps) {
  const { news } = props;
  return (
    <>
      <div className={styles.news_feed}>
        <Link to={`./news/details/${news[0].id}`} className={styles.card_wrapper}>
          <div className={styles.card_img}>
            <img src={`${path}/public-api/news/${news[0].id}/photo`} alt="" />
          </div>
          <NewsCard data={news[0]} />
        </Link>
        <div className={styles.feed_right}>
          {news.slice(1, 3).map((n) => (
            <div className={styles.card}>
              <Link to={`./news/details/${n.id}`} >
              <div
                className={styles.crop}
                style={{
                  backgroundImage: `url(${path}/public-api/news/${n.id}/photo)`,
                }}></div>
                </Link>
              <LittleNewsCard key={n.id} data={n} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
