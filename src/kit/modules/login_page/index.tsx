import * as React from "react";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { Button } from "@material-ui/core";
import AuthContext from "../../../context/authContext";
import { useHistory } from "react-router-dom";
import { postAuthData } from "../../../api/axiosApiRequest";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import { useLoginMutation } from "../../../store/queryReducers/authApi";

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const { t } = useTranslation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ username: email, password });
  };
  const [login, { isSuccess, isLoading, isError }] = useLoginMutation();
  if (isUserLoggedIn) {
    history.push("/admin");
  }
  useEffect(() => {
    if (isSuccess) {
      history.push("/admin");
      setIsUserLoggedIn(true);
      localStorage.setItem("auth", "true");
    }
  }, [isSuccess]);
  return (
    <div className={styles.login_page}>
      <p className={styles.login_title}>{t("login_title")}</p>
      <div className={styles.login_form}>
        <p className={styles.form_title}>{t("login")}</p>
        <form onSubmit={handleLogin}>
          <input
            id="email"
            name="email"
            className={styles.form_input}
            type="text"
            placeholder={t("gmail_login")}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="password"
            name="password"
            className={styles.form_input}
            type="password"
            placeholder={t("gmail_password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.button}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "orange" }}
            >
              {t("login")}
            </Button>
            {isLoading && (
              <p
                style={{
                  textAlign: "center",
                  color: "#287ff1",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
              >
                Загрузка...
              </p>
            )}
            {isSuccess && (
              <p
                style={{
                  textAlign: "center",
                  color: "#0bc136",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
              >
                Вы успешно авторизовались
              </p>
            )}
            {isError && (
              <p
                style={{
                  textAlign: "center",
                  color: "#dd2626",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
              >
                Произошла ошибка
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
