import * as React from 'react';
import SectionHeader from '../../components/headers/section-header';
import Breadcrumbs from '../../components/breadcrumbs';
import ServiceBlock from './service_block';
import { useTranslation } from 'react-i18next';

import mentorshipBg from '../../../shared/images/services_page/mentorship.jpg';
import trainingsBg from '../../../shared/images/services_page/trainings.jpg';
import eventsBg from '../../../shared/images/services_page/events.jpg';
import podcastBg from '../../../shared/images/services_page/podcast.jpg';

import blockTitleIcon from '../../../shared/icons/block_title.svg';
import blockTitleIconDown from '../../../shared/icons/block_title_icon_down.svg';
import blockTitleIconLeft from '../../../shared/icons/block_title_icon_left.svg';

// TODO: add links to Google Forms, buttons titles?

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <Breadcrumbs page_title={t('service')} page_url="/services" />
      </section>
      <SectionHeader title={t('service')} underline />
      <ServiceBlock
        order="first"
        orientation="left"
        background_img={mentorshipBg}
        title={t('title6')}
        title_icon={blockTitleIcon}
        text={t('disc')}
        buttons={[
          { href: 'https://docs.google.com/forms/d/1Ho2GWbf6VZmzlQozS__rxFwx9t8MZNVlGu7PON56kLs/edit', title: t('service_button') },
          { title: t('service_button1'), href: 'https://docs.google.com/forms/d/1ZRqmdSbLU8xPDj5sQyL2EF8xCuNSUL7dAwJWM-tpDxM/edit' },
        ]}
      ></ServiceBlock>
      <ServiceBlock
        orientation="right"
        background_img={trainingsBg}
        title={t('title7')}
        title_icon={blockTitleIconDown}
        text={t('disc1')}
        buttons={[{ href: '/contact', title: t('service_button2') }]}
      ></ServiceBlock>
      <ServiceBlock
        orientation="left"
        background_img={eventsBg}
        title={t('title8')}
        title_icon={blockTitleIconLeft}
        text={t('disc2')}
        buttons={[{ href: '/projects', title: t('service_button3') }]}
      ></ServiceBlock>
      <ServiceBlock
        orientation="right"
        background_img={podcastBg}
        title={t('title9')}
        title_icon={blockTitleIcon}
        buttons={[{ href: 'https://www.youtube.com/channel/UC71cWWx_H3dDEBJ_Zy1T6Sg', title: t('service_button4') }]}
        text={t('disc3')}
      ></ServiceBlock>
    </>
  );
}
