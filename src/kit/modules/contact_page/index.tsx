import * as React from "react";
import SectionHeader from "../../components/headers/section-header";
import Breadcrumbs from "../../components/breadcrumbs";
import ContactForm from "./contact_form";
import ContactMap from "./contact_map";
import { useTranslation } from "react-i18next";
import phone_icon from "../../../shared/icons/icon-phone-grey.svg";
import mail_icon from "../../../shared/icons/icon-mail-grey.svg";
import fb_icon from "../../../shared/icons/icon-fb-grey.svg";
import twitter_icon from "../../../shared/icons/x.png";
import instagram_icon from "../../../shared/icons/icon-instagram-grey.svg";
import linkedin_icon from "../../../shared/icons/icon-linkedin-grey.svg";
import tiktok_icon from "../../../shared/icons/TikTok_Icon_Black.png";
import styles from "./index.module.scss";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <Breadcrumbs page_url="/contact" page_title={t("contact_title")} />
      </section>
      <SectionHeader title={t("contact_title")} underline />
      <div className={[styles.container].join(" ")}>
        <div className={[styles.contacts].join(" ")}>
          <div className={[styles.contacts_info].join(" ")}>
            <div className={[styles.address].join(" ")}>
              <h2 className={[styles.contact_title].join(" ")}>
                {t("contact_adress")}
              </h2>
              <div className={[styles.contact_wrapper].join(" ")}>
                <p>{t("contact_adress_name")}</p>
              </div>
            </div>
            <div className={[styles.phone].join(" ")}>
              <h2 className={[styles.contact_title].join(" ")}>{t("tel")}</h2>
              <div className={[styles.contact_wrapper].join(" ")}>
                <img src={phone_icon} alt="phone_icon" />
                <p>+996 701 19 11 91</p>
              </div>
            </div>
            <div className={[styles.online_service].join(" ")}>
              <h2 className={[styles.contact_title].join(" ")}>
                {t("online_service")}
              </h2>
              <div className={[styles.contact_wrapper].join(" ")}>
                <img src={mail_icon} alt="mail_icon" />
                <p>techaim@techaim.org</p>
              </div>
            </div>
            <h2 className={[styles.contact_title].join(" ")}>
              {t("offical_social_link")}
            </h2>
            <div className={[styles.social_media].join(" ")}>
              <a
                href="https://www.instagram.com/techaim.kg"
                className={[styles.social_link].join(" ")}
                target="_blank"
                >
                <img src={instagram_icon} alt="icon-instagram" />
              </a>
              <a
                href="https://www.facebook.com/techaim.kg"
                className={[styles.social_link].join(" ")}
                target="_blank"
              >
                <img src={fb_icon} alt="icon-fb" />
              </a>
              <a
                href="https://kg.linkedin.com/company/techaim"
                className={[styles.social_link].join(" ")}
                target="_blank"
              >
                <img src={linkedin_icon} alt="icon-linkedin" />
              </a>
              <a
                href="https://twitter.com/techaimkg"
                className={[styles.social_link].join(" ")}
                target="_blank"
              >
                <img src={twitter_icon} alt="icon-twitter" />
              </a>
              <a
                href="https://vt.tiktok.com/ZSRYpRCNY/"
                className={[styles.social_link].join(" ")}
                target="_blank"
              >
                <img src={tiktok_icon} alt="icon-tiktok" />
              </a>
            </div>
          </div>
          <div className={[styles.form_wrapper].join("")}>
            <ContactForm />
          </div>
        </div>
        <div>
          <ContactMap />
        </div>
      </div>
    </>
  );
}
