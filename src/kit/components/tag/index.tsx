import React from 'react';

const styles = require('./index.scss');

type PropsTag = {
  name: string;
};

export default function Tag(props: PropsTag) {
  return <div className={[styles.tag].join(' ')}>{props.name}</div>;
}
