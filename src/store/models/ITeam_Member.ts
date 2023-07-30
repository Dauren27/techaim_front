export interface ITeam_Member {
    id: number;
    email: string;
    socialLinks: ISocialLinks;
    lang: string;
    firstName: string;
    lastName: string;
    profession: string;
    bio: string

}

interface ISocialLinks {
    facebook: string;
    twitter: string;
    linkedin: string;
    id: number;
}

export interface ITeam_Members {
    totalCount: number;
    list: Array<ITeam_Member>;
}
