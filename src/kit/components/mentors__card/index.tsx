import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import { path } from '../../../api/ApiRequest';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import avatarIcon from '../../../shared/icons/person.svg';
import linkedinIcon from '../../../shared/icons/icon-linkedin-grey.svg';
import instagram from '../../../shared/icons/icon-instagram-grey.svg';


type CardType = 'team' | 'mentor';
type CardSize = 'mini' | 'normal';

interface Props {
  id: number;
  company: string;
  socialLink?: ISocialLink;
  mentorTrDto: IMentorTrDto;
  mentorSkillDtos: Array<IMentorSkillDtos>;
  type?: CardType;
  size?: CardSize;
  
}
interface ISocialLink{
  facebook: string;
  twitter: string;
  linkedIn: string;
}

interface IMentorTrDto{
  lang: string;
  position: string;
  firstName: string;
  lastName: string;
  cometences:string;
  bio:string
}
interface IMentorSkillDtos{
  id:number;
  name: string
}

export default function MentorCard(props: Props) {
  const mentor=props
  const facebookLink = mentor.socialLink && mentor.socialLink.facebook ? (
    <Link to={{ pathname: mentor.socialLink.facebook }} target="_blanck">
      <img src={instagram} alt="fb_icon" />
    </Link>
  ) : null;


  const linkedinLink = mentor.socialLink && mentor.socialLink.linkedIn ? (
    <Link to={{ pathname: mentor.socialLink.linkedIn }} target="_blank">
      <img src={linkedinIcon} alt='linkedin_icon' />
    </Link>
  ) : null;

  return (
    <div
    className={[
      styles.card,
      props.type === 'mentor' ? styles.mentor : styles.team,
      props.size === 'mini' ? styles.mini : '',
    ].join(' ')}
  >
    <>
      <Link to={`/mentors/${props.id}`}>
      <div className={[styles.card_avatar].join('')}>
        <img
          src={`${path}/public-api/mentor/${mentor.id}/photo` || avatarIcon}
          alt='avatar'
        />
      </div>
        </Link>
      <div className={[styles.card_info].join('')}>
        <div>
          <div className={[styles.card_info_header].join('')}>
            <span>{`${mentor.mentorTrDto.firstName}  ${mentor.mentorTrDto.lastName}`}</span>
            <h3>{`${mentor.mentorTrDto.position}`}</h3>
          </div>
          {props.size === 'mini' || !mentor.company ? null : (
            <div className={[styles.card_info_bio].join('')}>
              <p>{mentor.company}</p>
            </div>
          )}
        </div>
        {props.size === 'mini' || !props.socialLink ? null : (
          <div className={[styles.card_info_social].join('')}>
            {facebookLink}
            {linkedinLink}
          </div>
        )}
      </div>
    </>
  </div>
  );
}
