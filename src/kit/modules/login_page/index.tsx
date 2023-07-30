import * as React from 'react';
import {FC, useContext, useEffect, useRef, useState} from 'react';
import {Button} from "@material-ui/core";
import AuthContext from "../../../context/authContext";
import {useHistory} from "react-router-dom";
import {postAuthData} from "../../../api/axiosApiRequest";
import { useTranslation } from 'react-i18next';
// tslint:disable-next-line:no-var-requires
const styles = require('./index.scss');

const LoginPage: FC = () => {
    const errRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState('');
    const {isUserLoggedIn, setIsUserLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    const {t}=useTranslation()
    useEffect(() => {
        setErrorMessage('');
    }, [email, password])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await postAuthData({username: email, password}).then(() => {
            setIsUserLoggedIn(true);
            localStorage.setItem('auth', 'true');
        }).catch((err) => {
            setErrorMessage(err.toString())
        })
        // tslint:disable-next-line:no-console
        console.log('submit')
    }

    if (isUserLoggedIn) {
        history.push('/admin');
    }
    return (
        <div className={styles.login_page}>
            <p className={styles.login_title}>{t("login_title")}</p>
            <div className={styles.login_form}>
                <p className={styles.form_title}>{t("login")}</p>
                {errorMessage ?
                    <p ref={errRef} style={{
                        color: "red",
                        fontWeight: 500,
                        fontSize: "32px",
                        backgroundColor: 'white',
                        padding: '10px',
                        textAlign: 'center'
                    }}>{errorMessage}</p> : ''}
                <form onSubmit={handleLogin}>
                    <input
                        id='email'
                        name='email'
                        className={styles.form_input}
                        type='text'
                        placeholder={t('gmail_login')}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        id='password'
                        name='password'
                        className={styles.form_input}
                        type='password'
                        placeholder={t("gmail_password")}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className={styles.button}>
                        <Button type="submit" variant="contained" style={{backgroundColor: "orange"}}>{t("login")}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
