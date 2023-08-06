import React from 'react';
import { Link } from 'react-router-dom';
import { INews } from '../../../../store/models/INews';
import { path } from '../../../../api/ApiRequest';
import styles from './index.module.scss';

interface IProps {
  data: INews;
  column?: boolean;
  popular?: boolean;
}

export function LittleNewsCard(props: IProps) {
  const news: INews = props.data;
  return (
    <Link to={`./news/details/${news.id}`} className={styles.card_wrapper}>
      <div
        className={[
          styles.card,
          props.column ? styles.column : ""
        ].join(' ')}
      >
        
        <div className={styles.text_content}>
          <h6 className={styles.title}>{news.title}</h6>
          <p>{news.shortDescription}</p>
 
           
        </div>
      </div>
    </Link>
  );
}
