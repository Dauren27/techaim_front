import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../../api/ApiRequest";
// import ContentLoader from 'react-content-loader';

const styles = require("./index.scss");
const avatarIcon = require("../../../shared/icons/person.svg");
const linkedinIcon = require("../../../shared/icons/icon-linkedin-grey.svg");
const fbIcon = require("../../../shared/icons/icon-fb-grey.svg");

type CardType = "team" | "mentor";
type CardSize = "mini" | "normal";
interface Props {
  id: number;
  type: CardType;
  firstName: string;
  lastName: string;
  profession?: string;
  bio?: string;
  email: string;
  socialLinks?: ISocialLinks;
  size?: CardSize;
}

interface ISocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  id: number;
}

export default function TeamCard(props: Props) {
  const team_member = props;

  console.log(team_member);
  const facebookLink =
    team_member.socialLinks && team_member.socialLinks.facebook ? (
      <Link
        to={{ pathname: team_member.socialLinks.facebook }}
        target="_blanck"
      >
        <img src={fbIcon} alt="fb_icon" />
      </Link>
    ) : null;

  const linkedinLink =
    team_member.socialLinks && team_member.socialLinks.linkedin ? (
      <Link to={{ pathname: team_member.socialLinks.linkedin }} target="_blank">
        <img src={linkedinIcon} alt="linkedin_icon" />
      </Link>
    ) : null;

  return (
    <div
      className={[
        styles.card,
        props.type === "mentor" ? styles.mentor : styles.team,
        props.size === "mini" ? styles.mini : "",
      ].join(" ")}
    >
      <>
        <div className={[styles.card_avatar].join("")}>
          <img
            src={
              `${path}/public-api/team_member/${team_member.id}/photo` ||
              avatarIcon
            }
            alt="avatar"
          />
        </div>
        <div className={[styles.card_info].join("")}>
          <div>
            <div className={[styles.card_info_header].join("")}>
              <h2>
                {team_member.firstName} {team_member.lastName}
              </h2>
              <span>{team_member.profession}</span>
            </div>
            {props.size === "mini" || !props.bio ? null : (
              <div className={[styles.card_info_bio].join("")}>
                <p>{team_member.bio}</p>
              </div>
            )}
          </div>
          {props.size === "mini" || !props.socialLinks ? null : (
            <div className={[styles.card_info_social].join("")}>
              {facebookLink}
              {linkedinLink}
            </div>
          )}
        </div>
      </>
    </div>
  );
}
