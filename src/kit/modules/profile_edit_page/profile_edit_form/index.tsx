import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import styles from './index.module.scss';
interface MyFormValues {
  fullName: string;
  position: string;
  email: string;
  phone: string;
  facebook: string;
  instagram: string;
  competencies: string;
  short_bio: string;
}

const profileSchema = yup.object({
  fullName: yup.string().defined('Это обязательное поле'),
  position: yup.string().defined('Это обязательное поле'),
  email: yup
    .string()
    .defined('Это обязательное поле')
    .email('Неправильно введен email'),
  phone: yup
    .string()
    .defined('Это обязательное поле')
    .matches(
      new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$', 'gmi'),
      'Введите номер в формате +996ХХХХХХХХХ'
    ),
  facebook: yup.string().defined('Это обязательное поле').url('Неверно введен URL'),
  instagram: yup.string().defined('Это обязательное поле').url('Неверно введен URL'),
  competencies: yup.string().defined('Это обязательное поле'), //TODO: change to array
  short_bio: yup.string().defined('Это обязательное поле'),
});

export default function ProfileEditForm(props: MyFormValues) {
  return (
    <Formik
      initialValues={props}
      validationSchema={profileSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form className={[styles.form].join(' ')}>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='fullName'>ФИО</label>
            <Field id='fullName' name='fullName' placeholder='ФИО' />
            {errors.fullName && touched.fullName ? (
              <div className={[styles.error].join(' ')}>{errors.fullName}</div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='position'>Должность</label>
            <Field id='position' name='position' placeholder='Должность' />
            {errors.position && touched.position ? (
              <div className={[styles.error].join(' ')}>{errors.position}</div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='email'>Электронный адрес</label>
            <Field id='email' name='email' placeholder='Электронный адрес' />
            {errors.email && touched.email ? (
              <div className={[styles.error].join(' ')}>{errors.email}</div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='phone'>Телефон</label>
            <Field id='phone' name='phone' placeholder='+996XXXXXXXXX' />
            {errors.phone && touched.phone ? (
              <div className={[styles.error].join(' ')}>{errors.phone}</div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='facebook'>Facebook</label>
            <Field
              id='facebook'
              name='facebook'
              placeholder='https://facebook.com/user'
            />
            {errors.facebook && touched.facebook ? (
              <div className={[styles.error].join(' ')}>{errors.facebook}</div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='instagram'>Instagram</label>
            <Field
              id='instagram'
              name='instagram'
              placeholder='https://instagram.com/user'
            />
            {errors.instagram && touched.instagram ? (
              <div className={[styles.error].join(' ')}>{errors.instagram}</div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='competencies'>Компетенции</label>
            <Field
              id='competencies'
              name='competencies'
              placeholder='Компетенции'
            />
            {errors.competencies && touched.competencies ? (
              <div className={[styles.error].join(' ')}>
                {errors.competencies}
              </div>
            ) : null}
          </div>
          <div className={[styles.field].join(' ')}>
            <label htmlFor='short_bio'>Краткое БИО</label>
            <Field
              id='short_bio'
              name='short_bio'
              as='textarea'
              rows='7'
              placeholder='Краткое БИО'
            />
            {errors.short_bio && touched.short_bio ? (
              <div className={[styles.error].join(' ')}>{errors.short_bio}</div>
            ) : null}
          </div>
          <button type='submit' disabled={false}>
            Обновить
          </button>
        </Form>
      )}
    </Formik>
  );
}
