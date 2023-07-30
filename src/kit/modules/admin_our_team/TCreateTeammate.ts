export type TTeamMember = {
    email: string;
    socialLinks: TSocialLinks;
    createUpdateTeamMemberTrDtos: TCreateUpdateTeamMemberTrDtos[];
}
export type TCreateUpdateTeamMemberTrDtos = {
    lang: string,
    firstName: string,
    lastName: string,
    bio: string,
    profession: string
}

export type TSocialLinks = {
    facebook: string;
    linkedIn: string;
}
export type TTeamList = {
    id: number;
    email: string;
    socialLinks: TSocialLinks;
    lang: string;
    firstName: string;
    lastName: string;
    profession: string;
    bio: string;
}

export type TGetTeam = {
    totalcount: number;
    list: TTeamList[];
}