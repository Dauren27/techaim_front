export interface IMentor {
    id: number;
    company: string;
    socialLink: ISocialLink;
    mentorTrDtos: IMentorTrDtos;
    mentorSkillDtos: IMentorSkillDtos[];

}

interface ISocialLink {
    facebook: string;
    twitter: string;
    linkedIn: string;
}

interface IMentorTrDtos {
    lang: string;
    firstName: string;
    lastName: string;
    position: string;
    cometences: string;
    bio: string
}

interface IMentorSkillDtos {
    id: number;
    name: string
}


export interface IMentors {
    id: number;
    totalCount: number;
    list: IMentor[];
}



