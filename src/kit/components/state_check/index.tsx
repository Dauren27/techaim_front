import React from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

interface Props {
  pending: boolean;
  error: string;
  data: Array<any>;
}
const StateCheck = ({ pending, error, data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.check}>
      {pending ? (
        <p>{t("Loading...")}</p>
      ) : error ? (
        <p>{t(error)}</p>
      ) : (
        data.length === 0 && <p>{t("No data found")}</p>
      )}
    </div>
  );
};

export default StateCheck;
