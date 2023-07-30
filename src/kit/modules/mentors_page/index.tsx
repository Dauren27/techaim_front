import React, { useEffect} from 'react';
import SectionHeader from '../../components/headers/section-header';
import Breadcrumbs from '../../components/breadcrumbs';
import MentorCard from '../../components/mentors__card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { fetchMentorsRequest } from '../../../store/actions/mentorsAction';

const styles = require('./index.scss');


export default function MentorsPage() {

  const dispatch = useDispatch();
  const { error, mentors, pending } = useSelector(
    (state: RootState) => state.mentors
  )
  useEffect(() => {
    dispatch(fetchMentorsRequest())
  }, [])

  console.log(mentors)

  let body: JSX.Element;

  if (!mentors || mentors.length === 0) {
    return (body = (
      <div className={styles.news_content}>
        <div>No mentors found</div>
      </div>
    ));
  } else if (error) {
    return (body = (
      <div className={styles.news_content}>
        <div>Some error occured</div>
      </div>
    ));
  } else if (pending) {
    return <div>Pending</div>;
  } else {
    body = (
      <div className={styles.news_content}>
        <div className={styles.right_column}>{ }</div>
      </div>
    );
  }
  return (
    <>
      <section>
        <Breadcrumbs  page_title={('Менторы')} page_url='/mentors' />
      </section>
      <SectionHeader title={('Менторы')} underline />
      <section className={[styles.cards_section].join('')}>
        <div className={[styles.cards_wrapper].join('')}>
          {mentors.map((el: any) => (
            <MentorCard
            mentorTrDto={el.mentorTrDto}
              socialLink={el.socialLink}
              mentorSkillDtos={el.mentorSkillDtos}
              company={el.company}
              id={el.id}
              key={el.id} 
              type="mentor"
              size="normal"
            />
          ))}
        </div>
      </section>
    </>
  );
}
