import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonComponent from '../../../components/buttons/button';
import OneRowSliderComponent from '../../../components/slider/one_row_slider';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function MainPagePartners(props: any) {
  const { t } = useTranslation();
  return (
    <section className={styles.partners}>
      <h6 className={styles.title}>{t('Our Partners')}</h6>
      <div className={styles.partners_secondary_cards_wrapper}>
        <OneRowSliderComponent {...props} />
        <Link to={'/partners'}>
          <div className={styles.all_partner_button}>
            <ButtonComponent color={'yellow'}>{t('Show more')}</ButtonComponent>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default MainPagePartners;
