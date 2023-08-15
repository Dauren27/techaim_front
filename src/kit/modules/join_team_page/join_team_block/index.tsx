import React from "react";
import ButtonComponent from "../../../components/buttons/button";
import TeamMember from "../../../../models/TeamMember";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

interface Props {
  orientation: "right" | "left";
  title: string;
  text: string;
  buttons?: Array<any>;
  teamMember: TeamMember.JoinTeamDto;
}

export default function JoinTeamBlock(props: Props) {
  const { t } = useTranslation();

  return (
    <div
      className={[styles.join_team_block, styles[props.orientation]].join(" ")}
    >
      <div className={styles.text_block}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.text}>{props.text}</p>
        <div className={styles.button}>
          {props.buttons
            ? props.buttons.map((el, i) => (
                <a key={i} href={el.href}>
                  <ButtonComponent
                    color="yellow"
                    
                  >
                    {t("Apply")}
                  </ButtonComponent>
                </a>
              ))
            : null}
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.media_block}>
        <div className={styles.avatar_wrapper}>
          <img alt={"team_member_avatar"} src={props.teamMember.avatar} />
        </div>
        <div className={styles.avatar_block}>
          <p className={styles.bio}>{props.teamMember.bio}</p>
          <div className={styles.name_block}>
            <p>{`${props.teamMember.fullName}`}</p>
            <p className={[styles.text, styles.member_job_position].join(" ")}>
              {props.teamMember.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
