import * as React from 'react';
import ButtonComponent from '../../components/buttons/button'

const styles = require('./index.scss');

export default class SignInPage extends React.Component<any, any> {
    render() {
        return (
            <>
                <div className={styles.sign_in_page}>
                    <p className={styles.sign_in_title}>Вдохновляем девушек и женщин, расширяя их возможности в мире Технологий!</p>
                    <div className={styles.sign_in_form}>
                        <p className={styles.form_title}>Зарегистрироваться</p>
                        <input
                            id='first_name'
                            name='first_name'
                            className={styles.form_input}
                            type='text'
                            placeholder='Имя'
                        />
                        <input
                            id='last_name'
                            name='last_name'
                            className={styles.form_input}
                            type='email'
                            placeholder='Фамилия'
                        />
                        <input
                            id='email'
                            name='email'
                            className={styles.form_input}
                            type='email'
                            placeholder='Ваша почта'
                        />
                        <input
                            id='password'
                            name='password'
                            className={styles.form_input}
                            type='password'
                            placeholder='Пароль'
                        />
                        <input
                            id='password'
                            name='password'
                            className={styles.form_input}
                            type='password'
                            placeholder='Подтвердить пароль'
                        />
                        <div className={styles.button}>
                            <ButtonComponent onClick={() => null}>Зарегистрироваться</ButtonComponent>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
