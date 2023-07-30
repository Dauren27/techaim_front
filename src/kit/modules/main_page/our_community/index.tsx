import * as React from 'react';
import { useTranslation } from 'react-i18next';
const styles = require('./index.scss');
const first_block_icon = require('../../../../shared/icons/lapm.png');
const second_block_icon = require('../../../../shared/icons/tec.png');
const third_block_icon = require('../../../../shared/icons/tag.png');

export default function MainPageOurCommunity() {
  const { t } = useTranslation();
  return (
    <section className={styles.our_community}>
      <h4 className={styles.title}>{t('Our Community')}</h4>
      <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.block_icon}>
            <img className={styles.icon} src={first_block_icon} alt='' />
            <h6>{t('Mentors')}</h6>
            </div>
            <p>{t('mentors_info')}</p>
          </div>
        <div className={styles.card}>
          <div className={styles.block_icon}>
          <img className={styles.icon} src={second_block_icon} alt='' />
          <h6>{t('Mentees')}</h6>
          </div>
          <p>{t('mentees_info')}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.block_icon}>
          <img className={styles.icon} src={third_block_icon} alt='' />
          <h6>{t('Ambassadors')}</h6>
          </div>
          <p>{t('ambassadors_info')}</p>
        </div>
      </div>
    </section>
  );
}
