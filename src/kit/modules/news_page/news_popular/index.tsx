import React from 'react';
import { Link } from 'react-router-dom';
import { INews } from '../../../../store/models/INews';
import { NewsCard } from '../../../components/news_card';
import { useTranslation } from 'react-i18next';
import { path } from '../../../../api/ApiRequest';
import { LittleNewsCard } from '../../../components/news_card/little_news_card';
const styles = require('../../../components/news_card/little_news_card/index.scss');


interface IProps {
  news: Array<INews>;
  
}

export default function NewsPopular(props: IProps) {
  const { news } = props;
  const {t}= useTranslation()
  return (
    <div>
      <span className={styles.popular__header} >
       {t("popular_title")}
      </span>
      <svg
        className={styles.popular__svg}
        width='1513'
        height='4'
        viewBox='0 0 1513 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='2' x2='1513' y2='2' stroke='#FFA726' strokeWidth='3' />
      </svg>
        <div className={styles.feed_right}>
        {news.slice(1,4).map((elem) => (
          <div className={styles.card}>
            <Link to={`./news/details/${elem.id}`} >
                 <div
          className={styles.crop}
          style={{
            backgroundImage: `url(${path}/public-api/news/${elem.id}/photo)`,
          }}>
            </div> 
          <LittleNewsCard key={elem.id} data={elem} />
            </Link>
          
          </div>
        ))}
        </div>

      </div>
  );
}
