import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/buttons/button';

import styles from './index.module.scss';
interface Props {
  order?: 'first';
  orientation: 'right' | 'left';
  background_img: string;
  title: string;
  title_icon: string;
  text: string;
  buttons?: Array<any>;
  id?: string
}

export default function ServiceBlock(props: Props) {
  return (
    <div
      className={['service_block', props.orientation].join(' ')}
    >
      <div className={['content', props.order].join(' ')}>
        <div className={['content_title'].join(' ')}>
          <img src={props.title_icon} alt='' />
          <h2>{props.title}</h2>
        </div>
        <p>{props.text}</p>
        <div  className={[styles.buttons_section].join(' ')}>
          {props.buttons
            ? props.buttons.map((el,i) => (
                <a key={i} href={el.href}>
                  <Button
                   
                    color='yellow'
                    onClick={() => {
                      console.log('Button clicked');
                    }}
                  >
                    {el.title}
                  </Button>
                </a>
              ))
            : null}
        </div>
      </div>
      <div
        className={["image"].join(' ')}
        style={{ backgroundImage: 'url(' + props.background_img + ')' }}
      ></div>
    </div>
  );
}
