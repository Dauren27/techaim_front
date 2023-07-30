import React from 'react';

const styles = require('./index.scss');
const avatarPlaceholder = require('../../../../shared/icons/person.svg');

interface Props {
  avatar?: string;
  setAvatar: any;
}

export default function EditAvatar(props: Props) {
  function changeAvatar(e: any) {
    const file = e.currentTarget.files[0];
    props.setAvatar(file);
    console.log(file);
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
