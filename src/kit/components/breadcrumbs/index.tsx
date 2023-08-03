import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const styles = require("./index.scss");
const breadcrumbIcon = require("../../../shared/icons/icon-breadcrumb.svg");

interface Props {
  page_title: string;
  page_title2?: any;
  page_url: string;
}

export default function Breadcrumbs(props: Props) {
  const { t } = useTranslation();
  return (
    <div className={[styles.breadcrumbs].join(" ")}>
      <div className={[styles.breadcrumbs_item].join(" ")}>
        <Link to="/">{t("to_home")}</Link>
        <img src={breadcrumbIcon} alt="" />
      </div>
      <div className={[styles.breadcrumbs_item].join(" ")}>
        <Link to={props.page_url}>{props.page_title}</Link>
        <img src={breadcrumbIcon} alt="" />
      </div>
      <div className={[styles.breadcrumbs_item].join(" ")}>
        <Link to={props.page_url}>{props.page_title2}</Link>
      </div>
    </div>
  );
}
