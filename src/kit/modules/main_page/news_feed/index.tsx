import * as React from 'react';
import ButtonComponent from '../../../components/buttons/button';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NewsCard } from '../../../components/news_card';
import { RootState } from '../../../../store/reducers/rootReducer';
import { fetchNewsRequest } from '../../../../store/actions/newsActions';
import { INews } from '../../../../store/models/INews';
import { LittleNewsCard } from '../../../components/news_card/little_news_card';
import NewsFeed from '../../news_page/news_feed';
import styles from './index.module.scss';

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
    history.push('/news');
  };

  let body: JSX.Element;

  if (!news || news.length === 0) {
    return (body = (
      <div className={styles.news_content}>
        <div>{t('No news found')}</div>
      </div>
    ));
  } else if (error) {
    return (body = (
      <div className={styles.news_content}>
        <div>{t('Some error occured')}</div>
      </div>
    ));
  } else if (pending) {
    return <div>{t('Pending')}</div>;
  } 

  return (
    <section className={styles.news_feed}>
      <h4 className={styles.title}>{t('News')}</h4>
      <NewsFeed news={news}/>
      <div className={styles.all_news_button}>
        <ButtonComponent color={'yellow'} onClick={redirect}>
          {t('All news')}
        </ButtonComponent>
      </div>
    </section>
  );
}
