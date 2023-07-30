import React from 'react';
const styles = require('./index.scss');

interface Props {
  title: string;
  underline?: boolean;
  description?: string;
}

export default function SectionHeader(props: Props) {
  return (
    <div className={[styles.wrapper].join(' ')}>
      <h2 className={[styles.title].join(' ')}>{props.title}</h2>
      {props.description ? <span className={[styles.description].join('')}>{props.description}</span> : null}
      {props.underline ? (
        <span className={[styles.underline].join('')}></span>
      ) : null}
    </div>
  );
}
