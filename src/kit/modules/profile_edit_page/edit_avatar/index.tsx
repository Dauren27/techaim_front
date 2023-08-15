import React from 'react';

import styles from './index.module.scss';
import avatarPlaceholder from '../../../../shared/icons/person.svg';

interface Props {
  avatar?: string;
  setAvatar: any;
}

export default function EditAvatar(props: Props) {
  function changeAvatar(e: any) {
    const file = e.currentTarget.files[0];
    props.setAvatar(file);
  }

  return (
    <div
      className={[styles.avatar].join(' ')}
      style={{
        backgroundImage: `url(${props.avatar || avatarPlaceholder})`,
      }}
    >
      <input type='file' accept='image/*' onChange={(e) => changeAvatar(e)} />
    </div>
  );
}
