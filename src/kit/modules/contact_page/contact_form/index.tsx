import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';
import Button from '../../../components/buttons/button';
import { useTranslation } from 'react-i18next';
const styles = require('./index.scss');

export default function ContactForm() {
  const [state, handleSubmit] = useForm('contactForm');
  const {t}=useTranslation()

  if (state.succeeded) {
    return (
      <div className={[styles.message].join('')}>
        Спасибо, ваше сообщение успешно отправлено!
      </div>
    );
  }

  return (
    <form
      className={[styles.form].join('')}
      onSubmit={handleSubmit}
      method='post'
      name='contactForm'
    >
      <h2 className={[styles.form_header].join('')}>{t("form_header")}</h2>
      <label htmlFor='name' className={[styles.form_label].join('')}>
        {t("form_name")}
      </label>
      <input
        id='name'
        name='name'
        className={[styles.form_input].join('')}
        type='text'
        placeholder={t("form_name")}
        disabled
      />
      <div className={[styles.error_message].join('')}>
        <ValidationError
          className={[styles.error_message_text].join('')}
          field='name'
          prefix='Name'
          errors={state.errors}
        />
      </div>

      <label htmlFor='mail' className={[styles.form_label].join('')}>
        {t("form_email")}
      </label>
      <input
        id='email'
        name='email'
        className={[styles.form_input].join('')}
        type='email'
        placeholder= {t("form_email")}
        disabled
      />
      <div className={[styles.error_message].join('')}>
        <ValidationError
          className={[styles.error_message_text].join('')}
          field='email'
          prefix='Email'
          errors={state.errors}
        />
      </div>

      <label htmlFor='message' className={[styles.form_label].join('')}>
        {t("form_message")}
      </label>
      <textarea
        id='message'
        name='message'
        className={[styles.form_input].join('')}
        placeholder= {t("form_message")}
        rows={7}
        disabled
      />
      <div className={[styles.error_message].join('')}>
        <ValidationError
          className={[styles.error_message_text].join('')}
          field='message'
          prefix='Message text'
          errors={state.errors}
        />
      </div>
      <Button  onClick={() => console.log('send')} style={{ width: '100%' }}>
         {t("form_button")}
      </Button>
    </form>
  );
}
