import {TCreateUpdateTeamMemberTrDtos} from "../TCreateTeammate";

type TSocialLinks = {
    facebook: string;
    linkedin: string;
    twitter: string;
}

export type TEditTeam = {
    email: string;
    socialLinks: TSocialLinks;
    createUpdateTeamMemberTrDtos: TCreateUpdateTeamMemberTrDtos[]
}

export type TGetTeamById = {
    email: string;
    socialLinks: TSocialLinks;
    lang: string,
    firstName: string,
    lastName: string,
    bio: string,
    profession: string
}