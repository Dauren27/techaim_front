import React from "react";
import Button from "../../../components/buttons/button";
import { Link } from "react-router-dom";
import { path } from "../../../../api/ApiRequest";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

interface Props {
  id: number;
  lang: string;
  beginDate: string;
  endDate: string;
  name: string;
  goal: string;
  result: string;
  photoIds: number;
}

export default function ProjectCard(props: Props) {
  const projects = props;
  const { t } = useTranslation();
  return (
    <Link to={`/projects/${props.id}`}>
      <div className={styles.card}>
        <img
          className={styles.card_img}
          src={`${path}/public-api/project/${projects.id}/cover_photo`}
        ></img>
        <div className={styles.card_content}>
          <h4 className={styles.card_title}>{props.name}</h4>
          <p className={styles.card_description}>{projects.goal}</p>
          <Button
            className={styles.card_button}
            
          >
            {t("projects_button")}
          </Button>
        </div>
      </div>
    </Link>
  );
}
