import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import translation from "./translate";
import { FormControl, Select } from "@material-ui/core";
import { ReactComponent as CloseMenu } from "../../../../shared/icons/x.svg";
import { ReactComponent as MenuIcon } from "../../../../shared/icons/menu.svg";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../../../shared/icons/logo.png";
import arrow from "../../../../shared/icons/black-arrow.png";
import styles from "./index.module.scss";

const submenuItems = [
  { to: "/team", label: translation.en["Our team"] },
  { to: "/mentors", label: translation.en["Our mentors"] },
  { to: "/join/team", label: translation.en["Become part of the team"] },
  { to: "/reports", label: translation.en["Reports"] },
];

const Submenu = () => {
  const { t } = useTranslation();
  return (
    <ul className={styles.header_nav__submenu}>
      {submenuItems.map(({ to, label }) => (
        <li key={label} className={styles.header_nav__submenuitem}>
          <Link to={to}>{t(label)}</Link>
        </li>
      ))}
    </ul>
  );
};
const aboutPaths = ["/", "/join/team", "/mentors", "/team", "/reports"];

const menuItems = [
  { to: "/", label: translation.en["About us"], about: true },
  { to: "/services", label: translation.en.Services },
  { to: "/community", label: translation.en.Community },
  { to: "/projects", label: translation.en.Projects },
  { to: "/news", label: translation.en.News },
  { to: "/contact", label: translation.en.Contacts },
];

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const lang = "" + event.target.value;
    await i18n.changeLanguage(lang);
  };

  return (
    <header className={[styles.header].join(" ")}>
      <div className={styles.mobile_menu} onClick={handleClick}>
        {click ? (
          <CloseMenu className={styles.menu_icon} />
        ) : (
          <MenuIcon className={styles.menu_icon} />
        )}
      </div>
      <div className={styles.logo_nav}>
        <div className={styles.logo_container}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <ul
          className={
            click
              ? [styles.nav_options, styles.active].join(" ")
              : styles.nav_option
          }
        >
          {menuItems.map(({ to, label, about }) => {
            return about ? (
              <li
                key={label}
                className={`${styles.option} ${styles.about}`}
                onClick={closeMobileMenu}
              >
                <Link
                  to={to}
                  className={`${
                    aboutPaths.includes(pathname) && styles.active
                  }`}
                >
                  {t(label)}
                </Link>
                {/* <IoIosArrowDown className={styles.option__arrow}/> */}
                <Submenu />
              </li>
            ) : (
              <li
                key={label}
                onClick={closeMobileMenu}
                className={styles.option}
              >
                <Link
                  to={to}
                  className={`${styles.option} ${
                    to === pathname && styles.active
                  }`}
                >
                  {t(label)}
                </Link>
              </li>
            );
          })}
          <li>
            <FormControl className={styles.lang_form_control}>
              <Select
                className={styles.lang_selector}
                disableUnderline
                native
                value={i18n.language}
                onChange={handleLanguageChange}
                inputProps={{
                  name: "lang",
                  id: "lang-native-simple",
                }}
              >
                <option key={"en"} value={"en"}>
                  EN
                </option>
                <option key={"ru"} value={"ru"}>
                  RU
                </option>
                <option key={"kyr"} value={"kyr"}>
                  KG
                </option>
              </Select>
            </FormControl>
          </li>
          <li>
            {/* {isUserLoggedIn ? (
              <Button
                onClick={handleLogOut}
                variant="contained"
                style={{ backgroundColor: "orange", marginTop: "20px" }}
              >
                {t("Logout")}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={redirect}
                style={{ backgroundColor: "orange" }}
              >
                {t("Login")}
              </Button>
            )} */}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
