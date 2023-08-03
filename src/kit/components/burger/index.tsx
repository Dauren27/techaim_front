import * as React from "react";
import { Link } from "react-router-dom";

const styles = require("./index.scss");
const common = require("../../../shared/styles/common.scss");
const logo = require("../../../shared/icons/logo.png");

const BurgerComponent = () => {
  const [isOpen, setOpenStatus] = React.useState(false);

  return (
    <div
      id={"burger_button"}
      data-attr={"burger_button"}
      className={styles.burger}
    >
      <div
        className={[styles.burger_button, isOpen ? styles.opened : ""].join(
          " "
        )}
        onClick={() => setOpenStatus(!isOpen)}
      >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

      <div className={styles.menu}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.header_logo} />
        </Link>
        <div className={styles.scrollWrap}>
          <ul className={styles.settingsList}>
            <li
              className={[
                styles.settingsList_top,
                styles.settingsList_item,
              ].join(" ")}
            >
              general
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/"
                className={[common.text, styles.header_nav_item].join(" ")}
              >
                Наша команда
              </Link>
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/"
                className={[common.text, styles.header_nav_item].join(" ")}
              >
                Наша Миссия
              </Link>
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/services"
                className={[
                  common.text,
                  styles.header_nav_item,
                  styles.active,
                ].join(" ")}
              >
                Услуги
              </Link>
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/community"
                className={[common.text, styles.header_nav_item].join(" ")}
              >
                Сообщество
              </Link>
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/"
                className={[common.text, styles.header_nav_item].join(" ")}
              >
                Проекты
              </Link>
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/"
                className={[common.text, styles.header_nav_item].join(" ")}
              >
                Блог
              </Link>
            </li>
            <li className={styles.settingsList_item}>
              <Link
                to="/contact"
                className={[common.text, styles.header_nav_item].join(" ")}
              >
                Контакты
              </Link>
            </li>
          </ul>

          <ul className={styles.settingsList}>
            <li
              className={[
                styles.settingsList_top,
                styles.settingsList_item,
              ].join(" ")}
            >
              more
            </li>
            <li className={styles.settingsList_item}>help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerComponent;
