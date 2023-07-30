import React from 'react';
import img from './404-img.jpg'
import ec from './_notFoundPage.module.scss'
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={ec.error}>
      <div className={ec.container}>
        <div className={ec.row}>
          <img className={ec.img} src={img} alt="error image"/>
          <h1 className={ec.title}>{t('Page not found')}</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
