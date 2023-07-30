import React from 'react';
import { Link } from 'react-router-dom';
import { INews } from '../../../store/models/INews';
import { path } from '../../../api/ApiRequest';
const styles = require('./index.scss');

interface IProps {
  data: INews;
  horizontal?: boolean;
  popular?: boolean;
}

export function NewsCard(props: IProps) {
  const news: INews = props.data;
  return (
    <Link to={`./news/details/${news.id}`} className={styles.card_wrapper}>
      <div
        className={[
          styles.card,
          props.horizontal ? styles.horizontal : '',
        ].join(' ')}
      >
        <div className={styles.text_content}>
          <h6 className={styles.title}>{news.title}</h6>
          <p>{news.shortDescription}</p>
          {props.popular ? (
            <p>
              <span className={styles.block__time}>
                {news.teamMemberNameDto.firstName}
                <br />8 May, 7:21 pm{' '}
              </span>
              //TODO: add date render from backend, add views field on backend
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
