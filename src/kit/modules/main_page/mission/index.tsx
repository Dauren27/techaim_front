import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

export default function MainPageMission() {
  const { t } = useTranslation();

  return (
    <section id="t1" className={styles.mission}>
      <span className={styles.title}>{t("mission")}</span>
    </section>
  );
}
