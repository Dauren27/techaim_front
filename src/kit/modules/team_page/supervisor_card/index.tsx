import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { path } from "../../../../api/ApiRequest";

import styles from "./index.module.scss";
import avatarIcon from "../../../../shared/icons/person.svg";

interface Props {
  id: number;
  lang?: string;
  firstName: string;
  lastName: string;
  company?: string;
  bio?: string;
}

export default function SupervisorCard(props: Props) {
  const [isLoading] = useState(false);
  const supervisor_card = props;

  return (
    <div className={[styles.card].join("")}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={"auto"}
          height={"100%"}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        ></ContentLoader>
      ) : (
        <>
          <div className={[styles.card_avatar].join("")}>
            <img
              src={
                `${path}/public-api/supervisor/${supervisor_card.id}/photo` ||
                avatarIcon
              }
              alt=""
            />
          </div>
          <div className={[styles.card_info].join("")}>
            <div className={[styles.card_info_header].join("")}>
              <h2>
                {supervisor_card.firstName} {supervisor_card.lastName}
              </h2>
              <span>{supervisor_card.company}</span>
            </div>
            <div className={[styles.card_info_bio].join("")}>
              <p>{supervisor_card.bio}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
