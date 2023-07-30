import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonComponent from '../../../components/buttons/button';
import girl_image from '../../../../shared/images/intro/girl.png';
import instagram from '../../../../shared/icons/Instagram.svg';
import fb from '../../../../shared/icons/FB.svg';
import linkedin from '../../../../shared/icons/linkedin.svg';

const styles = require('./index.scss');

export default function MainPageIntro() {
  const { t } = useTranslation();

  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.left_content}>
          <div className={styles.blockWrapper}>
            <h4>{t('Public Foundation')}</h4>
            <h3>{t('Techaim')}</h3>
            <p key='foundation_history'>{t('foundation_history')}</p>
            <p key='foundation_history_2'>{t('foundation_history_2')}</p>
            <a href='#t1'>
              <ButtonComponent
                className={[styles.button].join()}
                onClick={() => null}
              >
                {t('Know more')}
              </ButtonComponent>
            </a>
            <div className={styles.social_media_wrapper}>
              <span className={styles.social_media_icon}>
                <a href='https://www.linkedin.com/company/techaim/'>
                  <img src={linkedin} alt='linkedin' />
                </a>
              </span>
              <span className={styles.social_media_icon}>
                <a href='http://facebook.com/techaim.kg'>
                  <img src={fb} alt='facebook' />
                </a>
              </span>
              <span className={styles.social_media_icon}>
                <a href='https://www.instagram.com/techaim.kg/'>
                  <img src={instagram} alt='instagram' />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <img className={styles.image_girl} src={girl_image} alt='girl' />
        </div>
      </div>
    </section>
  );
}
