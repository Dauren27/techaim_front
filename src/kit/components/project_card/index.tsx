import React from 'react'
import { path } from '../../../api/ApiRequest';
import OneRowSliderComponent from '../../components/slider/one_row_slider'

import styles from './index.module.scss';

interface Props{
        id: number;
        lang: string;
        beginDate: string;
        endDate: string;
        name: string;
        goal: string;
        result: string;
        photoIds:number
}
export default function ProjectKnowMoree(props:Props) {
    
  return (
    <div className={styles.project__more}>
      <div className={styles.project__more__header}>
        <h1 className={styles.project__more__title}>
            {props.name}
          TECHNOVATION GIRLS CHALLENGE
        </h1>
        <p className={styles.project__more__data}>начало 2017</p>
      </div>
      <div className={styles.project__more__row}>
        <div className={styles.project__more__info}>
          <h3 className={styles.project__more__subtitle}>Цель проекта</h3>
          <p className={styles.project__more__text}>
            Проект, позволяющий девочкам и девушкам решить общественные проблемы
            через командную разработку мобильного приложения. Под руководством
            менторов участницы получают STEM навыки, учатся продвигать стартап
            и, по выигрышу, презентуют его в Калифорнии.{' '}
          </p>
        </div>
        <div className={styles.project__more__img}>
          <img src={`${path}/public-api/project/${props.id}/cover_photo`} alt="more" />
        </div>
      </div>
      <div className={styles.project__more__row}>
        <div className={styles.project__more__info}>
          <h3 className={styles.project__more__subtitle}>Цель проекта</h3>
          <p className={styles.project__more__text}>
            Проект, позволяющий девочкам и девушкам решить общественные проблемы
            через командную разработку мобильного приложения. Под руководством
            менторов участницы получают STEM навыки, учатся продвигать стартап
            и, по выигрышу, презентуют его в Калифорнии.{' '}
          </p>
        </div>
        <div className={styles.project__more__img}>
          <img src={`${path}/public-api/project/${props.id}/cover_photo`} alt="more" />
        </div>
      </div>
      <div className={styles.project__more__row}>
        <div className={styles.project__more__info}>
          <h3 className={styles.project__more__subtitle}>Цель проекта</h3>
          <p className={styles.project__more__text}>
            Проект, позволяющий девочкам и девушкам решить общественные проблемы
            через командную разработку мобильного приложения. Под руководством
            менторов участницы получают STEM навыки, учатся продвигать стартап
            и, по выигрышу, презентуют его в Калифорнии.{' '}
          </p>
        </div>
        <div className={styles.project__more__img}>
          <img src={`${path}/public-api/project/${props.id}/cover_photo`} alt="more" />
        </div>
      </div>
      <div className={styles.project__more__bottom}>
        <h6 className={styles.project__more__bottom__title}>Фотографии</h6>
        <div className={styles.news_secondary_cards_wrapper}>
        <OneRowSliderComponent  {...props}/>
        </div>
      </div>
    </div>
  )
}
