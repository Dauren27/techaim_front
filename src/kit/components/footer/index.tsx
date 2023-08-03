import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import translate from "./translate";

import logo from "../../../shared/icons/logo.svg";
import fb from "../../../shared/icons/fb_icon_no_border.svg";
import instagram from "../../../shared/icons/instagram_icon_no_border.svg";
import linkedin from "../../../shared/icons/linkedin_icon_no_border.svg";
import twitter from "../../../shared/icons/twitter_icon_no_border.svg";

const styles = require("./index.scss");

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={[styles.footer_wrapper].join(" ")}>
      <div className={styles.left_side}>
        <Link className={styles.logo_place} to="/">
          <img src={logo} alt="logo" className={styles.footer_logo} />
        </Link>
      </div>
      <div className={styles.right_side}>
        <span className={styles.not_link}>{t("Follow us")}:</span>
        <div className={styles.icons_wrapper}>
          <Link
            to={{ pathname: "https://www.instagram.com/techaim.kg" }}
            target="_blank"
          >
            <img
              src={instagram}
              alt="instagram"
              className={styles.social_network_icon}
            />
          </Link>
          <Link
            to={{ pathname: "https://twitter.com/techaimkg" }}
            target="_blank"
          >
            <img
              src={twitter}
              alt="twitter"
              className={styles.social_network_icon}
            />
          </Link>
          <Link
            to={{ pathname: "https://kg.linkedin.com/company/techaim" }}
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className={styles.social_network_icon}
            />
          </Link>
          <Link
            to={{ pathname: "https://www.facebook.com/techaim.kg" }}
            target="_blank"
          >
            <img src={fb} alt="fb" className={styles.social_network_icon} />
          </Link>
        </div>
      </div>

      <span className={styles.developed_in}>{t("Developed in 2022")}</span>
    </footer>
  );
}
