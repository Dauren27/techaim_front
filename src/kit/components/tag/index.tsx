import React from 'react';

import styles from './index.module.scss';

type PropsTag = {
  name: string;
};

export default function Tag(props: PropsTag) {
  return <div className={[styles.tag].join(' ')}>{props.name}</div>;
}
