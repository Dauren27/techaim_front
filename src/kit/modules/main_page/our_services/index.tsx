import * as React from 'react';
import { useTranslation } from 'react-i18next';
const styles = require('./index.scss');

const first_block_icon = require('../../../../shared/icons/block_title.svg');
const second_block_icon = require('../../../../shared/icons/block_title_icon_down.svg');
const third_block_icon = require('../../../../shared/icons/block_title_icon_both.svg');
const fourth_block_icon = require('../../../../shared/icons/block_title_icon_left.svg');

export default function MainPageOurServices() {
  const { t } = useTranslation();
  return (
    <section className={styles.our_services}>
      <h4 className={styles.services_title}>{t('Our Services')}</h4>
      <div className={styles.content}>
        <div className={styles.service_card}>
        <div className={styles.service_card2}>
          <img src={first_block_icon} alt={''} />
          <h6>{t('Mentorship')}</h6>
          </div>
          <p>{t('mentorship_info')}</p>
        </div>
        <div className={styles.service_card}>
        <div className={styles.service_card2}>
          <img src={second_block_icon} alt={''} />
          <h6>{t('Trainings')}</h6>
        </div>
          <p>{t('trainings_info')}</p>
        </div>
        <div className={styles.service_card}>
        <div className={styles.service_card2}>
          <img className={styles.third_block_icon} src={third_block_icon} alt={''} />
          <h6>{t('Activities and projects')}</h6>
          </div>
          <p>{t('activities_info')}</p>
        </div>
        <div className={styles.service_card}>
        <div className={styles.service_card2}>
          <img src={fourth_block_icon} alt={''} />
          <h6>{t('Podcasts')}</h6>
          </div>
          <p>{t('podcasts_info')}</p>
        </div>
      </div>
    </section>
  );
}
