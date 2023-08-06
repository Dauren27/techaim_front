import * as React from "react";
import Breadcrumbs from "../../components/breadcrumbs";
import SectionHeader from "../../components/headers/section-header";
import JoinTeamBlock from "./join_team_block";
import TeamMember from "../../../models/TeamMember";
import Underline from "../../components/underline";
import translate from "./translate";
import { useTranslation } from "react-i18next";

import quote1_avatar from "../../../shared/images/team_members/aitirgan_zulpukarova_avatar.png";
import quote2_avatar from "../../../shared/images/join_team-page/Asel.png";
import volonter from "../../../shared/images/join_team-page/volonter.jpg";

import styles from "./index.module.scss";

const JoinTeamPage = () => {
  const { t } = useTranslation();

  const firstBlockMember = new TeamMember.JoinTeamDto();
  firstBlockMember.bio = t("quote1_info");
  firstBlockMember.firstName = t("quote1_author");
  firstBlockMember.title = t("quote1_position");
  firstBlockMember.avatar = quote1_avatar;

  const secondBlockMember = new TeamMember.JoinTeamDto();
  secondBlockMember.bio = t("quote2_info");
  secondBlockMember.firstName = t("quote2_author");
  secondBlockMember.title = t("quote2_position");
  secondBlockMember.avatar = quote2_avatar;

  const thirdBlockMember = new TeamMember.JoinTeamDto();
  thirdBlockMember.bio = t("quote3_info");
  thirdBlockMember.firstName = t("quote3_author");
  thirdBlockMember.title = t("quote3_position");
  thirdBlockMember.avatar = volonter;

  return (
    <>
      <section>
        <Breadcrumbs
          page_url="/join/team"
          page_title={t(translate.en["Join the team"])}
        />
      </section>
      <SectionHeader title={t(translate.en["Join the team"])} underline />
      <div className={styles.block1}>
        <JoinTeamBlock
          orientation={"left"}
          title={t("title1")}
          text={t("info1")}
          buttons={[{}]}
          teamMember={firstBlockMember}
        />
      </div>
      <Underline />
      <div className={styles.block2}>
        <JoinTeamBlock
          orientation={"right"}
          title={t("title2")}
          text={t("info2")}
          buttons={[
            {
              href: "https://docs.google.com/forms/d/1Ho2GWbf6VZmzlQozS__rxFwx9t8MZNVlGu7PON56kLs/edit",
            },
          ]}
          teamMember={secondBlockMember}
        />
      </div>
      <Underline />
      <div className={styles.block3}>
        <JoinTeamBlock
          orientation={"left"}
          title={t("title3")}
          text={t("info3")}
          buttons={[
            {
              href: "https://docs.google.com/forms/d/1O_ahB9QaIZ3YnHV8djIa1q0i1y8AwFcyoA4t1pvUJUk/edit",
            },
          ]}
          teamMember={thirdBlockMember}
        />
      </div>
    </>
  );
};

export default JoinTeamPage;
