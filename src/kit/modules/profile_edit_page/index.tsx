import React, { useState } from 'react';
import SectionHeader from '../../components/headers/section-header';
import Breadcrumbs from '../../components/breadcrumbs';
import ProfileEditForm from './profile_edit_form';
import EditAvatar from './edit_avatar';

const styles = require('./index.scss');

export default function ProfileEditPage() {
  const [profileAvatar, setProfileAvatar] = useState('');
  const [profileValues, setProfileValues] = useState({
    fullName: 'Алтынай Нуркамилова',
    position: 'Координатор',
    email: 'techaim@gmail.com',
    phone: '+996555555555',
    facebook: 'facebook.com',
    instagram: 'instagram.com',
    competencies: 'программирование',
    short_bio:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore obcaecati eos quis alias nam ex debitis magni voluptates fugiat animi quos quasi illo a, facilis in fugit perspiciatis, dolorem beatae nemo quas. Vero delectus officiis quam ullam suscipit enim praesentium?',
  });

  return (
    <>
      <section>
        <Breadcrumbs page_title='Редактировать профиль' page_url='/edit' />
      </section>
      <SectionHeader title='Редактировать Профиль' />
      <section className={[styles.section].join(' ')}>
        <ProfileEditForm {...profileValues} />
        <div className={[styles.card].join(' ')}>
          <EditAvatar avatar={profileAvatar} setAvatar={setProfileAvatar} />
          <div className={[styles.card_info].join('')}>
            <div>
              <div className={[styles.card_info_header].join('')}>
                <h2>{profileValues.fullName}</h2>
                <span>{profileValues.position}</span>
              </div>
              <div className={[styles.card_info_bio].join('')}>
                <p>{profileValues.short_bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
